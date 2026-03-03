---
title: -webkit-text-stroke-color
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`-webkit-text-stroke-color`** définit la [couleur](/fr/docs/Web/CSS/Reference/Values/color_value) du contour des caractères du texte. Si cette propriété n'est pas définie, la valeur de la propriété {{CSSxRef("color")}} est utilisée.

## Syntaxe

```css
/* Valeurs de largeur et de couleur */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200 100 0);

/* Valeurs globales */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: revert;
-webkit-text-stroke-color: revert-layer;
-webkit-text-stroke-color: unset;
```

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur du contour.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajouter un contour rouge au texte

#### HTML

```html
<p>Un texte avec un bordure</p>
<input type="color" value="#ff0000" />
```

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke: 2px red; /* Can be changed in the live sample */
}
```

```js hidden
const colorPicker = document.querySelector("input");
colorPicker.addEventListener("change", (evt) => {
  document.querySelector("p").style.webkitTextStrokeColor = evt.target.value;
});
```

#### Résultat

{{EmbedLiveSample("Ajouter un contour rouge au texte", 500, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité <sup>(angl.)</sup>](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks décrivant cette fonctionnalité <sup>(angl.)</sup>](https://css-tricks.com/adding-stroke-to-web-text/)
- La propriété {{CSSxRef("-webkit-text-fill-color")}}
- La propriété {{CSSxRef("-webkit-text-stroke-width")}}
- La propriété {{CSSxRef("-webkit-text-stroke")}}
