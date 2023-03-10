---
title: async function 표현식
slug: Web/JavaScript/Reference/Operators/async_function
---
{{jsSidebar("Operators")}}

**`async function`** 키워드는 표현식 내에서 `async` 함수를 정의하기 위해 사용됩니다.

또한 [async function statement](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)을 사용하여 async 함수를 정의할 수 있습니다.

## 문법

```js
    async function [name]([param1[, param2[, ..., paramN]]]) { statements }
```

ES2015에서와 같이 [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 사용해도 됩니다.

### 인수

- `name`
  - : 함수 이름. 생략가능하며 이경우함수는 _anonymous_ 형식임 이름은 함수 몸체에 대해 지역적으로 사용.
- `paramN`
  - : 함수에 전달될 인수의 이름.
- `statements`
  - : 함수 몸체를 구성하는 명령문들.

## 설명

`async function` 표현식은 {{jsxref('Statements/async_function', '<code>async function</code> 선언')}} 문법과 유사하며, 거의 동일합니다. `async function` 표현식과 `async function` 선언문의 주요 차이점은 익명함수로써의 사용 여부로, `async function` 표현식은 함수 이름을 생략하면 익명함수를 만듭니다. `async function` 표현식은 {{Glossary("IIFE")}}(즉시실행함수)로 사용할 수 있습니다. [`functions`](/en-US/docs/Web/JavaScript/Reference/Functions)문서를 참고하세요.

## Examples

### Simple example

```js
    function resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    };


    var add = async function(x) { // async function 표현식을 변수에 할당
      var a = await resolveAfter2Seconds(20);
      var b = await resolveAfter2Seconds(30);
      return x + a + b;
    };

    add(10).then(v => {
      console.log(v);  // 4초 뒤에 60 출력
    });


    (async function(x) { // async function 표현식을 IIFE로 사용
      var p_a = resolveAfter2Seconds(20);
      var p_b = resolveAfter2Seconds(30);
      return x + await p_a + await p_b;
    })(10).then(v => {
      console.log(v);  // 2초 뒤에 60 출력
    });
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
