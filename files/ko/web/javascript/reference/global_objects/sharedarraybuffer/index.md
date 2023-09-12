---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
---

{{JSRef}}

**`SharedArrayBuffer`** 객체는 제네릭, 고정된 길이의 원시 바이너리 데이터 버퍼를 표현하는데 사용됩니다. {{jsxref("ArrayBuffer")}} 객체와 유사하지만, 공유된 메모리상의 뷰를 생성하는데 사용될 수 있습니다. `ArrayBuffer` 와는 달리, `SharedArrayBuffer` 는 분리될 수 없습니다.

> **참고:** [Spectre](https://meltdownattack.com/) 에대한 응답으로 2018년 1월 5일에 `SharedArrayBuffer` 는 모든 주요 브라우저에서 기본적으로 비활성화되어있음을 참고하세요. Chrome 은 사이트 격리 기능을 사용하여 Spectre 스타일 취약점으로부터 보호될 수 있는 플랫폼상의 [v67 에서 이를 다시 활성화](https://bugs.chromium.org/p/chromium/issues/detail?id=821270)하였습니다.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html")}}

## 구문

```js
new SharedArrayBuffer(length);
```

### 파라미터

- `length`
  - : 생성할 array buffer 의 바이트 크기.

### 반환 값

크기가 지정된 새로운 `SharedArrayBuffer` 객체입니다. 컨텐츠는 0 으로 초기화됩니다.

## 설명

### 할당 및 메모리 공유

{{jsxref("SharedArrayBuffer")}} 객체를 사용해 메모리를 하나의 agent(agent 는 웹 페이지의 메인 프로그램 또는 웹 워커 중 하나입니다)와 다른 agent 에서 공유하기 위해, [`postMessage`](/ko/docs/Web/API/Worker/postMessage) 와 [structured cloning](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 이 사용됩니다.

Structured clone 알고리즘은 `SharedArrayBuffer` 와 `SharedArrayBuffer` 상에 맵핑된 `TypedArray` 를 받아들입니다. 이 두 경우에서, `SharedArrayBuffer` 객체는 수신자(receiver)에게 전달되어 수신 agent(예, {{jsxref("ArrayBuffer")}})의 새로운 비공개의 SharedArrayBuffer 객체를 생성합니다. 하지만, 두 `SharedArrayBuffer` 에 의해 참조되는 공유 데이터 블록은 같은 블록이며, 부수적인 효과로, 하나의 agent 가 다른 agent 에서 보이게 됩니다.

```js
var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### Atomic operation 으로 공유 메모리 수정 및 동기화

공유 메모리는 워커나 메인 스레드에서 동시에 수정 및 생성할 수 있습니다. 시스템(CPU, OS, 브라우저)에따라 변경사항이 전체 컨텍스트로 전파될때까지 약간의 시간이 필요합니다. 동기화를 위해선, {{jsxref("Atomics", "atomic", "", 1)}} 연산이 필요합니다.

### `SharedArrayBuffer` 객체를 사용할 수 있는 API

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}

### 생성자는 `new` 연산자를 필요로 함

`SharedArrayBuffer` 생성자는 생성될 때, {{jsxref("Operators/new", "new")}} 연산자를 필요로 합니다. `SharedArrayBuffer` 생성자를 new 없이 함수로써 호출하면, {{jsxref("TypeError")}} 를 일으킬 것 입니다.

```js example-bad
var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
var sab = new SharedArrayBuffer(1024);
```

## 속성

- `SharedArrayBuffer.length`
  - : 값이 1인 `SharedArrayBuffer` 생성자의 length 속성입니다.
- {{jsxref("SharedArrayBuffer.prototype")}}
  - : 모든 `SharedArrayBuffer` 객체에 프로퍼티 추가를 가능하게 해줍니다.

## `SharedArrayBuffer` prototype 객체

모든 `SharedArrayBuffer` 인스턴스는 {{jsxref("SharedArrayBuffer.prototype")}} 를 상속합니다.

### 속성

- [`SharedArrayBuffer.prototype.byteLength`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength)
  - : 배열의 크기 (바이트)입니다. 이것은 배열이 구성 될 때 설정되며 변경할 수 없습니다. 읽기 전용입니다.

### 메소드

- [`SharedArrayBuffer.prototype.slice(begin, end)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)
  - : Returns a new `SharedArrayBuffer` whose contents are a copy of this `SharedArrayBuffer`'s bytes from `begin`, inclusive, up to `end`, exclusive. `begin` 또는 `end` 중 하나가 음수이면 처음부터가 아니라 배열 끝의 인덱스를 참조합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- [Web Workers](/ko/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – 동기화 및 작업 분리 추상화를 제공하는 간단한 라이브러리.
- [Shared Memory – 간단한 튜토리얼](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
