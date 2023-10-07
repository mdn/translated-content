---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

## Resumo

A propriedade CSS `transform` permite modificar o espaço coordenado do modelo de formatação CSS. Usando-a, elementos podem ser traduzidos, rotacionados, ter seu tamanho ajustado e inclinados de acordo com os valores definidos.

{{EmbedInteractiveExample("pages/css/transform.html")}}

Se a propriedade tem um valor diferente de `none`, um contexto de empilhamento será criado. Neste caso, o objeto atuará como um bloco recipiente para `position: fixed` para os elementos que estão contidos.

## Sintaxe

```
Gramática Formal: <transform-função> [<transform-função>]* | none
```

```css
transform: none
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)
transform: translate(12px, 50%)
transform: translateX(2em)
transform: translateY(3in)
transform: scale(2, 0.5)
transform: scaleX(2)
transform: scaleY(0.5)
transform: rotate(0.5turn)
transform: skewX(30deg)
transform: skewY(1.07rad)
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0)
transform: translate3d(12px, 50%, 3em)
transform: translateZ(2px)
transform: scale3d(2.5, 1.2, 0.3)
transform: scaleZ(0.3)
transform: rotate3d(1, 2.0, 3.0, 10deg)
transform: rotateX(10deg)
transform: rotateY(10deg)
transform: rotateZ(10deg)
transform: perspective(17px)

transform: translateX(10px) rotate(10deg) translateY(5px)
```

A propriedade transform pode ser especificada com a palavra reservada `none` ou com uma das várias funções disponíveis.

Se {{cssxref("transform-function/perspective()", "perspective()")}} é uma das múltiplas funções atribuídas à transform, então ela obrigatoriamente deve ser a primeira.

### Valores

- `<transform-função>`
  - : Uma ou mais das [funções CSS transform](#funções_css_transform) para serem aplicadas, veja abaixo.
- `none`
  - : Especifica que nenhuma função transform deve ser aplicada.

## Exemplos

Veja [Using CSS transforms](/En/CSS/Using_CSS_transforms).

### Exemplo ao vivo

```css
pre {
  width: 33em;
  border: solid red;

  -webkit-transform: translate(100px) rotate(20deg);
  -webkit-transform-origin: 60% 100%;

  -o-transform: translate(100px) rotate(20deg);
  -o-transform-origin: 60% 100%;

  transform: translate(100px) rotate(20deg);
  transform-origin: 60% 100%;
}
```

## CSS transform functions

The `transform` CSS property allows the coordinate system used by an element to be manipulated using **transform functions**. These functions are described below.

### matrix

```
transform:  matrix(a, c, b, d, tx, ty)

/* Where a, b, c, d build the transformation matrix
   ┌     ┐
   │ a b │
   │ c d │
   └     ┘
   and tx, ty are the translate values.  */
```

Specifies a 2D transformation matrix comprised of the specified six values. This is the equivalent to applying the transformation **matrix \[a b c d tx ty]**.

> **Nota:** Gecko (Firefox) accepts a {{cssxref("&lt;length&gt;")}} value for **tx** and **ty**. Webkit (Safari, Chrome) and Opera currently support a unitless {{cssxref("&lt;number&gt;")}} for **tx** and **ty**.

#### Live examples

```
 background: gold;  width: 30em;

 -webkit-transform: matrix(1, -0.2, 0, 1, 0, 0);
      -o-transform: matrix(1, -0.2, 0, 1, 0, 0);
         transform: matrix(1, -0.2, 0, 1, 0, 0);
```

```
 background: wheat;
 max-width: intrinsic;

 -webkit-transform: matrix(1, 0, 0.6, 1,  250, 0);
      -o-transform: matrix(1, 0, 0.6, 1,  250, 0);
         transform: matrix(1, 0, 0.6, 1,  250, 0);
```

#### <br>See also

- [Examples of linear transformation matrices](http://en.wikipedia.org/wiki/Linear_transformation#Examples_of_linear_transformation_matrices) Wikipedia
- [Coordinate transformation matrices](http://www.mathamazement.com/Lessons/Pre-Calculus/08_Matrices-and-Determinants/coordinate-transformation-matrices.html) mathamazement.com
- [Microsoft's matrix filter](<http://msdn.microsoft.com/en-us/library/ms533014(VS.85,loband).aspx>) MSDN

### rotate

```
transform:  rotate(angle);       /* an <angle>, e.g.  rotate(30deg) */
```

Rotates the element clockwise around its origin (as specified by the {{ Cssxref("transform-origin") }} property) by the specified `angle`. The operation corresponds to the matrix **\[cos(angle) sin(angle) -sin(angle) cos(angle) 0 0]**.

### scale

```
transform:  scale(sx[, sy]);     /* one or two unitless <number>s, e.g.  scale(2.1,4) */
```

Specifies a 2D scaling operation described by **\[sx, sy]**. If `sy` isn't specified, it is assumed to be equal to `sx`.

### scaleX

```
transform:  scaleX(sx);          /* a unitless <number>, e.g.  scaleX(2.7) */
```

Specifies a scale operation using the vector **\[sx, 1]**.

### scaleY

```
transform:  scaleY(sy)           /* a unitless <number>, e.g.  scaleY(0.3) */
```

Specifies a scale operation using the vector **\[1, sy]**.

### skew

{{ non-standard_header() }}

```
transform:  skew(ax[, ay])       /* one or two <angle>s, e.g.  skew(30deg,-10deg) */
```

Skews the element around the X and Y axes by the specified angles. If `ay` isn't provided, no skew is performed on the Y axis.

> **Nota:** The `skew()` function was present in early drafts. It has been removed but is still present in some implementations. Do not use it.
>
> To achieve the same effect, use `skewX()` if you were using `skew()` with one parameter or `matrix(1, tan(ax)`_,_ `tan(ay), 1, 0, 0)` for the general way. Note that _tan()_ isn't a CSS function and you have to precalculate it yourself.

### skewX

```
transform:  skewX(angle)         /* an <angle>, e.g.  skewX(-30deg) */
```

Skews the element around the X axis by the given `angle`.

### skewY

```
transform:  skewY(angle)         /* an <angle>, e.g.  skewY(4deg) */
```

Skews the element around the Y axis by the given `angle`.

### translate

```
transform:  translate(tx[, ty])  /* one or two <length> values */
```

Specifies a 2D translation by the vector **\[tx, ty]**. If `ty` isn't specified, its value is assumed to be zero.

### translateX

```
transform:  translateX(tx)       /* see <length> for possible values */
```

Translates the element by the given amount along the X axis.

### translateY

```
transform:  translateY(ty)       /* see <length> for possible values */
```

Translates the element by the given amount along the Y axis.

## Specifications

| Specification                                                | Status                         | Comment |
| ------------------------------------------------------------ | ------------------------------ | ------- |
| {{ SpecName('CSS3 Transforms', '#transform', 'transform') }} | {{ Spec2('CSS3 Transforms') }} |         |

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Using CSS Transforms](/pt-BR/docs/CSS/Using_CSS_transforms)
- [More info](http://paulirish.com/2010/introducing-css3please/#comment-36380) on CSS3 Rotation / Matrix Filter issues in the comments on Paul Irish's blog.
- A cross-browser 2D [transform plugin for jQuery](http://plugins.jquery.com/project/jquery-transform)
