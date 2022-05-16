---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
translation_of: Web/API/Window/scrollTo
browser-compat: api.Window.scrollTo
---
{{APIRef}}

La méthode **`Window.scrollTo()`** permet de faire défiler la fenêtre pour atteindre les coordonnées données dans le document.

## Syntaxe

```js
scrollTo(x-coord, y-coord)
scrollTo(options)
```

### Paramètres

- `x-coord`
  - : Le pixel sur l'axe horizontal du document dont on veut qu'il soit affiché dans le coin supérieur gauche.
- `y-coord`
  - : Le pixel sur l'axe vertical du document dont on veut qu'il soit affiché dans le coin supérieur gauche.

ou

- `options`
  - : Un dictionnaire avec les paramètres suivants&nbsp;:
    - `top`
      - : Indique le nombre de pixels le long desquels faire défiler la fenêtre ou l'élément sur l'axe vertical.
    - `left`
      - : Indique le nombre de pixels le long desquels faire défiler la fenêtre ou l'élément sur l'axe horizontal.
    - `behavior`
      - : Indique si le défilement devrait être doux (valeur `smooth`), ou s'il devrait avoir lieu instantanément, en une seule fois (valeur `auto`, qui est la valeur par défaut).

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

### Usage simple

```js
window.scrollTo(0, 1000);
```
### En utilisant `options`

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Notes

[`Window.scroll()`](/fr/docs/Web/API/Window/scroll) est la même que cette méthode. Pour le défilement relatif, voir les méthodes [`Window.scrollBy()`](/fr/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/fr/docs/Web/API/Window/scrollByLines), et [`Window.scrollByPages()`](/fr/docs/Web/API/Window/scrollByPages).

Pour le défilement des éléments, voir [`Element.scrollTop`](/fr/docs/Web/API/Element/scrollTop) et [`Element.scrollLeft`](/fr/docs/Web/API/Element/scrollLeft).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
