---
title: "Document : méthode caretRangeFromPoint()"
short-title: caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
l10n:
  sourceCommit: 1c7b8308c11efc3468214b997eb1ac4150f76c18
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La méthode **`caretRangeFromPoint()`** de l'interface {{DOMxRef("Document")}} retourne un objet {{DOMxRef("Range")}} pour le fragment de document situé aux coordonnées définies.

Cette méthode précède le concept de shadow DOM et retourne des résultats imprévisibles et spécifiques à l'implémentation dans un document contenant des objets {{DOMxRef("ShadowRoot")}}.

Utilisez {{DOMxRef("Document/caretPositionFromPoint", "caretPositionFromPoint()")}} à la place sur les navigateurs compatibles, car il s'agit d'une méthode standard qui peut retourner la position du caret à l'intérieur des instances de {{DOMxRef("ShadowRoot")}}, à condition que les shadow roots pertinents soient passés dans son paramètre `options`.

## Syntaxe

```js-nolint
caretRangeFromPoint(x, y)
```

### Paramètres

- `x`
  - : Une position horizontale dans la zone d'affichage (<i lang="en">viewport</i> en anglais) actuelle.
- `y`
  - : Une position verticale dans la zone d'affichage (<i lang="en">viewport</i> en anglais) actuelle.

### Valeur de retour

La valeur de retour peut être&nbsp;:

- Un objet {{DOMxRef("Range")}}.
- Ou `null`, si _x_ ou _y_ sont négatifs, situés en dehors de la zone d'affichage ou s'il n'y a pas de nœud texte correspondant.

## Exemples

Consultez la page {{DOMxRef("Document/caretPositionFromPoint#exemples", "Document.caretPositionFromPoint()")}} pour voir un exemple interactif de cette méthode.

## Spécifications

Ne fait pas partie d'une spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.caretPositionFromPoint()")}}
