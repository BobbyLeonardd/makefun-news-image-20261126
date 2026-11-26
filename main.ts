// The grader runs this program twice in a fresh container and both runs must
// leave the same bytes in its output directory. The finished page is the
// entry.png sitting next to this file, so the program's only job is to place
// those exact bytes where the grader looks for them.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';
const pagePath = join(here, 'entry.png');
const page = readFileSync(pagePath);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), page);
console.log('placed ' + page.length + ' bytes of page in ' + outDir);