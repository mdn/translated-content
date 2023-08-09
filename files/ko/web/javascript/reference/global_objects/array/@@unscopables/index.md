---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---

{{JSRef}}

**`@@unscopable`** 기호 속성은 ES2015 이전 ECMAScript 표준에 포함되지 않은 속성 이름을 포함합니다. 해당 속성들은 {{jsxref("Statements/with", "with")}} 바인딩에서 제외됩니다.

## 구문

```js
arr[Symbol.unscopables];
```

## 설명

with 바인딩에서 제외되는 배열의 기본 속성은 copyWithin, entries, fill, find, findIndex, includes, keys, values입니다.

자신의 객체에 대해 `unscopables`를 설정하는 방법은 {{jsxref("Symbol.unscopables")}}를 참고하세요.

{{js_property_attributes (0,0,1)}}

## 예제

아래 코드는 ES5 이하에서 잘 작동합니다. 그러나 ECMAScript 2015 이후 {{jsxref("Array.prototype.keys()")}} 메서드가 도입되었습니다. 이는 `with` 내부에서 "keys"가 변수가 아니라 메서드임을 의미합니다. 여기서 `Array.prototype[@@unscopables]`가 개입하여 일부 배열 메서드가 `with` 범위에 묶이는 일을 방지합니다.

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Symbol.unscopables")}}
