---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---

{{JSRef}}

**`Object.isSealed()`** 메서드는 객체가 봉인됐는지 판별합니다.

{{EmbedInteractiveExample("pages/js/object-issealed.html")}}

## 구문

```js
Object.isSealed(obj);
```

### 매개변수

- `obj`
  - : 판별할 객체.

### 반환 값

객체의 봉인 여부를 나타내는 {{jsxref("Boolean")}}.

## 설명

객체가 봉인된 경우 `true`를 반환하고, 그렇지 않으면 `false`. 객체는 {{jsxref("Object.isExtensible", "확장 불가", "", 1)}}이고 모든 속성이 설정 불가이며 따라서 삭제할 수 없(지만 반드시 쓰기 불가일 필요는 없)는 경우 봉인됩니다.

## 예제

```js
// 객체는 기본으로 봉인되지 않습니다.
var empty = {};
Object.isSealed(empty); // === false

// 빈 객체를 확장 불가하게 한 경우, 빈 채로 봉인됩니다.
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// 비어 있지 않은 객체는 다릅니다, 그 속성이 모두 설정 불가가 아닌 한.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// 그러나 모두 설정 불가하게 하면 객체는 봉인됩니다.
Object.defineProperty(hasProp, "fee", { configurable: false });
Object.isSealed(hasProp); // === true

// 객체를 봉인하는 가장 쉬운 방법은 물론 Object.seal 입니다.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// 봉인된 객체는 정의에 의해 확장 불가입니다.
Object.isExtensible(sealed); // === false

// 봉인된 객체는 동결될 수 있지만 꼭 그럴 필요는 없습니다.
Object.isFrozen(sealed); // === true (모든 속성도 쓰기 불가)

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false ('p'는 여전히 쓰기 가능)

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // === true (설정 가능성만이 접근자 속성에게 중요함)
```

## 주의

ES5에서, 이 메서드의 인수가 비객체(원시형)인 경우, 그러면 {{jsxref("TypeError")}}가 발생합니다. ES6에서, 비객체 인수는 마치 봉인된 보통 객체였던 것처럼 취급됩니다, 그저 `true`를 반환하는.

```js
Object.isSealed(1);
// TypeError: 1은 객체가 아닙니다 (ES5 코드)

Object.isSealed(1);
// true                          (ES6 코드)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
