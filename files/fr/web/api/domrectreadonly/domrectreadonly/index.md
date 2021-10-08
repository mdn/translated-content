---
title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
tags:
  - API
  - Constructeurs
  - DOM
  - Géométrie
  - Rectangle
translation_of: Web/API/DOMRectReadOnly/DOMRectReadOnly
---
{{APIRef("DOM")}}{{ SeeCompatTable }}

Le constructeur **`DOMRectReadOnly()`** crée un nouvel objet {{domxref("DOMRectReadOnly")}}.

## Syntaxe

    var myDOMRectReadOnly = new DOMRectReadOnly(x, y, width, height);

### Paramètres

- x
  - : La coordonnée `x` de l'origine d'un `DOMRectReadOnly`.
- y
  - : La coordonnée `y` de l'origine d'un `DOMRectReadOnly`.
- width
  - : La largeur d'un `DOMRectReadOnly`.
- height
  - : La hauteur d'un `DOMRectReadOnly`.

## Exemples

Pour créer un nouveau `DOMPoint`, vous pouvez exécuter une ligne de code comme celle-ci :

```js
myDOMRect = new DOMRectReadOnly(0,0,100,100);
// l'exécution de 'myDOMRect' dans la console devrait alors renvoyer
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## Spécifications

| Spécification                                                                    | Statut                                       | Commentaire          |
| -------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Geometry Interfaces', '#DOMRect', 'DOMRect()')}} | {{Spec2('Geometry Interfaces')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DOMRectReadOnly.DOMRectReadOnly")}}

## Voir aussi

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
