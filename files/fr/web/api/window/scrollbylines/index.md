---
title: Window.scrollByLines()
slug: Web/API/Window/scrollByLines
---

{{ ApiRef() }}

{{Non-standard_header}}

Fait défiler le document du nombre de lignes spécifié.

## Syntaxe

```js
window.scrollByLines(lignes);
```

## Paramètres

- `lignes` est le nombre de lignes à faire défiler.
- `lignes` peut être un entier positif ou négatif.

## Exemples

```html
<!-- Faire défiler le document de 5 lignes vers le bas. -->
<button onclick="scrollByLines(5);">5 lignes vers le bas</button>
```

```html
<!-- Faire défiler le document de 5 lignes vers le haut. -->
<button onclick="scrollByLines(-5);">5 lignes vers le haut</button>
```

## Spécification

Ne fait partie d'aucune spécification.

## Voir aussi

- {{domxref("window.scrollBy")}}, {{domxref("window.scrollByPages")}}
