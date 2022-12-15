---
title: background-position
slug: Web/CSS/background-position
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`background-position`** define a posição inicial, relativa a posição de fundo na camada definido por {{cssxref("background-origin")}}, para cada background image definido.

{{EmbedInteractiveExample("pages/css/background-position.html")}}

## Sintaxe

```css
/* Valores chave */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* Valores <percentuais> */
background-position: 25% 75%;

/* valores <espessura> */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiplas imagens */
background-position: 0 0, center;

/* Valores de cantos relativos */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Valores globais */
background-position: inherit;
background-position: initial;
background-position: unset;
```

A propriedade `background-position` é especificada como um determinado numero de valores de [`<position>`](#position) , separados por espaços.

### Values

- `<position>`

  - : A {{cssxref("&lt;position&gt;")}}. A position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one or two values. If two values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be `center`.

    **1-value syntax:** the value may be:

    - The keyword value `center`, which centers the image.
    - One of the keyword values `top`, `left`, `bottom`, `right`. This specifies an edge against which to place the item. The other dimension is then set to 50%, so the item is placed in the middle of the edge specified.
    - A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}. This specifies the X coordinate relative to the left edge, with the Y coordinate set to 50%.

    **2-value syntax:** one value defines X and the other defines Y. Each value may be:

    - One of the keyword values `top`, `left`, `bottom`, `right`. If `left` or `right` are given here, then this defines X and the other given value defines Y. If `top` or `bottom` are given, then this defines Y and the other value defines X.
    - A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}. If the other value is `left` or `right`, then this value defines Y, relative to the top edge. If the other value is `top` or `bottom`, then this value defines X, relative to the left edge. If both values are `<length>` or `<percentage>` values, then the first defines X and the second Y.

    Note that:

    - If one value is `top` or `bottom`, then the other value may not be `top` or `bottom`.
    - If one value is `left` or `right`, then the other value may not be `left` or `right`.

    This means, e.g., that `top top` and `left right` are not valid.

### Formal syntax

{{csssyntax}}

## Examples

Each of these three examples uses the {{cssxref("background")}} property to create a yellow, rectangular element containing a star image. In each example, the star is in a different position. The third example illustrates how to specify positions for two different background images within one element.

### HTML

```html
<div class="exampleone">Example One</div>
<div class="exampletwo">Example Two</div>
<div class="examplethree">Example Three</div>
```

### CSS

```css
/* Shared among all <div>s */
div {
  background-color: #FFEE99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* These examples use the `background` shorthand property */
.exampleone {
  background: url("startransparent.gif") #FFEE99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #FFEE99 3em 50% no-repeat;
}

/* Multiple background images: Each image is matched with the
   corresponding position, from first specified to last. */
.examplethree {
  background-image:    url("startransparent.gif"),
                       url("catfront.png");
  background-position: 0px 0px,
                       center;
}
```

### Result

{{EmbedLiveSample('Examples', 420, 200)}}

## Specifications

| Specification                                                                                                        | Status                                   | Comment                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#background-position', 'background-position')}}             | {{Spec2('CSS3 Backgrounds')}} | Adds support for multiple backgrounds and the four-value syntax. Modifies the percentage definition to match implementations.               |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-position', 'background-position')}} | {{Spec2('CSS2.1')}}                 | Allows for keyword values and {{cssxref("&lt;length&gt;")}} and {{cssxref("&lt;percentage&gt;")}} values to be mixed. |
| {{SpecName('CSS1', '#background-position', 'background-position')}}                             | {{Spec2('CSS1')}}                 | Initial definition.                                                                                                                         |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.background-position")}}

### Quantum CSS notes

- Gecko has a bug meaning that `background-position` can't be {{cssxref("transition","transitioned")}} between two values containing different numbers of {{cssxref("&lt;position&gt;")}} values, for example `background-position: 10px 10px;` and `background-position: 20px 20px, 30px 30px;` (see {{bug(1390446)}}). Firefox's new parallel CSS engine (also known as [Quantum CSS](https://wiki.mozilla.org/Quantum) or [Stylo](https://wiki.mozilla.org/Quantum/Stylo), planned for release in Firefox 57) fixes this.

## See also

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Using multiple backgrounds](/pt-BR/docs/CSS/Multiple_backgrounds)
- {{cssxref("transform-origin")}}
