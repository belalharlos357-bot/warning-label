import { readFileSync as read} from "node:fs";
import { fileURLToPath as toPath} from "node:url";
import { dirname as dirOf, join as joinPath} from "node:path";

const here = dirOf(toPath(import.meta.url));
const report = read(joinPath(here, "entry.txt"), "utf8").trim();
console.log(report);
