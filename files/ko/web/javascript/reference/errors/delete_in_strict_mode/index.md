---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---

{{jsSidebar("Errors")}}

## 메세지

```
  SyntaxError: Calling delete on expression not allowed in strict mode (Edge)
  SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
  SyntaxError: Delete of an unqualified identifier in strict mode. (Chrome)
```

## 에러 타입

엄격(Strict) 모드에서의 {{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

자바스크립트에서 일반 변수는 [`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete) 연산자를 사용하여 삭제할 수 없습니다. 엄격 모드에서 변수를 삭제하는 접근은 허용되지 않으므로 에러가 발생합니다.

`delete` 연산자는 오직 객체의 속성만을 삭제할 수 있습니다. 객체 속성은 설정할 수 있는 경우 "수식"될 수 있습니다.

일반적인 생각과 다르게 `delete` 연산자는 메모리 해제와 직접적인 연관이 없습니다. 메모리 관리는 참조가 깨짐에 따라 간접적으로 수행됩니다. 자세한 내용은 [메모리 관리](/ko/docs/Web/JavaScript/Memory_Management) 페이지와 [`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete) 연산자 페이지를 참조하십시오.

이 에러는 오직 [엄격 모드 코드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서만 발생합니다. 엄격하지 않은 모드에서 해당 연산자는 단순히 `false` 를 반환합니다.

## 예제

자바스크립트에서 일반 변수를 삭제하려고 하면 동작하지 않습니다. 그리고 엄격 모드에서는 에러가 발생합니다:

```js example-bad
"use strict";

var x;

// ...

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

변수의 내용을 비우려면 {{jsxref("null")}}을 설정하면 됩니다:

```js example-good
"use strict";

var x;

// ...

x = null;

// x는 가비지 컬렉터에 의해 메모리에서 해제됩니다
```

## 같이 보기

- [`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete)
- [메모리 관리](/ko/docs/Web/JavaScript/Memory_Management)
- [TypeError: property "x" is non-configurable and can't be deleted](/ko/docs/Web/JavaScript/Reference/Errors/Cant_delete)
