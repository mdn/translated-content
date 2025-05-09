---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

{{JSRef}}

**`Object.freeze()`** 메서드는 객체를 **동결**합니다. 동결된 객체는 더 이상 변경될 수 없습니다. 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지합니다. 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. `freeze()`는 전달된 동일한 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: Object.freeze()")}}

```js interactive-example
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

## 구문

```js
Object.freeze(obj);
```

### 매개변수

- `obj`
  - : 동결할 객체.

### 반환 값

함수로 전달된 객체.

## 설명

동결 객체의 속성 집합에는 어떠한 것도 추가하거나 제거할 수 없으며, 그리 하려는 모든 시도는 조용히 넘어가거나, {{jsxref("TypeError")}} 예외가 발생하며 실패합니다. 예외 발생은 보통 {{jsxref("Strict_mode", "엄격 모드", "", 1)}}인 경우 발생하지만, 반드시 엄격 모드로만 제한되는 것은 아닙니다.

동결 객체가 가진 데이터 속성에 대해선, 값을 변경할 수 없으며 설정 가능 여부와 쓰기 가능 여부 속성 모두 거짓이 됩니다. 접근자 속성(접근자와 설정자)도 동일하게 동작합니다(또한 값을 변경하고 있다는 환상을 줍니다). 수정되는 값이 객체이고 동결된 것이 아니라면 여전히 수정이 가능함을 유의하세요. 객체로써, 배열도 동결될 수 있습니다. 동결한 이후에는 그 엘리먼트를 변경할 수 없으며 배열에 어떠한 엘리먼트도 추가하거나 제거할 수 없습니다.

`freeze()`는 함수에 전달한 객체를 그대로 반환하며, 동결된 객체 사본을 생성하는 것이 아닙니다.

## 예제

### 객체 동결하기

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// 동결 이전: 새 속성을 추가할 수 있고,
// 기존 속성을 변경하거나 제거할 수 있음
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// 동결
var o = Object.freeze(obj);

// 반환 값은 전달된 객체와 동일함.
o === obj; // true

// 객체가 동결 상태가 됨.
Object.isFrozen(obj); // === true

// 이제 모든 변경 시도는 실패함
obj.foo = "quux"; // 조용하게 아무것도 하지 않음
// 조용하게 속성을 추가하지 않음
obj.quaxxor = "the friendly duck";

// 엄격 모드에서는 이러한 시도에 대해 TypeError 발생
function fail() {
  "use strict";
  obj.foo = "sparky"; // TypeError 발생
  delete obj.foo; // TypeError 발생
  delete obj.quaxxor; // 'quaxxor' 속성은 추가된 적이 없으므로 true 반환
  obj.sparky = "arf"; // TypeError 발생
}

fail();

// Object.defineProperty를 통한 변경 시도
// 아래 두 구문 모두에서 TypeError 발생
Object.defineProperty(obj, "ohai", { value: 17 });
Object.defineProperty(obj, "foo", { value: "eit" });

// 프로토타입을 변경하는 것 또한 불가함
// 아래 두 구문 모두에서 TypeError 발생
Object.setPrototype(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### 배열 동결

```js
let a = [0];
Object.freeze(a); // 이제 배열을 수정할 수 없음.

a[0] = 1; // 조용하게 실패
a.push(2); // 조용하게 실패

// 엄격 모드에서는 이런 시도에 대해 TypeError 발생
function fail() {
  "use strict";
  a[0] = 1;
  a.push(2);
}

fail();
```

동결된 객체는 변경할 수 없습니다. 하지만, 꼭 그렇지만은 않습니다. 다음 예제는 동결된 객체가 변경될 수 있음을(얕은 동결) 보여줍니다.

```js
obj = {
  internal: {},
};

Object.freeze(obj);
obj.internal.a = "aValue";

obj.internal.a; // 'aValue'
```

변경될 수 없는 객체가 되려면, 모든 참조 그래프(다른 객체로의 직간접적 참조)가 오로지 불변의 동결 객체만을 참조해야 합니다. 동결된 객체는 객체 내의 모든 상태(다른 객체로의 값과 참조)가 고정되기 때문에 불변하다고 합니다. 문자열, 숫자, 불리언 값은 언제나 불변하고, 함수와 배열은 객체임을 유의하세요.

#### "얕은 동결"이 무엇인가요?

`Object.freeze(object)` 호출의 결과는 `object` 스스로의 직속 속성에만 적용되며, `object`에 대해서만 속성 추가, 제거, 재할당 연산을 방지합니다. 만약 그 속성의 값이 객체라면, 그 객체는 동결되지 않으며 속성 추가, 제거, 재할당의 대상이 될 수 있습니다.

```js
var employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);

employee.name = "Dummy"; // 비엄격 모드에서 조용하게 실패
employee.address.city = "Noida"; // 자식 객체의 속성은 수정 가능

console.log(employee.address.city); // 출력: "Noida"
```

객체를 불변하게 만들려면, 각 객체 타입의 속성을 재귀적으로 동결해야합니다(깊은 동결). 객체가 그 참조 그래프에서 [순환](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>)을 포함하지 않는다는 것을 인지하고 있을 때, 디자인을 기반으로 상황에 따라 패턴을 적용해야하며, 그렇지 않을 경우 반복문이 무한히 실행될 수 있습니다. `deepFreeze()`에 대한 개선은 객체가 불변하게 되는 과정에 있을 때 `deepFreeze()`의 재귀적인 호출을 차단할 수 있도록 경로(예, 배열) 인자를 받는 내부 함수를 소유하는 것입니다. \[window]와 같은, 동결되면 안되는 객체를 동결하는 것에 대한 위험은 여전히 남아 있습니다.

```js
function deepFreeze(object) {
  // 객체에 정의된 속성명을 추출
  var propNames = Object.getOwnPropertyNames(object);

  // 스스로를 동결하기 전에 속성을 동결

  for (let name of propNames) {
    let value = object[name];

    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

var obj2 = {
  internal: {
    a: null,
  },
};

deepFreeze(obj2);

obj2.internal.a = "anotherValue"; // 비엄격 모드에서 조용하게 실패
obj2.internal.a; // null
```

## 사용 노트

ES5에서는, 이 메소드에 대한 인자가 객체(원시형)가 아닐 경우, {{jsxref("TypeError")}}가 발생합니다. ES2015에서는, 비객체 인자가 동결된 평범한 객체인것처럼 다루어져 반환됩니다.

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 code

> Object.freeze(1)
1                             // ES2015 code
```

엘리먼트를 갖는 {{domxref("ArrayBufferView")}}는 메모리를 통한 뷰이므로 다른 가능한 문제를 유발 할 수 있어 {{jsxref("TypeError")}}가 발생합니다.

```js
> Object.freeze(new Uint8Array(0)) // 엘리먼트가 없음
Uint8Array []

> Object.freeze(new Uint8Array(1)) // 엘리먼트를 가짐
TypeError: Cannot freeze array buffer views with elements

> Object.freeze(new DataView(new ArrayBuffer(32))) // 엘리먼트가 없음
DataView {}

> Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // 엘리먼트가 없음
Float64Array []

> Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // 엘리먼트를 가짐
TypeError: Cannot freeze array buffer views with elements
```

세 가지 표준 속성(`buf.byteLength`, `buf.byteOffset`, `buf.buffer`)은 읽기 전용(이들은 {jsxref("ArrayBuffer")}} 또는 {{jsxref("SharedArrayBuffer")}}이므로)이므로, 이러한 속성에 대해 동결을 시도할 이유가 없음을 유의합니다.

### `Object.seal()`과의 비교

{{jsxref("Object.seal()")}}을 사용해 봉인된 객체는 존재하는 속성을 변경할 수 있습니다. `Object.freeze()`로 동결된 객체에서는 존재하는 속성이 불변입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
