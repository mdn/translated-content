---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
---

{{jsSidebar("Errors")}}

## 메시지

```
  ReferenceError: reference to undefined property "x" (Firefox)
```

## 에러 형식

엄격 모드([strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode))에서만 발생하는 {{jsxref("ReferenceError")}} 경고.

## 무엇이 잘못되었을까?

이 스크립트는 존재하지 않는 객체의 속성에 접근을 시도했습니다. 요소에 접근하는 방법에는 두 가지가 있습니다.; 더 자세히 알고 싶으시다면, 속성 접근자([property accessors](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) 참조 문서를 봐주세요.

정의되지 않은 속성 참조에 대한 에러는 엄격 모드 코드([strict mode code](/ko/docs/Web/JavaScript/Reference/Strict_mode))에서만 발생합니다. 비-엄격모드의 코드에서는 존재하지 않는 속성에 대한 접근은 조용히 무시됩니다.

## 예

### 허용되지 않는 경우

이 경우에는, 속성 `bar` 는 정의되지 않은 속성으로, `ReferenceError` 가 발생합니다.

```js example-bad
"use strict";

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### 허용되는 경우

에러를 피하기 위해서는, 접근을 시도하기 앞서, 객체에 `bar` 에 대한 정의를 추가하거나 `bar` 속성의 존재 여부를 확인해야 합니다.; 아래와 같이 {{jsxref("Object.prototype.hasOwnProperty()")}} method)를 사용하는 것이 하나의 방법이 될 수 있습니다.:

```js example-good
"use strict";

var foo = {};

// bar 속성을 정의한다.

foo.bar = "moon";
console.log(foo.bar); // "moon"

// bar에 접근하기 전에 존재 하는지 확인한다.

if (foo.hasOwnProperty("bar") {
  console.log(foo.bar);
}
```

## 참조

- [Strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode)
