---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

`Symbol.unscopables` 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@unscopables`를 나타냅니다. {{jsxref("Statements/with", "with")}} 문은 범위 객체에서 이 심볼을 조회하여 `with` 환경 내에서 바인딩되지 않아야 하는 속성들의 집합을 포함하는 속성을 찾습니다.

{{InteractiveExample("JavaScript Demo: Symbol.unscopables")}}

```js interactive-example
const object1 = {
  property1: 42,
};

object1[Symbol.unscopables] = {
  property1: true,
};

with (object1) {
  console.log(property1);
  // Expected output: Error: property1 is not defined
}
```

## 값

잘 알려진 심볼 `@@unscopables`.

{{js_property_attributes(0, 0, 0)}}

## 설명

`@@unscopables` 심볼(`Symbol.unscopables`를 통해 접근)은 [`with`](/ko/docs/Web/JavaScript/Reference/Statements/with) 환경 바인딩에서 특정 속성 이름이 렉시컬 변수로 노출되지 않도록 하기 위해 어떤 객체에도 정의될 수 있습니다. [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)를 사용할 때는 `with`문을 사용할 수 없기 때문에 이 심볼이 필요하지 않을 가능성이 큽니다.

`@@unscopables` 객체의 속성을 `true`(또는 [참 같은 값](/ko/docs/Glossary/Truthy))로 설정하면 해당 속성이 `with` 범위 객체에서 '범위 지정 불가능'이 되어서 `with` 본문의 범위에 도입되지 않습니다. 속성을 `false`(또는 [거짓 같은 값](/ko/docs/Glossary/Falsy))로 설정하면 해당 속성이 '범위 지정 가능'이 되어 렉시컬 범위 변수로 나타나게 됩니다.

`x`가 범위 지정 불가능인지 여부를 결정할 때는 `@@unscopables` 속성의 전체 프로토타입 체인에서 `x`라는 속성을 검색합니다. 이는 `@@unscopables`를 단순한 객체로 선언했을 경우 `Object.prototype`의 [`toString`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 등의 속성들 또한 범위 지정 불가능하게 되어서 이러한 속성들이 일반적으로 범위 내에 있다고 가정하는 레거시 코드에 대한 하위 호환성 문제가 발생할 수 있음을 의미합니다([아래의 예제](#프로토타입이_null이_아닌_객체를_unscopables로_사용하지_않기)를 보세요). 따라서 사용자 정의 `@@unscopables` 속성의 프로토타입을 `null`로 설정하는 것이 좋습니다. `Array.prototype[@@unscopables]`처럼 말입니다.

이 프로토콜은 [`Element.prototype.append()`](/ko/docs/Web/API/Element/append)와 같은 DOM API에서도 활용됩니다.

## 예시

### with 문에서 범위 지정하기

다음 코드는 ES5 및 그 이전 버전에서는 잘 작동합니다. 하지만 ECMAScript 2015 이후부터 {{jsxref("Array.prototype.keys()")}} 메서드가 도입되었습니다. 이는 `with` 환경 내에서 "keys"가 변수가 아니라 메서드가 된다는 것을 의미합니다. 이게 바로 `@@unscopables` 심볼이 도입된 이유입니다. 내장 `@@unscopables` 설정은 `with` 문의 범위에 일부 배열 메서드가 들어가는 것을 방지하기 위해 {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}로 구현되었습니다.

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}
```

### 객체에서의 범위 지정 불가능

`@@unscopables`를 사용자 정의 객체에 설정할 수도 있습니다.

```js
const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

obj[Symbol.unscopables] = {
  // `Object.prototype`의 메서드가 범위 지정 불가능하게 되는 것을
  // 방지하기 위해 객체의 프로토타입을 `null`로 설정합니다.
  __proto__: null,
  // `foo` 는 범위 지정 가능해집니다.
  foo: false,
  // `bar` 는 범위 지정 불가능해집니다.
  bar: true,
  // `baz` 는 생략되었습니다. `undefined`는 거짓 같은 값이므로 baz도 범위 지정 가능합니다 (기본값).
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // 3
}
```

### 프로토타입이 null이 아닌 객체를 @@unscopables로 사용하지 않기

프로토타입을 제거하지 않은 단순한 객체를 `@@unscopables`로 선언하면 미묘한 버그가 발생할 수 있습니다. `@@unscopables` 가 나오기 이전에 작동하고 있던 다음과 같은 코드를 고려해 볼 수 있습니다.

```js
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
};

with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "Use with statements, you must not"
}
```

하위 호환성을 유지하기 위해, `character`에 더 많은 속성을 추가할 때 `@@unscopables` 속성을 추가하기로 결정했다고 가정합니다. 그러면 단순하게 생각해서 다음과 같이 할 수 있을 것입니다.

```js example-bad
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // `student`를 범위 지정 불가능하게 만듭니다.
    student: true,
  },
};
```

그러나, 위의 코드는 이제 작동하지 않습니다.

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

이는 `character[Symbol.unscopables].toString`을 조회하면 [`Object.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)을 반환하기 때문입니다. 그리고 이는 참 같은 값입니다. 따라서 `with()` 문에서 `toString()`을 호출하면 `globalThis.toString()`을 호출하게 됩니다. 그리고 이는 [`this`](/ko/docs/Web/JavaScript/Reference/Operators/this) 없이 호출되기 때문에 `this`는 `undefined`가 되고 그래서 `[object Undefined]`를 반환하게 됩니다.

메서드가 `character`에 의해 재정의되지 않더라도, 메서드를 범위 지정 불가능하게 설정하면 `this`의 값이 변경됩니다.

```js
const proto = {};
const obj = { __proto__: proto };

with (proto) {
  console.log(isPrototypeOf(obj)); // true; `isPrototypeOf` 은 범위 지정되어 있고 `this`는 `proto`입니다.
}

proto[Symbol.unscopables] = {};

with (proto) {
  console.log(isPrototypeOf(obj)); // TypeError: Cannot convert undefined or null to object
  // `isPrototypeOf`은 범위 지정되어 있지 않고 `this`는 undefined입니다.
}
```

이를 해결하기 위해서는 `@@unscopables`은 `Object.prototype` 속성 없이, 범위 지정 불가능하게 만들고자 하는 속성들만 포함한다는 것을 확실하게 해야 합니다.

```js example-good
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // `Object.prototype`의 메서드가 범위 지정 불가능하게 되는 것을
    // 방지하기 위해 객체의 프로토타입을 `null`로 설정합니다.
    __proto__: null,
    // `student` 는 범위 지정 불가능해집니다.
    student: true,
  },
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
- [`with`](/ko/docs/Web/JavaScript/Reference/Statements/with)
- [`Element.prototype.append()`](/ko/docs/Web/API/Element/append)
