---
title: window.scrollTo
slug: Web/API/Window/scrollTo
tags:
  - DOM
  - DOM_0
translation_of: Web/API/Window/scrollTo
---
{{ ApiRef() }}

### Résumé

Fait défiler le document jusqu'à un jeu de coordonnées particulier.

### Syntaxe

    window.scrollTo(coord-x,coord-y);

### Paramètres

- `coord-x` est le pixel le long de l'axe horizontal du document qui doit être affiché en haut à gauche.
- `coord-y` est le pixel le long de l'axe vertical du document qui doit être affiché en haut à gauche.

### Exemple

    window.scrollTo(0, 1000);

### Notes

Cette fonction est fonctionnellement identique à [window.scroll](scroll). Pour un défilement relatif, consultez [window.scrollBy](scrollBy), [window.scrollByLines](scrollByLines) et [window.scrollByPages](scrollByPages).

### Spécification

{{ DOM0() }}
