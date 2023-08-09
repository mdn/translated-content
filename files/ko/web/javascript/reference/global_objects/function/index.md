---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef}}

**`Function` 생성자**는 새 `Function` 객체를 만듭니다. 이 생성자를 직접 호출하여 동적으로 함수를 생성할 수도 있으나, 보안 문제 및 {{jsxref("eval")}}과 유사한(그러나 훨씬 덜 심각한) 성능 문제가 발생할 수 있습니다. 하지만 `eval`과 달리, `Function` 생성자는 전역 범위로 한정된 함수만 생성합니다.

{{EmbedInteractiveExample("pages/js/function-constructor.html")}}

모든 JavaScript 함수는 사실 `Function` 객체입니다. 이는 `(function(){}).constructor === Function`이 참을 반환하는 것에서 알 수 있습니다.

## 구문

```js
    new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

### 매개변수

- `arg1, arg2, ... argN`
  - : 형식 인수 이름으로 사용할 이름. 각 이름은 유효한 JavaScript {{glossary("identifier", "식별자")}}거나, 쉼표로 구분한 유효한 식별자 목록이어야 합니다. 즉, "`x`", "`theValue`", "`x,theValue`"등의 값을 사용할 수 있습니다.
- `functionBody`
  - : 함수 정의를 구성하는 JavaScript 문을 담은 문자열.

## 설명

`Function` 생성자로 생성한 `Function` 객체는 함수를 생성할 때 구문 분석을 수행합니다. 반면, {{jsxref("Operators/function", "함수 표현식", "", 1)}}이나 {{jsxref("Statements/function", "함수 선언문", "", 1)}}으로 함수를 정의하고 코드 내에서 호출한 경우 나머지 코드와 함께 구문 분석되므로, `Function` 생성자가 더 비효율적입니다.

함수로 전달되는 모든 인수는 생성될 함수의 매개 변수 식별자 이름으로 전달되는 순서대로 처리됩니다.

(`new` 연산자를 사용하지 않고) 함수로써 `Function` 생성자를 호출하는 것은 생성자로 호출하는 것과 같습니다. 하지만, new 연산자가 제거됨으로써 코드의 크기를 약간(4 바이트 더 작게) 줄일 수 있으므로 `Function`에 대해서는 `new` 연산자를 사용하지 않는 것이 좋습니다.

## `Function`의 속성과 메서드

전역 `Function` 객체는 자신만의 메서드 또는 속성이 없습니다. 그러나, 그 자체로 함수이기에 {{jsxref("Function.prototype")}}에서 프로토타입 체인을 통해 일부 메서드 및 속성을 상속받습니다.

## `Function` 프로토타입 객체

### 속성

- {{jsxref("Function.arguments")}} {{deprecated_inline}}
  - : 함수에 전달되는 인수(argument)에 해당하는 배열. 이는 {{jsxref("Function")}}의 속성으로 사라지므로(deprecated), 대신 함수 내에서 이용 가능한 {{jsxref("Functions/arguments", "arguments")}} 객체를 사용하세요.
- {{jsxref("Function.arity")}} {{deprecated_inline}}
  - : 함수에 의해 기대되는 인수의 수를 지정하기 위해 사용됐으나 제거되었습니다. 대신 {{jsxref("Function.length", "length")}} 속성을 사용하세요.
- {{jsxref("Function.caller")}} {{non-standard_inline}}
  - : 현재 실행 중인 함수를 호출한 함수를 지정합니다.
- {{jsxref("Function.length")}}
  - : 함수에 의해 기대되는 인수의 수를 지정합니다.
- {{jsxref("Function.name")}}
  - : 함수명.
- {{jsxref("Function.displayName")}} {{non-standard_inline}}
  - : 함수의 표시명.
- `Function.prototype.constructor`
  - : 객체의 프로토타입을 만드는 함수를 지정합니다. 자세한 사항은 {{jsxref("Object.prototype.constructor")}} 참조.

### 메서드

- {{jsxref("Function.prototype.apply()")}}
  - : 함수를 호출하고 *this*를 제공된 값으로 설정합니다, 인수는 {{jsxref("Array")}} 객체로 전달될 수 있습니다.
- {{jsxref("Function.prototype.bind()")}}
  - : 호출될 때 *this*를 제공된 값으로 설정하는 새로운 함수를 만듭니다, 새로운 함수가 호출됐을 때 주어진 순서로 모두 제공되는 선행 인수와 함께.
- {{jsxref("Function.prototype.call()")}}
  - : 함수를 호출(실행)하고 *this*를 제공된 값으로 설정합니다, 인수는 그대로 전달될 수 있습니다.
- {{jsxref("Function.prototype.isGenerator()")}} {{non-standard_inline}}
  - : 함수가 [생성기](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators)인 경우 `true`를 반환합니다; 그렇지 않으면 `false`를 반환합니다.
- {{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}}
  - : 함수의 소스 코드를 나타내는 문자열을 반환합니다. {{jsxref("Object.prototype.toSource")}} 메서드를 재정의(override)합니다.
- {{jsxref("Function.prototype.toString()")}}
  - : 함수의 소스 코드를 나타내는 문자열을 반환합니다. {{jsxref("Object.prototype.toString")}} 메서드를 재정의합니다.

## `Function` 인스턴스

`Function` 인스턴스는 {{jsxref("Function.prototype")}}에서 메서드 및 속성을 상속받습니다. 모든 생성자와 마찬가지로, 생성자의 프로토타입 객체를 바꿈으로써 모든 `Function` 인스턴스에 변화를 줄 수 있습니다.

## 예제

### `Function` 생성자에 인수 지정하기

다음 코드는 인수 두 개를 갖는 `Function` 객체를 생성합니다.

```js
// 예제는 JavaScript 콘솔에서 직접 실행하실 수 있습니다

// 두 개의 인수를 가지고 그 둘의 합을 반환하는 함수 생성
var adder = new Function("a", "b", "return a + b");

// 함수 호출
adder(2, 6);
// > 8
```

인수 "`a`" 및 "`b`"는 함수 몸통(body)의 "`return a + b`"에 사용되는 형식 인수명입니다.

### Function 생성자와 함수 선언의 차이

`Function` 생성자로 만들어지는 함수는 생성 컨텍스트에 대한 클로저(closure)를 생성하지 않습니다; 이들 함수는 항상 전역 범위에서 생성됩니다. 함수가 실행될 때, 자신의 지역 변수와 전역 변수에만 접근할 수 있으며 `Function` 생성자가 호출된 그 범위의 변수에는 접근할 수 없습니다. 이 점이 함수 표현식 코드에서 {{jsxref("eval")}}을 사용하는 것과 다른 점입니다.

```js
var x = 10;

function createFunction1() {
  var x = 20;
  return new Function("return x;"); // 여기서 |x|는 전역 범위에 있는 |x|를 참조함.
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; // 여기서 |x|는 위의 지역에 있는 |x|를 참조함.
  }
  return f;
}

var f1 = createFunction1();
console.log(f1()); // 10
var f2 = createFunction2();
console.log(f2()); // 20
```

위 코드는 브라우저에서는 정상 동작하지만, {{glossary("Node.js")}}에서는 `x`를 찾을 수 없어, `f1()`이 `ReferenceError`를 생성합니다. 이는 Node.js의 최상위 스크립트 범위가 전역이 아닌 모듈이므로, `x`도 모듈 범위에 종속되기 때문입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Functions", "Functions and function scope")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
