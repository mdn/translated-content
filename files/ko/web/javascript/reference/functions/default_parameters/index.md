---
title: 기본값 매개변수
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: 9ebec1107f78b1e7ba6b23340d32ccc62f703d72
---

{{jsSidebar("Functions")}}

기본값 함수 매개변수 (**default function parameter**)를 사용하면 값이 전달되지 않거나 `undefined`인 경우 명명된 매개변수를 기본값으로 초기화할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Functions Default")}}

```js interactive-example
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```

## 구문

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## 설명

JavaScript에서, 함수의 매개변수는 `{{jsxref("undefined")}}`가 기본입니다. 그러나, 일부 상황에서는 다른 기본 값을 설정하는 것이 유용할 수 있습니다. 이때가 바로 기본값 매개변수가 필요할 때 입니다.

다음 예제에서 `multiply`가 호출될 때 `b`에 대한 값이 제공되지 않으면 `a * b`를 평가할 때 `b`의 값은 `undefined`가 되고 `multiply`는 `NaN`을 반환합니다.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

과거에 기본값을 설정하는 일반적인 방법은 함수 본문에서 매개변수 값을 테스트하고 `undefined`인 경우 값을 할당하는 것이었습니다. 다음 예제에서는 `multiply`가 하나의 인수로만 호출되는 경우 `b`가 `1`로 설정됩니다.

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

기본 매개변수를 사용하면 함수 내부의 검사는 더 이상 필요하지 않습니다. 이제 함수 머리(head)에서 `b`에 `1`을 기본값으로 지정할 수 있습니다.

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

매개변수는 여전히 왼쪽에서 오른쪽으로 설정되어 나중에 기본값이 없는 매개변수가 있더라도 기본값을 덮어씁니다.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> 첫 번째 기본 매개변수와 그 이후의 모든 매개변수는 함수의 [`length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/length)에 영향을 미치지 않습니다.

기본 매개변수 생성자는 함수 본문에서 생성된 범위의 상위인 자체 범위에서 동작합니다.

즉, 이전 매개변수는 이후 매개변수의 생성자에서 참조할 수 있습니다. 그러나 함수 본문에 선언된 함수와 변수는 기본값 매개변수 생성자에서 참조할 수 없으며, 이를 시도하면 런타임 {{jsxref("ReferenceError")}}가 발생합니다. 여기에는 함수 본문에서 [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)로 선언된 변수도 포함됩니다.

예를 들어, 다음 함수는 기본 매개변수 값에 함수 본문의 하위 범위에 대한 접근 권한이 없기 때문에 호출될 때 `ReferenceError`를 발생시킵니다.

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go가 정의되지 않았습니다.
```

이 함수는 매개변수 `a`의 값을 출력하는데, 변수 `var a`는 매개변수 목록의 상위 범위가 아닌 함수 본문에 대해 생성된 범위에만 올라가기 때문에 `b`에는 값이 표시되지 않습니다.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

## 예제

### `undefined` vs 다른 거짓같은 값(falsy values) 전달하기

아래 예제중 두 번째 호출에서, 첫 번째 인수가 명시적으로 `undefined`(`null` 또는 다른 {{glossary("falsy")}} 값은 아니지만)로 설정되어 있어도 여전히 `num` 인수의 값은 여전히 기본값입니다.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num은 1로 설정됨)
test(undefined); // 'number' (num이 역시 1로 설정됨)

// 다른 falsy values로 테스트 하기
test(""); // 'string' (num은 ''로 설정됨)
test(null); // 'object' (num은 null로 설정됨)
```

### 호출 시 평가

기본 인수는 호출 시에 평가됩니다. 그래서 Python과 달리 함수가 호출될 때마다 새 객체가 생성됩니다.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], [1, 2]가 아니라
```

이는 심지어 함수와 변수에도 적용됩니다.

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

### 이전 매개 변수는 이후 매개 변수의 기본값으로 사용할 수 있습니다

앞서 정의한 매개변수(왼쪽)는 나중에 정의한 매개변수의 기본값으로 사용할 수 있습니다.

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

이 기능은 다음과 같이 대략적으로 계산할 수 있으며, 이는 처리되는 경계 조건(edge case)의 수를 보여줍니다.

```js
function go() {
  return ":P";
}

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

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
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
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### 기본값이 할당된 구조화된 매개변수

[구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring) 구문을 사용하여 기본값 할당을 사용할 수 있습니다.

이를 수행하는 일반적인 방법은 빈 객체/배열을 구조 분해된 매개변수의 기본값으로 설정하는 것입니다.(예: `[x = 1, y = 2] = []`) 이렇게 하면 함수에 아무 것도 전달하지 않고도 해당 값이 미리 채워져 있을 수 있습니다.

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// 객체에서도 동일하게 작동합니다.
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [함수](/ko/docs/Web/JavaScript/Guide/Functions)
- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
- [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish coalescing operator (`??`)](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
