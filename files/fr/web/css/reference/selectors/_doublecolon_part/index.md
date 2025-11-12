---
title: ::part()
slug: Web/CSS/Reference/Selectors/::part
original_slug: Web/CSS/::part
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::part()`** représente n'importe quel élément dans un [arbre fantôme (<i lang="en">shadow tree</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM) qui a un attribut [`part`](/fr/docs/Web/HTML/Reference/Global_attributes#part) correspondant.

```css
custom-element::part(foo) {
  /* Styles à appliquer à la partie `foo` */
}
```

## Description

L'attribut global [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part) permet de rendre un élément d'un arbre fantôme visible pour son DOM parent. Les noms de parties déclarés à l'aide de l'attribut `part` sont utilisés comme paramètres du pseudo-élément `::part()`. De cette manière, vous pouvez appliquer des styles CSS aux éléments de l'arbre fantôme depuis l'extérieur.

Les noms de parties sont similaires aux classes CSS&nbsp;: plusieurs éléments peuvent avoir le même nom de partie, et un seul élément peut avoir plusieurs noms de parties. Tous les noms de parties utilisés dans le pseudo-élément `::part()` doivent être présents dans la valeur `part` déclarée sur l'élément de l'arbre fantôme, mais l'ordre des noms de parties n'a pas d'importance, c'est-à-dire que les sélecteurs `::part(tab active)` et `::part(active tab)` sont identiques.

Le pseudo-élément `::part()` n'est visible que pour le DOM parent. Cela signifie que lorsqu'un arbre fantôme est imbriqué, les parties ne sont visibles pour aucun ancêtre autre que le parent direct. L'attribut [`exportparts`](/fr/docs/Web/HTML/Reference/Global_attributes/exportparts) résout cette limitation en exportant explicitement les noms de parties déjà définis, les rendant ainsi stylables globalement.

Les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (comme `::part(label):hover`) peuvent être ajoutées au sélecteur `::part()`, mais les [pseudo-classes structurelles](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_structurelles_darbre) qui correspondent en fonction des informations de l'arbre, telles que `:empty` et `:last-child`, ne peuvent pas être ajoutées.

Des pseudo-éléments supplémentaires, tels que `::before`, peuvent être ajoutés au sélecteur `::part()`, mais des éléments `::part()` supplémentaires ne peuvent pas être ajoutés. Par exemple, `::part(confirm-button)::part(active)` ne correspond jamais à rien, c'est-à-dire qu'il n'est pas identique à `::part(confirm-button active)`. Cela est dû au fait que cela exposerait plus d'informations structurelles que prévu.

## Syntaxe

```css
::part(<ident>+) {
  /* ... */
}
```

## Exemples

### HTML

```html
<template id="tabbed-custom-element">
  <style>
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 1rem;
    }
    :host {
      display: flex;
    }
  </style>
  <div part="tab active">Onglet A</div>
  <div part="tab">Onglet B</div>
  <div part="tab">Onglet C</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: blue;
  border-bottom: transparent solid 4px;
}

tabbed-custom-element::part(tab):hover {
  background-color: black;
  color: white;
}

tabbed-custom-element::part(tab active) {
  border-color: blue !important;
}
```

### JavaScript

```js
const template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" }).append(template.content);
    }
  },
);
```

### Résultat

{{EmbedLiveSample('exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`part`](/fr/docs/Web/HTML/Reference/Global_attributes#part)
- La fonction de pseudo-classe {{CSSxRef(":state",":state()")}}
- L'attribut [`exportparts`](/fr/docs/Web/HTML/Reference/Global_attributes#exportparts)
- Le module des [parties fantômes CSS](/fr/docs/Web/CSS/CSS_shadow_parts)
