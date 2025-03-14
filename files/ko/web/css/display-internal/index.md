---
title: <display-internal>
slug: Web/CSS/display-internal
---

{{CSSRef}}

`table`과 `ruby` 같은 몇몇 레이아웃 모델은 복잡한 내부 구조를 가지고 있으며, 자식이나 자손들로 채울 수 있는 다양한 역할을 가지고 있습니다. 이 페이지는 이러한 "내재적인" 디스플레이 값을 정의하며, 이들은 특정 레이아웃 모드 안에서만 의미를 가집니다.

## 문법

유효한 `<display-internal>` 값들:

- `table-row-group`
  - : 이 요소는 {{HTMLElement("tbody")}} HTML 요소처럼 동작합니다.
- `table-header-group`
  - : 이 요소는 {{HTMLElement("thead")}} HTML 요소처럼 동작합니다.
- `table-footer-group`
  - : 이 요소는 {{HTMLElement("tfoot")}} HTML 요소처럼 동작합니다.
- `table-row`
  - : 이 요소는 {{HTMLElement("tr")}} HTML 요소처럼 동작합니다.
- `table-cell`
  - : 이 요소는 {{HTMLElement("td")}} HTML 요소처럼 동작합니다.
- `table-column-group`
  - : 이 요소는 {{HTMLElement("colgroup")}} HTML 요소처럼 동작합니다.
- `table-column`
  - : 이 요소는 {{HTMLElement("col")}} HTML 요소처럼 동작합니다.
- `table-caption`
  - : 이 요소는 {{HTMLElement("caption")}} HTML 요소처럼 동작합니다.
- `ruby-base` {{Experimental_Inline}}
  - : 이 요소는 {{HTMLElement("rb")}} HTML 요소처럼 동작합니다.
- `ruby-text` {{Experimental_Inline}}
  - : 이 요소는 {{HTMLElement("rt")}} HTML 요소처럼 동작합니다.
- `ruby-base-container` {{Experimental_Inline}}
  - : 이 요소는 익명의 박스로 만들어지는 {{HTMLElement("rbc")}} HTML 요소처럼 동작합니다.
- `ruby-text-container` {{Experimental_Inline}}
  - : 이 요소는 {{HTMLElement("rtc")}} HTML 요소처럼 동작합니다.

## 예제

### CSS 테이블의 예시

다음 예시에서는 CSS 테이블 레이아웃을 이용해 간단한 폼을 배치합니다.

#### HTML

```html
<main>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" name="age" />
  </div>
</main>
```

#### CSS

```css
main {
  display: table;
}

div {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin: 5px;
}
```

#### 결과

{{EmbedLiveSample('CSS_tables_example', '100%', 100)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
