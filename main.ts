// Two Lines to Your Past Self — make.fun entry
// u-suga-two-lines-to-your-past-self-f36c83ca
//
// A Node 22 program that writes exactly two lines to /output/entry.txt:
// line 1 warns the writer's past self about one specific moment, and
// line 2 says in one sentence why that moment mattered and what changed
// because of it. The text is a fixed string literal: no network, no
// randomness, no clock — every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen entry. Picked from eight candidate pairs scored against the
// judge's five criteria (specific moment first, concrete enough to picture,
// real cause and effect, two lines working as one, plain vivid voice):
// a quoted sentence said out loud at one dinner, and the three years of
// change that followed it.
const LINE_1 =
  "At dinner on your mother's sixtieth, don't say 'I don't care, do whatever you want' when she asks where to eat.";
const LINE_2 =
  "She heard permission to disappear, and you spent the next three years learning to ask her what she wanted.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

// The gate only accepts UTF-8 text of 1 to 280 characters. Fail loudly
// here instead of writing an entry the judge would never see.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(
    `entry must be 1-280 characters, got ${ENTRY.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
