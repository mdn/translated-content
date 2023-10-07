---
title: Understanding WebAssembly text format
slug: WebAssembly/Understanding_the_text_format
---

{{WebAssemblySidebar}}

사람이 WebAssembly를 읽고 편집 할 수 있게하려면 wasm 이진 형식의 텍스트 표현이 있어야합니다. 이것은 텍스트 편집기, 브라우저 개발자 도구 등에서 노출되도록 고안된 중간 양식입니다.이 장에서는 원시 구문과 텍스트 형식이 나타내는 기본 바이트 코드와 관련하여 Text format이 작동하는 방식과 자바 스크립트에서 wasm을 나타내는 객체 래퍼에 대해 설명합니다.

> **참고:** 여기서 다루는 내용은 여러분이 웹어셈블리를 자바스크립트에 바로 불러오는 이전의 방법보다 훨씬 어렵습니다.([웹어셈블리를 자바스크립트 API에 사용하기](/ko/docs/WebAssembly/Using_the_JavaScript_API) 참고), 하지만 여기서 배우는 내용을 통해 웹어셈블리 모듈을 작성해보면, 자바스크립트 라이브러리의 성능을 향상시킬수 있는 방법을 찾거나, 직접 웹어셈블리 컴파일러를 작성하는데 도움이 될 것입니다.

## S-expressions

WebAssembly에서 바이너리와 텍스트 사이에 기본적인 코드 교환 방식을 모듈이라 칭합니다. 텍스트 형식에서는, 모듈은 하나의 큰 S-expressions로 표현됩니다. S-expressions는 트리를 텍스트 형식으로 묘사하는 오래되고 쉬운 방법입니다. 모듈을 모듈의 구조와 코드로 표현되는 노드의 트리를 작성하기 위한 수단으로 생각하시면 됩니다. 추상적인 문법을 가진 개발 언어와는 다르게 웹어셈블리의 트리는 단순하면서 일반적으로 많이 사용하는 방식으로 구성되었습니다.

우선, S- expressions이 어떻게 보이는지 봅시다. 트리의 각 노드는 한 쌍의 괄호`( ... )` 안에 있습니다. 괄호 안의 첫 번째 레이블은 노드의 유형을 알려주고, 그 후에 속성 또는 하위 노드의 공백으로 구분 된 목록이 있습니다. 즉, WebAssembly S-expression을 의미합니다.

```rust
    (module (memory 1) (func))
```

모듈이라는 최상위 노드와 2개의 자식 노드를 가진 트리로 구성되었습니다. 그리고 "메모리" 노드에서는 1이라는 속성으로 "함수" 노드를 지칭하였습니다. 이제 이 표현식이 가지는 의미를 간단하게 알아보겠습니다.

### 간단한 모듈

가장 간단하고, 작동 가능한 wasm 모듈 작성을 시작합니다.

```rust
    (module)
```

이 모듈은 전체적으로 비어 있지만 올바르게 작동하는 모듈입니다.

만약 이 모듈을 바이너리로 전환하면,([웹어셈블리 텍스트 형식을 wasm으로 변환](/ko/docs/WebAssembly/Text_format_to_wasm) 참조), 우리는 8바이트짜리 모듈 헤더를 [이진 형식](http://webassembly.org/docs/binary-encoding/#high-level-structure)으로 보게 될 것입니다.

```rust
    0000000: 0061 736d              ; WASM_BINARY_MAGIC
    0000004: 0d00 0000              ; WASM_BINARY_VERSION
```

### Adding functionality to your module

별로 흥미롭지 않은 모양이군요. 그렇다면 한번 실행 가능한 모듈을 작성해 보도록 하겠습니다.

webassembly 모듈의 모든 코드는 다음과 같은 의사 코드 구조를 갖는 함수로 구성되어있습니다.

```rust
    ( func <signature> <locals> <body> )
```

- **명칭**(**signature**)은 함수에서 (인자를)받고 (반환 값)반환하는 형식을 정의합니다.
- **지역인수**(**locals**)는 자바스크립트의 변수 같지만, 명시적으로 형식을 정의합니다.
- **본문**(**body**)은 저수준 정의를 일렬로 나열한 목록입니다.

좀 다르게 보여도 다른 언어의 함수와 비슷합니다.

## Signatures and parameters

Signatures는 반환 형식 선언 목록 뒤에 오는 매개 변수 형식 선언 시퀀스입니다. 여기서 주목할 것은

- `(result)`가 없으면 함수는 아무것도 반환하지 않습니다.
- 현재 단 하나의 반환 형식을 가질 수 있으나, [이후에](https://webassembly.org/docs/future-features#multiple-return) 여러개를 반환할 수 있게 될 것입니다.

각 인자로 wasm은 현재 4가지의 형식을 지원합니다.

- `i32`: 32-bit integer
- `i64`: 64-bit integer
- `f32`: 32-bit float
- `f64`: 64-bit float

하나의 인자를 받기 위해 `(param i32)`라고 작성하고, 반환 값을 받기 위해 `(result i32)`라고 작성합니다. 아래에 2개의 32비트 정수를 받고 64비트 부동소수를 반환하는 바이너리 함수를 작성하였습니다.

```rust
    (func (param i32) (param i32) (result f64) ... )
```

signature 뒤에는 형식을 가진 locals를 나열합니다. `(local i32)`와 같이 씁니다. parameter는 기본적으로 locals에 속하며, 함수 호출 시 인자에 값을 전달받아 초기화 됩니다.

## local와 parameter를 getting, setting 하기

지역인수와 함수인자는 함수 본문에서 `get_local` 명령문과 `set_local` 명령문을 통해 가져오거나 설정할 수 있습니다.

The `get_local`/`set_local` 명령문은 숫자로 이루어진 요소를 가져오거나 설정합니다. parameter가 선언 순서상 먼저 위치하며, 그다음 locals 순으로 되어 있습니다.

```rust
    (func (param i32) (param f32) (local f64)
      get_local 0
      get_local 1
      get_local 2)
```

본문 첫 줄에 `get_local 0` 명령어로 i32 매게변수를 받아내게 되며, `get_local 1` 명령어로 f32 매게변수를 받게 될 것입니다. 그리고 `get_local 2` 명렁어로 f64 지역변수를 받을 수 있습니다.

여기서 하나의 문제가 생겼군요. 숫자로 된 순서대로 받자니 좀 혼란스럽고 짜증날 수 있습니다. 그래서 텍스트로 명명된 매게변수, 지역변수, 그리고 다른 요소들을 간편하게 달러문자 (`$`) 로 시작하여 선언할 수 있습니다.

따라서 위에 작성한 함수 명칭을 아래와 같이 재구성할 수 있습니다.

```rust
    (func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

이렇게 작성하면 `get_local 0` 대신 `get_local $p1` 처럼 표현할 수 있습니다. (참고로 여기서 사용된 $인자는 바이너리로 변환 시 다시 숫자로 바뀌게 됩니다.)

## Stack machines

우리가 함수 본문을 작성하기 전에 한가지 얘기할 게 더 있습니다. 바로 **스택머신** (stack machines) 이죠. 브라우저가 효율적으로 컴파일할 때, wasm 실행부 안에는 스택 머신에 대한 규칙이 정의되어 있습니다. 간단하게 생각하면 모든 형식을 스택에 넣고, 특정한 `i32`/`i64`/`f32`/`f64` 값을 스택에서 빼거나 넣는 식입니다.

예를 들면, `get_local`은 지역변수 값을 스택에 푸시하도록 정의됩니다. 그리고 `i32.add` 명령어로 두 개의 `i32` 값을 빼낸 다음(암묵적으로 스택에 넣은 2 개의 값을 가져갑니다.), 이 둘의 합(2^32 형태)을 계산한 다음, 결과로 나온 i32 값을 다시 넣게 됩니다.

함수가 호출되면, 이 함수는 빈 스택으로 시작하여 함수가 실행되는 동안 스택이 서서히 채우고 끝나면 다시 비워 버립니다. 아래 함수를 실행해 봅시다.

```rust
    (func (param $p i32)
      get_local $p
      get_local $p
      i32.add)
```

여기선 스택이 `i32` 값 딱 하나만 존재합니다. 그리고 (`$p + $p`) 식을 `i32.add` 명령어로 합한 결과가 나오죠. 결국 함수가 가지는 최후의 스택은 반환되는 값 하나 뿐입니다.

웹어셈블리 내 스택 머신의 유효성 보증은 명확합니다. 만약 `(result f32)` 식을 정의하면, 스택은 반드시 끝에 단 하나의 `f32` 값만 남아야 합니다. 만약 결과 형식이 정의되어 있지 않다면, 스택은 비어 있어야 하죠.

## 첫번째 함수 본문

전에 언급했듯이, 함수의 본문은 단순히 함수가 호출됐을 때 실행할 작업의 리스트입니다. 이전에 다루었던 것을 종합하면 아래와 같이 간단한 함수를 포함하는 모듈을 선언할 수 있습니다.

```rust
    (module
      (func (param $lhs i32) (param $rhs i32) (result i32)
        get_local $lhs
        get_local $rhs
        i32.add
      )
    )
```

이 함수는 2개의 매개변수를 갖고, 둘을 더하고, 그 결과를 반환합니다.

함수의 본문에 넣을 수 있는 것들은 훨씬 많지만 지금은 간단하게 시작할겁니다. 당신은 앞으로 더 많은 예제들을 보게 될 것입니다. 사용 가능한 opcodes의 모든 목록을 보고싶다면 [webassembly.org 시맨틱 문서](http://webassembly.org/docs/semantics/)에서 확인하세요.

### 함수 호출하기

함수는 혼자서 동작하지 않습니다. 호출해야합니다. ES2015 모듈에서와 마찬가지로 wasm 함수는 모듈 내부의 `export` 명령문에 의해 명시적으로 내보내야합니다.

locals와 마찬가지로 함수는 기본적으로 인덱스로 식별되지만 편의상 이름을 지정할 수 있습니다. 먼저 `func` 키워드 바로 뒤에 달러 기호가 붙은 이름을 추가합니다.

```rust
    (func $add … )
```

이제 내보내기 선언을 추가해야합니다. 다음과 같습니다.

```rust
    (export "add" (func $add))
```

여기서 `add`는 자바 스크립트에서 함수가 식별되는 이름이며 `$add`는 모듈 내에서 어떤 WebAssembly 함수가 내보내지는지를 선택합니다.

그래서 우리의 마지막 모듈은 (지금은) 다음과 같습니다.

```rust
    (module
      (func $add (param $lhs i32) (param $rhs i32) (result i32)
        get_local $lhs
        get_local $rhs
        i32.add)
      (export "add" (func $add))
    )
```

예제를 따라하려면 위의 모듈을 `add.wat`라는 파일에 저장 한 다음 wabt를 사용하여 `add.wasm`이라는 이진 파일로 변환하십시오 (자세한 내용은 [Converting WebAssembly text format to wasm](/ko/docs/WebAssembly/Text_format_to_wasm) 참조).

다음으로 바이너리를 `addCode` ([Fetching WebAssembly Bytecode](/ko/docs/WebAssembly/Fetching_WebAssembly_bytecode)에서 설명한대로)라는 형식화 된 배열에로드하고, 컴파일 및 인스턴스화 한 다음 자바 스크립트에서 `add` 함수를 실행합니다. (이제 `add()`는 인스턴스의 [`exports`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports) 속성에서 찾을 수 있습니다)

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> **참고:** 이 예제는 GitHub에서 [add.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/add.html)로 찾을 수 있습니다 ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). 인스턴스 함수에 대한 자세한 내용은 {{jsxref ( "WebAssembly.instantiate ()")}}를 참조하십시오.

## 기본 사항 둘러보기

이제는 기본 사항을 다뤘습니다. 더 많은 고급 기능을 살펴 보겠습니다.

### 같은 모듈 내에 있는 다른 함수 호출하기

`call` 명령어는 인덱스 또는 이름이 지정된 단일 함수를 호출합니다. 예를 들어, 다음 모듈에는 두 개의 함수가 있습니다. 하나는 값 42를 반환하고, 다른 하나는 첫 번째 플러스 1을 호출 한 결과를 반환합니다.

```js
    (module
      (func $getAnswer (result i32)
        i32.const 42)
      (func (export "getAnswerPlus1") (result i32)
        call $getAnswer
        i32.const 1
        i32.add))
```

> **참고:** `i32.const`는 단지 32 비트 정수를 정의하고 그것을 스택에 푸시합니다. 사용할 수있는 다른 유형의 `i32`를 바꿀 수 있으며 원하는 값으로 const 값을 변경할 수 있습니다 (여기서는 값을 `42`로 설정했습니다).

In this example you'll notice an `(export "getAnswerPlus1")` section, declared just after the `func` statement in the second function — this is a shorthand way of declaring that we want to export this function, and defining the name we want to export it as.

이는 함수 밖에서, 예전과 같은 방식으로 모듈의 다른 곳에서 별도의 function 문을 포함하는 것과 기능적으로 동일합니다. 예 :

```js
    (export "getAnswerPlus1" (func $functionName))
```

위의 모듈을 호출하는 JavaScript 코드는 다음과 같습니다.

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

> **참고:** 이 예제는 GitHub에서 [call.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/call.html)로 찾을 수 있습니다 ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/call.html)).

### 자바스크립트에 함수 가져오기

우리는 이미 JavaScript에서 WebAssembly 함수를 호출하는 것을 보았습니다. 그러나 JavaScript 함수를 호출하는 WebAssembly는 어떻습니까? WebAssembly에는 실제로 JavaScript에 대한 기본 지식이 없지만 JavaScript 또는 Wasm 함수를 사용할 수있는 함수를 가져 오는 일반적인 방법이 있습니다. 예제를 살펴 보겠습니다.

```js
    (module
      (import "console" "log" (func $log (param i32)))
      (func (export "logIt")
        i32.const 13
        call $log))
```

WebAssembly에는 2 단계 네임 스페이스가 있으므로 여기서 import 문은 콘솔`console`모듈에서 `log` 함수를 가져 오기를 요청한다는 의미입니다. 또한 앞서 소개 한 `call` 명령어를 사용하여 내 보낸 `logIt` 함수가 가져온 함수를 호출하는지 확인할 수 있습니다.

가져온 함수는 일반적인 함수와 같습니다. WebAssembly 유효성 검사에서 정적으로 서명하는 시그니처가 있으며, 인덱스가 주어지며 이름을 지정하고 호출 할 수 있습니다.

JavaScript 함수에는 서명 개념이 없으므로 임포트의 선언 된 서명에 관계없이 모든 JavaScript 함수를 전달할 수 있습니다. 모듈이 가져 오기를 선언하면 {{jsxref("WebAssembly.instantiate()")}}의 호출자는 해당 속성이있는 가져 오기 객체를 전달해야합니다.

위의 경우 `importObject.console.log`가 JavaScript 함수 인 객체 (`importObject`라고 부름)가 필요합니다.

이것은 다음과 같습니다.

```js
var importObject = {
  console: {
    log: function (arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("logger.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.logIt();
  },
);
```

> **참고:** 이 예제는 GitHub에서 [logger.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger.html)로 찾을 수 있습니다 (라이브([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html))도 참조하십시오).

### Declaring globals in WebAssembly

WebAssembly는 하나 이상의 {{jsxref("WebAssembly.Module")}} 인스턴스 전체에서 JavaScript 및 가져오기 / 내보내기가 가능한 전역 변수 인스턴스를 생성 할 수 있습니다. 이는 여러 모듈을 동적으로 연결할 수 있으므로 매우 유용합니다.

WebAssembly 텍스트 형식에서는 다음과 비슷합니다 (GitHub의 [global.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.wat) 참조, 라이브 JavaScript 예제는 [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) 참조).

```js
    (module
       (global $g (import "js" "global") (mut i32))
       (func (export "getGlobal") (result i32)
            (get_global $g))
       (func (export "incGlobal")
            (set_global $g
                (i32.add (get_global $g) (i32.const 1))))
    )
```

이것은 `global` 키워드를 사용하여 전역 값을 지정한다는 점을 제외하고는 이전에 보았던 것과 비슷하게 보이며 변수 mutable을 원하면 값의 데이터 유형과 함께 `mut` 키워드를 지정합니다.

JavaScript를 사용하여 동일한 값을 만들려면 {{jsxref("WebAssembly.Global()")}} 생성자를 사용합니다.

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly Memory

위의 예로든 로깅 기능은 아주 끔찍합니다. 단 하나의 정수만 출력합니다!(이 정수가 뭔지 어떻게 알겠어요 그죠?) 텍스트 문자열을 기록하려면 어떻게 해야할까요. 문자열 및 기타 복잡한 데이터 유형을 처리하기 위해 WebAssembly는 메모리를 제공합니다. 메모리는 사용하면서 크기를 키울 수 있는 대량의 바이트 배열 입니다. WebAssembly에는 [linear memory](http://webassembly.org/docs/semantics/#linear-memory)에서 읽고 쓰는 데 필요한 `i32.load` 및 `i32.store`와 같은 지침이 들어 있습니다.

JavaScript의 관점에서 볼 때 크기가 조정 가능한 큰 {{domxref("ArrayBuffer")}} 안에 메모리가 모두있는 것처럼 보입니다. 이는 말 그대로 asm.js와 함께 사용해야함을 의미합니다. (크기 조정할 수 없다는 점을 제외하고요. asm.js [Programming model](http://asmjs.org/spec/latest/#programming-model)을 참고 하세요.).

따라서 문자열은 이 선형 메모리 내부의 있는 sequence of bytes라고 할 수 있습니다. 우리가 적절한 바이트 문자열을 메모리에 썼다고 가정 해 보고 어떻게 그 문자열을 JavaScript로 전달하는지 보겠습니다.

핵심은 자바 스크립트가 {{jsxref("WebAssembly.Memory()")}} 인터페이스를 통해 WebAssembly 선형 메모리 인스턴스를 생성하고 연관된 인스턴스를 사용하여 기존 메모리 인스턴스에 액세스 할 수 있다는 것입니다 (현재 모듈 인스턴스 당 하나만 가질 수 있음). 메모리 인스턴스에는 [`buffer`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) getter가 있습니다.이 buffer getter는 전체 선형 메모리를 가리키는 `ArrayBuffer`를 반환합니다.

예를 들어 JavaScript의 [`Memory.grow()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow) 메소드를 통해 메모리 인스턴스를 늘릴 수도 있습니다. grow가 발생하면 `ArrayBuffer`s는 크기를 변경할 수 없기 때문에 현재의 `ArrayBuffer`가 분리되고 더 큰 새 메모리를 가리 키도록 새 `ArrayBuffer`가 만들어집니다. 즉, JavaScript에 문자열을 전달하기 위해 수행해야하는 모든 작업은 길이를 나타내는 방법과 함께 선형 메모리에있는 문자열의 오프셋을 전달하는 것입니다.

문자열 자체의 길이를 인코딩하는 방법에는 여러 가지가 있습니다 (예 : C 문자열). 여기서 간단히하기 위해 offset과 length를 매개 변수로 전달합니다.

```js
    (import "console" "log" (func $log (param i32) (param i32)))
```

자바 스크립트 측면에서 우리는 [TextDecoder API](/ko/docs/Web/API/TextDecoder)를 사용하여 바이트를 자바 스크립트 문자열로 쉽게 디코딩 할 수 있습니다. (여기서는 `utf8`을 지정하지만 다른 많은 인코딩이 지원됩니다.)

```js
function consoleLogString(offset, length) {
  var bytes = new Uint8Array(memory.buffer, offset, length);
  var string = new TextDecoder("utf8").decode(bytes);
  console.log(string);
}
```

이제 남은 부분은 `consoleLogString`이 WebAssembly `memory`에 액세스하는 부분입니다. WebAssembly는 JavaScript로 [`Memory`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) 객체를 만들고 WebAssembly 모듈에서 메모리를 가져 오거나 WebAssembly 모듈에서 메모리를 만들어 JavaScript로 내보낼 수 있는 유연성을 제공합니다.

간단히하기 위해 JavaScript로 작성한 다음 WebAssembly로 가져와 봅시다. 우리의 `import`statement는 다음과 같이 작성됩니다 :

```rust
    (import "js" "mem" (memory 1))
```

`1`은 가져온 메모리에 최소 1 페이지의 메모리가 있어야 함을 나타냅니다 (WebAssembly에서 페이지를 64KB로 정의 함).

문자열 "Hi"를 인쇄하는 완전한 모듈을 보겠습니다. 일반적인 컴파일 된 C 프로그램에서는 함수를 호출하여 문자열에 대한 메모리를 할당하지만 여기에 자체 어셈블리를 작성하고 전체 선형 메모리를 소유하기 때문에 `data` 섹션을 사용하여 전역 메모리에 문자열 내용을 쓸 수 있습니다. 데이터 섹션은 바이트의 문자열이 인스턴스화 시간에 주어진 오프셋에 쓰여질 수 있도록 하며 원시 실행 가능 형식의 `.data`sections와 유사합니다.

최종 wasm 모듈을 확인하겠습니다.

```rust
    (module
      (import "console" "log" (func $log (param i32 i32)))
      (import "js" "mem" (memory 1))
      (data (i32.const 0) "Hi")
      (func (export "writeHi")
        i32.const 0  ;; pass offset 0 to log
        i32.const 2  ;; pass length 2 to log
        call $log))
```

> **참고:** 위와 같이 WebAssembly 파일의 주석을 허용하는 두 개의 세미콜론 구문 (`;;`)을 확인하십시오.

자바 스크립트에서 우리는 1 페이지 메모리를 만들고 그것을 전달할 수 있습니다. 결과적으로 "Hi"가 콘솔에 출력됩니다 :

```js
var memory = new WebAssembly.Memory({ initial: 1 });

var importObject = { console: { log: consoleLogString }, js: { mem: memory } };

WebAssembly.instantiateStreaming(fetch("logger2.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.writeHi();
  },
);
```

> **참고:** 깃허브에서 소스 전체버전을 확인할 수 있습니다. [logger2.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger2.html) ([also see it live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

### WebAssembly tables

WebAssembly 텍스트 형식 둘러보기를 마무리하려면 WebAssembly에서 가장 복잡하고 어려운 부분 인 **tables**을 살펴 보겠습니다. 테이블은 기본적으로 WebAssembly 코드의 인덱스를 통해 액세스 할 수 있는 크기 조정이 가능한 참조 배열입니다.

왜 테이블이 필요한지를 알기 위해서는 앞서 보았던 `call` 명령어 ([Calling functions from other functions in the same module](#calling_functions_from_other_functions_in_the_same_module) 참고)가 필요합니다. 이 명령어는 정적 함수 인덱스를 취하며 따라서 오직 하나의 함수를 호출합니다. 그러나 호출 수신자가 런타임 값인 경우에는 어떻게 해야할까요?

- 자바 스크립트에서 항상 볼 수 있습니다. 함수는 최상위 클래스 입니다.
- C/C++에서, function pointers와 함께 볼 수 있습니다.
- C++에서, virtual functions와 함께 볼 수 있습니다.

WebAssembly에는 이를 구현하기 위해 일종의 호출 명령어가 필요했기 때문에 동적 함수 피연산자를 사용하는 `call_indirect`를 구현했습니다. 문제는 WebAssembly에서 피연산자를 지정해야하는 유일한 유형은 (현재) `i32`/`i64`/`f32`/`f64`라는 것입니다.

WebAssembly는 `anyfunc` 유형을 추가 할 수 있습니다 (유형이 모든 서명의 기능을 보유 할 수 있기 때문에 "any"가 붙어있습니다). 그러나 안타깝게도 이 `anyfunc` 유형은 보안상의 이유로 선형 메모리에 저장할 수 없습니다. 선형 메모리는 저장된 값의 원시 내용을 바이트로 표시하므로 wasm 내용이 임의로 웹에서 허용 하면 안되는 원시 함수 주소를 노출하거나 손상시킬 수 있습니다.

해결책은 테이블에 함수 참조를 저장하고 대신 테이블 인덱스를 전달하는 것입니다.이 인덱스는 i32 값입니다. `call_indirect`의 피연산자는 단순히 i32 인덱스 값일 수 있습니다.

#### Defining a table in wasm

그러면 우리 테이블에 함수를 어떻게 배치할까요? `data` 섹션을 사용하여 선형 메모리 영역을 바이트로 초기화하는 것처럼 `elem` 섹션을 사용하여 함수가있는 테이블 영역을 초기화 할 수 있습니다.

```rust
    (module
      (table 2 anyfunc)
      (elem (i32.const 0) $f1 $f2)
      (func $f1 (result i32)
        i32.const 42)
      (func $f2 (result i32)
        i32.const 13)
      ...
    )
```

- `(table 2 anyfunc)`에서 2는 테이블의 초기 크기 (즉, 두 개의 참조를 저장함)이고 `anyfunc`는 이러한 참조의 요소 유형이 "any signature가 있는 함수"로 선언합니다. WebAssembly의 현재 반복에서는 이것이 유일하게 허용되는 요소 유형이지만, 앞으로 더 많은 요소 유형이 추가 될 것입니다.
- 함수 (`func`) 섹션은 다른 선언 된 wasm 함수와 같습니다. 이것들은 테이블에서 참조 할 함수입니다 (예를 들어, 각각은 상수 값을 반환합니다). 섹션이 선언 된 순서는 중요하지 않습니다. 여기서는 함수를 어디에서나 선언 할 수 있으며 여전히 `elem` 섹션에서 함수를 참조 할 수 있습니다.
- `elem` 섹션은 모듈의 모든 함수 서브 세트를 순서에 상관없이 나열하며 중복을 허용 합니다. 이것은 참조되는 순서대로 테이블에서 참조 할 목록입니다.
- `elem` 섹션 내의 `(i32.const 0)` 값은 오프셋입니다. 이것은 섹션의 시작 부분에서 선언해야하며, 테이블 함수 참조가 채워지기 시작하는 인덱스를 지정합니다. 여기서 0과 2의 크기를 지정 했으므로 (위 참조) 인덱스 0과 1에서 두 개의 참조를 채울 수 있습니다. 오프셋 1에서 참조를 쓰고 싶다면 `(i32.const 1)`이고 테이블 크기는 3이어야합니다.

> **참고:** 초기화되지 않은 요소에는 기본 throw-on-call 값이 제공됩니다.

자바 스크립트에서 이와 같은 테이블 인스턴스를 생성하는 호출은 다음과 같습니다.

```js
    function() {
      // table section
      var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});

      // function sections:
      var f1 = function() { … }
      var f2 = function() { … }

      // elem section
      tbl.set(0, f1);
      tbl.set(1, f2);
    };
```

#### Using the table

우리가 사용 할 테이블을 정의했습니다. 다음 코드 섹션을 통해 테이블을 사용 할 수 있습니다.

```rust
    (type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
    (func (export "callByIndex") (param $i i32) (result i32)
      get_local $i
      call_indirect (type $return_i32))
```

- `(type $return_i32 (func (param i32)))` 블록은 참조 이름과 함께 유형을 지정합니다. 이 유형은 나중에 테이블 함수 참조 호출의 유형 점검을 수행 할 때 사용됩니다. 여기서 우리는 참조가 `i32`를 결과로 반환하는 함수라고 코드를 작성했습니다.
- 다음으로, `callByIndex`라는 이름으로 익스포트 될 함수를 정의합니다. 이것은 하나의 `i32`를 매개 변수로 사용하며, 인수 이름 `$i`가 주어집니다.
- Inside the function, we add one value to the stack — whatever value is passed in as the parameter `$i`. 매개 변수 `$i`로 전달되는 값이 무엇이든간에 함수 내에서 스택에 하나의 값을 추가합니다.
- 마지막으로, `call_indirect`를 사용하여 테이블에서 함수를 호출합니다. 스택에서 `$i`의 값을 암시 적으로 팝합니다. 이것의 최종 결과는 `callByIndex` 함수가 테이블에서 `$i`'th 함수를 호출한다는 것입니다.

다음과 같이 `call_indirect` 매개 변수를 명령 호출 중에 명시 적으로 선언 할 수도 있습니다.

```rust
    (call_indirect (type $return_i32) (get_local $i))
```

자바 스크립트와 같이 더 높은 수준의 표현력있는 언어에서는 함수가 포함 된 배열 (또는 더 많은 가능성이있는 객체)을 사용하여 동일한 작업을 수행한다고 상상할 수 있습니다. 의사 코드는 `tbl[i]()`와 유사합니다.

다시 typechecking을 보면 WebAssembly가 typechecked되고 `anyfunc`가 "모든 함수 서명"을 의미하기 때문에 callee에서 호출 수신자의 추정 서명을 제공해야하므로 `$return_i32` 유형이 포함되어 `i32`를 반환하는 함수가 예상됩니다. 호출 수신자와 일치하는 서명이 없으면 (대신 `f32`가 반환 됨) {{jsxref("WebAssembly.RuntimeError")}}가 발생합니다.

`call_indirect`와 호출하는 테이블을 연결하는 것은 무엇입니까? 대답은 모듈 인스턴스 당 하나의 테이블 만 허용된다는 것입니다. `call_indirect`가 암시 적으로 호출하는 것입니다. 향후, 여러 테이블이 허용 될 때, 우리는 또한 어떤 종류의 테이블 식별자를 지정할 필요가있습니다

```rust
    call_indirect $my_spicy_table (type $i32_to_void)
```

전체 모듈은 모두 이와 같이 보이며 [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.wat) 예제 파일에서 찾을 수 있습니다.

```rust
    (module
      (table 2 anyfunc)
      (func $f1 (result i32)
        i32.const 42)
      (func $f2 (result i32)
        i32.const 13)
      (elem (i32.const 0) $f1 $f2)
      (type $return_i32 (func (result i32)))
      (func (export "callByIndex") (param $i i32) (result i32)
        get_local $i
        call_indirect (type $return_i32))
    )
```

다음 자바 스크립트를 사용하여 웹 페이지에로드합니다.

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> **참고:** [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.html)에서 이 예제를 확인할 수 있습니다. ([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> **참고:** Memory와 마찬가지로 테이블은 자바 스크립트 ([`WebAssembly.Table()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table) 참고)와 다른 wasm 모듈로 가져 오거나 다른 wasm 모듈에서 가져올 수도있다.

### Mutating tables and dynamic linking

JavaScript는 함수 참조에 대한 모든 액세스 권한을 갖기 때문에 Grow (), get () 및 set () 메서드를 통해 JavaScript에서 Table 객체를 변형 할 수 있습니다. WebAssembly에서 참조 유형을 가져 오면 WebAssembly 코드는 get_elem / set_elem 명령어로 테이블 자체를 변형 할 수 있습니다.

테이블은 변경 가능하기 때문에 정교한 로드 시간 및 런타임 [dynamic linking schemes](http://webassembly.org/docs/dynamic-linking)를 구현하는 데 사용할 수 있습니다. 프로그램이 동적으로 링크되면 여러 인스턴스가 동일한 메모리 및 테이블을 공유합니다. 이것은 여러 컴파일 된 `.dll`이 단일 프로세스의 주소 공간을 공유하는 기본 응용 프로그램과 대칭입니다.

이 작업을 보려면 Memory 객체와 Table 객체가 포함 된 단일 가져 오기 객체를 만들고 동일한 가져 오기 객체를 여러 [`instantiate()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) 호출에 전달합니다.

`.wat` 예제는 다음과 같습니다.

`shared0.wat`:

```rust
    (module
      (import "js" "memory" (memory 1))
      (import "js" "table" (table 1 anyfunc))
      (elem (i32.const 0) $shared0func)
      (func $shared0func (result i32)
       i32.const 0
       i32.load)
    )

`shared1.wat`:

    (module
      (import "js" "memory" (memory 1))
      (import "js" "table" (table 1 anyfunc))
      (type $void_to_i32 (func (result i32)))
      (func (export "doIt") (result i32)
       i32.const 0
       i32.const 42
       i32.store  ;; store 42 at address 0
       i32.const 0
       call_indirect (type $void_to_i32))
    )
```

작업은 다음과 같습니다.

1. `shared0func` 함수는 `shared0.wat`에 정의되어 있으며 가져온 테이블에 저장됩니다.
2. 이 함수는 값 `0` 을 포함하는 상수를 작성한 다음 `i32.load` 명령을 사용하여 제공된 메모리 색인에 포함 된 값을로드합니다. 제공된 인덱스는 `0`입니다 - 다시 암시 적으로 스택에서 이전 값을 팝합니다. 따라서 `shared0func`는 메모리 인덱스 `0`에 저장된 값을로드하고 반환합니다.
3. `shared1.wat` 에서 `doIt`이라는 함수를 내 보냅니다.이 함수는 `0`과 `42` 값을 포함하는 두 개의 상수를 만든 다음 `i32.store`를 호출하여 제공된 값을 가져온 메모리의 제공된 색인에 저장합니다. 다시 말하지만, 스택에서이 값을 암시 적으로 팝하므로 메모리 인덱스 `0`에 값 `42`를 저장합니다.
4. 함수의 마지막 부분에서 값 0으로 상수를 만든 다음이 인덱스 0에서 `shared0func`라는 함수를 호출하고 `shared0.wat`의 `elem` 블록에 먼저 저장합니다.
5. `shared0func` 가 호출되면 `shared1.wat`의 `i32.store` 명령을 사용하여 메모리에 저장된 `42`를 로드합니다.

> **참고:** **Note**: 위의 표현식은 암시 적으로 스택의 값을 다시 표시하지만 명령 호출 내에서 명시 적으로 이를 선언 할 수 있습니다. 예를 들면 다음과 같습니다.: (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))

어셈블리로 변환 한 후 다음 코드를 통해 JavaScript에서 `shared0.wasm`과 `shared1.wasm`을 사용합니다.

```js
var importObj = {
  js: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    table: new WebAssembly.Table({ initial: 1, element: "anyfunc" }),
  },
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch("shared0.wasm"), importObj),
  WebAssembly.instantiateStreaming(fetch("shared1.wasm"), importObj),
]).then(function (results) {
  console.log(results[1].instance.exports.doIt()); // prints 42
});
```

컴파일되는 각 모듈은 동일한 메모리 및 테이블 객체를 가져와 동일한 선형 메모리 및 테이블 "주소 공간"을 공유 할 수 있습니다.

> **참고:** [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/shared-address-space.html)에서 예제를 확인할 수 있습니다.([see it live also](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Summary

WebAssembly 텍스트 형식의 주요 구성 요소에 대한 높은 수준의 둘러보기와 WebAssembly JS API에 반영되는 방법을 마무리합니다.

## See also

- 포함되지 않은 주요 내용은 함수 본문에서 발생할 수있는 모든 명령의 포괄적 인 목록입니다. 각 명령어의 처리 방법은 [WebAssembly semantics](http://webassembly.org/docs/semantics)을 참조하십시오.
- spec 해석기로 구현된 [grammar of the text format](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax)도 참조하십시오.
