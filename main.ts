// Last Text at One Percent — rebuild #3, pick LOC-soup (116 chars).
// The phone snitches its owner's location to his mother, then tells him to run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT = "1%. i sent your location to your mother. you are at the bar. on a tuesday. she is coming. she is bringing soup. run.";
const outDir = "/output";
const target = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
