---
title: 웹어셈블리
slug: WebAssembly
l10n:
  sourceCommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{WebAssemblySidebar}}

WebAssembly는 최신 웹 브라우저에서 실행할 수 있는 새로운 유형의 코드입니다. 네이티브에 가까운 성능으로 동작하며 컴팩트한 바이너리 포맷을 제공하는 저수준 어셈블리 언어로, C/C++, Rust 등과 같은 언어의 컴파일 타겟으로써 그런 언어로 작성된 프로그램을 웹에서 사용할 수 있게 해줍니다. 또한 JavaScript와 함께 실행되며 서로를 보완할 수 있도록 설계되었습니다.

## 간단히 말해서

웹어셈블리는 웹 플랫폼에 있어서 상당히 큰 의의를 갖습니다 — 여러 언어로 작성된 코드들을 네이티브에 가까운 속도로 웹에서 돌릴 수 있는 길을 제공하며, 이전까지는 웹에서 돌려볼 수 없었던 클라이언트 앱들을 웹에서 돌릴 수 있도록 만들어주기 때문입니다.

WebAssembly는 JavaScript와 함께 보완되고 실행되도록 설계되었습니다. WebAssembly JavaScript API를 사용하여 WebAssembly 모듈을 JavaScript 앱에 불러와 둘 사이의 기능을 공유 할 수 있습니다. 따라서 WebAssembly 코드를 작성하는 방법을 몰라도 WebAssembly의 성능과 JavaScript의 편리함 및 유연성을 하나의 응용 프로그램에서 활용할 수 있습니다.

더 훌륭한 점은, 주요 브라우저 벤더의 적극적인 참여를 통해 [W3C 웹어셈블리 워킹 그룹](https://www.w3.org/wasm/) 및 [Community Group](https://www.w3.org/community/webassembly/)에서 웹 표준으로 개발되고있다는 것입니다.

## 가이드

- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
  - : 웹 어셈블리가 무엇인지, 왜 그렇게 유용한지, 어떻게 기존의 웹 플랫폼(혹은 그 이상)에 적응시켜 사용할 수 있는지 기본 개념을 알아봅시다.
- [Compiling a New C/C++ Module to WebAssembly](/ko/docs/WebAssembly/C_to_wasm)
  - : [Emscripten](https://emscripten.org/) 같은 도구를 사용해서 C/C++ 로 작성된 코드를 wasm으로 컴파일할 수 있습니다. 어떻게 컴파일할 수 있는지 알아봅시다.
- [Compiling an Existing C Module to WebAssembly](/ko/docs/WebAssembly/existing_C_to_wasm)
  - : WebAssembly의 핵심 기능은 기존의 C 라이브러리 개발 생태계을 활용해 개발자가 웹에서 사용할 수 있도록하는 것입니다.
- [Compiling from Rust to WebAssembly](/ko/docs/WebAssembly/rust_to_wasm)
  - : Rust 코드를 작성했다면 WebAssembly로 컴파일 할 수 있습니다! 이 튜토리얼은 Rust 프로젝트를 컴파일하여 기존 웹 애플리케이션에서 사용하기 위해 알아야 할 모든 것을 설명합니다.
- [Loading and running WebAssembly code](/ko/docs/WebAssembly/Loading_and_running)
  - : Wasm 모듈을 사용한 후에는 [WebAssembly JavaScript](/ko/docs/WebAssembly/JavAscript_interface) API를 [Fetch](/ko/docs/Web/API/Fetch_API) 또는 [XHR](/ko/docs/Web/API/XMLHtpRequest) API와 결합하는 방법에 대해 설명합니다.
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
  - : wasm 모듈을 브라우저로 불러왔으면, 사용해야겠지요? 본 글에서는 웹어셈블리 자바스크립트 API를 이용하여 웹어셈블리를 어떻게 사용하는지를 설명합니다.
- [Exported WebAssembly functions](/ko/docs/WebAssembly/Exported_functions)
  - : 익스포트 된 웹어셈블리 함수는 자바스크립트에서의 웹어셈블리 함수의 반영이며, 자바스크립트에서 웹어셈블리 코드를 호출할 수 있도록 해줍니다. 본 글에서는 익스포트 된 웹어셈블리 함수가 무엇인지에 대해 설명합니다.
- [Understanding WebAssembly text format](/ko/docs/WebAssembly/Understanding_the_text_format)
  - : 본 글에서는 웹어셈블리의 텍스트 포맷에 대해 설명합니다. 텍스트 포맷은 브라우저에서 개발자 도구를 이용하여 디버깅 할 때 보여지는 wasm 모듈의 저수준(Low-level) 문자형 표현입니다.
- [Converting WebAssembly text format to wasm](/ko/docs/WebAssembly/Text_format_to_wasm)
  - : 본 글에서는 텍스트 포맷으로 작성된 웹어셈블리 모듈을 wasm 바이너리로 변환하는 방법을 제시합니다.

## API 참조

- [WebAssembly instruction reference](/ko/docs/WebAssembly/Reference)
  - : WebAssembly 연산자 집합에 대한 대화형 샘플이 포함된 참조 문서입니다.
- [WebAssembly JavaScript interface](/ko/docs/WebAssembly/JavaScript_interface)
  - : 이 객체는 모든 WebAssembly 관련 기능의 네임스페이스 역할을 합니다.
- [`WebAssembly.Global()`](/ko/docs/WebAssembly/JavaScript_interface/Global)
  - : `WebAssembly.Global` 개체는 JavaScript와 [`WebAssembly.Module`](/ko/docs/WebAssembly/JavaScript_interface/Module) 인스턴스 여러 개에서 가져오고 내보낼 수 있는 전역 변수 인스턴스를 나타냅니다. 이렇게하면 여러 모듈을 동적으로 연결할 수 있습니다.
- [`WebAssembly.Module()`](/ko/docs/WebAssembly/JavaScript_interface/Module)
  - : `WebAssembly.Module` 개체에는 브라우저에서 이미 컴파일한 상태의 stateless WebAssembly 코드가 포함되어 있으며 효율적으로 [Worker와 효율적으로 공유](/ko/docs/Web/API/Worker/postMessage)하고 여러 번 인스턴스화 할 수 있습니다.
- [`WebAssembly.Instance()`](/ko/docs/WebAssembly/JavaScript_interface/Instance)
  - : `WebAssembly.Instance` 객체는 상태를 가지며, 실행가능한 `Module`의 인스턴스입니다. `Instance` 객체는 웹어셈블리 코드를 자바스크립트에서 부를 수 있도록 [익스포트된 모든 웹어셈블리 함수](/ko/docs/WebAssembly/Exported_functions)를 포함하고있습니다.
- [`WebAssembly.compile()`](/ko/docs/WebAssembly/JavaScript_interface/compile)
  - : `WebAssembly.compile()` 함수는 WebAssembly 이진 코드를 `WebAssembly.Module`개체로 컴파일 합니다.
- [`WebAssembly.compileStreaming()`](/ko/docs/WebAssembly/JavaScript_interface/compileStreaming)
  - : `WebAssembly.compileStreaming()` 함수는 스트리밍된 기본 소스에서 직접 `WebAssembly.Module`을 컴파일합니다.
- [`WebAssembly.instantiate()`](/ko/docs/WebAssembly/JavaScript_interface/instantiate)
  - : The `WebAssembly.instantiate()` function allows you to compile and instantiate WebAssembly code.
  - : `WebAssembly.instantiate()`함수로 WebAssembly 코드를 컴파일하고 인스턴스화할 수 있습니다.
- [`WebAssembly.instantiateStreaming()`](/ko/docs/WebAssembly/JavaScript_interface/instantiateStreaming)
  - : `WebAssembly.instantiateStreaming ()` 함수는 WebAssembly 코드를 컴파일하고 인스턴스화하여 `모듈`과 첫 번째 `인스턴스`를 반환하는 기본 API입니다.
- [`WebAssembly.validate()`](/ko/docs/WebAssembly/JavaScript_interface/validate)
  - : `WebAssembly.validate()` 함수는 지정된 형식의 WebAssembly 이진 코드 배열의 유효성을 확인합니다.
- [`WebAssembly.Memory()`](/ko/docs/WebAssembly/JavaScript_interface/Memory)
  - : `WebAssembly.Memory` 객체는 사이즈 조절 가능한 {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}로, `Instance`가 접근하는 메모리를 로우(raw) 바이트들로 들고있습니다.
- [`WebAssembly.Table()`](/ko/docs/WebAssembly/JavaScript_interface/Table)
  - : `WebAssembly.Table` 객체는 `Instance` 에 의해 접근되는 불투명한 값(함수 레퍼런스)들의 사이즈 조절 가능한, 형식지정된 배열입니다.
- [`WebAssembly.Tag()`](/ko/docs/WebAssembly/JavaScript_interface/Tag)
  - : `WebAssembly.Tag` 개체는 WebAssembly 코드에서 발생할 수 있는 WebAssembly 예외 유형을 정의합니다.
- [`WebAssembly.Exception()`](/ko/docs/WebAssembly/JavaScript_interface/Exception)
  - : `WebAssembly.Exception` 개체는 WebAssembly에서 JavaScript로 이동하거나 JavaScript에서 WebAssembly 예외 처리기로 이동하는 런타임 예외를 나타냅니다.
- [`WebAssembly.CompileError()`](/ko/docs/WebAssembly/JavaScript_interface/CompileError)
  - : 새 웹어셈블리 `CompileError` 객체를 생성합니다.
- [`WebAssembly.LinkError()`](/ko/docs/WebAssembly/JavaScript_interface/LinkError)
  - : 새 웹어셈블리 `LinkError` 객체를 생성합니다.
- [`WebAssembly.RuntimeError()`](/ko/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : 새 웹어셈블리 `RuntimeError` 객체를 생성합니다.

## 예제

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- [webassembly-examples](https://github.com/mdn/webassembly-examples/) 저장소에서 다른 예제들도 구경해보세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 바깥 고리

- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/emscripting-a-c-library/)
