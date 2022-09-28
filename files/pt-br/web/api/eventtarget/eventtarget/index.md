---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
translation_of: Web/API/EventTarget/EventTarget
---
{{APIRef("DOM Events")}}

O construtor **`EventTarget()`** cria uma nova instância do objeto {{domxref("EventTarget")}}.

## Sintaxe

```
var myEventTarget = new EventTarget();
```

### Parâmetros

Nenhum.

### Retorno de valor

Uma instância do objeto {{domxref("EventTarget")}}.

## Exemplos

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

## Specificações

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('DOM WHATWG', '#dom-eventtarget-eventtarget', 'EventTarget() constructor')}} | {{Spec2('DOM WHATWG')}} |         |

## Compatibilidade com navegadores

{{Compat("api.EventTarget.EventTarget")}}

## Veja também

- {{domxref("EventTarget")}}
