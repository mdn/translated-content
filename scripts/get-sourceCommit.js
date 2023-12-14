//
// This script uses a language detection library to calculate what language
// a document is written in. This will help us find any partially translated
// or untranslated documents within the repository, as well as any documents
// in the upstream content that shouldn't be translated.
//
// Written by Queen Vinyl Da.i'gyu-Kazotetsu (@queengooborg, https://www.queengoob.org)

import fs from "node:fs/promises";
import { fdir } from "fdir";
import fm from "front-matter";
import ora from "ora";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const spinner = ora().start();

const getSourceCommit = async (doc) => {
  const data = fm(await fs.readFile(doc, "utf8"));
  return data.attributes.l10n?.sourceCommit;
};

const printTable = (data, md = true) => {
  // Print header
  if (md) {
    console.log("| File | Source Commit |");
    console.log("| --- | --- |");
  } else {
    console.log("File,Source Commit");
  }

  // Print file details
  for (const [k, v] of Object.entries(data)) {
    if (md) {
      console.log(`| ${k} | ${v} |`);
    } else {
      console.log(`${k},${v}`);
    }
  }
};

const printJSON = (data) => {
  console.log(JSON.stringify(data));
};

const main = async () => {
  const { argv } = yargs(hideBin(process.argv)).command(
    "$0 [files..]",
    "Check the given files for a sourceCommit front matter key",
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
      data[file] = await getSourceCommit(file);
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
