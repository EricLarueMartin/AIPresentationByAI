# AI at the workbench

[Open the presentation on GitHub Pages](https://ericlaruemartin.github.io/AIPresentationByAI/)

How do you tell whether an AI assistant has solved a problem? Follow a worked example from a request to fit decay data through the code, the residual plot and a revised model. Other sections cover prompting, tool use, local inference, training costs and what published evaluations can tell you.

## Choose a route

| Audience | Start here |
| --- | --- |
| General audience | [3-minute introduction](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=general&route=3&view=present) |
| Scientists and engineers | [10-minute talk](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=technical&route=10&view=present) |
| AI engineers | [30-minute discussion](https://ericlaruemartin.github.io/AIPresentationByAI/?audience=engineer&route=30&view=discuss) |

You can switch audience and length independently. A one-hour route and a full reading guide are also available. Present mode shows the upcoming slide and lets the speaker open notes. Read mode adds explanations and primary sources. Discuss mode opens the topic with questions. Spanish is an AI-assisted translation awaiting human review.

## Run locally

Serve the repository root with any static web server, for example `python -m http.server 8000`, then open `http://localhost:8000/`. The presentation and the synthetic curve-fitting demonstration run in the browser without an API key.

## Edit the guide

The English slide data lives in `content.js` and `audiences.js`. Their `.es.js` counterparts hold Spanish text. Slides use consecutive numbers across audiences. Route definitions select from the same sequence. The viewer is in `app.js`, the model diagrams in `visuals.js`, and the numerical fit in `demo.js`. The `workflow-examples`, `training-examples`, and `field-examples` files contain worked figures for the three audiences. Browser review notes can be exported as JSON.
