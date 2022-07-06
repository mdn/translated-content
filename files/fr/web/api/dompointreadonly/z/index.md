---
title: DOMPoint.z
slug: Web/API/DOMPointReadOnly/z
tags:
  - API
  - Coordonnées
  - DOM
  - Géométrie
  - Point
  - Propriétés
  - Quadrilatère
  - z
translation_of: Web/API/DOMPointReadOnly/z
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

La propriété en lecture seule **`z`** de l'interface **`DOMPointReadOnly`** représente la coordonnée z d'un point.

En général, z positif signifie vers l'extérieur de l'écran (autrement dit, opposée à la direction de l'utilisateur) et négatif vers l'intérieur de l'écran (dans la même direction que l'utilisateur).

## Syntaxe

```js
var zPos = DOMPoint.z;
```

### Valeur

Un double.

## Spécifications

| Spécification                                                                            | Statut                                       | Commentaire                                        |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Geometry Interfaces', '#dom-dompointreadonly-z', 'z')}} | {{Spec2('Geometry Interfaces')}} | La dernière version de la spécification est un ED. |

## Compatibilité des navigateurs

{{Compat("api.DOMPointReadOnly.z")}}

## Voir aussi

- {{domxref("DOMPoint")}}
