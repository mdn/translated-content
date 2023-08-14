---
title: 기본값 매개변수
slug: Web/JavaScript/Reference/Functions/Default_parameters
---

{{jsSidebar("Functions")}}

기본값 함수 매개변수 (**default function parameter**)를 사용하면 값이 없거나 `undefined`가 전달될 경우 이름붙은 매개변수를 기본값으로 초기화할 수 있습니다.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## 구문

```js
function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) { ... }
```

## 설명

JavaScript에서, 함수의 매개변수는 `{{jsxref("undefined")}}`가 기본입니다. 그러나, 일부 상황에서는 다른 기본 값을 설정하는 것이 유용할 수 있습니다. 이때가 바로 기본값 매개변수가 필요할 때 입니다.

과거에 기본값 설정을 위한 일반적인 방법은 함수 내부(body)에서 매개변수 값을 검사해 `undefined`인 경우 값을 할당하는 것이었습니다.

다음 예제에서, `multiply`호출시 `b`에 할당된 값이 없다면, `b` 값은 `a*b`를 평가할 때 `undefined`일 거고 `multiply` 호출은 `NaN`이 반환됩니다.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

이를 방지하기 위해서, 아래 두번째 줄과 같이 `multiply` 함수가 오직 한 개의 인수만 있다면 `b`를 `1`로 설정하는 방식을 사용하곤 했습니다.

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

ES2015의 기본값 매개변수로 함수 내부 에서의 검사는 더 이상 필요치 않습니다. 이제, 간단히 함수 머리(head)에서 `b`의 기본값으로 `1` 로 설정할 수 있습니다:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

## 예제

### `undefined` vs. 다른 거짓같은 값(falsy values) 전달하기

아래 예제중 두 번째 호출에서, 설사 두 번째 인수를 호출할 때 명시해서 `undefined` (`null` 혹은 {{glossary("falsy")}} 값이 아니긴 하지만 )로 설정하더라도 , `num` 인수의 값은 여전히 기본값입니다.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num 은 1로 설정됨)
test(undefined); // 'number' (num 이 역시 1로 설정됨)

// 다른 falsy values로 테스트 하기:
test(""); // 'string' (num 은 ''로 설정됨)
test(null); // 'object' (num 은 null로 설정됨)
```

### 호출 시 평가

기본 인수는 _호출_ _시_ 에 평가됩니다, 그래서 Python의 경우 와는 달리, 함수가 호출될 때마다 새로운 객체가 생성됩니다.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], [1, 2]가 아니라
```

이는 심지어 함수 및 변수에도 적용됩니다:

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### 앞쪽 매개변수는 뒷쪽의 매개변수 기본값에 사용할 수 있습니다

매개 변수가 여러개일 때 앞쪽에( 왼쪽 부분) 정의된 매개변수는 뒷쪽에 정의된 매개변수의 기본값에 바로 사용할 수 있습니다.

```js
function greet(name, greeting, message = greeting + " " + name) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "HiDavid"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

이 기능은, 얼마나 많은 경계 조건(edge case)를 다룰수 있는지 보여주는, 아래 예제로 거의 설명 가능합니다.

```js
function go() {
  return ":P";
}

// 함수 정의가 간단해짐
function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

// 함수 정의가 길고 장황함
function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

// 아래와 같이 함수 호출하면 동일한 결과를 보임

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### 유효범위 효과 (Scope Effects)

한개 이상의 매개변수에 기본값이 지정되면 특별히 매개변수 목록내의 식별자들(identifiers) 대상으로, [두번째 스코프](https://tc39.es/ecma262/#sec-functiondeclarationinstantiation) (Environment Record) 가 생성됩니다.

이 말은 함수 내부에 선언된 함수와 변수들은 매개변수 기본값 초기화시에 참조할 수 없다는 말입니다; 그렇게 하려고 하면 실행시간 에러인 {{jsxref("ReferenceError")}} 를 유발합니다.

이 말은 또한 함수 내부에서 `var` 로 선언된 변수는 동일한 이름을 가진 매개변수를 가리게 되는, 중첩 `var` 선언 으로 인한 일반적인 동작이 일어나지 않는다는 말입니다.

아래 함수는 호출되면 `ReferenceError` 를 발생시킵니다. 매개변수 기본값이 함수 내부의 자식 유효범위를 참조할 수 없기 때문입니다.

```js example-bad
function f(a = go()) {
  // `f`가 호출 되면 `ReferenceError` 발생
  function go() {
    return ":P";
  }
}
```

...그리고 아래 함수는 `undefined` 를 프린트 하는데, `var a` 가 함수 내부 대상의 유효범위내에서만 효과를 가지기 때문입니다. ( 매개변수 목록이 대상인 부모 스코프가 아니라)

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b(); // `undefined`를 인쇄하는데, 매개변수 기본값이 자체 스코프에 있기 때문입니다
}
```

### 기본값 매개변수 뒤쪽의 기본값 없는 매개변수

매개변수는 여전히 왼쪽에서 오른쪽으로 설정됩니다. 아래 예제에서 뒷쪽에 기본값이 없는 매개변수가 있지만 기본값 매개변수를 덮어씁니다.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### 기본값 할당 있는 해체된 매개변수

기본값 할당을 {{jsxref("Operators/Destructuring_assignment", "destructuring assignment", "", 1)}} 표기와 함께 사용할 수 있습니다:

```js
function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

f(); // 6
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
