---
title: "Element : propriété nextElementSibling"
short-title: nextElementSibling
slug: Web/API/Element/nextElementSibling
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

La propriété en lecture seule **`nextElementSibling`** de l'interface {{DOMxRef("Element")}} retourne l'élément qui suit immédiatement celui défini dans la liste d'enfants ({{DOMxRef("Element.children", "children")}}) de son parent, ou `null` si l'élément défini est le dernier de la liste.

## Valeur

Un objet {{DOMxRef("Element")}}, ou `null`.

## Exemples

```html
<div id="div-01">Ceci est div-01</div>
<div id="div-02">Ceci est div-02</div>
```

```js
let el = document.getElementById("div-01").nextElementSibling;
console.log("Voisins de div-01 :");
while (el) {
  console.log(el.nodeName);
  el = el.nextElementSibling;
}
```

Cet exemple affiche ce qui suit dans la console lorsqu'il se charge&nbsp;:

```plain
Voisins de div-01 :
DIV
SCRIPT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.previousElementSibling")}}
