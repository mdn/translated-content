---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
---

{{ APIRef }}

La méthode **`scrollTo()`** de l'interface {{domxref("Element")}} permet de faire défiler le document jusqu'à un jeu de coordonnées particulier.

## Syntaxe

```js
element.scrollTo(x_coord, y_coord);
element.scrollTo(options);
```

### Paramètres

- `x_coord` est le pixel le long de l'axe horizontal du document qui doit être affiché en haut à gauche.
- `y_coord` est le pixel le long de l'axe vertical du document qui doit être affiché en haut à gauche.

\- ou -

- `options` est un dictionnaire de type {{domxref("ScrollToOptions")}}.

## Exemples

En utilisant des coordonnées :

```js
element.scrollTo(0, 1000);
```

Ou en utilisant `options`&nbsp;:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
