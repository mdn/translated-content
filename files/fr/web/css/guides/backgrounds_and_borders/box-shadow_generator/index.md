---
title: Générateur de box-shadow
slug: Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Cet outil visuel permet de construire des effets d'ombre et de générer du code pour la propriété {{CSSxRef("box-shadow")}} qui pourra être ajouté à votre feuille de style.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", "100%", 1000)}}

Le générateur d'ombres de boîte vous permet d'ajouter une ou plusieurs ombres à un élément.

À l'ouverture de l'outil, vous trouverez un rectangle dans la section supérieure droite de l'outil. C'est l'élément auquel vous allez appliquer des ombres. Lorsque cet élément est sélectionné (comme c'est le cas lorsque vous chargez la page pour la première fois), vous pouvez appliquer quelques styles de base&nbsp;:

- Définissez la couleur du texte ({{CSSxRef("color")}}) de l'élément à l'aide de l'outil de sélection de couleur.
- Donnez à l'élément une bordure ({{CSSxRef("border")}}) en utilisant la case à cocher «&nbsp;<i lang="en">border</i>&nbsp;».
- Utilisez les curseurs pour définir les propriétés {{CSSxRef("top")}}, {{CSSxRef("left")}}, {{CSSxRef("width")}} et {{CSSxRef("height")}} de l'élément.

Pour ajouter une ombre de boîte, cliquez sur le bouton «&nbsp;+&nbsp;» en haut à gauche. Cela ajoute une ombre et l'affiche dans la colonne de gauche. Vous pouvez maintenant définir les valeurs de la nouvelle ombre&nbsp;:

- Définissez la couleur de l'ombre ({{CSSxRef("color")}}) à l'aide de l'outil de sélection de couleur.
- Définissez l'ombre comme étant interne en utilisant la case à cocher «&nbsp;inset&nbsp;».
- Utilisez les curseurs pour définir la position, le flou et l'étendue de l'ombre.

Pour ajouter une autre ombre, cliquez à nouveau sur «&nbsp;+&nbsp;». Maintenant, toutes les valeurs que vous définissez s'appliqueront à cette nouvelle ombre. Changez l'ordre dans lequel ces deux ombres sont appliquées en utilisant les boutons ↑ et ↓ en haut à gauche. Sélectionnez à nouveau la première ombre en cliquant dessus dans la colonne de gauche. Pour mettre à jour les styles de l'élément lui-même, sélectionnez-le en cliquant sur le bouton intitulé «&nbsp;<i lang="en">element</i>&nbsp;» en haut.

Vous pouvez ajouter des pseudo-éléments {{CSSxRef("::before")}} et {{CSSxRef("::after")}} à l'élément, et leur donner également des ombres de boîte. Pour basculer entre l'élément et ses pseudo-éléments, utilisez les boutons en haut intitulés «&nbsp;<i lang="en">element</i>&nbsp;», «&nbsp;::before&nbsp;» et «&nbsp;::after&nbsp;».

La boîte en bas à droite contient le CSS pour l'élément et tous les pseudo-éléments `::before` ou `::after`.

## Voir aussi

- Autres outils&nbsp;:
  - [Générateur de `border-image`](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Générateur de `border-radius`](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
- Le module [d'arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
