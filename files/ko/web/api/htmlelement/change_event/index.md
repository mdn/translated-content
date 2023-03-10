---
title: GlobalEventHandlers.onchange
slug: Web/API/HTMLElement/change_event
original_slug: Web/API/GlobalEventHandlers/onchange
---
{{ ApiRef("HTML DOM") }}

**`onchange`** 속성은 {{event("change")}} 이벤트의 이벤트 핸들러를 설정하고 반환합니다.

## 구문

```js
target.onchange = functionRef;
```

functionRef는 `null` 또는 이벤트 핸들러를 지정하는 [JavaScript function](/ko/docs/Web/JavaScript/Reference/Functions) 함수 중 하나여야 합니다.

## 예제

### HTML

```html
<input type="text" placeholder="Type something here, then click outside of the field." size="50">
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{event("change")}} 이벤트
