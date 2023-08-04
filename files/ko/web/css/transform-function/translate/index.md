---
title: translate()
slug: Web/CSS/transform-function/translate
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

**`translate()`** [CSS](/ko/docs/Web/CSS) [함수](/ko/docs/Web/CSS/CSS_Functions) 는 요소의 위치를 수평 또는 수직 방향으로 변경하거나, 수평 및 수직 방향으로 변경합니다.
실행 결과로 {{cssxref("&lt;transform-function&gt;")}} 데이터 유형을 반환합니다.

{{EmbedInteractiveExample("pages/css/function-translate.html")}}

이 변환은 2차원 벡터의 특징을 가집니다. 벡터의 좌표들은 요소가 각 방향으로 얼마나 이동하는지를 정의합니다.

## 구문

```css
/* 단일 <length-percentage> 값 */
transform: translate(200px);
transform: translate(50%);

/* 이중 <length-percentage> 값 */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### 값

- 단일 `<length-percentage>` 값
  - 이 값은 변환하는 벡터의 가로축(수평, x축)을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}} 입니다.
    변환하는 벡터의 세로축(수직, y축)은 `0`으로 설정됩니다. 예를 들어, `translate(2px)`은 `translate(2px, 0)`과 동일합니다.
    백분율 값은 {{cssxref("transform-box")}} 속성에 의해 정의된 참조 상자의 너비를 나타냅니다.
- 이중 `<length-percentage>` 값
  - 이 값은 변환하는 벡터의 가로축(수평, x축)과 세로축(수직, y축)을 모두 나타내는 두 개의
    {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}} 를 설명합니다.
    백분율 값의 첫 번째는 {{cssxref("transform-box")}} 속성에 의해 정의된 참조 상자의 너비를 나타내며, 두 번째는 높이를 나타냅니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">ℝ^2의 데카르트 좌표(Cartesian coordinates)</th>
      <th scope="col">ℝℙ^2의 동차좌표(Homogeneous coordinates)</th>
      <th scope="col">ℝ^3의 데카르트 좌표(Cartesian coordinates)</th>
      <th scope="col">ℝℙ^3의 동차좌표(Homogeneous coordinates)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <p>
          변환은 ℝ^2의 선형 변환이 아니며,
          데카르트 좌표 행렬을 사용해 나타낼 수 없습니다.
        </p>
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

### 형식 구문

```css
translate({{cssxref("&lt;length-percentage&gt;")}}, {{cssxref("&lt;length-percentage&gt;")}}?)
```

## 예제

### 단일 축 변환

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* translateX(10px) 또는 translate(10px, 0)과 동일 */
  transform: translate(10px);
  background-color: pink;
}
```

#### 결과

{{EmbedLiveSample("단일_축_변환", 250, 250)}}

### x축과 y축 변환

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### 결과

{{EmbedLiveSample("x축과_y축_변환", 250, 250)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
