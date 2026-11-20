---
title: "Défi : Problèmes d'accessibilité"
short-title: "Défi : Débogage a11é"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

Dans le défi de ce module, nous vous présentons un site simple comportant plusieurs problèmes d'accessibilité que vous devez diagnostiquer et corriger.

## Point de départ

Pour commencer ce défi, vous devez aller chercher le [ZIP contenant les fichiers qui composent l'exemple <sup>(angl.)</sup>](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip). Décompressez le contenu dans un nouveau répertoire quelque part sur votre ordinateur local.

D'une autre manière, vous pouvez utiliser un éditeur en ligne tel que [CodePen <sup>(angl.)</sup>](https://codepen.io/) ou [JSFiddle <sup>(angl.)</sup>](https://jsfiddle.net/).

> [!NOTE]
> Si vous êtes bloqué, vous pouvez nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Résumé du projet

Pour ce projet, vous êtes présenté avec un site naturel fictif affichant un article «&nbsp;factuel&nbsp;» sur les ours. Dans l'état actuel des choses, plusieurs problèmes d'accessibilité se posent — votre tâche consiste à explorer le site existant et à le réparer au mieux de vos capacités, en répondant aux questions ci-dessous.

### Couleur

Le texte est difficile à lire en raison du schéma de couleurs actuel. Pouvez-vous tester le contraste de couleurs actuel (texte / arrière-plan), en rapporter les résultats, puis le corriger en modifiant les couleurs attribuées?

### HTML sémantique

1. Le contenu n'est toujours pas très accessible — faites un rapport sur ce qui se passe lorsque vous essayez de naviguer à l'aide d'un lecteur d'écran.
2. Pouvez-vous mettre à jour le texte de l'article pour faciliter la navigation des utilisateur·ice·s de lecteurs d'écran?
3. La partie du menu de navigation du site (enveloppée dans `<div class="nav"></div>`) peut être rendue plus accessible en la plaçant dans un élément sémantique HTML approprié. Lequel doit-il être mis à jour? Faites la mise à jour.

> [!NOTE]
> Vous devez mettre à jour les sélecteurs de règles CSS qui stylisent les balises pour leurs équivalents appropriés pour les titres sémantiques. Une fois que vous ajoutez des éléments de paragraphe, vous remarquez que le style s'améliore.

### Les images

Les images sont actuellement inaccessibles aux utilisateur·ice·s de lecteur d'écran. Pouvez-vous réparer ceci&nbsp;?

### Le lecteur audio

1. Le lecteur `<audio>` n'est pas accessible aux personnes malentendantes (sourdes) — pouvez-vous ajouter une alternative accessible pour ces utilisateur·ice·s&nbsp;?
2. Le lecteur `<audio>` n'est pas accessible aux personnes utilisant d'anciens navigateurs qui ne prennent pas en charge l'audio HTML. Comment pouvez-vous leur permettre d'accéder tout de même à l'audio&nbsp;?

### Les formulaires

1. L'élément `<input>` dans le formulaire de recherche en haut peut bénéficier d'un label, mais nous ne voulons pas ajouter de label texte visible qui peut gâcher le design et n'est pas vraiment nécessaire pour les utilisateur·ice·s voyants. Comment pouvez-vous ajouter un label accessible uniquement aux lecteurs d'écran&nbsp;?
2. Les deux éléments `<input>` dans le formulaire de commentaire ont des labels texte visibles, mais ils ne sont pas associés de manière univoque à leurs labels — comment y parvenir&nbsp;? Notez que vous devez également mettre à jour certaines règles CSS.

### Le contrôle d'affichage/masquage des commentaires

Le bouton de contrôle d'affichage/masquage des commentaires n'est actuellement pas accessible au clavier. Pouvez-vous le rendre accessible au clavier, à la fois en termes de mise au point à l'aide de la touche tabulation et d'activation à l'aide de la touche entrée&nbsp;?

### Le tableau

Le tableau de données n'est actuellement pas très accessible — il est difficile pour les utilisateur·ice·s de lecteurs d'écran d'associer les lignes et colonnes de données, et le tableau n'a également aucun type de résumé pour indiquer clairement ce qu'il montre. Pouvez-vous ajouter certaines fonctionnalités à votre HTML pour résoudre ce problème&nbsp;?

### Autres considérations ?

Pouvez-vous énumérer deux autres idées d'améliorations qui rendent le site web plus accessible&nbsp;?

## Exemple

Le site du défi terminé doit ressembler à ceci&nbsp;:

![Capture d'écran du site du défi terminé avec un bon contraste de couleurs. Le champ de recherche a un texte d'espace réservé et un bouton d'envoi qui indique « aller », mais aucune étiquette visible.](assessment-site-finished.png)

<details>
<summary>Cliquez ici pour la solution</summary>

Voir notre [code d'exemple terminé <sup>(angl.)</sup>](https://github.com/mdn/learning-area/tree/main/accessibility/assessment-finished).

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
