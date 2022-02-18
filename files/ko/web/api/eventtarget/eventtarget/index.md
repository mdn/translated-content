---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
tags:
  - Constructor
  - Reference
browser-compat: api.EventTarget.EventTarget
translation_of: Web/API/EventTarget/EventTarget
---
{{APIRef("DOM")}}

**`EventTarget()`** 생성자는 새로운 {{domxref("EventTarget")}} 객체 인스턴스를 생성합니다.

> **참고:** 이 생성자를 명시적으로 사용하는 경우는 거의 없습니다. 보통은 {{domxref("EventTarget")}}을 상속하는 객체의 생성자 내에서 [`super`](/ko/docs/Web/JavaScript/Reference/Operators/super) 키워드로 사용됩니다.

## 구문

```js
new EventTarget();
```

### 매개변수

없음.

### 반환 값

{{domxref("EventTarget")}} 객체의 새로운 인스턴스.

## 예제

```js
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("EventTarget")}}
