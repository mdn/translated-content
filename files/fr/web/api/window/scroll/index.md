---
title: Window.scroll()
slug: Web/API/Window/scroll
---

{{APIRef}}

La méthode **`Window.scroll()`** permet de faire défiler la fenêtre jusqu'à un endroit donné du document.

## Syntaxe

```js
window.scroll(x, y);
window.scroll(options);
```

### Paramètres

- `x`
  - : Le numéro de pixel sur l'axe horizontal du document qu'on souhaite avoir affiché dans le coin supérieur gauche.
- `y`
  - : Le numéro de pixel sur l'axe vertical du document qu'on souhaite avoir affiché dans le coin supérieur gauche.

Ou avec `options`&nbsp;:

- `options`
  - : Un dictionnaire qui contient les paramètres suivants&nbsp;:
    - `top`
      - : Indique le nombre de pixels sur l'axe vertical le long desquels faire défiler la fenêtre ou l'élément.
    - `left`
      - : Indique le nombre de pixels sur l'axe horizontal le long desquels faire défiler la fenêtre ou l'élément.
    - `behavior`
      - : Indique si le défilement devrait être instantané ou doux. Cette option est une chaine de caractères qui doit être l'une de ces valeurs&nbsp;:
        - `smooth`&nbsp;: le défilement doit s'animer en douceur
        - `instant`&nbsp;: le défilement devrait se produire instantanément, en un seul saut
        - `auto`&nbsp;: le comportement de défilement est déterminé par la valeur calculée de ([scroll-behavior](/fr/docs/Web/CSS/scroll-behavior))

## Exemples

```html
<!-- On place le 100e pixel, sur l'axe vertical, en haut de la fenêtre -->

<button onclick="scroll(0, 100);">
  Cliquez pour faire défiler jusqu'au 100e pixel
</button>
```

Avec `options`&nbsp;:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Notes

[`Window.scrollTo()`](/fr/docs/Web/API/Window/scrollTo) est en pratique identique à cette méthode. Pour le défilement relatif, voir les méthodes [`Window.scrollBy()`](/fr/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/fr/docs/Web/API/Window/scrollByLines), et [`Window.scrollByPages()`](/fr/docs/Web/API/Window/scrollByPages).

Pour faire défiler les éléments, voir [`Element.scrollTop`](/fr/docs/Web/API/Element/scrollTop) et [`Element.scrollLeft`](/fr/docs/Web/API/Element/scrollLeft).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Window.scrollByLines()`](/fr/docs/Web/API/Window/scrollByLines)
- [`Window.scrollByPages()`](/fr/docs/Web/API/Window/scrollByPages)
- [`Element.scrollIntoView()`](/fr/docs/Web/API/Element/scrollIntoView)
