# Simple is better: slides

A talk about presenting results to the people who decide, as a plain HTML deck. No build step, no dependencies: open `index.html` in a browser (Chrome or Edge recommended) and press `F` for fullscreen.

## Keys

| Key | What it does |
| --- | --- |
| Right arrow, Space, Enter, click | Next step, then next slide |
| Left arrow, Backspace, click on the left edge | Back |
| `N` | Show or hide the speaker notes |
| `F` | Fullscreen |
| Home / End | First or last slide |

The URL hash follows the slide (`index.html#3`), so a refresh keeps your place.

## The slides

1. **Title.** The words rise in, and the colour strip wipes down the right edge.
2. **We get hooked on the technical details.** Common data science and AI jargon (fine-tuning, feature extraction, embeddings and so on) drifts around the headline. Click once: it scatters and the second line lands.
3. **LMC01 "Currently".** Full screen, with a slow push-in.
4. **LMC07 "Our final workflow".** Pushes in from the right.
5. **Both.** The workflow shrinks aside and the flowchart slides in next to it. Click to reveal the verdicts.
6. **It's your project. Lead with your results.** (exploratory) Gather, Build and Results in a row. Click: Results grows and swallows the other two, then two bullets: have extra slides prepared for the details in case you get asked, and you can always expand inside your Executive Summaries.
7. **Say it in plain words.** (exploratory) Five jargon terms in white bubbles. First click: green plain-language versions slide out of the first three (Fine-tuning, Overfitting, False positive), top to bottom. Second click: the last two (NSN, NCAGE, from your own role) get theirs. Hold the second click to use them as live examples first.

## Moving things around

- Each slide is a `<section class="slide">` in `index.html`.
- `data-transition` on a slide sets how it arrives: `fade`, `push`, `zoom` or `none`. On the way back, the later slide's transition plays in reverse direction.
- `data-steps="N"` gives a slide N clicks; any element with `class="show-1"` (or `show-2`) appears at that click.
- Slide-specific motion lives in `style.css`, under the slide's comment heading. Everything uses CSS animations, so you can edit timings there.
- `data-notes` holds the speaker notes.

## Save as PDF

In the browser, print the page (Ctrl+P), choose "Save as PDF", set margins to None and turn on "Background graphics". Each slide prints on its own page, in its final state.

## Assets

- `assets/img/` holds slides exported from your own LMC01, LMC03 and LMC07 decks. They were checked for money values, names and email addresses before being included, and the internal system name (CSIS) was masked on those two. The scraper-tool slide (slide 9) is the original with the CSIS name and the MELCOM logo blurred; it still shows a wage figure.
- `assets/fonts/` holds DM Sans (SIL Open Font License, licence text included).
8. **Plain words: 3000x.** (exploratory) Your LMC03 "3000x faster" slide, full frame, with a green "Plain words" pill.
9. **Plain words: Tool, Purpose, Impact.** (exploratory) Your LMC07 scraper-tool slide, as originally presented (CSIS name and MELCOM logo blurred; the wage figure is left visible).
