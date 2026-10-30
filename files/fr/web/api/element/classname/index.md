---
title: "Element : propriété className"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: 88c33ab5f4ccd88d13a0a5272de45d4d33f9f636
---

{{APIRef("DOM")}}

La propriété **`className`** de l'interface {{DOMxRef("Element")}} reflète le contenu de l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) de l'élément.

## Valeur

Une chaîne de caractères représentant la classe ou les classes séparées par des espaces de l'élément courant.

## Exemples

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Notes

Le nom `className` est utilisé pour cette propriété au lieu de `class` à cause de conflits éventuels avec le mot-clé «&nbsp;class&nbsp;» dans beaucoup de langages utilisés pour manipuler le DOM.

`className` peut également être une instance de {{DOMxRef("SVGAnimatedString")}} si un `element` est un {{DOMxRef("SVGElement")}}. Il est plus facile d'obtenir/définir l'attribut `class` d'un élément en utilisant {{DOMxRef("Element.getAttribute")}} et {{DOMxRef("Element.setAttribute")}} si vous manipulez des éléments SVG. Cependant, prenez en compte que {{DOMxRef("Element.getAttribute")}} retourne {{JSxRef("null")}} au lieu de `""` si un `element` a un attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) vide.

```js
elm.setAttribute("class", "ma-classe");
const maClasse = elm.getAttribute("class");
```

> [!NOTE]
> `class` est le nom d'un **attribut HTML**, tandis que `className` est le nom d'une **propriété DOM**.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.classList")}}
