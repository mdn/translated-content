---
title: Error() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
tags:
  - Constructor
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/Error
browser-compat: javascript.builtins.Error.Error
---
{{JSRef}}

**`Error`** 생성자는 오류 객체를 생성합니다.

## 구문

```js
new Error()
new Error(message)
new Error(message, fileName)
new Error(message, fileName, lineNumber)
```

### 매개변수

- `message` {{Optional_Inline}}
  - : 사람이 읽을 수 있는 오류 메시지입니다.
- `fileName` {{Optional_Inline}}{{Non-standard_inline}}
  - : 생성할 `Error` 객체의 `fileName` 속성으로 설정할 값입니다. 기본 값은
    `Error()` 생성자를 호출한 파일의 이름입니다.
- `lineNumber` {{Optional_Inline}}{{Non-standard_inline}}
  - : 생성할 `Error` 객체의 `lineNumber` 속성으로 설정할 값입니다. 기본 값은
    `Error()` 생성자를 호출한 줄의 번호입니다.

## 예제

### 생성자 또는 함수 호출

`Error`를 {{JSxRef("Operators/new", "new")}} 없이 함수로써 호출한 경우에도 `Error` 객체를
반환합니다. 따라서 단순히 `Error`를 호출하기만 해도 `new` 키워드를 사용한 것과 같은 결과를
낳습니다.

```js
// 함수로 호출해도...
const x = Error('함수 호출로 만들기!')

// ...이렇게 생성자로 사용한 것과 같은 결과
const y = new Error('"new" 키워드를 써서 만들기!')
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
