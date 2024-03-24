---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
---

{{jsSidebar("Statements")}}

**`for...in` 문**은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다. ([Symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)로 키가 지정된 속성은 무시합니다.)

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## 문법

```js
for (const variable in object) {
  statement;
}
```

### 파라미터

- `variable`
  - : 매번 반복마다 다른 속성이름(Value name)이 `변수(variable)`로 지정됩니다.
- `object`
  - : 반복작업을 수행할 객체로 열거형 속성을 가지고 있는 객체.

## 설명

`for...in`문은 열거 가능한 non-Symbol 속성에 대해서만 반복합니다.

`Array`나 `Object` 등 내장 constructor를 통해 만들어진 객체는 {{jsxref("String")}}의 {{jsxref("String.indexOf", "indexOf()")}}, {{jsxref("Object")}}의 {{jsxref("Object.toString", "toString()")}}와 같이 `Object.prototype`, `String.prototype` 로부터 열거가 가능하지 않은 속성들을 상속해왔습니다. `for...in`문은 객체 자체의 모든 열거 가능한 속성들과 프로토타입 체인으로부터 상속받은 속성들에 대해 반복할 것입니다. (더 가까운 프로토타입의 속성들이 프로토타입 체인 객체로부터 더 멀리 떨어진 프로토 타입의 속성보다 더 우선합니다.)

### 속성의 삭제, 추가, 수정

<code>for..in</code> 문은 임의의 순서로 객체의 속성들에 대해 반복합니다. (적어도 <code>cross-browser</code> 설정에서는 왜 표면적으로 보이는 반복의 순서를 따를 수 없는지에 대해서 {{jsxref("Operators/delete", "delete")}} 를 참고하십시오.)

만약 한 반복으로 속성이 수정된 후에 방문하는 경우, 반복문에서의 그 값은 나중의 값으로 정해집니다. 방문하기 전에 삭제된 속성에 대해서는 이후에 방문하지 않습니다. 반복이 발생하는 객체에 추가된 속성은 방문하거나 반복에서 생략할 수 있습니다.

일반적으로 현재 방문 중인 속성 외에는 반복하는 동안 객체의 속성을 추가, 수정, 제거하지 않는 것이 가장 좋습니다. 추가된 속성을 방문할 것인지, 수정된 속성(현재의 속성 제외)을 수정 이전 혹은 이후에 방문할 것인지, 삭제된 속성을 삭제 이전에 방문할 것인지에 대해서는 보장할 수 없습니다.

### 배열의 반복과 for...in

> **Note:** `for...in`은 인덱스의 순서가 중요한 {{jsxref("Array")}}에서 반복을 위해 사용할 수 없습니다.

배열 인덱스는 정수로 된 열거 가능한 속성이며, 일반적인 객체의 속성들과 같습니다. `for...in`은 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없습니다. `for...in`반복문은 정수가 아닌 이름을 가진 속성, 상속된 모든 열거 가능한 속성들을 반환합니다.

반복되는 순서는 구현에 따라 다르기 때문에, 배열의 반복이 일관된 순서로 요소를 방문하지 못할 수도 있습니다. 그러므로 방문의 순서가 중요한 배열의 반복시에는 숫자 인덱스를 사용할 수 있는 `for` 반복문을 사용하는 것이 좋습니다.(또는 {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Statements/for...of", "for...of")}}를 권장합니다.)

### 자체 속성만 반복

만약 당신이 객체의 프로토타입이 아닌 객체 자체에 연결된 속성만 고려한다면 {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}}나 {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}를 사용하십시오.({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable()")}} 또한 가능합니다.) 또는 외부적인 코드 간섭이 없다면 체크 메서드로 내장 프로토타입을 확장할 수 있습니다.

## 왜 for...in을 사용합니까?

`for...in`이 객체의 반복을 위해 만들어졌지만, 배열의 반복을 위해서는 추천되지 않고, `Array.prototype.forEach()`, `for...of`가 이미 존재합니다. 그러면 for...in은 어떻게 사용하는 것이 좋을까요?

이것은 쉽게 객체의 속성을 확인(콘솔이나 다른 방법으로 출력)할 수 있기 때문에 실질적으로 디버깅을 위해 사용될 수 있습니다. 배열이 데이터의 저장에 있어서는 더 실용적이지만, 키-값 쌍이 선호되는 데이터의 경우(속성이 "key"의 역할을 함) 특정 값을 가진 키가 있는지 확인하려는 경우에 for...in을 사용할 수 있습니다.

## 예제

### for...in의 사용

아래의 예는 열거 가능한 non-Symbol속성들을 반복해서 속성의 이름과 그 값을 기록합니다.

```js
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### 자체 속성 반복

아래는 {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} 를 사용하는 예를 보여주고 있습니다. 상속된 속성은 표시되지 않습니다.

```js
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

function show_own_props(obj, objName) {
  var result = "";

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += objName + "." + prop + " = " + obj[prop] + "\n";
    }
  }

  return result;
}

o = new ColoredTriangle();
alert(show_own_props(o, "o")); /* alerts: o.color = red */
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

### Compatibility: Initializer expressions in strict mode

Prior to Firefox 40, it was possible to use an initializer expression
(`i=0`) in a `for...in` loop:

```js example-bad
const obj = { a: 1, b: 2, c: 3 };
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

This nonstandard behavior is now ignored in version 40 and later, and will present a {{jsxref("SyntaxError")}} ("[for-in loop head declarations may not have initializers](/ko/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)") error in [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode) ([bug 748550](https://bugzilla.mozilla.org/show_bug.cgi?id=748550) and [bug 1164741](https://bugzilla.mozilla.org/show_bug.cgi?id=1164741)).

Other engines such as v8 (Chrome), Chakra (IE/Edge), and JSC (WebKit/Safari) are
investigating whether to remove the nonstandard behavior as well.

## See also

- {{jsxref("Statements/for...of", "for...of")}} – a similar statement that iterates
  over the property _values_
- {{jsxref("Statements/for", "for")}}
- [Iterators and Generator functions](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators) (usable with `for...of` syntax)
- [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
