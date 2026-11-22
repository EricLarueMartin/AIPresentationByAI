/* Getting started: one illustrative experiment, several ways to work. */
window.STARTER_GUIDE = {
  "lessons": [
    {
      "id": "start-chat",
      "section": "Try a small task",
      "title": "Try your first browser chat",
      "lead": "This AI-assisted tutorial follows five illustrative cooling measurements from a chat request to files and calculations you can check yourself.",
      "points": [],
      "kind": "prose",
      "visual": "tutorial",
      "sampleFile": true,
      "reading": [
        "Open a browser chat and paste the sample request, or attach cooling.csv if the interface accepts files. These are invented classroom measurements, not results from a physical experiment. The first two readings fall from 80 °C to 65 °C over 60 seconds. Their signed average rate is (65 − 80) / 60 = −0.25 °C/s, equivalent to −15 °C/min. The negative sign means the temperature decreased. This small calculation gives you an answer to check before trusting a longer explanation.",
        "A chat reply may contain prose, code or an actual computed result. Look for which occurred. If the assistant shows a calculation tool, inspect its input and output. If it merely writes a formula, you can still verify the arithmetic yourself. A browser interface may have file tools or a code runner, but its appearance does not establish those capabilities. The exercise also works without an AI subscription: read the table, calculate the difference and compare it with the worked answer."
      ],
      "discussion": [
        "What visible evidence would show that the assistant used the supplied numbers rather than describing cooling in general?"
      ],
      "notes": "Introduce the illustrative dataset and identify the first interval. Explain the signed rate before discussing the AI response. The exercise is a baseline with an independently checkable answer, not a benchmark of any model. This tutorial was drafted with AI assistance.",
      "optional": "An optional starting point is ChatGPT’s data-analysis interface, linked in Sources. Availability of CSV uploads and analysis depends on the model, plan and settings. The five readings do not establish a physical cooling law, measurement uncertainty or a safe temperature. Later lessons distinguish describing these values from fitting a model or acting on a real system.",
      "sources": [
        "tutorialChatStart",
        "prompting",
        "tutorialTools"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "Paste this into a chat, or solve it directly",
        "text": "These are illustrative cooling measurements. Calculate the average temperature change per second over the first interval. Show the two readings, the elapsed time and the signed calculation. Keep the units.\n\ntime_s,temperature_C\n0,80\n60,65\n120,54\n180,46\n240,40",
        "check": "The first interval is 60 s. The change is −15 °C. The signed rate is −0.25 °C/s, or −15 °C/min."
      }
    },
    {
      "id": "start-workspace",
      "section": "Choose how to work",
      "title": "Open a workspace and inspect its files",
      "lead": "A workspace assistant can help produce a reusable analysis when it has access to a selected folder and an execution tool.",
      "points": [
        "A plan names proposed files. A completed task supplies the files and the results of running them."
      ],
      "kind": "prose",
      "visual": "tutorial",
      "sampleFile": true,
      "reading": [
        "Download cooling.csv into a new working folder and open that folder in a workspace application. Ask the assistant to create an analysis script, a temperature-versus-time plot and a short report. Giving it this folder supplies context and a place for outputs. It does not automatically grant access to every file, a command runner or the network. Check the application’s actual tools and scope. If it cannot execute code, ask it to say so and provide the script for you to run.",
        "Inspect the resulting files rather than relying on the completion message. The plot should have five points with seconds on the horizontal axis and degrees Celsius on the vertical axis. The report should show the first-interval rate and identify the data as illustrative. Rerunning the script should recreate the outputs from cooling.csv. An image of a plausible curve is not enough if its points do not correspond to those rows. This is the same scientific question as the chat exercise, with durable outputs that can be checked and reused."
      ],
      "discussion": [
        "If the assistant says “done” but supplies only filenames, what would you inspect next?"
      ],
      "notes": "Contrast an answer in a conversation with actual files produced by a tool. In a live practice session, allow time to open the CSV, plot and report. If the selected assistant lacks execution, keep that limitation visible and use the next lesson’s standalone Python check.",
      "optional": "VS Code’s agent-first development tutorial, linked in Sources, is one optional starting point for an editor workspace. Follow its current setup instructions and inspect the tools enabled for the session. Keep the original data unchanged. Generated scripts, plots and reports are derived artifacts. If a tool proposes edits outside the working folder, compare that scope with what the task actually requires.",
      "sources": [
        "tutorialWorkspaceStart",
        "agents",
        "tutorialShell",
        "tutorialTools"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "A concrete workspace request",
        "text": "Use cooling.csv in this folder. Create analyze_cooling.py, cooling_plot.svg and summary.md. Plot all five rows with units and calculate the first-interval signed rate. Preserve cooling.csv. Run the script if a runner is available, report its actual output and identify the files created. If execution is unavailable, state that the script has not been run.",
        "check": "Open the actual artifacts. Check five plotted points, endpoints (0 s, 80 °C) and (240 s, 40 °C), and a first-interval rate of −0.25 °C/s."
      }
    },
    {
      "id": "start-cli",
      "section": "Choose how to work",
      "title": "Run the same check from a terminal",
      "lead": "The command line makes the input, program and output explicit. This calculation uses ordinary Python, so no model or paid service is needed.",
      "points": [
        "Save the code as check_cooling.py beside cooling.csv.",
        "With Python 3 installed, open a terminal in that folder and run python check_cooling.py."
      ],
      "kind": "steps",
      "visual": "tutorial",
      "sampleFile": true,
      "reading": [
        "A terminal is a text interface for launching commands. An AI command-line assistant can propose or execute commands when configured to do so, but a terminal itself is not an AI model. Here you can run the check directly. The program uses Python’s standard csv module, reads the first two rows and divides their temperature difference by their time difference. No additional Python package is needed. Some systems use python3 or py instead of python to launch Python 3.",
        "The printed value is evidence of this program’s execution on the file it opened. Check that the terminal’s working folder contains the intended cooling.csv. If the file cannot be found, locate it rather than ask for a different scientific explanation. If you later ask a CLI assistant to automate this step, keep the command, its working folder and its actual output together. Shell access can be restricted or hosted remotely, so the word “CLI” does not establish where the computation ran or which machine it could change."
      ],
      "discussion": [
        "What would distinguish a file-location problem from an error in the rate calculation?"
      ],
      "notes": "This is the subscription-free central exercise. Explain that Python must already be installed and that both files belong in the same working folder. A successful run prints the expected line. A code listing by itself is not an execution receipt.",
      "optional": "Claude Code’s official quickstart, linked in Sources, is one optional route to an AI terminal session and requires supported account access. The standalone Python exercise does not require it. This deliberately short script assumes the displayed column names, at least two numeric rows and a nonzero first time interval. A reusable program should detect missing columns, malformed values and repeated timestamps before calculating.",
      "sources": [
        "tutorialCLIStart",
        "tutorialPythonCSV",
        "tutorialShell"
      ],
      "evidence": "Illustrative practice",
      "agentExample": {
        "label": "Inside an AI CLI session already opened in the working folder",
        "text": "Read cooling.csv from this folder. Calculate the signed temperature rate between its first two rows using Python. Show the command you actually run and its output. Do not modify the CSV. If you cannot execute commands in this session, give me the code and say it has not been run.",
        "check": "Compare the executed output with the standalone baseline: −0.25 °C/s. A suggested command without its execution result is not a completed run."
      },
      "example": {
        "label": "Save as check_cooling.py, then run python check_cooling.py",
        "text": "import csv\n\nwith open(\"cooling.csv\", newline=\"\", encoding=\"utf-8\") as source:\n    rows = list(csv.DictReader(source))\na, b = rows[:2]\ndelta_t = float(b[\"time_s\"]) - float(a[\"time_s\"])\ndelta_T = float(b[\"temperature_C\"]) - float(a[\"temperature_C\"])\nprint(f\"First interval: {delta_T / delta_t:.2f} C/s\")",
        "check": "Expected terminal output: First interval: -0.25 C/s. The calculation is local and does not call an AI model."
      }
    },
    {
      "id": "start-alternatives",
      "section": "Choose how to work",
      "title": "Choose an interface for the next step",
      "lead": "The same cooling task can sit in a chat, a workspace, a terminal, a notebook or an application. The interface and the connected tools are separate choices.",
      "points": [],
      "kind": "prose",
      "visual": "tutorial-chooser",
      "sampleFile": true,
      "reading": [
        "Try the chooser with the same measurements. A chat is convenient for asking and revising a question. A workspace organizes the input and generated files. A terminal makes a command repeatable. A notebook places explanatory text, executable code cells and results together, which is useful when developing an analysis. Its code runs through a kernel, a separate execution process. Restarting that kernel and running the cells in order helps expose results that depended on forgotten earlier steps.",
        "An API is a defined way for one program to use another service or component. An application could submit this task, receive a tool request, run its own calculation and return the result. An embedded system might collect temperature readings and invoke a narrow local model without a chat window. None of these interfaces alone decides whether data stays local or whether files can be changed. Choose the form that makes the next useful result easiest to inspect. The chooser’s calculation runs in this page and makes no model call."
      ],
      "discussion": [
        "Which interface would you choose for one question, and which for repeating this analysis every day?"
      ],
      "notes": "Use the chooser as a discovery exercise. Change the interface while keeping the data and arithmetic fixed. Separate the visible interface, the model’s role and the available execution tools. Notebook, API and embedded workflows are alternatives, not levels of intelligence.",
      "optional": "For an API workflow, decide which component validates input, executes a tool and saves the result. A model-generated tool request does not execute itself. For notebooks, save the inputs and rerun from a clean kernel before treating the displayed output as reproducible.",
      "sources": [
        "tutorialNotebooks",
        "tutorialKernels",
        "tutorialAPI",
        "tutorialTools",
        "tutorialMCP"
      ],
      "evidence": "Illustrative practice"
    },
    {
      "id": "start-brief",
      "section": "Improve the request",
      "title": "Specify what a finished analysis should contain",
      "lead": "A useful request tells the assistant what someone should be able to inspect when the work is finished.",
      "points": [
        "“Analyze the cooling data” leaves the purpose and output open.",
        "“Create a labeled plot and explain the first-interval rate to a new lab partner” makes the intended result concrete."
      ],
      "kind": "list",
      "visual": "tutorial",
      "reading": [
        "The short request “analyze these data” could lead to a summary, a plot, a fitted curve or an essay about heat transfer. That ambiguity is not solved by adding flattering language. Specify the result you need and the reader who will use it. For the cooling task, ask for a plot of the supplied values, a worked rate calculation and an explanation for someone joining the experiment. Preserve seconds and degrees Celsius. State that the numbers are illustrative and that no measurement uncertainties were supplied.",
        "Leave implementation choices open when they do not affect the scientific requirement. The assistant can propose a plotting library or a report layout. Specify a method when reproducing that method is the task. A concise prompt includes the information that changes correctness and omits repetition. Compare two versions of the request on the same data. Look at whether their outputs contain the promised artifacts and explicit assumptions, rather than judging which response sounds more polished."
      ],
      "discussion": [
        "What could be removed from the example brief without changing the intended result?",
        "Which missing detail would change what counts as a correct answer?"
      ],
      "notes": "Invite participants to revise “analyze these data” for a real recipient. Compare the resulting output with the brief. The aim is a clear contract, not a secret prompting phrase or a claim that more words improve every answer.",
      "optional": "If reproducing an established analysis, provide its model and weighting rule. If exploring the data, let the assistant propose methods and explain their assumptions before treating one as the required method.",
      "sources": [
        "prompting"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "A brief for a new lab partner",
        "text": "Use the five rows in cooling.csv. Produce a plot labeled in seconds and degrees Celsius, plus a short explanation for a new lab partner. Show the first-interval signed rate with substituted numbers. Preserve the input data. These values are illustrative and have no supplied measurement uncertainties. Do not present a fitted physical law as an established result.",
        "check": "The plot, worked calculation and explanation should all refer to the same five readings. A generic description of cooling does not complete this request."
      }
    },
    {
      "id": "start-check",
      "section": "Improve the request",
      "title": "Inspect the result at two scales",
      "lead": "Check one exact calculation, then check whether the full output tells the same story as the data.",
      "points": [],
      "kind": "prose",
      "visual": "tutorial",
      "sampleFile": true,
      "reading": [
        "First check the arithmetic at a point where you know the answer. The initial temperature change is −15 °C over 60 s, so the signed rate is −0.25 °C/s. Then zoom out. The complete plot should contain five measurements, begin at 80 °C and end at 40 °C after 240 s. The temperatures fall at each step, but the falls become smaller. A plot with swapped axes, missing points or an unexplained smooth line can look convincing while answering a different question.",
        "The first-interval rate is not the average over the full record. Across all four minutes, the change is −40 °C, giving −40/240 ≈ −0.167 °C/s, or −10 °C/min. Neither value is an instantaneous derivative. These distinctions help assess a response that uses the vague phrase “cooling rate.” Fitting a physical model would introduce further choices, including the model form and how measurement errors are treated. The table alone does not establish those assumptions."
      ],
      "discussion": [
        "If a report says only “the cooling rate is −10 °C/min,” what clarification would make the statement checkable?"
      ],
      "notes": "Use the two different interval rates to show why a plausible number is not sufficient. Each is correct for its stated interval. In a plot review, point to the actual endpoints and inspect the units before discussing a model.",
      "optional": "A residual is an observed value minus a model prediction at the same input. Residuals help examine a proposed fit, but a visually smooth curve is not evidence that the physical model is correct. The main guide’s fitting example develops this further.",
      "sources": [
        "statisticalFit",
        "curveFit"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "Two correct rates answer different questions",
        "text": "First interval, 0–60 s:\n(65 − 80) / (60 − 0) = −0.25 °C/s = −15 °C/min\n\nWhole record, 0–240 s:\n(40 − 80) / (240 − 0) ≈ −0.167 °C/s = −10 °C/min",
        "check": "Match each reported rate to its start time, end time and units. Do not substitute the whole-record rate for the requested first interval."
      }
    },
    {
      "id": "start-correct",
      "section": "Improve the request",
      "title": "Correct the assumption, then check the repair",
      "lead": "Suppose a draft reports −15 °C/s. The useful correction identifies the missing time conversion and asks for the affected outputs to be recomputed.",
      "points": [],
      "kind": "prose",
      "visual": "tutorial",
      "reading": [
        "The sample incorrect draft is an invented teaching example, not a recorded failure by an AI. It divides the temperature change by one minute and labels the result per second. A concrete correction says that the first interval is 60 seconds, keeps the same two readings and requests the signed rate in both units. That is more useful than “wrong, try again,” because it identifies the assumption that changed the answer.",
        "Inspect the revised computation and the generated report. A repair may change the explanation while leaving a stale value in a plot annotation or saved file. The corrected rate is −0.25 °C/s, equivalent to −15 °C/min. If a script produced the report, rerun it and inspect that output too. Acknowledging an error is not the same as updating the artifacts. Once the repair is verified, carry the unit rule into the current task brief so it survives the next handoff."
      ],
      "discussion": [
        "Which outputs could still contain the old value after the assistant gives a correct reply?"
      ],
      "notes": "Keep the invented error clearly labeled. The exercise illustrates corrective feedback and checking the resulting artifacts, not the prevalence of any model failure. It connects a unit mistake to a small repeatable test.",
      "optional": "A reusable regression test can check that the first-interval result on the original CSV is numerically close to −0.25 °C/s. This tests a specific calculation, not the general reliability of the assistant.",
      "sources": [
        "prompting",
        "evals"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "Illustrative correction exchange",
        "text": "Invented draft: “The first-interval rate is −15 °C/s.”\n\nCorrection: “The interval from 0 to 60 is measured in seconds. Keep the readings 80 °C and 65 °C. Divide their difference by 60 s, show the rate per second and per minute, and update any affected report values.”",
        "check": "The repaired result is −0.25 °C/s = −15 °C/min. Check the saved report as well as the reply."
      }
    },
    {
      "id": "start-media",
      "section": "Choose the evidence",
      "title": "Choose a tool for text, images, speech or video",
      "lead": "When measurements arrive as an image, speech or video, verify the extracted values before asking for the numerical conclusion.",
      "points": [
        "Reading an existing image or video is different from generating a new one.",
        "Transcribing speech, answering in speech and producing spoken audio are different workflows."
      ],
      "kind": "list",
      "visual": "tutorial",
      "reading": [
        "Suppose the same cooling readings are written on paper. A photograph adds a recognition step before the calculation. Ask for a transcription into the two CSV columns, then compare each value and unit with the original image. Optical character recognition, or OCR, extracts visible text. Interpreting a plot or experimental scene goes beyond that transcription. Small labels and ambiguous marks can matter. Use the verified numerical table for the calculation instead of estimating exact values from the appearance of a graph.",
        "You can also read the public example aloud and compare a speech-to-text transcript with the intended words, especially “sixty,” “sixteen” and the units. For video, identify the relevant times and inspect the frames used as evidence. Do not assume every frame was examined. Supported media and output formats depend on the model and tools. Generating an illustration or a video of cooling is a creative output, not a measurement of this experiment. Camera or microphone access is another permission, separate from the model’s ability to interpret submitted media."
      ],
      "discussion": [
        "Which part of the workflow would you check first if a photographed table produced the wrong rate?"
      ],
      "notes": "If practicing media input, use the public classroom numbers rather than private recordings. A printed or handwritten copy of the table is enough. Participants without a supported media interface can inspect a deliberately ambiguous transcription and explain which source value must be checked.",
      "optional": "Speech-to-speech systems may connect audio input directly to spoken output, while other workflows transcribe first and synthesize speech later. Neither arrangement guarantees an accurate numerical transcript. Keep the verified table as the analysis input.",
      "sources": [
        "tutorialVision",
        "tutorialAudio",
        "tutorialVideo",
        "tutorialMediaAccess",
        "tutorialVideoGeneration"
      ],
      "evidence": "Illustrative practice",
      "mediaRoutes": [
        {
          "input": "Text or CSV",
          "output": "A table and explanation",
          "use": "Using the pasted cooling.csv values, show the first two readings and calculate their signed temperature rate. Explain the negative sign in one sentence.",
          "check": "Expect (0 s, 80 °C), (60 s, 65 °C) and −0.25 °C/s. A text answer can be checked directly against these values."
        },
        {
          "input": "A photograph of the table",
          "output": "Verified CSV",
          "use": "Transcribe this supplied photograph into time_s and temperature_C columns. Preserve the visible numbers and units. Mark unreadable entries instead of guessing, and show the table before doing the calculation.",
          "check": "For a photograph of the classroom table, compare all five rows with the original: (0,80), (60,65), (120,54), (180,46), (240,40). This is reading an image, not generating one."
        },
        {
          "input": "Spoken measurements",
          "output": "A transcript to verify",
          "use": "Transcribe this recording without adding measurements. Preserve the spoken numbers and units. Mark any uncertain word. I will check the transcript before converting it to a table.",
          "check": "For practice, record “At sixty seconds, the temperature is sixty-five degrees Celsius.” Verify 60, 65 and the units against the audio. No recording is supplied by this tutorial."
        },
        {
          "input": "Verified text",
          "output": "Spoken audio",
          "use": "Read this sentence aloud: “During the first sixty seconds, the temperature fell by fifteen degrees Celsius. The signed average rate was minus zero point two five degrees Celsius per second.”",
          "check": "Listen for the negative sign, decimal value and per-second unit. Speech output is another representation of the checked text, not a fresh measurement."
        },
        {
          "input": "An existing experiment video",
          "output": "Timestamped observations",
          "use": "In this supplied clip, identify frames where the thermometer display is readable. Give each timestamp and visible reading. Separate observations from guesses and say which parts you could not inspect.",
          "check": "Open the cited frames and compare the readings with the visible display. Do not substitute the CSV’s values for unseen frames or assume every frame was analyzed. The tutorial supplies no experiment video."
        },
        {
          "input": "Text or a reference image",
          "output": "A newly generated video",
          "use": "Using a video-generation tool, create a short illustrative animation of a cup cooling. Label it “Illustration, not recorded data.” Keep the scientific plot separate from the animation.",
          "check": "The output is a newly created media artifact with the illustration label. It is not evidence about the measured temperatures or an observed experiment. Use a model and tool that actually support video generation."
        }
      ]
    },
    {
      "id": "start-local",
      "section": "Choose the evidence",
      "title": "Choose where the work happens",
      "lead": "The classroom table can travel freely. Real experimental records may require a different choice about models, tools and storage.",
      "points": [],
      "kind": "prose",
      "visual": "tutorial",
      "reading": [
        "The standalone Python check runs on the computer where you launch it and does not contact an AI service. A workspace application may instead send a prompt to a hosted model while executing a command locally. A browser can be a front end to a remote notebook or to a local service. Follow the data flow rather than treating an application icon as proof of locality. Identify what leaves the device, where the computation runs and where its outputs are saved.",
        "For a future temperature logger, a small device could collect readings and run simple checks near the sensor. A local workstation could handle a compatible vision model or analyze retained data. A hosted model might help with a broad explanation when the submitted material can be shared. These are roles to compare, not a ranking that always picks one machine. Start with the simplest arrangement that produces the required result, then test its capabilities, turnaround and data handling on the actual task."
      ],
      "discussion": [
        "Which parts of the cooling workflow actually need a model, and which can remain ordinary local code?"
      ],
      "notes": "Keep the distinction concrete: sensor acquisition, deterministic computation and model-assisted explanation can run in different places. Do not infer privacy from “desktop,” unlimited access from “terminal,” or model performance from a network specification.",
      "optional": "A local model can still be part of an application that makes remote calls or keeps logs. Conversely, a browser page can execute a deterministic calculation locally. Check the actual configuration and data path.",
      "sources": [
        "tutorialShell",
        "tutorialNotebookSecurity",
        "piCamera"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "Trace one proposed arrangement",
        "text": "Sensor → local cooling.csv\nLocal Python → rate and plot\nSelected report text → hosted assistant for explanation\nReturned explanation → human review beside the original table",
        "check": "Only the selected report text is intended for the hosted step in this example. Verify that the chosen application actually sends that scope, rather than assuming the diagram enforces it."
      }
    },
    {
      "id": "start-context",
      "section": "Make the work reusable",
      "title": "Keep the current brief beside the data",
      "lead": "A useful handoff preserves the source, the latest correction and the remaining question without replaying the whole conversation.",
      "points": [],
      "kind": "prose",
      "visual": "tutorial",
      "reading": [
        "After several revisions, the conversation may contain an incorrect rate, a corrected rate and a proposal that was never accepted. Create a short current brief that names the input, the units and the verified result. Label the older mistake as superseded. Keep the original CSV available so the next assistant or colleague can recompute rather than inherit a compressed assertion. A conversation summary is useful context, not a replacement for the evidence.",
        "For repeated work, the procedure can become a reusable instruction file or skill: read this schema, calculate this interval, create these artifacts and check this result. That changes the instructions supplied to the assistant, not the model’s trained weights. If the task later depends on a long instrument manual, retrieve the relevant section with its source. A search system may use embeddings, numerical representations that help match related text, but a retrieved passage still needs checking for the correct instrument and version."
      ],
      "discussion": [
        "Which sentence in the brief is a verified result, and which statement remains an assumption?"
      ],
      "notes": "Have participants write a handoff another person can use without reading the chat. Keep source data, current decisions and unresolved questions distinct. Introduce skills and retrieval as practical ways to supply context, without turning the exercise into model training.",
      "optional": "For a second application, ask: “In the supplied Model X revision B manual, which page specifies the maximum sampling rate? Quote the relevant line and give its page, section and operating conditions.” Substitute the actual instrument and revision. A search by meaning may retrieve a similar passage for another model or an older revision. Check the quoted line against the original page and its document identity before using the specification. If an older summary conflicts with that source, record the correction rather than silently treating the summary as authoritative.",
      "sources": [
        "context",
        "skills",
        "tutorialRetrieval"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "A current handoff brief",
        "text": "Input: cooling.csv, five illustrative rows.\nUnits: time_s is seconds, temperature_C is degrees Celsius.\nVerified: first interval 0–60 s gives −0.25 °C/s = −15 °C/min.\nSuperseded: the draft label −15 °C/s was incorrect.\nNot established: measurement uncertainty or a physical cooling law.\nNext: rerun the script on any revised input and check the resulting artifacts.",
        "check": "A fresh reader should be able to find the original file, reproduce the stated rate and identify what has not been established."
      }
    },
    {
      "id": "start-repeat",
      "section": "Make the work reusable",
      "title": "Change one input and find what changes",
      "lead": "A small controlled change is a better completion check than asking the assistant whether it is confident.",
      "points": [
        "Make a practice copy of the data and script.",
        "Change only the 60-second temperature from 65 to 66, then rerun the same calculation."
      ],
      "kind": "steps",
      "visual": "tutorial",
      "sampleFile": true,
      "reading": [
        "Copy cooling.csv and check_cooling.py into a separate practice folder. In that copied CSV, change only the temperature at 60 seconds from 65 to 66. Run the same script there. The first-interval rate should change to (66 − 80)/60 = −14/60 °C/s, approximately −0.2333 °C/s. The example script prints two decimal places, so its output is −0.23 C/s. The whole-record average remains −10 °C/min because the first and last readings did not change.",
        "Now inspect any report or plot generated from the revised data. The second point should move, and a report must not retain the original first-interval result. If nothing changes, investigate whether the program opened the old file or reused an old output. This exercise checks a narrow, understandable dependency. It does not prove that every later analysis will be correct. You now have a reusable pattern: ask for a useful artifact, inspect the computation and challenge the result with a change whose effect you can predict."
      ],
      "discussion": [
        "What stayed unchanged, and why?",
        "Which additional input change would expose a different kind of error?"
      ],
      "notes": "Allow genuine practice time in the longer routes. Verify the working folder and actual output. The important discovery is that the first-interval result changes while the whole-record average does not. Participants can do the same comparison on paper if no terminal is available.",
      "optional": "For another test, make the first two timestamps equal in a separate practice copy. A robust analysis should report that the interval is zero rather than present a finite rate. The deliberately short tutorial script will raise a division-by-zero error, which identifies a missing validation step to improve.",
      "sources": [
        "evals",
        "tutorialPythonCSV"
      ],
      "evidence": "Illustrative practice",
      "example": {
        "label": "Predict before rerunning",
        "text": "Practice change: (60 s, 65 °C) → (60 s, 66 °C)\n\nNew first-interval rate:\n(66 − 80) / 60 = −14/60 °C/s ≈ −0.2333 °C/s\n\nExpected script output:\nFirst interval: -0.23 C/s",
        "check": "The second plotted point and the first-interval rate must change. The endpoints and whole-record rate must remain unchanged."
      }
    }
  ],
  "routes": {
    "3": [
      "start-chat",
      "start-workspace",
      "start-cli",
      "start-media"
    ],
    "10": [
      "start-chat",
      "start-workspace",
      "start-cli",
      "start-alternatives",
      "start-media",
      "start-repeat"
    ],
    "30": [
      "start-chat",
      "start-workspace",
      "start-cli",
      "start-alternatives",
      "start-brief",
      "start-check",
      "start-correct",
      "start-media",
      "start-repeat"
    ],
    "60": [
      "start-chat",
      "start-workspace",
      "start-cli",
      "start-alternatives",
      "start-brief",
      "start-check",
      "start-correct",
      "start-media",
      "start-local",
      "start-context",
      "start-repeat"
    ]
  },
  "routeSeconds": {
    "3": {
      "start-chat": 35,
      "start-workspace": 40,
      "start-cli": 45,
      "start-media": 60
    },
    "10": {
      "start-chat": 75,
      "start-workspace": 105,
      "start-cli": 120,
      "start-alternatives": 100,
      "start-media": 110,
      "start-repeat": 90
    },
    "30": {
      "start-chat": 90,
      "start-workspace": 270,
      "start-cli": 270,
      "start-alternatives": 150,
      "start-brief": 110,
      "start-check": 150,
      "start-correct": 120,
      "start-media": 190,
      "start-repeat": 150
    },
    "60": {
      "start-chat": 180,
      "start-workspace": 420,
      "start-cli": 420,
      "start-alternatives": 300,
      "start-brief": 220,
      "start-check": 300,
      "start-correct": 240,
      "start-media": 280,
      "start-local": 180,
      "start-context": 160,
      "start-repeat": 300
    }
  },
  "sources": {
    "tutorialTools": {
      "title": "OpenAI — Function calling",
      "url": "https://developers.openai.com/api/docs/guides/function-calling",
      "year": "Official documentation"
    },
    "tutorialShell": {
      "title": "OpenAI — Shell tool",
      "url": "https://developers.openai.com/api/docs/guides/tools-shell",
      "year": "Official documentation"
    },
    "tutorialPythonCSV": {
      "title": "Python Software Foundation — csv: CSV File Reading and Writing",
      "url": "https://docs.python.org/3/library/csv.html",
      "year": "Official documentation"
    },
    "tutorialNotebooks": {
      "title": "Jupyter Project — Notebooks",
      "url": "https://jupyterlab.readthedocs.io/en/stable/user/notebook.html",
      "year": "Official documentation"
    },
    "tutorialKernels": {
      "title": "Jupyter Project — Kernels (Programming Languages)",
      "url": "https://docs.jupyter.org/en/latest/projects/kernels.html",
      "year": "Official documentation"
    },
    "tutorialAPI": {
      "title": "MDN — API glossary",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/API",
      "year": "Official documentation"
    },
    "tutorialMCP": {
      "title": "Model Context Protocol — Architecture overview",
      "url": "https://modelcontextprotocol.io/docs/learn/architecture",
      "year": "Official documentation"
    },
    "tutorialVision": {
      "title": "OpenAI — Images and vision",
      "url": "https://developers.openai.com/api/docs/guides/images-vision",
      "year": "Official documentation"
    },
    "tutorialAudio": {
      "title": "OpenAI — Audio and voice",
      "url": "https://developers.openai.com/api/docs/guides/audio",
      "year": "Official documentation"
    },
    "tutorialVideo": {
      "title": "Google — Video understanding",
      "url": "https://ai.google.dev/gemini-api/docs/video-understanding",
      "year": "Official documentation"
    },
    "tutorialMediaAccess": {
      "title": "MDN — MediaDevices.getUserMedia",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia",
      "year": "Official documentation"
    },
    "tutorialNotebookSecurity": {
      "title": "Jupyter Project — Security in the Jupyter Server",
      "url": "https://jupyter-server.readthedocs.io/en/latest/operators/security.html",
      "year": "Official documentation"
    },
    "tutorialRetrieval": {
      "title": "OpenAI — Retrieval and semantic search",
      "url": "https://developers.openai.com/api/docs/guides/retrieval",
      "year": "Official documentation"
    },
    "tutorialChatStart": {
      "title": "OpenAI — Data analysis with ChatGPT",
      "url": "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt",
      "year": "Official documentation"
    },
    "tutorialWorkspaceStart": {
      "title": "Visual Studio Code — Introduction to agent-first development",
      "url": "https://code.visualstudio.com/learn/foundations/introduction-to-agent-first-development",
      "year": "Official documentation"
    },
    "tutorialCLIStart": {
      "title": "Anthropic — Claude Code quickstart",
      "url": "https://code.claude.com/docs/en/quickstart",
      "year": "Official documentation"
    },
    "tutorialVideoGeneration": {
      "title": "Google — Video generation in the Gemini API",
      "url": "https://ai.google.dev/gemini-api/docs/video",
      "year": "Official documentation"
    }
  }
};
