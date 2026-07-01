---
title: Créer et travailler sur des problèmes
slug: MDN/Community/Issues
l10n:
  sourceCommit: 7e96b93b5b540a0cddb52fef9ae05c9db3410d73
---

En tant que contributeur·ice, vous pouvez [signaler](#directives_pour_signaler_un_problème) et [travailler](#directives_pour_travailler_sur_un_problème) sur des problèmes.
Après avoir signalé un problème, celui-ci est trié. Le [tri](#directives_pour_le_tri_des_problèmes) des problèmes est généralement effectué par des personnes assignées au rôle de mainteneur·euse ou de propriétaire.

## Directives générales de participation

Lors de la signalisation d'un problème ou de la participation à une conversation dans un problème, assurez-vous toujours que vos contributions font progresser le projet dans son ensemble. Réfléchissez à la manière dont les problèmes que vous ouvrez et vos commentaires dans un problème sont constructifs et pertinents, et ne se contentent pas d'ajouter du bruit.

Faites ce qui suit&nbsp;:

- Si vous avez une question, vous pouvez la poser dans les [salons de discussion MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion) au lieu de signaler un problème.
- S'il existe plusieurs façons de résoudre un problème, envisagez si vous devez [en discuter](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion) avec le personnel/la communauté.
  Utilisez les discussions pour obtenir différents points de vue et converger vers une action convenue. Cela aide à garder les problèmes ciblés et productifs.
- Après avoir signalé un problème, essayez de le résoudre vous-même. Il existe un guide sur la [soumission et les révisions de demandes de tirage](/fr/docs/MDN/Community/Pull_requests) qui couvre tout ce que vous devez savoir sur le processus de contribution.

Évitez de faire ce qui suit&nbsp;:

- Compliquer les problèmes en essayant de discuter de plusieurs sujets ou en faisant des commentaires hors sujet.
- Ouvrir de nombreux problèmes en posant des questions vagues.
- Poser des questions sans essayer de résoudre le problème vous-même d'abord.

Si vous souhaitez suggérer une nouvelle documentation ou des moyens d'améliorer le site Web, consultez [Proposer un nouveau contenu ou des fonctionnalités](/fr/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Directives pour signaler un problème

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) sont utilisées pour suivre les bogues. Un problème doit être une tâche unique et exploitable ou un ensemble de tâches connexes et doit avoir un résultat clair.

### Avant de signaler un problème

Tout d'abord, en fonction du type de problème que vous avez découvert, identifiez le [dépôt GitHub MDN approprié](/fr/docs/MDN/Community/Our_repositories) pour créer le problème afin que les bonnes personnes puissent le traiter. Ensuite, avant de créer un problème, vérifiez qu'il n'a pas déjà été signalé.

### Signalement d'un problème

Voici quelques conseils pour ouvrir des problèmes&nbsp;:

- Choisissez la catégorie appropriée pour signaler le problème. Par exemple, pour signaler un bogue de contenu, utilisez le modèle [Problème de contenu](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) dans le dépôt `mdn/content` concernant les pages en **anglais**, et [Problème de contenu traduit](https://github.com/mdn/translated-content/issues/new?template=page-report-fr.yml) pour le dépôt `mdn/translated-content` pour les pages en **français**.
- Fournissez des informations suffisantes lors du signalement du problème&nbsp;:
  - **Titre du problème** doit exprimer succinctement _l'action requise_.
  - **Description du problème** doit clairement décrire le bogue et, si possible, l'action requise pour résoudre le problème.

    Pour les problèmes complexes dont la résolution nécessite plusieurs étapes, décomposez le travail en tâches plus petites à l'aide d'une [liste de tâches](https://docs.github.com/fr/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists). Mettez à jour l'état d'une tâche dans la description du problème au lieu de commenter sur le problème. Cela aide les autres qui pourraient autrement avoir besoin de faire défiler les commentaires sur le problème pour déterminer l'état des différentes tâches. Les commentaires dans un problème doivent être limités aux détails ou au contexte qui aident à résoudre le problème.

- Si vous vous trouvez dans l'une des situations suivantes, déplacez la conversation vers [la discussion de MDN sur GitHub <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions)&nbsp;:
  - Vous n'êtes pas sûr que le problème soit valide ou quelle action est requise.
  - Le problème n'a pas de consensus clair sur sa résolution.
- Pour les bogues mineurs, vous pouvez [apporter les modifications vous-même](#corriger_les_problèmes_vous-même) et soumettre une demande de tirage.

Si les informations que vous fournissez dans le problème sont incomplètes, il se peut que l'on vous demande de fournir plus de détails lors du [processus de triage des problèmes](#vérifiez_le_problème_pour_lexhaustivité_des_informations) (surveillez le label `needs info`).

### Création d'une liste de tâches pour un problème

Si le problème que vous ouvrez n'est pas pour signaler un bogue mais pour effectuer une série de tâches, vous pouvez créer le problème en tant que [liste de tâches](https://docs.github.com/fr/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists).
Expliquez le contexte ou la raison d'effectuer les tâches dans la description.
Assurez-vous de lister toutes les tâches exploitables sous forme de liste de contrôle.

Par exemple&nbsp;:

```md
// Titre du problème
Assurez-vous que les sections suivent l'ordre défini dans le modèle de page de propriété CSS.

### Description

La page de modèle de propriété CSS est définie [ici](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template).
La liste des tâches dans ce problème est utilisée pour comparer les propriétés CSS documentées avec le modèle et suivre les modifications apportées aux pages de propriétés pour garantir leur conformité.

### Liste des pages vérifiées

- [x] [accent-color](/fr/docs/Web/CSS/accent-color) - vérifié, ok
- [ ] [backdrop-filter](/fr/docs/Web/CSS/backdrop-filter)
- [ ] [letter-spacing](/fr/docs/Web/CSS/letter-spacing) - demande de tirage ouverte pour déplacer les sections `Accessibilité` et `Internationalisation` avant la section `Spécifications`.
```

## Directives pour travailler sur un problème

N'oubliez pas que si vous prenez un problème en charge, l'attente est que le travail soit terminé dans un délai raisonnable.
Si vous ne parvenez pas à faire avancer le travail sur un ticket que vous avez pris en charge, veuillez ajouter un commentaire afin d'en informer les responsables et de permettre à un·e autre contributeur·ice de reprendre le ticket.

Voici les étapes générales pour travailler sur un problème&nbsp;:

1. **Trouvez un problème&nbsp;:** Si vous cherchez à contribuer, recherchez des problèmes avec les étiquettes [`good first issue`, `help wanted`](#définir_dautres_étiquettes). La plupart des dépôts ont des problèmes avec ces étiquettes. Vous êtes libre de parcourir et de choisir un problème qui convient à vos compétences.

   Un autre endroit utile pour chercher des problèmes à résoudre est le [Tableau de contribution du MDN Francophone](https://github.com/orgs/mdn/projects/44). Cette vue de projet répertorie les problèmes ouverts du dépôt des traductions françaises.

   > [!NOTE]
   > Un problème avec l'étiquette `needs triage` indique que l'équipe principale de MDN Web Docs n'a pas encore examiné le problème, et vous ne devez pas commencer à travailler dessus.

2. **Assignez le problème à vous-même&nbsp;:**

   Avant de commencer à travailler sur un problème, vérifiez d'abord que personne n'est assigné au problème (le champ _Assignees_ doit être «&nbsp;Unassigned&nbsp;»).

   Ensuite, vérifiez qu'il n'y a pas de [requêtes de tirage](/fr/docs/MDN/Community/Pull_requests) liées, car cela peut indiquer qu'un·e autre contributeur·ice a revendiqué le problème et a commencé à travailler dessus.

3. **Faites des recherches&nbsp;:**

   La plupart des problèmes nécessitent une certaine enquête avant que le travail puisse commencer.
   - Déterminez l'ampleur du travail à réaliser. Si vous avez besoin de poser des questions, posez-les dans les [salles de discussion de MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion).
   - Si le problème est bien décrit et que le travail est assez évident, allez-y et faites-le.
   - Si le problème n'est pas bien décrit et/ou si vous n'êtes pas sûr de ce qui est nécessaire, n'hésitez pas à @mentionner l'auteur·ice et à demander plus d'informations.

4. **Revendiquez le problème&nbsp;:**

   Vous pouvez «&nbsp;revendiquer&nbsp;» un problème non assigné et non revendiqué en suivant ces étapes&nbsp;:
   1. Dupliquez (_Fork_) le dépôt et créez votre branche de travail.
   2. Corrigez le problème, puis ouvrez une [requête de tirage (PR)](/fr/docs/MDN/Community/Pull_requests) dans le dépôt.
   3. Dans la description de la PR, incluez le texte `Fixes #<issue_number>` (si la PR ne corrige qu'une partie du problème, ajoutez le texte `Related to #<issue_number>`).

      L'ajout de ce texte crée une référence croisée entre le problème et la PR, et marque implicitement le problème comme revendiqué par vous.

      > [!NOTE]
      > Si vous avez les permissions nécessaires, vous devez également _assigner explicitement le problème à vous-même_([assigner un problème ou une PR à un·e utilisateur·ice GitHub](https://docs.github.com/fr/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request)).

   En fonction des fichiers que vous avez mis à jour dans la requête de tirage, un·e relecteur·ice est automatiquement assigné·e à votre requête de tirage. (Les équipes par domaine sont définies dans le fichier [CODEOWNERS <sup>(angl.)</sup>](https://github.com/mdn/translated-content/blob/main/.github/CODEOWNERS)).

   > [!WARNING]
   > Après avoir ouvert la requête de tirage, si vous constatez que vous n'avez plus le temps d'apporter des modifications ou d'intégrer les commentaires de révision, informez l'équipe dès que possible dans un commentaire de la requête de tirage.
   > Cela aide l'équipe à assigner un·e autre contributeur·ice intéressé·e pour terminer le travail sur la requête de tirage et fermer le problème lié.

5. **Fermer le problème comme terminé&nbsp;:**

   Si vous avez ouvert la requête de tirage avec le texte `Fixes #<issue>` dans la description, le problème est automatiquement fermé lorsque la PR est fusionnée. Sinon, vous pouvez ajouter un commentaire au problème en lien avec une ou plusieurs requêtes de tirage qui le corrigent, et un·e mainteneur·euse ferme le problème comme terminé.

### Corriger les problèmes vous-même

Si vous repérez un bogue — qu'il s'agisse d'un problème avec l'apparence du site Web ou d'une erreur dans la documentation — vous pouvez essayer de le corriger vous-même dans une [requête de tirage](/fr/docs/MDN/Community/Pull_requests).
Si le bogue est mineur (comme une faute de frappe ou une légère amélioration de phrase) ou nécessite une correction rapide, vous pouvez soumettre une requête de tirage avec les modifications appropriées.

Pour tout autre type de bogue, commencez par [ouvrir un problème](#directives_pour_signaler_un_problème).
Ajoutez un commentaire sur votre intention de travailler sur le problème et, si possible, décrivez votre solution proposée ou les étapes pour le corriger.

> [!NOTE]
> Votre temps et vos efforts pourraient être gaspillés si vous ouvrez une requête de tirage sans ouvrir d'abord un problème.
> Attendez que le problème soit trié, afin que l'équipe de MDN Web Docs puisse vérifier que le problème est légitime et approuver votre solution proposée.

Utilisez les [directives pour travailler sur un problème](#directives_pour_travailler_sur_un_problème), essayez de résoudre le problème en mettant à jour la source appropriée, telle que&nbsp;:

- Le **contenu** de MDN Web Docs (en anglais) dans le dépôt [mdn/content <sup>(angl.)</sup>](https://github.com/mdn/content)
- Le **contenu traduit** de MDN Web Docs dans le dépôt [mdn/translated-content <sup>(angl.)</sup>](https://github.com/mdn/translated-content)
- Le **frontend** de MDN Web Docs dans le dépôt [mdn/fred <sup>(angl.)</sup>](https://github.com/mdn/fred)

Chaque dépôt comprend des informations utiles pour vous guider sur la façon de contribuer.
Pour plus d'informations, consultez [nos principaux dépôts GitHub](/fr/docs/MDN/Community/Our_repositories).

## Directives pour le tri des problèmes

Si vous êtes un·e mainteneur·euse ou un·e propriétaire dans l'organisation GitHub de MDN Web Docs, vous êtes responsable du tri des problèmes dans un ou plusieurs dépôts de MDN Web Docs.

Le processus global de tri comprend certaines tâches [générales](#tâches_générales_de_tri) et certaines [tâches spécifiques aux problèmes](#tâches_spécifiques_aux_problèmes).

### Tâches générales de tri

- Lorsqu'un problème est ouvert, l'étiquette `needs triage` est automatiquement définie sur le problème. Vous pouvez rechercher cette étiquette pour trouver des problèmes qui [ont besoin d'être triés](#tâches_spécifiques_aux_problèmes). Les contributeur·ice·s ou toute autre personne ne doivent pas travailler sur le problème tant qu'il n'a pas été trié. (Les personnes en charge du tri doivent se souvenir de supprimer l'étiquette `needs triage` après avoir trié le problème.)

- Dans le [dépôt mdn/content <sup>(angl.)</sup>](https://github.com/mdn/content/issues), une étiquette `Content:` supplémentaire, telle que `Content:CSS` ou `Content:WebAPI`, est automatiquement définie sur le problème. C'est défini en fonction de l'URL MDN mentionnée dans le problème. Vous pouvez utiliser l'étiquette spécifique au contenu pour rechercher des problèmes à trier dans votre domaine de sujet spécifique.

- Si un problème concerne une locale active et non-en-US, définissez l'étiquette appropriée, telle que `l10n-fr`, `l10n-zh` ou `l10n-ja`. Les équipes pour ces locales prennent en charge ces problèmes et les trient.

- Vous n'avez pas besoin de trier activement les problèmes tout le temps. Réservez du temps, disons 30 minutes chaque semaine, pour trier les problèmes de manière régulière dans votre domaine de responsabilité. Le tri n'a pas besoin d'être fait dans le cadre d'une réunion synchrone ou même en même temps que tout le monde, mais il doit être fait régulièrement pour s'assurer que le backlog de bogues non triés ne devienne pas trop important.

- En plus de trier les problèmes entrants chaque semaine, passez en revue la liste des anciens bogues pour voir s'il y en a qui sont bloqués, qui doivent être fermés ou qui ne sont plus pertinents. L'étiquette `idle` (pour le dépôt anglais) est automatiquement définie sur les problèmes qui n'ont eu aucune activité pendant 30 jours.
  - Vérifiez les problèmes assignés qui sont toujours ouverts pour voir si l'assigné progresse. S'il n'y a pas de progrès après une semaine d'assignation, demandez-lui s'il·elle a encore le temps de travailler sur le problème. Si une autre semaine passe sans progrès, désaffectez-le et laissez un commentaire indiquant que vous rendez le problème disponible pour d'autres contributeur·ice·s intéressé·e·s.
  - Si une demande de tirage a été ouverte pour corriger le problème mais n'a pas été examinée pendant une semaine, envoyez un rappel au réviseur pour lui demander s'il·elle peut s'en occuper.
  - Si une demande de tirage pour corriger le problème attend des commentaires de révision à traiter après une semaine, demandez alors à l'auteur·ice s'il·elle peut répondre à sa révision. Si une autre semaine passe, soit corrigez vous-même les commentaires de révision si vous avez le temps, soit fermez la demande de tirage et désaffectez le problème connexe.

### Tâches spécifiques aux problèmes

Ce sont les directives à suivre lors du tri de chaque problème.

#### Vérifiez si le problème est valide

Voici quelques éléments à garder à l'esprit lors de l'examen de la validité d'un problème&nbsp;:

- Vérifiez si le problème soulevé est valide
- Évaluez si la solution améliore le contenu pour les lecteur·ice·s et le site Web.
- Évaluez si l'impact de la solution est mineur ou généralisé.
- Évaluez si la solution au problème nécessite d'abord une discussion, auquel cas, indiquez à l'auteur·ice d'ouvrir une [discussion <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions) à la place.
- Vérifiez si le problème est conforme à nos [directives de rédaction](/fr/docs/MDN/Writing_guidelines/Writing_style_guide) et [modèles](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types). Par exemple, vérifiez si les suggestions d'ajout de liens sont conformes à notre [politique de liens externes](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#liens_externes).
- Vérifiez si le problème est un doublon d'un problème existant. Si c'est le cas, vous pouvez [fermer le problème en tant que doublon](#fermer_un_problème_comme_doublon).

#### Vérifiez le problème pour l'exhaustivité des informations

Examinez chaque problème par rapport à la liste de contrôle suivante pour vous assurer que le problème contient les informations décrites pour que quelqu'un puisse commencer à travailler sur le bogue&nbsp;:

- URL de la page MDN Web Docs avec le problème ou URL d'une page d'exemple MDN Web Docs si le problème existe sur plusieurs pages
- Le titre ou la section spécifique de la page MDN Web Docs où le problème a été trouvé
- Une description claire de l'information incorrecte, inutile, incomplète ou manquante

Si l'une des informations ci-dessus n'est pas présente, vous devez demander à l'auteur·ice du problème de fournir ces détails et ajouter le label `needs info` au problème. Reprenez le tri du problème uniquement après que ces détails ont été fournis (après quoi, vous pouvez supprimer le label `needs info`). Il est acceptable d'attendre jusqu'à une semaine pour obtenir une réponse de l'auteur·ice.

#### Définir un label de priorité

> [!WARNING]
> Cette partie ne concerne que la communauté francophone, et peut ne pas être appliquée de la même manière dans les autres langues.
>
> Cela concerne des étiquetages gérés dans le [tableau de projet](https://github.com/orgs/mdn/projects/44/views/1) par l'équipe `@mdn/fr-content`.

Pour chaque bogue, nous définissons un niveau de priorité en fonction de la gravité du problème afin d'aider les personnes qui souhaitent travailler sur les problèmes ou domaines les plus importants.

- Problème critique&nbsp;: Ce type de problème doit être corrigé dès que possible, peu importe où il apparaît sur le site. Ce type de problème peut gravement nuire à la réputation de MDN et/ou nuire aux utilisateur·ice·s. Des exemples de ce problème incluent un extrait de code incorrect, qui, s'il est utilisé en production, peut créer un problème de sécurité grave et un contenu indésirable tel que des logiciels malveillants, de la pornographie, des discours haineux ou des liens vers ce type de contenu.
  - Étiquette&nbsp;: `P0 - Urgent` (est traité immédiatement)

- Problème majeur&nbsp;: Ce type de problème peut gravement affecter l'utilité d'une page. Par exemple, une quantité significative d'informations obsolètes, un exemple de code complexe et important qui ne fonctionne pas, une quantité significative de prose mal écrite et difficile à comprendre, ou un grand nombre de liens brisés.
  - Étiquettes&nbsp;: `P1 - High` (est bientôt traité) et `P2 - Medium` (est bientôt traité, mais les éléments de priorité supérieure sont traités en premier)

- Problème mineur&nbsp;: Il s'agit d'un type de problème d'amélioration qui peut améliorer le contenu existant mais n'affecte pas l'apprentissage ou n'a qu'un effet mineur sur l'apprentissage. Étant donné que ces types de problèmes ne sont pas activement planifiés, l'aide des contributeur·ice·s pour résoudre ces problèmes est la bienvenue et très appréciée. La résolution de certains de ces problèmes peut également fournir la pratique nécessaire aux contributeur·ice·s débutant·e·s qui commencent à se familiariser avec le processus de contribution. Des exemples incluent des fautes de frappe, une mauvaise grammaire, un lien brisé, une petite quantité d'informations obsolètes ou une prose mal écrite, ou un extrait de code qui ne fonctionne pas.
  - Étiquette&nbsp;: `P3 - Low` (aucune visibilité sur le moment de quand le problème est résolu). Si non défini, `P3` est le niveau de priorité par défaut.

En général, les problèmes critiques doivent être corrigés immédiatement et sont le plus souvent traités par le personnel et les pairs de MDN Web Docs.

#### Ajouter des informations utiles

Si possible, ajoutez des informations qui peuvent aider les contributeur·ice·s à résoudre le problème. Les informations peuvent prendre la forme d'étapes, d'approches générales, de liens vers d'autres problèmes similaires résolus ou de ressources de lecture. Un plan ou des étapes bien définis sont particulièrement nécessaires dans les problèmes étiquetés `good first issue` et peuvent aider à intégrer rapidement de nouveaux·elles contributeur·ice·s. Vous pouvez limiter cette tâche à 5-10 minutes.

Par exemple, au tri, vous pouvez ajouter les informations suivantes au problème que vous traitez&nbsp;:

```md
À celui ou celle qui résous ce problème, il semble que les mesures suivantes soient nécessaires&nbsp;:

- Mettre à jour le premier paragraphe sous la rubrique X pour corriger le problème avec Y
- Ajouter une description de X
- Mettre à jour les données de compatibilité à l'adresse Link-X
```

#### Appliquer les étiquettes de type, d'objectif et d'effort

> [!NOTE]
> Ne s'applique qu'au dépôt anglais.

Ensuite, définissez les étiquettes suivantes lorsque c'est possible&nbsp;:

- Une étiquette pour indiquer le "type de problème" à résoudre, si applicable&nbsp;:
  - `broken link external`&nbsp;: Le problème signale un lien brisé vers une page externe.
  - `document not written`&nbsp;: Le problème signale un document nécessaire qui n'a pas encore été rédigé, généralement parce qu'un lien y pointe. Notez que nous avons un projet [Web Docs Backlog <sup>(angl.)</sup>](https://openwebdocs.github.io/web-docs-backlog/all/) qui suit déjà de nombreuses pages de référence non rédigées, donc si le problème concerne l'une de celles-ci, vous pouvez [fermer le problème](#closing_an_issue_as_a_duplicate) avec `closed: duplicate` et pointer vers le backlog.
  - `screenshot`&nbsp;: Le problème signale une capture d'écran manquante ou obsolète.
  - `baseline`&nbsp;: Le problème signale une bannière [baseline](/fr/docs/Glossary/Baseline/Compatibility) incorrecte. Notez que les données affichées dans la bannière baseline ne proviennent pas du dépôt `mdn/content`&nbsp;; elles sont déterminées par une combinaison d'entrées provenant de [données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), [code front-end <sup>(angl.)</sup>](https://github.com/mdn/fred) et [web-platform-dx/web-features <sup>(angl.)</sup>](https://github.com/web-platform-dx/web-features). Vous devez presque toujours soit fermer le problème pour indiquer qu'il fonctionne comme prévu, soit le transférer vers le dépôt approprié.

- Une étiquette "«&nbsp;objectif&nbsp;» pour indiquer ce que la correction tente d'accomplir&nbsp;:
  - `goal: accuracy`&nbsp;: Le problème signale des informations incorrectes ou inexactes. Si le contenu était exact au moment de la rédaction, utilisez plutôt `goal: up-to-date`.
  - `goal: clarity`&nbsp;: Le problème signale des informations trompeuses ou peu claires (mais techniquement correctes).
  - `goal: completeness`&nbsp;: Le problème signale des informations manquantes, généralement des mises en garde ou des explications importantes.
  - `goal: consistency`&nbsp;: Le problème signale des informations incohérentes. Utilisez cette étiquette uniquement pour la cohérence éditoriale, comme les exemples de code et leurs descriptions&nbsp;; si au moins un endroit est techniquement incorrect, utilisez plutôt l'étiquette `goal: accuracy`.
  - `goal: up-to-date`&nbsp;: Le problème signale des informations obsolètes, généralement en raison de changements dans la plateforme web.
  - `goal: best practices`&nbsp;: Le problème signale des modèles utilisés dans les exemples de code ou le contenu.
  - `goal: discoverability`&nbsp;: Le problème signale des liens manquants vers du contenu connexe ou des mots-clés manquants qui aideraient les moteurs de recherche à trouver la page.

- Une étiquette «&nbsp;effort&nbsp;» pour aider les contributeur·ice·s à trouver des problèmes correspondant au temps et à l'effort qu'ils peuvent consacrer. Utilisez votre meilleure estimation pour appliquer l'étiquette appropriée, car l'effort réel dépend finalement des compétences et de l'expérience du·de la contributeur·ice. En réalité, l'effort fourni peut être plus important que la quantité de travail livrée (par exemple, le travail nécessite des recherches préalables importantes) ou inversement (par exemple, il ne s'agit que d'un seul changement qui affecte de nombreuses pages).
  - `effort: small`&nbsp;: La correction est probablement inférieure à 50 lignes (correspondant à une PR de taille `xs` ou `s`).
  - `effort: medium`&nbsp;: La correction est probablement comprise entre 50 et 1000 lignes (correspondant à une PR de taille `m` ou `l`).
  - `effort: large`&nbsp;: La correction est probablement supérieure à 1000 lignes (correspondant à une PR de taille `xl`).

- Une étiquette «&nbsp;acceptation de contribution&nbsp;» pour indiquer que nous invitons la communauté à soumettre des PR&nbsp;:
  - `good first issue`&nbsp;: Ajoutez cette étiquette si la correction du problème est vraiment simple et constitue une bonne pratique pour un·e débutant·e qui se familiarise avec le processus de contribution. Appliquez cette étiquette uniquement si _tous_ les points suivants sont vrais&nbsp;:
    - Il y a des instructions, soit de l'auteur·ice, soit du·de la triager·ice, sur ce qui doit être écrit _exactement_ (de préférence du texte littéral ou un guide étape par étape).
    - La correction cible une seule page (afin que le·la contributeur·ice puisse facilement la corriger par l'interface web).
    - La correction n'implique pas la rédaction de contenu ou de code significatif, ce qui peut nécessiter une compréhension technique plus approfondie.
  - `help wanted`&nbsp;: Ajoutez cette étiquette si le problème nécessite l'aide de quelqu'un qui connaît ou est familier·ère avec le sujet. C'est une étiquette populaire, et certain·e·s contributeur·ice·s l'utilisent pour rechercher des problèmes sur lesquels travailler dans des projets open source dans leurs domaines de compétence ou d'expertise.
  - `accepting PR`&nbsp;: Ajoutez cette étiquette neutre si le problème n'est pas aussi simple qu'un `good first issue`, mais pas assez complexe ou spécifique pour nécessiter une étiquette `help wanted`.

  Si un problème n'a aucune de ces étiquettes, cela indique généralement que les contributions de la communauté ne sont pas encouragées pour ce problème. Cela peut être le cas lorsque des discussions supplémentaires sont nécessaires, que le travail nécessite quelqu'un de familier·ère avec les conventions éditoriales de MDN pour le prendre en charge, ou qu'un·e membre de l'équipe a l'intention de travailler dessus. Les contributeur·ice·s peuvent toujours travailler sur ces problèmes s'ils sont suffisamment familiers avec le processus.

- État du problème&nbsp;: Si un problème n'a pas d'étiquette indiquant que nous acceptons des PR ou que le travail est en cours, ajoutez l'une des étiquettes suivantes pour indiquer ce qui le bloque&nbsp;:
  - `needs BCD update`&nbsp;: Ajoutez cette étiquette si le problème concerne la documentation de nouvelles fonctionnalités ou comportements qui nécessiteraient d'abord des données sur leur mise en œuvre.
  - `needs content update`&nbsp;: Ajoutez cette étiquette si la correction du problème dans un autre dépôt nécessite une correction équivalente dans le dépôt `mdn/content`.
  - `needs decision`&nbsp;: Ajoutez cette étiquette si le problème nécessite un consensus de l'équipe sur l'approche à adopter. Le consensus peut être atteint avec une discussion ou une réunion interne synchrone.
  - `needs example update`&nbsp;: Ajoutez cette étiquette si le problème implique la synchronisation des exemples de code dans un autre dépôt. Si le dépôt est externe, il doit probablement être converti en un [exemple en direct](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples) interne ou transféré sous MDN en premier.
  - `needs info`&nbsp;: Comme mentionné ci-dessus, ajoutez cette étiquette si des informations sont demandées, soit à l'auteur·ice du problème, soit à l'auteur·ice du contenu en question, soit à quelqu'un d'autre, afin de pouvoir avancer sur le problème.
  - `on hold`&nbsp;: Une étiquette générique pour indiquer que le problème ne doit pas encore être traité.
  - `waiting for implementations`&nbsp;: Ajoutez cette étiquette si le problème concerne une fonctionnalité qui n'est pas encore implémentée dans les navigateurs et qui ne répond donc pas à nos [critères de documentation](/fr/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

Une fois que vous avez analysé et validé le problème, et que vous avez appliqué les étiquettes appropriées (type, objectif, charge de travail, ouvert à la communauté), le processus de triage est terminé et vous pouvez supprimer l'étiquette `needs triage`.

### Fermer un problème comme non prévu

Si un problème ne correspond à aucune tâche actionable, vous devez envisager de le fermer comme non prévu. Cliquez sur le menu déroulant à côté du bouton **Fermer le problème**, et sélectionnez **Fermer comme non prévu**. Publiez un commentaire expliquant la raison de la fermeture du problème. Ajoutez également l'une des étiquettes suivantes&nbsp;:

- `closed: browser bug`&nbsp;: Le problème signale un comportement inattendu dans le code du rapporteur ou dans le code de MDN, mais la cause est un bogue du navigateur. Le problème n'est également pas suffisamment significatif pour justifier une note BCD.
- `closed: question`&nbsp;: Le problème est basé sur une erreur ou une incompréhension du rapporteur, et le contenu est déjà correct et clair. Cependant, vous devez toujours reconnaître le rapport et envisager si le contenu peut être clarifié davantage pour éviter des questions similaires à l'avenir.
- `closed: wontfix`&nbsp;: Le problème signale un problème valide, mais MDN décide de ne pas le corriger. Les raisons courantes incluent le fait que le travail est hors de portée, que l'effort requis l'emporte sur le bénéfice, ou que le contenu et le code fonctionnent comme prévu.

### Fermer un problème comme doublon

Lorsqu'un problème signale un problème déjà suivi ailleurs, vous pouvez fermer le problème. Ils n'ont pas besoin d'être des doublons exacts&nbsp;; si le problème est suffisamment similaire à un problème existant, ils peuvent être fusionnés en un seul problème qui est corrigé ensemble.

S'il existe un problème GitHub qui suit le même problème, cliquez sur le menu déroulant à côté du bouton **Fermer le problème**, sélectionnez **Fermer comme doublon**, et collez l'URL de l'autre problème. Si la duplication est évidente, aucun commentaire n'est nécessaire&nbsp;; sinon, publiez un commentaire expliquant pourquoi les problèmes sont des doublons.

Si le problème est suivi mais pas avec un problème GitHub (comme [le dossier d'attente des web docs <sup>(angl.)</sup>](https://openwebdocs.github.io/web-docs-backlog/all/)), vous pouvez [fermer le problème comme non prévu](#fermer_un_problème_comme_non_prévu), publier un commentaire et ajouter l'étiquette `closed: duplicate`. Cette étiquette est optionnelle pour les problèmes fermés avec l'option **Fermer comme doublon**, mais elle aide à rechercher des problèmes en double plus tard.
