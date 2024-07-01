---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

**`Object.defineProperty()`** 정적 메서드는 객체에 새로운 속성을 직접 정의하거나 이미 존재하는 속성을 수정한 후, 해당 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## 구문

```js
Object.defineProperty(obj, prop, descriptor);
```

### 매개변수

- `obj`
  - : 속성을 정의할 객체.
- `prop`
  - : 새로 정의하거나 수정하려는 속성의 이름 또는 {{jsxref("Symbol")}}.
- `descriptor`
  - : 새로 정의하거나 수정하려는 속성을 기술하는 객체.

### 반환 값

`obj` 객체.

## 설명

`defineProperty` 메서드를 사용하면 객체의 속성을 세밀하게 추가하거나 수정할 수 있습니다. 할당을 통해 속성을 추가하는 일반적인 방법으로 추가한 속성은 객체의 속성을 열거({{jsxref("Statements/for...in", "for...in")}} 반복문 또는 {{jsxref("Object.keys")}} 메서드)할 때 노출되며, 원하는대로 값을 변경하고 {{jsxref("Operators/delete", "delete")}} 연산자로 삭제할 수도 있습니다. `defineProperty`를 사용하면 이런 기본 동작까지도 상세하게 조절할 수 있습니다. `Object.defineProperty()`로 추가한 속성은 기본적으로 불변하며 열거 불가능합니다.

속성 서술자(`descriptor`)는 데이터 서술자(data descriptors)와 접근자 서술자(accessor descriptors) 두 가지 형식을 취할 수 있습니다. **데이터 서술자**는 값을 가지는 속성을 기술할 때 사용합니다. **접근자 서술자**는 접근자(getter)-설정자(setter) 함수를 한 쌍으로 가지는 속성을 기술할 때 사용합니다. 서술자는 두 유형 중 하나여야 하며, 두 유형을 동시에 나타낼 수는 없습니다.

데이터 서술자와 접근자 서술자는 모두 객체로, 다음의 선택적 키를 서로 공유합니다.

> **참고:** 아래에서 설명하는 **기본 값**은 `Object.defineProperty()`로 정의한 속성의 기본 동작을 의미합니다.

- `configurable`
  - : 속성의 값을 변경할 수 있고, 객체에서 삭제할 수도 있으면 `true`입니다. **기본 값은 `false`입니다.**
- `enumerable`
  - : 속성이 객체의 속성 열거 시 노출되면 `true`입니다. **기본 값은 `false`입니다.**

**데이터 서술자**는 다음의 키를 선택적으로 포함할 수 있습니다.

- `value`
  - : 속성에 연관된 값입니다. 유효한 JavaScript 값(숫자, 객체, 함수 등)은 모두 사용할 수 있습니다. **기본 값은 {{jsxref("undefined")}}입니다.**
- `writable`
  - : {{jsxref("Operators/Assignment_Operators", "할당 연산자", "", 1)}}로 속성의 값을 바꿀 수 있으면 `true`입니다. **기본 값은 `false`입니다.**

**접근자 서술자**는 다음 키를 선택사항으로 가집니다.

- `get`
  - : 속성의 접근자로 사용할 함수입니다. 접근자가 없으면 {{jsxref("undefined")}}입니다. 이 속성에 접근하면, 접근할 때 사용한 객체(속성의 주인 객체와 다를 수 있음)를 이 함수의 `this`로 설정하고, 매개변수 없이 호출한 뒤 그 반환 값을 이 속성의 값으로 취급합니다. **기본 값은 {{jsxref("undefined")}}입니다.**
- `set`
  - : 속성의 설정자로 사용할 함수입니다. 설정자가 없으면 {{jsxref("undefined")}}입니다. 이 속성에 값을 할당하면, 할당할 때 사용한 객체를 이 함수의 `this`로 설정하고, 한 개의 매개변수(할당 중인 값)로 호출합니다. **기본 값은 {{jsxref("undefined")}}입니다.**

`value`, `writable`, `get`, `set` 키를 모두 지니고 있지 않은 서술자는 데이터 서술자로 간주합니다. 반면 `value` 또는 `writable`을 `get` 또는 `set` 키와 함께 가지고 있으면 오류가 발생합니다.

위의 각 설정이 서술자의 자체 속성일 필요는 없으며, 서술자가 상속하는 속성도 고려합니다. 기본 값을 확실하게 보존하려면 {{jsxref("Object")}}를 먼저 동결하거나, 모든 설정을 직접 명시하거나, {{jsxref("Object.create", "Object.create(null)")}}을 사용해 서술자의 프로토타입이 {{jsxref("null")}}을 가리키도록 하세요.

```js
// __proto__ 사용
var obj = {};
var descriptor = Object.create(null); // 상속받은 속성 없음
descriptor.value = "static";

// 기본 값은 열거 불가, 설정 불가, 쓰기 불가
Object.defineProperty(obj, "key", descriptor);

// 기본 값 명시하기
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 같은 객체를 재활용하기
function withValue(value) {
  var d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null,
    });

  // 중복 할당 방지
  if (d.value !== value) d.value = value;

  return d;
}

Object.defineProperty(obj, "key", withValue("static"));

// 객체 동결을 사용할 수 있다면 프로토타입의 변형을 방지하기
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

## 예제

### 속성 생성하기

`Object.defineProperty()`는 가리킨 속성이 객체에 존재하지 않으면 서술자를 사용해 속성을 객체에 새로 생성합니다. 서술자의 일부 항목은 생략 가능하며, 생략한 항목에는 기본 값을 사용합니다.

```js
var o = {}; // 새로운 객체 생성

// 값 속성 서술자와 defineProperty로
// 새로운 속성을 추가하는 예시
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' 속성이 o 객체에 존재하고 값은 37

// 접근자 속성 기술자와 defineProperty로
// 새로운 속성을 추가하는 예시
var bValue = 38;
Object.defineProperty(o, "b", {
  // ES2015 단축 메서드명 사용
  // 아래 코드와 같음
  // get: function() { return bValue; }
  // set: function(newValue) { bValue = newValue; },
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' 속성이 o 객체에 존재하고 값은 38
// o.b를 재정의하지 않는 이상
// o.b의 값은 항상 bValue와 동일함

// 두 가지를 혼용할 수는 없음
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// TypeError 발생
// value는 데이터 서술자에만,
// get은 접근자 서술자에만 나타날 수 있음
```

### 속성 수정하기

`ObjectdefineProperty()`는 가리킨 속성이 객체에 이미 존재하면, 주어진 서술자와 해당 속성의 기존 설정에 따라 속성의 수정을 시도합니다. 기존 속성의 `configurable` 특성이 `false`일 때, 해당 속성이 "설정 불가능"하다고 말합니다. 접근자 속성이 설정 불가능하면 속성의 모든 특성을 수정할 수 없습니다. 값 속성은 설정 불가능하더라도 `writable` 특성은 바꿀 수 있고, 쓰기 가능한 경우 `value`도 바꿀 수 있습니다. 설정 불가능한 속성의 유형을 변경(값 속성을 접근자 속성으로, 혹은 그 반대로)하는 것은 불가능합니다.

설정 불가능한 속성의 특성을 바꾸려고 시도하면 {{jsxref("TypeError")}}가 발생합니다. 단, 기존 값이 신규 값과 같거나, 값 속성의 `value`(쓰기 가능할 때)와 `writable`을 수정하는 경우에는 오류가 발생하지 않습니다.

#### `writable` 특성

`writable` 특성이 `false`인 속성은 "쓰기 불가능"하여 다시 할당할 수 없습니다.

```js
var o = {}; // 새로운 객체 생성

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37 기록
o.a = 25; // 오류 발생하지 않음
// 단, 엄격 모드에서는 값이 같더라도 오류가 발생했을 것
console.log(o.a); // 37 기록, 25가 할당되지 않음

// 엄격 모드
(function () {
  "use strict";
  var o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // TypeError: "b" is read-only
  return o.b; // 윗줄이 없다면 2 반환
})();
```

위의 예제에서 확인할 수 있듯, 엄격 모드가 아니라면 쓰기 불가능한 속성에 할당을 시도하면 값이 바뀌지도 않고, 오류가 발생하지도 않습니다.

#### `enumerable` 특성

`enumerable` 특성은 {{jsxref("Object.assign()")}}과 {{jsxref("Operators/Spread_syntax", "전개 연산자", "", 1)}}가 속성을 볼 수 있는지, 없는지를 결정합니다. 이에 더해, 비 {{jsxref("Symbol")}} 속성에 대해서는 {{jsxref("Statements/for...in", "for...in")}} 반복문과 {{jsxref("Object.keys()")}}에서의 노출 여부도 추가로 결정합니다.

```js
var o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable의 기본 값은 false
o.d = 4; // 할당을 통한 생성 시에는
// enumerable의 기본 값이 true
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (var i in o) {
  console.log(i);
}
// 'a'와 'd' 기록

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

var p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### `configurable` 특성

`configurable` 특성은 객체에서 이 속성을 제거할 수 있는지, 그리고 속성의 (`value`와 `writable`을 제외한) 특성을 바꿀 수 있는지 결정합니다.

```js
var o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // TypeError (set이 undefined였음)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // TypeError
// (형태는 같지만 서로 다른 함수이므로)
Object.defineProperty(o, "a", {
  value: 12,
}); // TypeError
// (configurable이 false여도 value는 바꿀 수 있지만, 속성의 기존 get 접근자로 인해 변경 불가)

console.log(o.a); // 1 기록
delete o.a; // 아무 일도 없음
console.log(o.a); // 1 기록
```

`o.a`의 `configurable`이 `true`였다면 오류가 발생하지도 않고, 마지막에 객체에서 삭제도 가능했을 것입니다.

### 속성 추가와 특성 기본 값

속성 추가 시, 각 특성의 기본 값을 적용하는 방식을 중요하게 고려해야 합니다. 일반 속성 접근 구문(`o.a`)에 할당해 속성을 추가하는 것과, `Object.defineProperty()`를 사용해 추가하는 경우의 특성 기본 값은 아래 예제에서 보이듯 서로 다릅니다.

```js
var o = {};

o.a = 1;
// 위의 할당은 아래와 같음
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// 반면...
Object.defineProperty(o, "a", { value: 1 });
// 위 경우 아래와 같음
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### 사용자 정의 설정자와 접근자

아래 예제에서는 스스로 값의 변화를 기록하는 속성을 구현합니다. `temperature` 속성에 값을 할당할 때마다 `archive` 배열에 값이 추가됩니다.

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

다음 코드에서는, 접근자가 항상 같은 값을 반환합니다.

```js
var pattern = {
  get() {
    return "무엇을 할당해도 항상 같은 값을 반환합니다";
  },
  set() {
    this.myname = "내 이름";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// 무엇을 할당해도 항상 같은 값을 반환합니다

console.log(instance.myname); // 내 이름
```

### 속성의 상속

접근자 속성이 상속될 경우, 자식 객체의 속성에 접근하고 수정할 때 부모의 속성 `get`과 `set` 메서드를 호출합니다. 아래와 같이, 두 메서드가 바깥 변수에 값을 저장할 경우 모든 객체 인스턴스가 값을 공유하게 됩니다.

```js
function myclass() {}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
```

이 문제는 값을 다른 속성에 저장해서 수정할 수 있습니다. `get`과 `set` 메서드에서 `this`는 속성에 접근하거나 수정할 때 사용하는 객체를 가리킵니다.

```js
function myclass() {}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  },
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
```

접근자 속성과 달리, 값 속성은 프로토타입이 아닌 객체 자체에 설정됩니다. 그러나 부모의 쓰기 불가능한 속성을 상속하는 경우 자식 객체에서도 값을 수정할 수 없습니다.

```js
function myclass() {}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1,
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // 무시, 엄격 모드에서는 오류
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [속성의 소유권과 열거 가능성](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.prototype.watch()")}}
- {{jsxref("Object.prototype.unwatch()")}}
- {{jsxref("Operators/get", "get")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
