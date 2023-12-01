---
title: DOMRect.DOMRect()
slug: Web/API/DOMRect/DOMRect
---

{{APIRef("DOM")}}{{ SeeCompatTable() }}

Le constructeur **`DOMRect()`** crée un nouvel objet {{domxref("DOMRect")}}.

## Syntaxe

```js
var myDOMRect = new DOMRect(x, y, width, height);
```

### Paramètres

- x
  - : La coordonnée `x` de l'orginie du `DOMRect`.
- y
  - : La coordonnée `y` de l'origine du `DOMRect`.
- width
  - : La largeur du `DOMRect`.
- height
  - : La hauteur du `DOMRect`.

## Exemples

Pour créer un nouveau `DOMPoint`, vous pouvez exécuter une ligne de code telle que celle-ci :

```js
myDOMRect = new DOMRect(0, 0, 100, 100);
// l'exécution de 'myDOMRect' dans la console devrait alors renvoyer
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
