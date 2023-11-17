---
title: WebAssembly.Table()
slug: WebAssembly/JavaScript_interface/Table
---

{{WebAssemblySidebar}}

**`WebAssembly.Table()`** 생성자는 지정된 크기 및 요소 유형의 새 `Table` 객체를 만듭니다.

이것은 자바 스크립트 래퍼 객체로, 함수 참조를 저장하는 WebAssembly 테이블을 나타내는 배열과 같은 구조입니다. JavaScript 또는 WebAssembly 코드로 작성된 테이블은 JavaScript 및 WebAssembly에서 액세스 및 변경할 수 있습니다.

> **참고:** 테이블은 현재 function references만 저장할 수 있지만 나중에 확장 될 수 있습니다.

## Syntax

```js
var myTable = new WebAssembly.Table(tableDescriptor);
```

### Parameters

- _tableDescriptor_
  - : 다음 멤버를 포함 할 수있는 객체입니다:_ *element*
    _ : 테이블에 저장 될 값 유형을 나타내는 문자열. 현재로서는 `"anyfunc"`(함수) 값만있을 수 있습니다.
    - _initial_
      - : WebAssembly 테이블의 초기 요소 수입니다.
    - _maximum {{optional_inline}}_
      - : WebAssembly 테이블의 최대 증가 요소 수입니다.

### Exceptions

- `tableDescriptor`가 object 유형이 아닌 경우 {{jsxref ( "TypeError")}}가 발생합니다.
- `maximum`이 지정되고 initial보다 작은 경우 {{jsxref ( "RangeError")}}가 발생합니다.

## `Table` instances

모든 `Table` 인스턴스는 `Table()`생성자의 [prototype object](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/prototype)에서 상속받습니다.이 인스턴스는 모든 `Table` 인스턴스에 적용되도록 수정할 수 있습니다.

### Instance properties

- `Table.prototype.constructor`
  - : 이 객체의 인스턴스를 생성 한 함수를 돌려줍니다. 기본적으로 이것은 {{jsxref("WebAssembly.Table()")}} 생성자입니다.
- {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}
  - : 테이블의 길이, 즉 요소의 수를 돌려줍니다.

### Instance methods

- {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}
  - : 접근 자 함수 - 주어진 색인에 저장된 요소를 가져옵니다.
- {{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}
  - : 지정된 요소 수만큼 Table 인스턴스의 크기를 늘립니다.
- {{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}
  - : 지정된 인덱스에 격납되어있는 요소를, 지정된 값으로 설정합니다.

## Examples

다음 예제 (table2.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) 및 [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html) 참조)는 초기 크기가 2인 새 WebAssembly Table 인스턴스를 만듭니다. 그런 다음 두 개의 인덱스 (표 {{jsxref ( "WebAssembly / Table / get", "Table.prototype.get ()")}}를 통해 검색하여 테이블의 길이와 내용을 인쇄합니다. 길이가 2이고 {{jsxref ( "null")}}이 두개라고 출력됩니다.

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

그런 다음 테이블을 포함한 `importObj`를 만듭니다.

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

마지막으로 {{jsxref ( "WebAssembly.instantiateStreaming ()")}} 메소드를 사용하여 wasm 모듈 (table2.wasm)을 로드하고 인스턴스화합니다. table2.wasm 모듈에는 두 개의 함수 (하나는 42를 반환하고 다른 하나는 83을 반환하는 함수)가 들어 있고 가져온 테이블의 요소 0과 1에 둘 다 저장합니다 ([text representation](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat) 참조). 인스턴스화 후에도 테이블의 길이는 여전히 2이지만 JS에 호출 할 수있는 호출 가능한 [Exported WebAssembly Functions](/ko/docs/WebAssembly/Exported_functions)가 요소에 포함됩니다.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  function (obj) {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

액세서의 끝 부분에 두 번째 함수 호출 연산자를 포함시켜 실제로 참조 된 함수를 호출하고 그 안에 저장된 값을 기록해야합니다 (예 : `get(0)` 대신 `get(0)()`).

이 예제는 자바 스크립트에서 테이블을 만들고 액세스하고 있지만 wasm 인스턴스 내부에서도 같은 테이블을 볼 수 있고 호출 할 수 있음을 보여줍니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
