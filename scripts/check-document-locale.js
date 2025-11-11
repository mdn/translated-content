//
// This script uses a language detection library to calculate what language
// a document is written in. This will help us find any partially translated
// or untranslated documents within the repository, as well as any documents
// in the upstream content that shouldn't be translated.
//
// The languages are represented by ISO 639-3, you can check the full list here:
// https://github.com/wooorm/franc/tree/main/packages/franc-min#data
//
// Written by Queen Vinyl Da.i'gyu-Kazotetsu (@queengooborg, https://www.queengoob.org)

import fs from "node:fs/promises";
import { franc } from "franc-min";
import { fdir } from "fdir";
import MarkdownIt from "markdown-it";
import { htmlToText } from "html-to-text";
import ora from "ora";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const spinner = ora().start();

const THRESHOLD = 10;

const IGNORE_BLOCK_STRINGS = [
  "<!-- lang-detect ignore-start -->",
  "<!-- lang-detect ignore-end -->",
];

const IGNORED_LANGUAGES = [];

const DETECTED_LANGUAGES = new Set();

const mdConverter = MarkdownIt({
  html: true,
});

const textSegmenter = new Intl.Segmenter([], { granularity: "sentence" });

const removeIgnoredSections = (content) => {
  while (true) {
    const posStart = content.search(IGNORE_BLOCK_STRINGS[0]);
    const posEnd = content.search(IGNORE_BLOCK_STRINGS[1]);

    if (posStart === -1 || posEnd === -1) {
      // If there isn't a full lang-detect ignore block left, we're finished
      break;
    }
    content = content.replace(
      content.slice(posStart, posEnd + IGNORE_BLOCK_STRINGS[1].length),
      "",
    );
  }

  return content;
};

const convertToText = async (doc) => {
  let data = await fs.readFile(doc, "utf8");
  // remove the front matter
  data = data.replace(/^---.*---/ms, "").trimStart();

  const html = mdConverter.render(removeIgnoredSections(data));
  return htmlToText(html, {
    selectors: [
      { selector: "a", options: { ignoreHref: true } },
      { selector: "img", format: "skip" },
      // ignore fenced code blocks
      { selector: "pre", format: "skip" },
    ],
  });
};

const detectLanguageByParts = (parts) => {
  const results = [];
  for (const part of parts) {
    const result = franc(part);
    results.push({
      language: result,
      input: part,
    });
  }
  return results;
};

const getDocumentLanguages = async (content) => {
  let textLength = 0;

  const segments = Array.from(textSegmenter.segment(content)).map(
    (segment) => segment.segment,
  );
  const languageResults = detectLanguageByParts(segments);

  const result = {};
  for (const languageResult of languageResults) {
    if (
      IGNORED_LANGUAGES.includes(languageResult.language) ||
      languageResult.language === "und"
    ) {
      continue;
    }
    result[languageResult.language] =
      (result[languageResult.language] || 0) + languageResult.input.length;
    textLength += languageResult.input.length;
  }

  if (textLength === 0) {
    return null;
  }

  const detectedLanguages = {};
  for (const language in result) {
    const pencent = (result[language] / textLength) * 100;
    if (pencent > THRESHOLD) {
      detectedLanguages[language] = pencent;
      DETECTED_LANGUAGES.add(language);
    }
  }

  return detectedLanguages;
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
    str = str.substring(0, str.length - 1);

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
      const content = await convertToText(file);
      data[file] = await getDocumentLanguages(content);

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
