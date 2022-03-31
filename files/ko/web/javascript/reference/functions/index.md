---
title: 함수
slug: Web/JavaScript/Reference/Functions
tags:
  - Function
  - Functions
  - Guide
  - JavaScript
  - Reference
browser-compat: javascript.functions
translation_of: Web/JavaScript/Reference/Functions
---
{{jsSidebar("Functions")}}

보통 **함수**란 자신의 외부(재귀 함수의 경우 스스로) 코드가 '호출'할 수 있는 하위 프로그램입니다. 프로그램과 마찬가지로, 함수 역시 명령문의 시퀀스로 구성된 함수 본문을 가집니다. 함수에 값을 '전달'하면, 함수는 값을 '반환'할 것입니다.

JavaScript의 함수는 다른 모든 객체처럼 속성과 메서드를 가질 수 있으므로 일급(first-class) 객체입니다. 다른 객체와 함수를 구별하는 것은, 함수는 호출할 수 있다는 점입니다. 간단히 말해, 함수는 {{jsxref("Function")}} 객체입니다.

[JavaScript 함수 안내서](/ko/docs/Web/JavaScript/Guide/Functions)에서 더 많은 예제와 설명을 확인하세요.

## 설명

JavaScript에서 모든 함수는 `Function` 객체입니다. {{jsxref("Function")}} 문서에서 속성과 메서드 정보를 확인하세요.

함수가 기본 값 외의 원하는 값을 반환하도록 하려면 [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return) 문으로 반환할 값을 지정해야 합니다. 반환문 없는 함수는 기본 값을 반환합니다. [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new) 키워드로 호출하는 [생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)의 경우, 기본 반환 값은 함수의 `this`가 가리키는 값입니다. 그 외의 모든 함수의 경우, 기본 반환 값은 {{jsxref("undefined")}}입니다.

함수 호출의 매개변수는 함수의 인수(arguments)입니다. 인수는 함수에 값으로서 전달되므로, 함수가 인수의 값을 바꿔도 이 변화는 전역적 또는 호출한 함수에 반영되지 않습니다. 그러나, 객체 참조 역시 (특별한) 값입니다. 함수 내에서 참조된 객체의 속성을 바꾸면, 아래 예제와 같이 이 변화는 함수 밖에서도 확인할 수 있습니다.

```js
/* 함수 'myFunc' 선언 */
function myFunc(theObject) {
   theObject.brand = "쌍용";
 }

 /*
  * 변수 'mycar' 선언;
  * 새 객체를 만들고 초기화;
  * 'mycar'에 객체 참조를 할당
  */
 var mycar = {
   brand: "현대",
   model: "엑셀",
   year: 1994
 };

 /* '현대' 기록 */
 console.log(mycar.brand);

 /* 객체 참조를 함수에 전달 */
 myFunc(mycar);

 /*
  * 함수가 객체의 'brand' 속성을 바꿨으므로
  * '쌍용' 출력.
  */
 console.log(mycar.brand);
```

[`this` 키워드](/ko/docs/Web/JavaScript/Reference/Operators/this)는 현재 실행 중인 함수를 참조하는 것이 아닙니다. 그러므로 함수 본문 내에서도 `Function` 객체를 참조할 땐 이름을 사용해야 합니다.

## 함수 정의하기

함수를 정의하는 방법에는 여러 가지가 있습니다.

### 함수 선언 (`function` 명령문)

함수 선언에 사용할 수 있는 특별한 구문이 있습니다. (자세한 정보는 [함수 선언](/ko/docs/Web/JavaScript/Reference/Statements/function)을 참고하세요)

```js
function name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 함수의 이름.
- `param`
  - : 함수에 전달할 인수의 이름.
- `statements`
  - : 함수 본문을 구성할 명령문.

### 함수 표현식 (`function` 표현식)

함수 표현식은 함수 선언과 비슷하고 구문도 같습니다. (자세한 정보는 [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)을 참고하세요) 함수 표현식은 더 큰 표현식의 일부로 사용할 수 있습니다. 함수 표현식을 사용하면 이름이 붙은 '유명 함수' 표현식(이름이 호출 스택 등에 표시됨)과, 이름이 없는 '익명 함수' 표현식을 정의할 수 있습니다. 함수 표현식은 스코프의 상단으로 {{glossary("hoisting", "호이스팅")}} 되지 않으므로, 코드 내에 나타나기 전에 먼저 사용할 수 없습니다.

```js
function [name]([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 함수 이름. 생략할 경우 익명 함수가 됩니다.
- `param`
  - : 함수에 전달할 인수의 이름.
- `statements`
  - : 함수 본문을 구성할 명령문.

다음은 `name`을 사용하지 않은 **익명** 함수 표현식의 예시입니다.

```js
var myFunction = function() {
    statements
}
```

선언 시에 이름을 제공해서 **유명** 함수 표현식을 생성하는 것도 가능합니다.

```js
var myFunction = function namedFunction(){
    statements
}
```

함수 표현식에 이름을 붙여주는 것의 장점 중 하나는, 오류가 발생했을 때 스택 추적에 함수의 이름이 나타나므로 원인을 찾기 쉽다는 것입니다.

위의 두 코드 조각 모두 `function` 키워드가 맨 앞에 오지 않는 것을 볼 수 있습니다. 함수를 선언하지만 `function`이 맨 처음이 아닌 경우가 함수 표현식입니다.

한 번만 사용하는 함수의 경우 자주 사용하는 패턴으로 {{glossary("IIFE")}}(Immediately Invokable Function Expression, 즉시 실행 함수 표현식)가 있습니다.

```js
(function() {
    statements
})();
```

IIFE는 선언 즉시 실행하는 함수 표현식입니다.

### 생성기 함수 선언 (`function*` 명령문)

생성기 함수 선언에 사용할 수 있는 특별한 구문이 있습니다. (자세한 정보는 [`function*` 명령문](/ko/docs/Web/JavaScript/Reference/Statements/function*)을 참고하세요)

```js
function* name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 함수의 이름.
- `param`
  - : 함수에 전달할 인수의 이름.
- `statements`
  - : 함수 본문을 구성할 명령문.

### 생성기 함수 표현식 (`function*` 표현식)

생성기 함수 표현식은 생성기 함수 선언과 비슷하고 구문도 같습니다. (자세한 정보는 [`function*` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function*)을 참고하세요)


```js
function* [name]([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 함수 이름. 생략할 경우 익명 함수가 됩니다.
- `param`
  - : 함수에 전달할 인수의 이름.
- `statements`
  - : 함수 본문을 구성할 명령문.

### 화살표 함수 표현식 (=>)

화살표 함수 표현식은 구문이 더 짧으며, `this` 값을 어휘적으로 바인딩합니다. (자세한 정보는 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 참고하세요)

```js
([param[, param]]) => {
   statements
}

param => expression
```

- `param`
  - : 인수의 이름. 인수를 하나도 받지 않을 경우 `()`로 표시해야 합니다. 하나의 인수만 받는 경우 `foo => 1`과 같이 괄호를 생략할 수 있습니다.
- `statements` 또는 `expression`
  - : 함수 본문. 다수의 명령문으로 구성할 경우 중괄호로 묶어야 합니다. 단일 표현식만으로 구성할 경우 중괄호로 묶지 않아도 되며, 이 때는 해당 표현식을 함수 반환 시 사용합니다.

### `Function` 생성자

> **참고:** `Function` 생성자를 사용해 함수를 생성하면 일부 JavaScript 엔진 최적화를 적용할 수 없으며, 그 외에도 다른 여러 문제가 발생하므로 권장하지 않습니다.

다른 모든 객체처럼, `new` 연산자를 사용해서 {{jsxref("Function")}} 객체를 생성할 수 있습니다.

```js
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : 함수가 형식 매개변수로 사용할 0개 이상의 이름. 모두 올바른 JavaScript 식별자, 또는 쉼표로 구분한 식별자 목록이어야 합니다. ("`x`", "`theValue`", "`a,b`" 등)
- `functionBody`
  - : 함수 본문으로 사용할 JavaScript 명령문을 담은 문자열.

`Function` 생성자를 함수로 호출(`new` 연산자 없이 호출)하는 것도 동일하게 동작합니다.

### `GeneratorFunction` 생성자

> **참고:** `GeneratorFunction`은 전역 객체가 아니며, 다른 생성기 함수 인스턴스에서 가져와야 합니다. {{jsxref("GeneratorFunction")}} 문서에서 자세한 정보를 확인하세요.

> **참고:** `GeneratorFunction` 생성자를 사용해 함수를 생성하면 일부 JavaScript 엔진 최적화를 적용할 수 없으며, 그 외에도 다른 여러 문제가 발생하므로 권장하지 않습니다.

다른 모든 객체처럼, `new` 연산자를 사용해서 {{jsxref("GeneratorFunction")}} 객체를 생성할 수 있습니다.

```js
new GeneratorFunction (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : 함수가 형식 매개변수로 사용할 0개 이상의 이름. 모두 올바른 JavaScript 식별자, 또는 쉼표로 구분한 식별자 목록이어야 합니다. ("`x`", "`theValue`", "`a,b`" 등)
- `functionBody`
  - : 함수 본문으로 사용할 JavaScript 명령문을 담은 문자열.

`GeneratorFunction` 생성자를 함수로 호출(`new` 연산자 없이 호출)하는 것도 동일하게 동작합니다.

## 함수 매개변수

### 매개변수 기본 값

매개변수 기본 값을 사용하면, 값을 전달하지 않았거나 `undefined`를 전달한 경우 형식 매개변수를 기본 값으로 초기화할 수 있습니다. [매개변수 기본 값](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)에서 자세한 정보를 확인하세요.

### 나머지 매개변수

나머지 매개변수 구문은 정해지지 않은 임의 수의 매개변수를 배열로서 나타낼 수 있습니다. [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)에서 자세한 정보를 확인하세요.

## `arguments` 객체

함수 본문 내에서 `arguments` 객체를 사용해서 함수의 인수를 참조할 수 있습니다. [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 문서를 참고하세요.

- [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments): 현재 실행 중인 함수에 전달된 인수를 담은 유사 배열 객체입니다.
- [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee): 현재 실행 중인 함수입니다.
- [`arguments.caller`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/caller): 현재 실행 중인 함수를 호출한 함수입니다.
- [`arguments.length`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/length): 함수에 전달한 인수의 수입니다.

## 메서드 함수 정의하기

### 접근자와 설정자 함수

속성 추가를 지원하는 객체라면 내장 객체와 사용자 정의 객체 양쪽 모두에 접근자 메서드와 설정자 메서드를 정의할 수 있습니다. 접근자와 설정자 정의 구문은 객체 리터럴 구문을 사용합니다.

- [`get`](/ko/docs/Web/JavaScript/Reference/Functions/get)
  - : 객체의 속성에 접근하면 호출할 함수를 바인딩합니다.
- [`set`](/ko/docs/Web/JavaScript/Reference/Functions/set)
  - : 객체의 속성에 할당을 시도하면 호출할 함수를 바인딩합니다.

### 메서드 정의 구문

ECMAScript 2015부터는 메서드 역시 접근자/설정자와 유사한 짧은 구문으로 정의할 수 있습니다. [메서드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions) 문서를 참고하세요.

```js
var obj = {
  foo() {},
  bar() {}
};
```

## 생성자 vs. 선언문 vs. 표현식

아래의 세 코드 조각을 비교해보세요.

`multiply` 변수에 `Function` 생성자로 정의한 함수를 할당하는 코드입니다.

```js
var multiply = new Function('x', 'y', 'return x * y');
```

`multiply`라는 이름의 함수를 선언하는 선언문입니다.

```js
function multiply(x, y) {
   return x * y;
}
```

`multiply` 변수에 익명 함수 표현식을 할당하는 코드입니다.

```js
var multiply = function(x, y) {
   return x * y;
};
```

`multiply` 변수에 이름이 `func_name`인 함수 표현식을 할당하는 코드입니다.

```js
var multiply = function func_name(x, y) {
   return x * y;
};
```

### 차이

세 코드 모두 비슷한 일을 하지만, 몇 가지 작은 차이가 존재합니다.

우선, 함수의 이름과 함수를 할당한 변수는 서로 다릅니다. 함수의 이름은 바꿀 수 없으나, 함수를 할당한 변수는 다시 할당할 수 있습니다. 또한 (함수 표현식의 경우) 함수의 이름은 자신의 본문에서만 사용할 수 있습니다. 외부에서 사용하려고 시도하면, 이전에 함수 이름과 같은 변수를 `var`로 선언한 경우 `undefined`, 그 외의 경우 오류가 발생합니다. 예를 들면...

```js
var y = function x() {};
alert(x); // 오류 발생
```

함수 이름은 함수가 [`Function`의 `toString()` 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)를 통해 직렬화되는 경우에도 보입니다.

함수 이름과 달리, 함수를 할당한 변수는 자신의 스코프에 의해서만 제한되며 이 스코프는 함수 선언의 스코프를 반드시 포함합니다.

네 번째 코드 조각에서 볼 수 있듯, 함수의 이름과 함수를 할당한 변수의 이름은 서로 다를 수 있으며 둘 사이에는 아무 관계도 없습니다. 그런데 함수 선언의 경우 함수 이름과 동일한 이름의 변수 또한 생성합니다. 따라서, 함수 표현식으로 정의하는 함수와 달리, 함수 선언으로 정의한 함수는 자신의 스코프 내에서 이름으로 접근할 수 있습니다.

`new Function`으로 정의한 함수는 이름을 갖지 않습니다.

함수 표현식이나 `Function` 생성자로 정의한 함수와 달리, 함수 선언으로 정의한 함수는 자신의 선언보다 앞서 먼저 호출하는 것이 가능합니다. 예를 들면...

```js
foo(); // 안녕! 경고창 등장
function foo() {
   alert('안녕!');
}
```

함수 표현식과 함수 선언으로 정의하는 함수는 현재 스코프를 상속합니다. 즉, 함수가 클로저를 형성합니다. 반면 `Function` 생성자로 정의한 함수는 (다른 모든 함수가 상속하는) 전역 스코프를 제외하면 어떠한 스코프도 상속하지 않습니다.

```js
/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
```

함수 표현식과 함수 선언으로 정의한 함수에 대해서는 한 번만 구문 분석을 수행하지만, `Function` 생성자로 정의한 함수의 경우 아닙니다. `Function` 생성자로 정의한 함수를 호출하면 매번 함수 본문 문자열을 새로 파싱해야 합니다. 함수 표현식의 경우 매번 새로운 클로저를 생성하지만, 함수 본문을 다시 파싱하지는 않습니다. 따라서 함수 표현식 역시 "`new Function(...)`"보다 빠릅니다. 그러니 가능하다면 `Function` 생성자를 피해야 합니다.

단, 함수 표현식의 본문 문자열 내에서 정의하는 함수 표현식과 선언 본문은 다시 파싱하지 않습니다. 예를 들면...

```js
var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // 함수 본문 문자열의 "function() {\n\talert(bar);\n}" 부분은 다시 파싱하지 않음
```

함수 선언은 아주 쉽게 (때로는 무심코) 함수 표현식으로 바꿀 수 있습니다. 다음 두 가지 중 하나라도 만족할 경우 함수 선언이 아니라 함수 표현식이 됩니다.

- 표현식의 일부가 될 때
- 함수나 스크립트의 '본 요소'가 아닌 경우. '본 요소'는 함수나 스크립트 본문의, 중첩되지 않은 명령문을 의미합니다.

```js
var x = 0;               // 본 요소
if (x == 0) {            // 본 요소
   x = 10;               // 본 요소가 아님
   function boo() {}     // 본 요소가 아님
}
function foo() {         // 본 요소
   var y = 20;           // 본 요소
   function bar() {}     // 본 요소
   while (y == 10) {     // 본 요소
      function blah() {} // 본 요소가 아님
      y++;               // 본 요소가 아님
   }
}
```

### 예제

```js
// 함수 선언
function foo() {}

// 함수 표현식
(function bar() {})

// 함수 표현식
x = function hello() {}

if (x) {
   // 함수 표현식
   function world() {}
}

// 함수 선언
function a() {
   // 함수 선언
   function b() {}
   if (0) {
      // 함수 표현식
      function c() {}
   }
}
```

## 블록 레벨 함수

ES2015부터, [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 블록 내의 함수 범위가 해당 블록으로 제한됩니다. ES2015 이전에는 블록 레벨 함수를 엄격 모드에서 사용할 수 없었습니다.

```js
'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// 엄격 모드가 아닐 경우 f() === 2
```

### 비엄격 모드의 블록 레벨 함수

한 마디로, 안 됩니다.

비엄격 모드에서의 블록 내 함수 선언은 이상하게 동작합니다. 예를 들어,

```js
if (shouldDefineZero) {
   function zero() { // 위험: 호환성 위험
      console.log("zero입니다.");
   }
}
```

ES2015에 따르면 `shouldDefineZero`가 거짓인 경우, `zero`를 정의해선 안된다고 합니다. 조건문의 블록을 실행하지 않기 때문입니다. 그러나 이는 새롭게 명세에 추가된 부분으로, 이전엔 동작을 정의하지 않았습니다. 따라서 일부 브라우저에서는 블록의 실행 유무에 관계 없이 `zero`를 정의할 수 있습니다.

[엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode) 아래에서는 ES2015를 지원하는 브라우저라면 모두 `shouldDefineZero`가 참일 때, `if` 블록 스코프에 한정해 `zero`를 정의할 것입니다.

함수를 조건적으로 정의하는 더 안전한 방법은 함수 표현식을 변수에 할당하는 것입니다.

```js
var zero;
if (0) {
   zero = function() {
      console.log("zero입니다.");
   };
}
```

## 예제

### 숫자 서식화

다음 예제는 주어진 숫자에 선행 0을 추가해 원하는 길이로 맞추는 함수입니다.

```js
function padZeros(num, totalLen) {
   var numStr = num.toString();             // 반환 값을 문자열로 초기화
   var numZeros = totalLen - numStr.length; // 필요한 0의 수 계산
   for (var i = 1; i <= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
```

다음 명령문에서 `padZeros` 함수를 호출합니다.

```js
var result;
result = padZeros(42,4); // "0042"
result = padZeros(42,2); // "42"
result = padZeros(5,4);  // "0005"
```

### 함수 존재 여부 판단

`typeof` 연산자를 사용하면 함수의 존재 여부를 판단할 수 있습니다. 아래 예제에서는 `window` 객체의 `noFunc`라는 속성이 함수인지 확인합니다. 그 후, 함수라면 호출하고, 함수가 아니면 임의의 다른 동작을 수행합니다.

```js
 if ('function' == typeof window.noFunc) {
   // noFunc() 사용
 } else {
   // 다른 동작 수행
 }
```

`if` 조건에 `noFunc`의 참조를 사용한 것에 주의하세요. 이름 뒤에 괄호 "()"를 붙이지 않았으므로 함수를 실제로 호출한 것은 아닙니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`function` 명령문](/ko/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)
- [`function*` 명령문](/ko/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions/Arrow_functions", "화살표 함수", "", 1)}}
- {{jsxref("Functions/Default_parameters", "매개변수 기본 값", "", 1)}}
- {{jsxref("Functions/rest_parameters", "나머지 매개변수", "", 1)}}
- [`arguments` 객체](/ko/docs/Web/JavaScript/Reference/Functions/arguments)
- {{jsxref("Functions/get", "접근자", "", 1)}}
- {{jsxref("Functions/set", "설정자", "", 1)}}
- {{jsxref("Functions/Method_definitions", "메서드 정의", "", 1)}}
