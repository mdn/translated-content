---
title: Bonnes pratiques GitHub pour MDN
slug: MDN/Community/Issues
l10n:
  sourceCommit: ca4de15aa8391a1e3fed7c651d5ee941051cb3fe
---

{{MDNSidebar}}

[Les tickets GitHub (ou <i lang="en">issues</i> en anglais)](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) sont utilisés afin de tracer l'ensemble des tâches à réaliser et qui ont un résultat attendu clair. Si vous avez trouvé un <i lang="en">bug</i> avec le contenu ou la plateforme, regardez si ce problème n'a pas déjà été remonté sur [le dépôt correspondant](/fr/docs/orphaned/MDN/Community/Contributing/Our_repositories). Si ça n'est pas le cas, n'hésitez pas à rédiger un nouveau ticket en utilisant le modèle disponible sur le début.

> [!NOTE]
> Si un ticket a l'étiquette `triage`, cela signifie qu'elle n'a pas encore été revue et qu'il n'est pas nécessaire de travailler dessus.

Si le ticket que vous renseignez ne décrit pas un problème, assurez-vous qu'il contient une liste de tâches claires et réalisable ou un objectif concret. Par exemple&nbsp;:

```markdown
## Remove `\{{ warning }}` macro from documents

We should no longer be using the `\{{ warning }}` macro in our documentation.

### Task description

We should therefore replace all instances of the `\{{ warning }}` macro with the following:

> [!WARNING]
> Main subject line
>
> Details of the warning.
> It can have multiple paragraphs.

### Actionable outcome

- [ ] There are no more instances of the `\{{ warning }}` macro in the `mdn/content` repository.
- [ ] Deprecate `\{{ warning }}` macro
- [ ] Notify localization team leads of the change.
```

## Une bonne communication est essentielle

Veillez à faire attention à la communication utilisée dans le projet. Elle doit être utile et ne pas compliquer la tâche des autres personnes qui contribuent au(x) projet(s). Soumettre des <i lang="en">pull requests</i> peut aider, mais uniquement si elles sont bien utiles et faciles à revoir. Rapporter des problèmes et participer à des conversations est une bonne contribution sous réserve que les commentaires soient pertinents.

En règle général&nbsp;:

- Utilisez [les discussions GitHub](https://github.com/mdn/mdn-community/discussions) avant de renseigner un ticket. Cela permet d'avoir des tickets qui vont à l'essentiel et qui permettent d'être productif.
- Posez vos questions à l'aide des autres canaux comme les canaux de discussion Matrix&nbsp;: [#mdn (en anglais)](https://chat.mozilla.org/#/room/#mdn:mozilla.org) et [#l10n-fr (en français)](https://matrix.to/#/#l10n-fr:mozilla.org) si vous avez un doute sur la pertinence du sujet ou une simple question.

Évitez&nbsp;:

- De complexifier les tickets en y abordant plusieurs sujets à la fois ou en ajoutant des commentaires hors-sujet.
- D'ouvrir plein de tickets avec des questions vagues.
- De poser des questions sans avoir essayé de résoudre le problème au préalable.

## Travailler sur un ticket

L'ensemble des dépôts possèdent un registre de tickets où vous pouvez des tâches auxquelles contribuer.

La plupart des dépôts utilisent une étiquette `help-wanted` ou `good-first-issue`. Ce n'est pas une condition nécessaire pour sélectionner une tâche, vous pouvez en choisir une qui correspond à votre domaine de compétences.

Une fois que vous avez identifié un ticket sur lequel vous aimeriez contribuer, assurez-vous que personne n'est déjà affecté à cette tâche, puis commentez en indiquant que vous vous portez volontaire pour aider.

Pour certains tickets, une analyse est nécessaire avant de pouvoir commencer&nbsp;: si vous avez des questions, vous pouvez les poser sur les canaux Matrix&nbsp;: [#mdn (en anglais)](https://chat.mozilla.org/#/room/#mdn:mozilla.org) et [#l10n-fr (en français)](https://matrix.to/#/#l10n-fr:mozilla.org).

Si vous êtes affecté⋅e à un ticket, veillez à y contribuer dans un temps raisonnable. Si vous n'avez plus le temps pour contribuer, ce n'est pas grave du tout, le plus important est de communiquer en l'indiquant par un commentaire.

Le processus habituel est le suivant&nbsp;:

1. Créez un <i lang="en">fork</i> du dépôt sur lequel vous souhaitez contribuer
2. Sur ce <i lang="en">fork</i> personnel, créez une nouvelle branche et effectuez-y votre contribution
3. Ouvrez une [<i lang="en">pull request</i>](/fr/docs/MDN/Community/Pull_requests) entre cette branche et le dépôt principal.

De temps à autre, vous pouvez rencontrer certains problèmes en utilisant MDN. Qu'il s'agisse d'un problème de contenu ou d'infrastructure, vous pouvez essayer de le réparer vous-même ou simplement rapporter le problème. Si la première approche est à privilégier, la seconde reste néanmoins une contribution importante.

La meilleure approche consiste à essayer de corriger les problèmes que vous détecter. Pour cela, vous pouvez contribuer à ces différents dépôts&nbsp;:

- Le contenu en anglais de MDN se trouve dans le dépôt [`content`](https://github.com/mdn/content).
- Le contenu traduit de MDN dans les différentes locales (dont le français) se trouve dans le dépôt [`translated-content`](https://github.com/mdn/translated-content).
- Le code de la plateforme, qui génère et affiche le contenu, se trouve dans le dépôt [`yari`](https://github.com/mdn/yari).

Chacun de ces dépôts contient des informations sur comment y contribuer.

Il se peut que vous n'ayez pas la solution au problème rapporté ou que vous n'ayez pas le temps ou les ressources pour proposer un correctif. Dans ce cas, n'hésitez pas à uniquement rapporter le problème de [documentation en anglais](https://github.com/mdn/content/issues), de [traduction](https://github.com/mdn/translated-content/issues), ou de [plateforme](https://github.com/mdn/yari/issues).

## Choisir un ticket GitHub sur lequel contribuer

1. Rédigez un commentaire indiquant que vous souhaitez contribuer et le ticket vous sera affecté.
   - Si quelqu'un est déjà affecté au ticket&nbsp;:
     1. Si cela date de plus d'une semaine et qu'il n'y a pas eu beaucoup d'activité, mentionnez leur nom avec `@` et demandez-leur si vous pouvez poursuivre à leur place ou les aider à progresser.
        - Si cette personne est d'accord, nous vous affecterons le ticket et retirerons la précédente personne.
        - Si cette personne est d'accord et qu'un travail a déjà été effectué ou qu'il s'agit d'aider, nous vous affecterons au ticket avec cette personne.

     2. Si cela date de moins d'une semaine, faites preuve de patience.

2. Si le ticket est indiqué comme terminé mais qu'une revue est nécessaire et que vous souhaitez réaliser cette revue, mentionnez leur nom avec `@` dans les commentaires et indiquez que vous souhaitez faire cette revue.

## Lorsqu'un ticket vous est affecté

1. Déterminez précisément ce qu'il reste à faire.
   - Si le ticket est plutôt bien décrit et rédigé, que le travail à accomplir est explicite, allez-y&nbsp;!
   - Si le ticket est flou ou ambigu et que vous avez un doute sur ce qu'il faut faire, n'hésitez pas à mentionner la rapporteuse ou le rapporteur pour demander plus de précisions.
   - Si vous avez un doute sur la personne à solliciter, demandez de l'aide sur [le canal Matrix #mdn (en anglais)](https://chat.mozilla.org/#/room/#mdn:mozilla.org) ou [#l10n-fr (en français)](https://matrix.to/#/#l10n-fr:mozilla.org).

2. Une fois que vous pensez avoir corrigé le problème, demandez une revue en commentaire.
3. Dès qu'un ticket a été revu et que les remarques ont été adressées, vous pouvez le marquer comme clôturé.
4. Si vous n'avez plus le temps de travailler sur un ticket, faites-nous le savoir dans un commentaire afin que nous puissions y affecter quelqu'un d'autre.
