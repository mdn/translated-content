---
title: element.className
slug: Web/API/Element/className
---

{{APIRef("DOM")}}

La propriété **className** de l'interface {{domxref("Element")}} récupère et définit la valeur de l'[attribut `class`](/fr/docs/Web/HTML/Attributs_universels/class) de l'élément spécifié.

## Syntaxe

```js
var cName = elementNodeReference.className;
elementNodeReference.className = cName;
```

- `cName` est une String (chaîne de caractères) représentant la classe (ou les classes séparées par des espaces) de l'élément courant.

## Exemple

```js
let elm = document.getElementById("item");

if (elm.className === "active") {
  elm.className = "inactive";
} else {
  elm.className = "active";
}
```

## Notes

Le nom `className` est utilisé pour cette propriété au lieu de `class` à cause de conflits éventuels avec le mot-clé «&nbsp;class&nbsp;» dans beaucoup de langages utilisés pour manipuler le DOM.

`className` peut être une instance de {{domxref("SVGAnimatedString")}} si l'`element` est un {{domxref("SVGElement")}}. Dans ce cas là, l'usage de `className` ne fonctionnera pas, il sera donc préférable d'utiliser {{domxref("Element.getAttribute")}} et {{domxref("Element.setAttribute")}} si vous utilisez des élements SVG.

```js
elm.setAttribute("class", elm.getAttribute("class"));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("element.classList")}}
