---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`Function`** 객체는 [함수](/ko/docs/Web/JavaScript/Reference/Functions)의 메서드를 제공합니다. JavaScript에서는 모든 함수는 사실 `Function` 객체입니다.

## 생성자

- {{jsxref("Function/Function", "Function()")}}
  - : 새로운 `Function` 객체를 생성합니다. 생성자를 직접 호출하면 함수를 동적으로 생성할 수 있지만 보안 및 {{jsxref("Global_Objects/eval", "eval()")}}와 유사한(그러나 훨씬 덜 중요한) 성능 때문에 고통받을 수 있습니다. 그러나 `eval()`과 달리 `Function` 생성자는 전역 범위에서만 실행되는 함수를 생성합니다.

## 인스턴스 속성

아래 속성은 `Function.prototype`에 정의되어 있고 모든 `Function` 인스턴스에서 공유됩니다.

- {{jsxref("Function.prototype.arguments")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 이 함수에 전달된 인수를 나타냅니다. [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는, 화살표, 비동기 및 제너레이터 함수의 경우 `arguments` 속성에 액세스하면 {{jsxref("TypeError")}}가 발생합니다. 대신 함수 클로저 안에 {{jsxref("Functions/arguments", "arguments")}} 객체를 사용하시기 바랍니다.
- {{jsxref("Function.prototype.caller")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 이 함수를 호출한 함수를 나타냅니다. [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 화살표, 비동기 및 제너레이터 함수의 경우 `caller` 속성에 액세스하면 {{jsxref("TypeError")}}가 발생합니다.
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Function` 인스턴스의 경우 초기 값은 {{jsxref("Function/Function", "Function")}} 생성자입니다.

아래 속성은 각 `Function` 인스턴스의 고유 속성입니다.

- {{jsxref("Function/displayName", "displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : 함수의 표시 이름입니다.
- {{jsxref("Function/length", "length")}}
  - : 함수가 요구하는 인수의 숫자가 명시되어 있습니다.
- {{jsxref("Function/name", "name")}}
  - : 함수의 이름입니다.
- {{jsxref("Function/prototype", "prototype")}}
  - : 함수가 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new) 연산자와 함께 생성자로 사용될 때 사용됩니다. 새 객체의 프로토타입이 됩니다.

## 인스턴스 메서드

- {{jsxref("Function.prototype.apply()")}}
  - : 주어진 `this` 값과 배열 (혹은 [유사 배열 객체](/ko/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects))로 제공되는 선택적 인수를 가진 함수를 호출합니다.
- {{jsxref("Function.prototype.bind()")}}
  - : 호출될 때 `this` 키워드가 제공된 값으로 설정된 새 함수를 생성하며, 선택적으로 새 함수가 호출될 때 제공된 인수 앞에 주어진 일련의 인수를 사용합니다.
- {{jsxref("Function.prototype.call()")}}
  - : 주어진 `this` 값과 선택적 인수를 사용하여 함수를 호출합니다.
- {{jsxref("Function.prototype.toString()")}}
  - : 함수의 소스 코드를 나타내는 문자열을 반환합니다.
    {{jsxref("Object.prototype.toString")}} 메서드를 재정의합니다.
- [`Function.prototype[@@hasInstance]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : 생성자 함수가 객체를 생성자의 인스턴스 중 하나로 인식할지 여부를 결정하는 기본 절차를 지정합니다. [`instanceof`](/ko/docs/Web/JavaScript/Reference/Operators/instanceof) 연산자에 의해 호출됩니다.

## 예제

### 함수 생성자와 함수 선언의 차이점

`Function` 생성자를 사용하여 생성된 함수는 생성 컨텍스트에 대한 클로저를 생성하지 않으며, 항상 전역 범위에서 생성됩니다.
함수를 실행할 때 `Function` 생성자가 생성된 범위의 변수가 아닌 자체 로컬 변수와 전역 변수에만 액세스할 수 있습니다.
이는 함수 표현식에 대한 코드에 {{jsxref("Global_Objects/eval", "eval()")}}를 사용하는 것과는 다릅니다.

```js
// `var`로 전역 속성을 생성합니다
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // 여기 `x`는 전역 `x`를 참조합니다
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // 여기 `x`는 위에 있는 로컬의 `x`를 참조합니다
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

이 코드는 웹 브라우저에서 작동하지만 `f1()`은 `x`를 찾을 수 없기 때문에 Node.js에서 `ReferenceError`가 발생합니다. 이는 Node의 최상위 범위가 전역 범위가 아니며 `x`가 모듈에 로컬이기 때문입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`function`](/ko/docs/Web/JavaScript/Reference/Statements/function)
- [`function` expression](/ko/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
