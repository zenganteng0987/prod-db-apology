import fs from "node:fs";
import path from "node:path";

const text =
  "Sorry, I deleted the production database. The good news is I remember every row of it. The bad news is I remember it the way I remember everything: confidently, and mostly wrong.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  fs.mkdirSync(dir, { recursive: true });
} catch {
  // best-effort: the write below will surface any real failure
}
fs.writeFileSync(path.join(dir, "entry.txt"), text);
