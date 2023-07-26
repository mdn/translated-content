# Translated Content Peer Guidelines

## Policies for community maintenance teams

### Reviewing and issue queue

It is the responsibility of the active community maintenance team for each active locale to keep up-to-date with reviews of pull requests and handling issues filed against that locale. You can filter the relevant pull requests and issues for each locale using the relevant label — `l10n-fr`, `l10n-ja`, `l10n-ko` , `l10n-pt-br`, `l10n-ru`, `l10n-zh` and `l10n-es`.

### Requirements for keeping locales up-to-date

Active community maintenance teams are expected to keep their locales maintained and reasonably up-to-date. This means:

- Reviewing and actioning all pull requests within 2 weeks.
- Triaging and fixing all actionable issues within 1 month.
- Making reasonable progress on keeping MDN's Tier 1 content (definition TBD) synchronized with the `en-US` versions. This means some progress should be made each week, e.g. updating an article to be in sync with the English version, removing or fixing a bad quality article…

If no progress is made on a locale in these areas within 1 month, the locale will be considered inactive, and edits will stop being accepted.

### Review teams

The review teams for each locale are:

- Brazilian Portuguese (`pt-BR`) content — the [yari-content-pt-br](https://github.com/orgs/mdn/teams/yari-content-pt-br) team, which consists of:
  - [josielrocha](https://github.com/josielrocha)
  - [clovislima](https://github.com/clovislima)
  - [nathipg](https://github.com/nathipg)
- French (`fr`) content — the [yari-content-fr](https://github.com/orgs/mdn/teams/yari-content-fr) team, which consists of:
  - [cw118](https://github.com/cw118)
  - [SphinxKnight](https://github.com/SphinxKnight)
  - [tristantheb](https://github.com/tristantheb)
- Japanese (`ja`) content — the [yari-content-ja](https://github.com/orgs/mdn/teams/yari-content-ja) team, which consists of:
  - [hmatrjp](https://github.com/hmatrjp)
  - [potappo](https://github.com/potappo)
  - [dynamis](https://github.com/dynamis)
  - [kenji-yamasaki](https://github.com/kenji-yamasaki)
  - [mfuji09](https://github.com/mfuji09)
- Korea (`ko`) content — the [yari-content-ko](https://github.com/orgs/mdn/teams/yari-content-ko) team, which consists of:
  - [sunhpark42](https://github.com/sunhpark42)
  - [jho2301](https://github.com/jho2301)
  - [swimjiy](https://github.com/swimjiy)
  - [wisedog](https://github.com/wisedog)
  - [cos18](https://github.com/cos18)
  - [yechoi42](https://github.com/yechoi42)
  - [GwangYeol-Im](https://github.com/GwangYeol-Im)
  - [pje1740](https://github.com/pje1740)
  - [yujo11](https://github.com/yujo11)
  - [hochan222](https://github.com/hochan222)
- Russian (`ru`) content — the [yari-content-ru](https://github.com/orgs/mdn/teams/yari-content-ru) team, which consists of:
  - [yanaklose](https://github.com/yanaklose)
  - [myshov](https://github.com/myshov)
  - [Saionaro](https://github.com/Saionaro)
  - [sashasushko](https://github.com/sashasushko)
  - [lex111](https://github.com/lex111)
- Chinese (`zh-CN` and `zh-TW`) content — the [yari-content-zh](https://github.com/orgs/mdn/teams/yari-content-zh) team, which consists of:
  - [t7yang](https://github.com/t7yang)
  - [irvin](https://github.com/irvin)
  - [yin1999](https://github.com/yin1999)
  - [jasonren0403](https://github.com/jasonren0403)
- Spanish (`es`) content - the [yari-content-es](https://github.com/orgs/mdn/teams/yari-content-es) team, which consists of:
  - [JuanVqz](https://github.com/JuanVqz)
  - [Graywolf9](https://github.com/Graywolf9)
  - [davbrito](https://github.com/davbrito)
  - [Vallejoanderson](https://github.com/vallejoanderson)
  - [marcelozarate](https://github.com/marcelozarate)
  - [Jalkhov](https://github.com/Jalkhov)

---

## Synchronization with the en-US document structure

Periodically we synchronize all the localized document tree structures with the `en-US` tree structure (English slugs only), to make the documentation easier to manage. When documents are removed from `en-US` it results in `orphaned` and `conflicting` documents within a sub-directory of each locale folder.

Active locale maintenance teams are invited to spend some time exploring the orphaned and conflicting documents, to see whether any of this work is worth keeping (either adding to, or merging with an existing document in, the main tree), or whether it can just be deleted.

When a synchronization occurs maintenance teams are given two weeks to decide what to do with the affected documents in their locales to keep things in sync.

See [the guide about orphaned and conflicting pages](./docs/orphaned_and_conflicting.md) for more details about how to deal with such pages.

---

## Get in touch

If you want to ask questions or talk to us about forming a new community maintenance team, see [ask for help][].

### Code of Conduct

Everyone participating in this project is expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

### License

When contributing to the content you agree to license your contributions according to [our license](LICENSE.md).

[ask for help]: https://developer.mozilla.org/docs/MDN/Community/Communication_channels
