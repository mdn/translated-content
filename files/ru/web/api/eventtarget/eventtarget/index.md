---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
translation_of: Web/API/EventTarget/EventTarget
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

## Спецификация

Спецификация

| Спецификация                                                                                                         | Статус                           | Комментарии |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#dom-eventtarget-eventtarget', 'EventTarget() constructor')}} | {{Spec2('DOM WHATWG')}} |             |

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{domxref("EventTarget")}}
