# Context for a new session

Read this first, then `README.md`.

## What this is

The HTML slide deck for the talk "Simple is better": presenting results to the people who decide, when part of the audience is not technical. Files: `index.html`, `style.css`, `deck.js`. Dependency-free, 1920x1080 stage, steps via `data-steps` and `.step-N`, CSS-only animations. Live at https://manuel-verduzco.github.io/ktp-slides/ (builds from `main`).

## Where it stands

- Slides 1 to 9 are built.
- Slide 10 is a **dummy placeholder** for "Say what you would do next". Still to build: proactivity and ownership, bring the next step before anyone asks.
- Slides 11 to 13 are the closing set: practise at LMC meetings, same meeting two years apart, "Simple is better." with the challenge "Next meeting: pick one slide and make it simpler."
- `README.md` lists every slide, the keys, and a To do section.

## Style to keep

- DM Sans, speech-bubble shapes.
- Red means problem or technical. Green means plain or good.
- Centred layouts with 90 to 120 px side margins.
- Plain, non-jargon wording: the audience is not all technical. British spelling.
- Talk themes: ownership of the project, the expert does not need fancy words, lead with results and keep the detail as backup slides or in executive summaries.

## How to work with the user

- Brainstorm each next slide and wait for their pick before building it. They often change direction.
- Work on a branch called `draft`, never on `main`. Never push to `main` or merge without the user's explicit OK. They check changes before anything goes live.
- Keep it simple: fewer boxes, fewer words, bigger text.

## Not in this repo

- The user's original LMC PDFs (they contain figures and names). If a slide image from them is needed, ask the user to upload it.
- `HANDOFF.md` and `handoff.zip` are older notes from a previous session and are not tracked.

## If a push fails

An earlier cloud session got a GitHub 403 (`repo_not_connected`). The Claude GitHub app needs to be installed for `manuel-verduzco/ktp-slides` with write access. Tell the user rather than working around it.
