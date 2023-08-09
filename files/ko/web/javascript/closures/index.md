---
title: 클로저
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 60d5d8f18ee6bc48949c228bf236529f89a8cca7
---

{{jsSidebar("Intermediate")}}

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## 어휘적 범위 지정(Lexical scoping)

다음을 보자:

```js
function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() {
    // displayName() 은 내부 함수이며, 클로저다.
    alert(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();
```

`init()` creates a local variable called `name` and a function called `displayName()`. The `displayName()` function is an inner function that is defined inside `init()` and is available only within the body of the `init()` function. Note that the `displayName()` function has no local variables of its own. However, since inner functions have access to the variables of outer functions, `displayName()` can access the variable `name` declared in the parent function, `init()`.

Run the code using [this JSFiddle link](https://jsfiddle.net/3dxck52m/) and notice that the `console.log()` statement within the `displayName()` function successfully displays the value of the `name` variable, which is declared in its parent function. This is an example of _lexical scoping_, which describes how a parser resolves variable names when functions are nested. The word _lexical_ refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

In this particular example, the scope is called a _function scope_, because the variable is accessible and only accessible within the function body where it's declared.

### `let`과 `const`를 사용한 범위 지정

Traditionally (before ES6), JavaScript only had two kinds of scopes: _function scope_ and _global scope_. Variables declared with `var` are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

C나 Java와 같이 블록이 스코프를 생성하는 언어의 경우, 위 코드의 `console.log` 라인에서 `x`가 어떤 블록 스코프에도 포함되지 않기 때문에 에러가 발생해야 할 것이다. 그러나 블록은 `var`로 선언한 변수에 대해 스코프를 생성하지 않기 때문에 여기서 `var` 명령문은 전역 변수를 생성한다. 이것을 클로저와 함께 사용했을 때 어떤 버그가 발생할 수 있는지 [실제 예제](#루프에서_클로저_생성하기_일반적인_실수)가 아래 소개되어 있다.

ES6에서 JavaScript는 블록 스코프 변수를 생성할 수 있도록 `let`과 `const` 선언과 함께 [시간상 사각지대](/ko/docs/Web/JavaScript/Reference/Statements/let#시간상_사각지대) 등을 도입했다.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

요약하자면, ES6부터 블록은 스코프로 취급되기 시작했지만, 이는 `let`과 `const`로 변수를 선언했을 때만 유효하다. 또한, ES6에서 [모듈](/ko/docs/Web/JavaScript/Guide/Modules)을 도입하면서 또 다른 스코프를 제공하게 되었다. 추후 소개하겠지만, 클로저는 이 모든 스코프의 변수를 캡처할 수 있다.

## 클로저(Closure)

이제 다음 예제를 보자:

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

이 코드는 바로 전의 예제와 완전히 동일한 결과가 실행된다. 하지만 흥미로운 차이는 `displayName()`함수가 실행되기 전에 외부함수인 `makeFunc()`로부터 리턴되어 `myFunc` 변수에 저장된다는 것이다.

한 눈에 봐서는 이 코드가 여전히 작동하는 것이 직관적으로 보이지 않을 수 있다. 몇몇 프로그래밍 언어에서, 함수 안의 지역 변수들은 그 함수가 처리되는 동안에만 존재한다. `makeFunc()` 실행이 끝나면(`displayName`함수가 리턴되고 나면) `name` 변수에 더 이상 접근할 수 없게 될 것으로 예상하는 것이 일반적이다.

하지만 위의 예시와 자바스크립트의 경우는 다르다. 그 이유는 자바스크립트는 함수를 리턴하고, 리턴하는 함수가 클로저를 형성하기 때문이다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다. 첫 번째 예시의 경우, `myFunc`은 `makeFunc`이 실행
될 때 생성된 `displayName` 함수의 인스턴스에 대한 참조다. `displayName`의 인스턴스는 변수 `name` 이 있는 어휘적 환경에 대한 참조를 유지한다. 이런 이유로 `myFunc`가 호출될 때 변수 `name`은 사용할 수 있는 상태로 남게 되고 "Mozilla" 가 `alert` 에 전달된다.

다음은 조금 더 흥미로운 예제인 makeAdder 함수이다:

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

이 예제에서 단일 인자 `x`를 받아서 새 함수를 반환하는 함수 `makeAdder(x)`를 정의했다. 반환되는 함수는 단일인자 z를 받아서 x와 y와 z의 합을 반환한다.

본질적으로 `makeAdder`는 함수를 만들어내는 공장이다. 이는 `makeAdder`함수가 특정한 값을 인자로 가질 수 있는 함수들을 리턴한다는 것을 의미한다. 위의 예제에서 `add5, add10` 두 개의 새로운 함수들을 만들기 위해 `makeAdder`함수 공장을 사용했다. 하나는 매개변수 x에 5를 더하고 다른 하나는 매개변수 x에 10을 더한다.

`add5`와 `add10`은 둘 다 클로저이다. 이들은 같은 함수 본문 정의를 공유하지만 서로 다른 맥락(어휘)적 환경을 저장한다. 함수 실행 시 `add5`의 맥락적 환경에서 클로저 내부의 x는 5 이지만 `add10`의 맥락적 환경에서 x는 10이다. 또한 리턴되는 함수에서 초기값이 1로 할당된 y에 접근하여 y값을 100으로 변경한 것을 볼 수 있다. (물론 x값도 동일하게 변경 가능하다.) 이는 클로저가 리턴된 후에도 외부함수의 변수들에 접근 가능하다는 것을 보여주는 포인트이며 클로저에 단순히 값 형태로 전달되는것이 아니라는 것을 의미한다.

## 실용적인 클로저

클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용하다. 이것은 객체가 어떤 데이터와(그 객체의 속성) 하나 혹은 그 이상의 메소드들을 연관시킨다는 점에서 객체지향 프로그래밍과 분명히 같은 맥락에 있다.

결론적으로 오직 하나의 메소드를 가지고 있는 객체를 일반적으로 사용하는 모든 곳에 클로저를 사용할 수 있다.

이렇게 할 수 있는 상황은 특히 웹에서 일반적이다. 프론트 엔드 자바스크립트에서 우리가 쓰는 많은 코드가 이벤트 기반이다. 우리는 몇 가지 동작을 정의한 다음 사용자에 의한 이벤트에(클릭 혹은 키 누르기 같은) 연결한다. 우리의 코드는 일반적으로 콜백으로 첨부된다: 이벤트에 응답하여 실행되는 단일 함수다.

예를 들면 페이지의 글자 크기를 조정하는 몇 개의 버튼을 추가한다고 가정하자. 이 작업을 수행하는 한 가지 방법은 `body` 요소의 font-size를 픽셀 단위로 지정하고 상대적인 `em` 단위를 사용하여 페이지의 다른 요소들의 (예: 헤더) 크기를 설정하는 것이다.

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

우리의 대화식 글자 크기 버튼들은 `body` 요소의 `font-size` 속성을 변경할 수 있고 이런 조정은 상대적 단위들 덕분에 페이지의 다른 요소에 의해 선택된다.

여기 자바스크립트 코드가 있다.

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

`size12`, `size14`, `size16`은 body 요소의 글자 크기를 각각 12, 14, 16 픽셀로 바꾸는 함수이다. 이 함수들을 아래처럼 버튼들에(이 경우에는 링크) 연결할 수 있다.

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
```

Run the code using [JSFiddle](https://jsfiddle.net/hotae160/).

## 클로저를 이용해서 프라이빗 메소드 (private method) 흉내내기

자바와 같은 몇몇 언어들은 메소드를 프라이빗으로 선언할 수 있는 기능을 제공한다. 이는 같은 클래스 내부의 다른 메소드에서만 그 메소드들을 호출할 수 있다는 의미이다.

자바스크립트는 태생적으로는 이런 방법을 제공하지 않지만 클로저를 이용하여 프라이빗 메소드를 흉내내는 것이 가능하다. 프라이빗 메소드는 코드에 제한적인 접근만을 허용한다는 점 뿐만 아니라 전역 네임 스페이스를 관리하는 강력한 방법을 제공하여 불필요한 메소드가 공용 인터페이스를 혼란스럽게 만들지 않도록 한다.

아래 코드는 프라이빗 함수와 변수에 접근하는 퍼블릭 함수를 정의하기 위해 클로저를 사용하는 방법을 보여준다. 이렇게 클로저를 사용하는 것을 [모듈 패턴](https://www.google.com/search?q=javascript+module+pattern)이라 한다.

```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

이전 예제에서 각 클로저들이 고유한 문법적 환경을 가졌지만 여기서 우리는 `counter.increment`, `counter.decrement`, `counter.value` 세 함수에 의해 공유되는 하나의 어휘적 환경을 만든다.

The shared lexical environment is created in the body of an anonymous function, _which is executed as soon as it has been defined_ (also known as an [IIFE](/en-US/docs/Glossary/IIFE)). 이 어휘적 환경은 두 개의 프라이빗 아이템을 포함한다. 하나는 `privateCounter`라는 변수이고 나머지 하나는 `changeBy`라는 함수이다. 둘 다 익명 함수 외부에서 접근될 수 없다. 대신에 익명 래퍼에서 반환된 세 개의 퍼블릭 함수를 통해서만 접근되어야만 한다.

위의 세 가지 퍼블릭 함수는 같은 환경을 공유하는 클로저다. 자바스크립트의 어휘적 유효 범위 덕분에 세 함수 각각 `privateCounter` 변수와 `changeBy` 함수에 접근할 수 있다.

```js
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
```

두 개의 카운터가 어떻게 다른 카운터와 독립성을 유지하는지 주목해보자. 각 클로저는 그들 고유의 클로저를 통한 `privateCounter` 변수의 다른 버전을 참조한다. 각 카운터가 호출될 때마다; 하나의 클로저에서 변수 값을 변경해도 다른 클로저의 값에는 영향을 주지 않는다.

> **참고:** 이런 방식으로 클로저를 사용하여 객체지향 프로그래밍의 정보 은닉과 캡슐화 같은 이점들을 얻을 수 있다.

## 클로저 스코프 체인

모든 클로저에는 세가지 스코프(범위)가 있다:

- 지역 범위 (Own scope)
- Enclosing scope (can be block, function, or module scope)
- 전역 범위 (Global Scope)

A common mistake is not realizing that in the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. To demonstrate, consider the following example code.

```js
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

You can also write without anonymous functions:

```js
// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

In the example above, there's a series of nested functions, all of which have access to the outer functions' scope. In this context, we can say that closures have access to _all_ outer function scopes.

Closures can capture variables in block scopes and module scopes as well. For example, the following creates a closure over the block-scoped variable `y`:

```js
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();
```

Closures over modules can be more interesting.

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

Here, the module exports a pair of getter-setter functions, which close over the module-scoped variable `x`. Even when `x` is not directly accessible from other modules, it can be read and written with the functions.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures can close over imported values as well, which are regarded as _live {{glossary("binding", "bindings")}}_, because when the original value changes, the imported one changes accordingly.

```js
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

```js
// closureCreator.js
import { x } from "./myModule.js";

export const getX = () => x; // Close over an imported live binding
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## 루프에서 클로저 생성하기: 일반적인 실수

ECMAScript 2015의 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 키워드 소개 전에는 클로저와 관련된 일반적인 문제는 루프 안에서 클로저가 생성되었을 때 발생한다.다음 예제를 보자.

```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // Culprit is the use of `var` on this line
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Try running the code in [JSFiddle](https://jsfiddle.net/v7gjv/8164/).

`helpText` 배열은 세 개의 도움말 힌트를 정의한다. 각 도움말은 문서의 입력 필드의 ID와 연관된다. 루프를 돌면서 각 입력 필드 ID에 해당하는 엘리먼트의 `onfocus` 이벤트에 관련된 도움말을 보여주는 메소드에 연결한다.

이 코드를 사용하면 제대로 동작하지 않는 것을 알게 된다. 어떤 필드에 포커스를 주더라도 나이에 관한 도움말이 표시된다.

`onfocus` 이벤트에 연결된 함수가 클로저이기 때문이다. 이 클로저는 함수 정의와 `setupHelp` 함수 범위에서 캡처된 환경으로 구성된다. 루프에서 세 개의 클로저가 만들어졌지만 각 클로저는 값이 변하는 변수가 (`item.help`) 있는 같은 단일 환경을 공유한다. `onfocus` 콜백이 실행될 때 콜백의 환경에서 `item` 변수는 (세개의 클로저가 공유한다) `helpText` 리스트의 마지막 요소를 가리키고 있을 것이다.

이 경우 한 가지 해결책은 더 많은 클로저를 사용하는 것이다: 특히 앞에서 설명한 함수 팩토리를 사용하는 것이다.

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

Run the code using [this JSFiddle link](https://jsfiddle.net/v7gjv/9573/).

이것은 예상대로 동작한다. 모두 단일 환경을 공유하는 콜백대신, `makeHelpCallback` 함수는 각각의 콜백에 새로운 어휘적 환경을 생성한다. 여기서 `help`는 `helpText` 배열의 해당 문자열을 나타낸다.

익명 클로저를 사용하여 위 코드를 작성하는 또 다른 방법은 다음과 같다.

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

더 많은 클로저를 사용하는 것이 싫다면 ES2015의 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 키워드를 사용할 수 있다.

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

위의 경우 `var` 대신 `const`을 사용하여 모든 클로저가 블록 범위 변수를 바인딩할 것이므로 추가적인 클로저를 사용하지 않아도 완벽하게 동작할 것이다.

Another alternative could be to use `forEach()` to iterate over the `helpText` array and attach a listener to each [`<input>`](/ko/docs/Web/HTML/Element/input), as shown:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## 성능 관련 고려 사항

특정 작업에 클로저가 필요하지 않는데 다른 함수 내에서 함수를 불필요하게 작성하는 것은 현명하지 않다. 이것은 처리 속도와 메모리 소비 측면에서 스크립트 성능에 부정적인 영향을 미칠 것이다.

예를 들어, 새로운 객체/클래스를 생성 할 때, 메소드는 일반적으로 객체 생성자에 정의되기보다는 객체의 프로토타입에 연결되어야 한다. 그 이유는 생성자가 호출 될 때 마다 메서드가 다시 할당되기 때문이다 (즉, 모든 개체가 생성 될 때마다).

비실용적이지만 시범적인 다음 예를 고려하라:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

앞의 코드는 클로저의 이점을 이용하지 않음으로 다음과 같이 다시 쓸 수 있다.

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function () {
    return this.name;
  },
  getMessage: function () {
    return this.message;
  },
};
```

그러나 프로토타입을 다시 정의하는 것은 권장되지 않음으로 기존 프로토타입에 추가하는 다음 예제가 더 좋다.

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

앞의 두 가지 예제에서, 상속된 프로토타입은 모든 객체에서 공유될 수 있으며 메소드 정의는 모든 객체 생성시 발생할 필요가 없다. [상속과 프로토타입](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을
참고하라.
