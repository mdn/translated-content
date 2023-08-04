---
title: Event.createEvent()
slug: Web/API/Document/createEvent
---

{{APIRef("DOM")}}

새로운 event를 생성합니다, 새로 만들어진 event는 반드시 자신의 init() method를 호출함으로써 초기화되어야만 합니다.

### Syntax

```js
document.createEvent(type);
```

- `type`
  - : A string indicating the event type to create.

이 method는 명시된 타입인 새로운 DOM {{ domxref("Event") }} 객체를 반환하며 이는 반드시 사용 전에 초기화되어야만 합니다.

### Example

```js
var newEvent = document.createEvent("UIEvents");
```

### Specification

- [DOM Level 2 Events](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-document)
