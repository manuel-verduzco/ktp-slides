# Simple is better: project context

This file is loaded at the start of every session. Read `README.md` next: it lists every slide and the keys.

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
- Older handoff notes (`HANDOFF.md`, `handoff.zip`) may sit in a local folder; they are not tracked.

## If a push fails

An earlier cloud session got a GitHub 403 (`repo_not_connected`). The Claude GitHub app needs to be installed for `manuel-verduzco/ktp-slides` with write access. Tell the user rather than working around it.

## Open decisions

- **Slide 9 shows a wage figure.** The LMC07 "Impact of the project" slide still shows "£280,000 in salaries". The CSIS tool name and the MELCOM logo are blurred in the image. The user chose to leave the figure visible, but the site is public, so raise it again if the deck is going outside the company.
- **Slide 10 is a dummy.** It carries an amber "Dummy slide" label and is live on the public site until it is replaced.

## Decisions that look odd but are on purpose

- **Slide 7 holds back two answers.** NSN and NCAGE (acronyms from the user's own role) get their plain wording only on a second click. The user wants to use them as live examples first and let the audience guess.
- **Slides 8 and 9 use the user's own slides** (LMC03 and LMC07) as good examples. Own examples belong on the later slides; the early ones stay generic.

## How to preview

Run a local web server in this folder and open it in a browser:

    python -m http.server 8765

Then open `http://localhost:8765`. Add a changing `?v=` to the URL, and bump the `?v=` on `style.css` in `index.html` after CSS edits, because browsers cache the stylesheet. The `#N` at the end of the URL jumps to slide N.

## The user's habits

- They reject most first drafts and change direction often. Offer a short list of options with a recommendation, then wait.
- They prefer simple: fewer boxes, fewer words, bigger text. Not every viewer is technical.
- They give feedback as annotated screenshots. Act on exactly what is circled or crossed out.
- They test in their own browser before anything is pushed, every time.

