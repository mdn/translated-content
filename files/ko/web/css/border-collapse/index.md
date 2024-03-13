---
title: border-collapse
slug: Web/CSS/border-collapse
---

{{CSSRef}}

**`border-collapse`** CSS 속성은 표 테두리(border)가 분리(separated) 또는 상쇄(collapsed)될 지를 결정합니다. 분리 모델에서는, 인접한 셀은 각각 자신의 고유(distinct) 테두리가 있습니다. 상쇄 모델에서는, 인접한 표 셀은 테두리를 공유합니다.

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

분리(_separated_) 모델은 HTML 표 테두리 전통 모델입니다. 인접 셀은 각각 자신의 고유 테두리가 있습니다. 그 사이의 간격은 {{ Cssxref("border-spacing") }} 속성에 의해 주어집니다.

상쇄(_collapsed_) 테두리 모델에서는, 인접 표 셀은 테두리를 공유합니다. 그 모델에서는, `inset`의 {{ Cssxref("border-style") }} 값은 `groove`처럼, `outset`은 `ridge`처럼 행동합니다.

## 구문

```css
/* Keyword values */
border-collapse: collapse;
border-collapse: separate;

/* Global values */
border-collapse: inherit;
border-collapse: initial;
border-collapse: unset;
```

### 값

- `separate`
  - : 분리된 테두리 표 렌더링 모델의 사용을 요청하는 키워드입니다. 기본값입니다.
- `collapse`
  - : 상쇄된 테두리 표 렌더링 모델의 사용을 요청하는 키워드입니다.

### 형식 구문

{{csssyntax}}

## 예제

### 브라우저 엔진의 다색 표

#### HTML

```html
<table class="separate">
  <caption>
    <code>border-collapse: separate</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ie">Internet Explorer</td>
      <td class="tr">Trident</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">Webkit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
<table class="collapse">
  <caption>
    <code>border-collapse: collapse</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ie">Internet Explorer</td>
      <td class="tr">Trident</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">Webkit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  border-collapse: collapse;
}
.separate {
  border-collapse: separate;
}
table {
  display: inline-table;
  margin: 1em;
  border: dashed 6px;
  border-width: 6px;
}
table th,
table td {
  border: solid 3px;
}
.fx {
  border-color: orange blue;
}
.gk {
  border-color: black red;
}
.ie {
  border-color: blue gold;
}
.tr {
  border-color: aqua;
}
.sa {
  border-color: silver blue;
}
.wk {
  border-color: gold blue;
}
.ch {
  border-color: red yellow green blue;
}
.bk {
  border-color: navy blue teal aqua;
}
.op {
  border-color: red;
}
```

#### 결과

{{ EmbedLiveSample('A_colorful_table_of_browser_engines', 400, 300) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("border-spacing")}}, {{cssxref("border-style")}}
- The `border-collapse` property alters the appearance of the {{htmlelement("table")}} HTML element.
