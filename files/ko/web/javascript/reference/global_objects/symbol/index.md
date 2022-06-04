---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol
---
{{JSRef}}

`Symbol()` 함수는 **심볼(symbol)** 형식의 값을 반환하는데, 이 심볼은 내장 객체(built-in objects)의 여러 멤버를 가리키는 정적 프로퍼티와 전역 심볼 레지스트리(global symbol registry)를 가리키는 정적 메서드를 가지며, "`new Symbol()`" 문법을 지원하지 않아 생성자 측면에서는 불완전한 내장 객체 클래스(built-in object class)와 유사합니다.

`Symbol()`로부터 반환되는 모든 심볼 값은 고유합니다. 심볼 값은 객체 프로퍼티(object properties)에 대한 식별자로 사용될 수 있습니다; 이것이 심볼 데이터 형식의 유일한 목적입니다. 목적과 용례에 대한 더 자세한 설명은 [용어집의 심볼 항목(glossary entry for Symbol)](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)에서 볼 수 있습니다.

**심볼(symbol)** 데이터 형은 원시 데이터 형({{Glossary("Primitive", "primitive data type")}})의 일종입니다.

## 설명(Description)

새 원시(primitive) 심볼을 생성하려면, 심볼을 설명하는 선택적(optional) 문자열과 함께 `Symbol()`을 쓰면됩니다.

```js
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
```

위의 코드는 세 개의 새 심볼을 생성합니다. `Symbol("foo")`는 "foo"라는 문자열을 심볼로 강제로 변환시키지 않는다는 점에 유의하시기 바랍니다. 해당 코드는 매 번 새로운 심볼을 생성합니다:

```js
Symbol("foo") === Symbol("foo"); // false
```

아래 {{jsxref("Operators/new", "new")}} 연산자를 이용한 문법은 {{jsxref("TypeError")}}를 발생시킬 것입니다:

```js
var sym = new Symbol(); // TypeError
```

이는 작성자가 새로운 심볼 값 대신 명시적으로 심볼 래퍼 객체(`Symbol` wrapper object)를 생성할 수 없게 합니다. 일반적으로 원시 데이터 형에 대한 명시적인 래퍼 객체 생성(예를 들어, `new Boolean`, `new String` 또는 `new Number`와 같은)이 가능하다는 점에 비춰보면 의외일 수 있습니다.

꼭 심볼 래퍼 객체를 생성하고 싶다면, `Object()` 함수를 이용할 수 있습니다.

```js
var sym = Symbol("foo");
typeof sym;     // "symbol"
var symObj = Object(sym);
typeof symObj;  // "object"
```

### 전역 심볼 레지스트리 내 공유 심볼

`Symbol()` 함수를 사용한 위의 문법은 코드베이스(codebase) 전체에서 사용 가능한 전역 심볼을 생성하는 것은 아닙니다. 파일 간(across files), 또는 램(realms, 각각이 자체의 전역 범위(scope)를 가지는) 간에도 사용할 수 있는 심볼을 생성하기 위해서는, {{jsxref("Symbol.for()")}}와 {{jsxref("Symbol.keyFor()")}} 메서드를 이용해 전역 심볼 레지스트리에 심볼을 설정하거나 추출해야 합니다.

### 객체에서 심볼 속성(symbol properties) 찾기

{{jsxref("Object.getOwnPropertySymbols()")}} 메서드는 심볼의 배열을 반환하여 주어진 객체의 심볼 속성을 찾을 수 있게 해줍니다. 모든 객체는 스스로에 대한 심볼 속성이 없는 상태로 초기화되기 때문에 해당 객체에 심볼 속성을 설정하기 전까지는 빈 배열을 반환한다는 점에 유의하시기 바랍니다.

## 생성자

- [`Symbol()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol)
  - : Creates a new `Symbol` object. It is incomplete as a constructor because it does not support the syntax "`new Symbol()`".

## 정적 속성

- {{jsxref("Symbol.asyncIterator")}} {{experimental_inline}}
  - : 객체의 기본 비동기 반복자(default AsyncIterator)를 반환하는 메서드. [`for await of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await-of)에서 사용됨.
- {{jsxref("Symbol.hasInstance")}}
  - : 생성자 객체(constructor object)가 어떤 객체를 자신의 인스턴스로 인식하는지를 확인하는데 사용하는 메소드. {{jsxref("Operators/instanceof", "instanceof")}}에서 사용됨.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : 객체가 자신의 배열 요소를 직렬로(be flattened) 나타낼 수 있는지 여부를 나타내는 부울 값. {{jsxref("Array.prototype.concat()")}}에서 사용됨.
- {{jsxref("Symbol.iterator")}}
  - : 객체의 기본 반복자(default iterator)를 반환하는 메서드.[`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)에서 사용됨.
- {{jsxref("Symbol.match")}}
  - : 문자열과 일치하는(match) 메서드로 객체를 정규표현식으로 사용할 수 있는지 확인하는데도 사용. {{jsxref("String.prototype.match()")}}에서 사용됨.
- {{jsxref("Symbol.matchAll")}}
  - : A method that returns an iterator, that yields matches of the regular expression against a string. Used by {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Symbol.replace")}}
  - : 문자열 중 일치하는 문자열 일부를 대체하는 메소드. {{jsxref("String.prototype.replace()")}}에서 사용됨.
- {{jsxref("Symbol.search")}}
  - : 문자열에서 정규표현식과 일치하는 인덱스(index)를 반환하는 메서드. {{jsxref("String.prototype.search()")}}에서 사용됨.
- {{jsxref("Symbol.split")}}
  - : 정규표현식과 일치하는 인덱스에서 문자열을 나누는 메서드. {{jsxref("String.prototype.split()")}}에서 사용됨.
- {{jsxref("Symbol.species")}}
  - : 파생(derived) 객체를 생성하는데 사용되는 생성자 함수.
- {{jsxref("Symbol.toPrimitive")}}
  - : 객체를 원시형(primitive) 값으로 변환하는 메서드.
- {{jsxref("Symbol.toStringTag")}}
  - : 객체에 대한 기본 설명(description)으로 사용되는 문자열 값. {{jsxref("Object.prototype.toString()")}}에서 사용됨.
- {{jsxref("Symbol.unscopables")}}
  - : 자신의 속성명 또는 상속된 속성명이 연관 객체(the associated objet)의 [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) 환경 바인딩(envorinment bindings)에서 제외된 객체의 값 (An object value of whose own and inherited property names are excluded from the [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) environment bindings of the associated object).

## 정적 메서드

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : 주어진 키(key)로 현재 존재하는 심볼을 검색하고 찾으면 반환합니다. 존재하지 않으면 주어진 키로 전역 심볼 레지스트리에 새로운 심볼을 생성하고 그 심볼을 반환합니다.
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : 전역 심볼 레지스트리로부터 주어진 심볼에 대한 공유 심볼 키(shared symbol key)를 추출합니다.

## 인스턴스 속성

- {{jsxref("Symbol.prototype.description")}}
  - : A read-only string containing the description of the Symbol.

## 인스턴스 메서드

- {{jsxref("Symbol.prototype.toString()")}}
  - : Returns a string containing the description of the Symbol. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Returns the Symbol. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.
- {{jsxref("Symbol.prototype.@@toPrimitive()", "Symbol.prototype[@@toPrimitive]")}}
  - : Returns the Symbol.

## 예제

### 심볼에 `typeof` 연산자 사용

{{jsxref("Operators/typeof", "typeof")}} 연산자를 이용해 심볼인지 알 수 있습니다.

```js
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
```

### 심볼의 형 변환(type conversions)

심볼의 형 변환(type conversion)할 때 유의해야 할 사항

- 심볼을 숫자(number)로 변환하고자 할 때, {{jsxref("TypeError")}}가 발생합니다.
  (e.g. `+sym` or `sym | 0`).
- 느슨한 동등(loose equality) 연산자를 사용할 때, `Object(sym) == sym`는 `true`를 반환합니다.
- `Symbol("foo") + "bar"`는 {{jsxref("TypeError")}} (심볼을 문자열로 변환할 수 없는)를 발생시킵니다. 이는 예를 들자면, 심볼에서 암묵적으로 새로운 문자열 속성명을 생성하지 못하게 합니다.
- ["보다 안전한" String(sym) 변환("safer" `String(sym)` conversion)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion)은 심볼에 대해 {{jsxref("Symbol.prototype.toString()")}}을 호출하는 것과 같이 동작하지만, `new String(sym)`는 오류(error)를 발생시키는 것을 유의하시기 바랍니다.

### 심볼과 `for...in` 반복문

심볼은 [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 반복문 내에서 하나씩 열거할 수 없습니다. 더구나, {{jsxref("Object.getOwnPropertyNames()")}}는 심볼 객체 속성(symbol object properties)을 반환하지 않습니다. 하지만, {{jsxref("Object.getOwnPropertySymbols()")}}를 이용해 이것들을 가져올 수 있습니다.

```js
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
   console.log(i); // logs "c" and "d"
}
```

### 심볼과 `JSON.stringify()`

심볼을 키로 사용한 속성(symbol-keyed properties)은 `JSON.stringify()`을 사용할 때 완전히 무시됩니다:

```js
JSON.stringify({[Symbol("foo")]: "foo"});
// '{}'
```

더 자세한 것은 {{jsxref("JSON.stringify()")}}를 참조하시기 바랍니다.

### 속성 키로서의 심볼 래퍼 객체(symbol wrapper object)

심볼 래퍼 객체를 속성 키로 사용하면, 이 객체는 래핑된 심볼로 강제 변환됩니다(When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped symbol):

```js
var sym = Symbol("foo");
var obj = {[sym]: 1};
obj[sym];            // 1
obj[Object(sym)];    // still 1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Polyfill of `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Glossary: Symbol data type](/en-US/docs/Glossary/Symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- ["ES6 In Depth: Symbols" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
