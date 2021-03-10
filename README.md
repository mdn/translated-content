# Contributing to the translated content of MDN Web Docs

:tada: First of all, thanks for taking the time to contribute to
[MDN Web Docs](https://developer.mozilla.org)’ translated content! :tada:

The following is a set of guidelines for contributing to the
[translated content of MDN Web Docs](https://github.com/mdn/translated-content),
which is hosted within the [MDN Organization](https://github.com/mdn) on GitHub.

## Tier 1 locales

Before we go any further, you should be aware that we are only accepting updates
to active locales — this means locales that have active community maintenance
teams in place to review PRs, fix issues, make updates, etc. Currently the list
of active locales is:

- `fr`
- `ja`
- `zh` (`zh-CN` and `zh-TW`)

If you want to just find a task and jump in, search by the labels `l10n-fr`,
`l10n-ja`, and `l10n-zh` in this repo’s [issues list](https://github.com/mdn/translated-content/issues),
or the main [content repo issues](https://github.com/mdn/content/issues)

## Code of Conduct

Everyone participating in this project is expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

When contributing to the content you agree to license your contributions
according to [our license](LICENSE.md).

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

Now you need to fork and clone both the [content repo](https://github.com/mdn/content)
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
   testing server running at `localhost:5000`.

### Working in the translated-content repo

Over in the translated-content repo, decide what change you want to make, and
then:

1. Create a new branch to make your changes in.

1. Switch to your new branch and make the changes you want to make. You can keep
   going back to `localhost:5000/<your_locale>` (e.g. `localhost:5000/fr` for
   French) to test your changes and make sure the content looks how you want it
   to look.

1. When you are satisfied with your changes, create a pull request and one of
   our review teams will review it.

### For more info on editing this repo

For more information, we’d like to suggest that you go to the [content repo](https://github.com/mdn/content)
and read its README file, particularly to learn about [fundamental concepts](https://github.com/mdn/content#fundamental-concepts),
[pull request etiquette](https://github.com/mdn/content#pull-request-etiquette),
and common actions such as [adding](https://github.com/mdn/content#adding-a-new-document),
[moving](https://github.com/mdn/content#moving-one-or-more-documents), or
[deleting](https://github.com/mdn/content#deleting-a-document) documents.

## Policies for active community maintenance teams

### Reviewing and issue queue

It is the responsibility of the active community maintenance team for each
active locale to keep up-to-date with reviews of pull requests and handling
issues filed against that locale. You can filter the relevant pull requests and
issues for each locale using the relevant label — `l10n-fr`, `l10n-ja`,
and `l10n-zh`.

The review teams for each locale are:

- French (`fr`) content — the [@yari-content-fr](https://github.com/orgs/mdn/teams/yari-content-fr)
  team, which consists of:
  - [@nicolas-goudry](https://github.com/nicolas-goudry)
  - [@JNa0](https://github.com/JNa0)
  - [@tristantheb](https://github.com/tristantheb)
  - [@LEMIBANDDEXARI](https://github.com/LEMIBANDDEXARI)
  - [@SphinxKnight](https://github.com/SphinxKnight)
- Japanese (`ja`) content — the [@yari-content-ja](https://github.com/orgs/mdn/teams/yari-content-ja)
  team, which consists of:
  - [@hmartjp](https://github.com/hmartjp)
  - [@potappo](https://github.com/potappo)
  - [@mfuji09](https://github.com/mfuji09)
- Chinese (`zh-CN` and `zh-TW`) content — the [@yari-content-zh](https://github.com/orgs/mdn/teams/yari-content-zh)
  team, which consists of:
  - [@t7yang](https://github.com/t7yang)
  - [@dibery](https://github.com/dibery)
  - [@irvin](https://github.com/irvin)

### Requirements for keeping locales up-to-date

Active community maintenance teams are expected to keep their locales maintained
and reasonably up-to-date. This means:

- Reviewing and actioning all pull requests within 2 weeks.
- Triaging and fixing all actionable issues within 1 month.
- Making reasonable progress on keeping MDN’s Tier 1 content (definition TBD)
   synchronized with the `en-US` versions. This means some progress should be
   made each week, e.g. updating an article to be in sync with the English
   version, removing or fixing a bad quality article…

If no progress is made on a locale in these areas within 1 month, the locale
will be considered inactive, and edits will stop being accepted.

### Promoting an inactive locale to Tier 1

If you want to promote a currently-inactive/frozen locale to Tier 1, meaning
that it is activated and can then be edited, you need to put together a
community maintenance team. This requires:

- A team lead who will be the communication point between that team and the MDN
  core team, and have overall responsibility for the team.
- At least one other member, so that one member can review another member's
  work.
- A place to discuss this team's localization work. This can be a Telegram
  group, Matrix chat room, or whatever the team thinks is best.

If you want to find out more about our community maintenance teams, see
[localizing MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Localize).
If you want to ask questions or talk to us about forming a new community
maintenance team, see [ask for help](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help).
