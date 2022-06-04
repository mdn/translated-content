# Translated Content Peer Guidelines

## Policies for community maintenance teams

### Reviewing and issue queue

It is the responsibility of the active community maintenance team for each
active locale to keep up-to-date with reviews of pull requests and handling
issues filed against that locale. You can filter the relevant pull requests and
issues for each locale using the relevant label — `l10n-fr`, `l10n-ja`, `l10n-ko`
, `l10n-pt-br`, `l10n-ru`, `l10n-zh` and `l10n-es`.

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

### Review teams

The review teams for each locale are:

- Brazilian Portuguese (`pt-BR`) content — the
[@yari-content-pt-br](https://github.com/orgs/mdn/teams/yari-content-pt-br)
  team, which consists of:
  - [@lumigueres](https://github.com/lumigueres)
  - [@josielrocha](https://github.com/josielrocha)
  - [@juliosampaio](https://github.com/juliosampaio)
  - [@clovislima](https://github.com/clovislima)
- French (`fr`) content — the
[@yari-content-fr](https://github.com/orgs/mdn/teams/yari-content-fr)
  team, which consists of:
  - [@audrasjb](https://github.com/audrasjb)
  - [@cw118](https://github.com/cw118)
  - [@SphinxKnight](https://github.com/SphinxKnight)
  - [@tristantheb](https://github.com/tristantheb)
- Japanese (`ja`) content — the
[@yari-content-ja](https://github.com/orgs/mdn/teams/yari-content-ja)
  team, which consists of:
  - [@hmatrjp](https://github.com/hmatrjp)
  - [@potappo](https://github.com/potappo)
  - [@dynamis](https://github.com/dynamis)
  - [@kenji-yamasaki](https://github.com/kenji-yamasaki)
  - [@mfuji09](https://github.com/mfuji09)
- Korea (`ko`) content — the
[@yari-content-ko](https://github.com/orgs/mdn/teams/yari-content-ko)
  team, which consists of:
  - [@cos18](https://github.com/cos18)
  - [@yechoi42](https://github.com/yechoi42)
  - [@GwangYeol-Im](https://github.com/GwangYeol-Im)
  - [@pje1740](https://github.com/pje1740)
  - [@nKiNk](https://github.com/nKiNk)
  - [@yujo11](https://github.com/yujo11)
  - [@hochan222](https://github.com/hochan222)
- Russian (`ru`) content — the
[@yari-content-ru](https://github.com/orgs/mdn/teams/yari-content-ru)
  team, which consists of:
  - [@armanpwnz](https://github.com/armanpwnz)
  - [@captainspring](https://github.com/captainspring)
  - [@myshov](https://github.com/myshov)
  - [@Saionaro](https://github.com/Saionaro)
  - [@sashasushko](https://github.com/sashasushko)
  - [@lex111](https://github.com/lex111)
- Chinese (`zh-CN` and `zh-TW`) content — the
[@yari-content-zh](https://github.com/orgs/mdn/teams/yari-content-zh)
  team, which consists of:
  - [@t7yang](https://github.com/t7yang)
  - [@dibery](https://github.com/dibery)
  - [@irvin](https://github.com/irvin)
- Spanish (`es`) content - the [@yari-content-es](https://github.com/orgs/mdn/teams/yari-content-es)
  team, which consists of:
  - [@JuanVqz](https://github.com/JuanVqz)
  - [@dacalderonp](https://github.com/dacalderonp)
  - [@lasr21](https://github.com/lasr21)
  - [@tuxxy](https://github.com/tuxxy)
  - [@Graywolf9](https://github.com/Graywolf9)
  - [@davbrito](https://github.com/davbrito)
  - [@Vallejoanderson](https://github.com/vallejoanderson)

---

## Synchronization with the en-US document structure

Periodically we synchronize all the localized document tree structures with the
`en-US` tree structure (English slugs only), to make the documentation easier
to manage. When documents are removed from `en-US` it results in `orphaned`
documents within a sub-directory of each locale folder.

Active locale maintenance teams are invited to spend some time exploring the
orphaned documents, to see whether any of this work is worth keeping (either
adding to, or merging with an existing document in, the main tree), or whether
it can just be deleted.

When a synchronization occurs maintenance teams are given two weeks to decide
 what to do with the affected documents in their locales to keep things in sync.

Note: Conflicting docs are often created during the sync operation when `en-US`
documents get merged — for example if `Foo/Bar` becomes just a section inside
`Foo`, and we redirect `Foo/Bar` to `Foo#Bar`. This will result in a conflict
as the sync job tries to move the translated `Foo/Bar` to `Foo` according to the
redirect, but `Foo` already exists.

---

## Activating a locale

To activate a locale you must apply with the following information:

### Your locale

Please specify which of the following two locales you wish to have unfrozen:

- German (de)
- Polish (pl)

NB These are the only frozen locales we will consider - see
[The future of MDN localization in this Hacks post](https://hacks.mozilla.org/2020/10/mdn-web-docs-evolves-lowdown-on-the-upcoming-new-platform/)

### Your team members

You need to put together a community maintenance team. This requires:

- A team lead who will be the communication point between that team and the MDN
  core team, and have overall responsibility for the team.
- At least two other members, so that members can review other members work.
- A place to discuss this team's localization work. This can be a Telegram
  group, Matrix chat room, or whatever the team thinks is best.

To find out more about our existing teams see [Review teams](#review-teams)
above.

### Agree to our terms

Please indicate that you agree to our
[Requirements for keeping locales up-to-date](#requirements-for-keeping-locales-up-to-date)
 above.

### The team agrees to our CoC and license

Also indicate that your team agrees to adhere by our Code of Conduct and License
(see below)

### Acceptance

If the application is been successful you can start work on your locale. See the
 [guidelines for set up in the README](README.md).

You can add your team to the
[localizing MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Localize)
page.

## Get in touch

If you want to ask questions or talk to us about forming a new community
maintenance team, see [ask for help](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help).

---

### Code of Conduct

Everyone participating in this project is expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

### License

When contributing to the content you agree to license your contributions
according to [our license](LICENSE.md).

---
