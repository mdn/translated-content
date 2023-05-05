---
title: "HTMLElement: change 이벤트"
slug: Web/API/HTMLElement/change_event
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef}}

`change` 이벤트는 사용자가 {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 요소의 값을 변경할 때 발생합니다. {{domxref("HTMLElement/input_event", "input")}} 이벤트와 달리 `change`는 요소의 `value`값이 변경될 때마다 매번 발생하지는 않을 수 있습니다.

값이 바뀐 요소와 사용자가 값을 바꾼 방법에 따라 `change` 이벤트가 발생하는 시점은 달라집니다.

- `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}` 요소를 클릭하거나 키보드를 사용해서 체크하거나 해제할 때
- `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` 요소가 체크될 때 (해제될 때는 발생하지 않음)
- 사용자가 변경사항을 직접 반영할 때 ({{htmlelement("select")}}의 드롭다운에서 값을 클릭, `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}`의 달력에서 날짜 선택, `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}`의 파일 선택 창에서 파일을 선택할 때 등)
- {{HTMLElement("textarea")}}와 {{HTMLElement('input')}}의 `{{HTMLElement('input/text', 'text')}}`, `{{HTMLElement('input/search', 'search')}}`, `{{HTMLElement('input/url', 'url')}}`, `{{HTMLElement('input/tel', 'tel')}}`, `{{HTMLElement('input/email', 'email')}}`, `{{HTMLElement('input/password', 'password')}}` 유형처럼, 사용자 상호작용이 값 선택이 아니라 타이핑인 요소의 값이 바뀐 뒤 포커스를 상실했을 때

HTML 명세서에 [`change` 이벤트가 발생해야 하는 `<input>` 유형들](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)이 나열되어 있습니다.

## 구문

이벤트 이름을 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 등의 메서드에 제공하거나, 이벤트 처리기 속성을 사용하세요.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## 이벤트 유형

일반 {{domxref("Event")}}.

## 예제

### \<select> 요소

#### HTML

```html
<label>
  아이스크림 맛을 선택하세요.
  <select class="ice-cream" name="ice-cream">
    <option value="">선택…</option>
    <option value="초콜릿">초콜릿</option>
    <option value="정어리">정어리</option>
    <option value="바닐라">바닐라</option>
  </select>
</label>

<div class="result"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
```

#### JavaScript

```js
const selectElement = document.querySelector(".ice-cream");

selectElement.addEventListener("change", (event) => {
  const result = document.querySelector(".result");
  result.textContent = `${event.target.value} 맛을 좋아하시는군요`;
});
```

#### 결과

{{ EmbedLiveSample('select_요소', '100%', '75px') }}

### 텍스트 입력 요소

`<input type="text">`를 포함한 일부 요소들에서는 컨트롤이 포커스를 잃을 때까지 `change` 이벤트가 발생하지 않습니다. 아래 입력 필드에 텍스트를 입력하고, 다른 아무 곳이나 클릭해서 이벤트를 발생시켜보세요.

#### HTML

```html
<input placeholder="아무 텍스트나 입력" name="name" />
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### 결과

{{ EmbedLiveSample('텍스트_입력_요소', '100%', '90px') }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

어떤 상호작용들은 브라우저마다 `change` 이벤트의 발생 여부가 다를 수도 있습니다. 예를 들어, Gecko에서는 {{HTMLElement("select")}} 요소의 키보드 탐색으로 `change` 이벤트가 발생하지 않았습니다([Firefox 버그 126379](https://bugzil.la/126379)). 하지만 Firefox 63 (Quantum) 이후로 이 동작은 모든 주요 브라우저에서 동일합니다.
