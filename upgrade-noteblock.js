#!/bin/node

/*
 * upgrade-noteblock.js - © 2024 @queengooborg
 * Written by Queen Vinyl Da.i'gyu-Kazotetsu <https://www.queengoob.org>
 * Script to replace old noteblock syntax with new, GFM syntax
 *
 * Requirements:
 * - NodeJS
 * - mdn/content or mdn/translated-content as CWD
 */

import fs from "node:fs/promises";
import path from "node:path";

const regex = (strings) =>
  new RegExp(
    `( *)>\\s\\*\\*(${strings.join("|")})\\*\\*\\s(?![\\*\\[\`\\{_])(>\\s(?!>)|>(?=\\n))?`,
    "g",
  );
const types = {
  NOTE: [
    "Note:",
    "Hinweis:",
    "Nota:",
    "Note :",
    "メモ:",
    "참고:",
    "Uwaga:",
    "Nota:",
    "Примечание:",
    "备注：",
    "備註：",
  ],
  WARNING: [
    "Warning:",
    "Warnung:",
    "Advertencia:",
    "Attention :",
    "警告:",
    "경고:",
    "Ważne:",
    "Aviso:",
    "Предупреждение:",
    "警告：",
    "警告：",
  ],
  CALLOUT: [
    "Callout:",
    "Bemerkung:",
    "Observación:",
    "Remarque :",
    "注目:",
    "알림:",
    "Obserwacja:",
    "Observação:",
    "Сноска:",
    "标注：",
    "標註：",
  ],
};

// https://gist.github.com/lovasoa/8691344
async function* walk(dir) {
  for await (const d of await fs.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile() && d.name != ".DS_Store") yield entry;
  }
}
// END SNIPPET

const main = async (filepath) => {
  for await (const p of walk(filepath || "./files")) {
    // Skip non-Markdown files
    if (!p.endsWith(".md")) continue;

    let contents = await fs.readFile(p, "utf-8");
    let changed = false;

    for (const [type, strings] of Object.entries(types)) {
      const re = regex(strings);
      if (contents.match(re)) {
        // If there's any match, replace all matches
        contents = contents.replace(re, `$1> [!${type}]\n$1> `);
        changed = true;
      }

      if (changed) {
        await fs.writeFile(p, contents);
      }
    }
  }
};

await main(process.argv[2]);
