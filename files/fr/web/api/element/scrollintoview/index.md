---
title: element.scrollIntoView
slug: Web/API/Element/scrollIntoView
---

{{ APIRef("DOM")}}

La méthode **`Element.scrollIntoView()`** fait défiler la page de manière à rendre l'élément visible.

## Syntaxe

```js
element.scrollIntoView();
element.scrollIntoView(alignToTop); // Paramètre booléen
element.scrollIntoView(scrollIntoViewOptions); // Paramètre d'objet
```

### Paramètres

- `alignToTop` {{ optional_inline() }}

  - : est une valeur {{jsxref("Boolean")}} optionnelle qui :

    - si elle vaut `true` (_vrai_), aligne l'élément avec le haut de la zone visible de l'ancêtre défilable. Correspond à `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. C'est la valeur par défaut.
    - Si elle vaut `false` (_faux_), celui-ci sera aligné en bas de la zone visible de l'ancêtre défilable. Correspond à `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}} {{experimental_inline}}
  - : Est un objet qui a les propriétés suivantes :
    - `behavior` {{optional_inline}}
      - : Définit l'animation de transition qui peut être `"auto"`, `"instant"` ou `"smooth"`. Par défaut : `"auto"`.
    - `block` {{optional_inline}}
      - : L'une des options `"start"`, `"center"`, `"end"` ou`"nearest"`. Par défaut : `"start"`.
    - `inline` {{optional_inline}}
      - : L'une des options `"start"`, `"center"`, `"end"` ou `"nearest"`. Par défaut : `"nearest"`.

## Exemple

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

## Notes

L'élément peut ne pas être aligné complètement avec le haut ou le bas, selon la disposition des autres éléments.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.scrollIntoViewIfNeeded()`](/fr/docs/Web/API/Element/scrollIntoViewIfNeeded) {{non-standard_inline}}
