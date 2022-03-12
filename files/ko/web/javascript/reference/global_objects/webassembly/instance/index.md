---
title: WebAssembly.Instance
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance
---
{{JSRef}}

**`WebAssembly.Instance`** 개체는 [WebAssembly.Module](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)의 상태 저장되고 실행 가능한 인스턴스입니다. `Instance` 객체에는 JavaScript에서 WebAssembly 코드로 호출 할 수있는 모든 [Exported WebAssembly functions](/ko/docs/WebAssembly/Exported_functions)가 포함되어 있습니다.

주어진 {{jsxref ( "WebAssembly.Module")}} 객체를 동기적으로 인스턴스화하기 위해 `WebAssembly.Instance()` 생성자 함수를 호출 할 수 있습니다. 하지만 `Instance`를 가져 오는 주요 방법은 비동기 {{jsxref ( "WebAssembly.instantiateStreaming ()")}} 함수를 사용하는 것입니다.

## 생성자

- [`WebAssembly.Instance()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance)
  - : Creates a new `Instance` object.

## 인스턴스 속성

- {{jsxref("WebAssembly/Instance/exports", "Instance.prototype.exports")}}
  - : Returns an object containing as its members all the functions exported from the WebAssembly module instance, to allow them to be accessed and used by JavaScript. Read-only.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
