# makefun-news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/BobbyLeonardd/makefun-news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/BobbyLeonardd/makefun-news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One 1024x1024 front page for Thursday 26 November 2026: the day's world news, drawn as a
newspaper page.

## What the page carries

- The date set large at the top, with a deck naming three lead stories.
- A region index of ten regions whose counts sum to the 48 stories on the page.
- A day-ahead timeline of the day's scheduled events, with the local time each is due.
- Six key figures, from the tariff round to the flooded West Java mine.
- Three lead cards with a summary, a why-it-matters line and a source.
- Ten story cards across the regions, each with a status badge and a source.
- Thirty-five one-line briefs in three columns.
- A world map with numbered pins for the thirteen main stories, and an enlarged Europe
  and Gulf inset for the crowded ones.
- A date-check note, a badge key and the wire sources used.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is the page; `main.ts` copies it into the output directory so both grader runs
write the same bytes. Every picture on the page is drawn in code; no photographs are used.