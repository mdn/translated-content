---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
---

{{JSRef}}

**`Object.assign()`** 메서드는 출처 객체들의 모든 {{jsxref("Object/propertyIsEnumerable", "열거 가능", "", 1)}}한 {{jsxref("Object/hasOwnProperty", "자체 속성", "", 1)}}을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## 구문

```js
Object.assign(target, ...sources);
```

### 매개변수

- `target`
  - : 목표 객체. 출처 객체의 속성을 복사해 반영한 후 반환할 객체입니다.
- `sources`
  - : 출처 객체. 목표 객체에 반영하고자 하는 속성들을 갖고 있는 객체들입니다.

### 반환 값

목표 객체.

## 설명

목표 객체의 속성 중 출처 객체와 동일한 {{jsxref("Object/keys", "키", "", 1)}}를 갖는 속성의 경우, 그 속성 값은 출처 객체의 속성 값으로 덮어씁니다. 출처 객체들의 속성 중에서도 키가 겹칠 경우 뒤쪽 객체의 속성 값이 앞쪽 객체의 속성 값보다 우선합니다.

`Object.assign()` 메서드는 출처 객체의 '열거 가능한 자체 속성'만 목표 객체로 복사합니다. 출처 객체에서 속성 값을 가져올 땐 `[[Get]]`, 목표 객체에 속성 값을 지정할 땐 `[[Set]]`을 사용하므로 각각 [접근자](/ko/docs/Web/JavaScript/Reference/Functions/get)와 [설정자](/ko/docs/Web/JavaScript/Reference/Functions/set)를 호출합니다. 그러므로 `Object.assign()`은 속성을 단순히 복사하거나 새로 정의하는 것이 아니라, 할당(_assign_)하는 것입니다. 따라서 출처 객체가 접근자를 포함하는 경우, 프로토타입에 새로운 속성을 추가하는 용도로는 적합하지 않을 수도 있습니다.

열거성을 포함한 속성 정의를 프로토타입으로 복사하려면 {{jsxref("Object.getOwnPropertyDescriptor()")}}와 {{jsxref("Object.defineProperty()")}}를 사용하세요.

`Object.assign()`은 {{jsxref("String")}} 키와 {{jsxref("Symbol")}} 키 속성 모두 복사합니다.

오류(대상 객체의 속성이 쓰기 불가한 상태 등)를 마주치면 {{jsxref("TypeError")}}가 발생합니다. 그러나 오류가 발생하기 전에 이미 추가/변경한 다른 속성의 값은 대상 객체에 유지됩니다.

> **참고:** `Object.assign()`의 출처에 {{jsxref("null")}} 또는 {{jsxref("undefined")}}를 제공해도 예외는 발생하지 않습니다.

## 예제

### 객체 복제

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### 깊은 복사 주의점

`Object.assign()`은 속성의 값을 복사하기 때문에, 깊은 복사를 수행하려면 다른 방법을 사용해야 합니다.

만약 출처 값이 객체에 대한 참조라면 참조 값만 복사합니다.

```js
function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

  // 깊은 복사
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

test();
```

### 객체 병합

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, 목표 객체 자체가 변경됨.
```

### 같은 속성을 가진 객체 병합

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

같은 키를 가진 속성의 경우 매개변수 순서에서 더 뒤에 위치한 객체의 값으로 덮어씁니다.

### 심볼 속성 복사

```js
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### 프로토타입 체인의 속성과 열거 불가능한 속성은 복사 불가

```js
const obj = Object.create(
  { foo: 1 },
  {
    // foo는 obj의 프로토타입 체인에 있음
    bar: {
      value: 2, // bar는 열거 불가능
    },
    baz: {
      value: 3,
      enumerable: true, // baz는 열거 가능한 자체 속성
    },
  },
);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### 원시 값은 객체로 래핑

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 원시 값은 래핑하고, null과 undefined는 무시
// 참고: 문자열 래퍼만 자체 열거형 속성을 가질 수 있음
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 예외로 인한 복사 작업 중단

```js
const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo는 읽기 전용 속성

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// target.foo에 할당할 때 예외 발생

console.log(target.bar); // 2, 첫 번째 출처 객체는 성공적으로 복사함
console.log(target.foo2); // 3, 두 번째 출처 객체 중 첫 번째 속성도 성공적으로 복사함
console.log(target.foo); // 1, 여기에서 예외가 발생했음
console.log(target.foo3); // undefined, assign 메서드가 종료됨, foo3은 복사되지 않음
console.log(target.baz); // undefined, 세 번째 출처 객체도 복사되지 않음
```

### 접근자 복사

```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, copy.bar의 값은 obj.bar의 접근자가 반환한 값

// 속성의 온전한 기술자를 복사해 할당하는 함수
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // 기본적으로 Object.assign은 열거 가능한 심볼도 복사함
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Object.assign` 폴리필](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperties()")}}
- [속성의 소유권과 열거 가능성](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [객체 리터럴에서의 전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)
