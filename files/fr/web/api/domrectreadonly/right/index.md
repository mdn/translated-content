---
title: DOMRectReadOnly.right
slug: Web/API/DOMRectReadOnly/right
tags:
  - API
  - DOM
  - Droite
  - Géométrie
  - Propriétés
  - Rectangle
translation_of: Web/API/DOMRectReadOnly/right
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

La propriété en lecture seule **`right`** de l'interface **`DOMRectReadOnly`** renvoie la valeur de la coordonnée droite du `DOMRect.` (a la même valeur que `x + width` _(x + largeur)_, ou `x` si `width` est négative).

## Syntaxe

```js
var recRight = DOMRect.right;
```

### Valeur

Un double.

## Spécifications

| Spécification                                                                                        | Statut                                       | Commentaire                                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Geometry Interfaces', '#dom-domrectreadonly-right', 'right')}} | {{Spec2('Geometry Interfaces')}} | La dernière version de la spécification est un ED. |

## Compatibilité des navigateurs

{{Compat("api.DOMRectReadOnly.right")}}

## Voir aussi

- {{domxref("DOMRect")}}
