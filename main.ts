import { mkdirSync, writeFileSync } from "node:fs";

// The winning fortune: a prediction for the plant on the windowsill.
// Its newest leaf unfurls toward the sun by Friday, and its keeper
// proudly takes all the credit — warm, funny, and unmistakably about
// this plant's own future. 114 characters, within the 120 limit.
const FORTUNE =
  "By Friday, your newest leaf will unfurl toward the sun, and your keeper will tell a friend it was all their doing.";

// Guard: the gate requires 1–120 characters of non-whitespace text.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
