---
title: mask-type
slug: Web/CSS/mask-type
translation_of: Web/CSS/mask-type
---
{{CSSRef}}

La propriété **`mask-type`** définit si un masque sera utilisé comme un masque de _luminance_ ou comme un masque de transparence (aussi appelé masque _alpha_). Cette propriété s'applique sur l'élément SVG {{SVGElement("mask")}}. Le comportement de cette propriété peut être surchargée par la propriété {{cssxref("mask-mode")}} qui définit sur quel élément le masque est appliqué. De façon générale, les masques alpha sont appliqués plus rapidement que les masques de luminance.

```css
/* Valeurs avec un mot-clé */
mask-type: luminance;
mask-type: alpha;

/* Valeurs globales */
mask-type: inherit;
mask-type: initial;
mask-type: unset;
```

## Syntaxe

La propriété `mask-type` est définie avec un mot-clé parmi ceux définis ci-après.

### Valeurs

- `luminance`
  - : Un mot-clé qui indique que l'image du masque doit être utilisée comme un masque de luminance. Autrement dit, ce sont [les valeurs de luminance relatives](https://fr.wikipedia.org/wiki/Luminance_relative) qui seront utilisées lorsque le masque sera appliqué.
- `alpha`
  - : Un mot-clé qui indique que l'image du masque doit être utilisée comme un masque de transparence. Autrement dit, ce sont les valeurs du [canal alpha](https://fr.wikipedia.org/wiki/Canal_alpha) de l'image qui seront utilisées lorsque le masque sera appliqué.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir un masque alpha

#### HTML

```html
<div class="redsquare"></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:alpha">
      <rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/>
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### Résultat

{{EmbedLiveSample('Définir_un_masque_alpha', '100%', '102')}}

### Définir un masque de luminance

#### HTML

```html
<div class="redsquare"></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:luminance">
      <rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/>
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### Result

{{EmbedLiveSample('Définir_un_masque_de_luminance', '100%', '102')}}

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('CSS Masks', '#the-mask-type', 'mask-type')}} | {{Spec2('CSS Masks')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-type")}}

## Voir aussi

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
