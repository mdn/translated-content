---
title: WebAssembly.Module
slug: WebAssembly/JavaScript_interface/Module
---

{{WebAssemblySidebar}}

**`WebAssembly.Module`** 객체는 브라우저에서 이미 컴파일 된 stateless WebAssembly 코드를 포함하며 효율적으로 [Workers와 공유](/ko/docs/Web/API/Worker/postMessage)하고 여러 번 인스턴스화 할 수 있습니다. 모듈을 인스턴스화하려면 [WebAssembly.instantiate() 2차 오버로드를 호출](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Secondary_overload_%E2%80%94_taking_a_module_object_instance)하세요.

`WebAssembly.Module()` 생성자 함수를 호출하여 지정된 WebAssembly 바이너리 코드를 동기식으로 컴파일 할 수 있습니다. 그러나 `Module`을 쓰는 주된 방법은 {{jsxref ( "WebAssembly.compile ()")}}과 같은 비동기 컴파일 함수를 사용하는 것입니다.

## 생성자

- {{jsxref("Global_Objects/WebAssembly/Module/Module", "WebAssembly.Module()")}}
  - : Creates a new `Module` object.

## 정적 속성

- {{jsxref("Global_Objects/WebAssembly/Module/customSections", "WebAssembly.Module.customSections()")}}
  - : 모듈(`Module`)과 문자열이 주어지면 모듈의 모든 사용자 정의 섹션 내용의 사본을 주어진 문자열 이름으로 반환합니다.
- {{jsxref("Global_Objects/WebAssembly/Module/exports", "WebAssembly.Module.exports()")}}
  - : 모듈(`Module`)이 주어지면 선언 된 모든 내보내기에 대한 설명이 들어있는 배열을 반환합니다.
- {{jsxref("Global_Objects/WebAssembly/Module/imports", "WebAssembly.Module.imports()")}}
  - : 모듈(`Module`)이 주어지면 선언 된 모든 가져오기에 대한 설명이 들어있는 배열을 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
