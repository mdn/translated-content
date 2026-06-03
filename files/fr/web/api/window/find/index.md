---
title: "Window : méthode find()"
short-title: find()
slug: Web/API/Window/find
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}{{Non-standard_Header}}

> [!NOTE]
> La prise en charge de `Window.find()` pourrait changer dans les futures versions de Gecko. Voir [le bogue Firefox 672395 <sup>(angl.)</sup>](https://bugzil.la/672395).

La méthode **`find()`** de l'interface {{DOMxRef("Window")}} recherche une chaîne de caractères dans une fenêtre de manière séquentielle.

## Syntaxe

```js-nolint
find(string, caseSensitive, backwards, wrapAround, wholeWord, searchInFrames, showDialog)
```

### Paramètres

- `string`
  - : La chaîne de caractères à rechercher.
- `caseSensitive`
  - : Une valeur booléenne. Si `true`, définit une recherche sensible à la casse.
- `backwards`
  - : Une valeur booléenne. Si `true`, définit une recherche vers l'arrière.
- `wrapAround`
  - : Une valeur booléenne. Si `true`, définit une recherche circulaire.
- `wholeWord`
  - : Une valeur booléenne. Si `true`, définit une recherche de mot entier.
- `searchInFrames`
  - : Une valeur booléenne. Si `true`, définit une recherche dans les cadres.
- `showDialog`
  - : Une valeur booléenne. Si `true`, affiche une boîte de dialogue de recherche.

### Valeur de retour

`true` si la chaîne de caractères est trouvée&nbsp;; sinon `false`.

## Exemples

### HTML

```html
<p>Pommes, Bananes et Oranges.</p>
<button type="button" id="find-apples">Rechercher des Pommes</button>
<button type="button" id="find-bananas">Rechercher des Bananes</button>
<button type="button" id="find-orange">Rechercher des Oranges</button>
<p id="output"></p>
```

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent =
    `Chaîne de caractères trouvée ? ${window.find(text)}`;
}

document.getElementById("find-apples").addEventListener("click", () => {
  findString("Pommes");
});
document.getElementById("find-bananas").addEventListener("click", () => {
  findString("Bananes");
});
document.getElementById("find-orange").addEventListener("click", () => {
  findString("Oranges");
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Notes

Dans certains navigateurs, `Window.find()` sélectionne (met en évidence) le contenu trouvé sur le site.

## Spécifications

Cela ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
