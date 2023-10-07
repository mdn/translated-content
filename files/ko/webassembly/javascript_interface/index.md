---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
---

{{WebAssemblySidebar}}

**`WebAssembly`** 자바스크립트 객체는 모든 [WebAssembly](/ko/docs/WebAssembly)에 관계된 기능의 네임스페이스로서 역할합니다.

대부분의 전역객체와 다르게, `WebAssembly`는 생성자가 아닙니다 (함수 객체가 아닙니다). 비슷한 예로 수학적인 상수나 함수들을 담고있는 {{jsxref("Math")}} 객체나, 국제화 관련 생성자나 언어에 민감한 다른 함수들을 담고있는 {{jsxref("Intl")}} 등이 있습니다.

## 설명

`WebAssembly` 객체의 기본적인 사용례는 다음과 같습니다:

- {{jsxref("WebAssembly.instantiate()")}} 함수를 사용해서 웹어셈블리 코드 불러오기.
- {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}} 생성자로 새 메모리와 테이블 인스턴스 생성하기.
- {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}} 생성자로 웹어셈블리에서 발생하는 에러에 대한 처리장치 만들기.

## 메서드

- {{jsxref("WebAssembly.instantiate()")}}
  - : WebAssembly 코드를 컴파일하고 인스턴스화하여 `Module`과 첫 번째 `Instance`를 반환하는 기본 API입니다.
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : 스트리밍 된 원본 소스에서 직접 WebAssembly 모듈을 컴파일하고 인스턴스화하여 `Module`과 첫 번째 `Instance`를 반환합니다.
- {{jsxref("WebAssembly.compile()")}}
  - : WebAssembly 바이너리 코드에서 {{jsxref("WebAssembly.Module")}}을 컴파일하여 인스턴스화를 별도의 단계로 남겨 둡니다.
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : {{jsxref("WebAssembly.Module")}}을 스트림 된 원본 소스에서 직접 컴파일하여 인스턴스화를 별도의 단계로 남겨 둡니다.
- {{jsxref("WebAssembly.validate()")}}
  - : 바이트가 유효한 WebAssembly 코드 (`true`)인지 아닌지 (`false`)를 반환하여 WebAssembly 바이너리 코드의 지정된 입력 된 배열을 확인합니다.

## 생성자

- {{jsxref("WebAssembly.Global()")}}
  - : Creates a new WebAssembly `Global` object.
- {{jsxref("WebAssembly.Module()")}}
  - : Creates a new WebAssembly `Module` object.
- {{jsxref("WebAssembly.Instance()")}}
  - : Creates a new WebAssembly `Instance` object.
- {{jsxref("WebAssembly.Memory()")}}
  - : Creates a new WebAssembly `Memory` object.
- {{jsxref("WebAssembly.Table()")}}
  - : Creates a new WebAssembly `Table` object.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Creates a new WebAssembly `CompileError` object.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Creates a new WebAssembly `LinkError` object.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Creates a new WebAssembly `RuntimeError` object.

## 예제

다음 예제 (GitHub의 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) 데모보기 및 [라이브보기](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html))에서는 기본 소스에서 .wasm 모듈을 직접 스트리밍 한 다음 컴파일하고 인스턴스화합니다. 프로미스는 `ResultObject`로 충족됩니다. `instantiateStreaming()` 함수는 {{domxref ( "Response")}} 객체에 대한 promise를 받아들이므로 직접 {{domxref("fetch()")}} 호출에 전달할 수 있습니다.

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

그런 다음 ResultObject의 인스턴스 구성에 액세스하고 그 안에 있는 `exported_func`을 호출합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 바깥 고리

- [웹어셈블리](/ko/docs/WebAssembly) 개요 페이지
- [웹어셈블리의 컨셉](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
