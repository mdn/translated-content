---
title: Créer et travailler sur des problèmes
slug: MDN/Community/Issues
l10n:
  sourceCommit: a2b29d9159294f1437e0adf49cdf3019e9c1c24b
---

En tant que contributeur, vous pouvez [signaler](#directives_pour_signaler_un_problème) et [travailler](#directives_pour_travailler_sur_un_problème) sur des problèmes.
Après avoir signalé un problème, celui-ci est trié. Le [tri](#directives_pour_le_tri_des_problèmes) des problèmes est généralement effectué par des personnes assignées au rôle de mainteneur ou de propriétaire.

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

Si vous pensez avoir trouvé un bogue dans le contenu de MDN Web Docs ou dans l'apparence et la convivialité du site Web, recherchez les problèmes ouverts actuels dans le [dépôt pertinent](/fr/docs/MDN/Community/Our_repositories) et assurez-vous que personne d'autre n'a signalé le problème.

### Signalement d'un problème

En fonction du type de problème que vous avez découvert, vous pouvez le signaler en ouvrant un problème sur l'un des principaux [dépôts GitHub de MDN](/fr/docs/MDN/Community/Our_repositories).
Si les informations que vous fournissez dans le problème sont incomplètes, il se peut que l'on vous demande de fournir plus de détails lors du [processus de tri des problèmes](#vérifiez_le_problème_pour_lexhaustivité_des_informations).

Voici quelques conseils pour ouvrir des problèmes&nbsp;:

- Choisissez la catégorie appropriée pour signaler le problème. Par exemple, pour signaler un bogue de contenu, utilisez le modèle [Problème de contenu](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) dans le dépôt `mdn/content` concernant les pages en **anglais**, et [Problème de contenu traduit](https://github.com/mdn/translated-content/issues/new?template=page-report-fr.yml) pour le dépôt `mdn/translated-content` pour les pages en **français**.
- Fournissez des informations suffisantes lors du signalement du problème&nbsp;:
  - **Titre du problème** doit exprimer succinctement l'_action requise_.
  - **Description du problème** doit clairement décrire le bogue et l'action requise pour résoudre le problème. Elle doit également énumérer les tâches ou sous-tâches à accomplir pour résoudre le problème. D'autres directives incluent&nbsp;:
    - Utilisez le champ de description pour indiquer l'état de la tâche ou des sous-tâches en utilisant des listes de contrôle.
    - Mettez à jour l'état d'une tâche dans la description du problème au lieu de commenter sur le problème. Utilisez des [listes de tâches](https://docs.github.com/fr/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) dans la description si un problème a plusieurs parties. Cela aide les autres qui pourraient autrement avoir besoin de faire défiler les commentaires sur le problème pour déterminer l'état des différentes tâches.
    - Les commentaires dans un problème doivent être limités aux détails ou au contexte qui aident à résoudre le problème.
- Si vous vous trouvez dans l'une des situations suivantes, déplacez la conversation vers [la discussion de MDN sur GitHub <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions)&nbsp;:
  - Une discussion doit avoir lieu pour clarifier un problème.
  - Une discussion commence après l'ouverture du problème.
  - Le problème n'a pas de consensus clair sur sa résolution.
  - Les exigences pour terminer la tâche s'élargissent pendant sa résolution ou le travail n'est pas clair.
- Pour les bogues mineurs, vous pouvez [apporter les modifications vous-même](#corriger_les_problèmes_vous-même) et soumettre une demande de tirage.

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
La liste des tâches dans ce problème sera utilisée pour comparer les propriétés CSS documentées avec le modèle et suivre les modifications apportées aux pages de propriétés pour garantir leur conformité.

### Liste des pages vérifiées

- [x] [accent-color](/fr/docs/Web/CSS/accent-color) - vérifié, ok
- [ ] [backdrop-filter](/fr/docs/Web/CSS/backdrop-filter)
- [ ] [letter-spacing](/fr/docs/Web/CSS/letter-spacing) - demande de tirage ouverte pour déplacer les sections `Accessibilité` et `Internationalisation` avant la section `Spécifications`.
```

## Directives pour travailler sur un problème

N'oubliez pas que si vous prenez un problème en charge, l'attente est que le travail soit terminé dans un délai raisonnable. Si vous n'êtes pas en mesure de progresser pendant une semaine après avoir été assigné ou si vous ne pouvez plus terminer la tâche requise, laissez un commentaire et désignez-vous comme non assigné au problème.

Voici les étapes générales pour travailler sur un problème :

1. **Trouvez un problème&nbsp;:** Si vous cherchez à contribuer, recherchez des problèmes avec les étiquettes [`good first issue`, `help wanted`](#définir_dautres_étiquettes). La plupart des dépôts ont des problèmes avec ces étiquettes. Vous êtes libre de parcourir et de choisir un problème qui convient à vos compétences. Un autre endroit utile pour chercher des problèmes à résoudre est le [Tableau de contribution du MDN Francophone](https://github.com/orgs/mdn/projects/44). Cette vue de projet répertorie les problèmes ouverts du dépôt des traductions françaises.

   > [!NOTE]
   > Un problème avec l'étiquette `needs triage` indique que l'équipe principale de MDN Web Docs n'a pas encore examiné le problème, et vous ne devriez pas commencer à travailler dessus.

2. **Assignez le problème à vous-même&nbsp;:** Après avoir trouvé un problème sur lequel vous souhaitez travailler, assurez-vous que le problème n'est assigné à personne d'autre. Ajoutez un commentaire disant que vous aimeriez travailler sur le problème, et si vous en êtes capable, [assignez le problème à vous-même](https://docs.github.com/fr/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Faites des recherches&nbsp;:** La plupart des problèmes nécessitent une certaine enquête avant que le travail puisse commencer.
   - Déterminez l'ampleur du travail à réaliser. Si vous avez besoin de poser des questions, posez-les dans les [salles de discussion de MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion).
   - Si le problème est bien décrit et que le travail est assez évident, allez-y et faites-le.
   - Si le problème n'est pas bien décrit et/ou si vous n'êtes pas sûr de ce qui est nécessaire, n'hésitez pas à @mentionner l'auteur et à demander plus d'informations.

4. **Apportez les modifications&nbsp;:** Dupliquez (_Fork_) le dépôt et créez une branche. Faites votre travail et ouvrez une [requête de tirage](/fr/docs/MDN/Community/Pull_requests) dans le dépôt. [Faites référence au problème](https://docs.github.com/fr/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) dans la description de la requête de tirage. En fonction des fichiers que vous avez mis à jour dans la requête de tirage, un réviseur sera automatiquement assigné à votre requête de tirage. (Les équipes par domaine thématique sont définies dans le fichier [CODEOWNERS](https://github.com/mdn/translated-content/blob/main/.github/CODEOWNERS)).

   Après avoir ouvert la requête de tirage, si vous constatez que vous n'avez plus le temps d'apporter des modifications ou d'incorporer les commentaires de révision, faites-le savoir à l'équipe dès que possible dans un commentaire de la requête de tirage. Cela aidera l'équipe à assigner un autre contributeur intéressé pour terminer le travail sur la requête de tirage et fermer le problème lié.

5. Après que votre requête de tirage a été examinée et fusionnée, vous pouvez marquer le problème lié comme fermé. Si vous avez ouvert la requête de tirage avec le texte `Fixes #<issue>`, le problème sera automatiquement fermé lorsque la requête de tirage sera fusionnée.

### Corriger les problèmes vous-même

Si vous repérez un bogue — qu'il s'agisse d'un problème avec l'apparence du site Web ou d'une erreur dans la documentation — vous pouvez essayer de le corriger vous-même dans une [requête de tirage](/fr/docs/MDN/Community/Pull_requests).
Si le bogue est mineur (comme une faute de frappe ou une légère amélioration de phrase) ou nécessite une correction rapide, vous pouvez soumettre une requête de tirage avec les modifications appropriées.

Pour tout autre type de bogue, commencez par [ouvrir un problème](#directives_pour_signaler_un_problème).
Ajoutez un commentaire sur votre intention de travailler sur le problème et, si possible, décrivez votre solution proposée ou les étapes pour le corriger.

> [!NOTE]
> Votre temps et vos efforts pourraient être gaspillés si vous ouvrez une requête de tirage sans ouvrir d'abord un problème.
> Attendez que le problème soit trié, afin que l'équipe de MDN Web Docs puisse vérifier que le problème est légitime et approuver votre solution proposée.

Utilisez les [directives pour travailler sur un problème](#directives_pour_travailler_sur_un_problème), essayez de résoudre le problème en mettant à jour la source appropriée, telle que&nbsp;:

- Le **contenu** de MDN Web Docs (en anglais) dans le dépôt [mdn/content](https://github.com/mdn/content)
- Le **contenu traduit** de MDN Web Docs dans le dépôt [mdn/translated-content](https://github.com/mdn/translated-content)
- Le **frontend** de MDN Web Docs dans le dépôt [mdn/fred](https://github.com/mdn/fred)

Chaque dépôt comprend des informations utiles pour vous guider sur la façon de contribuer.
Pour plus d'informations, consultez [nos principaux dépôts GitHub](/fr/docs/MDN/Community/Our_repositories).

## Directives pour le tri des problèmes

Si vous êtes un mainteneur ou un propriétaire dans l'organisation GitHub de MDN Web Docs, vous êtes responsable du tri des problèmes dans un ou plusieurs dépôts de MDN Web Docs.

Le processus global de tri comprend certaines tâches [générales](#tâches_générales_de_tri) et certaines [tâches spécifiques aux problèmes](#tâches_spécifiques_aux_problèmes).

### Tâches générales de tri

- Lorsqu'un problème est ouvert, l'étiquette `needs triage` est automatiquement définie sur le problème. Vous pouvez rechercher cette étiquette pour trouver des problèmes qui [ont besoin d'être triés](#tâches_spécifiques_aux_problèmes). Les contributeurs ou toute autre personne ne doivent pas travailler sur le problème tant qu'il n'a pas été trié. (Les personnes en charge du tri doivent se souvenir de supprimer l'étiquette `needs triage` après avoir trié le problème.)

- Dans le [dépôt mdn/content](https://github.com/mdn/content/issues), une étiquette `Content:` supplémentaire, telle que `Content:CSS` ou `Content:WebAPI`, est automatiquement définie sur le problème. Cela est défini en fonction de l'URL MDN mentionnée dans le problème. Vous pouvez utiliser l'étiquette spécifique au contenu pour rechercher des problèmes à trier dans votre domaine de sujet spécifique.

- Si un problème concerne une locale active et non-en-US, définissez l'étiquette appropriée, telle que `l10n-fr`, `l10n-zh` ou `l10n-ja`. Les équipes pour ces locales prendront en charge ces problèmes et les trieront.

- Vous n'avez pas besoin de trier activement les problèmes tout le temps. Réservez du temps, disons 30 minutes chaque semaine, pour trier les problèmes de manière régulière dans votre domaine de responsabilité. Le tri n'a pas besoin d'être fait dans le cadre d'une réunion synchrone ou même en même temps que tout le monde, mais il doit être fait régulièrement pour s'assurer que le backlog de bogues non triés ne devienne pas trop important.

- En plus de trier les problèmes entrants chaque semaine, passez en revue la liste des anciens bogues pour voir s'il y en a qui sont bloqués, qui doivent être fermés ou qui ne sont plus pertinents. L'étiquette `idle` (pour le dépôt anglais) est automatiquement définie sur les problèmes qui n'ont eu aucune activité pendant 30 jours.
  - Vérifiez les problèmes assignés qui sont toujours ouverts pour voir si l'assigné progresse. S'il n'y a pas de progrès après une semaine d'assignation, demandez-lui s'il a encore le temps de travailler sur le problème. Si une autre semaine passe sans progrès, désaffectez-le et laissez un commentaire indiquant que vous rendez le problème disponible pour d'autres contributeurs intéressés.
  - Si une demande de tirage a été ouverte pour corriger le problème mais n'a pas été examinée pendant une semaine, envoyez un rappel au réviseur pour lui demander s'il peut s'en occuper.
  - Si une demande de tirage pour corriger le problème attend des commentaires de révision à traiter après une semaine, demandez alors à l'auteur s'il peut répondre à sa révision. Si une autre semaine passe, soit corrigez vous-même les commentaires de révision si vous avez le temps, soit fermez la demande de tirage et désaffectez le problème connexe.

### Tâches spécifiques aux problèmes

Ce sont les directives à suivre lors du tri de chaque problème.

#### Vérifiez si le problème est valide

Voici quelques éléments à garder à l'esprit lors de l'examen de la validité d'un problème :

- Vérifiez si le problème soulevé est valide et si la solution améliorera le contenu pour les lecteurs et le site Web.
- Évaluez si l'impact de la solution sera mineur ou généralisé.
- Évaluez si la solution au problème nécessitera d'abord une discussion, auquel cas, indiquez à l'auteur d'ouvrir une [discussion <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions) à la place.
- Vérifiez si le problème est conforme à nos [directives de rédaction](/fr/docs/MDN/Writing_guidelines/Writing_style_guide) et [modèles](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types).
- Vérifiez si les suggestions d'ajout de liens sont conformes à notre [politique de liens externes](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#liens_externes).

#### Vérifiez le problème pour l'exhaustivité des informations

Examinez chaque problème par rapport à la liste de contrôle suivante pour vous assurer que le problème contient les informations décrites pour que quelqu'un puisse commencer à travailler sur le bogue :

- URL de la page MDN Web Docs avec le problème ou URL d'une page d'exemple MDN Web Docs si le problème existe sur plusieurs pages
- Le titre ou la section spécifique de la page MDN Web Docs où le problème a été trouvé
- Une description claire de l'information incorrecte, inutile, incomplète ou manquante

Si l'une des informations ci-dessus n'est pas présente, vous devez demander à l'auteur du problème de fournir ces détails et ajouter le label `needs info` au problème. Reprenez le tri du problème uniquement après que ces détails ont été fournis (après quoi, vous pouvez supprimer le label `needs info`). Il est acceptable d'attendre jusqu'à une semaine pour obtenir une réponse de l'auteur.

#### Définir un label de priorité

> [!WARNING]
> Cette partie ne concerne que la communauté francophone, et peut ne pas être appliquée de la même manière dans les autres langues.
>
> Cela concerne des étiquetages gérés dans le [tableau de projet](https://github.com/orgs/mdn/projects/44/views/1) par l'équipe `@mdn/fr-content`.

Pour chaque bogue, nous définissons un niveau de priorité en fonction de la gravité du problème afin d'aider les personnes qui souhaitent travailler sur les problèmes ou domaines les plus importants.

- Problème critique&nbsp;: Ce type de problème doit être corrigé dès que possible, peu importe où il apparaît sur le site. Ce type de problème pourrait gravement nuire à la réputation de MDN et/ou nuire aux utilisateurs. Des exemples de ce problème incluent un extrait de code incorrect, qui, s'il est utilisé en production, pourrait créer un problème de sécurité grave et un contenu indésirable tel que des logiciels malveillants, de la pornographie, des discours haineux ou des liens vers ce type de contenu.
  - Étiquette&nbsp;: `P0 - Urgent` (sera traité immédiatement)

- Problème majeur&nbsp;: Ce type de problème pourrait gravement affecter l'utilité d'une page. Par exemple, une quantité significative d'informations obsolètes, un exemple de code complexe et important qui ne fonctionne pas, une quantité significative de prose mal écrite et difficile à comprendre, ou un grand nombre de liens brisés.
  - Étiquettes&nbsp;: `P1 - High` (sera traité bientôt) et `P2 - Medium` (sera traité bientôt, mais les éléments de priorité supérieure seront traités en premier)

- Problème mineur&nbsp;: Il s'agit d'un type de problème d'amélioration qui peut améliorer le contenu existant mais n'affecte pas l'apprentissage ou n'a qu'un effet mineur sur l'apprentissage. Étant donné que ces types de problèmes ne sont pas activement planifiés, l'aide des contributeurs pour résoudre ces problèmes est la bienvenue et très appréciée. La résolution de certains de ces problèmes peut également fournir la pratique nécessaire aux contributeurs débutants qui commencent à se familiariser avec le processus de contribution. Des exemples incluent des fautes de frappe, une mauvaise grammaire, un lien brisé, une petite quantité d'informations obsolètes ou une prose mal écrite, ou un extrait de code qui ne fonctionne pas.
  - Étiquette&nbsp;: `P3 - Low` (aucune visibilité sur le moment de quand le problème sera résolu)

En général, les problèmes critiques doivent être corrigés immédiatement et sont le plus souvent traités par le personnel et les pairs de MDN Web Docs.

#### Ajouter des informations utiles

Si possible, ajoutez des informations qui peuvent aider les contributeurs à résoudre le problème. Les informations peuvent prendre la forme d'étapes, d'approches générales, de liens vers d'autres problèmes similaires résolus ou de ressources de lecture. Un plan ou des étapes bien définis sont particulièrement nécessaires dans les problèmes étiquetés `good first issue` et peuvent aider à intégrer rapidement de nouveaux contributeurs. Vous pouvez limiter cette tâche à 5-10 minutes.

Par exemple, au tri, vous pouvez ajouter les informations suivantes au problème que vous traitez&nbsp;:

```md
À celui qui résoudra ce problème, il semble que les mesures suivantes soient nécessaires :

- Mettre à jour le premier paragraphe sous la rubrique X pour corriger le problème avec Y
- Ajouter une description de X
- Mettre à jour les données de compatibilité à l'adresse Link-X
```

#### Définir d'autres étiquettes

Ensuite, définissez les étiquettes suivantes selon le cas&nbsp;:

- `good first issue`&nbsp;: Ajoutez cette étiquette au problème si la correction du problème est vraiment simple et si la résolution du problème offrirait une bonne pratique à un nouvel arrivant qui s'habitue au processus.
- `help wanted`&nbsp;: Ajoutez cette étiquette si le problème nécessite de l'aide de quelqu'un qui connaît ou est familier avec le sujet. C'est une étiquette populaire et certains contributeurs l'utilisent pour rechercher des problèmes à résoudre dans des projets open source dans leurs domaines de familiarité ou d'expertise.
- `needs content update`&nbsp;: Ajoutez cette étiquette si la correction du problème dans un autre dépôt nécessitera une correction équivalente dans le dépôt `mdn/content`.

  > [!NOTE]
  > Après le processus de tri, supprimez l'étiquette `needs triage`.
