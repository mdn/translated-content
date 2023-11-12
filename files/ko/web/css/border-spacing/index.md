---
title: border-spacing
slug: Web/CSS/border-spacing
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`border-spacing`** 속성은 인접한 표 칸의 테두리 간격을 지정합니다. {{cssxref("border-collapse")}}가 `separate`여야 적용됩니다.

{{EmbedInteractiveExample("pages/css/border-spacing.html")}}

`border-spacing` 값은 표 전체의 테두리에도 적용되므로, 표 테두리와 첫 번째 및 마지막 행/열에 속하는 칸 사이 거리는 (가로/세로) `border-spacing` 값과 표에 적용한 (상/우/하/좌) {{cssxref("padding")}} 값의 합이 됩니다.

> **참고:** `border-spacing` 속성은 {{htmlelement("table")}}에서 이제 사용하지 않는 `cellspacing` 특성에 대응하지만, 추가로 두 번째 값을 지정해 가로와 세로 값을 각각 설정할 수 있다는 차이점이 있습니다.

## 구문

```
/* <length> */
border-spacing: 2px;

/* 가로 <length> | 세로 <length> */
border-spacing: 1cm 2em;

/* 전역 값 */
border-spacing: inherit;
border-spacing: initial;
border-spacing: unset;
```

`border-spacing` 값은 하나 또는 두 개의 값을 사용해 지정합니다.

- **한 개**의 `<length>` 값을 지정하면 칸 사이의 가로와 세로 두 간격 모두 설정합니다.
- 두 개의 `<length>` 값을 지정하면, 첫 번째 값은 칸 사이의 가로 간격(각 열의 간격), 두 번째 값은 칸 사이의 세로 간격(각 행의 간격)을 설정합니다.

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 간격의 크기로 지정할 길이입니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 칸 간격과 안쪽 여백

다음 예제는 칸 사이에 세로 간격 `0.5em`과 가로 간격 `1em`을 배치합니다. 표의 테두리를 따라가면서, `padding` 값이 `border-spacing`과 어떻게 작용하는지 살펴보세요.

#### HTML

```html
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
  <tr>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}
```

#### 결과

{{ EmbedLiveSample('예제', 400, 200) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("border-collapse")}}, {{cssxref("border-style")}}
- `border-spacing` 속성은 {{htmlelement("table")}} HTML 요소의 외관을 수정합니다.
