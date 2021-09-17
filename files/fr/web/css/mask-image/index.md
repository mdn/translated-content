---
title: mask-image
slug: Web/CSS/mask-image
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-image
---
{{CSSRef}}

La propriété CSS **`mask-image`** définit l'image qui sera utilisée comme masque pour un élément.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-image: none;

/* Valeur de type <mask-source> */
mask-image: url(masks.svg#mask1);

/* Valeurs de type <image> */
mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
mask-image: image(url(mask.png), skyblue);

/* Gestion de plusieurs masques */
mask-image: image(url(mask.png), skyblue, linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* Valeurs globales */
mask-image: inherit;
mask-image: initial;
mask-image: unset;
```

### Valeurs

- `none`
  - : Le masque défini par ce mot-clé sera une image noire transparente.
- `<mask-source>`
  - : Une référence {{cssxref("&lt;url&gt;")}} vers un masque ({{SVGElement("mask")}}) ou une image CSS.
- {{cssxref("&lt;image&gt;")}}
  - : Une image utilisée pour le masque.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
}
```

### HTML

```html
<div id="masked"></div>
```

{{EmbedLiveSample("Exemples", "100px", "100px",'', '', 'hide-codepen-jsfiddle') }}

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#the-mask-image", "mask-image")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-image")}}
