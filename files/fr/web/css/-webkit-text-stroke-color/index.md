---
title: '-webkit-text-stroke-color'
slug: Web/CSS/-webkit-text-stroke-color
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-text-stroke-color
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-text-stroke-color`** permet de définir la couleur de la ligne utilisée pour le contour du text. Si cette propriété n'est pas définie, c'est la valeur de {{cssxref("color")}} qui sera utilisée.

```css
/* Valeurs de couleur */
/* Type <color>       */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200, 100, 0);

/* Valeurs globales */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: unset;
```

{{cssinfo}}

## Syntaxe

### Valeurs

- `<color>`
  - : La couleur du contour pour les lettres.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>Texte avec un contour</p>
<input type="color" value="#ff0000">
```

### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff0000;
  /* Cette valeur peut être modifiée */
}
```

```js hidden
var colorPicker = document.querySelector("input");
colorPicker.addEventListener("change", function(evt) {
  document.querySelector("p").style.webkitTextStrokeColor = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "500px", "100px")}}

## Spécifications

| Spécification                                                                                                                                                                                                                                                      | État                                        | Commentaires                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------------------------------- |
| {{SpecName('Compat', '#the-webkit-text-stroke-color', '-webkit-text-stroke-color')}}                                                                                                                                                   | {{Spec2('Compat')}}                    | Définition initiale dans un standard. |
| [Référence CSS Safari -webkit-text-stroke-color dans ce document.](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266--webkit-text-stroke-color) | Documentation non-officielle, non-standard. | Documentation initiale.               |

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-text-stroke-color")}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité (en anglais)](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks à propos de cette fonctionnalité (en anglais)](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-fill-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
