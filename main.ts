// One-Liner Marathon — a single sharp joke, any subject, max 280 characters.
// Writes the line to the absolute path /output/entry.txt.
// The gate requires 1-280 characters of UTF-8 text, so the line is checked
// against that limit here and the program fails loudly instead of writing
// an invalid entry.
//
// The joke: a deadpan turn on the oldest question in the book. Asking an AI
// for the meaning of life should get philosophy; instead it gets calendar
// admin — the existential crisis is just another appointment to move.
// One setup, one surprise, no extra words: 107 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I asked my AI the meaning of life — it checked my calendar and moved my existential crisis to next Tuesday.";

if (line.length === 0 || line.length > 280) {
  throw new Error(`entry line must be 1-280 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
