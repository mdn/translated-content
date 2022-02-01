---
title: 객체 초기자
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - JSON
  - JavaScript
  - Language feature
  - Literal
  - Methods
  - Object
  - Primary Expression
  - computed
  - mutation
  - properties
browser-compat: javascript.operators.object_initializer
---
{{JsSidebar("Operators")}}

객체는 [`new Object()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/Object), [`Object.create()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 또는 _literal_ 표기법(_initializer_ 표기법)을 사용해 초기화될 수 있습니다. 객체 초기자는 중괄호(`{}`)로 묶인 0개 이상의 객체의 프로퍼티명과 관련 값의 쌍을 콤마로 구분한 목록입니다.

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## 구문

```js
let o = {}
let o = {a: 'foo', b: 42, c: {}}

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};
```

### ECMAScript 2015의 새로운 표기법

이러한 표기법의 지원에 대해서는 호환성 테이블을 확인해주세요. 지원하지 않는 환경에서는 이러한 표기법들은 구문 에러를 유발합니다.

```js
// 프로퍼티명 약식 (ES2015)
let a = 'foo', b = 42, c = {};
let o = {a, b, c}

// 프로퍼티명 약식 (ES2015)
let o = {
  property(parameters) {}
}

// 계산된 프로퍼티명 (ES2015)
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}
```

## 설명

객체 초기자는 {{jsxref("Object")}}의 초기화를 나타내는 표현입니다. 객체는 객체를 나타내는 데 사용되는 _properties_로 구성됩니다. 객체 프로퍼티의 값은 [원시 값](/ko/docs/Glossary/Primitive) 데이터 타입 또는 다른 객체를 포함할 수 있습니다.

### 객체 리터럴 표기법 vs JSON

객체 리터럴 표기법은 **J**ava**S**cript **O**bject **N**otation([JSON](/ko/docs/Glossary/JSON))과 동일하지 않습니다. 비슷하게 보이지만 다음과 같은 차이가 있습니다.

- JSON은 _오직_ `"property": value` 구문을 사용해 정의한 프로퍼티만 허용합니다. 프로퍼티명에는 반드시 큰따옴표를 사용해야 하며 약식으로 정의할 수 없습니다.
- JSON에서 값은 문자열, 숫자, 배열, `true`, `false`, `null`, 또는 다른 (JSON) 객체만 사용할 수 있습니다.
- 함수 값(아래 "메서드"를 보세요)은 JSON의 값으로 할당할 수 없습니다.
- {{jsxref("Date")}}와 같은 객체는 {{jsxref("JSON.parse()")}} 이후의 문자열이 됩니다.
- {{jsxref("JSON.parse()")}}는 계산된 프로퍼티명을 거부하며 에러가 발생합니다.

## 예제

### 객체 생성하기

프로퍼티가 없는 빈 객체는 다음과 같이 생성합니다.

```js
let object = {}
```

_literal_ 또는 _initializer_ 표기법의 장점은 중괄호 안에 프로퍼티를 갖는 객체를 빠르게 생성할 수 있다는 것입니다. 콤마로 구분하여 `key: value` 상의 목록을 작성하면 됩니다.

다음 코드는 세 개의 프로퍼티를 갖는 객체를 생성하며 키는 `"foo"`, `"age"`, `"baz"`입니다. 다음 세 키의 값은 문자열 `"bar"`, 숫자 `42`, 그리고 다른 객체입니다.

```js
let object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12}
}
```

### 프로퍼티에 접근하기

객체를 생성한 후에는 이를 읽거나 변경할 수 있습니다. 객체 프로퍼티는 점 표기법 또는 대괄호 표기법을 사용해 접근할 수 있습니다(자세한 정보는 [프로퍼티 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)를 보세요).

```js
object.foo // "bar"
object['age'] // 42
object.baz          // {myProp: 12}
object.baz.myProp   //12
```

### 프로퍼티 정의

우리는 초기자 구문을 사용해 프로퍼티를 작성하는 방법을 이미 배웠습니다. 때때로 코드의 변수를 객체로 넣고 싶은 경우가 있습니다. 다음과 같은 코드를 보게 될 수 있습니다.

```js
let a = 'foo',
    b = 42,
    c = {};

let o = {
  a: a,
  b: b,
  c: c
}
```

ECMAScript 2015를 사용하면 더 짧은 표기법을 사용해 동일한 결과를 얻을 수 있습니다.

```js
let a = 'foo',
    b = 42,
    c = {};

// 프로퍼티명 약식 (ES2015)
let o = {a, b, c}

// 다르게 작성하면,
console.log((o.a === {a}.a)) // true
```

#### 중복된 프로퍼티명

동일한 프로퍼티명을 사용하면 두 번째 프로퍼티가 첫 번째 프로퍼티를 덮어씁니다.

```js
let a = {x: 1, x: 2}
console.log(a) // {x: 2}
```

ECMAScript 5 엄격 모드 코드에서는 중복된 프로퍼티명을 {{jsxref("SyntaxError")}}로 간주합니다. 런타임 시 복제를 가능하게 한 계산된 프로퍼티 명의 도입으로 ECMScript 2015는 이 제한을 제거했습니다.

```js
function haveES2015DuplicatePropertySemantics() {
  'use strict';
  try {
    ({prop: 1, prop: 2});

    // 에러가 발생하지 않음, 중복된 프로퍼티명이 엄격 모드에서 허용됨
    return true;
  } catch(e) {
    // 에러가 발생함, 엄격 모드에서 중복이 금지됨
    return false;
  }
}
```

### 메서드 정의

객체의 프로퍼티는 [function](/ko/docs/Web/JavaScript/Reference/Functions) 또는 [getter](/ko/docs/Web/JavaScript/Reference/Functions/get) 또는 [setter](/ko/docs/Web/JavaScript/Reference/Functions/set) 메서드를 참조할 수도 있습니다.

```js
let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
}
```

ECMAScript 2015에서는 약식 표기법을 사용할 수 있으므로 "`function`" 키워드는 필요하지 않습니다.

```js
// 약식 메서드명(ES2015)
let o = {
  property(parameters) {},
}
```

ECMAScript 2015에서는 값이 generator 함수인 프로퍼티를 간결하게 정의하는 방법이 있습니다.

```js
let o = {
  *generator() {
    ...........
  }
};
```

다음의 ES5와 유사한 표기법과 동일합니다(하지만 ECMAScript 5에는 generator가 없음을 유의하세요).

```js
let o = {
  generator: function* () {
    ...........
  }
};
```

메서드에 대한 상세 정보와 예제는 [메서드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)를 보세요.

### 계산된 프로퍼티명

ECMAScript 2015부터 객체 초기자 구문은 계산된 프로퍼티 명도 지원합니다. 대괄호 `[]` 안에서 표현식을 허용하며, 표현식은 프로퍼티명으로 계산되어 사용됩니다. 이는 이미 프로퍼티를 읽고 설정하는 데 사용하는 [프로퍼티 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 구문의 대괄호 표기법을 연상시킵니다.

이제 객체 리터럴에서도 유사한 구문을 사용할 수 있습니다.

```js
// 계산된 프로퍼티명(ES2015)
let i = 0
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1) // 1
console.log(a.foo2) // 2
console.log(a.foo3) // 3

const items = ["A","B","C"];
const obj = {
[items]: "Hello"
}
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]) // "Hello"

let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

console.log(config) // {size: 12, mobileSize: 4}
```

### 전개 프로퍼티

[ECMAScript의 나머지/전개 프로퍼티](https://github.com/tc39/proposal-object-rest-spread) 제안(stage 4)은 객체 리터럴에 [전개](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 프로퍼티를 추가합니다. 이는 제공된 객체로부터 새로운 객체로 자신만의 열거형 프로퍼티를 복사합니다.

이제 {{jsxref("Object.assign()")}} 보다 더 짧은 구문을 사용해 얕은 복제(`prototype` 제외) 또는 객체 병합이 가능합니다.

```js
let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }
```

> **경고:** {{jsxref("Object.assign()")}}은 [setters](/ko/docs/Web/JavaScript/Reference/Functions/set)를 트리거하는 반면 전개 연산자는 그렇지 않음을 유의하세요!

### 프로토타입 변형

`__proto__: value` 또는 `"__proto__": value` 형태의 프로토타입 정의는 `__proto__` 이름을 갖는 프로퍼티를 생성하지 않습니다. 대신에, 제공된 값이 객체 또는 [`null`](/ko/docs/Web/JavaScript/Reference/Global_Objects/null)인 경우, 생성된 객체의 `[[Prototype]]`을 해당 값으로 변경합니다(값이 객체 또는 `null`이 아닌 경우, 객체는 변경되지 않습니다).

```js
let obj1 = {}
assert(Object.getPrototypeOf(obj1) === Object.prototype)

let obj2 = {__proto__: null}
assert(Object.getPrototypeOf(obj2) === null)

let protoObj = {}
let obj3 = {'__proto__': protoObj}
assert(Object.getPrototypeOf(obj3) === protoObj)

let obj4 = {__proto__: 'not an object or null'}
assert(Object.getPrototypeOf(obj4) === Object.prototype)
assert(!obj4.hasOwnProperty('__proto__'))
```

객체 리터럴에서는 단일 프로토타입 변형만 허용됩니다. 다중 프로토타입 변형은 구문 에러입니다.

"콜론" 표기법을 사용하지 않는 프로퍼티 정의는 프로토타입 변형이 아닙니다. 이는 다른 이름을 사용하여 유사한 정의와 동일하게 동작하는 프로퍼티 정의입니다.

```js
let __proto__ = 'variable'

let obj1 = {__proto__}
assert(Object.getPrototypeOf(obj1) === Object.prototype)
assert(obj1.hasOwnProperty('__proto__'))
assert(obj1.__proto__ === 'variable')

let obj2 = {__proto__() { return 'hello'; }}
assert(obj2.__proto__() === 'hello')

let obj3 = {['__prot' + 'o__']: 17}
assert(obj3.__proto__ === 17)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [프로퍼티 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/ko/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/ko/docs/Web/JavaScript/Reference/Functions/set)
- [메서드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
