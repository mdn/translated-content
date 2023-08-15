//
// This script uses a language detection library to calculate what language
// a document is written in. This will help us find any partially translated
// or untranslated documents within the repository, as well as any documents
// in the upstream content that shouldn't be translated.
//
// Written by Queen Vinyl Da.i'gyu-Kazotetsu (@queengooborg, https://www.queengoob.org)

import fs from "node:fs/promises";
import fse from "fs-extra";
import cld from "cld";
import { fdir } from "fdir";
import MarkdownIt from "markdown-it";
import ora from "ora";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const spinner = ora().start();

const THRESHOLD = 10;

const IGNORE_BLOCK_STRINGS = [
  "<!-- lang-detect ignore-start -->",
  "<!-- lang-detect ignore-end -->",
];

const IGNORED_LANGUAGES = [
  "LATIN", // Commonly used as example text
];

const LANGUAGES = Object.keys(cld.LANGUAGES).filter(
  (l) => !IGNORED_LANGUAGES.includes(l.name),
);

const DETECTED_LANGUAGES = new Set();

const mdConverter = MarkdownIt({
  html: true,
});

const removeIgnoredSections = (content) => {
  let newContent = content;
  let complete = false;

  while (!complete) {
    const posStart = content.search(IGNORE_BLOCK_STRINGS[0]);
    const posEnd = content.search(IGNORE_BLOCK_STRINGS[1]);

    if (posStart === -1 || posEnd === -1) {
      // If there isn't a full lang-detect ignore block left, we're finished
      complete = true;
    } else {
      newContent = newContent.replace(
        newContent.slice(posStart, posEnd + IGNORE_BLOCK_STRINGS[1].length),
        "",
      );
    }
  }

  return newContent;
};

const convertToHTML = async (doc) => {
  const data = await fs.readFile(doc, "utf8");
  return removeIgnoredSections(await mdConverter.render(data));
};

const getDocumentLanguages = async (doc, expectedLocale = "ENGLISH") => {
  const content = await convertToHTML(doc);

  let detection;
  try {
    detection = await cld.detect(content, {
      isHTML: true,
      languageHint: expectedLocale,
    });
  } catch (e) {
    if (e.message === "Failed to identify language") {
      // If the language couldn't be identified, silently ignore
      return null;
    }

    throw e;
  }

  const detectedLanguages = detection.languages
    .filter((l) => !IGNORED_LANGUAGES.includes(l.name))
    .filter((l) => l.percent >= THRESHOLD);
  const result = {};

  for (const l of detectedLanguages) {
    DETECTED_LANGUAGES.add(l.name);
    result[l.name] = l.percent;
  }

  return result;
};

const printTable = (data, md = true) => {
  const detectedLanguages = Array.from(DETECTED_LANGUAGES.values()).sort();

  // Print header
  if (md) {
    console.log(`| File | ${detectedLanguages.join(" | ")} |`);
    console.log(`| --- |${" --- |".repeat(detectedLanguages.length)}`);
  } else {
    console.log(`File,${detectedLanguages.join(",")}`);
  }

  // Print file details
  for (const [k, v] of Object.entries(data)) {
    let str = `${k},`;

    if (v) {
      for (const l of detectedLanguages) {
        str += `${v[l] || "0"},`;
      }
    } else {
      str += `${"ERR,".repeat(detectedLanguages.length)}`;
    }

    // Strip last comma
    str = str.substr(0, str.length - 1);

    if (md) {
      str = "| " + str.replace(/,/g, " | ") + " |";
    }

    console.log(str);
  }
};

const printJSON = (data) => {
  console.log(JSON.stringify(data));
};

const main = async () => {
  const { argv } = yargs(hideBin(process.argv)).command(
    "$0 [files..]",
    "Check the locales of the given files",
    (yargs) => {
      yargs
        .positional("files", {
          describe:
            "The files to check (relative to the current working directory)",
          type: "string",
          array: true,
          default: ["./files/"],
        })
        .option("format", {
          alias: "f",
          describe: "The format to print results in",
          type: "string",
          default: "md",
          choices: ["md", "csv", "json"],
        })
        .option("expectedLocale", {
          alias: "l",
          describe: "The expected locale of the files",
          type: "string",
          default: "ENGLISH",
          choices: LANGUAGES,
        });
    },
  );

  const files = [];
  const data = {};

  spinner.text = "Crawling files...";

  for (const fp of argv.files) {
    const fstats = await fs.stat(fp);

    if (fstats.isDirectory()) {
      files.push(
        ...new fdir()
          .withBasePath()
          .filter((path) => path.endsWith(".md"))
          .crawl(fp)
          .sync(),
      );
    } else if (fstats.isFile()) {
      files.push(fp);
    }
  }

  for (const i in files) {
    const file = files[i];

    spinner.text = `${i}/${files.length}: ${file}...`;

    try {
      data[file] = await getDocumentLanguages(file, argv.expectedLocale);

      if (!data[file]) {
        spinner.fail(`${file}: Failed to identify language!`);
        spinner.start();
      }
    } catch (e) {
      spinner.fail(`${file}: ${e}`);
      spinner.start();
    }
  }

  spinner.stop();

  if (argv.format === "json") {
    printJSON(data);
  } else {
    printTable(data, argv.format === "md");
  }
};

await main();
