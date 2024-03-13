---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
---

{{jsSidebar("Functions")}}

**`arguments.callee`** 속성(property)은 현재 실행 중인 함수를 포함합니다.

## 설명

`callee`는 `arguments` 객체의 속성입니다. 그 함수의 몸통(body) 내에서 현재 실행 중인 함수를 참조하는 데 쓰일 수 있습니다. 이는 함수의 이름을 알 수 없는 경우에 유용합니다, 가령 이름 없는 함수 식(또한 "익명 함수"라 함) 내에서.

> **경고:** ECMAScript 제5판(ES5) 은 [엄격 모드](/ko/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)에서 `arguments.callee()`의 사용을 금합니다. function 식(expression)에 이름을 주거나 함수 자체를 호출해야 하는 곳에 function 선언을 사용하여 `arguments.callee()` 사용을 피하세요.

### `arguments.callee`는 왜 ES5 엄격 모드에서 제거되었나요?

([olliej의 Stack Overflow 답변](http://stackoverflow.com/a/235760/578288)에서 고쳐씀)

초기 버전 JavaScript는 유명(named) 함수 식을 허용하지 않습니다. 그리고 이 때문에 재귀(recursive) 함수 식을 만들 수 없습니다.

예를 들어, 이 구문은 작동됩니다:

```js
function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

하지만 다음은:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
});
```

아닙니다. 이를 우회하기 위해 `arguments.callee`가 추가되었고 이와 같이 할 수 있습니다

```js
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

그러나, 이는 실로 정말 나쁜 해결책이었습니다. 이는 (다른 `arguments`, `callee` 및 `caller` 문제와 함께) 일반적인 경우에 인라인 및 tail 재귀를 불가능케 하기에 (tracing 등을 통해 선택한 경우에 그것을 달성할 수 있지만 최고의 코드는 검사가 달리 필요하지 않기에 차선입니다.) 다른 주요 문제는 그 재귀 호출이 다른 `this` 값을 갖는 것입니다. 가령:

```js
var global = this;

var sillyFunction = function (recursed) {
  if (!recursed) {
    return arguments.callee(true);
  }
  if (this !== global) {
    alert("This is: " + this);
  } else {
    alert("This is the global");
  }
};

sillyFunction();
```

ECMAScript 3은 유명(named) 함수 식을 허용해서 이 문제를 해결했습니다. 예를 들면:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

이는 많은 이점이 있습니다:

- 함수는 코드 내부에서 다른 함수처럼 호출될 수 있습니다
- 외부 범위(outer scope)에서 변수를 만들지 않습니다 ([IE 8 아래는 제외하고](http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- arguments 객체에 액세스하는 것보다 성능이 더 낫습니다

사라지게 됐던 또 다른 기능은 `arguments.callee.caller` 또는 더 명확하게 `Function.caller`였습니다. 이는 왜일까요? 자, 어느 시점에서든 당신은 모든 함수의 스택 상 가장 깊은 caller를 찾을 수 있고 위에서 말했듯이 호출 스택 보기는 한 가지 주요 효과가 있습니다: 이는 큰 수의 최적화를 불가능 또는 훨씬 훨씬 더 어렵게 합니다. 예를 들어, 함수 `f`가 익명(unknown) 함수를 호출하지 않음을 보장할 수 없는 경우, `f`를 인라인하는 게 가능하지 않습니다. 원래 사소하게 인라인 가능했을 지도 모를 모든 호출 사이트가 다수의 guard를 축적함을 뜻합니다:

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

JavaScript 인터프리터가 제공된 모든 인수가 호출이 행해진 그 시점에 숫자임을 보장할 수 없다면, 인라인된 코드 앞에 모든 인수에 대한 검사 삽입이 필요합니다. 그렇지 않으면 그 함수를 인라인할 수 없습니다. 이제 이 특정한 경우에 스마트 인터프리터는 더 최적이고 사용되지 않을 값은 확인하지 않을 검사를 재배열할 수 있어야 합니다. 그러나 많은 경우에 그건 그냥 가능하지 않고 그러므로 인라인은 불가능하게 됩니다.

## 예

### 익명 재귀 함수에서 `arguments.callee` 사용하기

재귀 함수는 자신을 참조할 수 있어야 합니다. 보통, 함수는 그 이름으로 자신을 참조합니다. 그러나, 익명 함수([함수 식](/ko/docs/Web/JavaScript/Reference/Operators/function) 또는 [`Function` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)로 생성될 수 있는)는 이름이 없습니다. 그러므로 그를 참조하는 액세스 가능한 변수가 없는 경우, 함수가 자신을 참조할 수 있는 유일한 방법은 `arguments.callee`에 의해서입니다.

다음 예는 차례로 팩토리얼 함수를 정의하고 반환하는 함수를 정의합니다. 이 예는 매우 실용적이지 않고 같은 결과가 [유명 함수 식](/ko/docs/Web/JavaScript/Reference/Operators/function)으로 달성될 수 없는 경우가 거의 없습니다.

```js
function create() {
  return function (n) {
    if (n <= 1) return 1;
    return n * arguments.callee(n - 1);
  };
}

var result = create()(5); // 반환값 120 (5 * 4 * 3 * 2 * 1)
```

### 좋은 대안 없는 `arguments.callee`의 사용

그러나, 다음과 같은 경우에는 `arguments.callee`에 대안이 없습니다. 그래서 그 사라짐(deprecation)은 버그가 될 수 있습니다 ([Firefox bug 725398](https://bugzil.la/725398) 참조):

```js
function createPerson(sIdentity) {
  var oPerson = new Function("alert(arguments.callee.identity);");
  oPerson.identity = sIdentity;
  return oPerson;
}

var john = createPerson("John Smith");

john();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Function")}}
