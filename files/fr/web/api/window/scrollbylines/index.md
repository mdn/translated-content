---
title: "Window : méthode scrollByLines()"
short-title: scrollByLines()
slug: Web/API/Window/scrollByLines
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}{{Non-standard_Header}}

La méthode **`scrollByLines()`** de l'interface {{DOMxRef("Window")}} fait défiler le document du nombre de lignes défini.

## Syntaxe

```js-nolint
scrollByLines(lines)
```

## Paramètres

- `lines`
  - : Le nombre de lignes de défilement du document. Il peut s'agir d'un entier positif ou négatif.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```html
<button id="defilement-haut">Monter de 5 lignes</button>
<button id="defilement-bas">Descendre de 5 lignes</button>
```

```js
document.getElementById("defilement-haut").addEventListener("click", () => {
  window.scrollByLines(-5);
});
document.getElementById("defilement-bas").addEventListener("click", () => {
  window.scrollByLines(5);
});
```

## Spécification

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("window.scroll()")}}
- La méthode {{DOMxRef("window.scrollBy()")}}
- La méthode {{DOMxRef("window.scrollByPages()")}}
- La méthode {{DOMxRef("window.scrollTo()")}}
