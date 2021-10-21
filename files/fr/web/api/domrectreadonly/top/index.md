---
title: DOMRectReadOnly.top
slug: Web/API/DOMRectReadOnly/top
tags:
  - API
  - DOM
  - Géométrie
  - Haut
  - Propriétés
  - Rectangle
translation_of: Web/API/DOMRectReadOnly/top
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

La propriété en lecture seule **`top`** de l'interface **`DOMRectReadOnly`** renvoie la valeur de la coordonnée haute du `DOMRect.` (A la même valeur que `y`, ou `y + height` _(y + hauteur)_ si `height` est négative.)

## Syntaxe

```js
var recTop = DOMRect.top;
```

### Valeur

Un double.

## Spécifications

| Spécification                                                                                | Statut                                       | Commentaire                                        |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Geometry Interfaces', '#dom-domrectreadonly-top', 'top')}} | {{Spec2('Geometry Interfaces')}} | La dernière version de la spécification est un ED. |

## Compatibilité des navigateurs

{{Compat("api.DOMRectReadOnly.top")}}

## Voir aussi

- {{domxref("DOMRect")}}
