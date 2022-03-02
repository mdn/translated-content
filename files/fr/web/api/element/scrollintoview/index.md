---
title: element.scrollIntoView
slug: Web/API/Element/scrollIntoView
tags:
  - API
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/scrollIntoView
---
{{ APIRef("DOM")}}{{SeeCompatTable}}

La méthode **`Element.scrollIntoView()`** fait défiler la page de manière à rendre l'élément visible.

## Syntaxe

    element.scrollIntoView();
    element.scrollIntoView(alignToTop); // Paramètre booléen
    element.scrollIntoView(scrollIntoViewOptions); // Paramètre d'objet

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
  - : L'une des options  `"start"`, `"center"`, `"end"` ou`"nearest"`. Par défaut : `"center"`.
- `inline` {{optional_inline}}
  - : L'une des options `"start"`, `"center"`, `"end"` ou `"nearest"`. Par défaut : `"nearest"`.

## Exemple

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
```

## Notes

L'élément peut ne pas être aligné complètement avec le haut ou le bas, selon la disposition des autres éléments.

## Spécification

| Spécification                                                                                                    | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("CSSOM View", "#dom-element-scrollintoview", "Element.scrollIntoView()")}} | {{Spec2("CSSOM View")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Element.scrollIntoView")}}

## Voir aussi

- [`Element.scrollIntoViewIfNeeded()`](/fr/docs/Web/API/Element/scrollIntoViewIfNeeded) {{non-standard_inline}}
