---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
---

{{jsSidebar("Operators")}}

**`null`** 은 JavaScript의 [원시 값](/ko/docs/Glossary/Primitive) 중 하나로, 어떤 값이 의도적으로 비어있음을 표현하며 불리언 연산에서는 [거짓](/ko/docs/Glossary/Falsy)으로 취급합니다.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## 구문

```js
null;
```

## 설명

`null`은 리터럴로서 `null`이라 씁니다. `null`은 {{jsxref("Global_Objects/undefined","undefined")}}과 같이 글로벌 객체의 속성에 대한 식별자가 아닙니다. 대신 `null`은 식별되지 않은 것을 표현합니다. 즉, 변수가 아무런 객체를 가리키지 않음을 표현합니다. API에서는 `null`을 종종 관련된 객체가 존재하지 않을 때 그 객체 대신 사용합니다.

```js
// 정의되지 않고 초기화된 적도 없는 foo
foo; //ReferenceError: foo is not defined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var foo = null;
foo; //null
```

### `null`과 `undefined`의 차이

`null` 또는 `undefined`를 검사할 때, [동등 연산자(==)와 일치 연산자(===)의 차이](/ko/docs/Web/JavaScript/Reference/Operators)를 주의하세요. 동등 연산자는 자료형 변환을 수행합니다.

```js
typeof null; // "object" (하위호환 유지를 위해 "null"이 아님)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
isNaN(1 + null); // false
isNaN(1 + undefined); // true
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}} 연산자
