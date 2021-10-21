---
title: mask-position
slug: Web/CSS/mask-position
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-position
---
{{CSSRef}}

La propriété **`mask-position`** indique la position initiale pour chaque image de masque utilisée. Cette position est relative à l'origine définie via la propriété {{cssxref("mask-origin")}}.

```css
/* Valeurs avec un mot-clé */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/*  Valeurs en pourcentage */
/* Type <percentage>       */
mask-position: 25% 75%;

/* Valeurs en longueur */
/* Type <length>       */
mask-position: 0px 0px;
mask-position: 1cm 2cm;
mask-position: 10ch 8em;

/* Valeurs multiples */
mask-position: 0px 0px, center;

/* Valeurs globales */
mask-position: inherit;
mask-position: initial;
mask-position: unset;
```

## Syntaxe

### Valeurs

- `<position>`
  - : Une position CSS (type {{cssxref("&lt;position&gt;")}}) qui représente une position par rapport aux côtés de la boîte de l'élément. Les décalages indiqués peuvent être relatifs ou absolus. On notera que la position obtenue peut être située en dehors de la boîte de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#wrapper {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

#masked {
  width: 250px;
  height: 250px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-repeat: no-repeat;
  mask-position: top right; /* Can be changed in the live sample */
  margin-bottom: 10px;
}
```

```html hidden
<div id="wrapper">
  <div id="masked">
  </div>
</div>
<select id="maskPosition">
  <option value="top">top</option>
  <option value="center">center</option>
  <option value="bottom">bottom</option>
  <option value="top right" selected>top right</option>
  <option value="center center">center center</option>
  <option value="bottom left">bottom left</option>
  <option value="10px 20px">10px 20px</option>
  <option value="60% 20%">60% 20%</option>
</select>
```

```js hidden
var maskPosition = document.getElementById("maskPosition");
maskPosition.addEventListener("change", function (evt) {
  document.getElementById("masked").style.maskPosition = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples",200,200)}}

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#the-mask-position", "mask-position")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-position")}}
