---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
tags:
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/name
browser-compat: javascript.builtins.Error.name
---
{{JSRef}}

**`name`** 속성은 오류 타입을 설명하기 위한 이름을 나타냅니다. 초기값은 "Error"입니다.

## 설명

기본적으로 {{jsxref("Error")}} 인스턴스에는 "Error"라는 이름을 갖습니다. `name` 속성과
{{jsxref("Error.prototype.message", "message")}} 속성은 {{jsxref("Error.prototype.toString()")}} 메서드에서 오류의 문자열 표현을 생성하는 데
사용됩니다.

## 예제

### 사용자 정의 에러 발생시키기

```js
var e = new Error('Malformed input'); // e.name은 'Error'

e.name = 'ParseError';
throw e;
// e.toString()은 'ParseError: Malformed input'을 반환합니다
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
