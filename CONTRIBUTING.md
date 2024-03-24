# MDN Web Docs contribution guide

Thanks for taking the time to contribute to [MDN Web Docs](https://developer.mozilla.org)' translated content! :tada:

This document covers project setup steps along with a set of guidelines for contributing to MDN Web Docs translated content.
Everyone participating in this project is expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting started

Before contributing to translated content, we strongly recommend learning about [how to contribute to the original (English) content][Contributing guide] (often referred to as "upstream content"). The upstream contributing guide explains the guidelines and conventions of MDN pages, as well as setup instructions for more significant changes.

We also strongly recommend reading the [Translation guidelines][].

In addition to the requirements described in the upstream contributing guide, there are additional prerequesites you must have when contributing to this repository:

- **Moderate knowledge of the English language:** You must have a good enough understanding of the English language to be able to decipher the meaning of a page while translating. (For simple typo fixes, this is not required.)
- **Fluency in the downstream locale:** You must be able to fluently speak the language you are contributing to.

### Simple changes

If you want to make a small change like fixing a typo, the GitHub UI is the easiest way to get started.
If you've found a typo on the Simplified Chinese [JavaScript landing page][], for example, you can propose a fix as follows:

1. Sign in to [GitHub](https://github.com/)
2. Navigate to [https://github.com/mdn/translated-content](https://github.com/mdn/translated-content)
3. Find the source file [`files/zh-cn/web/javascript/index.md`](files/zh-cn/web/javascript/index.md)
4. Click the edit (pencil) button

From there, the GitHub UI will walk you through the rest by creating a [fork](https://docs.github.com/get-started/quickstart/fork-a-repo) and a branch to commit your changes to.
After you have made changes to your branch, the goal is to open a [pull request](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for your changes to be incorporated.

A pull request represents the work you want to be reviewed, approved, and merged into the `main` branch of the MDN repository.
See the [Creating a pull request](#creating-a-pull-request) for more details on creating and handling pull requests successfully.

If you're not certain of the changes that you want to make, [get in touch with us][]!

> **Note:** You can click the **View the source on GitHub** or **Edit the page on GitHub** link at the bottom of an MDN page to jump directly to the page source on GitHub.

### Forking and cloning the repository

If you want to make changes to more than one file, the GitHub UI is not very efficient because you have to make separate pull requests for each file you want to change.
Instead of using the GitHub UI, you need to use `git` or a client like [GitHub Desktop](https://docs.github.com/get-started/using-github/github-desktop) or [GitHub CLI](https://docs.github.com/github-cli/github-cli/about-github-cli).

#### Set up `mdn/content` repo

First, you will need to set up the `mdn/content` repo locally. If you do not plan to contribute to upstream content, you will not need to fork it as described in its [Contributing guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#forking-and-cloning-the-repository); all you need to do is clone it by running the following command:

```bash
git clone https://github.com/mdn/content.git
```

After the repository has been cloned, follow the [steps to prepare the project](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#preparing-the-project).

#### Set up `mdn/translated-content` repo

Once that is done, you will also need to fork and clone this repository by following the [upstream Contributing guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#forking-and-cloning-the-repository), replacing `content` with `translated-content`.

#### Link translated content

1. Navigate to your local clone of the content repository fork:

   ```bash
   cd /path/to/content
   ```

2. Next, define an environment variable in a `.env` file called `CONTENT_TRANSLATED_ROOT` containing the path to the _translated-content_ repo's `files` directory:

   ```bash
   echo CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files >> .env
   ```

   (the `.env` file will be created for you if it does not already exist.)

3. Run the command `yarn start` to start the local server at `localhost:5042`.

#### Working in the translated-content repo

This repo has exactly the same folder structure and concepts as the [upstream content repo](https://github.com/mdn/content). The main difference is in the setup you need to do before you can start editing. It is mostly the same, but there is a little bit more to consider. Primarily, commands such as `yarn content` are only available from the upstream content repo; linting commands are available here, however, as they often use different configuration.

## Contributing to MDN translated content

This section describes how to perform the most common types of contributions to MDN translated content.

### Fix a typo

To fix a typo, refer to the [Simple changes](#simple-changes) section.

### Create a new translation

To create a new translation for a page that does not yet have one, perform the following steps. For this example, we'll assume you are trying to translate the MDN landing page into French.

1. Find the source file in the upstream content repository. (ex. `/path/to/content/files/en-us/mdn/index.md`)
2. Copy the file to the appropriate locale's folder. (ex. `cp /path/to/content/files/en-us/mdn/index.md files/fr/mdn/index.md`)
3. Update the front matter of the document.

   1. Remove excess front matter properties (see [Translation guidelines][] to see which ones should be kept).
   2. Localize the `title` and `short-title` (if present)
   3. Add a new `l10n.sourceCommit` key, which contains the commit hash of the latest commit that modified the file. You can do this by running `git log <file>`.

   The front matter should look like this:

   ```md
   ---
   title: Le projet MDN Web Docs
   slug: MDN
   l10n:
     sourceCommit: 048f6b1c75e22103ddb0304d67ee79d6d8a014f0
   ---
   ```

4. Translate the file, following the [Translation guidelines][].
5. Create a commit, push your branch and create a pull request!

### Update an existing translation

If a translation is no longer in sync with upstream content (in other words, the English version has changed since the page was translated), the translation will need to be updated.

At the time of writing this document, a massive cleanup of translated content is in progress. Many documents still do not have a `l10n.sourceCommit` front matter property. As we update these old files, eventually we aim to have a `l10n.sourceCommit` property defined on all files.

#### Has a source commit property

XXX Write me...

#### No source commit present

XXX Write me...

## License

When contributing to the content you agree to license your contributions according to [our license](LICENSE.md).

[Contributing guide]: https://github.com/mdn/content/blob/main/CONTRIBUTING.md
[Translation guidelines]: docs/README.md
[JavaScript landing page]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
[get in touch with us]: https://developer.mozilla.org/docs/MDN/Community/Communication_channels
