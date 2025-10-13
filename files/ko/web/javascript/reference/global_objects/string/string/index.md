---
title: String() 생성자
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: cca8713f0b26c8fbba765b9ccb8c3619ca5a6645
---

{{JSRef}}

**`String()`** 생성자는 {{jsxref("String")}} 객체를 생성합니다. 함수로 호출될 경우 String 형의 원시 값을 반환합니다.

## 구문

```js-nolint
new String(thing)
String(thing)
```

> [!NOTE]
> `String()`은 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 호출하거나 아니면 단독으로 호출할 수 있습니다. 하지만 효과는 다릅니다. [반환 값](#반환_값)을 참고하시기 바랍니다.

### 매개변수

- `thing`
  - : 문자로 바꿀 모든 것.

### 반환 값

`String()`이 함수로 호출되면 ([`new`](/ko/docs/Web/JavaScript/Reference/Operators/new) 없이) [문자열 원시형](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)으로 강제로 변환된 `값`을 반환합니다. 특히 [Symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 값은 `"Symbol(description)"`으로 변환되며, 여기서 `description`은 심볼의 [description](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)입니다.

`String()`이 생성자로 호출되면(`new`와 함께) 특별한 기호 심볼처리 없이 `value`을 문자열 원시형으로 강제로 변환하고 원시형이 아닌 {{jsxref("String")}} 객체로 감싸서 반환합니다.

> [!WARNING]
> `String` 생성자를 사용하는 경우는 거의 없습니다.

## 예제

### String 생성자와 String 함수

String 함수와 String 생성자는 다른 결과를 생성합니다.

```js
const a = new String("Hello world"); // a === "Hello world" 는 false입니다
const b = String("Hello world"); // b === "Hello world" 는 true 입니다
a instanceof String; // true
b instanceof String; // false
typeof a; // "object"
typeof b; // "string"
```

여기서 함수는 약속한 대로 문자열({{Glossary("primitive", "원시 값")}} 유형)을 생성합니다.
그러나 생성자는 문자열(객체 래퍼) 유형의 인스턴스를 생성하므로
문자열 생성자를 사용하는 경우는 거의 없습니다.

### 심볼을 문자열화 시키기 위해 String() 사용

`String()`은 심볼을 어떠한 에러 발생 없이 변환을 할 수 있는 유일한 방법입니다. 매우 명시적이기 때문이지요.

```js example-bad
const sym = Symbol("example");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("example");
String(sym); // "Symbol(example)"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [텍스트 서식](/ko/docs/conflicting/Web/JavaScript/Guide/Numbers_and_strings) 안내서
