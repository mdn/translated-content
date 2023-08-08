---
title: 웹어셈블리의 자바스크립트 API 사용하기
slug: WebAssembly/Using_the_JavaScript_API
---

{{WebAssemblySidebar}}

[Emscripten과 같은 도구를 사용하여 다른 언어의 모듈을 컴파일](/ko/docs/WebAssembly/C_to_wasm)했거나 [코드를 직접로드하여 실행](/ko/docs/WebAssembly/Loading_and_running) 해봤다면 다음 단계에서는 WebAssembly JavaScript API의 다른 기능을 사용하는 방법에 대해 자세히 알아 봅니다.

> **참고:** 여기에서 언급한 기본 개념에 익숙하지 않거나 더 많은 설명이 필요한 경우 [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)를 먼저 읽어보세요.

## 몇가지 간단한 예제

WebAssembly JavaScript API를 사용하는 방법과 웹 페이지에서 wasm 모듈을 로드하는 방법을 설명하는 몇 가지 예제를 실행 해 보겠습니다.

> **참고:** 샘플 코드는 [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub repo에서 찾을 수 있습니다.

### 예제 준비하기

1. 먼저 wasm 모듈이 필요합니다! [simple.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/simple.wasm) 파일을 로컬 컴퓨터의 새 디렉토리에 저장하세요.
2. 다음으로, wasm 파일과 동일한 디렉토리에 index.html이라는 간단한 HTML 파일을 작성해보세요 ([simple template](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)을 참고하면 쉽습니다.)
3. 이제 여기서 무슨 일이 벌어지는지 이해하기 쉽도록 하기위해 wasm 모듈 ([Converting WebAssembly format to wasm](/ko/docs/WebAssembly/Text_format_to_wasm#A_first_look_at_the_text_format)을 참고)의 텍스트 표현을 살펴 보겠습니다.

   ```rust
   (module
     (func $i (import "imports" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. 두 번째 줄에서 2단계의 import 네임스페이스가 있습니다. 즉, 내부 기능 `$i`는 `imports.imported_func`에서 가져옴을 알 수 있습니다. wasm 모듈로 가져올 객체를 작성할 때 JavaScript에서 이 2단계 네임스페이스를 반영해야 합니다.
   HTML 파일에 `<script></script>`요소를 만들고 다음 코드를 추가합니다.

   ```js
   var importObject = {
     imports: { imported_func: (arg) => console.log(arg) },
   };
   ```

### 웹어셈블리 모듈을 스트리밍하기

Firefox 58의 새로운 기능으로 기본 소스에서 직접 WebAssembly 모듈을 컴파일하고 인스턴스화하는 기능이 있습니다. 이는 {{jsxref("WebAssembly.compileStreaming()")}} 와 {{jsxref("WebAssembly.instantiateStreaming()")}} 메소드를 사용하여 수행됩니다. 이 메소드는 바이트 코드를 직접 `Module`/`Instance` 인스턴스로 변환 할 수 있기 때문에 스트리밍이 아닌 방식의 메소드보다 작성이 쉽습니다. 별도로 {{domxref("Response")}}를 {{domxref("ArrayBuffer")}}로 호출할 필요성을 없애줍니다.

이 예제는 (GitHub의 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) 데모와 [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)를 보세요) `instantiateStreaming()`을 사용하여 wasm 모듈을 가져오고, JavaScript 함수를 가져오고, 컴파일하고 인스턴스화하며, 내 보낸 함수에 액세스하는 방법을 한번에 보여줍니다.

첫 번째 블록 아래에 다음을 추가하십시오.

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

그 결과, 내 보낸 WebAssembly 함수 인 `export_func`를 호출합니다.이 함수는 가져온 JavaScript 함수 `imported_func`를 호출합니다.이 함수는 WebAssembly 인스턴스 (42) 내부에 제공된 값을 콘솔에 기록합니다. 지금 예제 코드를 저장하고 WebAssembly를 지원하는 브라우저에 로드하면 이를 실제로 볼 수 있습니다!

> **참고:** 이것은 매우 난해하고, 길고 지루한 예이지만 웹 응용프로그램에서 JavaScript와 함께 WebAssembly 코드를 사용하여 가능한 것을 설명하는 데 도움이 됩니다. 우리가 다른 곳에서 언급했듯이, WebAssembly는 JavaScript를 대체하려는 것이 아니라, 그 두 개가 상호 작용하여 서로의 강점을 이끌어 낼수 있습니다.

### 스트리밍하지 않고 웹어셈블리 모듈 로드

위에서 설명한 스트리밍 방법을 사용할 수 없거나 사용하지 않으려면 스트리밍하지 않는 메서드{{jsxref("WebAssembly.compile")}} / {{jsxref("WebAssembly.instantiate")}}를 대신 사용할 수 있습니다.

이 메소드는 바이트 코드에 직접 액세스하지 않으므로 wasm 모듈을 컴파일 / 인스턴스화하기 전에 응답을 {{domxref ( "ArrayBuffer")}}로 변환하는 추가 단계가 필요합니다.

이와 동등한 코드는 다음과 같습니다.

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### 개발자 도구에서 웹어셈블리 보기

Firefox 54+에서 Developer Tool Debugger Panel에는 웹 페이지에 포함된 모든 wasm 코드의 텍스트 표현을 표시하는 기능이 있습니다. Debugger 패널로 이동하여 "wasm://" 항목을 클릭할 수 있습니다.

![wasm-debug](wasm-debug.png)

Firefox에서 WebAssembly를 텍스트로 보는 것 외에도 텍스트 형식을 사용하여 개발자는 WebAssembly를 디버깅할 수 있습니다(breakpoint, callstack 검사, 단일 단계 검사 등). 비디오 미리 보기는 [WebAssembly debugging with Firefox DevTools](https://www.youtube.com/watch?v=R1WtBkMeGds)을 참조하십시오.

## 메모리 인스턴스

WebAssembly의 저수준 메모리 모델에서 메모리는 [Linear Memory](http://webassembly.org/docs/semantics/#linear-memory)라고하는 형식이 지정되지 않은 바이트의 연속 범위로 표시되며 [load and store instructions](http://webassembly.org/docs/semantics/#linear-memory-accesses)에 의해 모듈 내부에서 읽고 쓰여집니다. 이 메모리 모델에서 모든 load 또는 store는 linear memory의 모든 바이트에 액세스 할 수 있으므로 포인터와 같은 C / C ++ 개념을 충실하게 표현하는 데 필요합니다.

그러나 네이티브 C / C ++ 프로그램과 달리 사용 가능한 메모리 범위가 전체 프로세스에 걸쳐있는 경우 특정 WebAssembly 인스턴스가 액세스 할 수있는 메모리는 WebAssembly 메모리 객체에 포함 된 특정 범위 (잠재적으로 매우 작은 범위)로 제한됩니다. 이를 통해 단일 웹 응용 프로그램은 WebAssembly를 내부적으로 사용하는 여러 독립 라이브러리를 사용하여 서로 완전히 격리 된 별도의 메모리를 가질 수 있습니다.

자바 스크립트에서 Memory 인스턴스는 크기를 조정할 수있는 ArrayBuffer로 생각할 수 있으며, ArrayBuffers와 마찬가지로 하나의 웹 앱에서 많은 독립적 인 Memory 객체를 만들 수 있습니다. {{jsxref("WebAssembly.Memory()")}} 생성자를 사용하여 생성 할 수 있습니다. 생성자는 인수로 초기 크기와 (선택적으로) 최대 크기를 인수로 취합니다.

빠르게 예제를 살펴봅시다.

1. 새로운 간단한 HTML 페이지를 만들고 ([simple template](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)을 복사하십시오) `memory.html`을 호출하십시오. `<script></script>` 요소를 페이지에 추가하십시오.
2. 이제 스크립트 맨 위에 다음 행을 추가하여 메모리 인스턴스를 만듭니다.

   ```js
   var memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   `initial` 및 `maximum` 단위는 WebAssembly 페이지이며 크기는 64KB로 고정되어 있습니다. 즉, 위 메모리 인스턴스의 초기 크기는 640KB이고 최대 크기는 6.4MB입니다.

   WebAssembly 메모리는 ArrayBuffer를 반환하는 버퍼 getter / setter를 제공함으로써 바이트를 노출합니다. 예를 들어 선형 메모리의 첫 번째 단어에 직접 42를 쓰려면 다음과 같이하면됩니다.

   ```js
   new Uint32Array(memory.buffer)[0] = 42;
   ```

   그런 다음 다음을 사용하여 동일한 값을 반환 할 수 있습니다.

   ```js
   new Uint32Array(memory.buffer)[0];
   ```

3. 데모에서 지금 사용해보십시오. 지금까지 추가 한 내용은 저장하고 브라우저에로드 한 다음 JavaScript 콘솔에 위의 두 줄을 입력 해보십시오.

### 메모리의 확장

메모리 인스턴스는 {{jsxref("Memory.prototype.grow()")}}를 호출하여 확장 할 수 있습니다. 여기서 인수는 WebAssembly 페이지 단위로 입력합니다.

```js
memory.grow(1);
```

메모리 인스턴스 생성시 최대 값이 제공되었을 때 이 최대 값을 초과하여 증가하려고 시도하면 {{jsxref("WebAssembly.RangeError")}} 예외가 발생합니다. 엔진은 이 상한값을 이용하여 미리 메모리를 예약하므로 크기를 보다 효율적으로 조정할 수 있습니다.

{{domxref("ArrayBuffer")}}의 byteLength는 불변이므로, {{jsxref("Memory.prototype.grow()")}} 오퍼레이션이 성공하면, 버퍼 getter는 (새로운 byteLength로) 새로운 ArrayBuffer 객체를 돌려 주어, 이전의 모든 ArrayBuffer 객체는 「detached」가되거나, 이전에 가리켰던 기본 메모리와의 접속이 끊어집니다.

함수와 마찬가지로 선형 메모리를 모듈 내부에서 정의하거나 가져올 수 있습니다. 마찬가지로 모듈은 메모리를 선택적으로 내보낼수도 있습니다. 즉, JavaScript는 새 WebAssembly.Memory를 만들고 가져 오기로 전달하거나 [`Instance.prototype.exports`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports)를 통해 메모리 내보내기를 하여 WebAssembly 인스턴스의 메모리에 액세스 할 수 있습니다.

### 심화된 메모리 예제

앞서 정의한 메모리 인스턴스를 가져 와서 정수 배열로 채운 다음 더 합친 WebAssembly 모듈을 통해 더 많은 관련 메모리 예제를 살펴봄으로써 위의 내용을 보다 자세히 알아 보겠습니다. [memory.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/memory.wasm)에서 찾을 수 있습니다.

1. `memory.wasm`을 이전과 같이 같은 폴더에 복사합니다.

   > **참고:** [memory.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.wat)에서 모듈의 텍스트 표현을 볼 수 있습니다.

2. `memory.html` 샘플 파일로 돌아가서 이전처럼 wasm 모듈을 가져 와서 컴파일하고 인스턴스화합니다. - 스크립트의 맨 아래에 다음을 추가하세요.

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. 이 모듈은 메모리를 내보내므로 instance라는 이 모듈의 인스턴스가 export 된 함수 `accumulate()`를 사용하여 모듈 인스턴스의 선형 메모리 (`mem`)에 직접 입력 배열을 만들고 채울 수 있습니다. 코드에 다음을 추가하십시오.

   ```js
   var i32 = new Uint32Array(memory.buffer);

   for (var i = 0; i < 10; i++) {
     i32[i] = i;
   }

   var sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Memory 객체의 버퍼 ([`Memory.prototype.buffer`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer))에서 {{domxref ("Uint32Array")}} 뷰를 만드는 방법에 유의하십시오.

메모리 가져 오기는 함수 가져 오기와 마찬가지로 작동하며 메모리 개체 만 JavaScript 함수 대신 값으로 전달됩니다. 메모리 가져 오기는 다음과 같은 두 가지 이유로 유용합니다.

- 그것들은 자바 스크립트가 모듈 컴파일 이전에 또는 모듈 컴파일과 동시에 메모리의 초기 내용을 가져오고 생성 할 수 있도록합니다.
- WebAssembly에서 동적 연결을 구현하는 데 중요한 구성 요소인 multiple module instances에서 단일 Memory 객체를 가져올 수 있습니다.

> **참고:** [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html)에서 완전히 동작하는 예제를 확인할 수 있습니다. ([see it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html))

## 테이블 인스턴스

WebAssembly 테이블은 JavaScript 및 WebAssembly 코드로 액세스 할 수 있는 크기가 조정가능한 형식의 [references](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) 배열입니다. 메모리는 크기를 조정할 수있는 원시 바이트 배열을 제공하지만 참조는 안전성, 이식성 및 안정성을 이유로 내용으로 직접 읽거나 쓰지 않아야하는 engine-trusted 값이므로 참조가 메모리에 저장되는 것은 안전하지 않습니다.

테이블에는 테이블에 저장할 수있는 참조 유형을 제한하는 요소 유형이 있습니다. WebAssembly의 현재 반복에서는 WebAssembly 코드 함수에 필요한 참조 유형이 하나뿐이므로 올바른 요소 유형이 하나만 있습니다. 향후 반복에서는 더 많은 요소 유형이 추가됩니다.

함수 참조(Function references)는 함수 포인터가 있는 C / C ++와 같은 언어를 컴파일하는 데 필요합니다. C / C ++의 네이티브 구현시 함수 포인터는 프로세스의 가상 주소 공간에있는 함수 코드의 원시 주소로 표시되므로 위에서 언급 한 안전상의 이유로 선형 메모리에 직접 저장할 수 없습니다. 대신 함수 참조는 테이블에 저장되며 선형 메모리에 저장 할 수 있는 정수인 인덱스가 대신 전달됩니다.

함수 포인터를 호출 할 때 WebAssembly 호출자는 인덱스를 제공합니다.이 호출자는 인덱싱 된 함수 참조를 인덱싱하고 호출하기 전에 테이블에 대해 safety bounds를 검사 할 수 있습니다. 따라서 테이블은 현재 저수준 프로그래밍 언어 기능을 안전하고 이식 가능하게 컴파일하는 데 사용되는 다소 낮은 수준의 프리미티브(primitive)입니다.

테이블은 테이블의 값 중 하나를 업데이트하는 [`Table.prototype.set()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set)과 테이블에 저장할 수있는 값의 수를 늘리는 [`Table.prototype.grow()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow)를 통해 변형 될 수 있습니다. 이를 통해 간접적으로 호출 할 수있는 함수 집합이 시간이 지남에 따라 변경 될 수 있으며 이는 [dynamic linking techniques](http://webassembly.org/docs/dynamic-linking/)에 필요합니다. mutations는 JavaScript의 [`Table.prototype.get()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get)과 wasm 모듈을 통해 즉시 액세스 할 수 있습니다.

### 테이블 예제

두 요소가 있는 테이블(요소 0은 13을 반환하고 요소 1은 42를 반환)을 만들고 내보내는 WebAssembly 모듈([table.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/table.wasm)에서 확인 가능)로 간단한 테이블 예제를 보겠습니다.

1. 새로운 디렉토리에 `table.wasm`을 복사하여 만듭니다.

   > **참고:** [table.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat)에서 모듈의 텍스트 표현(text representation)을 확인할 수 있습니다.

2. [HTML template](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)를 같은 디렉토리에 복사하여 `table.html`라는 파일명으로 저장합니다.
3. wasm 모듈을 fetch, compile, instantiate하기 전 다음의 코드를 HTML body아래의 {{htmlelement("script")}} 요소안에 넣습니다.

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then(
     function (results) {
       // add code here
     },
   );
   ```

4. 이제 테이블 안에 있는 정보에 엑세스 하겠습니다. 다음의 코드를 위의 add code here 부분에 넣습니다.

   ```js
   var tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

이 코드는 테이블에 저장된 각 함수 참조를 차례로 액세스하고 인스턴스화하여 가지고 있는 값을 콘솔에 출력합니다. [`Table.prototype.get()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) 호출로 각 함수 참조를 검색 한 다음 추가 세트를 추가합니다 실제로 함수를 호출하려면 끝에 괄호를 사용하십시오.

> **참고:** 우리의 완전한 데모는 [table.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html)에서 찾을 수 있습니다. ([see it live also](https://mdn.github.io/webassembly-examples/js-api-examples/table.html))

## Globals

WebAssembly는 하나 이상의 {{jsxref ( "WebAssembly.Module")}} 인스턴스 전체에서 JavaScript와 가져오기 / 내보내기가 가능한 전역 변수 인스턴스를 생성 할 수 있습니다. 이는 여러 모듈을 동적으로 연결할 수 있으므로 매우 유용합니다.

JavaScript 내부에서 WebAssembly 전역 인스턴스를 만들려면 다음과 같은 {{jsxref ( "WebAssembly.Global ()")}} 생성자를 사용합니다.

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

다음 두가지 매게변수를 확인 할 수 있습니다.

- 전역 변수를 설정하는 두 가지 속성이 포함 된 객체.

  - `value`: WebAssembly 모듈에서 사용할 수 있는 데이터 타입입니다. 다음의 값을 사용할 수 있습니다. — `i32`, `i64`, `f32`, `f64`.
  - `mutable`: boolean 값이며 mutable이 가능한지 여부를 지정합니다.

- 변수의 실제 값을 포함하는 값. 유형이 지정된 데이터 유형과 일치하면 어떤 값이든 될 수 있습니다.

다음예제에서 mutable `i32`타입으로 정의되고 value 0을 가진 global로 어떻게 사용하는지 알아보겠습니다.

global 값은 `Global.value` 속성을 사용하여 처음 42로 변경된 다음 `global.wasm`module에서 내보낸 `incGlobal()` 함수를 사용하여 43으로 변경됩니다. 이것은 값이 주어진 값에 1을 더한 다음 새 값을 반환합니다.

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  output.innerHTML += `Testing ${msg}: `;
  if (got !== expected)
    output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  else output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **참고:** [running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)에서 라이브 예제를 확인하고 에서 [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html) 소스코드를 확인 할 수 있습니다.

## Multiplicity

이제 우리는 WebAssembly 기본 블록의 사용법을 보여주었습니다. 다중성의 개념을 언급하기에 좋은 곳입니다. 여기서 구조적 효율성 측면에서의 다양한 발전과 함께 WebAssembly를 제공합니다.

- 하나의 모듈은 하나의 함수 리터럴이 N 개의 클로저 값을 생성 할 수있는 것과 같은 방식으로 N 개의 인스턴스를 가질 수 있습니다.
- 하나의 모듈 인스턴스는 인스턴스의 "주소 공간"을 제공하는 0-1 메모리 인스턴스를 사용할 수 있습니다. WebAssembly의 이후 버전에서는 모듈 인스턴스 당 0-N 개의 메모리 인스턴스가 허용 될 수 있습니다 ([Multiple Tables and Memories](http://webassembly.org/docs/future-features/#multiple-tables-and-memories) 참조).
- 하나의 모듈 인스턴스는 0-1 테이블 인스턴스를 사용할 수 있습니다. 이것은 C 함수 포인터를 구현하는 데 사용되는 인스턴스의 "함수 주소 공간"입니다. WebAssembly의 향후 버전에서는 향후 모듈 인스턴스 당 0-N 테이블 인스턴스를 허용 할 수 있습니다.
- 하나의 메모리 또는 테이블 인스턴스는 0-N 모듈 인스턴스에서 사용할 수 있습니다.이 인스턴스는 모두 동일한 주소 공간을 공유하므로 [dynamic linking](http://webassembly.org/docs/dynamic-linking)이 가능합니다.

Understanding text format에서 multiplicity in action를 확인 할 수있습니다. - [Mutating tables and dynamic linking section](/ko/docs/WebAssembly/Understanding_the_text_format#Mutating_tables_and_dynamic_linking)을 참조하십시오.

## 요약

여기서 WebAssembly JavaScript API를 사용하여 JavaScript 컨텍스트에 WebAssembly 모듈을 포함하고 해당 기능을 사용하는 방법과 JavaScript에서 WebAssembly 메모리 및 테이블을 사용하는 방법에 대해 살펴 보았습니다. 그리고 다중성의 개념에 대해서도 언급했습니다.

## 바깥 고리

- [webassembly.org](http://webassembly.org/)
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
