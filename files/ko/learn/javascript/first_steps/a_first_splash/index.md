---
title: 자바스크립트 기초
slug: Learn/JavaScript/First_steps/A_first_splash
tags:
  - Article
  - Beginner
  - CodingScripting
  - Conditionals
  - Functions
  - JavaScript
  - Learn
  - Objects
  - Operators
  - Variables
  - events
  - l10n:priority
translation_of: Learn/JavaScript/First_steps/A_first_splash
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

이제 우리는 자바스크립트에 대한 이론적인 몇몇 부분을 살펴볼 것이다. 이곳에서 무엇을 할 수 있는지 실용적인 연습을 통한 자바스크립의 기본적 사항들을 다루는 과정이 되겠다. 하나하나씩 "숫자맞추기" 게임을 간단하게 구성해나갈 것이다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">알아야할 것들:</th>
      <td>기본적인 컴퓨터 사용과 HTML CSS와 자바스크립트에 대해 알아야 함.</td>
    </tr>
    <tr>
      <th scope="row">수업 목표:</th>
      <td>
        자바스크립트로 코딩하는 것을 처음으로 알아보고 자바스크립트로 쓰여진
        프로그램이 가지고 있는 특징들을 조금이라도 이해한다.
      </td>
    </tr>
  </tbody>
</table>

지금현재로서는 코드를 자세히 이해하려고 하지는 않을 것이다. 단지 지금은 넓게 개념을 이해하고, (다른 프로그래밍 언어를 포함해) 자바스크립트가 어떻게 운용되는지에 대한 아이디어가 필요하다. 자, 이제부터 자세한 부분에 대해 공부하고 알아보자!

<div class="note"><p>Note: 자바스크립트에서 보는 다양한 요소들은 여타 프로그래밍 언어와 거의 똑같다.(함수나 반복문 등) 언어마다 문법이 다를 뿐이지 개념은 넓은범위에서 보자면 일맥상통하다.</p></div>

## 프로그래머처럼 사고하기

프로그래밍에서 가장 어려운 것은 우리가 배우려고 하는 문법이 아닌, 어떻게 실생활의 문제를 프로그래밍으로 적용시킬까하는 문제이다. 이제부터는 프로그래머처럼 생각하는 것이 필요하다. 이는 일반적으로 프로그램이 필요한 부분과 어떻게 코드가 문제를 해결하기위해 작동되고, 협업해야 되는지에 대한 설명을 알고있어야 된다는 것이다.

이는 프로그래밍 문법에 대한 경험과 노력, 그리고 창의성을 비롯한 노력의 조합이 필요하다. 코드를 많이 작성할수록 얻는 것은 더 많아질 것이다. 지금 당장 "프로그래머의 사고능력"으로 발전시킨다고는 보장하지는 못하지만, 이 수업을 통해 여러분들에게 프로그래머처럼 생각하는 많은 연습의 기회는 줄 수 있다.

이러한 개념을 마음속에 품고, 앞으로 우리가 만들어나갈 예제를 한번 살펴보자. 여기서 실생활의 문제를 프로그래밍할 수 있도록 쪼개는 일반적인 과정을 볼 것이다.

## 예제-숫자맞추기

아래 보이는 간단한 게임을 통해, 프로그램을 구성하는 방법을 알아볼 것이다.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

한 번 실행해서 어떻게 이루어져 있는지 살펴보고 알아보자.

만약 너의 상사가 예제에 관련되어 다음의 짦은 안내만 주어졌다고 생각해보자.

> 나는 간단하게 숫자 맞추기 게임을 만들고 싶다. 1과 100사의 수 중에서 무작위로 선택되어야하고, 플레이어는 10번의 기회안에 그 숫자를 맞춰야 한다. 각 순서마다 숫자를 맞춰는지 틀렸는지는 당연히 알려줘야 하고, 틀렸다면 큰지 작은지도 포함해서 말해야 한다.또한 이전에 써냈던 번호들도 보여줘야 한다. 게임은 플레이어가 숫자를 맞추던가, 기회를 모두 소진하면 끝나게 된다. 게임이 끝나면 플레이어가 다시 게임을 할 것인지 묻게된다.

위의 안내문을 보고, 우선 문제를 가능한 한 작게 쪼개서 간단한 작업으로 만드는 것부터 시작하자.

1.  1과 100사이의 숫자 중 무작위로 추출한다.
2.  1부터 플레이어의 차례를 기록한다.
3.  플레이어에게 숫자를 맞출 수 있게 한다.
4.  숫자를 맞추면 어딘가에 저장하고, 사용자는 이전의 추측한 숫자를 볼 수 있도록 한다.
5.  그다음, 숫자가 일치한지 확인한다.
6.  만약 일치한다면:

    1.  축하 메시지를 표시한다.
    2.  더 이상 숫자를 맞출필요가 없다.
    3.  플레이어가 다시 게임을 할지 묻는다.

7.  숫자가 틀렸고, 차례가 남아있다면:

    1.  틀렸다고 알린다.
    2.  다른 숫자를 입력할 수 있도록 한다.
    3.  차례가 1 증가한다.

8.  숫자가 틀렸고, 차례가 없다면:

    1.  게임이 종료되었음을 알린다.
    2.  더 이상 숫자를 맞출필요가 없다..
    3.  플레이어가 다시 게임을 할지 묻는다.

9.  게임이 재시작 되면, 게임의 구조와 UI는 완전히 리셋되며, step1 부터 다시 로직이 시작된다.

이제 다음 단계로 넘어가서 각 단계들을 코드로 어떻게 만들고, 예제 소스와 통합하며, 그와 관련된 자바 스크립트 기능은 무엇인지 살펴보도록 하겠다.

### 초기 구성

수업에 앞서, 로컬에 [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) 파일을 저장하길 바란다. ([see it live here](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). 그러고 파일을 에디터와 브라우저에서 동시에 열어보자.  간단하게 요약된 설명과 추측하는 폼을 볼 때, 아직 숫자를 입력하는 폼은 아무런 기능을 하지 않는다

여러분들의 코드를 추가하는 부분은 HTML안의 {{htmlelement("script")}} 요소 사이에 있다.

```html
<script>

  // Your JavaScript goes here

</script>
```

### 데이터 저장을 위한 변수 추가

이제 시작해보자! 먼저 {{htmlelement("script")}} 태그안에 다음의 코드들을 추가하자.

```js
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
```

이 코드의 부분은 프로그램에서 사용될 데이터를 저장할 변수를 세팅해준다. 변수들은 기본적으로 값들을  저장하고 있다. (숫자나 문자열 등). 변수들은 var이라는 키워드를 변수의 이름앞에 붙여줌으로써 선언이된다.  변수 에 넣고자 하는 값 앞에 등호(=)를 통해 변수에 값을 지정할 수 있다.

예제에서

- 첫번째 변수 `randomNumber`는 수학적 알고리즘을 통해 계산해 1과 100사이의 임의의 수를 지정한다 .
- 다음의 세 개의 변수들은 각각 HTML에서 결과 문장을 저장하는 기준으로 저장되고, 코드상에서 나중에 문장에 추가되도록 사용된다.

  ```html
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
  ```

- 다음의 2개 변수는 다음의 입력과 버튼을 받고, 추측된 값을 나중에 받도록 하는 역할을 한다.

  ```html
  <label for="guessField">Enter a guess: </label><input type="text" id="guessField" class="guessField">
  <input type="submit" value="Submit guess" class="guessSubmit">
  ```

- 마지막 2개의 변수에는 (얼마나 많은 추측을 했는지) 추측 개수와, 아직은 있지않은 버튼을 리셋하는 변수가 있다.

<div class="note"><p><strong>주의</strong>: 앞으로 변수에 대해서는 더 많이 배울 것이다. <a href="https://developer.mozilla.org/en-US/docs/user:chrisdavidmills/variables">next article</a>를 참고해보자.</p></div>

### 함수

다음으로, 아래의 자바스크립트 코드를 추가하자.

```js
function checkGuess() {
  alert('I am a placeholder');
}
```

함수는 재사용이 가능한 코드의 묶음으로 한 번만 명시하면 몇번이고 실행이 가능하여 전체적인 코드에서 반복을 줄일 수 있다 . 이는 매우 유용하다. 함수를 정의하는 방법에는 여러가지가 있지만, 일단 여기서는 가장 간단한 방법을 집중적으로 살펴볼 것이다. 앞에 `function`키워드를 사용하고, 함수의 이름을 작성하며, 함수의 이름 뒤에 괄호를 넣어줌으로서 함수를 정의할 수 있다.그러고 나서 중괄호로 묶어준다. 중괄호 안에는 함수가 호출되면 실행되는 반복적인 코드들이 들어있다.

코드는 괄호 앞에 위치한 함수의 이름을 적음으로 실행된다.

코드를 저장하고 브라우저에서 새로고침을 통해 실행해보자.

[developer tools JavaScript console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)에 들어가서 다음의 문장을 입력해보자

```js
checkGuess();
```

"I am a placeholder"라고 알리는 alert를 볼 수 있을 것이다. 여기서는 함수가 호출되면 alert가 생성되는 함수로 정의되어 있다.

<div class="note"><p><strong>Note</strong>:더 많은 함수에 대한 내용은 차후의 학습에서 볼 수 있을 것이다.</p></div>

### 연산자

자바스크립트의 연산자는 테스트를 진행하고, 수학적인 것을 다루고, 문자열을 결합하는 등의 것들을 가능케한다.

다음의 코드를 저장하고 브라우저의 페이지에서 보이도록 새로고침 해보자. [개발자 도구 JavaScript 콘솔](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)을 열고 아래 표시된 에제를 입력 해보자. 표시된대로 정확히 입력하고 Return/Enter 키를 누른 후 어떤 결과가 반환되는지 보자. 브라우저 개발자 도구에 쉽게 액세스 할 수 없는 경우, 아래 표시된 간단한 콘솔을 사용 할 수 있다:

<div class="hidden"><h6 id="Hidden_code">Hidden code</h6><pre class="brush: html">&#x3C;!DOCTYPE html>
&#x3C;html>
  &#x3C;head>
    &#x3C;meta charset="utf-8">
    &#x3C;title>JavaScript console&#x3C;/title>
    &#x3C;style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0C323D;
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
        background: #0C323D;
        color: #809089;
      }

      div {
        clear: both;
      }

    &#x3C;/style>

&#x3C;/head>
&#x3C;body>

&#x3C;/body>

&#x3C;script>
var geval = eval;

    function createInput() {
      var inputDiv = document.createElement('div');
      var inputPara = document.createElement('p');
      var inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '>';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);
      inputDiv.focus();

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch(e) {
        var result = 'error — ' + e.message;
      }

      var outputDiv = document.createElement('div');
      var outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Result: ' + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';

      createInput()
    }

    createInput();

&#x3C;/script>
&#x3C;/html></pre></div>

{{ EmbedLiveSample('Hidden_code', '100%', 300) }}

먼저 산술 연산자를 살펴보자.

| 연산자 | 이름              | 예        |
| ------ | ----------------- | --------- |
| `+`    | 더하기            | `6 + 9`   |
| `-`    | 빼기              | `20 - 15` |
| `*`    | 곱하기            | `3 * 7`   |
| `/`    | 나누기            | `10 / 5`  |

또한 + 연산자는 문자열들을 서로 연결할때에도 사용된다.(이를 프로그래밍에서 '문자열접합'이라고 한다.) 다음 코드를 입력해보자.

```js
var name = 'Bingo';
name;
var hello = ' says hello!';
hello;
var greeting = name + hello;
greeting;
```

그리고 '복합 대입 연산자' 라고 불리는 소스를 간단하게 하는 연산자도 있다. 예를 들어, 단순히 새로운 문자열을 기존에 있는 문자열에 추가하고, 그 결과를 반환받는 일을 하고 있다면 다음 코드를 사용할 수 있다.

```js
name += ' says hello!';
```

이 코드는 다음 코드와 같은 의미이다.

```js
name = name + ' says hello!';
```

참/거짓을 판명할때 (조건문이 있을 때 — {{anch("Conditionals", "아래")}}를 참조하자) , 비교연산자를 사용한다.

| Operator | Name                                      | Example                    |
| -------- | ----------------------------------------- | -------------------------- |
| `===`    | Strict equality (is it exactly the same?) | `5 === 2 + 4`              |
| `!==`    | Non-equality (is it not the same?)        | `'Chris' !== 'Ch' + 'ris'` |
| `<`      | Less than                                 | `10 < 6`                   |
| `>`      | Greater than                              | `10 > 20`                  |

### 조건문

함수가 반환되었을때, 자리표시자 메시지(Placeholder Message, 텍스트를 입력할 때 무엇을 입력해야되는지 알려주는 기능 - 역자)를 표시하지 않는 것이 더 좋을 것이라고 본다 . 우리는 사용자의 추측이 옳은지, 틀린지만 보고 적절하게 응답하도록만 할 것이다.

이 시점에서 이제, 현재 checkGuess()함수를 다음과 같이 수정해보자.

```js
function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
```

꽤 코드가 길다. 각 부분별로 이제 하나하나씩 파헤쳐보자!

- 2번 줄까지는 userGuess변수를 선언하고, 텍스트 필드에서 입력된 현재 값들을 변수의 값으로 지정한다. 여기서는 빌트인된 `Number()`메소드(값이 숫자라는 것을 알 수 있다.)로 실행된다.
- 그러고나서, 처음으로 조건문을 맞닥뜨린다. (3-5번 줄). 조건문 블록은 조건이 옳은지 그른지에 따라 선택적으로 코드가 실행된다. 함수와 비슷하나, 꼭 그렇지는 않다. 가장 간단한 조건문의 형태는 키워드 `if`를 사용하고, 괄호가 있고, 중괄호가 있다. 괄호안에는 조건이 삽입된다. 만약 조건문이 옳다면, 중괄호안의 코드들이 실행된다. 거짓이라면, 다음 코드로 넘어가게 된다. 이 코드에서 조건문은 `guessCount변수가 1인지 이다.` (즉, 현재 플레이어의 게임이 처음인지 아닌지를 판단하는 조건)

```js
guessCount === 1
```

참이라면, guessess 변수의 텍스트는 "Previous guesses: "가 된다. 그렇지 않다면, 실행되지 않는다.

- 6번 줄에서는 현재의 userGuess 값에 마지막 guesses 문장을 추가하고, 끝에 공백을 더함으로서 각각의 추측한 수끼리 간격을 두고 보여진다.
- 다음 블록도 함번 살펴보자(8-24번 줄)

  - 첫 `if(){ }` 는 처음에 지정한 `randomNumber`과 사용자가 추측한 값(`userGuess`)이 값은지 본다. 참이라고 계산되면, 플레이어는 숫자를 맞춘것이고 게임을 이기게 된다. 따라서 플레이어에게 초록색, 인포메이션 박스로 축하메시지를 보여주고, 게임을 더할지와 관련된 `setGameOver() `함수를 불러온다.
  - 이제 `else if(){ }` 구조를 사용하여 다른 조건문을 추가하게 된다. 이 조건은 사용자가 마지막 순서인지를 계산한다. 참이라면 프로그램은 이전과 같은 블록을 실행한다. 대신 게임을 이기지는 않았기 때문에 축하메시지를 제외된다
  - 마지막 블록은  (the `else { }`)로 앞선 두 개의 조건이 모두 거짓일 때 실행된다. (i.e. 숫자를 맞추지도 못하고 차례가 남았을 때). 이 경우, 틀렸음을 알려주고, 정답보다 숫자가 큰지 작은지도 계산하여 적절한 메시지를 표시하도록 한다.

- 함수상의 마지막 3줄(26-28번 줄)은 다음 숫자 추측을 위한 것이다. guessCount 변수에 1을 더함으로, 사용자의 차례가 지나갔음을 안다. (`++`이란 증감연사자이다. - 1을 더함). 그리고 값에 상관없이 텍스트필드를 공란으로 만들고, 커서를 위치시키므로, 다음값이 입력될 수 있도록 한다.

### 이벤트

여기서 우리는 `checkGuess()` 함수를 잘 구현해 보았지만, 아직 호출하지 않았기 때문에 아무런 역할을 하지 않는다. 실제로는  "Submit guess" 버튼이 눌러져야 호출받도록 할 것이므로, 이벤트를 사용해서 구현할 것이다. 이벤트란 버튼을 클릭하고, 페이지가 로딩되고, 비디오가 실행되는 등 코드가 실행되기 위한 응답으로 브라우저상에서 일어나는 액션이다. 이벤트가 발생하여 발생된 이벤트를 처리하는 것을 **이벤트 리스너(event listeners)**라 하고, 이벤트가 발생했을 때 실행되는 코드 블록을 **이벤트 핸들러(event handlers)**라고 한다.

`checkGuess()`함수의 중괄호가 끝난뒤, 다음의 코드를 추가해보자.

```js
guessSubmit.addEventListener('click', checkGuess);
```

`이는 guessSubmit` 버튼에 이벤트 리스너를 추가하는 과정이다. 두개의 입력(인수)를 가지는 `addEventListner`메소드이다. 문자열로서 클릭을 처리하는 이벤트이고, 이벤트가 발생했을 때 실행하고자 하는 코드는 `checkGuess()` 함수이다. 특히, {{domxref("EventTarget.addEventListener", "addEventListener()")}}안에서는 함수의 괄호가 필요없다는 것에 주의하자.

코드를 저장하고 새로고침해보자, 예제가 실행됨을 볼 수 있다.  아직 게임이 종료되면 실행되는 setGameOver() 함수가 정의되지 않았으므로, 정답을 맞췄을때나 추측에 상관없이 실행되었다면 프로그램의 실행이 멈춰야 한다. 필요한 코드를 작성하고 함수를 추가해보자.

### 함수로 프로그램 종료하기

`setGameOver()`함수를 코드 아래쪽에 추가하고 살펴보자.  자바크스립트 코드의 맨 마지막에 추가하도록 하자.

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
```

- 2-3번 줄은 텍스트 입력과 버튼의 diabled 속성을 true로 함으로써 작동되지  않도록 한다. 그렇지 않다면 사용자들이 게임이 종료된 후에도 계속 정답을 제출할 것이기 때문에 필수적이다.
- 4-6번 줄은 새로운 {{htmlelement("button")}} 엘리먼트를 생성하고, "Start new game"라고 표시되게 지정하고 현재의 HTML 아래쪽에 추가하도록 한다.
- 7번 줄은 새 버튼으로 하여금 이벤트 리스너를 지정하여 클릭되면 `resetGame() `함수가 실행되도록 한다.

물론 이 함수도 정의해야 한다. 또다시 코드의 가장 아래에 다음 코드를 추가하자.

```js
function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

앞서 보는 함수 블록 코드는 게임이 어떻게 시작되고 사용자가 다시 시작할 수 있도록 초기화하는 코드이다.

- `guessCount 변수를 1로 한다.`
- 표시된 정보를 모두 초기화한다.
- 코드상에서 초기화 버튼을 제거한다.
- 폼 작성을 위해 텍스트를 입력하는 곳을 비워놓고 커서를 위치시킨다.
- `lastResult`변수 상의 문장` `배경색을 제거한다.
- 임의의 수를 다시 지정함으로, 앞선 `randomNumber`와 겹치지 않도록 다시 설정한다.

**축하한다! 이제 여기까지 완료됬다면 프로그램이 정상적으로 작동될 것이다.**

이제 살펴볼 것은 코드에서 볼 수 있는 중요한 부분중 하나이다.

### 반복문

위 코드상에서  자세히 살펴볼 것 중 하나는 [for](/en-US/docs/Web/JavaScript/Reference/Statements/for) 반복문에 관한 부분이다. 반복문은 프로그래머가 지정한 코드의 부분을 조건에 부합할때까지 계속 실행시키는 등 프로그래밍에서 중요한 개념 중 하나이다.

시작에 앞서, [browser developer tools JavaScript console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)에 들어가서, 다음을 입력해보자.

```js
for (var i = 1 ; i < 21 ; i++) { console.log(i) }
```

어떤 일이 일어났는가? 숫자 1부터 20까지 차례대로 콘솔창에 표시됨을 볼 수 있다.이는 반복이라는 컨셉 때문이다. for 반복문에는 세 개의 입력값(아규먼트)이 있다.

1.  **시작값**: 위 코드에서는 1부터 시작하였지만, 프로그래머 임의대로 지정할 수 있다. i 대신 다른 변수를 사용할 수 있지만, 짧고 기억하기 쉬운 관습으로 인해 간단한 알파벳 i가 주로 사용된다.
2.  **종료 조건**: 여기서는 `i < 21 라고 명시되었다. 이는 i가 21보다 작을때까지 반복이 이루어진다는 말이다. i가 21이 되었을 때, 반복은 종료된다.`
3.  **증감식**:  `i++이라 명시된 것은 i에 1씩 더하라는 의미이다.반복은 i의 값에 따라 i가 21이 될때까지 반복된다`. 여기서는 {{domxref("Console.log", "console.log()")}} 를 사용하여 콘솔창에 반복적으로 i의 값을 출력시키는 간단한 예제를 보였다.

숫자 맞추기 프로그램의 앞선 `resetGame()` 함수에서 반복문을 한 번 살펴보자.

```js
var resetParas = document.querySelectorAll('.resultParas p');
for (var i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}
```

이 코드에서는 {{domxref("Document.querySelectorAll", "querySelectorAll()")}} 메소드를 사용하여 `<div class="resultParas">`안의 모든 문장들의 배열을 변수로 만들고 있다. 그러고 반복을 통해 각각의 배열 원소에 접근하여, 내용을 제거하게 된다.

### 객체에 대한 간단한 고찰

이제 마지막으로 한단계 더 나아갈 수 있는 부분을 배워보자.  `var resetButton; `아래에 다음 코드를 추가해보자.(코드 위쪽에 있으니 참고하고, 저장까지 해보자)

```js
guessField.focus();
```

여기서는 {{domxref("HTMLElement.focus", "focus()")}} 메소드를 통해 자동으로 커서를 페이지가 뜨자마자 {{htmlelement("input")}} 텍스트 필드에 위치시킬 수 있기때문에, 사용자가 처음에 폼 필드를 클릭할 필요없이 바로 글을 쓸 수 있게 된다. 아무것도 아닌 것처럼 보이지만, 사용자에게 굉장히 편리함을 주기 때문에 프로그램에서 좋은 효과를 가져다 준다.

여기서 이루어지는 일들을 좀 더 자세히 분석해보자. 자바스크립트에서는 모든 것이 객체이다. 객체란 하나의 그룹안에 관계되는 기능(함수)들을 모아놓은 것이다.혼자서 객체를 생성할 수 있겠지만, 아직은 이르기 때문에 나중에 살펴보자. 지금은 간단히 브라우저에 내장된 객체를 사용함으로서 좀 더 많은 일들을 해보는 것에 중점을 두자.

`여기서는, 먼저 HTML의 입력 폼 필드의 정보를 저장하는 guessField` 변수를 생성해보자. (다음 코드는 맨 위의 변수 선언문에서 볼 수 있다.)

```js
var guessField = document.querySelector('.guessField');
```

이 정보를 얻기 위해, {{domxref("document")}} 객체의 {{domxref("document.querySelector", "querySelector()")}}메소드를 사용한다. `querySelector()는 특정 정보(필요한 요소를 추출하는 `[CSS selector](/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors))`를 가져오는 역할을 한다.`

`이제 `{{htmlelement("input")}} 요소의 정보를 담고 있기 때문에, 속성(기본적으로 객체안의 변수나 변수 변경이 없는 경우)과 메소드(기본적으로 객체안의 함수)를 접근할 수 있게 된다. 입력 요소에 이용 가능한 메소드 중 하나가 `focus()이며`, 따라서 이 메소드를 통해 텍스트 입력에 커서를 가져다 놓을 수 있는 것이다.

```js
guessField.focus();
```

폼 요소의 정보를 가지고 있지 않은 변수는 `focus()` 를 사용할 수 없다. 예를 들어,  `guesses `변수는 {{htmlelement("p")}} 요소의 정보를 가지고 있고, `guessCount` 변수는 단순한 숫자를 포함하고 있다.

### 브라우저 객체로 다루기

이제 브라우저를 객체로서 다뤄보자.

1.  먼저, 브라우저에서 프로그램을 연다
2.  다음 [browser developer tools](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)을 실행하고, 자바스크립트 콘솔창을 활성화한다.
3.  `guessField`의 입력과 콘솔에서 {{htmlelement("input")}} 요소를 포함한 변수를 보여줄 것이다. 변수를 포함한 실행환경 상에 존재하는 객체이름을 콘솔이 자동으로 완성하는 것도 알아야한다.
4.  다음 코드를 입력하자

    ```js
    guessField.value = 'Hello';
    ```

    `value` 속성은 텍스트 필드를 통해 입력되는 현재값을 나타낸다. 커맨드 창에 입력하고 어떤 일이 일어나는지 살펴보자.

5.  `guesses`에 입력하고 반환값을 살펴보자. 콘솔 창에서 변수가 {{htmlelement("p")}} 요소가 있음을 보여줄 것이다.
6.  다음 코드를 입력하자.

    ```js
    guesses.value
    ```

    브라우저에서 아무런 문장이 없기 때문에, undefined라고 리턴될 것이다.

7.  대신, 다음 코드에서 문자를 변경/추가하기 위해서는 {{domxref("Node.textContent", "textContent")}} 속성을 사용한다.

    ```js
    guesses.textContent = 'Where is my paragraph?';
    ```

8.  그러면 이제 다양한 작업을 할 수 있으니, 하나하나 시도해보자.

    ```js
    guesses.style.backgroundColor = 'yellow';
    guesses.style.fontSize = '200%';
    guesses.style.padding = '10px';
    guesses.style.boxShadow = '3px 3px 6px black';
    ```

    페이지의 모든 요소들을 `style` 속성을 가지고 있기때문에, 모든 요소에 적용가능한 인라인 CSS 스타일을 포함한 속성을 가진 객체를 포함하고 있음을 알 수 있다. 이는 자바스크립트 상에서 CSS 스타일을 동적으로 지정할 수 있음을 알 수 있다.

## 결론

여기까지 예제를 빌드해보는 과정이었다.  마지막으로 작성된 코드를 실행해보거나,[play with our finished version here](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). 만약 코드가 실행되지 않는다면, [source code](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)를 참고하자.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
