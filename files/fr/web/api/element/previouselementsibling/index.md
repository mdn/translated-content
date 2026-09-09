---
title: "Element : propriété previousElementSibling"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`previousElementSibling`** de l'interface {{DOMxRef("Element")}} retourne un {{DOMxRef("Element")}} qui précède immédiatement celui défini dans la liste d'enfants ({{DOMxRef("Element.children", "children")}}) de son parent, ou `null` si l'élément défini est le premier de la liste.

## Valeur

Un objet {{DOMxRef("Element")}}, ou `null`.

## Exemples

```html
<div id="div-01">Voici div-01</div>
<div id="div-02">Voici div-02</div>
<li>Ceci est un élément de liste</li>
<li>Ceci est un autre élément de liste</li>
<div id="div-03">Voici div-03</div>
```

```js
let el = document.getElementById("div-03").previousElementSibling;
console.log("Voisins de div-03:");
while (el) {
  console.log(el.nodeName);
  el = el.previousElementSibling;
}
```

Cet exemple affiche ce qui suit dans la page lorsqu'elle se charge&nbsp;:

```plain
Voisins de div-03:
LI
LI
DIV
DIV
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.nextElementSibling")}}
