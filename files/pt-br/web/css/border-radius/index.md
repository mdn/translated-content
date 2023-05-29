---
title: border-radius
slug: Web/CSS/border-radius
---

{{CSSRef}}

## Sumário

A propriedade CSS **border-radius** permite definir como bordas arredondadas são. A curva de cada esquina é definida usando um ou dois raios, definindo sua forma: círculo ou elipse.

![Imagens das esquinas arredondadas com CSS3: Sem esquina arredondada, arredondado usando um arco de círculo, arredondado usando um arco de elípse](/files/13813/border-radius-sh.png)

O raio é aplicável a todo o {{Cssxref("background")}}, mesmo se o elemento não tiver borda; a posição exata do recorte é definido pela propriedade {{Cssxref("background-clip")}}.

Esta propriedade é um [shorthand](/pt-BR/docs/Web/CSS/Shorthand_properties) para definir as quatro propriedades {{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}} e {{Cssxref("border-bottom-left-radius")}}.

> **Nota:** Como com qualquer propriedade shorthand, valores individuais herdados não são possíveis, isto é, border-radius: 0 0 inherit inherit, que substituiria definições parciais existentes. Neste caso, a propriedade individual longhand deve ser usada.

{{cssinfo}}

## Sintaxe

```css
/* A sintaxe do primeiro raio permite de um a quatro valores */
/* O raio é definido para todos os 4 lados */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* A sintaxe do segundo raio permite de um a quatro valores */
/* (first radius values) / radius */
border-radius: 10px 5% / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

border-radius: inherit;
```

### Valores

| _radius_                    | ![all-corner.png](/@api/deki/files/6138/=all-corner.png)                       | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in each corner of the border. It is used only in the one-value syntax.                                               |
| --------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _top-left-and-bottom-right_ | ![top-left-bottom-right.png](/@api/deki/files/6141/=top-left-bottom-right.png) | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in the top-left and bottom-right corners of the element's box. It is used only in the two-value syntax.              |
| _top-right-and-bottom-left_ | ![top-right-bottom-left.png](/@api/deki/files/6143/=top-right-bottom-left.png) | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in the top-right and bottom-left corners of the element's box. It is used only in the two- and three-value syntaxes. |
| _top-left_                  | ![top-left.png](/@api/deki/files/6142/=top-left.png)                           | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in the top-left corner of the element's box. It is used only in the three- and four-value syntaxes.                  |
| _top-right_                 | ![top-right.png](/@api/deki/files/6144/=top-right.png)                         | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in the top-right corner of the element's box. It is used only in the four-value syntax.                              |
| _bottom-right_              | ![bottom-rigth.png](/@api/deki/files/6140/=bottom-rigth.png)                   | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in the bottom-right corner of the element's box. It is used only in the three- and four-value syntaxes.              |
| _bottom-left_               | ![bottom-left.png](/@api/deki/files/6139/=bottom-left.png)                     | Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting a radius to use for the border in the bottom-left corner of the element's box. It is used only in the four-value syntax.                            |
| `inherit`                   |                                                                                | Is a keyword indicating that all four values are inherited from their parent's element calculated value.                                                                                                                                                     |

- `<length>`
  - : Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis. It can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data types. Negative values are invalid.
- `<percentage>`
  - : Denotes the size of the circle radius, or the semi-major and semi-minor axes of the ellipsis, using percentage values. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.

For example:

```css
border-radius: 1em/5em;

/* is equivalent to */

border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* is equivalent to: */

border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

### Sintaxe formal

{{csssyntax}}

## Examples

```
  border: solid 10px;
  /* the border will curve into a 'D' */
  border-radius: 10px 40px 40px 10px;
```

```
  border: groove 1em red;
  border-radius: 2em;
```

```
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
```

```
  border: none;
  border-radius: 40px 10px;
```

```
  border: none;
  border-radius: 50%;
```

## Live Samples

Sample 1 : <http://jsfiddle.net/Tripad/qnGKj/2/>

Sample 2 : <http://jsfiddle.net/Tripad/qnGKj/3/>

Sample 3 : <http://jsfiddle.net/Tripad/qnGKj/4/>

Sample 4 : <http://jsfiddle.net/Tripad/qnGKj/5/>

Sample 5 : <http://jsfiddle.net/Tripad/qnGKj/6/>

## Notas

- Prior to Firefox 50, dotted and dashed rounded border corners were rendered as solid; see {{bug("382721")}}.
- `border-radius` does not apply to table elements when {{Cssxref("border-collapse")}} is `collapse`.
- Old versions of WebKit handle multiple values differently, see below.

## Especificações

| Specification                                                                            | Status                                   | Comment            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-radius', 'border-radius')}} | {{Spec2('CSS3 Backgrounds')}} | Initial definition |

## Compatibilidade

{{Compat("css.properties.border-radius")}}

## Veja também

- Border-radius-related CSS properties: {{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}}, {{Cssxref("border-bottom-left-radius")}}
