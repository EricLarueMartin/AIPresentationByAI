"""Find animal-to-plant reversals in Princeton WordNet 3.0.

Download https://wordnetcode.princeton.edu/3.0/WNdb-3.0.tar.gz and unpack
the archive. Run: python wordnet_reversals.py path/to/data.noun
"""

import argparse
import hashlib
import re
from pathlib import Path


def words_by_category(data):
    # WordNet lexicographer files 05 and 20 contain animal and plant nouns.
    words = {"05": set(), "20": set()}
    for line in data.decode("ascii").splitlines():
        if not re.match(r"^[0-9]{8} ", line):
            continue
        fields = line.partition("|")[0].split()
        category = fields[1]
        if category in words:
            word_count = int(fields[3], 16)
            for lemma in fields[4 : 4 + 2 * word_count : 2]:
                spelling = lemma.lower()
                if re.fullmatch("[a-z]+", spelling):
                    words[category].add(spelling)
    return words["05"], words["20"]


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("noun_file", type=Path)
    data = parser.parse_args().noun_file.read_bytes()
    expected = "489f145e0f68877c0be5bd0eb4117adaaac52f38f6204eb8d85dbe2158b614cc"
    if hashlib.sha256(data).hexdigest() != expected:
        parser.error("This example requires the original WordNet 3.0 data.noun.")
    animals, plants = words_by_category(data)
    print(f"{len(animals)} animal spellings, {len(plants)} plant spellings")
    for animal in sorted(animals):
        if animal[::-1] in plants:
            print(animal, animal[::-1])
