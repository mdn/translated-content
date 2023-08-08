---
title: WebAssembly.Memory()
slug: WebAssembly/JavaScript_interface/Memory
---

{{WebAssemblySidebar}}

**`WebAssembly.Memory()`** 생성자는 WebAssembly `Instance`가 액세스하는 메모리의 원시 바이트를 가진 [ArrayBuffer](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)(크기조정이 가능)인 새 `Memory` 객체를 만듭니다.

메모리는 자바스크립트 혹은 WebAssembly 코드 안에서 만들어지며 자바스크립트 그리고 WebAssembly에서 접근하거나 변경이 가능합니다.

## Syntax

```js
var myMemory = new WebAssembly.Memory(memoryDescriptor);
```

### Parameters

- _memoryDescriptor_
  - : 다음의 멤버를 가질수 있는 객체입니다._ *initial*
    _ : WebAssembly Page의 단위별 WebAssembly 메모리의 초기 크기입니다.
    - _maximum {{optional_inline}}_
      - : WebAssembly 메모리의 최대 크기는 WebAssembly 페이지 단위로 증가 할 수 있습니다. 이 매개 변수가 있으면 `maximum` 매개 변수는 엔진에 대해 메모리를 전면에 예약하도록 합니다. 그러나 엔진은 이 예약 요청을 무시하거나 클램핑 할 수 있습니다. 일반적으로 대부분의 WebAssembly 모듈은 `maximum` 값을 설정할 필요가 없습니다.

> **참고:** WebAssembly 페이지의 크기는 65,536 바이트로 64KiB로 고정되어 있습니다.

### Exceptions

- `memoryDescriptor`가 object 유형이 아닌 경우 {{jsxref ( "TypeError")}}가 발생합니다.
- `maximum`이 지정되고 `initial`보다 작은 경우 {{jsxref ( "RangeError")}}가 발생합니다.

## `Memory` instances

모든 `Memory` 인스턴스는 `Memory()`생성자의 [prototype object](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/prototype)를 상속합니다.이 인스턴스는 모든 `Memory` 인스턴스에 적용되도록 수정할 수 있습니다.

### Instance properties

- `Memory.prototype.constructor`
  - : 이 객체의 인스턴스를 생성 한 함수를 돌려줍니다. 기본적으로 이것은 {{jsxref("WebAssembly.Memory()")}} 생성자입니다.
- {{jsxref("WebAssembly/Memory/buffer","Memory.prototype.buffer")}}
  - : 메모리에 포함 된 버퍼를 반환하는 접근 자 속성입니다.

### Instance methods

- {{jsxref("WebAssembly/Memory/grow","Memory.prototype.grow()")}}
  - : 지정된 수의 WebAssembly 페이지 (각각 64KB 크기)만큼 메모리 인스턴스의 크기를 늘립니다.

## Examples

`WebAssembly.Memory` 객체를 가져 오는 두 가지 방법이 있습니다. 첫 번째 방법은 JavaScript에서 생성하는 것입니다. 다음 예제에서는 초기 크기가 10 페이지 (640KiB)이고 최대 크기가 100 페이지 (6.4MiB) 인 새 WebAssembly 메모리 인스턴스를 만듭니다.

```js
var memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
```

`WebAssembly.Memory` 객체를 가져 오는 두 번째 방법은 WebAssembly 모듈에서 내보냅니다. 다음 예제는 (GitHub의 [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html)을 보세요. [라이브로 보기](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) 생성된 메모리를 가져 오는 동안 {{jsxref("WebAssembly.instantiateStreaming()")}} 메소드를 사용하여로드 된 memory.wasm 바이트 코드를 가져 와서 인스턴스화합니다. 위의 줄에. 그런 다음 메모리에 일부 값을 저장 한 다음 함수를 내 보낸 다음 일부 값의 합계에 사용합니다.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
