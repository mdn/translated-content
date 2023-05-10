---
title: 웹어셈블리
slug: WebAssembly
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
  - : [Emscripten](https://emscripten.org/) 같은 도구를 사용해서 C/C++ 로 작성된 코드를 .wasm으로 컴파일할 수 있습니다. 어떻게 컴파일할 수 있는지 알아봅시다.
- [Compiling an Existing C Module to WebAssembly](/ko/docs/WebAssembly/existing_C_to_wasm)
  - : WebAssembly의 핵심 기능은 기존의 C 라이브러리 개발 생태계을 활용해 개발자가 웹에서 사용할 수 있도록하는 것입니다.
- [Compiling from Rust to WebAssembly](/ko/docs/WebAssembly/rust_to_wasm)
  - : Rust 코드를 작성했다면 WebAssembly로 컴파일 할 수 있습니다! 이 튜토리얼은 Rust 프로젝트를 컴파일하여 기존 웹 애플리케이션에서 사용하기 위해 알아야 할 모든 것을 설명합니다.
- [Loading and running WebAssembly code](/ko/docs/WebAssembly/Loading_and_running)
  - : 본 글에서는 .wasm 파일을 만든 후에 [Fetch](/ko/docs/Web/API/Fetch_API) 나 [XHR](/ko/docs/Web/API/XMLHttpRequest) API를 이용하여 [WebAssembly Javascript](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) API와 결합한 후 .wasm 파일을 브라우저로 가져오는 방법, 컴파일하고 초기화 하는 방법에 대해서 다룹니다.
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
  - : .wasm 모듈을 브라우저로 불러왔으면, 사용해야겠지요? 본 글에서는 웹어셈블리 자바스크립트 API를 이용하여 웹어셈블리를 어떻게 사용하는지를 설명합니다.
- [Exported WebAssembly functions](/ko/docs/WebAssembly/Exported_functions)
  - : 익스포트 된 웹어셈블리 함수는 자바스크립트에서의 웹어셈블리 함수의 반영이며, 자바스크립트에서 웹어셈블리 코드를 호출할 수 있도록 해줍니다. 본 글에서는 익스포트 된 웹어셈블리 함수가 무엇인지에 대해 설명합니다.
- [Understanding WebAssembly text format](/ko/docs/WebAssembly/Understanding_the_text_format)
  - : 본 글에서는 웹어셈블리의 텍스트 포맷에 대해 설명합니다. 텍스트 포맷은 브라우저에서 개발자 도구를 이용하여 디버깅 할 때 보여지는 .wasm 모듈의 저수준(Low-level) 문자형 표현입니다.
- [Converting WebAssembly text format to wasm](/ko/docs/WebAssembly/Text_format_to_wasm)
  - : 본 글에서는 텍스트 포맷으로 작성된 웹어셈블리 모듈을 .wasm 바이너리로 변환하는 방법을 제시합니다.

## API 참조

- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : 이 객체는 모든 웹어셈블리와 관련된 기능의 네임스페이스로서 역할합니다.
- {{jsxref("Global_objects/WebAssembly/Global", "WebAssembly.Global()")}}
  - : `WebAssembly.Global` 객체는 전역 변수 인스턴스를 나타내며 JavaScript 및 하나 이상의 {{jsxref("WebAssembly.Module")}} 인스턴스에서 가져 오거나 내보낼 수 있습니다. 이렇게하면 여러 모듈을 동적으로 연결할 수 있습니다.
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : `WebAssembly.Module` 객체는 이미 브라우저에 의해 컴파일된 상태없는 웹어셈블리 코드를 담고있습니다. 게다가 여러번 인스턴스화 시킬 수 있고 효과적으로 합니다.
    WebAssembly.Module 객체는 브라우저에서 이미 컴파일 된 상태의stateless WebAssembly 코드를 포함하며 [Worker와 효율적으로 공유](/ko/docs/Web/API/Worker/postMessage)하고 여러 번 인스턴스화 할 수 있습니다.
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance()")}}
  - : `WebAssembly.Instance` 객체는 상태를 가지며, 실행가능한 `Module`의 인스턴스입니다. `Instance` 객체는 웹어셈블리 코드를 자바스크립트에서 부를 수 있도록 [익스포트된 모든 웹어셈블리 함수](/ko/docs/WebAssembly/Exported_functions)를 포함하고있습니다.
- {{jsxref("Global_objects/WebAssembly/instantiateStreaming", "WebAssembly.instantiateStreaming()")}}
  - : `WebAssembly.instantiateStreaming ()` 함수는 WebAssembly 코드를 컴파일하고 인스턴스화하여 `모듈`과 첫 번째 `인스턴스`를 반환하는 기본 API입니다.
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : `WebAssembly.Memory` 객체는 사이즈 조절 가능한 {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}로, `Instance`가 접근하는 메모리를 로우(raw) 바이트들로 들고있습니다.
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : `WebAssembly.Table` 객체는 `Instance` 에 의해 접근되는 불투명한 값(함수 레퍼런스 등)들의 사이즈 조절 가능한, 형식지정된 배열입니다.
- {{jsxref("WebAssembly.CompileError()")}}
  - : 새 웹어셈블리 `CompileError` 객체를 생성합니다.
- {{jsxref("WebAssembly.LinkError()")}}
  - : 새 웹어셈블리 `LinkError` 객체를 생성합니다.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : 새 웹어셈블리 `RuntimeError` 객체를 생성합니다.

## 예제

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- [webassembly-examples](https://github.com/mdn/webassembly-examples/) 저장소에서 다른 예제들도 구경해보세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 바깥 고리

- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [webassembly.org](http://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Large-Allocation HTTP header](/ko/docs/Web/HTTP/Headers/Large-Allocation)
- [Emscripting a C Library to Wasm](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)
