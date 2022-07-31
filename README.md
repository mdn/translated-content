# Contributing to the translated content of MDN Web Docs

:tada: First of all, thanks for taking the time to contribute to
[MDN Web Docs](https://developer.mozilla.org)’ translated content! :tada:

The following is a set of guidelines for contributing to the
[translated content of MDN Web Docs](https://github.com/mdn/translated-content),
which is hosted within the [MDN Organization](https://github.com/mdn) on GitHub.

[Guidelines for peers can be found here](PEERS_GUIDELINES.md).

## Locales

Before we go any further, you should be aware that we are only accepting updates
to active locales — this means locales that have active community maintenance
teams in place to review PRs, fix issues, make updates, etc. Currently the list
of active locales is:

- `fr`
- `ja`
- `ko`
- `pt-BR`
- `ru`
- `zh` (`zh-CN` and `zh-TW`)
- `es`

If you want to just find a task and jump in, search by the labels `l10n-fr`,
`l10n-ja`, `l10n-ko`, `l10n-pt-br`, `l10n-ru`, `l10n-zh` and `l10n-es` in this repo’s
[issues list](https://github.com/mdn/translated-content/issues),
or the main [content repo issues](https://github.com/mdn/content/issues)

---

## Code of Conduct

Everyone participating in this project is expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

When contributing to the content you agree to license your contributions
according to [our license](LICENSE.md).

---

## Making contributions

A good place to learn about general guidelines for contributing to
[MDN Web Docs](https://developer.mozilla.org) is the
[Guidelines document](https://developer.mozilla.org/en-US/docs/MDN/Guidelines).
For example, you can find out more about MDN's writing-style guidelines via the
[Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide).

### Setting up to edit

This repo has exactly the same folder structure, concepts, and commands
available to it as the [content repo](https://github.com/mdn/content), which
holds all of MDN's English content. The main difference is in the setup you need
to do before you can start editing. It is mostly the same, but there is a little
bit more to consider.

To begin with, get the basic required tooling set up, as described in the
[content repo Setup section](https://github.com/mdn/content#setup).

Now you need to fork and clone both the
 [content repo](https://github.com/mdn/content)
 and the translated-content repo (this repo).

### Content repo setup

1. Once the above is done, cd into the content repo.

1. Run the command `yarn install` to fetch the latest packages and get the local
   MDN testing environment set up. It is also recommended that you run
   `yarn install` before every update you do to the source, to make sure you
   have the latest packages.

1. Next, create an environment variable called `CONTENT_TRANSLATED_ROOT`
   containing the path to the *translated-content* repo’s `files` directory. You
   could do this for a single session like so:

   ```bash
   export CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files
   ```

   But you’ll have to newly-set this every time you open up a new terminal
   window. Instead, you could put the environment variable setting in an `.env`
   file in the root of your content repo. This is most easily done using the
   following command:

   ```bash
   echo CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files >> .env
   ```

   (the `.env` file will be created for you if it does not already exist.)

1. Now you’ve got this set up, enter the command `yarn start` to begin the local
   testing server running at `localhost:5042`.

### Working in the translated-content repo

Over in the translated-content repo, decide what change you want to make, and
then:

1. Create a new branch to make your changes in.

1. Switch to your new branch and make the changes you want to make. You can keep
   going back to `localhost:5042/<your_locale>` (e.g. `localhost:5042/fr` for
   French) to test your changes and make sure the content looks how you want it
   to look.

1. When you are satisfied with your changes, create a pull request and one of
   our review teams will review it.

1. Once the pull request has been merged, the edition may take up to 48 hours
   (daily build and CDN caches). To see if your change has been deployed,
   you can check on
   [What's Deployed](https://whatsdeployed.io/s/16d/mdn/translated-content).

### For more info on editing this repo

For more information, we’d like to suggest that you go to the [content repo](https://github.com/mdn/content)
and read its README file, particularly to learn about [fundamental concepts](https://github.com/mdn/content#fundamental-concepts),
[pull request etiquette](https://github.com/mdn/content#pull-request-etiquette),
and common actions such as [adding](https://github.com/mdn/content#adding-a-new-document),
[moving](https://github.com/mdn/content#moving-one-or-more-documents), or
[deleting](https://github.com/mdn/content#deleting-a-document) documents.
