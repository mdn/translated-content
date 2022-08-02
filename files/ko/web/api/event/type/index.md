---
title: Event.type
slug: Web/API/Event/type
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.Event.type
translation_of: Web/API/Event/type
---
{{APIRef}}

{{domxref("Event")}} 인터페이스의 **`type`** 읽기 전용 속성은 이벤트의 유형을 나타내는 문자열을 반환합니다. 이 속성은 이벤트를 생성할 때 설정되며, `click`, `load`, `error`처럼 특정 이벤트를 지칭할 때 사용하는 이름과 같은 값을 반환합니다.

## 값

{{domxref("Event")}}의 유형을 나타내는 {{jdxref("String")}}입니다.

## 예제

이 예제에서는 키보드를 누르거나 마우스를 클릭할 때마다 발생한 이벤트의 유형을 기록합니다.

### HTML

```html
<p>아무 키나 누르거나 마우스를 클릭해서 이벤트 유형을 알아보세요.</p>
<p id="log"></p>
```

### JavaScript

```js
function getEventType(event) {
  const log = document.getElementById('log');
  log.innerText = event.type + '\n' + log.innerText;
}

// 키보드 이벤트
document.addEventListener('keydown', getEventType, false);  // 1번
document.addEventListener('keypress', getEventType, false); // 2번
document.addEventListener('keyup', getEventType, false);    // 3번

// 마우스 이벤트
document.addEventListener('mousedown', getEventType, false); // 1번
document.addEventListener('mouseup', getEventType, false);   // 2번
document.addEventListener('click', getEventType, false);     // 3번
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{ domxref("EventTarget.addEventListener()") }}
- {{ domxref("EventTarget.removeEventListener()") }}
