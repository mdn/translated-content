---
title: TypeError() constructor
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
---

{{JSRef}}

**`TypeError`** 생성자는 객체는 일반적으로 값이 기대하던 자료형이 아니라서 연산을 할 수 없을 때 발생하는 오류를 생성합니다.

## 구문

```js-nolint
new TypeError()
new TypeError(message)
new TypeError(message, options)
new TypeError(message, fileName)
new TypeError(message, fileName, lineNumber)

TypeError()
TypeError(message)
TypeError(message, options)
TypeError(message, fileName)
TypeError(message, fileName, lineNumber)
```

> **참고:** `TypeError()` [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)를 사용하거나 혹은 사용하지 않고 호출이 사용합니다. 두 방법 모두 새로운 `TypeError`를 생성합니다.

### 매개변수

- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 오류에 대한 설명
- `options` {{optional_inline}}
  - : 다음의 속성을 가지는 객체.
    - `cause` {{optional_inline}}
      - : 오류의 특정 원인을 가리키는 속성.
        오류를 잡아서 좀 더 상세하거나 유용한 오류 메시지와 함께 예외를 다시 발생시킬 때 이 속성을 원래 오류를 전달하는데 사용할 수 있습니다.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 예외가 발생한 코드를 담고 있는 파일 이름
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 예외가 발상한 코드의 줄 수

## 예제

### TypeError 처리하기

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### TypeError 생성하기

```js
try {
  throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
