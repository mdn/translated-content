---
title: 클로저
slug: Web/JavaScript/Closures
---

{{jsSidebar("Intermediate")}}

**클로저**는 함수와 함수가 선언된 어휘적 환경의 조합이다. 클로저를 이해하려면 자바스크립트가 어떻게 변수의 유효범위를 지정하는지(Lexical scoping)를 먼저 이해해야 한다.

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

`init()`은 지역 변수 `name`과 함수 `displayName()`을 생성한다. `displayName()`은
`init()` 안에 정의된 내부 함수이며 `init()` 함수 본문에서만 사용할 수 있다. 여기서 주의할 점은 `displayName()` 내부엔 자신만의 지역 변수가 없다는 점이다. 그런데 함수 내부에서 외부 함수의 변수에 접근할 수 있기 때문에 `displayName()` 역시 부모 함수 `init()`에서 선언된 변수 `name`에 접근할 수 있다. 만약 `displayName()`가 자신만의 `name`변수를 가지고 있었다면, `name`대신 `this.name`을 사용했을 것이다.

{{JSFiddleEmbed("https://jsfiddle.net/78dg25ax/", "js,result", 250)}}

위 코드를 [실행](http://jsfiddle.net/xAFs9/3/)하면 `displayName()` 함수 내의
`alert()`문이 부모 함수에서 정의한 변수 `name`의 값을 성공적으로 출력한다. 이 예시를 통해 함수가 중첩된 상황에서 파서가 어떻게 변수를 처리하는지 알 수 있다. 이는 어휘적 범위 지정(lexical scoping)의 한 예이다. 여기서 "lexical"이란, 어휘적 범위 지정(lexical scoping) 과정에서 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것을 의미한다. 단어 "lexical"은 이런 사실을 나타낸다. 중첩된 함수는 외부 범위(scope)에서 선언한 변수에도 접근할 수 있다.

### `let`과 `const`를 사용한 범위 지정

ES6 이전 전통적인 JavaScript에는 함수 스코프와 전역 스코프 두 가지만 존재했다. `var`로 선언한 변수는 함수 내부 또는 외부에서 선언되었는지에 따라 함수 스코프 또는 전역 스코프를 가진다. 이때, 중괄호로 표시된 블록이 스코프를 생성하지 않는다는 점에서 혼란을 일으킬 수 있다.

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
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
//myFunc변수에 displayName을 리턴함
//유효범위의 어휘적 환경을 유지
myFunc();
//리턴된 displayName 함수를 실행(name 변수에 접근)
```

이 코드는 바로 전의 예제와 완전히 동일한 결과가 실행된다. 하지만 흥미로운 차이는 `displayName()`함수가 실행되기 전에 외부함수인 `makeFunc()`로부터 리턴되어 `myFunc` 변수에 저장된다는 것이다.

한 눈에 봐서는 이 코드가 여전히 작동하는 것이 직관적으로 보이지 않을 수 있다. 몇몇 프로그래밍 언어에서, 함수 안의 지역 변수들은 그 함수가 처리되는 동안에만 존재한다. `makeFunc()` 실행이 끝나면(`displayName`함수가 리턴되고 나면) `name` 변수에 더 이상 접근할 수 없게 될 것으로 예상하는 것이 일반적이다.

하지만 위의 예시와 자바스크립트의 경우는 다르다. 그 이유는 자바스크립트는 함수를 리턴하고, 리턴하는 함수가 클로저를 형성하기 때문이다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다. 첫 번째 예시의 경우, `myFunc`은 `makeFunc`이 실행
될 때 생성된 `displayName` 함수의 인스턴스에 대한 참조다. `displayName`의 인스턴스는 변수 `name` 이 있는 어휘적 환경에 대한 참조를 유지한다. 이런 이유로 `myFunc`가 호출될 때 변수 `name`은 사용할 수 있는 상태로 남게 되고 "Mozilla" 가 `alert` 에 전달된다.

다음은 조금 더 흥미로운 예제인 makeAdder 함수이다:

```js
function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
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
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`, `size14`, `size16`은 body 요소의 글자 크기를 각각 12, 14, 16 픽셀로 바꾸는 함수이다. 이 함수들을 아래처럼 버튼들에(이 경우에는 링크) 연결할 수 있다.

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

{{JSFiddleEmbed("https://jsfiddle.net/vnkuZ/","","200")}}

다음 링크로 실행해보자. [JSFiddle](https://jsfiddle.net/vnkuZ/7726/)

## 클로저를 이용해서 프라이빗 메소드 (private method) 흉내내기

자바와 같은 몇몇 언어들은 메소드를 프라이빗으로 선언할 수 있는 기능을 제공한다. 이는 같은 클래스 내부의 다른 메소드에서만 그 메소드들을 호출할 수 있다는 의미이다.

자바스크립트는 태생적으로는 이런 방법을 제공하지 않지만 클로저를 이용하여 프라이빗 메소드를 흉내내는 것이 가능하다. 프라이빗 메소드는 코드에 제한적인 접근만을 허용한다는 점 뿐만 아니라 전역 네임 스페이스를 관리하는 강력한 방법을 제공하여 불필요한 메소드가 공용 인터페이스를 혼란스럽게 만들지 않도록 한다.

아래 코드는 프라이빗 함수와 변수에 접근하는 퍼블릭 함수를 정의하기 위해 클로저를 사용하는 방법을 보여준다. 이렇게 클로저를 사용하는 것을 [모듈 패턴](https://www.google.com/search?q=javascript+module+pattern)이라 한다.

```js
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

이전 예제에서 각 클로저들이 고유한 문법적 환경을 가졌지만 여기서 우리는 `counter.increment`, `counter.decrement`, `counter.value` 세 함수에 의해 공유되는 하나의 어휘적 환경을 만든다.

공유되는 어휘적 환경은 실행되는 익명 함수 안에서 만들어진다. 이 익명 함수는 정의되는 즉시 실행된다. 이 어휘적 환경은 두 개의 프라이빗 아이템을 포함한다. 하나는 `privateCounter`라는 변수이고 나머지 하나는 `changeBy`라는 함수이다. 둘 다 익명 함수 외부에서 접근될 수 없다. 대신에 익명 래퍼에서 반환된 세 개의 퍼블릭 함수를 통해서만 접근되어야만 한다.

위의 세 가지 퍼블릭 함수는 같은 환경을 공유하는 클로저다. 자바스크립트의 어휘적 유효 범위 덕분에 세 함수 각각 `privateCounter` 변수와 `changeBy` 함수에 접근할 수 있다.

카운터를 생성하는 익명 함수를 정의하고 그 함수를 즉시 호출하고 결과를 `counter` 변수에 할당하는 것을 알아차렸을 것이다. 이 함수를 별도의 변수 `makeCounter` 저장하고 이 변수를 이용해 여러 개의 카운터를 만들 수 있다.

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* 2 */
counter1.decrement();
alert(counter1.value()); /* 1 */
alert(counter2.value()); /* 0 */
```

두 개의 카운터가 어떻게 다른 카운터와 독립성을 유지하는지 주목해보자. 각 클로저는 그들 고유의 클로저를 통한 `privateCounter` 변수의 다른 버전을 참조한다. 각 카운터가 호출될 때마다; 하나의 클로저에서 변수 값을 변경해도 다른 클로저의 값에는 영향을 주지 않는다.

> **참고:** 이런 방식으로 클로저를 사용하여 객체지향 프로그래밍의 정보 은닉과 캡슐화 같은 이점들을 얻을 수 있다.

## 클로저 스코프 체인

모든 클로저에는 세가지 스코프(범위)가 있다:

- 지역 범위 (Local Scope, Own scope)
- 외부 함수 범위 (Outer Functions Scope)
- 전역 범위 (Global Scope)

따라서, 우리는 클로저에 대해 세가지 범위 모두 접근할 수 있지만, 중첩된 내부 함수가 있는 경우 종종 실수를 저지른다. 아래 예제를 확인해보자:

```js
// 전역 범위 (global scope)
var e = 10;
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

console.log(sum(1)(2)(3)(4)); // log 20

// 익명 함수 없이 작성할 수도 있다.

// 전역 범위 (global scope)
var e = 10;
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

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3); //log 20
```

위의 예제를 보면 일련의 중첩된 함수들을 확인할 수 있다. 이 함수들은 전부 외부 함수의 스코프에 접근할 수 있다. 그런데 문제는 즉각적인 외부 함수의 스코프만을 추측 한다는 것이다. 이 문맥에서는 모든 클로저가 선언된 외부 함수의 스코프에 접근한다라고 말할 수 있다.

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
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/", "", 200)}}

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

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/1/", "", 300)}}

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
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

위의 경우 `var` 대신 `let`을 사용하여 모든 클로저가 블록 범위 변수를 바인딩할 것이므로 추가적인 클로저를 사용하지 않아도 완벽하게 동작할 것이다.

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

위의 코드는 같은 결과를 가진 더 깨끗한 방법으로 작성할 수도 있다:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
(function () {
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}).call(MyObject.prototype);
```

앞의 두 가지 예제에서 상속된 프로토타입은 모든 객체에서 공유될 수 있으며 메소드 정의는 모든 객체 생성시 발생할 필요가 없다. [객체 모델의 세부 사항](/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)을
참고하라.
