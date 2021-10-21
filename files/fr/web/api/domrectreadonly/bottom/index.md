---
title: DOMRectReadOnly.bottom
slug: Web/API/DOMRectReadOnly/bottom
tags:
  - API
  - Bas
  - DOM
  - Géométrie
  - Propriétés
  - Rectangle
translation_of: Web/API/DOMRectReadOnly/bottom
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

La propriété en lecture seule **`bottom`** d'une interface **`DOMRectReadOnly`** renvoie la valeur des coordonnées du pied du `DOMRect` (a la même valeur que `y + height` _(y + hauteur)_, ou `y` si `height` est négative).

## Syntaxe

```js
var recBottom = DOMRect.bottom;
```

### Valeur

Un double.

## Spécifications

| Spécification                                                                                        | Statut                                       | Commentaire                                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Geometry Interfaces', '#dom-domrectreadonly-bottom', 'bottom')}} | {{Spec2('Geometry Interfaces')}} | La dernière version de la spécification est un ED. |

## Compatibilité des navigateurs

{{Compat("api.DOMRectReadOnly.bottom")}}

## Voir aussi

- {{domxref("DOMRect")}}
