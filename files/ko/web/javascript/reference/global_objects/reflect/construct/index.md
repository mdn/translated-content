---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---

{{JSRef}}

**`Reflect.construct()`** 정적 메서드는 [`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)처럼 동작하는 함수입니다. `new target(...args)`를 호출하는 것과 같습니다. 추가 기능으로 다른 프로토타입을 지정할 수도 있습니다.

{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}

## 구문

```js
Reflect.construct(target, argumentsList[, newTarget])
```

### 매개변수

- `target`
  - : 호출할 대상 함수.
- `argumentsList`
  - : `target`의 매개변수로 전달할 배열형 객체.
- `newTarget` {{optional_inline}}
  - : 프로토타입으로 사용할 생성자. [`new.target`](/ko/docs/Web/JavaScript/Reference/Operators/new.target) 연산자도 확인하세요. `newTarget`이 주어지지 않았을 땐 `target`을 사용합니다.

### 반환 값

`target`을 생성자로 하고 주어진 매개변수를 전달해 생성한 `target`(또는, 지정했다면 `newTarget`)의 새로운 인스턴스.

### 예외

`target` 또는 `newTarget`이 생성자가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.construct()`는 생성자를 가변 길이의 매개변수로 호출할 수 있습니다. ([`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)와 [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용해도 가능합니다)

```js
var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args);
```

### `Reflect.construct()` vs `Object.create()`

`Reflect`의 도입 이전에는 임의의 생성자와 프로토타입에 {{jsxref("Object.create()")}}를 사용해 객체를 생성할 수 있었습니다.

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

// Calling this:
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

그러나, 결과는 동일하더라도 과정에는 중요한 차이가 하나 존재합니다. `Object.create()`와 {{jsxref("Function.prototype.apply()")}}를 사용할 땐, 객체 생성에 `new` 키워드가 관여하지 않으므로 `new.target` 연산자가 `undefined`를 가리킵니다.

반면 `Reflect.construct()`를 호출하면, `newTarget`이 존재하면 `new.target` 연산자가 `newTarget`을, 아니면 `target`을 가리킵니다.

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

var obj1 = Reflect.construct(OneClass, args);
// Output:
//     OneClass
//     function OneClass { ... }

var obj2 = Reflect.construct(OneClass, args, OtherClass);
// Output:
//     OneClass
//     function OtherClass { ... }

var obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## 예제

### `Reflect.construct()` 사용하기

```js
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)
- [`new.target`](/ko/docs/Web/JavaScript/Reference/Operators/new.target)
