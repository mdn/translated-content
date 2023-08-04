---
title: 필요한 정보를 저장하기-변수
slug: Learn/JavaScript/First_steps/Variables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

앞선 두 수업을 듣고, 자바스크립트에 대해(웹 기술에서 어떻게 사용되는지, 큰 범위에서의 특징) 알아보았다. 이번 수업에서는 기본중에 기본인 자바스크립트의 주된 구성중 하나인 변수가 어떻게 이루어져 있는지 알아볼 것이다.

<table>
  <tbody>
    <tr>
      <th scope="row">알아야 할 것</th>
      <td>기본적인 컴퓨터 지식, 기본적인 HTML, CSS, JS의 이해</td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>자바스크립트 변수에 대해 익혀보기</td>
    </tr>
  </tbody>
</table>

## 필요한 툴

이번 수업에서 컨텐츠에 대한 이해도를 테스트하고자, 코드를 입력하라는 요청을 받게 될 것이다. 만약 데스크탑 브라우저를 사용한다면, 코드를 실행하기 가장 좋은 프로그램은 브라우저의 자바스크립트 콘솔창일 것이다.(도구의 사용법에 대해 알고자 한다면 [What are browser developer tools](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools) 를 참고하자)

## 변수란?

변수란, 숫자(합계나 계산에 사용되는) 또는 문자열(문장의 일부로 사용되는)과 같은 값의 컨테이너입니다. 그러나 변수에 대한 한 가지 특별한 점은 포함된 값이 변경될 수 있다는 것입니다. 간단한 예를 살펴 보겠습니다:

```html
<button>Press me</button>
```

```js
const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("What is your name?");
  alert("Hello " + name + ", nice to see you!");
};
```

{{ EmbedLiveSample('What_is_a_variable', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

이 예제에서 버튼을 누르면 몇 줄의 코드가 실행됩니다. 첫 번째 줄은 독자가 이름을 입력하도록 요청한 화면에 상자를 띄운 다음, 변수에 값을 저장합니다. 두 번째 줄은 변수 값에서 가져온, 이름이 포함된 환영 메시지가 표시됩니다.

왜 변수가 유용한 지 이해하려면, 변수를 사용하지 않고 이 예제를 작성하는 방법에 대해 생각해 봅시다. 그러면 아마 이런 식으로 끝날 것입니다.

```js example-bad
let name = prompt("What is your name?");

if (name === "Adam") {
  alert("Hello Adam, nice to see you!");
} else if (name === "Alan") {
  alert("Hello Alan, nice to see you!");
} else if (name === "Bella") {
  alert("Hello Bella, nice to see you!");
} else if (name === "Bianca") {
  alert("Hello Bianca, nice to see you!");
} else if (name === "Chris") {
  alert("Hello Chris, nice to see you!");
}

// ... and so on ...
```

우리가 사용하고있는 구문을 완전히 이해하지는 못했지만, 아이디어를 얻을 수 있어야 합니다-변수를 사용할 수 없다면, 입력된 이름을 검사하는 거대한 코드 블록을 구현해야합니다. 그런 다음 해당 이름에 대한 각각의 메시지를 출력해야 합니다. 이것은 분명히 비효율적입니다 (코드는 네 가지 선택만으로도 훨씬 더 커집니다). 그리고 가능한 모든 선택 사항(모든 이름들)을 저장할 수 없어 작동하지 않을 수도 있습니다.

변수는 이해하기 쉽습니다. 자바 스크립트에 대해 더 많이 배우면, 변수들은 자연스럽게 느껴질 것입니다.

변수에 대한 또 다른 특별한 점은 문자열과 숫자뿐 아니라 무엇이든 포함 할 수 있다는 것입니다. 변수에는 복잡한 데이터와 놀랄만 한 기능을 수행하는 함수(Function)까지 포함될 수 있습니다. 당신은 이것에 대해 점점 더 많이 배울 것입니다.

변수는 값을 포함하고 있습니다. 이것은 중요한 차이점입니다. 변수는 값 자체가 아닙니다. 변수는 값을 위한 컨테이너입니다. 당신은 변수란 물건들을 저장할 수있는 작은 골판지 상자와 같다고 생각할 수 있습니다.

![](boxes.png)

## 변수의 선언

변수를 사용하기 위해서, 먼저 변수를 선언해야 합니다 - 보다 정확히는, 변수를 선언한다고 부른다. 이를 위해 키워드 var를 입력하고, 당신이 원하는 변수 이름을 입력합니다.

```js
var myName;
var myAge;
```

여기서 우리는 myName과 myAge라는 두 개의 변수를 생성합니다. 웹 브라우저의 콘솔 또는 아래 콘솔에서 두행을 입력해 보십시오 (원하는 경우, [콘솔](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html)을 별도의 탭이나 창에서 열 수 있음). 그 후, 자신이 명명한 변수를 만들어 보십시오.

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('변수의_선언', '100%', 300) }}

> **참고:** JavaScript에서는 모든 코드 명령어가 세미콜론 (;)으로 끝나야합니다. 코드를 한 줄로 작성해도 올바르게 작동할 지라도, 여러 줄의 코드를 함께 작성하는 경우에는 그렇지 않습니다. 그것을 포함시키는 습관을 갖도록 노력하십시오.

변수 이름을 입력하여 변수의 값이 실행 환경에 존재하는지 테스트 할 수 있습니다.

```js
myName;
myAge;
```

이 변수들은 값을 포함하고 있지 않은 빈 컨테이너 입니다. 변수 이름만 입력 할 경우 `undefined` 값을 반환하며 변수는 이 값(`undefined)`을 포함하게 됩니다. 만약 존재하지 않는(선언되지 않은) 변수는, 오류 메시지가 표시됩니다. 아래 변수를 입력하여 확인해 보세요.

```js
scoobyDoo;
```

> **참고:** 존재하지만 값을 포함하고 있지 않은 변수와, 존재하지 않은 변수를 혼돈하지 마십시오. 둘은 매우 다른 것들입니다.

## 변수의 초기화

변수를 선언한 후에는 값으로 초기화 할 수 있습니다. 변수 이름 다음에 등호(`=`)와 그 뒤에 부여 할 값을 입력하여 이 작업을 수행 할 수 있습니다.

```js
myName = "Chris";
myAge = 37;
```

콘솔로 돌아가 코드들을 입력해 보세요. 각각의 경우 변수에 할당한 값은 콘솔을 통해 반환되어 확인 할 수 있습니다. 또한 단순히 변수 이름을 입력하여 변수 값을 반환 할 수 있습니다. 한번 해보세요.

```js
myName;
myAge;
```

다음과 같이 변수를 선언하고 동시에 초기화 할 수 있습니다.

```js
var myName = "Chris";
```

아마도 변수의 선언과 초기화를 두줄로 나누어 하는것 보다 더 빠르기 때문에 대부분 이러한 방식을 자주 사용 하게 될 겁니다.

> **참고:**
>
> 여러 줄 문자열로 JavaScript 프로그램을 작성할 때(write a multiline JavaScript), 변수를 선언하기 전에 해당 변수의 값을 초기화 할 수 있습니다. 이것이 가능한 이유는 JavaScript 에서 일반적으로 변수 선언문이 다른 코드 보다 먼저 실행되기 때문인데, 이 동작을 **호이스팅**이라고 합니다.
> 자세한 내용은 [var 호이스팅](</ko/docs/Web/JavaScript/Reference/Statements/var#var_호이스팅(hoisting)>) 문서를 참고하세요.

## 변수의 재지정

변수에 값이 할당되면 다른 값을 지정하여 해당 값을 업데이트 할 수 있습니다. 콘솔에 다음 행을 입력해 보세요.

```js
myName = "Bob";
myAge = 40;
```

### 변수 이름에 대한 규칙

변수를 원하는 대로 이름을 부여 할 수 있지만 제한이 있습니다. 일반적으로 라틴 문자(0-9, a-z, A-Z)와 밑줄 문자를 사용해야 합니다.

- 오류가 발생하거나 전 세계 타인이 이해하기 어려울 수 있으므로 다른 문자를 사용하면 안됩니다.
- 변수 이름의 시작부분에 밑줄(\_)을 사용하지 마세요. JavaScript 구문에서 밑줄로 시작하는 것은 특별한 의미를 가지고 있으므로 혼란을 가져올수 있습니다.
- 변수 이름의 시작부분에 숫자를 사용하지 마세요. 허용되지 않으며 오류가 발생합니다.
- 안전한 명명법은 소위 ["lower camel case"](https://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms)(소문자 낙타 문법) 입니다. 여러 단어를 하나로 묶고 첫 단어의 시작은 소문자를 사용하며 그다음 단어의 시작은 대문자로 사용합니다. 우리는 지금까지 이 문서에서 변수 이름에 이 방법을 사용해 왔습니다.
- 포함된 데이터를 쉽게 이해 할 수 있게 변수 이름을 직관적으로 부여 합니다. 단일 문자 / 숫자 또는 긴 구절을 사용하지 마세요.변수 이름을 직관적으로 만들어, 포함된 데이터를 표현 할 수 있습니다.
- 변수는 대소문자를 구분 합니다. - `myage` 와 `myAge` 는 다른 변수 입니다.
- 마지막으로 JavaScript 예약어를 변수 이름으로 사용하면 안됩니다. (예약어란 JavaScript의 실제 구문을 구성하는 단어를 의미 합니다.) 따라서 변수 이름으로 `var`, `function`, `let`, `for` 와 같은 단어를 사용 할 수 없습니다. 브라우저는 이러한 단어를 다른 코드 아이템(예약어)로 인식하므로 오류가 발생 합니다.

> **참고:** 다음 [Lexical grammar — keywords](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) 링크에서 예약어의 목록을 확인 할 수 있습니다.

바람직한 변수 이름의 예:

```js-nolint example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

바람직하지 않은 변수 이름의 예:

```js-nolint example-bad
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

위의 지침을 염두에 두고 몇가지 변수를 추가로 작성해 보세요.

## 변수의 종류

변수에 저장할 수 있는 몇가지 유형의 데이터(데이터 유형)가 있습니다. 이 섹션에서는 이를 간단히 설명하고 이후 자세히 살펴보겠습니다.

지금까지 우린 두가지 형태의 데이터 유형을 살펴 봤지만 다른 유형들도 있습니다.

### 숫자

30과 같은 숫자 (정수라고도 함) 나 2.456(부동소수점 또는 부동 소수점 숫자라고도 함) 같은 십진수 숫자를 변수에 저장할 수 있습니다. JavaScript는 일부 프로그래밍 언어처럼 숫자 유형에 따른 다른 데이터 유형을 가지고 있지 않습니다. 변수에 숫자 값 대입할 때, 따옴표 사용하지 않습니다.

```js
var myAge = 17;
```

### 문자열

문자열은 텍스트의 조각입니다. 변수에 문자열 값을 대입할 때, 작은따옴표(')나 큰따옴표(")로 묶어야 합니다. 그렇지 않으면 JavaScript는 다른 변수 이름으로 해석하게 됩니다.

```js
var dolphinGoodbye = "So long and thanks for all the fish";
```

### 불리언(Booleans)

불리언(Booleans)은 `true` 이나 `false` 라는 값을 가지는 참/거짓을 표현하는 데이터 유형입니다. 일반적으로 조건을 테스트하는 데 사용되며 그 다음 코드가 조건에 따라 실행됩니다. 예를 들어 다음과 같습니다.

```js
var iAmAlive = true;
```

일반적으로 다음과 같은 방식으로 더 많이 사용됩니다.

```js
var test = 6 < 3;
```

위의 코드는 "작다" 연산자(`<`) 를 사용하여 6이 3보다 작은지를 확인 합니다. 예상 한대로 6이 3보다 작지 않으므로`false` 를 반환 합니다! 나중에 이러한 연산자에 대해 더 많이 배우게 됩니다.

### 배열

배열은 대괄호로 묶이고 쉼표로 구분 된 여러 값을 포함하는 단일 객체입니다. 다음 코드를 콘솔에 입력해 보세요.

```js
var myNameArray = ["Chris", "Bob", "Jim"];
var myNumberArray = [10, 15, 40];
```

이러한 배열이 정의되면 다음과 같은 구문을 사용하여 개별 값에 접근 할 수 있습니다. 다음 코드를 입력해 보세요.

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

대괄호에는 반환할 값의 위치를 지정하는 인덱스 값이 들어 있습니다. 컴퓨터는 우리 사람처럼 1대신 0부터 숫자를 센다는 것을 알 수 있습니다.

앞으로 배열에 대해 더 많이 배우게 됩니다.

### 객체

프로그래밍에서 객체(Objects)는 실제 사물(real life object)을 모델링 하는 코드 구조입니다. 예를들어 주차장 객체는 주차장의 높이와 넓이 정보를 가지고 표현 할 수 있으며, 사람 객체는 이름, 키, 몸무게, 사용하는 언어등의 정보를 가지고 표현 할 수 있습니다.

콘솔에 다음 코드를 입력해 보세요.

```js
var dog = { name: "Spot", breed: "Dalmatian" };
```

객체에 저장된 정보를 검색하기 위해서는 아래 구문을 사용합니다.

```js
dog.name;
```

지금은 객체에 대해 더 자세하게 보지 않을 것입니다. - 앞으로 모듈에 있는 객체에 대해 더 많이 배울 수 있습니다.

## 지정되지 않은 타입

JavaScript는 "느슨한 유형의 언어(loosely typed language)" 입니다. 즉, 다른 언어와 달리 변수에 포함 할 데이터의 유형을 지정할 필요가 없습니다.(예: 숫자? 문자열?)

예를 들어, 변수를 선언하고 그 변수의 값을 따옴표로 묶은 값을 지정하면 브라우저는 변수의 값을 문자열로 인식합니다.

```js
var myString = "Hello";
```

따옴표 안에 숫자가 포함되어 있어도 여전히 문자열로 인식되므로 주의해야 합니다:

```js
var myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

위의 네 줄의 코드를 하나씩 콘솔에 입력하여 결과가 무엇인지 확인해 보세요.(주석은 입력하지 마세요.) 여기에서 `typeof()` 라는 특수 함수를 사용하고 있음을 알 수 있습니다. - 이 함수는 입력한 변수의 데이터 유형을 반환합니다. 위의 코드에서 처음으로 호출될 때, `myNumber` 변수에는 `'500'` 라는 문자열이 포함되어 있으므로 `string` 을 반환해야 합니다. 두 번째는 어떤 값을 반환하는지 확인해 보세요.

## 당신의 실력을 시험해 보세요!

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [당신의 실력을 시험해 보세요: 변수(variables)](/ko/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables).

## 요약

지금까지 JavaScript의 변수란 무엇이며, 어떻게 생성하는지 알아보았습니다. 다음에는 JavaScript에서 숫자에 관해 자세히 살펴보고 기본 계산하는 방법을 알아보겠습니다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}
