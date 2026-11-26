# makefun-news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/BobbyLeonardd/makefun-news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/BobbyLeonardd/makefun-news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

Thursday 26 November 2026, summed up as a single 1024 by 1024 front page: one
day of world news laid out as a newspaper page whose type still reads at 1:1.

## How the page is built

Three tiers, so the eye sorts the day before it reads a word of it:

- a masthead date, a two-line deck, a dark band of six counted figures, and one
  coloured chip per continent carrying that continent's story count;
- three lead cards on a coloured header band, the first wider than the other
  two, each with a stamp mark, a status badge, a headline, a summary, a
  why-it-matters line and its sources;
- eight story cards in four columns, every one led by a filled header band, a
  numbered tab, its continent and a paper stamp of its own mark;
- a world map with eleven numbered pins that match the cards, beside a
  two-column digest of twenty more stories, each with its city and continent.

Thirty-one numbered stories across ten regions in all. Below them: a key to the
four confidence badges, a date check naming what the page leaves out, and the
wire services the day's reporting came from.

Every mark, chip and pin is drawn by code: no photograph, logo or borrowed
artwork sits anywhere on the page.

## Running it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads the finished page beside it and writes those exact bytes into
the output directory, so the grader's two runs cannot disagree.