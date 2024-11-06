---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

Fait défiler le document dans la fenêtre du nombre de pixels passé en paramètre.

## Syntaxe

```js
window.scrollBy(X, Y);
```

### Paramètres

- `X` est le nombre en pixels pour le défilement horizontal.
- `Y` est le nombre en pixels pour le défilement vertical.

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

Des coordonnées positives feront défiler à droite et vers le bas de la page. Des coordonnées négatives feront défiler à gauche et vers le haut de la page.

## Exemples

```js
// fait défiler d'une page
window.scrollBy(0, window.innerHeight);
```

## Notes

[window.scrollBy](/fr/docs/DOM/Window.scrollBy) fait défiler en fonction d'un nombre précis, alors que [window.scroll](/fr/docs/DOM/Window.scroll) fait défiler vers une position absolue dans le document. Voir aussi [window.scrollByLines](/fr/docs/DOM/Window.scrollByLines), [window.scrollByPages](/fr/docs/DOM/Window.scrollByPages)

## Spécifications

{{Specifications}}
