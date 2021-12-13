---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
translation_of: Web/API/EventTarget/EventTarget
---
{{APIRef("DOM Events")}}

**`EventTarget()`** 생성자는 새로운 {{domxref("EventTarget")}} 객체 인스턴스를 만듭니다.

## Syntax

    var myEventTarget = new EventTarget();

### Parameters

None.

### Return value

{{domxref("EventTarget")}} 객체의 인스턴스를 반환합니다.

## Examples

<pre class="brush: js" id="ct-20">class MyEventTarget extends EventTarget {
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
let newValue = myEventTarget.secret; // == 7</pre>

## Specifications

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('DOM WHATWG', '#dom-eventtarget-eventtarget', 'EventTarget() constructor')}} | {{Spec2('DOM WHATWG')}} |         |

## Browser compatibility

{{Compat("api.EventTarget.EventTarget")}}

## See also

- {{domxref("EventTarget")}}
