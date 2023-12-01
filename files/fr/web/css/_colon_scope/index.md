---
title: ":scope"
slug: Web/CSS/:scope
l10n:
  sourceCommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:scope`** représente les éléments qui sont des points de référence ou des portées auxquels faire correspondre les sélecteurs.

```css
/* Sélectionne un élément dans la portée */
:scope {
  background-color: lime;
}
```

À l'heure actuelle, lorsqu'elle est utilisée dans une feuille de style, `:scope` est identique à [`:root`](/fr/docs/Web/CSS/:root), car il n'existe pas de moyen explicite pour créer un élément dont la portée est restreinte. Lorsqu'elle est utilisée à travers des méthodes telles que [`querySelector()`](/fr/docs/Web/API/Element/querySelector), [`querySelectorAll()`](/fr/docs/Web/API/Element/querySelectorAll), [`matches()`](/fr/docs/Web/API/Element/matches) ou [`closest()`](/fr/docs/Web/API/Element/closest), `:scope` correspond à l'élément sur lequel la méthode est appelée.

## Syntaxe

```css
:scope {
  /* … */
}
```

## Exemples

### Identité

Dans cet exemple, on voit comment utiliser la pseudo-classe `:scope` avec la méthode [`Element.matches()`](/fr/docs/Web/API/Element/matches) afin de désigner l'élément sur lequel la méthode est appelée. Ici, si `:scope` est prise en charge et que le paragraphe est contenu dans la portée de `:root`, le texte est affiché dans le paragraphe avec l'identifiant `output`.

#### JavaScript

```js
const paragraph = document.getElementById("para");
const output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.textContent =
    "Le premier paragraphe est sa propre portée, comme attendu !";
}
```

#### HTML

```html
<p id="para">
  Ceci est un paragraphe, pas forcément intéressant en tant que tel.
</p>
<p id="output"></p>
```

#### Résultat

{{EmbedLiveSample('')}}

### Enfants directs

La pseudo-classe `:scope` peut également s'avérer utile lorsqu'on doit obtenir un descendant direct d'un élément [`Element`](/fr/docs/Web/API/Element).

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join(", ");
```

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>
<p>
  Identifiants des éléments sélectionnés&nbsp;:
  <span id="results"></span>
</p>
```

#### Résultat

{{EmbedLiveSample('')}}

La portée de `context` est l'élément dont [l'identifiant (`id`)](/fr/docs/Web/HTML/Global_attributes#id) vaut `context`. Les éléments sélectionnés sont les éléments `<div>` qui sont des enfants directs de ce contexte, c'est-à-dire `element-1` et `element-2`, mais pas leurs descendants à eux.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [`:root`](/fr/docs/Web/CSS/:root)
- [Localiser des éléments du DOM grâce aux sélecteurs](/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/fr/docs/Web/API/Element/querySelector) et [`Element.querySelectorAll()`](/fr/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector) et [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/fr/docs/Web/API/DocumentFragment/querySelector) et [`DocumentFragment.querySelectorAll()`](/fr/docs/Web/API/DocumentFragment/querySelectorAll)
