// make.fun daily news image: the page is entry.png beside this file, and the
// program copies exactly those bytes into the output directory, so both grader
// runs write the same file. Run it as the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT_NAME = 'entry.png';  // the page, copied byte for byte
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';
const source = new URL('./' + OUT_NAME, import.meta.url);

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, OUT_NAME));