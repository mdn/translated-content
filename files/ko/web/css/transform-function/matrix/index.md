---
title: matrix()
slug: Web/CSS/transform-function/matrix
---

{{CSSRef}}

**`matrix()`** [CSS](/ko/docs/Web/CSS) 함수는 2D 변형 동차 행렬을 선언합니다. 결과는 {{cssxref("&lt;transform-function&gt;")}} 데이터 타입입니다.

> **참고:** **주의:** `matrix(a, b, c, d, tx, ty)` 는 `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)` 를 짧게 쓴 것입니다.

## Syntax

`matrix()` 함수는 6개의 값을 지정합니다. 상수 값은 묵시적이며, 매개변수(parameter)로 전달하지 않습니다. 다른 매개 변수는 column-major 순서로 설명됩니다.

> **참고:** **주의:** 파이어폭스 16까지, Gecko(엔진) `tx`, `ty` 에{{cssxref("&lt;length&gt;")}} 값을 허용했습니다.

```
matrix(a, b, c, d, tx, ty)
```

### Values

- `a` `b` `c` `d`
  - : {{cssxref("&lt;number&gt;")}}는 선형 변환(linear transformation)을 설명합니다.
- `tx` `ty`
  - : {{cssxref("&lt;number&gt;")}}는 적용 할 이동(translation)을 설명합니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ<sup>2</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>2</sup></th>
      <th scope="col">Cartesian coordinates on ℝ<sup>3</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd></mtr>
              <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

## Examples

### HTML

```html
<div>Normal</div>
<div class="changed">Changed</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### Result

{{EmbedLiveSample("Examples", 350, 350)}}

## Browser compatibility

호환성 정보는 [`<transform-function>`](/ko/docs/Web/CSS/transform-function#Browser_compatibility) 데이터 타입을 확인하세요.

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`matrix3d()`](/ko/docs/Web/CSS/transform-function/matrix3d)
- [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
