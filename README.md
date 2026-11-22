# AI at the workbench

[Open the presentation on GitHub Pages](https://ericlaruemartin.github.io/AIPresentationByAI/)

How do you tell whether an AI assistant has solved a problem? Inspect the fitted lifetime and residuals, then add a background term and see how the result changes in the [decay fit on slide 6](https://ericlaruemartin.github.io/AIPresentationByAI/?route=all&audience=technical&view=present#slide-6). Other sections cover prompting, tool use, local inference, training costs and what published evaluations can tell you.

## Choose a route

| Audience | Start here |
| --- | --- |
| Getting started | [Hands-on AI tools tutorial](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=starter&route=all&view=read#start-chat) |
| General audience | [3-minute introduction](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=general&route=3&view=present) |
| Scientists and engineers | [10-minute talk](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=technical&route=10&view=present) |
| AI engineers | [30-minute discussion](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=engineer&route=30&view=discuss) |

You can switch audience and length independently. A one-hour route and a full reading guide are also available. Present mode shows the upcoming slide and lets the speaker open notes. Read mode adds explanations and primary sources. Discuss mode opens the topic with questions. Spanish is an AI-assisted translation awaiting human review.

In **Getting started**, download five cooling measurements, try a browser-chat prompt and check the first minute of cooling by hand. Carry the same data into a workspace or a terminal. The tutorial also explores notebooks, APIs, media generation and the permissions a tool needs to act. The worked examples and tool chooser run on the page without an account. [Download the sample CSV](cooling.csv)

## Run locally

Serve the repository root with any static web server, for example `python -m http.server 8000`, then open `http://localhost:8000/`. The presentation and the synthetic curve-fitting demonstration run in the browser without an API key.

## Edit the guide

The three versions of the 37-slide guide share topic numbers. Their English content lives in `content.js` and `audiences.js`, with Spanish in the corresponding `.es.js` files. The Getting started tutorial has its own lesson sequence, defined in `tutorial.en.js` and translated in `tutorial.es.js`. Each audience has timed routes. The viewer is in `app.js`, the model diagrams in `visuals.js`, and the numerical fit in `demo.js`. The `workflow-examples`, `training-examples`, `field-examples` and `tutorial-tools` files contain worked figures. Browser review notes can be exported as JSON.
