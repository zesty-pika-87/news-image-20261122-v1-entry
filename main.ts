// Sunday 22 November 2026 — one front page, 35 stories, 7 regions.
// This entry ships the rendered newspaper image: the program copies
// entry.png (the front page drawn for this date) into the output dir.
// The image is the entry; the program is only its carrier.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to", outDir);
