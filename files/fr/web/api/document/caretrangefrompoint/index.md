---
title: "Document : méthode caretRangeFromPoint()"
short-title: caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La méthode **`caretRangeFromPoint()`** de l'interface {{DOMxRef("Document")}} retourne un objet {{DOMxRef("Range")}} pour le fragment de document situé aux coordonnées définies.

Cette méthode est l'implémentation propriétaire de WebKit de la méthode {{DOMxRef("Document.caretPositionFromPoint")}}.

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

Consultez la page {{DOMxRef("Document.caretPositionFromPoint#Examples", "Document.caretPositionFromPoint")}} pour voir un exemple interactif de cette méthode.

## Spécifications

Ne fait pas partie d'une spécification.

## Compatibilité des navigateurs

{{Compat}}
