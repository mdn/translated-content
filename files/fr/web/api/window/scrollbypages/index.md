---
title: "Window : méthode scrollByPages()"
short-title: scrollByPages()
slug: Web/API/Window/scrollByPages
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}{{Non-standard_Header}}

La méthode **`scrollByPages()`** de l'interface {{DOMxRef("Window")}} fait défiler le document du nombre de pages défini.

## Syntaxe

```js-nolint
scrollByPages(pages)
```

### Paramètres

- `pages`
  - : Le nombre de pages de défilement du document. Il peut s'agir d'un entier positif ou négatif.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
// Fait défiler le document d'une page vers le bas
window.scrollByPages(1);

// Fait défiler le document d'une page vers le haut
window.scrollByPages(-1);
```

## Spécification

DOM Niveau 0. Ne fait pas partie d'une spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("window.scroll()")}}
- La méthode {{DOMxRef("window.scrollBy()")}}
- La méthode {{DOMxRef("window.scrollByLines()")}}
- La méthode {{DOMxRef("window.scrollTo()")}}
