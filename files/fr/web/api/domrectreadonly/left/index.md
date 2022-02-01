---
title: DOMRectReadOnly.left
slug: Web/API/DOMRectReadOnly/left
tags:
  - API
  - DOM
  - Gauche
  - Géométrie
  - Propriétés
  - Rectangle
translation_of: Web/API/DOMRectReadOnly/left
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

La propriété en lecture seule **`left`** de l'interface **`DOMRectReadOnly`** renvoie la valeur de la coordonnée gauche du `DOMRect` (a la même valeur que `x`, ou `x + width` _(x + largeur)_ si `width` est négative).

## Syntaxe

```js
var recLeft = DOMRect.left;
```

### Valeur

Un double.

## Spécifications

| Spécification                                                                                    | Statut                                       | Commentaire                                        |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Geometry Interfaces', '#dom-domrectreadonly-left', 'left')}} | {{Spec2('Geometry Interfaces')}} | La dernière version de la spécification est un ED. |

## Compatibilité des navigateurs

{{Compat("api.DOMRectReadOnly.left")}}

## Voir aussi

- {{domxref("DOMRect")}}
