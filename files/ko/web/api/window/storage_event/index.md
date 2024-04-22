---
title: WindowEventHandlers.onstorage
slug: Web/API/Window/storage_event
---

<div class="syntaxbox">{{APIRef}}</div>

{{domxref("WindowEventHandlers")}} 믹스인의 **`onstorage`** 속성은 [`storage`](/ko/docs/Web/API/Window/storage_event) 이벤트를 처리하는 {{event("Event_handlers", "event handler")}}입니다.

`storage` 이벤트는 다른 문서에서 저장소를 변경했을 때 발생합니다.

## 구문

```js
window.onstorage = functionRef;
```

### 값

`functionRef`는 함수 이름 혹은 [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)으로, 단일 매개변수로써 {{domxref("StorageEvent")}}를 받습니다.

## 예제

다음 예제는 다른 문서에서 저장소 키를 바꿀 때마다 메시지를 기록합니다.

```js
window.onstorage = function (e) {
  console.log(
    "The " +
      e.key +
      " key has been changed from " +
      e.oldValue +
      " to " +
      e.newValue +
      ".",
  );
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Window: `storage` 이벤트](/ko/docs/Web/API/Window/storage_event)
