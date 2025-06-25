---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)** 은 정의되자마자 즉시 실행되는 {{glossary("Javascript")}} {{glossary("Function")}} 를 말한다. IIFE라는 이름은 Ben Alman이 [블로그](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)에서 처음으로 시작되었습니다.

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

이는 {{glossary("Self-Executing Anonymous Function")}} 으로 알려진 디자인 패턴이고 크게 두 부분으로 구성됩니다.

1. {{jsxref("Operators/Grouping", "Grouping Operator")}} `()` 안에 어휘 범위로 둘러싸인 익명함수입니다. 이는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법입니다.

2. 두 번째 부분은 즉시 실행 함수를 생성하는 괄호`()`입니다. 이를 통해 JavaScript 엔진은 함수를 즉시 해석해서 실행합니다.

## 사용 예시

### 전역 이름공간을 오염시키는 것을 방지

애플리케이션은 다양한 소스 파일의 많은 함수와 전역 변수를 포함할 수 있기 때문에, 전역 변수의 수를 제한하는 것이 중요합니다. 필요 없는 초기화 코드가 있는 경우, IIFE 패턴을 사용할 수 있습니다. 코드를 다시 재사용하지 않을 것이기 때문에 이 경우 IIFE를 사용하는 것이 함수 선언 또는 함수 표현식을 사용하는 것보다 더 좋습니다.

```js
(() => {
  // 초기화 코드
  let firstVariable;
  let secondVariable;
})();

// firstVariable와 secondVariable은 이 함수 실행 후에 사용할 수 없습니다.
```

### 비동기 함수 실행

[`async`](/ko/docs/Web/JavaScript/Reference/Operators/async_function) IIFE를 사용하면 [top-level await](/ko/docs/Web/JavaScript/Reference/Operators/await#top_level_await)이 없는 이전 브라우저 및 JavaScript 런타임에서도 [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await) 및 [`for-await`](/ko/docs/Web/JavaScript/Reference/Statements/for-await...of)을 사용할 수 있습니다.

```js
const getFileStream = async (url) => {
  // 구현
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### 모듈 패턴

우리는 또한 IIFE를 사용하여 비공개 및 공개 변수와 메서드를 생성할 수 있습니다. 더 정교한 모듈 사용을 위해, 패턴 및 IIFE의 다른 사용에 대해서는 Addy Osmani의 Learning JavaScript Design Patterns라는 책을 볼 수 있습니다.

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### ES6 이전의 var가 있는 For 루프

**ES6** 및 블록 범위에서 **let** and **const**문이 도입되기 전에 과거 코드에서 다음과 같은 IIFE 사용을 볼 수 있습니다. **var**문을 사용하면 함수 범위와 전역 범위만 가지게 됩니다. 버튼 0, 버튼 1이라는 텍스트가 있는 2개의 버튼을 만들고 싶은 예제를 생각해보면, 다음 코드는 작동하지 않습니다.

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

클릭하면 `i`가 전역 변수이고, 마지막 값이 2이므로 2로 로그를 보여주게 됩니다. ES6 이전에 이 문제를 해결하려면 IIFE 패턴을 사용할 수 있습니다.

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

클릭하면, button 0과 1이 0과 1이라고 출력합니다. 변수 i는 전역적으로 정의됩니다. **let**문을 사용하면 간단하게 다음과 같이 할 수 있습니다.

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

클릭하면, button 0과 1이 0과 1이라고 출력합니다.

## 같이 보기

- 위키피디아의 [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [Glossary](/ko/docs/Glossary)
  - {{Glossary("Function")}}
  - {{Glossary("Self-Executing Anonymous Function")}}
