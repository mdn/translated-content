---
title: border-color
slug: Web/CSS/border-color
---

{{CSSRef}}

**`border-color`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 모든 면의 테두리 색상을 설정합니다.

{{EmbedInteractiveExample("pages/css/border-color.html")}}

각 면 테두리의 색상은 {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}를 사용해 정할 수 있습니다. 아니면 쓰기 방향에 따라 달라지는 속성인 {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end-color")}}을 사용할 수도 있습니다.

테두리 색상에 대해 더 알아보려면 [CSS로 HTML 요소에 색 입히기](/ko/docs/Web/HTML/Applying_color#테두리) 문서를 참고하세요.

## 구문

```css
/* <color> 값 */
border-color: red;

/* 세로방향 | 가로방향 */
border-color: red #f015ca;

/* 위 | 가로방향 | 아래 */
border-color: red rgb(240, 30, 50, 0.7) green;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-color: red yellow green blue;

/* 전역 값 */
border-color: inherit;
border-color: initial;
border-color: unset;
```

`border-color` 속성은 한 개에서 네 개의 값을 사용해서 지정할 수 있습니다.

- **한 개**의 값을 사용하면 모든 네 면에 동일한 색상을 적용합니다.
- **두 개**의 값을 사용하면 첫 번째 값이 위아래, 두 번째 값이 좌우의 색상을 맡습니다.
- **세 개**의 값을 사용하면 첫 번째 값이 위, 두 번째 값이 좌우, 세 번째 값이 아래의 색상을 맡습니다.
- **네 개**의 값을 사용하면 각각 순서대로 위, 오른쪽, 아래, 왼쪽(시계방향) 순서로 색상을 적용합니다.

### 값

- {{cssxref("&lt;color&gt;")}}
  - : 테두리의 색상.

### 형식 구문

{{csssyntax}}

## 예제

### `border-color`의 모든 사용법

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code>는 아래와 같습니다.</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code>는 아래와 같습니다.</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code>는 아래와 같습니다.</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code>는 아래와 같습니다.</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### 결과

{{EmbedLiveSample('border-color의_모든_사용법', 600, 300)}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 색상 관련 CSS 속성: {{Cssxref("border")}}, {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}
- 다른 테두리 관련 CSS 속성: {{Cssxref("border-width")}}, {{Cssxref("border-style")}}
- {{cssxref("&lt;color&gt;")}} 자료형
- 다른 색상 관련 속성: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- [CSS로 HTML 요소에 색 입히기](/ko/docs/Web/HTML/Applying_color#테두리)
