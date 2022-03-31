---
title: DOMPoint.DOMPoint()
slug: Web/API/DOMPoint/DOMPoint
tags:
  - API
  - Constructeurs
  - DOM
  - Géométrie
  - Quadrilatère
translation_of: Web/API/DOMPoint/DOMPoint
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

Le constructeur **`DOMPoint()`** crée un nouvel objet {{domxref("DOMPoint")}}.

## Syntaxe

```js
var myDOMPoint = new DOMPoint(x, y, z, w);
```

### Paramètres

- x
  - : La coordonnée `x` pour le nouveau `DOMPoint`.
- y
  - : La coordonnée `y` pour le nouveau `DOMPoint`.
- z
  - : La coordonnée `z` pour le nouveau `DOMPoint`.
- w
  - : La valeur de perspective du nouveau `DOMPoint`.

## Exemples

Pour créer un nouveau `DOMPoint`, vous pourriez exécuter une ligne de code comme celle-ci :

```js
var myDOMPoint = new DOMPoint(0.4, 0.5, -0.5, 1);
// le lancement de 'myDOMPoint' dans la console devrait renvoyer
// DOMPoint { x: 0.4, y: 0.5, z: -0.5, w: 1 }
```

## Spécifications

| Spécification                                                                                                | Statut                                       | Commentaire                                        |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Geometry Interfaces', '#dom-dompoint-dompointx-y-z-w', 'DOMPoint()')}} | {{Spec2('Geometry Interfaces')}} | La dernière version de la spécification est un ED. |

## Compatibilité des navigateurs

{{Compat("api.DOMPoint.DOMPoint")}}

## Voir aussi

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
