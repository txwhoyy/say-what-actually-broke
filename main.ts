import { mkdirSync, writeFileSync } from "node:fs";

// The failure is real (the connection dropped at 99%), the next step is
// real (reconnect and retry) — the joke is the progress bar, which knew
// the upload was doomed and kept smiling at 99% to keep the user calm.
const ENTRY =
  "Upload failed at 99%: the connection dropped, not your file. Reconnect and try again — the 99% was real; the progress bar was just lying to keep you calm.";

const OUTPUT_PATH = "/output/entry.txt";

function writeEntry() {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY + "\n");
}

writeEntry();
