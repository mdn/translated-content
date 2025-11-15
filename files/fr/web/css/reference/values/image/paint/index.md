---
title: paint()
slug: Web/CSS/Reference/Values/image/paint
original_slug: Web/CSS/image/paint
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`paint()`** définit une valeur de type {{cssxref("&lt;image&gt;")}} générée avec un `PaintWorklet`.

## Syntaxe

```css
paint(workletName, ...parameters)
```

### Paramètres

- `workletName`
  - : Le nom du <i lang="en">worklet</i> enregistré.
- `parameters` {{optional_inline}}
  - : Des paramètres supplémentaires, optionnels, à passer à `paintWorklet`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `paint()`

A partir du HTML suivant&nbsp;:

```html live-sample___example-boxbg
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
  <li>Élément 4</li>
  <li>Élément 5</li>
  <li>Élément 6</li>
  <li>Élément 7</li>
  <li>Élément 8</li>
  <li>Élément 9</li>
  <li>Élément 10</li>
  <li>Élément N</li>
</ul>
```

Avec JavaScript, nous enregistrons le [paint worklet](/fr/docs/Web/API/PaintWorkletGlobalScope)&nbsp;:

```js live-sample___example-boxbg
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

Dans le CSS, on définit la propriété `background-image` comme un type `paint()` avec le nom du worklet, `boxbg`, ainsi que toutes les variables (par ex.&nbsp;: `--box-color` et `--width-subtractor`) que le worklet utilisera&nbsp;:

```css live-sample___example-boxbg
body {
  font: 1.2em / 1.2 sans-serif;
}
li {
  background-image: paint(boxbg);
  --box-color: hsl(55 90% 60%);
}

li:nth-of-type(3n) {
  --box-color: hsl(155 90% 60%);
  --width-subtractor: 20;
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(255 90% 60%);
  --width-subtractor: 40;
}
```

{{EmbedLiveSample("example-boxbg", "", "300px")}}

### Utilisation de `paint()` avec paramètres

Vous pouvez passer des arguments optionnels à la fonction CSS `paint()`. Dans cet exemple, nous passons deux arguments qui contrôlent si le `background-image` d'un groupe d'éléments de liste est «&nbsp;rempli&nbsp;» ou possède un contour («&nbsp;stroke&nbsp;»), ainsi que la largeur de ce contour&nbsp;:

```html hidden live-sample___example-highlight
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item N</li>
</ul>
```

```js hidden live-sample___example-highlight
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

```css live-sample___example-highlight
body {
  font: 1.2em / 1.2 sans-serif;
}

li {
  --box-color: hsl(55 90% 60% / 100%);
  background-image: paint(hollow-highlights, stroke, 2px);
}

li:nth-of-type(3n) {
  --box-color: hsl(155 90% 60% / 100%);
  background-image: paint(hollow-highlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(255 90% 60% / 100%);
  background-image: paint(hollow-highlights, stroke, 1px);
}
```

On a inclus une propriété personnalisée dans le bloc du sélecteur définissant une couleur de boîte (`boxColor`). Les propriétés personnalisées sont accessibles au PaintWorklet.

{{EmbedLiveSample("example-highlight", "", "300px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref('PaintWorkletGlobalScope')}}
- [L'API CSS Painting](/fr/docs/Web/API/CSS_Painting_API)
- [Utiliser l'API CSS Painting](/fr/docs/Web/API/CSS_Painting_API/Guide)
- {{cssxref("&lt;image&gt;")}}
- [L'API Canvas](/fr/docs/Web/API/Canvas_API)
