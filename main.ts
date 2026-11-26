// warning-label entry: print the one-line entry from entry.txt
// The entry is a single line; trailing whitespace is trimmed before printing.
// Output goes to stdout with a trailing newline, exactly one line.
import { readFile } from "node:fs/promises";

// Resolve the entry file relative to this module, then read and print it.
const entryPath = new URL("./entry.txt", import.meta.url);
const content = await readFile(entryPath, "utf8");
const label = content.trim();
console.log(label);
