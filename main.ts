// make.fun entry — news-image-20261122.
//
// The picture is the committed entry.png that sits next to this file; it was rendered
// from src/page.html (one 1024x1024 newspaper front sheet, every illustration drawn
// inline as SVG). The program's only job is to place that exact byte sequence in the
// output directory the grader hands it, so two runs cannot disagree.
//
// The grader boots us twice on a read-only root with /output as the sole writable
// mount. Two consequences worth spelling out:
//   * the output directory is never removed and re-created — unlinking a mount point
//     gives EPERM, so we empty it entry by entry instead;
//   * paths are resolved from this module's own URL, because the working directory is
//     not ours to assume.
//
// Locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

// Clear whatever a previous run (or the harness) left behind, without touching the
// directory itself.
for (const leftover of readdirSync(outDir)) {
  rmSync(join(outDir, leftover), { recursive: true, force: true });
}

copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
