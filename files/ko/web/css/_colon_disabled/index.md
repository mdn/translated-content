---
title: :disabled
slug: Web/CSS/:disabled
l10n:
  sourceCommit: 5fef5d3c2b35846676218d5c9f7c5cfad10aa94b
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:disabled`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 모든 비활성 요소를 나타냅니다. 비활성 요소란 활성(선택, 클릭, 입력 등등)하거나 포커스를 받을 수 없는 요소를 말합니다. 반대 상태인 활성 요소도 존재합니다.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-disabled.html", "tabbed-standard")}}

## 구문

```css
:disabled {
  /* ... */
}
```

## 예제

다음 예제는 사용자가 청구 주소 입력 칸을 켜거나 끌 수 있는 기능을 [JavaScript](/ko/docs/Web/JavaScript) {{domxref("HTMLElement/change_event", "change")}} 이벤트를 통해 구현한 기본적인 배송 양식입니다.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>배송지</legend>
    <input type="text" placeholder="이름" />
    <input type="text" placeholder="주소" />
    <input type="text" placeholder="우편번호" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>청구지</legend>
    <label for="billing-checkbox">배송지와 동일:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="이름" disabled />
    <input type="text" placeholder="주소" disabled />
    <input type="text" placeholder="우편번호" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

체크박스를 클릭할 때마다 입력 필드의 활성 상태가 전환됩니다.

```js
const checkbox = document.querySelector("#billing-checkbox");
const billingItems = document.querySelectorAll('#billing input[type="text"]');

checkbox.addEventListener("change", () => {
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });
});
```

### 결과

체크박스를 체크하거나 해제해 청구 필드의 스타일을 변경해 보세요.

{{EmbedLiveSample('예제', 300, 250)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref(":enabled")}}
