---
title: 클로저
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 60d5d8f18ee6bc48949c228bf236529f89a8cca7
---

{{jsSidebar("Intermediate")}}

**클로저**는 주변 상태(어휘적 환경)에 대한 참조와 함께 묶인(포함된) 함수의 조합입니다. 즉, 클로저는 내부 함수에서 외부 함수의 범위에 대한 접근을 제공합니다. JavaScript에서 클로저는 함수 생성 시 함수가 생성될 때마다 생성됩니다.

## 어휘적 범위 지정(Lexical scoping)

다음을 고려해 봅시다.

```js
function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() {
    // displayName() 은 내부 함수이며, 클로저다.
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();
```

`init()`은 지역 변수 `name`과 함수 `displayName()`을 생성합니다. `displayName()`은
`init()` 안에 정의된 내부 함수이며 `init()` 함수 본문에서만 사용할 수 있습니다. 여기서 주의할 점은 `displayName()` 내부엔 자신만의 지역 변수가 없다는 점입니다. 그러나, 내부 함수에서 외부 함수의 변수에 접근할 수 있기 때문에, `displayName()` 역시 부모 함수 `init()`에서 선언된 변수 `name`에 접근할 수 있습니다.

[이 JSFiddle 링크](https://jsfiddle.net/3dxck52m/)를 사용하여 코드를 실행하고 `displayName()` 함수 내의 `console.log()` 문이 성공적으로 부모 함수 내에서 선언된 `name` 값을 표시하는지 확인합니다.

이것은 함수가 중첩될 때 구문 분석기가 변수 이름을 확인하는 방법을 설명하는 '정적 스코프'의 예시입니다. 여기서 '정적'이란, 정적 범위 지정 과정에서 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것을 의미하는데, 단어 '정적'은 이런 사실을 나타냅니다. 중첩된 함수는 외부 범위에서 선언한 변수에도 접근할 수 있습니다.

이 특정 예시에서, 범위는 "함수 범위"라고 하는데, 그 이유는 변수에 접근할 수 있고 변수가 선언된 함수 본문 내에서만 접근할 수 있기 때문입니다.

### `let`과 `const`를 사용한 범위 지정

(ES6 이전) 전통적인 JavaScript에는 함수 스코프와 전역 스코프 두 가지만 존재했습니다. `var`로 선언한 변수는 함수 내부 또는 외부에서 선언되었는지에 따라 함수 스코프 또는 전역 스코프를 가지게 됩니다. 이때, 중괄호로 표시된 블록이 스코프를 생성하지 않는다는 점에서 혼란을 일으킬 수 있습니다.

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

C나 Java와 같이 블록이 스코프를 생성하는 언어의 경우, 위 코드의 `console.log` 라인에서 `x`가 어떤 블록 스코프에도 포함되지 않기 때문에 에러가 발생해야 할 것입니다. 그러나, 블록은 `var`로 선언한 변수에 대해 스코프를 생성하지 않기 때문에, 여기서 `var` 명령문은 전역 변수를 생성합니다. 이것을 클로저와 함께 사용했을 때 어떤 버그가 발생할 수 있는지 [실제 예제](#루프에서_클로저_생성하기_일반적인_실수)가 아래 소개되어 있습니다.

ES6에서, JavaScript는 블록 스코프 변수를 생성할 수 있도록 `let`과 `const` 선언과 함께 [일시적 사각지대](/ko/docs/Web/JavaScript/Reference/Statements/let#일시적_사각지대) 등을 도입했습니다.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // 참조 에러: x가 정의되어 있지 않습니다.
```

요약하자면, ES6부터 블록은 스코프로 취급되기 시작했지만, 이는 `let`과 `const`로 변수를 선언했을 때만 유효합니다. 또한, ES6에서 [모듈](/ko/docs/Web/JavaScript/Guide/Modules)을 도입하면서 또 다른 스코프를 제공하게 되었습니다. 추후 소개하겠지만, 클로저는 이 모든 스코프의 변수를 캡처할 수 있습니다.

## 클로저(Closure)

다음 예제를 보겠습니다.

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

이 코드는 전 예제의 `init()` 함수와 완전히 동일한 결과가 실행됩니다. 다른 점(그리고 흥미로운 점)은 `displayName()` 내부 함수가 실행되기 전에 외부 함수에서 반환된다는 점입니다.

한눈에 봐서는, 이 코드가 여전히 작동하는 것이 직관적으로 보이지 않을 수 있습니다. 몇몇 프로그래밍 언어에서, 함수 안의 지역 변수들은 그 함수가 처리되는 동안에만 존재합니다. `makeFunc()` 실행이 끝나면, `name` 변수에 더 이상 접근할 수 없게 될 것으로 예상하는 것이 일반적이지만, 코드는 여전히 예상대로 작동하기 때문에 JavaScript에서는 분명히 다릅니다.

그 이유는 JavaScript의 함수가 클로저를 형성하기 때문입니다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합입니다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성됩니다. 예시의 경우, `myFunc`은 `makeFunc`이 실행
될 때 생성된 `displayName` 함수의 인스턴스에 대한 참조입니다. `displayName`의 인스턴스는 변수 `name` 이 있는 어휘적 환경에 대한 참조를 유지합니다. 이런 이유로, `myFunc`가 호출될 때 변수 `name`은 사용할 수 있는 상태로 남게 되고 "Mozilla" 가 `console.log` 에 전달됩니다.

다음은 조금 더 흥미로운 예제인 `makeAdder` 함수입니다.

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

이 예제에서, 단일 인자 `x`를 받아서 새 함수를 반환하는 함수 `makeAdder(x)`를 정의합니다. 반환되는 함수는 단일인자 `y`를 받아서 `x`와 `y`의 합을 반환합니다.

본질적으로, `makeAdder`는 함수를 만들어내는 팩토리입니다. 이는 `makeAdder`함수가 특정한 값을 인자로 가질 수 있는 함수들을 리턴한다는 것을 의미합니다. 위의 예제에서, 함수 팩토리는 인자에 5와 10을 더하는 두 개의 새로운 함수들을 만들어 냅니다.

`add5`와 `add10`은 둘 다 클로저입니다. 이들은 같은 함수 본문 정의를 공유하지만 서로 다른 맥락(어휘)적 환경을 저장합니다. 함수 실행 시 `add5`의 어휘적 환경에서, 클로저 내부의 x는 5 이지만, `add10`의 맥락적 환경에서 x는 10입니다.

## 실용적인 클로저

클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용합니다. 이것은 객체가 어떤 데이터와(그 객체의 속성) 하나 혹은 그 이상의 메소드들을 연관시킨다는 점에서 객체지향 프로그래밍과 분명히 같은 맥락에 있습니다.

결론적으로, 오직 하나의 메소드를 가지고 있는 객체를 일반적으로 사용하는 모든 곳에 클로저를 사용할 수 있습니다.

이렇게 할 수 있는 상황은 특히 웹에서 일반적입니다. 프론트엔드 JavaScript에서 우리가 쓰는 많은 코드가 이벤트 기반입니다. 우리는 몇 가지 동작을 정의한 다음 사용자에 의한 이벤트(클릭 혹은 키 누르기 같은)에 연결합니다. 이 코드는 일반적으로 콜백(이벤트에 응답하여 실행되는 단일 함수)으로 추가됩니다.

예를 들면, 페이지의 글자 크기를 조정하는 몇 개의 버튼을 추가한다고 가정합시다. 이 작업을 수행하는 한 가지 방법은 `body` 요소의 font-size를 픽셀 단위로 지정하고 상대적인 `em` 단위를 사용하여 페이지의 다른 요소(예: 헤더)의 크기를 설정하는 것입니다.

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

우리의 대화식 글자 크기 버튼들은 `body` 요소의 `font-size` 속성을 변경할 수 있고, 이런 조정은 상대적 단위들 덕분에 페이지의 다른 요소에 의해 선택됩니다.

여기 JavaScript 코드가 있습니다.

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

`size12`, `size14`, `size16`은 body 요소의 글자 크기를 각각 12, 14, 16 픽셀로 바꾸는 함수입니다. 이 함수들을 다음과 같이 버튼들에(이 경우에는 하이퍼링크) 연결할 수 있습니다.

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

[JSFiddle](https://jsfiddle.net/hotae160/)을 실행해보세요.

## 클로저를 이용해서 비공개 메서드 (private method) 흉내내기

자바와 같은 몇몇 언어들은 메서드를 비공개로 선언할 수 있는 기능을 제공합니다. 이는 같은 클래스 내부의 다른 메서드에서만 그 메서드들을 호출할 수 있다는 의미입니다.

[classes](/ko/docs/Web/JavaScript/Reference/Classes) 이전의 JavaScript에는 [비공개 메서드](/ko/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods)를 선언하는 기본 방법이 없었지만, 클로저를 사용하여 비공개 메서드를 흉내낼 수 있다는 것이 가능했습니다. 비공개 메서드는 코드에 대한 접근을 제한하는 데만 유용한 것이 아닙니다. 또한 전역 이름 공간을 관리하는 강력한 방법을 제공합니다.

아래 코드는 비공개 함수와 변수에 접근하는 퍼블릭 함수를 정의하기 위해 클로저를 사용하는 방법을 보여줍니다. 이렇게 클로저를 사용하는 것을 [모듈 디자인 패턴](https://www.google.com/search?q=javascript+module+pattern)을 따른다고 합니다.

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

이전 예제에서, 각 클로저들이 고유한 어휘적 환경을 가졌지만, 여기서 우리는 `counter.increment`, `counter.decrement`, `counter.value` 세 함수에 의해 공유되는 하나의 어휘적 환경을 만들어 줍니다.

공유되는 어휘적 환경은 실행되는 익명 함수 안에서 만들어집니다. 이 익명 함수는 정의되는 즉시 실행됩니다([IIFE](/ko/docs/Glossary/IIFE)로 알려져 있습니다). 이 어휘적 환경은 두 개의 비공개 항목을 포함합니다. 하나는 `privateCounter`라는 변수이고, 나머지 하나는 `changeBy`라는 함수입니다. 둘 다 익명 함수 외부에서 접근될 수 없는 비공개 항목입니다. 대신에 익명 래퍼에서 반환된 세 개의 공개 함수를 통해서만 접근할 수 있습니다.

위의 세 가지 공개 함수는 같은 환경을 공유하는 클로저입니다. JavaScript의 어휘적 유효 범위 덕분에, 세 함수 각각 `privateCounter` 변수와 `changeBy` 함수에 접근할 수 있습니다.

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

두 카운터가 서로 독립성을 유지하는 방법에 주목하세요. 각 클로저는 자체 클로저를 통해 `privateCounter` 변수의 다른 버전을 참조합니다. 카운터 중 하나가 호출될 때마다, 이 변수의 값을 변경하여 어휘 환경이 변경됩니다. 하나의 클로저에서 변수 값을 변경해도 다른 클로저의 값에는 영향을 미치지 않습니다.

> [!NOTE]
> 이런 방식으로 클로저를 사용하여 객체지향 프로그래밍의 정보 은닉과 캡슐화 같은 이점들을 얻을 수 있습니다.

## 클로저 스코프 체인

모든 클로저에는 세가지 스코프(범위)가 있습니다:

- 지역 범위 (Local Scope, Own scope)
- 포함하고 있는 범위 (블록, 함수 또는 모듈 범위일 수 있음)
- 전역 범위 (Global Scope)

일반적으로 하는 실수는 외부 함수 자체가 중첩된 함수인 경우, 외부 함수의 범위에 대한 접근에 외부 함수의 둘러싸고 있는 범위가 포함된다는 사실을 깨닫지 못하는 것입니다. 즉, 효과적으로 함수 범위 체인을 생성합니다. 아래 예제를 확인해보세요.

```js
// 전역 범위 (global scope)
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // 외부 함수 범위 (outer functions scope)
      return function (d) {
        // 지역 범위 (local scope)
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

익명 함수 없이 작성할 수도 있습니다.

```js
// 전역 범위 (global scope)
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // 외부 함수 범위 (outer functions scope)
      return function sum4(d) {
        // 지역 범위 (local scope)
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

위의 예제를 보면, 일련의 중첩된 함수들을 확인할 수 있습니다. 이 함수들은 전부 외부 함수의 범위에 접근할 수 있습니다. 이 문맥에서는 클로저가 선언된 "모든" 외부 함수의 스코프에 접근한다고 말할 수 있습니다.

클로저는 블록 범위와 모듈 범위에서도 변수를 캡처할 수 있습니다. 예를 들어, 다음은 블록 범위 변수 `y`에 대한 클로저를 생성합니다.

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

모듈에 대한 클로저는 더욱 흥미롭습니다.

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

여기에서, 모듈은 모듈 범위 변수 `x`를 닫는 한 쌍의 getter-setter 함수를 내보냅니다. `x`는 다른 모듈에서 직접 접근할 수 없는 경우에도, 함수를 사용하여 읽고 쓸 수 있습니다.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

클로저는 원래 값이 변경되면, 가져온 값도 그에 따라 변경되기 때문에 "live {{glossary("binding", "bindings")}}"로 간주되는 가져온 값을 닫을 수 있습니다.

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

export const getX = () => x;
// 가져온 live binding을 닫습니다.
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## 루프에서 클로저 생성하기: 일반적인 실수

[`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 키워드가 도입되기 전에는 클로저와 관련된 일반적인 문제는 루프 안에서 클로저가 생성되었을 때 발생했습니다. 다음 예제를 봅시다.

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
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // 범인은 이 줄에서 `var`를 사용하는 것입니다.
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

[JSFiddle](https://jsfiddle.net/v7gjv/8164/) 코드를 실행해보세요.

`helpText` 배열은 세 개의 도움말 힌트를 정의하며, 각 도움말은 문서의 입력 필드의 ID와 연관됩니다. 반복문을 돌면서 각 입력 필드 ID에 해당하는 엘리먼트의 `onfocus` 이벤트에 관련된 도움말을 보여주는 메소드에 연결합니다.

이 코드를 사용하면 제대로 동작하지 않는 것을 알게 됩니다. 어떤 필드에 포커스를 주더라도 나이에 관한 도움말이 표시됩니다.

그 이유는 `onfocus` 이벤트에 연결된 함수가 클로저이기 때문입니다. 이 클로저는 함수 정의와 `setupHelp` 함수 범위에서 캡처된 환경으로 구성됩니다. 반복문에서 세 개의 클로저가 만들어졌지만, 각 클로저는 값이 변하는 변수가 (`item`) 있는 같은 단일 어휘적 환경을 공유합니다. 이는 변수 `item`이 `var`로 선언되어 호이스팅(hoisting)으로 인해 함수 범위가 있기 때문입니다. `item.help`의 값은 `onfocus` 콜백이 실행될 때 결정됩니다. 반복문은 그 시간까지 이미 그 과정을 실행했기 때문에, `item` 변수 객체(세 개의 클로저 모두에서 공유하는)는 `helpText` 목록의 마지막 항목을 가리키고 있습니다.

이 경우 한 가지 해결책은 더 많은 클로저를 사용하는 방법입니다. 특히 앞에서 설명한 함수 팩토리를 사용하는 것입니다.

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

[이 JSFiddle 링크](https://jsfiddle.net/v7gjv/9573/)를 실행해보세요.

이것은 예상대로 동작합니다. 모두 단일 어휘 환경을 공유하는 콜백 대신에, `makeHelpCallback` 함수는 각각의 콜백에 "새로운 어휘적 환경"을 생성합니다. 여기서, `help`는 `helpText` 배열의 해당 문자열을 나타냅니다.

익명 클로저를 사용하여 위 코드를 작성하는 또 다른 방법은 다음과 같습니다.

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
    })(); // 항목의 현재 값이 포함된 즉각적인 이벤트 리스너 추가(반복될 때까지 보존됩니다).
  }
}

setupHelp();
```

클로저를 더 이상 사용하지 않으려면, [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 또는 [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const) 키워드를 사용할 수 있습니다.

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

위의 경우 `var` 대신 `const`을 사용하여 모든 클로저가 블록 범위 변수를 바인딩할 것이므로 추가적인 클로저가 필요하지 않습니다.

또 다른 대안은 다음과 같이 `forEach()`를 사용하여 `helpText` 배열을 반복하고 각 [`<input>`](/ko/docs/Web/HTML/Element/input)에 리스너를 추가하는 것입니다.

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

앞에서 언급했듯이, 각 함수 인스턴스는 자체 범위와 클로저를 관리합니다. 특정 작업에 클로저가 필요하지 않는데 다른 함수 내에서 함수를 불필요하게 작성하는 것은 처리 속도와 메모리 소비 측면에서 스크립트 성능에 부정적인 영향을 미치기 때문에, 현명하지 않습니다.

예를 들어, 새로운 객체/클래스를 생성할 때, 메소드는 일반적으로 객체 생성자에 정의되기보다는 객체의 프로토타입에 연결되어야 합니다. 그 이유는 생성자가 호출될 때마다 메서드가 다시 할당되기 때문입니다(즉, 모든 객체가 생성될 때마다).

다음 예를 생각해보세요.

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

앞의 코드는 특정 인스턴스에서 클로저의 이점을 활용하지 않음으로 다음과 같이 클로저를 사용하지 않도록 다시 쓸 수 있습니다.

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};
```

그러나, 프로토타입을 다시 정의하는 것은 권장되지 않으므로, 기존 프로토타입에 추가하는 다음 예제가 더 좋습니다.

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

앞의 두 가지 예제에서, 상속된 프로토타입은 모든 객체에서 공유될 수 있으며 메서드 정의는 객체 생성시마다 발생할 필요가 없습니다. 자세한 내용은 [상속 및 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을 참고하세요.
