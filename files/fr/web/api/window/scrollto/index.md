---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{APIRef}}

La méthode **`Window.scrollTo()`** permet de faire défiler la fenêtre pour atteindre les coordonnées données dans le document.

## Syntaxe

```js
scrollTo(x_coord, y_coord);
scrollTo(options);
```

### Paramètres

- `x_coord`
  - : Le pixel sur l'axe horizontal du document dont on veut qu'il soit affiché dans le coin supérieur gauche.
- `y_coord`
  - : Le pixel sur l'axe vertical du document dont on veut qu'il soit affiché dans le coin supérieur gauche.

ou

- `options`
  - : Un dictionnaire avec les paramètres suivants&nbsp;:
    - `top`
      - : Indique le nombre de pixels le long desquels faire défiler la fenêtre ou l'élément sur l'axe vertical.
    - `left`
      - : Indique le nombre de pixels le long desquels faire défiler la fenêtre ou l'élément sur l'axe horizontal.
    - `behavior`
      - : Indique si le défilement devrait être instantané ou doux. Cette option est une chaine de caractères qui doit être l'une de ces valeurs&nbsp;:
        - `smooth`&nbsp;: le défilement doit s'animer en douceur
        - `instant`&nbsp;: le défilement devrait se produire instantanément, en un seul saut
        - `auto`&nbsp;: le comportement de défilement est déterminé par la valeur calculée de ([scroll-behavior](/fr/docs/Web/CSS/scroll-behavior))

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
  behavior: "smooth",
});
```

## Notes

[`Window.scroll()`](/fr/docs/Web/API/Window/scroll) est la même que cette méthode. Pour le défilement relatif, voir les méthodes [`Window.scrollBy()`](/fr/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/fr/docs/Web/API/Window/scrollByLines), et [`Window.scrollByPages()`](/fr/docs/Web/API/Window/scrollByPages).

Pour le défilement des éléments, voir [`Element.scrollTop`](/fr/docs/Web/API/Element/scrollTop) et [`Element.scrollLeft`](/fr/docs/Web/API/Element/scrollLeft).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
