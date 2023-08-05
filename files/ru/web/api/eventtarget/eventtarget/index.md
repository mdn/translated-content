---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
---

{{APIRef("DOM Events")}}

**`EventTarget()`** конструктор создаёт новый {{domxref("EventTarget")}} экземпляр объекта.

## Синтаксис

```
var myEventTarget = new EventTarget();
```

### Параметры

Нет параметров.

### Возвращаемые значения

Экземпляр {{domxref("EventTarget")}} объекта.

## Примеры

```js
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() {
    return this._secret;
  }
}

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret; // == 5
myEventTarget.addEventListener("foo", function (e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("EventTarget")}}
