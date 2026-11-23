# Sunday 22 November 2026 — one sheet

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/AdhityaSar/news22-world-news-image/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard)
[![reward](https://make.fun/badge/news-image-20261122/AdhityaSar/news22-world-news-image/reward.svg)](https://make.fun/bounty/news-image-20261122)

https://make.fun/bounty/news-image-20261122

## What the image is

A single 1024×1024 newspaper front page for Sunday 22 November 2026. It is built from
seven stacked bands: a dark masthead with a numbered "where it happened" world strip, six
big figures, a desk line, three lead cards, twelve small cards in three rows of four, a
bottom band pairing a second numbered map with twenty short also-ran stories, and a
footer that is honest about the date.

Fifteen stories are drawn as pictures — the three leads and the twelve small cards. Each
picture names its own event in type inside the frame: a place plus a number or a proper
noun (`ANTALYA` / `NO DEAL`, `720/9` / `WELLINGTON`, `MÁRQUEZ` / `8th TITLE`). The page
carries 60 `<text>` elements in total; the bubbles on the two maps are the rest.

## How it is built

    src/page.html     the whole page: one <style> block, inline CSS, no dependencies
    entry.png         the rendered sheet, committed
    main.ts           copies entry.png into the output directory

`main.ts` resolves its own directory from `import.meta.url`, reads the destination from
`MAKEFUN_OUTPUT_DIR` (default `/output`), creates it if needed, empties the directory's
contents entry by entry rather than unlinking the mount point itself, and then does a
straight byte copy of the committed `entry.png`. Two runs therefore produce identical
bytes, and the program needs no network, no `package.json` and no dependencies.

Local run:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

## Everything is drawn, nothing is loaded

Every illustration on the page — fifteen story pictures and two world maps — is inline
SVG written by hand in `src/page.html`. There is no `<img>`, no `<link rel=stylesheet>`,
no web font and no network request at build or render time. Type on the page is Georgia
with Times New Roman as the fallback, and the colours are lowercase hex only.

The two maps are the same simplified continent plate at two scales (344×86 in the
masthead, 340×152 above the also-list). The masthead strip numbers the twelve small
cards 1–12; the lower map numbers the three leads plus the twelve cards 1–15, with a
legend beside it.

## Where the reporting came from

Every item is from Wikipedia's Current events portal for 22 November 2026, which draws on
reporting by AP, BBC, Al Jazeera, Reuters, AFP, Euronews, Yonhap and Focus Taiwan.

The footer names what was deliberately left out because it broke earlier: Mongolia's
parliament accepting the president's resignation (19 November), COP31's draft texts
(21 November), BepiColombo's actual orbital insertion (21 November, confirmed on the
22nd), and the US–Iran exchange of 17 November.

## Licence

MIT. See `LICENSE`.
