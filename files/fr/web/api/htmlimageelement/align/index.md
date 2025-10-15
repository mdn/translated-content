---
title: "HTMLImageElement : propriété align"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

La propriété **`align`** (_obsolète_) de l'interface {{domxref("HTMLImageElement")}} est une chaîne de caractères qui indique comment positionner l'image par rapport à son conteneur.

Il est recommandé d'utiliser à la place la propriété CSS {{cssxref("vertical-align")}}, qui fonctionne aussi pour les images malgré son nom. Vous pouvez également utiliser la propriété {{cssxref("float")}} pour faire flotter l'image à la marge gauche ou droite.

La propriété `align` reflète l'attribut HTML [`align`](/fr/docs/Web/HTML/Reference/Elements/img#align).

## Valeur

Une chaîne de caractères définissant l'une des valeurs suivantes, qui définit le mode d'alignement de l'image.

### Alignement sur la ligne de base

Ces trois valeurs définissent l'alignement de l'élément par rapport à la ligne de base du texte. Il convient de les remplacer par la propriété CSS {{cssxref("vertical-align")}}.

- `bottom`
  - : Le bord inférieur de l'image doit être aligné verticalement avec la ligne de base du texte courant. **Valeur par défaut.**
- `middle`
  - : Le centre de l'objet doit être aligné verticalement avec la ligne de base courante.
- `top`
  - : Le bord supérieur de l'objet doit être aligné verticalement avec la ligne de base courante.

Il est à noter que {{cssxref("vertical-align")}} propose plusieurs autres options de valeur&nbsp;; vous pouvez les envisager lors de la migration de votre code.

### Positionnement horizontal des images

Les valeurs `left` et `right` n'affectent pas l'alignement par rapport à la ligne de base. Elles font plutôt «&nbsp;flotter&nbsp;» l'image à la marge gauche ou droite, permettant au texte suivant d'entourer l'image. Il est préférable d'utiliser la propriété CSS {{cssxref("float")}}, avec la valeur `left` ou `right`.

- `left`
  - : Positionne l'image pour que son bord gauche soit aligné avec la marge courante. Tout texte qui suit s'écoulera contre le bord droit de l'image.
- `right`
  - : Positionne l'image pour que son bord droit soit aligné avec la marge droite. Le texte suivant s'écoulera le long du bord gauche de l'image.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
