---
title: Window.find()
slug: Web/API/Window/find
---

{{ApiRef}}{{Non-standard_Header}}

> [!NOTE]
> La prise en charge de `Window.find()` pourrait changer dans les futures versions de Gecko. Voir [bug Firefox 672395](https://bugzil.la/672395).

La méthode **`Window.find()`** trouve une chaîne dans une fenêtre.

## Syntaxe

```js
window.find(
  aString,
  aCaseSensitive,
  aBackwards,
  aWrapAround,
  aWholeWord,
  aSearchInFrames,
  aShowDialog,
);
```

- `aString`
  - : La chaîne de caractère à rechercher.
- `aCaseSensitive`
  - : {{jsxref("Boolean")}}. Si `true`, spécifie une recherche sensible à la casse.
- `aBackwards`
  - : {{jsxref("Boolean")}}. Si `true`, spécifie une recherche vers l'arrière.
- `aWrapAround`
  - : {{jsxref("Boolean")}}. Si `true`, spécifie une recherche enveloppante.
- `aWholeWord`
  - : {{jsxref("Boolean")}}. Si `true`, spécifie une recherche de mot entier. Ceci n'est pas implémenté; voir [bug Firefox 481513](https://bugzil.la/481513).
- `aSearchInFrames`
  - : {{jsxref("Boolean")}}. Si `true`, spécifie une recherche dans les cadres.

### Retourne

`true` si la chaîne est trouvé; autrement, `false`.

## Exemple

### JavaScript

```js
findString = function findText(text) {
  alert("String \x22" + text + "\x22 found? " + window.find(text));
};
```

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" onClick='findString("Apples")'>Search for Apples</button>
<button type="button" onClick='findString("Banana")'>Search for Banana</button>
<button type="button" onClick='findString("Orange")'>Search for Orange</button>
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Notes

Dans certains navigateurs, `Window.find()` sélectionne (met en évidence) le contenu trouvé sur le site.

## Spécification

Cela ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

Cette méthode fonctionne dans de nombreux navigateurs modernes, notamment Firefox, Chrome, et Safari.
