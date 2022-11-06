---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
tags:
  - Error
  - JavaScript
  - Reference
  - RangeError
translation_of: Web/JavaScript/Reference/Global_Objects/RangeError
browser-compat: javascript.builtins.RangeError
---
{{JSRef}}

**`RangeError`** 객체는 어떤 값이 집합에 없거나 허용되는 범위가 아닐 때
오류를 나타냅니다.

## 설명

어떤 값을 그 값이 포함되는 범위를 허용하지 않는 함수에 인수로 전달하려 할 때
`RangeError`가 발생합니다.

이 문제는 다음과 같은 경우에 발생할 수 있습니다.

- 허용되는 문자열이 아닌 값을 {{jsxref("String.prototype.normalize()")}}에 전달하거나,
- {{jsxref("Array")}} 생성자를 통해 잘못된 길이의 배열을 만드려고 시도하거나,
- 숫자 메서드 {{jsxref("Number.prototype.toExponential()")}},
  {{jsxref("Number.prototype.toFixed()")}} 혹은 {{jsxref("Number.prototype.toPrecision()")}}에
  나쁜 값을 전달하는 경우.

## 생성자

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : 새로운 `RangeError` 객체를 만듭니다.

## 인스턴스\_속성

- {{jsxref("Error.prototype.message", "RangeError.prototype.message")}}
  - : 오류 메시지. 비록 ECMA-262에서 {{jsxref("RangeError")}}는 반드시 자체
    `message` 속성을 제공해야한다고 명시했지만, [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey)는 {{jsxref("Error.prototype.message")}}를 상속합니다.
- {{jsxref("Error.prototype.name", "RangeError.prototype.name")}}
  - : 오류 이름. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.fileName", "RangeError.prototype.fileName")}}
  - : 오류가 발생한 파일 경로. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.lineNumber", "RangeError.prototype.lineNumber")}}
  - : 오류가 발생한 곳의 줄 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.columnNumber", "RangeError.prototype.columnNumber")}}
  - : 오류가 발생한 곳의 열 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.stack", "RangeError.prototype.stack")}}
  - : 스택 추적. {{jsxref("Error")}}로부터 상속되었습니다.

## 예

### RangeError 사용하기(숫자 값일 경우)

```js
function check(n)
{
  if( !(n >= -500 && n <= 500) )
  {
    throw new RangeError("The argument must be between -500 and 500.")
  }
}

try
{
  check(2000)
}
catch(error)
{
  if (error instanceof RangeError)
  {
    // Handle the error
  }
}
```

### RangeError 사용하기 (숫자값이 아닐 경우)

```js
function check(value)
{
  if(["apple", "banana", "carrot"].includes(value) === false)
  {
      throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
  }
}

try
{
  check("cabbage")
}
catch(error)
{
  if(error instanceof RangeError)
  {
    // Handle the error
  }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Error")}}
- {{jsxref("RangeError.prototype")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
