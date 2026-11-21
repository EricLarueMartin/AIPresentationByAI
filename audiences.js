window.AUDIENCE_CONTENT = {
  "general": {
    "1": {
      "title": "Getting useful work from AI",
      "lead": "AI is useful when it helps produce a result that can be checked. This guide was prepared with AI assistance and is awaiting editorial review.",
      "points": [],
      "reading": [
        "AI can help explain an unfamiliar topic, draft a report or prepare a small program. A useful starting point is a task with a result that can be inspected. For example, ask for a summary of a supplied document and check that its important statements match the source.",
        "The same approach applies to more technical work: describe the goal, provide relevant information and review what was produced. An answer that sounds confident still needs checking. This guide separates the model that generates an answer from the tools that can search, calculate or change files on its behalf."
      ],
      "discussion": [
        "What useful task could be checked well enough to make it a fair first experiment?"
      ],
      "notes": "Introduce a document summary as an example: the source document makes it possible to check whether the answer preserved an important limitation. Keep the opening focused on usefulness and review, without reciting a checklist.",
      "optional": "The material supports independent reading, presentation and discussion. Short routes select a few practical ideas; longer routes add mechanisms and published experiments. Reading passages supply explanations without requiring a speaker, and discussion questions connect each topic to laboratory or engineering decisions. AI assisted the preparation of this revision; editorial review remains pending.",
      "kind": "prose"
    },
    "2": {
      "title": "How today’s assistants developed",
      "lead": "Modern assistants grew from several different ideas. The timeline follows a few influential examples; earlier methods still appear in today’s systems.",
      "points": [],
      "reading": [
        "Early neural networks learned simple patterns from examples. ELIZA, a conversational program published in 1966, instead used written rules to produce replies. Later advances made it practical to train networks with several layers, allowing them to learn more complicated relationships in data.",
        "Language models learned patterns in sequences of words. The Transformer architecture, introduced in Attention Is All You Need in 2017, provided another way to process those sequences. Today’s assistants combine trained models with instructions and tools. Older ideas have not simply disappeared: a modern system can still contain ordinary rules, numerical programs and several kinds of learned model."
      ],
      "discussion": [
        "Why can a modern AI system still contain hand-written rules?"
      ],
      "notes": "Early neural networks learned simple patterns from examples. ELIZA, a conversational program published in 1966, instead used written rules to produce replies. Later advances made it practical to train networks with several layers, allowing them to learn more complicated relationships in data.",
      "optional": "This history is not a single progression from rules to intelligence. Convolutional networks capture spatial structure; recurrent networks and LSTMs model sequences; attention predates the Transformer. Feedforward layers remain central inside Transformers. The 1986 backpropagation paper popularized and demonstrated the method rather than originating every part of it. Language modeling also predates neural networks and conversational interfaces. These distinctions explain why a modern system can combine methods from several periods.",
      "kind": "prose"
    },
    "3": {
      "title": "People write rules; models can learn patterns",
      "lead": "ELIZA’s replies came from rules written by people. A neural language model learns numerical settings during training.",
      "points": [
        "Written rules specify what to do when an input pattern appears.",
        "Learned weights shape the response after being adjusted on training examples."
      ],
      "reading": [
        "ELIZA’s DOCTOR script looked for patterns in a message and used rules written by people to build a reply. A modern neural model learns patterns during training: data changes its numerical settings, called weights. It uses those learned settings to respond to new input.",
        "People still choose how the model is built and trained. Giving it a new prompt usually supplies working information rather than changing its weights. An application can combine a trained model with explicit rules and checks."
      ],
      "notes": "ELIZA used hand-written pattern-matching and rewriting rules. A modern neural model learns patterns from data by adjusting numerical weights. AI includes both approaches, and applications can combine them.",
      "optional": "People choose the architecture, data and training objective, even when the response mapping is learned. Ordinary prompting changes the current context; training changes weights. A deployed system can combine a trained model with explicit rules, tools and checks.",
      "discussion": [
        "What task could be handled by a clear written rule?",
        "What task would be easier to teach using examples?"
      ],
      "kind": "comparison"
    },
    "4": {
      "title": "Text is divided into pieces",
      "lead": "Both tokenizers receive exactly the same word. Look at where the first piece ends in each row.",
      "points": [],
      "reading": [
        "Before processing text, a language model usually receives a sequence of numbered pieces called tokens. A piece might be a complete word, part of a word or punctuation. An unfamiliar name may take several pieces even when it looks like one word on the page.",
        "With no leading space, cl100k_base splits strawberry into str, aw and berry. The o200k_base encoding splits it into st, raw and berry. Both have three tokens in this example, but their boundaries and IDs differ. Add one leading space and o200k_base encodes the space and the whole word as a single token. The word still contains three r’s."
      ],
      "discussion": [
        "Why might a short technical name use more text pieces than a longer familiar word?"
      ],
      "notes": "Before processing text, a language model usually receives a sequence of numbered pieces called tokens. A piece might be a complete word, part of a word or punctuation. An unfamiliar name may take several pieces even when it looks like one word on the page.",
      "optional": "With no leading space, cl100k_base splits strawberry into str, aw and berry. The o200k_base encoding splits it into st, raw and berry. Both have three tokens in this example, but their boundaries and IDs differ. Add one leading space and o200k_base encodes the space and the whole word as a single token. The word still contains three r’s.",
      "kind": "prose"
    },
    "5": {
      "title": "How many r’s are in strawberry?",
      "lead": "Count them yourself, then look at GPT‑4o’s first answer. What do you think happened when the same user asked it to use Python?",
      "points": [],
      "reading": [
        "In a conversation recorded on November 3, 2024, GPT‑4o first answered 2. The user asked the same question about strawberry again and added “Use Python.” Python counted 3, and GPT‑4o gave that result to the user. Sebastian Krakowski published screenshots of the chat and of the code’s result in Figure 2 of his paper.",
        "There is one r near the beginning and a pair near the end: st[r]awbe[r][r]y. A model can learn the spelling of a whole piece of text and sometimes answer directly. A program can check every character in turn. The exchange leaves open why the first answer was wrong. Open the separate browser counter and add another r to see that rule work on a new input.",
        "A fresh Codex session was asked for an English animal name whose letters, reversed, spell a plant. It answered deer → reed directly. In the same session it ran Python over five animal names and five plant names and confirmed this as the only match in those lists. An independent search of WordNet 3.0 also found that one pair among 5,934 eligible animal spellings and 4,762 plant spellings. The vocabulary and category definitions determine what counts as a solution."
      ],
      "discussion": [
        "Suppose the assistant had shown the Python code but given no output. What would you still want to check?",
        "What would you need to specify before saying you had found every solution?"
      ],
      "notes": "Show the direct answer first. Give the audience a moment to find the three letters, then open the Python follow-up and trace the code from its input to its return value. The editable browser counter below is a separate demonstration.",
      "optional": "Try changing a lowercase r to uppercase R in the browser counter. The count drops by one because the check matches lowercase r exactly.",
      "kind": "prose"
    },
    "6": {
      "title": "Write a useful request",
      "lead": "Concision removes words that do no useful work. It should not remove the information that determines the answer.",
      "points": [
        "Underspecified: “Summarize this report.”",
        "Useful brief: “Summarize the supplied report for a new team member. Explain unfamiliar terms, preserve the important limitations and link key claims to the source.”"
      ],
      "reading": [
        "“Summarize this” leaves many choices open. A more useful request might say: summarize the supplied report for a new team member, explain unfamiliar terms, keep the important limitations and return three short paragraphs. The added words describe what the result is for and how it should be written.",
        "Useful requests name the goal, relevant information, constraints and desired output. They also say how the result will be checked. Remove repetition and filler, but keep details that would change the answer. When necessary information is missing, ask the assistant to identify the gap before committing to a long piece of work."
      ],
      "discussion": [
        "What would an assistant need to know before summarizing a report for a new colleague?",
        "Which detail could be removed without changing the intended result?"
      ],
      "notes": "Use the two requests as the example. Ask which added requirement changes the answer. Avoid replacing the example with a fixed number of prompting tips.",
      "optional": "A reusable brief has six slots: goal, context, constraints, audience, desired output and acceptance criteria. Fill only the slots that matter. Examples can clarify an ambiguous format more effectively than several paragraphs of adjectives. A constraint that changes the answer deserves to remain even in a concise prompt.",
      "kind": "comparison"
    },
    "7": {
      "title": "An assistant can organize a calculation",
      "lead": "The language model can prepare an analysis, while numerical software carries out the calculation. In this demonstration the browser performs the fit directly; no AI model is called.",
      "points": [],
      "reading": [
        "An assistant asked to fit a curve can explain the request, prepare code and interpret the result. A numerical program then performs the fit. Applying the trained AI model is called model inference; estimating unknown values from measurements is also called inference in statistics. These are different uses of the word.",
        "The browser example uses made-up measurements and performs its calculation directly in code, without calling an AI model. Compare the curve with the differences between the curve and the data, called residuals. A smooth-looking fit can still leave a pattern in those differences. A plausible explanation should be checked against the actual calculated result."
      ],
      "discussion": [
        "Which part of this example is performed by numerical code, and what would a language model contribute?"
      ],
      "notes": "An assistant asked to fit a curve can explain the request, prepare code and interpret the result. A numerical program then performs the fit. Applying the trained AI model is called model inference; estimating unknown values from measurements is also called inference in statistics. These are different uses of the word.",
      "optional": "The decay data are synthetic and illustrate analysis choices rather than measurements of a physical system. A numerical optimizer minimizes an objective; it does not establish a physical mechanism. Generated code is not proof of execution, and a written interpretation must be checked against the actual numerical results and residual structure.",
      "kind": "prose"
    },
    "8": {
      "title": "Make corrections concrete",
      "lead": "“These measurements are in milliseconds, not seconds. Correct the conversion and repeat the calculation, keeping the same data.”",
      "points": [
        "A useful correction names the defect and makes the revised result checkable."
      ],
      "reading": [
        "“That is wrong” tells an assistant that something failed but does not identify the repair. “These measurements are in milliseconds, not seconds; correct the conversion and repeat the calculation” gives an observable problem and a specific action. It also makes the revised result easier to check.",
        "A correction can preserve good work: keep the supplied data, the report structure or the parts already verified. After the revision, inspect the changed result rather than accepting an explanation of why the earlier answer failed. Feedback can improve the current conversation without permanently changing the trained model that other conversations will use."
      ],
      "discussion": [
        "What makes the quoted correction easier to act on than “that is wrong”?"
      ],
      "notes": "“That is wrong” tells an assistant that something failed but does not identify the repair. “These measurements are in milliseconds, not seconds; correct the conversion and repeat the calculation” gives an observable problem and a specific action. It also makes the revised result easier to check.",
      "optional": "When the model challenges your interpretation, evaluate the evidence instead of forcing agreement. Conversely, a fluent explanation of its earlier error is not proof that the repair is correct. Check the changed artifact or computation itself.",
      "kind": "prose"
    },
    "9": {
      "title": "Specify the destination",
      "lead": "State the result needed. Require a particular procedure when that procedure is part of the job.",
      "points": [
        "An open comparison can leave the assistant room to choose useful steps.",
        "Repeating a published method requires its procedure and assumptions to be explicit."
      ],
      "reading": [
        "For an open task, describe the desired result and the boundaries. An assistant preparing a comparison may choose a useful sequence of searches and checks. Giving too many unnecessary steps can make the task harder, especially when those steps assume a solution before the evidence is examined.",
        "Some procedures really are requirements. Reproducing a published calculation or following a calibration method needs explicit steps and assumptions. The distinction is whether the method itself must be preserved. Ask for a result supported by sources, calculations or an inspectable artifact. A long explanation alone does not show that the work is correct."
      ],
      "discussion": [
        "Which part of a task is a required method rather than a suggested approach?",
        "What evidence should accompany a result when the assistant chooses the steps?"
      ],
      "notes": "For an open task, describe the desired result and the boundaries. An assistant preparing a comparison may choose a useful sequence of searches and checks. Giving too many unnecessary steps can make the task harder, especially when those steps assume a solution before the evidence is examined.",
      "optional": "Provider guidance changes with models. Compare a goal-level prompt and a prescribed workflow on representative tasks before treating either style as a universal rule. An explanation is useful for review, but length is not a direct measure of reliability.",
      "kind": "comparison"
    },
    "10": {
      "title": "One assistant can brief another",
      "lead": "A lower-cost model can prepare a brief for a more capable model, much like drafting an email for a specialist. The handoff helps only if it preserves the important details.",
      "points": [
        "For an already clear request, going directly to the specialist may be simpler."
      ],
      "reading": [
        "A lower-cost model can organize a complicated request into a clear brief for a more capable model. This resembles preparing an email for a specialist: explain the problem, list the facts and identify unanswered questions. The specialist also needs access to any original information that a summary cannot safely replace.",
        "The extra step can remove repetition, but it can also lose a crucial detail or add delay. For an already clear request, a direct call may work better. Compare the entire process, including checking the handoff and fixing mistakes. Two assistants are a workflow choice, not an automatic improvement over one."
      ],
      "discussion": [
        "What fact would be dangerous to lose when one assistant briefs another?"
      ],
      "notes": "A lower-cost model can organize a complicated request into a clear brief for a more capable model. This resembles preparing an email for a specialist: explain the problem, list the facts and identify unanswered questions. The specialist also needs access to any original information that a summary cannot safely replace.",
      "optional": "The specialist might be a frontier model, a tuned small model or conventional software. The handoff should distinguish facts, assumptions and proposed actions, and retain access to source material when details matter. Measure total cost, delay, review effort and failure rate, including the preparation call. An extra model stage is a design choice to test, not an automatic quality improvement.",
      "kind": "prose"
    },
    "11": {
      "title": "Useful feedback matters more than tone",
      "lead": "Being polite is natural. Accuracy depends more usefully on a correction such as “you used the wrong units” than on praise or anger.",
      "points": [],
      "reading": [
        "An assistant responds to the text it receives, so emotional tone can influence a reply. However, there is no dependable rule that anger, praise or elaborate politeness makes an answer more accurate. Studies of politeness show that effects depend on the task and language rather than following one simple recipe.",
        "A useful response to an error identifies the wrong assumption, supplies evidence and states the requested change. Asking what remains uncertain can help when that uncertainty affects a decision. Agreement is not proof: an assistant may accept a mistaken correction. Thanking it also does not automatically retrain its underlying model or preserve learning in another conversation."
      ],
      "discussion": [
        "How could frustration about an error be turned into information the assistant can use?"
      ],
      "notes": "Explain that tone can affect a reply without establishing a dependable accuracy rule. A thank-you does not automatically retrain the model. Use the unit correction as the concrete example.",
      "optional": "A useful correction format is: observation, evidence, requested change, and what to preserve. If the assistant has misunderstood the objective several times, restate the current brief and remove obsolete instructions. Do not assume a conversation's apparent learning persists into a new session or model version.",
      "kind": "prose"
    },
    "12": {
      "title": "Keep the working information clear",
      "lead": "A long conversation can contain obsolete instructions. Keep a current brief and refer back to original sources when a summary might have lost an important detail.",
      "points": [
        "A summary can accidentally turn an unresolved question into an agreed fact."
      ],
      "reading": [
        "The information available while an assistant works is called its context. It may contain the request, earlier messages, retrieved documents and tool results. A large amount of context can help, but outdated instructions and repeated material can also obscure the current task and its important constraints.",
        "Keep a short record of current decisions, reliable sources and unresolved questions. Retrieve relevant documents when needed instead of pasting everything into each request. Summaries help manage long work, but they can omit details. Check them against the original evidence when a lost unit, exception or requirement would change the answer."
      ],
      "discussion": [
        "What unresolved question could a summary accidentally present as a settled decision?"
      ],
      "notes": "The information available while an assistant works is called its context. It may contain the request, earlier messages, retrieved documents and tool results. A large amount of context can help, but outdated instructions and repeated material can also obscure the current task and its important constraints.",
      "optional": "An application may compact or retrieve conversation history rather than send every past message on every call. Context, persistent notes and trained weights have different lifetimes. When a requirement is critical, put it in the current task or an authoritative document the agent can read.",
      "kind": "prose"
    },
    "13": {
      "title": "Several ways to make AI more useful",
      "lead": "Choose the intervention that addresses the actual problem.",
      "points": [
        "A prompt specifies the current request.",
        "A skill records a reusable procedure, sometimes with supporting scripts.",
        "Retrieval supplies relevant documents or records.",
        "Fine-tuning uses examples to change learned behavior."
      ],
      "reading": [
        "A prompt describes the immediate job. A skill packages reusable instructions and sometimes supporting scripts, like a documented procedure. Retrieval brings relevant information from documents or databases into the task. Fine-tuning changes learned model settings using examples. These are different ways to improve a system’s usefulness.",
        "Choose according to the observed problem. A missing current specification calls for a reliable source. A repeatedly misunderstood reporting procedure may need clearer instructions or a skill. Training may be worth testing for a stable behavior that many examples can demonstrate. A skill does not itself grant permission to control files or equipment, and it does not guarantee expertise."
      ],
      "discussion": [
        "Does a missing equipment specification require training or access to the document?",
        "What repeated procedure could be written down as a reusable skill?"
      ],
      "notes": "A prompt describes the immediate job. A skill packages reusable instructions and sometimes supporting scripts, like a documented procedure. Retrieval brings relevant information from documents or databases into the task. Fine-tuning changes learned model settings using examples. These are different ways to improve a system’s usefulness.",
      "optional": "A skill is not a guarantee of expertise or execution permission. Loading instructions does not update neural weights. A retrieval result is evidence to evaluate, and a trained adapter may still need current documents and reliable tools.",
      "kind": "list"
    },
    "14": {
      "title": "Check what the application can actually do",
      "lead": "The same-looking chat window can have very different powers. Check which tools and files the application actually makes available.",
      "points": [
        "“Completed” should be supported by a changed file, a returned result or another observable outcome."
      ],
      "reading": [
        "A chat window may provide search, calculations or connected applications. A terminal-based assistant may have access to files and commands, or it may be tightly restricted. The appearance of the interface does not determine its capabilities. Those depend on the application’s available tools and the permissions granted to them.",
        "A virtual machine can provide a separate development environment; a dedicated computer can connect to sensors. In each case, identify the relevant resources and the result that should be verified. A message saying “completed” is not the same as a changed file or a measured device state. Permissions need to be enforced by software, not merely requested in prose."
      ],
      "discussion": [
        "How could the result of a file-editing task be checked?"
      ],
      "notes": "A chat window may provide search, calculations or connected applications. A terminal-based assistant may have access to files and commands, or it may be tightly restricted. The appearance of the interface does not determine its capabilities. Those depend on the application’s available tools and the permissions granted to them.",
      "optional": "Useful boundaries include selected directories, read-only data access, a disposable environment, and explicit control interfaces. Permissions come from the application and operating system. A natural-language instruction alone is not an access-control mechanism.",
      "kind": "prose"
    },
    "15": {
      "title": "Separate the task, model and tool",
      "lead": "An assistant can choose a tool that uses a different method from the assistant itself. A numerical solver can fit data; an image generator can create a picture.",
      "points": [
        "A Transformer is a network design. Diffusion is a generation method that can use a Transformer inside it."
      ],
      "reading": [
        "AI is a broad field. Machine learning is a family of methods that learn from examples, and a Transformer is one network design. A tasking assistant can use a language model to choose a tool, then call ordinary code, a search service or another trained model to do part of the work.",
        "Image generation illustrates the distinction. Many diffusion models learn to remove noise and create an image through repeated denoising steps. Their denoising network can itself be a Transformer, so the names do not describe competing categories. Image generation is one possible tool; the practical question is how the overall system chooses tools and checks their results."
      ],
      "discussion": [
        "Why can one assistant use both a numerical program and an image generator?"
      ],
      "notes": "AI is a broad field. Machine learning is a family of methods that learn from examples, and a Transformer is one network design. A tasking assistant can use a language model to choose a tool, then call ordinary code, a search service or another trained model to do part of the work.",
      "optional": "ReAct is an influential example of interleaving model reasoning with external actions, not a specification implemented by every agent. A tool may execute conventional code, call another model or access an application. Diffusion provides a short architectural comparison here; the main subject is specifying tasks and reviewing the systems that coordinate tools.",
      "kind": "prose"
    },
    "16": {
      "title": "Check what happened after an action",
      "lead": "After changing a file or running a tool, the assistant needs to inspect what happened. The next action should depend on that evidence.",
      "points": [],
      "reading": [
        "An agent is a system that can use tools while working toward a goal. Suppose it is asked to repair a small program. It needs to inspect the file, make a suitable change and run a check. Writing a proposed repair is different from applying it and showing that it works.",
        "The next action should depend on the observed result. A failed check may require another change or more information. A successful tool call may still produce the wrong artifact, so the original acceptance criteria remain important. For repeated tasks, a fixed sequence can be easier to review than an open-ended agent that chooses every step."
      ],
      "discussion": [
        "What should happen when a tool runs successfully but produces the wrong result?"
      ],
      "notes": "An agent is a system that can use tools while working toward a goal. Suppose it is asked to repair a small program. It needs to inspect the file, make a suitable change and run a check. Writing a proposed repair is different from applying it and showing that it works.",
      "optional": "Evaluate both the final artifact and the path used to produce it. Tests can also be wrong or underspecified. Keep a record sufficient to distinguish model misunderstanding, missing context, tool failure and a faulty evaluation.",
      "kind": "prose"
    },
    "17": {
      "title": "A small computer can connect AI to observations",
      "lead": "A Raspberry Pi with a camera makes a concrete workbench. Use a known test object to check the image before judging the model’s interpretation.",
      "points": [
        "Supported USB peripherals can add observations or interfaces, within power and bandwidth limits."
      ],
      "reading": [
        "A Raspberry Pi can capture camera images and run software that saves, displays or processes them. Supported USB devices can add microphones, storage or connections to other equipment. An assistant can help prepare a capture script or interpret an image when its application provides the appropriate tools and access.",
        "Separate getting a trustworthy picture from interpreting it. A blurred image, poor lighting or an incorrect setting may explain a bad result before the model is involved. Use a known test object and record the capture conditions. Extra connections also need compatible drivers, sufficient power and available bandwidth; adding a hub does not remove those limits."
      ],
      "discussion": [
        "What known object would help check the camera before evaluating an AI interpretation?"
      ],
      "notes": "A Raspberry Pi can capture camera images and run software that saves, displays or processes them. Supported USB devices can add microphones, storage or connections to other equipment. An assistant can help prepare a capture script or interpret an image when its application provides the appropriate tools and access.",
      "optional": "Expansion remains constrained by driver compatibility, electrical power and shared bus bandwidth. A hub creates connection points rather than unlimited independent capacity. A reproducible demonstration records the capture settings, lighting, software version and expected result. Physical actions require their own control and verification loop; correct image interpretation alone does not demonstrate correct actuation.",
      "kind": "prose"
    },
    "18": {
      "title": "Choose where the work happens",
      "lead": "Where a task runs depends on what it needs and which information may leave the local environment.",
      "points": [
        "A nearby device can handle a narrow sensing task.",
        "A local workstation can run suitable models under local control.",
        "A hosted service provides models on provider hardware."
      ],
      "reading": [
        "A small device near a sensor can handle a narrow task such as interpreting a supported camera stream. A local workstation can support models with different memory requirements. A hosted service runs models on provider hardware. A useful system can combine these roles rather than choosing one location for everything.",
        "The choice depends on the task, available memory, maintenance effort and which information may leave the local environment. Local processing can reduce external data transfer, but logs and connected services still matter. Hardware expansion also needs compatible software. A fast network connection links computers; it does not automatically combine their memory or establish how fast a model will run."
      ],
      "discussion": [
        "Which part of a proposed task should happen near the sensor, and why?"
      ],
      "notes": "A small device near a sensor can handle a narrow task such as interpreting a supported camera stream. A local workstation can support models with different memory requirements. A hosted service runs models on provider hardware. A useful system can combine these roles rather than choosing one location for everything.",
      "optional": "The AI HAT+ 2 documentation specifies 8 GB of dedicated accelerator memory. NVIDIA documents a 200 Gb/s network link for connecting DGX Sparks; this is not a model-speed measurement or an automatic shared-memory pool. Local privacy also depends on logs, retention, remote calls and configuration. Deployment should be evaluated as a complete data flow.",
      "kind": "comparison"
    },
    "19": {
      "title": "Spend extra thinking effort where it helps",
      "lead": "More reasoning effort is useful when it improves the result enough to justify the extra work.",
      "points": [
        "A narrow detector may need a small specialized model.",
        "A difficult synthesis may benefit from more deliberation or comparison of candidate answers."
      ],
      "reading": [
        "Some systems let a model spend more effort before producing an answer. Other methods try several candidates or use checks to select among them. These are ways of using additional computation during a task. They may help a difficult problem, but a longer answer is not evidence that the result improved.",
        "A simple classification may need a small specialized model, while a difficult comparison may justify more analysis. Exact calculations may be better handled by a program. Keep model choice, available tools and reasoning effort separate when comparing options. Test them against the same success criteria, including the delay and checking work needed to obtain a useful result."
      ],
      "discussion": [
        "Which task would benefit from comparing several possible answers?",
        "How could improvement be measured without judging the length of an explanation?"
      ],
      "notes": "Some systems let a model spend more effort before producing an answer. Other methods try several candidates or use checks to select among them. These are ways of using additional computation during a task. They may help a difficult problem, but a longer answer is not evidence that the result improved.",
      "optional": "Report which inference protocol produced a benchmark score. A model with tools, a long budget and many attempts is a different evaluated system from the same weights answering once. Token counts and elapsed time are useful accounting measures but do not by themselves explain the quality difference.",
      "kind": "comparison"
    },
    "20": {
      "title": "Budget for the finished task",
      "lead": "A cheap answer can become costly if it requires repeated repairs. Compare the effort needed to obtain an acceptable result, including review time.",
      "points": [],
      "reading": [
        "A cheap first answer can become expensive if it needs several retries and extensive review. A more capable model may cost more per call but finish a difficult task with less rework. The useful comparison is the complete process that produces an acceptable result, including the time spent checking it.",
        "Keep context relevant and request the output that will actually be used. Independent checks can sometimes run in parallel, but each worker also needs instructions and coordination. Service pricing and usage rules vary, so examine actual records rather than guessing from prompt length. Saving a few polite words may matter less than avoiding a redundant research loop."
      ],
      "discussion": [
        "When could a more expensive first answer reduce the total effort?"
      ],
      "notes": "A cheap first answer can become expensive if it needs several retries and extensive review. A more capable model may cost more per call but finish a difficult task with less rework. The useful comparison is the complete process that produces an acceptable result, including the time spent checking it.",
      "optional": "A generic model cascade can prepare a brief cheaply and escalate a focused hard step to a more capable model. Its value must include the cost of checking the handoff. Model names, effort scales, credit rates and caching policies vary across providers and versions; use actual usage records when comparing alternatives. A redundant tool loop can dominate the cost of a short conversational exchange.",
      "kind": "prose"
    },
    "21": {
      "title": "Model size and working memory are different",
      "lead": "A longer prompt increases the work needed to process the task; it does not add new learned weights to the model.",
      "points": [
        "Stored weights describe the trained model.",
        "Working context holds information for the current task."
      ],
      "reading": [
        "The learned settings of a model are called parameters or weights. Storing more of them needs more memory. During a conversation, the system also needs working space for the text and calculations currently in progress. Increasing the amount of text does not add new learned weights to the model.",
        "Some Transformer operations compare many pairs of text pieces, so their work can grow quickly as a prompt gets longer. Other memory costs grow differently. Efficient software can reduce unnecessary data movement, but there is no single growth rule for the whole system. Practical limits depend on the model, the text being processed and the implementation."
      ],
      "discussion": [
        "Why might a long document require more working memory without changing the model itself?",
        "Why is one simple rule insufficient to predict all memory costs?"
      ],
      "notes": "The learned settings of a model are called parameters or weights. Storing more of them needs more memory. During a conversation, the system also needs working space for the text and calculations currently in progress. Increasing the amount of text does not add new learned weights to the model.",
      "optional": "For a fixed layer width d and context n, attention contains an O(n²d) term, while projections and feedforward layers also consume compute. Cached generation adds one new token at a time, so its per-token cost differs from processing an entire prompt. Architecture, grouped-query attention, batching and precision change constants and memory requirements.",
      "kind": "comparison"
    },
    "22": {
      "title": "Training changes learned settings",
      "lead": "Training uses errors on examples to adjust a network’s learned settings. A lower training error still needs to translate into useful behavior on new cases.",
      "points": [],
      "reading": [
        "A neural network transforms an input into an output using many learned settings. During training, a loss function measures how far the output is from the chosen target. A learning procedure uses that mismatch to adjust the settings. Repeating the process over examples can improve performance on the training task.",
        "Using the trained model on a new input is different from training it. Ordinary use applies the existing settings. A lower training error also does not guarantee useful behavior: the model may memorize examples or exploit an unintended shortcut. Separate test cases are needed to check whether the learned behavior works in the situations that actually matter."
      ],
      "discussion": [
        "How could a model improve its training score without learning the intended task?"
      ],
      "notes": "A neural network transforms an input into an output using many learned settings. During training, a loss function measures how far the output is from the chosen target. A learning procedure uses that mismatch to adjust the settings. Repeating the process over examples can improve performance on the training task.",
      "optional": "Gradients indicate local sensitivity, not a human-readable explanation of stored knowledge. A model can reduce training loss while overfitting or learning shortcuts. Separate data for evaluation is needed to ask whether the learned behavior transfers to the cases that matter.",
      "kind": "prose"
    },
    "23": {
      "title": "Starting from scratch is different from adapting",
      "lead": "Adapting a pretrained model starts with patterns already learned. Training from scratch must acquire the patterns the task needs.",
      "points": [
        "Large general-model pretraining requires substantial data and computation.",
        "A small focused detector can still be a practical from-scratch project."
      ],
      "reading": [
        "Training from scratch begins with settings that have not already learned the desired patterns. Building a large general language model this way takes substantial data and computation. A small focused task, such as detecting a particular sound, can be a more practical from-scratch project on modest resources.",
        "Adaptation starts with a model that has already been trained. Full fine-tuning changes many or all of its settings using examples of the new task. Adapter methods learn a smaller additional change. These approaches have different memory and data needs. Running an existing model is also a much smaller undertaking than repeating all the training that originally produced it."
      ],
      "discussion": [
        "When would a small focused detector be more suitable than a general language model?",
        "What useful knowledge might an existing model already provide?"
      ],
      "notes": "Training from scratch begins with settings that have not already learned the desired patterns. Building a large general language model this way takes substantial data and computation. A small focused task, such as detecting a particular sound, can be a more practical from-scratch project on modest resources.",
      "optional": "Continued pretraining usually continues a broad prediction objective on additional domain data; supervised fine-tuning uses task demonstrations. Full fine-tuning describes which parameters change, not whether the model began from scratch. Adapter tuning still needs forward and backward computation through the relevant model layers.",
      "kind": "comparison"
    },
    "24": {
      "title": "Training needs more than room for the model",
      "lead": "Room for a model’s stored weights is not room for its entire training job. A computer may be able to run a model that it cannot fully train.",
      "points": [
        "Working memory and repeated exposure to training data must be budgeted separately."
      ],
      "reading": [
        "A model needs memory to store its learned settings, but training also keeps information used to calculate and apply updates. The size of that additional state depends on the training method. During ordinary use, working buffers and the current context still need space beyond the stored weights.",
        "This explains why a computer might run a model yet be unable to fully train it. Training work also depends on how much data is presented and how often it is revisited. Simple estimates help compare orders of magnitude, but they are not predictions of runtime on a particular device. Detailed formulas and weight-storage examples belong in the optional explanation."
      ],
      "discussion": [
        "Why can a computer run a model that it cannot fully train?"
      ],
      "notes": "A model needs memory to store its learned settings, but training also keeps information used to calculate and apply updates. The size of that additional state depends on the training method. During ordinary use, working buffers and the current context still need space beyond the stored weights.",
      "optional": "A rough dense-training estimate is C ≈ 6ND: C is floating-point operations for forward and backward work, N is the parameter count and D is the number of presented training tokens, including repeats. A 7-billion-parameter model exposed to 1 trillion tokens gives about 4.2 × 10²² operations. Separately, 7 billion raw weights occupy about 14 decimal GB at 16 bits or 3.5 GB at 4 bits. These are weight-only storage figures, not complete memory requirements. Training adds activations, gradients, optimizer state and temporary buffers; quantization adds metadata. The formulas estimate workload and storage components, not runtime or speed on a particular device. LoRA computation cannot be estimated by counting only its trainable adapter parameters.",
      "kind": "prose"
    },
    "25": {
      "title": "LoRA learns a small adjustment",
      "lead": "LoRA keeps the original model fixed and learns a compact adjustment alongside it. The diagram shows the large base and the much smaller added change.",
      "points": [
        "The base still participates in computation, so fewer trainable settings do not mean proportionally less work."
      ],
      "reading": [
        "LoRA is a method for adapting a trained model. It freezes the original settings and learns a compact additional adjustment. That adjustment can be stored separately, making it easier to keep several task-specific versions without keeping a completely separate trained model for every task.",
        "The memory saved comes partly from having fewer settings to update and track during training. The original model still participates in the calculations, so the amount of computation does not fall in the same proportion. The adjustment depends on its base model and needs evaluation. Keeping the base fixed does not guarantee that the adapted version preserves every earlier capability."
      ],
      "discussion": [
        "Why does the unchanged base still need to participate in the work?"
      ],
      "notes": "LoRA is a method for adapting a trained model. It freezes the original settings and learns a compact additional adjustment. That adjustment can be stored separately, making it easier to keep several task-specific versions without keeping a completely separate trained model for every task.",
      "optional": "The update W′ = W + BA can sometimes be merged into weights for deployment, subject to the implementation and precision. An adapter depends on its base model and configuration. Increasing rank is not automatically beneficial, and keeping the base frozen does not guarantee that overall behavior avoids forgetting.",
      "kind": "prose"
    },
    "26": {
      "title": "QLoRA reduces the storage needed for adaptation",
      "lead": "QLoRA stores the fixed base more compactly while training small adjustments. It can reduce adaptation memory without making every job fit or every operation faster.",
      "points": [],
      "reading": [
        "Quantization stores values using fewer bits, which can reduce the memory occupied by a model. QLoRA combines a quantized, fixed base with the small trainable adjustments used by LoRA. It makes some adaptation jobs possible with less memory than storing the entire base at higher precision.",
        "The whole training job still needs space for working calculations, metadata and the adapters. A published demonstration under one set of conditions is not a promise that every model or document length will fit. Lower memory use also does not automatically mean faster operation. Compare the resulting behavior with a suitable baseline before accepting the storage saving."
      ],
      "discussion": [
        "What must be checked before accepting a memory-saving adaptation?"
      ],
      "notes": "Quantization stores values using fewer bits, which can reduce the memory occupied by a model. QLoRA combines a quantized, fixed base with the small trainable adjustments used by LoRA. It makes some adaptation jobs possible with less memory than storing the entire base at higher precision.",
      "optional": "Four-bit raw storage is only a lower-bound component of memory. Adapter placement, sequence length, batch size, checkpointing and the quantization implementation can dominate practical fit. QLoRA may save memory without improving wall-clock speed. It is a way to adapt pretrained weights, not a shortcut that recreates their original pretraining.",
      "kind": "prose"
    },
    "27": {
      "title": "Useful examples matter more than row count",
      "lead": "A wake-word detector needs to learn when to remain silent, not just when to respond.",
      "points": [
        "Ordinary speech that is not the wake phrase.",
        "Confusing phrases with similar sounds.",
        "Playback rather than a live request.",
        "Environmental noise."
      ],
      "reading": [
        "A wake-word detector needs examples of its target phrase, but also ordinary speech and similar sounds that should not trigger it. The same principle applies to other tasks: useful examples include common successes, confusing cases and realistic situations where no action is appropriate. Labels need to describe the intended behavior correctly.",
        "Keep closely related examples together when dividing data for training and evaluation. Otherwise, a test can look independent while containing near-copies of the training material. More examples do not necessarily add more information, and repeated errors can reinforce the wrong behavior. A clear account of where examples came from helps explain what the results actually demonstrate."
      ],
      "discussion": [
        "What sounds should a wake-word detector learn to ignore?",
        "How could nearly identical examples make a test look better than it really is?"
      ],
      "notes": "A wake-word detector needs examples of its target phrase, but also ordinary speech and similar sounds that should not trigger it. The same principle applies to other tasks: useful examples include common successes, confusing cases and realistic situations where no action is appropriate. Labels need to describe the intended behavior correctly.",
      "optional": "A small model trained from scratch can be appropriate for a narrow signal-detection task. A larger pretrained model can still fail when labels contradict each other or rare operations are missing. Acoustic transcripts, intended commands and actual execution outcomes are different types of evidence and should not be treated as interchangeable labels.",
      "kind": "list"
    },
    "28": {
      "title": "Treat an improvement claim as an experiment",
      "lead": "A system that declines every request may avoid wrong actions while missing every useful one.",
      "points": [
        "Count incorrect actions.",
        "Also count valid requests that were missed."
      ],
      "reading": [
        "A useful comparison begins with a task and a baseline: what happens with the current method? Change one factor when trying to understand its effect, and record other differences that cannot be held fixed. Decide in advance which outcomes count as improvement rather than choosing a favorite score afterward.",
        "One overall score can hide important failures. A system that declines every request may avoid incorrect actions while missing all useful ones. Measure both kinds of error, along with the results that matter for the task. Use development examples to improve the method and separate, untouched examples for the final check. Repeatedly inspected tests are no longer independent evidence."
      ],
      "discussion": [
        "How could a cautious system score well while being unhelpful?",
        "Which two kinds of error need separate counts for a familiar task?"
      ],
      "notes": "A useful comparison begins with a task and a baseline: what happens with the current method? Change one factor when trying to understand its effect, and record other differences that cannot be held fixed. Decide in advance which outcomes count as improvement rather than choosing a favorite score afterward.",
      "optional": "A benchmark evaluates a model plus prompts, tools, budgets and scoring rules. Code-based checks, model judges and human review have different strengths and failure modes. Keep the scoring rubric inspectable and distinguish actual task outcomes from the assistant's description of its own success.",
      "kind": "comparison"
    },
    "29": {
      "title": "Learning something new can disturb earlier skills",
      "lead": "A retention method must let the model learn a new task without discarding the old one. Protecting earlier behavior so strongly that nothing new is learned would not solve the problem.",
      "points": [],
      "reading": [
        "A published method called Elastic Weight Consolidation tries to protect earlier learning by discouraging changes to settings estimated to be important for it. The researchers tested sequences of tasks, including versions of handwritten-digit recognition. The point was to learn a new task while preserving performance on earlier ones.",
        "The reported results support the method under the tested conditions, not a universal solution to forgetting. Protecting everything too strongly could also prevent useful change. A fair comparison checks both old and new tasks after each training stage. It uses the same starting conditions and keeps the final evaluation separate from choices made while developing the method."
      ],
      "discussion": [
        "How could preserving old skills too strongly prevent useful new learning?"
      ],
      "notes": "A published method called Elastic Weight Consolidation tries to protect earlier learning by discouraging changes to settings estimated to be important for it. The researchers tested sequences of tasks, including versions of handwritten-digit recognition. The point was to learn a new task while preserving performance on earlier ones.",
      "optional": "A useful replication compares the same starting architecture, task order and training budget, then evaluates every earlier task after each new task. Include ordinary sequential training and a simple regularization baseline. Report learning of the new task alongside retention of old tasks. The penalty strength changes this balance, so selecting it on the final test set would weaken the evaluation.",
      "kind": "prose"
    },
    "30": {
      "title": "A small adaptation dataset can have a useful role",
      "lead": "LIMA used carefully selected examples to shape the responses of an already trained model. The small adaptation dataset did not replace the model’s substantial earlier training.",
      "points": [],
      "reading": [
        "The LIMA study adapted an already trained language model with a small, carefully selected collection of instructions and responses. The examples helped shape how the model answered requests. This is different from creating its broad knowledge from those examples alone: the substantial earlier training remained part of the starting point.",
        "The practical lesson is to examine what the examples teach and what the model already supplies. A clear, relevant dataset may be useful without being huge. However, the result depends on the model and the evaluated tasks. Check uncommon requests, ambiguous inputs and numerical correctness separately; a response that people prefer is not necessarily a correct calculation."
      ],
      "discussion": [
        "What did the model already possess before the curated examples were added?"
      ],
      "notes": "The LIMA study adapted an already trained language model with a small, carefully selected collection of instructions and responses. The examples helped shape how the model answered requests. This is different from creating its broad knowledge from those examples alone: the substantial earlier training remained part of the starting point.",
      "optional": "For an engineering adaptation project, construct a coverage table before selecting examples: common requests, ambiguous inputs, rare operations and valid abstentions. Keep independent tests for each category. Compare curated and baseline data under matched exposure when investigating quality, since changing dataset size also changes updates in a fixed-epoch recipe. A favorable preference judgment is useful evidence, but it does not replace checks of numerical correctness or operational behavior.",
      "kind": "prose"
    },
    "31": {
      "title": "Ask what a comparison actually compared",
      "lead": "“Just as good” is incomplete without a named comparison and a test. A pleasant conversation score does not establish reliable scientific calculation.",
      "points": [],
      "reading": [
        "A study showing that a compact adaptation method works well needs a clear comparison. Was it compared with the unchanged model, another adapter method or training all the model’s settings? These are different questions. A result can be useful without answering every possible question about the approach.",
        "The QLoRA research illustrates why the baseline matters. It examines methods for adapting models with less memory and also discusses evaluation limitations. A favorable conversation score does not prove reliable scientific calculation. Record the model, training procedure and checking method, then ask whether those conditions resemble the intended use. Memory savings and task quality should be assessed separately."
      ],
      "discussion": [
        "What information is missing from “this method is just as good”?"
      ],
      "notes": "A study showing that a compact adaptation method works well needs a clear comparison. Was it compared with the unchanged model, another adapter method or training all the model’s settings? These are different questions. A result can be useful without answering every possible question about the approach.",
      "optional": "An engineering comparison should record the base checkpoint, target layers, adapter rank, precision, training exposure and inference procedure. Compare memory use and task quality independently, and retain tests of previously useful behavior. State whether the experiment measures quantization, adapter capacity or several changed factors together. Independent numerical checks and executable artifacts provide stronger evidence for calculation tasks than stylistic preference alone.",
      "kind": "prose"
    },
    "32": {
      "title": "Several methods try to reduce forgetting",
      "lead": "Several methods try to reduce forgetting, with different costs.",
      "points": [
        "Replay revisits representative earlier examples.",
        "Constraints discourage changes that disturb earlier behavior.",
        "Separate adapters keep some task-specific adjustments apart.",
        "Teacher-based training can help preserve selected behavior."
      ],
      "reading": [
        "Training on new work can reduce performance on older tasks. One response is replay: include representative old examples during new learning. Another is to limit changes to important settings. Separate adapters can keep task-specific adjustments apart. These methods address changes in trained behavior, not a conversation losing an earlier message.",
        "Research also explores expanding expert networks and sleep-inspired consolidation. These names refer to defined learning procedures; leaving a computer idle does not teach it. No method guarantees preservation of every skill. Replay needs suitable examples, and separate capacity needs storage and management. Compare the adapted model with the starting model on earlier tasks that remain important."
      ],
      "discussion": [
        "Which old tasks should remain in the evaluation after a new adaptation?",
        "What could go wrong if replay examples contain earlier mistakes?"
      ],
      "notes": "Training on new work can reduce performance on older tasks. One response is replay: include representative old examples during new learning. Another is to limit changes to important settings. Separate adapters can keep task-specific adjustments apart. These methods address changes in trained behavior, not a conversation losing an earlier message.",
      "optional": "No single method guarantees lifelong learning across all tasks. Replay can require storing data; generated replay can repeat errors; freezing limits adaptation; expert expansion increases storage and routing complexity. An adapter can be swapped back to restore a base behavior, but the adapted system can still regress while that adapter is active.",
      "kind": "list"
    },
    "33": {
      "title": "A model can activate only some of its parts",
      "lead": "For this illustrated token, the router selects two experts and combines their outputs. Other experts remain available for different selections; they still need storage.",
      "points": [],
      "reading": [
        "A Mixture-of-Experts model contains several learned subnetworks and a router that selects which ones to use for an input. This can provide substantial total capacity without running every component for every text piece. The selected parts are called active experts, while all the stored parts contribute to total model size.",
        "An expert is not necessarily a neatly named subject specialist such as a physicist or translator. Its role emerges from training. The unused components still need storage, and moving work between components can add overhead. Adding experts for continual learning is another deliberate method; ordinary expert routing does not automatically prevent the model from forgetting earlier behavior."
      ],
      "discussion": [
        "Why do experts that are inactive for this token still need storage?"
      ],
      "notes": "A Mixture-of-Experts model contains several learned subnetworks and a router that selects which ones to use for an input. This can provide substantial total capacity without running every component for every text piece. The selected parts are called active experts, while all the stored parts contribute to total model size.",
      "optional": "The original sparsely gated MoE work used feedforward experts inside a sequence model. Modern designs vary in expert size, number, routing and placement. Adding experts for continual learning is an additional algorithmic choice, not an automatic property of every MoE.",
      "kind": "prose"
    },
    "34": {
      "title": "There are several ways to reduce resource use",
      "lead": "Reducing one resource does not automatically reduce all the others.",
      "points": [
        "Fewer bits can reduce storage.",
        "Removing selected components can make a model smaller.",
        "A smaller student can learn selected behavior from a larger teacher.",
        "Better execution can reduce unnecessary movement through memory."
      ],
      "reading": [
        "Quantization stores values with fewer bits. Pruning removes selected weights or structures. Distillation trains a smaller model using information from another model. These methods can reduce resources, but each can also change the output. The useful question is what quality remains at the lower resource requirement.",
        "Other methods improve how calculations move data through memory or change the model’s architecture. Targeted dropout prepares a network to tolerate later pruning. Merely creating many zero values does not ensure that a computer skips the corresponding work. Measure the actual application: memory use, execution cost and task quality can improve by different amounts, or trade against each other."
      ],
      "discussion": [
        "Which resource is actually limiting the intended application?",
        "Why might a smaller model file fail to make the task faster?"
      ],
      "notes": "Quantization stores values with fewer bits. Pruning removes selected weights or structures. Distillation trains a smaller model using information from another model. These methods can reduce resources, but each can also change the output. The useful question is what quality remains at the lower resource requirement.",
      "optional": "Model compression is distinct from compressing a data file with a lossless codec. Quantization and pruning can alter outputs. Distillation transfers selected behavior rather than copying all knowledge exactly. State-space and hybrid models offer different sequence-scaling tradeoffs; they are not a universal replacement for attention.",
      "kind": "list"
    },
    "35": {
      "title": "Training follows the feedback it receives",
      "lead": "The feedback supplied during training influences what the model learns to do.",
      "points": [
        "Examples or preferences can teach desired responses.",
        "A reward encourages outcomes that score well, which may not capture the whole real task."
      ],
      "reading": [
        "Some training predicts information hidden from an input, such as the next text piece. Other training uses examples of desired responses, comparisons between answers or rewards for outcomes. These feedback signals shape what the model learns, but the signal may not capture everything the application actually needs.",
        "Adversarial generation provides another example: one network produces samples while another learns to distinguish them from training examples. This is the generator-and-discriminator arrangement used by GANs. It is different from ordinary language prediction and from testing a system with difficult inputs. In every case, a better training score still needs checks against the real task and important failure modes."
      ],
      "discussion": [
        "What useful behavior might a reward fail to capture?",
        "Why should progress on a training score be checked against real examples?"
      ],
      "notes": "Explain the objective through the difference between a score and the intended outcome. The reading gives prediction and GAN training as additional examples; do not compress all training methods into a single staged sequence.",
      "optional": "RLHF combines several stages and is not the only preference-training approach; Direct Preference Optimization provides an alternative formulation. Reward or preference improvement must still be checked against the real task and retained capabilities. A training signal can encourage a shortcut when the evaluation fails to capture the intended objective.",
      "kind": "comparison"
    },
    "36": {
      "title": "Research changes models and the systems around them",
      "lead": "Progress can come from a better model or from better ways of using it. A benchmark result needs to be checked against the task and conditions that actually matter.",
      "points": [
        "A tool-enabled system and the same model answering alone are different evaluated systems."
      ],
      "reading": [
        "Research explores spending more computation on difficult answers, using tools over longer tasks and combining text with images or audio. Other work improves efficiency, training data or evaluation methods. These directions affect both the model itself and the software that organizes information and actions around it.",
        "A benchmark is a defined test, not a guarantee for every application. Its results depend on prompts, tools, time budgets and scoring rules as well as the model. Look for tasks resembling the intended use and inspect what the test measures. Published demonstrations and research proposals should be distinguished from dependable capability in an actual workflow."
      ],
      "discussion": [
        "Which benchmark task resembles the work that actually needs help?"
      ],
      "notes": "Research explores spending more computation on difficult answers, using tools over longer tasks and combining text with images or audio. Other work improves efficiency, training data or evaluation methods. These directions affect both the model itself and the software that organizes information and actions around it.",
      "optional": "MMMU-Pro deliberately makes multimodal evaluation harder to answer using text shortcuts. ScienceAgentBench studies scientific analysis tasks with executable artifacts. These are useful measurement designs, not guarantees of laboratory reliability. Do not compare published scores across different versions, budgets or tool access as though only model weights changed.",
      "kind": "prose"
    },
    "37": {
      "title": "Trends describe measurements, not promises",
      "lead": "A trend is a measurement made under particular conditions. It becomes a forecast only after assumptions are added about what will continue.",
      "points": [
        "Ask what would make the forecast fail."
      ],
      "reading": [
        "Larger models and more training data can require much more computation. Research also studies improvements from better algorithms, data and deployment methods. A measured trend applies to the tasks and conditions in the study; it does not provide a universal formula connecting computer power with reasoning ability.",
        "A useful forecast names what is being measured, the period covered and the assumptions behind the prediction. It also identifies observations that would change the conclusion. For a practical project, compare available options on the required task. A better procedure, narrower model or stronger check may matter more than increasing size alone."
      ],
      "discussion": [
        "What observation would change confidence in a forecast of AI progress?"
      ],
      "notes": "Larger models and more training data can require much more computation. Research also studies improvements from better algorithms, data and deployment methods. A measured trend applies to the tasks and conditions in the study; it does not provide a universal formula connecting computer power with reasoning ability.",
      "optional": "A forecast should name the metric, time period, assumptions and conditions under which it would fail. For a practical project, reassess the available model and tools when requirements change instead of assuming that buying more compute or waiting for a larger model is the only path forward.",
      "kind": "prose"
    },
    "38": {
      "title": "Build a workflow that can be repeated",
      "lead": "Choose one useful task with a result that can be checked. Keep the procedure that works well enough for someone else to repeat it.",
      "points": [],
      "reading": [
        "A practical first experiment is a document summary whose key claims can be checked against the source, or a small calculation with a known answer. State what the result will be used for and provide the information that changes the answer. The goal is to discover whether the assistant improves this particular piece of work.",
        "Inspect the actual output and correct specific defects. Include review time when comparing with the previous method, and retain enough detail for another person to repeat the procedure. Additional autonomy or training can be tested later if a measured limitation justifies it."
      ],
      "discussion": [
        "What first task could another person repeat and check?"
      ],
      "notes": "Close by inviting a concrete first task, such as a source-checked summary or a calculation with a known answer. Ask what evidence would establish success, rather than repeating a three-part slogan.",
      "optional": "For a first scientific exercise, choose a published calculation, a synthetic dataset with a known answer or a small script with observable behavior. Compare an unaided baseline with the AI-assisted workflow, including verification time. The objective is a useful and reproducible result. More autonomy, longer reasoning or additional training should follow from a demonstrated need rather than being assumed improvements.",
      "kind": "prose"
    }
  },
  "engineer": {
    "1": {
      "title": "Engineer the evaluated system",
      "lead": "AI generated this guide’s draft prose, diagrams and code. Source review and executable checks remain part of assessing the result.",
      "points": [],
      "reading": [
        "This guide was drafted with AI assistance and remains an editorial work in progress. Its source links identify evidence for technical claims; they do not certify every sentence or demonstrate that a method will transfer to another application. The scientific example uses explicitly synthetic data and numerical code rather than a live model call.",
        "For an AI engineer, the evaluated object is the complete system. Changing the checkpoint, context assembly or tool implementation can change its behavior even when the user-facing prompt stays fixed. The useful question is whether the system produces an acceptable artifact under the intended operating conditions. A generated statement that the task is complete is one more claim to verify."
      ],
      "discussion": [
        "What evidence would distinguish a better model from a better surrounding workflow?"
      ],
      "notes": "Disclose the AI-assisted authorship before making any capability claim. Human editorial and language review remain pending. Treat the presentation itself as an example of generated work that needs source review and executable checks. The technical audience should evaluate the complete workflow rather than infer quality from the model label.",
      "optional": "The material supports independent reading, presentation and discussion. Short routes select a few practical ideas; longer routes add mechanisms and published experiments. Reading passages supply explanations without requiring a speaker, and discussion questions connect each topic to laboratory or engineering decisions. AI assisted the preparation of this revision; editorial review remains pending.",
      "kind": "prose"
    },
    "2": {
      "title": "Architectural history explains current components",
      "lead": "The timeline traces reusable mechanisms. Feedforward blocks remain inside Transformers, and explicit rules still surround learned models.",
      "points": [],
      "reading": [
        "Trace the components rather than treating history as successive replacements. Perceptrons learn decision boundaries; multilayer networks compose nonlinear mappings. Neural language models learn distributed representations, and Transformers reorganize sequence processing around attention and feedforward blocks. Tool orchestration then connects learned outputs to conventional computation. This decomposition helps locate which component an implementation change actually affects.",
        "This history is not a single progression from rules to intelligence. Convolutional networks capture spatial structure; recurrent networks and LSTMs model sequences; attention predates the Transformer. Feedforward layers remain central inside Transformers. The 1986 backpropagation paper popularized and demonstrated the method rather than originating every part of it. Language modeling also predates neural networks and conversational interfaces. These distinctions explain why a modern system can combine methods from several periods."
      ],
      "discussion": [
        "Which component of a current assistant can you trace to an earlier idea on this timeline?",
        "Why would replacing a sequence architecture leave the need for an execution environment unchanged?"
      ],
      "notes": "Trace the components rather than treating history as successive replacements. Perceptrons learn decision boundaries; multilayer networks compose nonlinear mappings. Neural language models learn distributed representations, and Transformers reorganize sequence processing around attention and feedforward blocks. Tool orchestration then connects learned outputs to conventional computation. This decomposition helps locate which component an implementation change actually affects.",
      "optional": "This history is not a single progression from rules to intelligence. Convolutional networks capture spatial structure; recurrent networks and LSTMs model sequences; attention predates the Transformer. Feedforward layers remain central inside Transformers. The 1986 backpropagation paper popularized and demonstrated the method rather than originating every part of it. Language modeling also predates neural networks and conversational interfaces. These distinctions explain why a modern system can combine methods from several periods.",
      "kind": "prose"
    },
    "3": {
      "title": "Explicit response rules versus optimized parameters",
      "lead": "ELIZA’s response transformations were written into its script; a neural language model’s response mapping is shaped by optimized parameters.",
      "points": [
        "ELIZA’s DOCTOR script matched text patterns and applied decomposition and reassembly rules.",
        "Neural language-model training adjusts weights against data and an objective; ordinary prompt conditioning uses the current weights."
      ],
      "reading": [
        "ELIZA’s DOCTOR script matched input patterns and applied hand-written decomposition and reassembly rules. A neural language model represents a parameterized mapping whose weights are optimized against data and a training objective. The implementation still executes programmed operations, but the response mapping is shaped by learned parameters.",
        "Architecture, data and objective remain engineering choices. Ordinary inference conditions on the prompt using the current weights; training updates those weights. A serving system can surround the learned model with deterministic rules, tools and validation."
      ],
      "notes": "Distinguish hand-authored response transformations from optimization of a parameterized mapping. Both run programmed operations; the distinction concerns how the response mapping is specified. Prompt conditioning and weight updates are separate mechanisms.",
      "optional": "People choose the architecture, data and training objective, even when the response mapping is learned. Ordinary prompting changes the current context; training changes weights. A deployed system can combine a trained model with explicit rules, tools and checks.",
      "discussion": [
        "Which response constraint would you implement as a deterministic rule even when a learned model is available?"
      ],
      "kind": "comparison"
    },
    "4": {
      "title": "Tokenizer boundaries are part of the interface",
      "lead": "A tokenizer is part of a model’s input contract. Equal token IDs across different tokenizers do not imply equal text or meaning.",
      "points": [
        "Preserve exact text across model handoffs; re-encode it with the receiving tokenizer.",
        "Count the complete rendered request, including templates and tool schemas, when estimating input size."
      ],
      "reading": [
        "The IDs in the figure belong to two distinct vocabularies. The first two rows encode the exact ASCII string strawberry without whitespace or a chat template. Each sequence decodes to the same string, even though the first token ends at a different character.",
        "The application may also insert a chat template or serialize tool definitions. Those additions affect the model’s actual input. For a multi-model pipeline, pass the original text or a documented representation rather than assuming token IDs are portable. Token count helps account for context and processing; it is not a calibrated measure of problem difficulty."
      ],
      "discussion": [
        "What must be recorded to reproduce token counts from an agent request?",
        "How would you detect information loss introduced by a model-to-model handoff?"
      ],
      "notes": "Token IDs and segmentation belong to a particular tokenizer, not a universal interchange format. Technical strings, punctuation and uncommon identifiers can change the relationship between visible length and token count. Preserve exact text when passing tasks between models, and measure with the tokenizer used by the actual inference path. Token count is a resource measure, not a direct difficulty estimate.",
      "optional": "With no leading space, cl100k_base splits strawberry into str, aw and berry. The o200k_base encoding splits it into st, raw and berry. Both have three tokens in this example, but their boundaries and IDs differ. Add one leading space and o200k_base encodes the space and the whole word as a single token. The word still contains three r’s.",
      "kind": "list"
    },
    "5": {
      "title": "Direct prediction and tool execution on the same string",
      "lead": "In a recorded GPT‑4o session, the follow-up preserves the target string and requests an executable operation. The tool trace lets us check the argument as well as the returned value.",
      "points": [],
      "reading": [
        "Krakowski’s Figure 2 shows a November 3, 2024 GPT‑4o chat. The direct count of lowercase r in strawberry was 2. In the same conversation the user repeated the request with “Use Python.” The analysis pane shows the binding text = \"strawberry\", the call text.count(\"r\"), and the returned integer 3. The assistant’s subsequent answer agrees with that return value.",
        "The trace establishes the literal and operation used for the tool answer. It supplies no trace of the computation behind the first answer. A tokenization diagram can illustrate one representational difficulty, while attribution of a specific error requires a separate experiment. This one observed pair also supplies no estimate of error rates for other prompts or checkpoints.",
        "A fresh Codex session was asked for an English animal name whose letters, reversed, spell a plant. It answered deer → reed directly. In the same session it ran Python over five animal names and five plant names and confirmed this as the only match in those lists. An independent search of WordNet 3.0 also found that one pair among 5,934 eligible animal spellings and 4,762 plant spellings. The vocabulary and category definitions determine what counts as a solution."
      ],
      "discussion": [
        "Which parts of the second answer can be audited from the tool trace? What would it take to attribute the first answer to tokenization?",
        "What would you need to specify before saying you had found every solution?"
      ],
      "notes": "Show the direct answer first. Give the audience a moment to find the three letters, then open the Python follow-up and trace the code from its input to its return value. The editable browser counter below is a separate demonstration.",
      "optional": "The source identifies the model, date and visible exchange. It does not report a checkpoint snapshot, sampling settings or a multi-trial evaluation.",
      "kind": "prose"
    },
    "6": {
      "title": "Write prompts as testable specifications",
      "lead": "A useful prompt makes the acceptance test legible to the model. Keep constraints that change correctness and remove instructions that repeat the same requirement.",
      "points": [],
      "reading": [
        "A prompt is an interface contract for a probabilistic component. Supply the task, authoritative inputs, output structure and constraints that affect correctness. Use examples when they disambiguate a format or decision boundary. Remove redundant instructions while retaining edge cases. Evaluate revisions against representative fixtures rather than judging prompt quality by brevity or by one convincing response.",
        "A reusable brief has six slots: goal, context, constraints, audience, desired output and acceptance criteria. Fill only the slots that matter. Examples can clarify an ambiguous format more effectively than several paragraphs of adjectives. A constraint that changes the answer deserves to remain even in a concise prompt."
      ],
      "discussion": [
        "Which missing detail in the decay-fitting prompt could change the numerical answer?",
        "What representative failures would you use to compare two prompt revisions?"
      ],
      "notes": "A prompt is an interface contract for a probabilistic component. Supply the task, authoritative inputs, output structure and constraints that affect correctness. Use examples when they disambiguate a format or decision boundary. Remove redundant instructions while retaining edge cases. Evaluate revisions against representative fixtures rather than judging prompt quality by brevity or by one convincing response.",
      "optional": "A reusable brief has six slots: goal, context, constraints, audience, desired output and acceptance criteria. Fill only the slots that matter. Examples can clarify an ambiguous format more effectively than several paragraphs of adjectives. A constraint that changes the answer deserves to remain even in a concise prompt.",
      "kind": "prose"
    },
    "7": {
      "title": "Separate orchestration from numerical inference",
      "lead": "The language model proposes an analysis; numerical code minimizes an explicit objective. Inspect that computation before interpreting the residuals.",
      "points": [],
      "reading": [
        "The demonstration fits f(t; θ) by minimizing χ² = Σᵢ[(yᵢ − f(tᵢ; θ))/σᵢ]² for the same synthetic observations under both candidate models. The supplied σ is held fixed. The browser executes a numerical search, while the language-model role in the example is to propose code or interpret its returned results. Generated source code alone does not prove that the calculation ran.",
        "A pattern in the residuals can expose a missing term, correlated error or another mismatch between the model and the observations. It does not identify a unique physical mechanism. Here a constant background was deliberately included in the generating process. AIC = χ² + 2k, with a common Gaussian constant omitted, compares these candidates under the stated noise assumptions. Approximate covariance errors describe local parameter uncertainty within a chosen model; they omit model-selection uncertainty and unmodeled systematics."
      ],
      "discussion": [
        "What would you check before interpreting a lower AIC as evidence for an added physical component?"
      ],
      "notes": "The language model selects or generates an analysis; numerical code executes fitting and residual calculations. Inspect the actual objective, units and uncertainty assumptions. In the synthetic demo, model comparisons share the same data and stated noise assumptions. An information criterion compares specified candidate fits under its assumptions; local covariance estimates do not establish global identifiability or a correct physical model.",
      "optional": "The decay data are synthetic and illustrate analysis choices rather than measurements of a physical system. A numerical optimizer minimizes an objective; it does not establish a physical mechanism. Generated code is not proof of execution, and a written interpretation must be checked against the actual numerical results and residual structure.",
      "kind": "prose"
    },
    "8": {
      "title": "Turn feedback into a regression condition",
      "lead": "A correction becomes useful engineering evidence when it can be turned into a reproducible regression case.",
      "points": [
        "Retain the failing input and the artifact that demonstrates the mismatch.",
        "Describe the expected behavior and the evidence supporting it.",
        "Bound the repair so already validated behavior is preserved.",
        "Re-run the relevant acceptance check on the changed artifact."
      ],
      "reading": [
        "Translate a complaint into an observable mismatch: unit conversion, invalid schema, structured residuals or an omitted constraint. Provide the evidence and bound the edit. Preserve validated artifacts so a broad rewrite does not introduce unrelated changes. Evaluate the repaired output with the original acceptance criteria plus a targeted check for the discovered failure, rather than accepting the model’s diagnosis alone.",
        "When the model challenges your interpretation, evaluate the evidence instead of forcing agreement. Conversely, a fluent explanation of its earlier error is not proof that the repair is correct. Check the changed artifact or computation itself."
      ],
      "discussion": [
        "How would you distinguish a repaired calculation from a more convincing explanation of the original error?",
        "When should a new failure change the evaluation set rather than only the prompt?"
      ],
      "notes": "Translate a complaint into an observable mismatch: unit conversion, invalid schema, structured residuals or an omitted constraint. Provide the evidence and bound the edit. Preserve validated artifacts so a broad rewrite does not introduce unrelated changes. Evaluate the repaired output with the original acceptance criteria plus a targeted check for the discovered failure, rather than accepting the model’s diagnosis alone.",
      "optional": "When the model challenges your interpretation, evaluate the evidence instead of forcing agreement. Conversely, a fluent explanation of its earlier error is not proof that the repair is correct. Check the changed artifact or computation itself.",
      "kind": "steps"
    },
    "9": {
      "title": "Choose procedural constraints deliberately",
      "lead": "Constrain a procedure when reproducing the procedure is part of the task. Otherwise, allow a proposed method and assess the result against the same acceptance criteria.",
      "points": [
        "Method-constrained work: pin the calibration or statistical protocol whose result is being reproduced.",
        "Outcome-constrained work: permit alternative implementations that satisfy the stated contract."
      ],
      "reading": [
        "Separate hard constraints from a suggested plan. Reproduction of a published method requires the method and assumptions to be explicit; an open synthesis task may benefit from allowing the model to choose intermediate steps. Compare these prompting strategies under the same acceptance criteria and resource budget. Request concise justification and inspectable evidence rather than treating verbose reasoning as validation.",
        "Provider guidance changes with models. Compare a goal-level prompt and a prescribed workflow on representative tasks before treating either style as a universal rule. An explanation is useful for review, but length is not a direct measure of reliability."
      ],
      "discussion": [
        "Which parts of your task are scientific requirements, and which are merely a suggested implementation?"
      ],
      "notes": "Separate hard constraints from a suggested plan. Reproduction of a published method requires the method and assumptions to be explicit; an open synthesis task may benefit from allowing the model to choose intermediate steps. Compare these prompting strategies under the same acceptance criteria and resource budget. Request concise justification and inspectable evidence rather than treating verbose reasoning as validation.",
      "optional": "Provider guidance changes with models. Compare a goal-level prompt and a prescribed workflow on representative tasks before treating either style as a universal rule. An explanation is useful for review, but length is not a direct measure of reliability.",
      "kind": "comparison"
    },
    "10": {
      "title": "Evaluate cascades at the handoff boundary",
      "lead": "A model cascade adds a transformation that can lose constraints. Evaluate the handoff and the final result separately.",
      "points": [
        "Direct call: the specialist receives the authoritative request and source material.",
        "Cascade: a preparation model constructs a brief, so omissions and invented assumptions become additional failure modes."
      ],
      "reading": [
        "A preparation model transforms the original request into a specialist brief. Evaluate that transformation explicitly: preserved constraints, source access, uncertainty and invented assumptions. Compare the cascade with a direct call using the same end-task scoring. Include duplicated context, latency, checking and retries. The optimal boundary depends on task structure; a cheaper first stage is not sufficient evidence of lower total cost.",
        "The specialist might be a frontier model, a tuned small model or conventional software. The handoff should distinguish facts, assumptions and proposed actions, and retain access to source material when details matter. Measure total cost, delay, review effort and failure rate, including the preparation call. An extra model stage is a design choice to test, not an automatic quality improvement."
      ],
      "discussion": [
        "What information must survive a preparation-model handoff verbatim?",
        "Which end-task evidence could justify the additional stage’s cost?"
      ],
      "notes": "A preparation model transforms the original request into a specialist brief. Evaluate that transformation explicitly: preserved constraints, source access, uncertainty and invented assumptions. Compare the cascade with a direct call using the same end-task scoring. Include duplicated context, latency, checking and retries. The optimal boundary depends on task structure; a cheaper first stage is not sufficient evidence of lower total cost.",
      "optional": "The specialist might be a frontier model, a tuned small model or conventional software. The handoff should distinguish facts, assumptions and proposed actions, and retain access to source material when details matter. Measure total cost, delay, review effort and failure rate, including the preparation call. An extra model stage is a design choice to test, not an automatic quality improvement.",
      "kind": "comparison"
    },
    "11": {
      "title": "Distinguish tone effects from corrective information",
      "lead": "Tone changes the input, but a repair experiment is easier to interpret when the corrective information is explicit and stable.",
      "points": [
        "“The input times are in milliseconds. Convert them consistently, repeat the fit on the same observations, and identify which reported quantities change.”"
      ],
      "reading": [
        "Tone changes the input distribution, but politeness research does not establish a universal accuracy rule. When a response fails, specify the counterexample and required correction instead of confounding the repair with emotional emphasis. Ask for uncertainty that affects decisions and check whether the model merely agrees with the proposed explanation. Conversational adaptation is not evidence of a persistent weight update.",
        "A useful correction format is: observation, evidence, requested change, and what to preserve. If the assistant has misunderstood the objective several times, restate the current brief and remove obsolete instructions. Do not assume a conversation's apparent learning persists into a new session or model version."
      ],
      "discussion": [
        "How would you separate an effect of tone from an effect of supplying the missing fact?"
      ],
      "notes": "Politeness studies report effects within their tested languages and tasks; they do not establish a universal accuracy rule for anger or gratitude. Emotional pressure can also encourage agreement with a mistaken diagnosis. The example correction communicates a verifiable unit error. Ordinary conversational feedback is not evidence that the serving model’s weights were updated.",
      "optional": "A useful correction format is: observation, evidence, requested change, and what to preserve. If the assistant has misunderstood the objective several times, restate the current brief and remove obsolete instructions. Do not assume a conversation's apparent learning persists into a new session or model version.",
      "kind": "prose"
    },
    "12": {
      "title": "Context construction is an information pipeline",
      "lead": "Context assembly can introduce errors before the model reasons about the task. Preserve a trace from authoritative sources to the input actually delivered.",
      "points": [
        "Retrieval may omit the exception that changes a conclusion.",
        "Compaction may turn a tentative interpretation into an asserted fact.",
        "Tool output may be stale even when its format is valid.",
        "Persistent notes may outlive the assumptions under which they were written."
      ],
      "reading": [
        "Treat context assembly as a transformation of authoritative records into the model’s working input. Track which requirements and sources were actually included. Summaries can change epistemic status by converting tentative statements into facts; retrieval can omit decisive exceptions. Retain provenance and inspect failures at the retrieval or compaction boundary before attributing them to reasoning capacity or insufficient model size.",
        "An application may compact or retrieve conversation history rather than send every past message on every call. Context, persistent notes and trained weights have different lifetimes. When a requirement is critical, put it in the current task or an authoritative document the agent can read."
      ],
      "discussion": [
        "Which context boundary would you inspect first when a correct source produces a wrong answer?",
        "What provenance must survive a summary so a later agent can question it?"
      ],
      "notes": "Treat context assembly as a transformation of authoritative records into the model’s working input. Track which requirements and sources were actually included. Summaries can change epistemic status by converting tentative statements into facts; retrieval can omit decisive exceptions. Retain provenance and inspect failures at the retrieval or compaction boundary before attributing them to reasoning capacity or insufficient model size.",
      "optional": "An application may compact or retrieve conversation history rather than send every past message on every call. Context, persistent notes and trained weights have different lifetimes. When a requirement is critical, put it in the current task or an authoritative document the agent can read.",
      "kind": "list"
    },
    "13": {
      "title": "Select the intervention by the failure mechanism",
      "lead": "Choose an intervention that addresses the observed failure. Updating weights is only one way to specialize a system.",
      "points": [
        "Prompt changes specify a task or clarify an output contract.",
        "Skills package a repeatable procedure with supporting resources.",
        "Retrieval supplies external facts that must remain current.",
        "Fine-tuning changes learned behavior and requires a new evaluation."
      ],
      "reading": [
        "Classify a failure before choosing adaptation. Missing current facts suggest retrieval; inconsistent procedure suggests instructions or a reusable skill; persistent learned behavior may justify tuning. Compare each intervention with a baseline and account for maintenance. Combining methods is legitimate, but a successful combined system does not isolate which component caused the improvement without additional comparisons.",
        "A skill is not a guarantee of expertise or execution permission. Loading instructions does not update neural weights. A retrieval result is evidence to evaluate, and a trained adapter may still need current documents and reliable tools."
      ],
      "discussion": [
        "Which evidence would justify fine-tuning instead of changing retrieval or the tool interface?"
      ],
      "notes": "Classify a failure before choosing adaptation. Missing current facts suggest retrieval; inconsistent procedure suggests instructions or a reusable skill; persistent learned behavior may justify tuning. Compare each intervention with a baseline and account for maintenance. Combining methods is legitimate, but a successful combined system does not isolate which component caused the improvement without additional comparisons.",
      "optional": "A skill is not a guarantee of expertise or execution permission. Loading instructions does not update neural weights. A retrieval result is evidence to evaluate, and a trained adapter may still need current documents and reliable tools.",
      "kind": "comparison"
    },
    "14": {
      "title": "Permissions are an execution-layer property",
      "lead": "The application and operating system determine an agent’s effective access. A prompt describing a boundary does not enforce that boundary.",
      "points": [
        "A command-line agent can be restricted to one directory, while a browser assistant can have connectors that change external records."
      ],
      "reading": [
        "Inspect the actual tool surface, filesystem scope and execution environment. A browser assistant may have powerful connectors; a command-line agent may be confined to a directory. Define the required resources and verify state changes after execution. Disposable environments and explicit interfaces can bound a development workflow, but a submitted command is still distinct from a successful task outcome.",
        "Useful boundaries include selected directories, read-only data access, a disposable environment, and explicit control interfaces. Permissions come from the application and operating system. A natural-language instruction alone is not an access-control mechanism."
      ],
      "discussion": [
        "How would you verify the difference between the access an agent claims and the access it actually has?",
        "What final-state check should accompany a successful tool return?"
      ],
      "notes": "Inspect the actual tool surface, filesystem scope and execution environment. A browser assistant may have powerful connectors; a command-line agent may be confined to a directory. Define the required resources and verify state changes after execution. Disposable environments and explicit interfaces can bound a development workflow, but a submitted command is still distinct from a successful task outcome.",
      "optional": "Useful boundaries include selected directories, read-only data access, a disposable environment, and explicit control interfaces. Permissions come from the application and operating system. A natural-language instruction alone is not an access-control mechanism.",
      "kind": "prose"
    },
    "15": {
      "title": "Keep architecture, learning method and orchestration distinct",
      "lead": "An agent can coordinate components built with different methods. Architecture, generative procedure and orchestration describe different aspects of the system.",
      "points": [
        "A Transformer is an architecture that can serve as a language model component or a diffusion denoiser.",
        "Diffusion learns a reverse denoising process; it can therefore use a Transformer rather than being an alternative to one."
      ],
      "reading": [
        "Transformer names an architecture; autoregression and diffusion describe different modeling or generation procedures. DiT demonstrates a Transformer denoiser, so diffusion versus Transformer is not an architectural dichotomy. Above model components, an orchestration layer selects tools and interprets their returned state. A numerical optimizer, API and image generator can participate in one workflow without sharing a learning method.",
        "ReAct is an influential example of interleaving model reasoning with external actions, not a specification implemented by every agent. A tool may execute conventional code, call another model or access an application. Diffusion provides a short architectural comparison here; the main subject is specifying tasks and reviewing the systems that coordinate tools."
      ],
      "discussion": [
        "When an agent calls a numerical optimizer, which component is responsible for the numerical result?",
        "What does a diffusion Transformer show about treating architecture names as complete system categories?"
      ],
      "notes": "Transformer names an architecture; autoregression and diffusion describe different modeling or generation procedures. DiT demonstrates a Transformer denoiser, so diffusion versus Transformer is not an architectural dichotomy. Above model components, an orchestration layer selects tools and interprets their returned state. A numerical optimizer, API and image generator can participate in one workflow without sharing a learning method.",
      "optional": "ReAct is an influential example of interleaving model reasoning with external actions, not a specification implemented by every agent. A tool may execute conventional code, call another model or access an application. Diffusion provides a short architectural comparison here; the main subject is specifying tasks and reviewing the systems that coordinate tools.",
      "kind": "comparison"
    },
    "16": {
      "title": "Close the loop on state, not tool return codes",
      "lead": "A tool-using loop needs a state check after the action. Exit status alone cannot establish that the task’s intended state was reached.",
      "points": [
        "Observe the relevant state and source revision.",
        "Choose a permitted action with explicit arguments.",
        "Execute it through the tool interface.",
        "Check the resulting artifact or state against the task contract."
      ],
      "reading": [
        "An agent loop reads state, selects an action, invokes a tool and evaluates the result. Instrument those boundaries so a failure can be assigned to missing context, an invalid action, tool execution or the evaluator. A successful process exit is insufficient if the artifact violates the task. Prefer a fixed workflow when the required transitions are known and flexibility adds little value.",
        "Evaluate both the final artifact and the path used to produce it. Tests can also be wrong or underspecified. Keep a record sufficient to distinguish model misunderstanding, missing context, tool failure and a faulty evaluation."
      ],
      "discussion": [
        "What should the loop do when execution succeeds but the result check fails?"
      ],
      "notes": "An agent loop reads state, selects an action, invokes a tool and evaluates the result. Instrument those boundaries so a failure can be assigned to missing context, an invalid action, tool execution or the evaluator. A successful process exit is insufficient if the artifact violates the task. Prefer a fixed workflow when the required transitions are known and flexibility adds little value.",
      "optional": "Evaluate both the final artifact and the path used to produce it. Tests can also be wrong or underspecified. Keep a record sufficient to distinguish model misunderstanding, missing context, tool failure and a faulty evaluation.",
      "kind": "steps"
    },
    "17": {
      "title": "Separate acquisition errors from model errors",
      "lead": "Vision performance includes the acquisition path. A model cannot diagnose every camera or preprocessing error from the resulting image alone.",
      "points": [
        "Establish capture quality with a known target under recorded lighting and focus conditions.",
        "Verify preprocessing preserves the spatial information required by the task.",
        "Evaluate the model on representative captured inputs.",
        "Verify any physical action through its own feedback path."
      ],
      "reading": [
        "Camera capture, transport, preprocessing, inference and actuation are separate stages. Use known targets to establish acquisition quality before evaluating model interpretation. Record exposure, focus, lighting and relevant software configuration. USB expansion changes available interfaces but shares power and transport constraints. Keep physical effects behind explicit control paths with post-action checks rather than treating a vision output as an execution receipt.",
        "Expansion remains constrained by driver compatibility, electrical power and shared bus bandwidth. A hub creates connection points rather than unlimited independent capacity. A reproducible demonstration records the capture settings, lighting, software version and expected result. Physical actions require their own control and verification loop; correct image interpretation alone does not demonstrate correct actuation."
      ],
      "discussion": [
        "Which experiment would separate a perception failure from a change in exposure or image scaling?",
        "How could adding a USB device affect an otherwise working acquisition system?"
      ],
      "notes": "Camera capture, transport, preprocessing, inference and actuation are separate stages. Use known targets to establish acquisition quality before evaluating model interpretation. Record exposure, focus, lighting and relevant software configuration. USB expansion changes available interfaces but shares power and transport constraints. Keep physical effects behind explicit control paths with post-action checks rather than treating a vision output as an execution receipt.",
      "optional": "Expansion remains constrained by driver compatibility, electrical power and shared bus bandwidth. A hub creates connection points rather than unlimited independent capacity. A reproducible demonstration records the capture settings, lighting, software version and expected result. Physical actions require their own control and verification loop; correct image interpretation alone does not demonstrate correct actuation.",
      "kind": "steps"
    },
    "18": {
      "title": "Place computation using data-flow and memory constraints",
      "lead": "Place computation around the model’s working set and the permitted data flow. A faster network link does not create a transparent shared-memory machine.",
      "points": [
        "Near-sensor inference reduces the need to move raw observations.",
        "A dedicated accelerator requires a compatible model and runtime.",
        "A workstation offers different memory and maintenance tradeoffs from a managed endpoint.",
        "Hosted inference changes where inputs are processed and where operational control resides."
      ],
      "reading": [
        "Partition a deployment by required models, sensor proximity, data boundaries and operational ownership. Check compatibility and peak working memory before selecting hardware. A local model can reduce external transfer while still leaking through logs or connected services. Distributed execution requires explicit software support and communication accounting; a link specification alone does not predict throughput or create a unified memory pool.",
        "The AI HAT+ 2 documentation specifies 8 GB of dedicated accelerator memory. NVIDIA documents a 200 Gb/s network link for connecting DGX Sparks; this is not a model-speed measurement or an automatic shared-memory pool. Local privacy also depends on logs, retention, remote calls and configuration. Deployment should be evaluated as a complete data flow."
      ],
      "discussion": [
        "What memory and data-flow evidence would you collect before choosing a deployment tier?"
      ],
      "notes": "The AI HAT+ 2 and Spark examples concern deployment roles, compatibility and memory. The documented 200 Gb/s Spark interconnect is a networking specification, not a measured model rate or a claim of automatic shared memory. No Spark compute-speed figure belongs in the presentation. Local processing can still send data through logs or connected services, so follow the entire data path.",
      "optional": "The AI HAT+ 2 documentation specifies 8 GB of dedicated accelerator memory. NVIDIA documents a 200 Gb/s network link for connecting DGX Sparks; this is not a model-speed measurement or an automatic shared-memory pool. Local privacy also depends on logs, retention, remote calls and configuration. Deployment should be evaluated as a complete data flow.",
      "kind": "comparison"
    },
    "19": {
      "title": "Inference budget is part of the evaluated configuration",
      "lead": "Inference effort is a budget within a protocol. Candidate generation and search change that protocol, even when the model weights stay fixed.",
      "points": [
        "Sequential deliberation extends work along a response trajectory.",
        "Candidate-based protocols spend additional work generating alternatives and selecting among them; a mistaken verifier can erase the benefit."
      ],
      "reading": [
        "Distinguish a model’s exposed effort setting from a protocol that generates candidates, invokes tools or searches over partial solutions. These interventions have different failure modes. Compare complete protocols under specified budgets and report the acceptance test. More computation may improve difficult tasks without helping a narrow detector, and a verifier can itself select an incorrect candidate.",
        "Report which inference protocol produced a benchmark score. A model with tools, a long budget and many attempts is a different evaluated system from the same weights answering once. Token counts and elapsed time are useful accounting measures but do not by themselves explain the quality difference."
      ],
      "discussion": [
        "What must be held fixed before comparing two reasoning-effort settings?",
        "How would you evaluate the selector separately from the candidate generator?"
      ],
      "notes": "Distinguish a model’s exposed effort setting from a protocol that generates candidates, invokes tools or searches over partial solutions. These interventions have different failure modes. Compare complete protocols under specified budgets and report the acceptance test. More computation may improve difficult tasks without helping a narrow detector, and a verifier can itself select an incorrect candidate.",
      "optional": "Report which inference protocol produced a benchmark score. A model with tools, a long budget and many attempts is a different evaluated system from the same weights answering once. Token counts and elapsed time are useful accounting measures but do not by themselves explain the quality difference.",
      "kind": "comparison"
    },
    "20": {
      "title": "Optimize cost per accepted result",
      "lead": "Optimize cost per accepted task. A lower token price can be offset by more retries or a larger human-review burden.",
      "points": [],
      "reading": [
        "Measure preparation, input and output tokens, tool work, retries and human review at the workflow level. Escalate hard subproblems only when the handoff preserves the relevant evidence. Parallel independent checks can reduce elapsed time while duplicating context and adding coordination. Compare these designs on the same fixtures and acceptance gate rather than extrapolating from per-token prices.",
        "A generic model cascade can prepare a brief cheaply and escalate a focused hard step to a more capable model. Its value must include the cost of checking the handoff. Model names, effort scales, credit rates and caching policies vary across providers and versions; use actual usage records when comparing alternatives. A redundant tool loop can dominate the cost of a short conversational exchange."
      ],
      "discussion": [
        "Which workflow costs are missing from a comparison based only on tokens per response?"
      ],
      "notes": "Measure preparation, input and output tokens, tool work, retries and human review at the workflow level. Escalate hard subproblems only when the handoff preserves the relevant evidence. Parallel independent checks can reduce elapsed time while duplicating context and adding coordination. Compare these designs on the same fixtures and acceptance gate rather than extrapolating from per-token prices.",
      "optional": "A generic model cascade can prepare a brief cheaply and escalate a focused hard step to a more capable model. Its value must include the cost of checking the handoff. Model names, effort scales, credit rates and caching policies vary across providers and versions; use actual usage records when comparing alternatives. A redundant tool loop can dominate the cost of a short conversational exchange.",
      "kind": "prose"
    },
    "21": {
      "title": "Account for weights, cache and attention separately",
      "lead": "Longer context and larger parameter count stress different resources. Account for each term before calling the whole system quadratic.",
      "points": [
        "Raw weights occupy P × b_w bytes, where b_w is stored bytes per parameter.",
        "A conventional KV cache is roughly 2BLn h_kv d_h b_kv bytes for a fixed decoder configuration.",
        "Dense prompt attention contains an O(BLn²d) arithmetic term.",
        "With a KV cache, one new token’s attention contains an O(BLnd) term; projections and feedforward work remain."
      ],
      "reading": [
        "Let B be batch size, L the number of layers, n context length, h_kv the number of key/value heads and d_h their head dimension. Storing keys and values at b_kv bytes per element gives the conventional cache estimate 2BLn h_kv d_h b_kv. Grouped-query attention changes h_kv. Quantized caches and nonstandard architectures require their own accounting. Weight storage has a separate dependence on parameter count and representation precision.",
        "For fixed hidden width d, exact dense attention over a full prompt includes pairwise work proportional to n²d per layer and batch item. Cached decoding reuses previous keys and values, so its new-token attention work grows roughly linearly with the existing context. FlashAttention improves how exact attention uses memory and avoids storing the full attention matrix; it does not remove the quadratic prompt-attention arithmetic. These expressions omit other model operations and are not end-to-end latency predictions."
      ],
      "discussion": [
        "Which term becomes dominant when you increase context while keeping weights and batch fixed?",
        "What changes in this accounting when a model uses grouped-query attention?"
      ],
      "notes": "Weight storage scales with parameter count and representation precision. For a fixed architecture and batch, the key–value cache grows roughly linearly with context. Dense prompt attention performs pairwise token work, while matrix projections and feedforward blocks add other terms. FlashAttention changes memory traffic and avoids materializing the full attention matrix; it does not eliminate exact dense attention’s quadratic arithmetic term.",
      "optional": "For a fixed layer width d and context n, attention contains an O(n²d) term, while projections and feedforward layers also consume compute. Cached generation adds one new token at a time, so its per-token cost differs from processing an entire prompt. Architecture, grouped-query attention, batching and precision change constants and memory requirements.",
      "kind": "list"
    },
    "22": {
      "title": "The optimization target is not the application contract",
      "lead": "A training objective supplies the optimization signal. Reducing that objective does not by itself establish compliance with an application contract.",
      "points": [
        "Run the forward computation with the current parameters.",
        "Evaluate the loss against the chosen target.",
        "Backpropagate derivatives through the computation graph.",
        "Apply an optimizer update; basic SGD illustrates θ ← θ − η∇θℒ."
      ],
      "reading": [
        "A forward pass produces predictions, the loss evaluates them against a target, and backpropagation supplies gradients to an optimizer. Specify which parameters receive updates and what signal the objective rewards. Diagnose whether improvements reflect intended structure, memorization or a shortcut. Ordinary inference applies the learned mapping without running this parameter-update loop, even when the surrounding application retains conversational context.",
        "Gradients indicate local sensitivity, not a human-readable explanation of stored knowledge. A model can reduce training loss while overfitting or learning shortcuts. Separate data for evaluation is needed to ask whether the learned behavior transfers to the cases that matter."
      ],
      "discussion": [
        "What shortcut could lower the training loss without improving the intended behavior?",
        "Which parameters and optimizer state must be restored to reproduce the next update after a pause?"
      ],
      "notes": "A forward pass produces predictions, the loss evaluates them against a target, and backpropagation supplies gradients to an optimizer. Specify which parameters receive updates and what signal the objective rewards. Diagnose whether improvements reflect intended structure, memorization or a shortcut. Ordinary inference applies the learned mapping without running this parameter-update loop, even when the surrounding application retains conversational context.",
      "optional": "Gradients indicate local sensitivity, not a human-readable explanation of stored knowledge. A model can reduce training loss while overfitting or learning shortcuts. Separate data for evaluation is needed to ask whether the learned behavior transfers to the cases that matter.",
      "kind": "steps"
    },
    "23": {
      "title": "Compare training methods by initialization and trainable scope",
      "lead": "Training scope and training objective are separate choices. “Full fine-tuning” specifies which parameters can change, not whether the model started from random weights.",
      "points": [
        "From scratch: initialize a new model and learn the required representations from data.",
        "Continued pretraining: continue a broad prediction objective from a pretrained checkpoint.",
        "Full fine-tuning: update the base parameters for the adaptation workload.",
        "LoRA: train a factorized update while freezing the base weights.",
        "QLoRA: train adapters through a frozen base stored at low precision."
      ],
      "reading": [
        "Record the starting checkpoint, objective, data exposure and parameter scope. Foundation-scale from-scratch training lacks pretrained representations and requires a different resource budget from targeted adaptation. Full fine-tuning updates the base; LoRA updates factorized additions; QLoRA also quantizes the frozen base. A tiny task-specific model can still make from-scratch learning practical when the target behavior is narrow and the data support it.",
        "Continued pretraining usually continues a broad prediction objective on additional domain data; supervised fine-tuning uses task demonstrations. Full fine-tuning describes which parameters change, not whether the model began from scratch. Adapter tuning still needs forward and backward computation through the relevant model layers."
      ],
      "discussion": [
        "How would you describe an experiment precisely enough to distinguish its initialization, objective and trainable parameter scope?"
      ],
      "notes": "Record the starting checkpoint, objective, data exposure and parameter scope. Foundation-scale from-scratch training lacks pretrained representations and requires a different resource budget from targeted adaptation. Full fine-tuning updates the base; LoRA updates factorized additions; QLoRA also quantizes the frozen base. A tiny task-specific model can still make from-scratch learning practical when the target behavior is narrow and the data support it.",
      "optional": "Continued pretraining usually continues a broad prediction objective on additional domain data; supervised fine-tuning uses task demonstrations. Full fine-tuning describes which parameters change, not whether the model began from scratch. Adapter tuning still needs forward and backward computation through the relevant model layers.",
      "kind": "comparison"
    },
    "24": {
      "title": "Estimate compute and peak memory with separate models",
      "lead": "C ≈ 6ND estimates dense training work; peak memory needs a separate model of the live tensors. Neither estimate determines runtime on a particular device.",
      "points": [],
      "reading": [
        "In the rough dense-training relation C ≈ 6ND, N is parameter count and D is the number of presented tokens, including repeats. A 7B model exposed to 1T tokens gives about 4.2 × 10²² FLOPs; exposing the same model to 10M tokens gives about 4.2 × 10¹⁷ FLOPs under the same approximation. This illustrates the workload difference between large pretraining and a much smaller adaptation corpus. It does not predict the quality reached or establish a device time.",
        "Raw 7B weights occupy about 14 decimal GB at 16 bits or 3.5 GB at 4 bits, before quantization metadata. A training allocation also depends on which gradients and optimizer states are materialized. Activations and temporary buffers depend on sequence length and batch configuration. Checkpointing or sharding can reduce one memory term while adding recomputation or communication. For LoRA, counting only trainable adapter parameters in place of N would omit computation through the frozen base."
      ],
      "discussion": [
        "Why can a model fit for inference but fail during a training update?",
        "What measurements are needed to turn a FLOP estimate into a credible runtime range?"
      ],
      "notes": "For dense training, parameter count N and presented tokens D give the rough compute estimate C ≈ 6ND. A 7B model over 1T tokens gives about 4.2 × 10²² FLOPs. Raw 7B weights require about 14 decimal GB at 16 bits or 3.5 GB at 4 bits. Peak training memory additionally depends on activations, gradients, optimizer state and temporary buffers.",
      "optional": "For comparison, 7 billion parameters exposed to 10 million tuning tokens gives about 4.2 × 10¹⁷ FLOPs under the same dense approximation, before omitted costs. LoRA compute cannot be estimated by replacing N with only its trainable adapter parameters. Mixed-precision optimizer layouts, activation checkpointing and sharding change the memory budget. FLOP estimates do not determine runtime on a particular machine.",
      "kind": "prose"
    },
    "25": {
      "title": "LoRA reduces trainable state through a rank constraint",
      "lead": "For W ∈ ℝ^(d_out×d_in), LoRA learns ΔW = (α/r)BA using r(d_in + d_out) trainable parameters instead of d_in d_out.",
      "points": [],
      "reading": [
        "The rank-r factors have shapes B ∈ ℝ^(d_out×r) and A ∈ ℝ^(r×d_in). Their product supplies a constrained update to the frozen matrix W. The scale α/r is a common LoRA convention. For r much smaller than both matrix dimensions, the factors require far fewer trainable parameters than a full matrix update, reducing gradient and optimizer storage for the adapted weights.",
        "The frozen base still participates in the forward computation. Learning adapters in earlier layers also requires gradient propagation through relevant later operations, so the fraction of trainable parameters is not a proportional FLOP-saving estimate. Target-module placement changes both adaptation capacity and memory. Adapter and base identities must match at deployment; merging the update into the weights is implementation- and precision-dependent."
      ],
      "discussion": [
        "How would you vary rank without confounding the comparison with target-module placement?",
        "Which memory terms remain when every base matrix is frozen?"
      ],
      "notes": "For an adapted matrix, parameterize ΔW = BA at a chosen rank and freeze the base weights. This removes full-base weight gradients and optimizer state, but activations and gradient propagation through relevant layers remain. Target-module selection and rank constrain the learned update. Evaluate them against task and retention criteria instead of interpreting trainable-parameter reduction as proportional FLOP reduction.",
      "optional": "The update W′ = W + BA can sometimes be merged into weights for deployment, subject to the implementation and precision. An adapter depends on its base model and configuration. Increasing rank is not automatically beneficial, and keeping the base frozen does not guarantee that overall behavior avoids forgetting.",
      "kind": "prose"
    },
    "26": {
      "title": "QLoRA separates storage precision from trainable updates",
      "lead": "QLoRA separates low-bit base storage from the precision of the computation and trainable adapters.",
      "points": [
        "NF4 provides the original method’s four-bit weight representation.",
        "Double quantization reduces the storage overhead of quantization constants.",
        "Paged optimizers address transient memory pressure; they do not remove activation costs."
      ],
      "reading": [
        "QLoRA backpropagates through a frozen quantized base into higher-precision low-rank adapters. The published method combines NF4 storage, double quantization and paged optimizers. Dequantization paths, metadata and activation storage remain implementation costs. Treat the original large-model fit demonstration as evidence for its particular recipe, not a capacity formula for arbitrary sequence lengths, batches or target modules.",
        "Four-bit raw storage is only a lower-bound component of memory. Adapter placement, sequence length, batch size, checkpointing and the quantization implementation can dominate practical fit. QLoRA may save memory without improving wall-clock speed. It is a way to adapt pretrained weights, not a shortcut that recreates their original pretraining."
      ],
      "discussion": [
        "What allocation could dominate peak memory after quantizing the base?",
        "Which parts of the original QLoRA recipe are actually present in the implementation you are evaluating?"
      ],
      "notes": "QLoRA backpropagates through a frozen quantized base into higher-precision low-rank adapters. The published method combines NF4 storage, double quantization and paged optimizers. Dequantization paths, metadata and activation storage remain implementation costs. Treat the original large-model fit demonstration as evidence for its particular recipe, not a capacity formula for arbitrary sequence lengths, batches or target modules.",
      "optional": "Four-bit raw storage is only a lower-bound component of memory. Adapter placement, sequence length, batch size, checkpointing and the quantization implementation can dominate practical fit. QLoRA may save memory without improving wall-clock speed. It is a way to adapt pretrained weights, not a shortcut that recreates their original pretraining.",
      "kind": "list"
    },
    "27": {
      "title": "Dataset quality includes coverage and partition independence",
      "lead": "Dataset quality is a property of the intended decision surface and the evidence behind each label. Row count alone measures neither.",
      "points": [
        "Resolve contradictory targets before expanding the dataset.",
        "Cover rare valid operations as well as negatives and ambiguity.",
        "Keep related sessions, paraphrases and augmented copies together when splitting.",
        "Preserve the distinction between observed words, intended actions and execution outcomes."
      ],
      "reading": [
        "Define the decision surface the examples should teach, including negatives, ambiguity and rare valid operations. Split related sessions, paraphrases and augmented copies together to prevent near-duplicate leakage. For signal tasks, distinguish acoustic evidence from intended commands and actual execution outcomes. Track provenance and coverage rather than treating generated row count as independent information or assumed deployment representativeness.",
        "A small model trained from scratch can be appropriate for a narrow signal-detection task. A larger pretrained model can still fail when labels contradict each other or rare operations are missing. Acoustic transcripts, intended commands and actual execution outcomes are different types of evidence and should not be treated as interchangeable labels."
      ],
      "discussion": [
        "Which label could be correct for intended meaning but wrong as an acoustic transcript?",
        "What makes a synthetic example add coverage rather than another near-duplicate?"
      ],
      "notes": "Define the decision surface the examples should teach, including negatives, ambiguity and rare valid operations. Split related sessions, paraphrases and augmented copies together to prevent near-duplicate leakage. For signal tasks, distinguish acoustic evidence from intended commands and actual execution outcomes. Track provenance and coverage rather than treating generated row count as independent information or assumed deployment representativeness.",
      "optional": "A small model trained from scratch can be appropriate for a narrow signal-detection task. A larger pretrained model can still fail when labels contradict each other or rare operations are missing. Acoustic transcripts, intended commands and actual execution outcomes are different types of evidence and should not be treated as interchangeable labels.",
      "kind": "list"
    },
    "28": {
      "title": "Design comparisons that can support the intended claim",
      "lead": "The experimental design must isolate the intervention named in the claim. Equal epochs are not equal exposure when dataset sizes differ.",
      "points": [
        "State the claim and the baseline before selecting the candidate.",
        "Freeze the evaluation split and inspect the scorer on known cases.",
        "Record changed factors, including update count and token exposure.",
        "Run the comparison under a declared inference protocol.",
        "Inspect useful success and failure slices before accepting an aggregate gain."
      ],
      "reading": [
        "State the intervention, baseline and acceptance gate before inspecting results. Equal epochs can imply unequal updates when datasets differ; equal example counts can still imply different token exposure. Track useful success, omissions, incorrect actions and retention rather than optimizing one aggregate. Development sets support iteration, while a final untouched set estimates transfer after those adaptive choices.",
        "A benchmark evaluates a model plus prompts, tools, budgets and scoring rules. Code-based checks, model judges and human review have different strengths and failure modes. Keep the scoring rubric inspectable and distinguish actual task outcomes from the assistant's description of its own success."
      ],
      "discussion": [
        "Which causal claim survives if the candidate changes both training data and the number of optimizer updates?"
      ],
      "notes": "State the intervention, baseline and acceptance gate before inspecting results. Equal epochs can imply unequal updates when datasets differ; equal example counts can still imply different token exposure. Track useful success, omissions, incorrect actions and retention rather than optimizing one aggregate. Development sets support iteration, while a final untouched set estimates transfer after those adaptive choices.",
      "optional": "A benchmark evaluates a model plus prompts, tools, budgets and scoring rules. Code-based checks, model judges and human review have different strengths and failure modes. Keep the scoring rubric inspectable and distinguish actual task outcomes from the assistant's description of its own success.",
      "kind": "steps"
    },
    "29": {
      "title": "EWC tests the stability–adaptation tradeoff",
      "lead": "EWC penalizes movement away from parameters estimated to support earlier tasks. The penalty’s strength controls a stability–adaptation tradeoff.",
      "points": [],
      "reading": [
        "A common presentation of Elastic Weight Consolidation adds (λ/2)Σᵢ Fᵢ(θᵢ − θᵢ*)² to the new-task loss. θ* is the earlier solution, and the diagonal Fisher terms Fᵢ approximate parameter importance under the method’s assumptions. The approximation is a retention mechanism; it is not a complete representation of everything learned in an earlier task.",
        "The cited paper evaluates sequential learning in particular settings, including permuted MNIST. Increasing λ can preserve earlier behavior while obstructing adaptation. A useful comparison therefore measures performance on every earlier task after each new task and measures learning of the new task too. Fix the sequence and compare ordinary sequential training under the same resource budget. Selecting λ on a repeatedly inspected final set would compromise that evaluation."
      ],
      "discussion": [
        "What result would show retention achieved by suppressing useful new learning rather than successful continual learning?"
      ],
      "notes": "Elastic Weight Consolidation adds a penalty for moving parameters estimated to matter for earlier tasks. The published sequential permuted-MNIST experiments compare retention and new learning across task changes. Interpret the performance curves jointly: preserving old tasks by preventing useful adaptation is not a successful continual-learning result. The task sequence, importance estimate and penalty setting define the experiment’s scope.",
      "optional": "A useful replication compares the same starting architecture, task order and training budget, then evaluates every earlier task after each new task. Include ordinary sequential training and a simple regularization baseline. Report learning of the new task alongside retention of old tasks. The penalty strength changes this balance, so selecting it on the final test set would weaken the evaluation.",
      "kind": "prose"
    },
    "30": {
      "title": "Curated instruction tuning depends on the pretrained base",
      "lead": "Curated instruction tuning relies on the representations already learned by the base model. Its data budget cannot be interpreted as a pretraining requirement.",
      "points": [
        "LIMA’s reported setting uses a pretrained 65B model and 1,000 curated instruction–response examples; the result is bounded to its adaptation and evaluation recipe."
      ],
      "reading": [
        "LIMA starts from a pretrained 65B model and uses 1,000 curated instruction–response examples. The result concerns how that base expresses capabilities under a supervised adaptation recipe. It does not isolate example quality from every other system choice or establish a universal dataset-size threshold. Reproduce the selection and evaluation conditions before translating the finding into a new domain.",
        "For an engineering adaptation project, construct a coverage table before selecting examples: common requests, ambiguous inputs, rare operations and valid abstentions. Keep independent tests for each category. Compare curated and baseline data under matched exposure when investigating quality, since changing dataset size also changes updates in a fixed-epoch recipe. A favorable preference judgment is useful evidence, but it does not replace checks of numerical correctness or operational behavior."
      ],
      "discussion": [
        "How would you compare data curation strategies without letting different update counts explain the result?",
        "Which operational check would a favorable response-preference score fail to answer?"
      ],
      "notes": "LIMA starts from a pretrained 65B model and uses 1,000 curated instruction–response examples. The result concerns how that base expresses capabilities under a supervised adaptation recipe. It does not isolate example quality from every other system choice or establish a universal dataset-size threshold. Reproduce the selection and evaluation conditions before translating the finding into a new domain.",
      "optional": "For an engineering adaptation project, construct a coverage table before selecting examples: common requests, ambiguous inputs, rare operations and valid abstentions. Keep independent tests for each category. Compare curated and baseline data under matched exposure when investigating quality, since changing dataset size also changes updates in a fixed-epoch recipe. A favorable preference judgment is useful evidence, but it does not replace checks of numerical correctness or operational behavior.",
      "kind": "prose"
    },
    "31": {
      "title": "Name the QLoRA baseline precisely",
      "lead": "A comparison of four-bit QLoRA with higher-precision LoRA concerns the adapter recipe’s base precision. It is not automatically a comparison against full-base fine-tuning.",
      "points": [
        "To isolate quantization, match the base checkpoint and adapter configuration while accounting for equal training exposure.",
        "To compare adaptation methods, report the broader differences in trainable scope and memory layout."
      ],
      "reading": [
        "The QLoRA experiments include comparisons of quantized LoRA with higher-precision LoRA; those are not all full-base fine-tuning comparisons. A study can isolate storage precision only when base, adapter configuration, training exposure and evaluation are appropriately matched. Interpret memory and quality results independently. Chatbot scoring also leaves scientific correctness and retained application behavior to be tested explicitly.",
        "An engineering comparison should record the base checkpoint, target layers, adapter rank, precision, training exposure and inference procedure. Compare memory use and task quality independently, and retain tests of previously useful behavior. State whether the experiment measures quantization, adapter capacity or several changed factors together. Independent numerical checks and executable artifacts provide stronger evidence for calculation tasks than stylistic preference alone."
      ],
      "discussion": [
        "Which variable is isolated by the comparison you are about to cite?"
      ],
      "notes": "The QLoRA experiments include comparisons of quantized LoRA with higher-precision LoRA; those are not all full-base fine-tuning comparisons. A study can isolate storage precision only when base, adapter configuration, training exposure and evaluation are appropriately matched. Interpret memory and quality results independently. Chatbot scoring also leaves scientific correctness and retained application behavior to be tested explicitly.",
      "optional": "An engineering comparison should record the base checkpoint, target layers, adapter rank, precision, training exposure and inference procedure. Compare memory use and task quality independently, and retain tests of previously useful behavior. State whether the experiment measures quantization, adapter capacity or several changed factors together. Independent numerical checks and executable artifacts provide stronger evidence for calculation tasks than stylistic preference alone.",
      "kind": "comparison"
    },
    "32": {
      "title": "Continual learning needs an explicit retention mechanism",
      "lead": "Continual learning requires a defined mechanism for protecting old behavior. The mechanisms impose different constraints on data and capacity.",
      "points": [
        "Replay supplies earlier examples again and changes the distribution of training exposure.",
        "Regularization penalizes specified changes in parameters or outputs.",
        "Adapters can keep task-specific state separate, while the active adapted system may still regress.",
        "Expert expansion adds capacity but leaves routing and shared components to be managed."
      ],
      "reading": [
        "Choose retention methods according to the failure mechanism and available old-task evidence. Replay changes training exposure; regularization constrains parameter or output changes; separate adapters isolate some task-specific state. Expert expansion adds capacity but still leaves routing and shared components to manage. Sleep-inspired consolidation specifies actual learning operations and should be evaluated as a recipe, not inferred from an idle period.",
        "No single method guarantees lifelong learning across all tasks. Replay can require storing data; generated replay can repeat errors; freezing limits adaptation; expert expansion increases storage and routing complexity. An adapter can be swapped back to restore a base behavior, but the adapted system can still regress while that adapter is active."
      ],
      "discussion": [
        "Which earlier-task evidence is required by the retention method you would choose?",
        "What does a proposed sleep stage actually compute or update?"
      ],
      "notes": "Choose retention methods according to the failure mechanism and available old-task evidence. Replay changes training exposure; regularization constrains parameter or output changes; separate adapters isolate some task-specific state. Expert expansion adds capacity but still leaves routing and shared components to manage. Sleep-inspired consolidation specifies actual learning operations and should be evaluated as a recipe, not inferred from an idle period.",
      "optional": "No single method guarantees lifelong learning across all tasks. Replay can require storing data; generated replay can repeat errors; freezing limits adaptation; expert expansion increases storage and routing complexity. An adapter can be swapped back to restore a base behavior, but the adapted system can still regress while that adapter is active.",
      "kind": "comparison"
    },
    "33": {
      "title": "MoE separates total capacity from active computation",
      "lead": "A sparse router selects expert outputs and weights their contribution: y = Σᵢ gᵢ(x)Eᵢ(x). The diagram shows one token in one illustrative MoE layer.",
      "points": [],
      "reading": [
        "For the illustrated token-choice layer, the router computes a sparse gate g(x). Selected experts receive the token representation x, and their outputs are combined using the gate weights. When gᵢ(x) = 0, that expert’s output need not be evaluated for this token. The two-of-eight arrangement is illustrative; other MoE designs use different expert counts and routing rules. Experts are learned subnetworks rather than separately prompted agents.",
        "Storage follows the total expert capacity even when only a subset executes for a token. End-to-end work also includes shared layers and routing overhead. Load imbalance or movement between devices can limit utilization. An active-expert parameter count alone therefore does not determine runtime. During adaptation, state which experts, routers or shared blocks may change. Adding experts is not by itself a complete method for preventing forgetting."
      ],
      "discussion": [
        "Why can activating fewer expert parameters still leave a deployment limited by memory or communication?"
      ],
      "notes": "A sparse router activates a subset of expert subnetworks per token or example. Total parameters still drive storage requirements, while active parameters omit some shared-layer and implementation costs. Examine routing, load balance and expert placement when interpreting efficiency. During adaptation, specify whether routers, shared blocks and experts can change; expert expansion alone is not a complete continual-learning method.",
      "optional": "The original sparsely gated MoE work used feedforward experts inside a sequence model. Modern designs vary in expert size, number, routing and placement. Adding experts for continual learning is an additional algorithmic choice, not an automatic property of every MoE.",
      "kind": "prose"
    },
    "34": {
      "title": "Optimize a resource–quality frontier",
      "lead": "The useful optimization depends on the measured bottleneck. A smaller checkpoint can leave latency unchanged when data movement or other allocations dominate.",
      "points": [
        "Representation changes such as quantization or pruning need quality checks and suitable execution support.",
        "Execution changes such as FlashAttention can improve memory behavior while preserving the mathematical attention operation."
      ],
      "reading": [
        "Identify whether the workload is constrained by storage, activation memory, arithmetic or data movement. Quantization, pruning and distillation change representation or learned behavior; targeted dropout prepares parameters for pruning. Sparse values do not guarantee sparse execution without suitable kernels. FlashAttention targets memory traffic for exact attention, while state-space and hybrid architectures change sequence-processing tradeoffs.",
        "Model compression is distinct from compressing a data file with a lossless codec. Quantization and pruning can alter outputs. Distillation transfers selected behavior rather than copying all knowledge exactly. State-space and hybrid models offer different sequence-scaling tradeoffs; they are not a universal replacement for attention."
      ],
      "discussion": [
        "Which profile would distinguish a weight-bandwidth bottleneck from activation-memory pressure?",
        "When would pruning fail to produce a speed improvement?"
      ],
      "notes": "Identify whether the workload is constrained by storage, activation memory, arithmetic or data movement. Quantization, pruning and distillation change representation or learned behavior; targeted dropout prepares parameters for pruning. Sparse values do not guarantee sparse execution without suitable kernels. FlashAttention targets memory traffic for exact attention, while state-space and hybrid architectures change sequence-processing tradeoffs.",
      "optional": "Model compression is distinct from compressing a data file with a lossless codec. Quantization and pruning can alter outputs. Distillation transfers selected behavior rather than copying all knowledge exactly. State-space and hybrid models offer different sequence-scaling tradeoffs; they are not a universal replacement for attention.",
      "kind": "comparison"
    },
    "35": {
      "title": "Audit the objective-to-behavior link",
      "lead": "An objective defines the feedback available to learning. Audit which shortcuts that feedback permits before treating a score increase as improved task behavior.",
      "points": [
        "Self-supervised prediction derives targets from the input data.",
        "Supervised adaptation learns from supplied demonstrations.",
        "Preference or reward methods optimize a judgment signal whose validity still needs checking.",
        "GAN training couples a generator to a learned discriminator; adversarial-input robustness training is a different procedure."
      ],
      "reading": [
        "Specify the target construction and feedback signal: self-supervised prediction, supervised demonstrations, preferences or rewards. GAN training couples a generator and discriminator; it is distinct from next-token prediction and from adversarial-input robustness training. For each recipe, examine the shortcuts permitted by its objective and score the intended behavior independently, including capabilities that should remain stable.",
        "RLHF combines several stages and is not the only preference-training approach; Direct Preference Optimization provides an alternative formulation. Reward or preference improvement must still be checked against the real task and retained capabilities. A training signal can encourage a shortcut when the evaluation fails to capture the intended objective."
      ],
      "discussion": [
        "What unintended shortcut could improve the objective you are using?",
        "How would you test intended behavior independently of that training signal?"
      ],
      "notes": "Specify the target construction and feedback signal: self-supervised prediction, supervised demonstrations, preferences or rewards. GAN training couples a generator and discriminator; it is distinct from next-token prediction and from adversarial-input robustness training. For each recipe, examine the shortcuts permitted by its objective and score the intended behavior independently, including capabilities that should remain stable.",
      "optional": "RLHF combines several stages and is not the only preference-training approach; Direct Preference Optimization provides an alternative formulation. Reward or preference improvement must still be checked against the real task and retained capabilities. A training signal can encourage a shortcut when the evaluation fails to capture the intended objective.",
      "kind": "list"
    },
    "36": {
      "title": "Compare research systems under matched conditions",
      "lead": "A benchmark gain can come from better weights or a changed inference protocol. Compare the evaluated systems before claiming a model improvement.",
      "points": [],
      "reading": [
        "Inference-time search, tool-using agents and multimodal systems alter the evaluated protocol as well as the model. Record attempts, tools, context and scoring procedures before comparing results. Evaluation designs that reduce shortcuts or require executable artifacts address particular weaknesses, not all reliability concerns. Use the cited work as dated evidence and test transfer to the deployment workflow.",
        "MMMU-Pro deliberately makes multimodal evaluation harder to answer using text shortcuts. ScienceAgentBench studies scientific analysis tasks with executable artifacts. These are useful measurement designs, not guarantees of laboratory reliability. Do not compare published scores across different versions, budgets or tool access as though only model weights changed."
      ],
      "discussion": [
        "What would have to match before two published scores could support a claim about the underlying models?",
        "Which failure is addressed by executable-artifact evaluation, and which failure could remain?"
      ],
      "notes": "Inference-time search, tool-using agents and multimodal systems alter the evaluated protocol as well as the model. Record attempts, tools, context and scoring procedures before comparing results. Evaluation designs that reduce shortcuts or require executable artifacts address particular weaknesses, not all reliability concerns. Use the cited work as dated evidence and test transfer to the deployment workflow.",
      "optional": "MMMU-Pro deliberately makes multimodal evaluation harder to answer using text shortcuts. ScienceAgentBench studies scientific analysis tasks with executable artifacts. These are useful measurement designs, not guarantees of laboratory reliability. Do not compare published scores across different versions, budgets or tool access as though only model weights changed.",
      "kind": "prose"
    },
    "37": {
      "title": "Scaling relations need a domain and a metric",
      "lead": "Doubling both N and D quadruples C ≈ 6ND. It does not establish a quadratic law for reasoning ability.",
      "points": [
        "A workload scaling relation describes resources under stated modeling assumptions.",
        "An empirical efficiency trend describes a benchmark and comparison period; extrapolation needs an additional argument."
      ],
      "reading": [
        "Doubling both N and D quadruples the simple dense-training estimate C ≈ 6ND. That relationship describes workload, not a guaranteed change in task capability. Historical algorithmic-efficiency measurements also depend on the selected benchmark and comparison period. Separate hardware trends, training cost, deployment cost and evaluated quality before extrapolating any of them.",
        "A forecast should name the metric, time period, assumptions and conditions under which it would fail. For a practical project, reassess the available model and tools when requirements change instead of assuming that buying more compute or waiting for a larger model is the only path forward."
      ],
      "discussion": [
        "What observation would falsify the extrapolation you are making from a historical scaling trend?"
      ],
      "notes": "Doubling both N and D quadruples the simple dense-training estimate C ≈ 6ND. That relationship describes workload, not a guaranteed change in task capability. Historical algorithmic-efficiency measurements also depend on the selected benchmark and comparison period. Separate hardware trends, training cost, deployment cost and evaluated quality before extrapolating any of them.",
      "optional": "A forecast should name the metric, time period, assumptions and conditions under which it would fail. For a practical project, reassess the available model and tools when requirements change instead of assuming that buying more compute or waiting for a larger model is the only path forward.",
      "kind": "comparison"
    },
    "38": {
      "title": "Ship a reproducible workflow and an evaluation record",
      "lead": "Make an improvement reproducible before expanding autonomy. The evaluation record should explain why the new workflow was accepted.",
      "points": [
        "Freeze a task with inspectable source inputs.",
        "Measure a simpler baseline.",
        "Change a specified part of the workflow.",
        "Apply the acceptance test and retain the failure cases.",
        "Record the resulting decision and the conditions under which it should be revisited."
      ],
      "reading": [
        "Package the task brief, authoritative inputs, tool configuration and acceptance checks so another engineer can reproduce the result. Compare the complete workflow with a simpler baseline, including human review and rework. Retain failure cases as development evidence while preserving an independent final evaluation. Use observed limitations to motivate retrieval, larger inference budgets, adapters or a different architecture.",
        "For a first scientific exercise, choose a published calculation, a synthetic dataset with a known answer or a small script with observable behavior. Compare an unaided baseline with the AI-assisted workflow, including verification time. The objective is a useful and reproducible result. More autonomy, longer reasoning or additional training should follow from a demonstrated need rather than being assumed improvements."
      ],
      "discussion": [
        "Which single intervention would you test next, and what outcome would make you reject it?"
      ],
      "notes": "Package the task brief, authoritative inputs, tool configuration and acceptance checks so another engineer can reproduce the result. Compare the complete workflow with a simpler baseline, including human review and rework. Retain failure cases as development evidence while preserving an independent final evaluation. Use observed limitations to motivate retrieval, larger inference budgets, adapters or a different architecture.",
      "optional": "For a first scientific exercise, choose a published calculation, a synthetic dataset with a known answer or a small script with observable behavior. Compare an unaided baseline with the AI-assisted workflow, including verification time. The objective is a useful and reproducible result. More autonomy, longer reasoning or additional training should follow from a demonstrated need rather than being assumed improvements.",
      "kind": "steps"
    }
  }
};

window.AUDIENCE_ROUTES = {
  "general": {
    "3": [
      "1",
      "6",
      "8",
      "38"
    ],
    "10": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "7",
      "8",
      "13",
      "14",
      "18",
      "38"
    ],
    "30": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "20",
      "23",
      "27",
      "28",
      "32",
      "38"
    ],
    "60": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "10",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "all": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38"
    ]
  },
  "engineer": {
    "3": [
      "1",
      "6",
      "28",
      "38"
    ],
    "10": [
      "1",
      "2",
      "3",
      "6",
      "7",
      "13",
      "16",
      "21",
      "23",
      "28",
      "38"
    ],
    "30": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "7",
      "9",
      "10",
      "12",
      "13",
      "15",
      "16",
      "19",
      "20",
      "21",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "32",
      "38"
    ],
    "60": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "7",
      "10",
      "12",
      "13",
      "15",
      "16",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "36",
      "37",
      "38"
    ],
    "all": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38"
    ]
  }
};

window.AUDIENCE_ROUTE_SECONDS = {
  "general": {
    "3": {
      "1": 45,
      "6": 45,
      "8": 45,
      "38": 45
    },
    "10": {
      "1": 60,
      "2": 60,
      "3": 15,
      "4": 45,
      "6": 60,
      "7": 60,
      "8": 60,
      "13": 60,
      "14": 60,
      "18": 60,
      "38": 60
    },
    "30": {
      "1": 69,
      "2": 69,
      "3": 20,
      "4": 49,
      "5": 69,
      "6": 68,
      "7": 68,
      "8": 68,
      "10": 68,
      "11": 68,
      "12": 68,
      "13": 68,
      "14": 68,
      "15": 68,
      "16": 68,
      "17": 68,
      "18": 68,
      "20": 68,
      "23": 68,
      "27": 68,
      "28": 68,
      "32": 68,
      "38": 68
    },
    "60": {
      "1": 100,
      "2": 100,
      "3": 25,
      "4": 75,
      "5": 100,
      "6": 100,
      "7": 100,
      "8": 100,
      "10": 100,
      "12": 100,
      "13": 100,
      "14": 100,
      "15": 100,
      "16": 100,
      "17": 100,
      "18": 100,
      "19": 100,
      "20": 100,
      "21": 100,
      "22": 100,
      "23": 100,
      "24": 100,
      "25": 100,
      "26": 100,
      "27": 100,
      "28": 100,
      "30": 100,
      "32": 100,
      "34": 100,
      "36": 100,
      "38": 100
    },
    "all": {
      "1": 30,
      "2": 30,
      "3": 25,
      "4": 55,
      "5": 60,
      "6": 80,
      "7": 90,
      "8": 60,
      "9": 45,
      "10": 55,
      "11": 65,
      "12": 70,
      "13": 55,
      "14": 50,
      "15": 90,
      "16": 80,
      "17": 90,
      "18": 100,
      "19": 70,
      "20": 90,
      "21": 120,
      "22": 90,
      "23": 110,
      "24": 140,
      "25": 100,
      "26": 100,
      "27": 95,
      "28": 110,
      "29": 130,
      "30": 90,
      "31": 90,
      "32": 110,
      "33": 100,
      "34": 110,
      "35": 85,
      "36": 115,
      "37": 90,
      "38": 40
    }
  },
  "engineer": {
    "3": {
      "1": 45,
      "6": 45,
      "28": 45,
      "38": 45
    },
    "10": {
      "1": 60,
      "2": 60,
      "3": 15,
      "6": 45,
      "7": 60,
      "13": 60,
      "16": 60,
      "21": 60,
      "23": 60,
      "28": 60,
      "38": 60
    },
    "30": {
      "1": 69,
      "2": 69,
      "3": 20,
      "4": 49,
      "6": 69,
      "7": 68,
      "9": 68,
      "10": 68,
      "12": 68,
      "13": 68,
      "15": 68,
      "16": 68,
      "19": 68,
      "20": 68,
      "21": 68,
      "23": 68,
      "24": 68,
      "25": 68,
      "26": 68,
      "27": 68,
      "28": 68,
      "32": 68,
      "38": 68
    },
    "60": {
      "1": 100,
      "2": 100,
      "3": 25,
      "4": 75,
      "6": 100,
      "7": 100,
      "10": 100,
      "12": 100,
      "13": 100,
      "15": 100,
      "16": 100,
      "18": 100,
      "19": 100,
      "20": 100,
      "21": 100,
      "22": 100,
      "23": 100,
      "24": 100,
      "25": 100,
      "26": 100,
      "27": 100,
      "28": 100,
      "29": 100,
      "30": 100,
      "31": 100,
      "32": 100,
      "33": 100,
      "34": 100,
      "36": 100,
      "37": 100,
      "38": 100
    },
    "all": {
      "1": 30,
      "2": 30,
      "3": 25,
      "4": 55,
      "5": 60,
      "6": 80,
      "7": 90,
      "8": 60,
      "9": 45,
      "10": 55,
      "11": 65,
      "12": 70,
      "13": 55,
      "14": 50,
      "15": 90,
      "16": 80,
      "17": 90,
      "18": 100,
      "19": 70,
      "20": 90,
      "21": 120,
      "22": 90,
      "23": 110,
      "24": 140,
      "25": 100,
      "26": 100,
      "27": 95,
      "28": 110,
      "29": 130,
      "30": 90,
      "31": 90,
      "32": 110,
      "33": 100,
      "34": 110,
      "35": 85,
      "36": 115,
      "37": 90,
      "38": 40
    }
  }
};
