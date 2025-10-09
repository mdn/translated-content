---
title: "HTMLImageElement : propriété isMap"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("HTML DOM")}}

La propriété {{domxref("HTMLImageElement")}} **`isMap`** est
un booléen qui indique que l'image doit être utilisée par une image réactive côté serveur.
Ceci ne peut être utilisé que sur des images placées dans un élément {{HTMLElement("a")}}.

> [!NOTE]
> Pour des raisons d'accessibilité, il convient généralement d'éviter d'utiliser
> des images réactives côté serveur, car elles nécessitent l'usage de la souris. Utilisez plutôt une [image réactive côté client](/fr/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Valeur

Un booléen qui vaut `true` si l'image est utilisée pour une image réactive côté serveur&nbsp;; sinon, la valeur est
`false`.

## Notes d'utilisation

Lorsqu'une image marquée comme faisant partie d'une image réactive côté serveur est sélectionnée, le navigateur construit la chaîne «&nbsp;?x,y&nbsp;», où x et y indiquent les coordonnées du clic par rapport au coin supérieur gauche de l'image, exprimées en pixels CSS.

Le navigateur récupère alors cette URL auprès du serveur et l'affiche ou la télécharge selon la valeur de l'attribut [`download`](/fr/docs/Web/HTML/Reference/Elements/a#download).

Contrairement aux images réactives côté serveur, les images réactives côté client n'entraînent pas le passage de l'élément {{HTMLElement("img")}} en mode contenu interactif.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
