---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - Propriedades CSS
  - Referencia
translation_of: Web/CSS/vertical-align
---
{{CSSRef}}

A propriedade **`vertical-align`** do [CSS](/pt-BR/docs/Web/CSS) especifica o alinhamento vertical de um inline ou caixa table-cell.

```css
/* keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
```

A propriedade vertical-align pode ser usada em dois contextos:

- Para alinhar verticalmente uma caixa de elementos inline dentro dentro de sua caixa de linha. Por exemplo, poderia ser usado para alinhar verticalmente um {{HTMLElement("img")}} em uma linha de texto:

```html hidden
<p>
top:<img style="vertical-align:top" src="https://mdn.mozillademos.org/files/15189/star.png"/>
middle:<img style="vertical-align:middle" src="https://mdn.mozillademos.org/files/15189/star.png"/>
bottom:<img style="vertical-align:bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>
super:<img style="vertical-align:super" src="https://mdn.mozillademos.org/files/15189/star.png"/>
sub:<img style="vertical-align:sub" src="https://mdn.mozillademos.org/files/15189/star.png"/>
</p>
<p>
text-top:<img style="vertical-align:text-top" src="https://mdn.mozillademos.org/files/15189/star.png"/>
text-bottom:<img  style="vertical-align:text-bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>
0.2em:<img style="vertical-align:0.2em" src="https://mdn.mozillademos.org/files/15189/star.png"/>
-1em:<img  style="vertical-align:-1em" src="https://mdn.mozillademos.org/files/15189/star.png"/>
20%:<img style="vertical-align:20%" src="https://mdn.mozillademos.org/files/15189/star.png"/>
-100%:<img  style="vertical-align:-100%" src="https://mdn.mozillademos.org/files/15189/star.png"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 .5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

{{EmbedLiveSample("vertical-align-inline", 1200, 160)}}

- Para alinhar verticalmente o conteudo de uma celula em uma tabela:

```html hidden
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.</p>
<p>There is another theory which states that this has already happened.</p>
    </td>
  </tr>
</table>
```

```css hidden
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table, th, td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

{{EmbedLiveSample("vertical-align-table", 1200, 230)}}

Observe que `vertical-align` é aplicado apenas em elementos inline e table-cell: Você não pode usar isso para alinhar verticalmente elementos de nível de bloco.

{{cssinfo}}

## Sintaxe

This property is specified as one of the keyword values listed below.

### Valores para elementos inline

_Most of the values vertically align the element relative to its parent element:
Essas propriedades alinham verticalmente o elemento relativamente a seu elemento pai_

- `baseline`
  - : Aligns the baseline of the element with the baseline of its parent. The baseline of some [replaced elements](/pt-BR/docs/Web/CSS/Replaced_element), like {{HTMLElement("textarea")}}, is not specified by the HTML specification, meaning that their behavior with this keyword may change from one browser to the other.
- `sub`
  - : Aligns the baseline of the element with the subscript-baseline of its parent.
- `super`
  - : Aligns the baseline of the element with the superscript-baseline of its parent.
- `text-top`
  - : Aligns the top of the element with the top of the parent element's font.
- `text-bottom`
  - : Aligns the bottom of the element with the bottom of the parent element's font.
- `middle`
  - : Aligns the middle of the element with the baseline plus half the x-height of the parent.
- {{cssxref("&lt;length&gt;")}}
  - : Aligns the baseline of the element at the given length above the baseline of its parent.
- {{cssxref("&lt;percentage&gt;")}}
  - : Like \<length> values, with the percentage being a percent of the {{Cssxref("line-height")}} property.

(Negative values are allowed for \<length> and \<percentage>.)

_The following two values vertically align the element relative to the entire line rather than relative to its parent:_

- `top`
  - : Align the top of the element and its descendants with the top of the entire line.
- `bottom`
  - : Align the bottom of the element and its descendants with the bottom of the entire line.

For elements that do not have a baseline, the bottom margin edge is used instead.

### Values (for table cells)

- `baseline` (and `sub`, `super`, `text-top`, `text-bottom`, `<length>`, and `<percentage>`)
  - : Align the baseline of the cell with the baseline of all other cells in the row that are baseline-aligned.
- `top`
  - : Align the top padding edge of the cell with the top of the row.
- `middle`
  - : Center the padding box of the cell within the row.
- `bottom`
  - : Align the bottom padding edge of the cell with the bottom of the row.

Negative values are allowed.

### Formal syntax

{{csssyntax}}

## Exemplo

### HTML

```html
<div>An <img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a default alignment.</div>
<div>An <img class="top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a text-top alignment.</div>
<div>An <img class="bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a text-bottom alignment.</div>
<div>An <img class="middle" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a middle alignment.</div>
```

### CSS

```css
img.top { vertical-align: text-top; }
img.bottom { vertical-align: text-bottom; }
img.middle { vertical-align: middle; }
```

### Output

{{EmbedLiveSample("Example")}}

## Especificações

| Specification                                                                                            | Status                                   | Comment                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'vertical-align')}}             | {{Spec2('CSS3 Transitions')}} | Defines `vertical-align` as animatable.                                                                                                                 |
| {{SpecName('CSS2.1', 'visudet.html#propdef-vertical-align', 'vertical-align')}} | {{Spec2('CSS2.1')}}                 | Add the {{cssxref("&lt;length&gt;")}} value and allows it to be applied to element with a {{cssxref("display")}} type of `table-cell`. |
| {{SpecName('CSS1', '#vertical-align', 'vertical-align')}}                             | {{Spec2('CSS1')}}                 | Initial definition                                                                                                                                      |

## Compatibilidade com navegadores

{{Compat("css.properties.vertical-align")}}

## Veja também

- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [All You Need To Know About Vertical-Align](http://christopheraue.net/2014/03/05/vertical-align/)
