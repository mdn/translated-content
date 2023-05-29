# Contributing to the translated content of MDN Web Docs

:tada: First of all, thanks for taking the time to contribute to [MDN Web Docs](https://developer.mozilla.org)’ translated content! :tada:

The following is a set of guidelines for contributing to the [translated content of MDN Web Docs](https://github.com/mdn/translated-content), which is hosted within the [MDN Organization](https://github.com/mdn) on GitHub.

[Guidelines for peers can be found here](PEERS_GUIDELINES.md).

## Locales

Before we go any further, you should be aware that we are only accepting updates to active locales — this means locales that have active community maintenance teams in place to review PRs, fix issues, make updates, etc. Currently the list of active locales is:

- `fr`
- `ja`
- `ko`
- `pt-BR`
- `ru`
- `zh` (`zh-CN` and `zh-TW`)
- `es`

If you want to just find a task and jump in, search by the labels `l10n-fr`, `l10n-ja`, `l10n-ko`, `l10n-pt-br`, `l10n-ru`, `l10n-zh` and `l10n-es` in this repo's [issues list](https://github.com/mdn/translated-content/issues), or the main [content repo issues](https://github.com/mdn/content/issues).

## Code of Conduct

Everyone participating in this project is expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

When contributing to the content you agree to license your contributions according to [our license](LICENSE.md).

## Making contributions

A good place to learn about general guidelines for contributing to [MDN Web Docs](https://developer.mozilla.org) is the [Guidelines document][]. For example, you can find out more about MDN's writing-style guidelines via the [Writing style guide][].

### Setting up to edit

This repo has exactly the same folder structure, concepts, and commands available to it as the [content repo](https://github.com/mdn/content), which holds all of MDN's English content. The main difference is in the setup you need to do before you can start editing. It is mostly the same, but there is a little bit more to consider.

The basic build steps are described in the content repo [Build the site](https://github.com/mdn/content#build-the-site) section. More detailed steps along with hints for tooling are covered in the content repo [Contributing guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md)

Now you need to fork and clone both the [content repo](https://github.com/mdn/content) and the translated-content repo (this repo).

### Content repo setup

1. Navigate to your local clone of the content repository fork:

    ```bash
    cd ~/path/to/content
    ```

2. Run the command `yarn install` to fetch the latest packages and get the local MDN testing environment set up. It is also recommended that you run `yarn install` before every update you do to the source, to make sure you have the latest packages.

3. Next, create an environment variable called `CONTENT_TRANSLATED_ROOT` containing the path to the *translated-content* repo’s `files` directory. You could do this for a single session like so:

   ```bash
   export CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files
   ```

   You must set this every time you start a new shell or terminal session. To avoid this, you can put the environment variable in a `.env` file at the root of your content repo. You can do this with the following command:

   ```bash
   echo CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files >> .env
   ```

   (the `.env` file will be created for you if it does not already exist.)

4. Run the command `yarn start` to start the local server at `localhost:5042`.

### Working in the translated-content repo

Over in the translated-content repo, decide what change you want to make, and then:

1. Create a new branch to make your changes in.

2. Switch to your new branch and make the changes you want to make. You can keep going back to `localhost:5042/<your_locale>` (e.g. `localhost:5042/fr` for French) to test your changes and make sure the content looks how you want it to look.

3. When you are satisfied with your changes, create a pull request and one of our review teams will review it.

4. When your pull request is merged by a reviewer, the changes may take up to 48 hours to be visible.

### For more info on editing this repo

For more information, we'd like to suggest that you go to the [content repo](https://github.com/mdn/content) and read its contribution guide, particularly to learn about [how to get started](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#getting-started), [pull request etiquette](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#pull-request-etiquette), and common actions such as [adding](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document), [moving](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#moving-documents), or [deleting](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#deleting-a-document) documents.

[Guidelines document]: https://developer.mozilla.org/en-US/docs/MDN/Guidelines
[Writing style guide]: https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide
