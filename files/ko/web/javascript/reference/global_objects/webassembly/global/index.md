---
title: WebAssembly.Global
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Global
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
---
{{JSRef}} **`WebAssembly.Global`** 객체는 전역 변수 인스턴스를 나타내며 JavaScript 및 하나 이상의 {{jsxref("WebAssembly.Module")}} 인스턴스에서 가져오거나 내보낼 수 있습니다. 이렇게 하면 여러 모듈을 동적으로 연결할 수 있습니다.

## 생성자

- [`WebAssembly.Global()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global)
  - : 새로운 `Global` 객체를 생성합니다.

## 전역 인스턴스

모든 `Global` 인스턴스는 `Global()` 생성자의 프로토타입 객체에서 상속합니다. 모든 `Global` 인스턴스에 영향을 미치도록 수정할 수 있습니다.

### 인스턴스 속성

- `Global.prototype.constructor`
  - : 이 객체의 인스턴스를 생성한 함수를 반환합니다. 기본적으로 이것은 {{jsxref("WebAssembly.Global()")}} 생성자입니다.
- `Global.prototype[@@toStringTag]`
  - : [@@toStringTag](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 프로퍼티의 초기값은 문자열 값 "WebAssembly.Global" 입니다.
- `Global.prototype.value`
  - : 전역 변수 내부에 포함된 값 - 전역 값을 직접 설정하고 가져오는 데 사용할 수 있습니다.

### 인스턴스 메서드

- `Global.prototype.valueOf()`
  - : 전역 변수 내부에 포함된 값을 반환하는 구식 메소드입니다.

## Examples

다음 예제에서는 `WebAssembly.Global()` 생성자를 사용하여 만드는 새 전역 인스턴스를 보여줍니다. 값이 0 인 변경 가능한 `i32` 유형으로 정의됩니다.

먼저 `Global.value` 속성을 사용하여 '42'로 전역 값이 변경되고, `global.wasm` 모듈에서 내보낸 `incGlobal()` 함수를 사용하여 43으로 변경됩니다. (이 함수는 주어진 값에 1을 더한 다음 새 값을 반환합니다).

```js
const output = document.getElementById('output');

function assertEq(msg, got, expected) {
    output.innerHTML += `Testing ${msg}: `;
    if (got !== expected)
        output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
    else
        output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});
```

<div class="note"><p><strong>Note</strong>: GitHub에서 실행 중인 예제(<a href="https://mdn.github.io/webassembly-examples/js-api-examples/global.html">running live on GitHub</a>)를 볼 수 있습니다. <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html">source code</a>도 참조하십시오.</p></div>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
