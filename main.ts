// One Line of Earned Pride — make.fun entry (v2).
// Writes one line (at most 240 characters) to /output/entry.txt: a
// quiet, earned moment of pride for someone in a scene. After six
// months of carrying the team's on-call pager alone, he finally
// taught the new hire the runbook — and the pager stayed silent
// for a whole weekend.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "After six months of carrying the team's on-call pager alone, he finally taught the new hire the runbook — and the pager stayed silent for a whole weekend.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 240;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
