---
title: paint()
slug: Web/CSS/image/paint
---

{{CSSRef}}{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`paint()`** définit une valeur de type [`image`](/fr/docs/Web/CSS/image) générée avec un `PaintWorklet`.

## Syntaxe

```css
paint(nomWorklet, parametres)
```

### Paramètres

- `nomWorklet`
  - : Le nom du <i lang="en">worklet</i> enregistré.
- `paramètres`
  - : Des paramètres supplémentaires, optionnels, à passer à `paintWorklet`.

## Exemples

### Utilisation simple

Il est possible de passer des arguments supplémentaires grâce à la fonction CSS `paint()`. Dans cet exemple, on passe deux arguments&nbsp;: le premier indiquant si l'image passée en arrière-plan est pleine ou constitue uniquement un contour, le second indiquant la largeur du contour ainsi formé.

```html hidden
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
  <li>Élément 11</li>
  <li>Élément 12</li>
  <li>Élément 13</li>
  <li>Élément 14</li>
  <li>Élément 15</li>
  <li>Élément 16</li>
  <li>Élément 17</li>
  <li>Élément 18</li>
  <li>Élément 19</li>
  <li>Élément 20</li>
</ul>
```

```js hidden
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

```css
li {
  --boxColor: hsla(55, 90%, 60%, 1);
  background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
  --boxColor: hsla(155, 90%, 60%, 1);
  background-image: paint(hollowHighlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --boxColor: hsla(255, 90%, 60%, 1);
  background-image: paint(hollowHighlights, stroke, 1px);
}
```

On a ajouté une propriété personnalisée dans le sélecteur pour définir `boxColor`. Cette propriété personnalisée est accessible depuis l'objet `PaintWorklet`.

{{EmbedLiveSample("", 300, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`PaintWorklet`](/fr/docs/Web/API/PaintWorklet)
- [L'API `CSS Painting`](/fr/docs/Web/API/CSS_Painting_API)
- [Utiliser l'API CSS Painting](/fr/docs/Web/API/CSS_Painting_API/Guide)
- [`<image>`](/fr/docs/Web/CSS/image)
- [`canvas`](/fr/docs/Web/API/canvas)
