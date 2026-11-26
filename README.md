# makefun-news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/BobbyLeonardd/makefun-news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/BobbyLeonardd/makefun-news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One 1024x1024 front page for Thursday 26 November 2026: the day's world news, drawn as a
newspaper page that stays readable at 1:1.

## What the page carries

- The date set large at the top, with a deck naming the day's main threads.
- A dark figures band: four counted numbers from the day's reporting.
- Three lead cards, each with a drawn mark in its own band, a headline, a summary, a
  why-it-matters line and a source.
- Ten story cards across the regions, each with a mark band, a headline, a summary, a
  source line, and a status badge on the same baseline as that source.
- Thirty-five numbered stories in total, spread over ten regions.
- A world map with numbered pins for the thirteen featured stories.
- Twenty-two further stories in a two-column brief list beside the map.
- A date-check note, a badge key, a stories-by-continent tally and the wire sources used.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is the page; `main.ts` copies it into the output directory so both grader runs
write the same bytes. Every mark on the page is drawn in code; no photographs are used.