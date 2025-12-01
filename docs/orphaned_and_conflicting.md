# Orphaned and conflicting documents

In this guide, we will look at how to deal with the files in `files/<locale>/orphaned` and `files/<locale>/conflicting`. Ideally, those folders should be empty, but in practice, some regular maintenance is needed from each localization team and some more work might be needed if this has not been done since the MDN migration to GitHub.

## What they are

Yari relies on file structure/hierarchy being the same between `files/en-us/` from `mdn/content` and `files/<locale>/` from `mdn/translated-content`. However, from time to time, some differences occur and must be solved by a human maintainer. Such differences are pushed into `files/<locale>/orphaned` and `files/<locale>/conflicting` directories.

### Orphaned pages

When a page does not exists anymore in English (or didn't exist at all, like it was possible to have in Kuma) but exists in a given locale, it is moved to `files/<locale>/orphaned`. The locale team should then decide if this content should be deleted/redirected or migrated to another page.

In practice, deleting-redirecting per the `en-US` structure is enough (see below).

### Conflicting pages

When an English page is redirected/moved to a new location, but the target already exists in `<locale>`, the localized page is moved to `files/<locale>/conflicting`. Basically, a locale team member should decide which version take priority over the other.

## How they are generated

This "structure" synchronization between `mdn/content` and `mdn/translated-content` occurs daily with this GitHub Actions workflow <https://github.com/mdn/mdn-translated-content/blob/main/.github/workflows/sync-translated-content.yml> (the logic can be found at <https://github.com/mdn/rari/blob/main/crates/rari-tools/src/sync_translated_content.rs>)

Before #8378 (16th Sep. 2022), this synchronization automatically added commits (see [an example](https://github.com/mdn/translated-content/commit/81b40438ed59fc3d5990eae0d1eb333ad7b5dd27), or [another](https://github.com/mdn/translated-content/commit/51268ca7b9bdf3ead1c1775dee61bcc90445f0dc)). Now, a PR is created with the changes for each locale (see #9029, #9026).

## How to deal with them

The goal of this process is to have 0 files under `files/<locale>/conflicting` / `files/<locale>/orphaned`. In the following sections, we assume that you setup both `mdn/content` and `mdn/translated-content` repositories on your local machine.

### Deal with "first gen" files

If your locale already contains a `conflicting` or `orphaned` directory, it has been populated by earlier sync commits. For each page, you will need to decide a course of action. Afterwards, rinse and repeat for the other pages.

Depending on your team and on the directory you are processing, you may either go with a pull request dealing with only on page or with a PR for a small set of pages (e.g. processing the whole `conflicting/web/svg` directory at once if it contains 5-10 pages).

#### Dealing with orphaned pages

For an orphaned page, the generic approach consists of the following:

1. Identify the `mdn/content` commit for the deletion using:

   ```bash
   git log -n 1 -- files/en-us/slug/of/deleted/doc/index.md
   ```

   This will give you something like

   ```console
   commit d387c1fe9d861cf0578a5d05b29a47d3a1d5e986
   Author: John Doe <jdoe@example.com>
   Date:   Mon Sep 12 03:36:39 2022 -0400

   Remove Glossary/jQuery (#20569)
   ```

2. Check the corresponding PR to have a better understanding of the change (in the previous example, this is [#20569](https://github.com/mdn/content/pull/20569)).
3. Check if there is an active redirect for the corresponding page in English (see <https://github.com/mdn/content/blob/main/files/en-us/_redirects.txt>)
4. Depending on the presence of a redirect, use either

   ```bash
   npm run content delete <orphaned/slug/of/page> <locale> -- --redirect <other/slug>
   ```

   or

   ```bash
   npm run content delete <orphaned/slug/of/page> <locale>
   ```

#### Dealing with conflicting pages

A conflicting page might need more work as content may have been moved/rewritten on the target page as well and redirection might not suffice. That being written, dealing with a conflicting page usually involves:

1. Identify the `mdn/content` commit for the move using:

   ```bash
   git log -n 1 -- files/en-us/slug/of/redirected/doc/index.md
   ```

   This will give you something like

   ```console
   commit be2279c2425d7d3eabe5956bc920025b025bdc2c
   Author: John Doe <john.doe@example.com>
   Date:   Wed Sep 21 23:51:39 2022 -0400

    Merge "SAB planned changes" into the main page (#20863)
   ```

2. Check the corresponding PR to have a better understanding of the change (in the previous example, this is [#20863](https://github.com/mdn/content/pull/20863)).
3. Applying the same redirect as per `mdn/content` for the source page:

   ```bash
   npm run content delete <conflicting/slug/of/page> <locale> -- --redirect <other/slug>
   ```

4. Updating the target page to reflect the movement of content in English. You might need to reuse content from the "conflicting" page into the existing target page to follow the English evolution.

### Deal with generated PRs

With the automated PRs workflow, it is now easier to "catch" orphaned or conflicting pages before they fill the stack of pages to be removed in the repository.

The process stays the same as above (using `npm run content delete bla/bla locale -- --redirect foo/foo` most of the time). However, the changes should be made on the branch created by the bot rather than on a new PR (checkout the existing branch rather than creating your own on your fork).

Be careful though, if left opened, the PR will be force-pushed updated by the bot every 24h and your changes might be lost. Be sure to keep a local/forked branch with your changes or to review such changes swiftly within your team.

### "Nice to have's"

The following steps are not mandatory, but improve the quality of the end result:

1. Update any existing link to the previous slug of a page under `files/<locale>/` (will touch a larger number of files)
2. Update the existing target page so that it completely matches the current English state (might take a bit longer)
