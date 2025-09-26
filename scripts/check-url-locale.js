//
// This script uses mdast to parse the markdown files and check if the URLs
// are pointing to the correct locale.
// You can also use the --fix option to fix the URL locale errors.
//
// Usage:
// node scripts/check-url-locale.js [files...]
// node scripts/check-url-locale.js --fix [files...]

"use strict";

import fs from "node:fs/promises";
import * as path from "node:path";
import { fdir } from "fdir";
import ora from "ora";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fromMarkdown } from "mdast-util-from-markdown";
import { visit } from "unist-util-visit";

const spinner = ora({ isEnabled: false }).start();

const IGNORE_BLOCK_STRINGS = [
  "<!-- url-locale-check ignore-start -->",
  "<!-- url-locale-check ignore-end -->",
];

/**
 * define types
 *
 * @typedef {Array<{url: string, line: number, column: number, urlLocale: string}>} UrlLocaleErrors
 * @typedef {Array<{url: string, line: number, column: number}>} Urls
 */

/**
 *
 * @param {string} content
 */
function removeIgnoredContent(content) {
  while (true) {
    const posStart = content.search(IGNORE_BLOCK_STRINGS[0]);
    const posEnd = content.search(IGNORE_BLOCK_STRINGS[1]);

    if (posStart === -1 || posEnd === -1) {
      // If there isn't a full lang-detect ignore block left, we're finished
      break;
    }

    // replace the ignored section with empty lines (so that the line numbers don't change)
    const replaceLines = content.slice(
      posStart,
      posEnd + IGNORE_BLOCK_STRINGS[1].length,
    );
    const lines = (replaceLines.match(/\n/g) || []).length;
    content = content.replace(replaceLines, "\n".repeat(lines));
  }

  return content;
}

/**
 *
 * @param {string} locale
 */
function normalizeLocale(locale) {
  const localeParts = locale.split("-");
  if (localeParts.length === 2) {
    localeParts[1] = localeParts[1].toUpperCase();
  }
  return localeParts.join("-");
}

/**
 *
 * @param {string} rawContent
 * @returns {Urls}
 */
function findUrlInText(rawContent) {
  const urls = [];
  for (const match of rawContent.matchAll(/href=['"]([^'"]+)['"]/g)) {
    const left = rawContent.slice(0, match.index);
    const line = (left.match(/\n/g) || []).length + 1;
    const lastIndexOf = left.lastIndexOf("\n") + 1;
    const column = match.index - lastIndexOf + 1 + ("href".length + 2);
    urls.push({ url: match[1], line, column });
  }
  return urls;
}

/**
 *
 * @param {string} content
 * @returns {Urls}
 */
function findUrlInMarkdown(content) {
  const tree = fromMarkdown(content);
  const urls = [];
  visit(tree, ["link", "html"], (node) => {
    if (node.type === "link") {
      if (node.children.length === 1) {
        urls.push({
          url: node.url,
          line: node.children[0].position.end.line,
          column: node.children[0].position.end.column + 2,
        });
      } else {
        urls.push({
          url: node.url,
          line: node.position.start.line,
          column: node.position.start.column + 3,
        });
      }
    } else {
      // html
      const urlsInHtml = findUrlInText(node.value);
      const correctedUrls = urlsInHtml.map(({ url, line, column }) => {
        if (line === 1) {
          // if it's the first line, we need to add the column offset
          column += node.position.start.column - 1;
        }
        line += node.position.start.line - 1;
        return { url, line, column };
      });
      urls.push(...correctedUrls);
    }
  });
  return urls;
}

/**
 *
 * @param {string} content
 * @param {string} docLocale
 * @returns {UrlLocaleErrors}
 */
function checkUrlLocale(content, docLocale) {
  const urls = findUrlInMarkdown(content);
  const reportUrls = [];
  for (const { url, line, column } of urls) {
    const urlParts = url.split("/").slice(1);
    if (urlParts.length < 2 || urlParts[1] !== "docs") {
      // ignore non-docs links
      continue;
    }
    const urlLocale = urlParts[0];
    if (urlLocale === docLocale) {
      continue;
    }
    reportUrls.push({
      url,
      line,
      column,
      urlLocale,
    });
  }
  return reportUrls;
}

/**
 *
 * @param {string} filePath
 * @param {UrlLocaleErrors} errors
 * @param {string} expectedLocale
 */
function generateReport(filePath, errors, expectedLocale) {
  return errors
    .map(
      (e) =>
        `  - ${filePath}:${e.line}:${e.column}: ${e.url} (${e.urlLocale} ==> ${expectedLocale})`,
    )
    .join("\n");
}

/**
 *
 * @param {string} content
 * @param {UrlLocaleErrors} errors
 * @param {string} expectedLocale
 */
function fixUrlLocale(content, errors, expectedLocale) {
  errors.sort((a, b) => {
    if (a.line === b.line) {
      // sort by column, descending
      return b.column - a.column;
    }
    return a.line - b.line;
  });
  expectedLocale = `/${expectedLocale}/`;
  const lines = content.split("\n");
  for (const { url, line, column, urlLocale } of errors) {
    let lineContent = lines[line - 1];
    const prefix = lineContent.slice(0, column - 1);
    // replace the slashed locale with the expected locale
    // to prevent replacing the empty url locale
    const newUrl = url.replace(`/${urlLocale}/`, expectedLocale);
    const suffix = lineContent.slice(column - 1).replace(url, newUrl);
    lines[line - 1] = `${prefix}${suffix}`;
  }
  return lines.join("\n");
}

async function main() {
  const { argv } = yargs(hideBin(process.argv)).command(
    "$0 [files..]",
    "Check the url locales of the given files",
    (yargs) => {
      yargs
        .positional("files", {
          describe:
            "The files to check (relative to the current working directory)",
          type: "string",
          array: true,
          default: ["./files/"],
        })
        .option("fix", {
          describe: "Fix the URL locale errors",
          type: "boolean",
          default: false,
        });
    },
  );

  const files = [];

  spinner.text = "Crawling files...";

  const dryRun = !argv.fix;

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

  let exitCode = 0;

  for (const i in files) {
    const file = files[i];

    spinner.text = `${i}/${files.length}: ${file}...`;

    const relativePath = path.relative(process.cwd(), file);
    const parts = relativePath.split(path.sep);
    if (parts.length < 2 || parts[0] !== "files") {
      spinner.warn(`File "${file}" is not in the files directory!`);
      spinner.start();
      continue;
    }

    try {
      const locale = normalizeLocale(parts[1]);

      const originContent = await fs.readFile(relativePath, "utf8");
      const content = removeIgnoredContent(originContent);

      const urlLocaleErrors = checkUrlLocale(content, locale);

      if (urlLocaleErrors.length > 0) {
        if (dryRun) {
          spinner.fail(
            `${file}: Found ${
              urlLocaleErrors.length
            } URL locale errors!\n${generateReport(
              relativePath,
              urlLocaleErrors,
              locale,
            )}`,
          );
          exitCode = 1;
        } else {
          spinner.info(
            `${file}: Found ${urlLocaleErrors.length} URL locale errors! Fixing...`,
          );
          const newContent = fixUrlLocale(
            originContent,
            urlLocaleErrors,
            locale,
          );
          if (newContent === originContent) {
            spinner.fail(`${file}: Fixing URL locale errors failed!`);
            exitCode = 1;
          } else {
            await fs.writeFile(relativePath, newContent);
          }
        }
        spinner.start();
      }
    } catch (e) {
      spinner.fail(`${file}: ${e}`);
      spinner.start();
    }
  }

  spinner.stop();

  if (exitCode === 0) {
    console.log("Checked all files successfully!");
  } else {
    process.exitCode = exitCode;
  }
}

await main();
