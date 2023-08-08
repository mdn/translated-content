---
title: var
slug: Web/JavaScript/Reference/Statements/var
---

{{jsSidebar("Statements")}}

**`var`** 문은 변수를 선언하고, 선택적으로 초기화할 수 있습니다.

{{EmbedInteractiveExample("pages/js/statement-var.html")}}

## 구문

```js
    var varname1 [= value1 [, varname2 [, varname3 ... [, varnameN]]]];
```

- `varnameN`
  - : 변수 이름. 어떤 유효한 식별자도 될 수 있습니다.
- `valueN`
  - : 변수의 초기값. 어떤 유효한 표현도 될 수 있습니다.

## 설명

어디에 선언이 되어있든 간에 변수들은 어떠한 코드가 실행되기 전에 처리가 됩니다. var로 선언된 변수의 범위는 현재 실행 문맥인데, 그 문맥은 둘러싼 함수, 혹은 함수의 외부에 전역으로 선언된 변수도 될 수 있습니다.

선언된 변수들의 값 할당은 할당이 실행될 때 전역변수(이것은 전역 오브젝트의 프로퍼티가 됩니다)처럼 생성이 됩니다. 선언된 변수들과 선언되지 않은 변수들의 차이점은 다음과 같습니다:

1. 선언된 변수들은 변수가 선언된 실행 콘텍스트(execution context) 안에서 만들어집니다. 선언되지 않은 변수들은 항상 전역변수 입니다.

   ```js
   function x() {
     y = 1; // strict 모드에서는 ReferenceError를 출력합니다.
     var z = 2;
   }

   x();

   console.log(y); // 로그에 "1" 출력합니다.
   console.log(z); // ReferenceError: z is not defined outside x를 출력합니다.
   ```

2. 선언된 변수들은 어떠한 코드가 실행되기 전에 만들어집니다. 선언되지 않은 변수들은 변수들을 할당하는 코드가 실행되기 전까지는 존재하지 않습니다.

   ```js
   console.log(a); // ReferenceError를 출력합니다.
   console.log("still going..."); // 결코 실행되지 않습니다.
   ```

   ```js
   var a;
   console.log(a); // 브라우저에 따라 로그에 "undefined" 또는 "" 출력합니다.
   console.log("still going..."); // 로그에 "still going..." 출력합니다.
   ```

3. 선언된 변수들은 변수들의 실행 콘텍스트(execution context)의 프로퍼티를 변경되지 않습니다. 선언되지 않은 변수들은 변경 가능합니다. (e.g 삭제 될 수도 있습니다.)

   ```js
   var a = 1;
   b = 2;

   delete this.a; // strict 모드에서는 TypeError를 출력합니다. 그렇지 않으면 자동적으로 실패합니다.
   delete this.b;

   console.log(a, b); // ReferenceError를 출력합니다.
   // 'b' 프로퍼티는 삭제되었고, 어디에도 존재하지 않습니다.
   ```

이러한 세가지 다른점 때문에, 변수 선언 오류는 예기치않은 결과로 이어질 가능성이 높습니다. 그러므로 **함수 또는 전역 범위인지 여부와 상관없이, 항상 변수를 선언 하는 것을 추천합니다.** 그리고 ECMAScript 5 안에 [strict mode](/ko/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode), 선언되지 않은 변수에 할당하면 오류를 출력합니다.

### var 호이스팅(hoisting)

변수 선언들 (그리고 일반적인 선언)은 어느 코드가 실행 되기 전에 처리하기 때문에, 코드 안에서 어디서든 변수 선언은 최상위에 선언한 것과 동등합니다. 이것은 변수가 선언되기 전에 사용 될 수 있다는 것을 의미합니다. 변수 선언이 함수 또는 전역 코드의 상단에 이동하는 것과 같은 행동을 "호이스팅(hoisting)"이라고 불립니다.

```js
bla = 2;
var bla;
// ...

// 위 선언을 다음과 같이 암묵적으로 이해하면 됩니다:

var bla;
bla = 2;
```

이러한 이유로, 그들의 범위(전역 코드의 상단 그리고 함수 코드의 상단) 상단에 변수를 항상 선언하기를 권장합니다. 그러면 변수는 함수 범위 (지역)이 되며, 스코프 체인으로 해결될 것이 분명합니다.

## 예제

### 두 변수들의 선언 및 초기화

```js
var a = 0,
  b = 0;
```

### 단일 문자열 값으로 두 변수들 할당

```js
var a = "A";
var b = a;

// 다음과 같음:

var a,
  b = (a = "A");
```

순서에 유의:

```js
var x = y,
  y = "A";
console.log(x + y); // undefinedA
```

여기, x와 y는 어떠한 코드 실행하기 전에 선언되었다, 할당은 후에 발생하였다. "`x = y`"가 실행될 때, `y`는 존재하여 `ReferenceError를 출력하진 않고` 값은 '`undefined`' 입니다. 그래서, `x는` undefined 값이 할당 됩니다. 그리고나서, `y` 는 `'A'` 값이 할당 됩니다. 결과적으로, 첫번째 줄 이후에, `x === undefined && y === 'A'`, 이와 같은 결과가 됩니다.

### 다수의 변수들의 초기화

```js
var x = 0;

function f() {
  var x = (y = 1); // x는 지역변수로 선언됩니다. y는 아닙니다!
}
f();

console.log(x, y); // 0, 1
// x는 예상대로 전역이다
// y leaked outside of the function, though!
```

### 암묵적인 전역변수와 외부 함수 범위

암묵적인 전역변수가 될 것으로 보이는 변수는 함수 범위 밖에서 변수들을 참조할 수 있다.

```js
var x = 0; // x는 전역으로 선언되었고, 0으로 할당됩니다.

console.log(typeof z); // undefined, z는 아직 존재하지 않습니다.

function a() {
  // a 함수를 호출했을 때,
  var y = 2; // y는 함수 a에서 지역변수로 선언되었으며, 2로 할당됩니다.

  console.log(x, y); // 0 2

  function b() {
    // b 함수를 호출하였을때,
    x = 3; // 존재하는 전역 x값에 3을 할당, 새로운 전역 var 변수를 만들지 않습니다.
    y = 4; // 존재하는 외부 y값에 4를 할당, 새로운 전역 var 변수를 만들지 않습니다.
    z = 5; // 새로운 전역 z 변수를 생성하고 5를 할당 합니다.
  } // (strict mode에서는 ReferenceError를 출력합니다.)

  b(); // 호출되는 b는 전역 변수로 z를 생성합니다.
  console.log(x, y, z); // 3 4 5
}

a(); // 호출되는 a는 또한 b를 호출합니다.
console.log(x, z); // 3 5
console.log(typeof y); // undefined y는 function a에서 지역 변수입니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
