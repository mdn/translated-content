---
title: scaleX()
slug: Web/CSS/transform-function/scaleX
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) 함수인 **`scaleX()`** x 축을 따라 (수평방향)으로 요소의 크기를 조절하는 변형을 정의합니다. 결과는 {{cssxref("&lt;transform-function&gt;")}} 데이터 타입 입니다.

![](scalex.png)

스케일 팩터가 1 인 경우를 제외하고 상수 요소로 각 엘리먼트 위치의 가로 좌표를 수정합니다, 이 경우 함수는 항등 변환입니다.스케일링은 등방성이 아니며, 엘리먼트의 각도는 보존되지 않습니다.`scaleX(-1)` 은 원점을 지나는 수직축이 있는 [대칭축](http://en.wikipedia.org/wiki/Axial_symmetry)을 의미합니다 ( {{cssxref("transform-origin")}} 속성의해 지정되어집니다).

> **참고:** `scaleX(sx)` 는 `scale(sx, 1)` 또는 `scale3d(sx, 1, 1)` 와 같습니다.

## Syntax

```
scaleX(s)
```

### Values

- `s`
  - : 요소의 각 위치의 횡좌표에 적용 할 스케일링 펙터를 나타내는 {{cssxref("&lt;number&gt;")}} 입니다.

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
              ><mtr><mtd>s</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Examples

### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scaleX(0.6);
  background-color: pink;
}
```

### Result

{{EmbedLiveSample("Examples","200","200")}}

## 명세서

{{Specifications}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
