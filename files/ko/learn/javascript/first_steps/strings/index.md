---
title: 문자열 다루기 — 문자열
slug: Learn/JavaScript/First_steps/Strings
tags:
  - Article
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Join
  - Quotes
  - concatenation
  - l10n:priority
  - strings
translation_of: Learn/JavaScript/First_steps/Strings
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

다음으로, 프로그래밍에서 어떤 텍스트가 호출되는지 문자열에 대해 알아볼까요? 이 게시물에서는 문자열 작성, 문자열의 따옴표 이스케이프 및 문자열 결합과 같이 JavaScript를 배울 때 문자열에 대해 알아야 할 모든 일반적인 사항을 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용능력, HTML 및 CSS에 대한 기본적인 이해, JavaScript에
        대한 기초적인 이해.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>JavaScript에서 문자열의 기초에 대해 익숙해지기.</td>
    </tr>
  </tbody>
</table>

## 단어의 힘

단어는 인간이 커뮤니케이션 함에 있어 커다란 하나의 부분이라고 할 수 있기에 매우 중요합니다. 웹은 사람들이 정보를 교환하고 공유할 수 있도록 설계된 텍스트 기반의 매체이므로, 웹에 표시되는 단어를 제어하는 것이 유용합니다. {{glossary ( "HTML")}}은 텍스트에 구조와 의미를 제공하며, {{glossary ( "CSS")}}는 텍스트에 스타일(일종의 디자인)을 적용할 수 있게 해주며, JavaScript는 문자열을 조작하기 위한 여러 가지 기능 (텍스트 레이블을 표시하고 용어를 원하는 순서로 정렬하는) 등 다양한 작업을 수행할 수 있습니다.

지금까지 우리가 여러분에게 보여 줬던 거의 모든 프로그램은 문자열 조작과 관련이 있습니다.

## 문자열 — 기초

문자열은 숫자와 유사하게 다루어지지만, 더 깊게 파고들면 눈에 띄는 차이점을 발견하기 시작할 것입니다. 먼저 몇 가지 기본 라인을 콘솔에 입력하여 우리와 친숙하게 만드는 것으로 시작하겠습니다. [이 링크](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html)를 통해 다른 탭이나 창에서 열 수 있고, [브라우저 개발자 도구](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)를 사용할 수도 있습니다).

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

      if(document.querySelectorAll('div').length > 1) {

inputForm.focus();
      }

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

{{ EmbedLiveSample('Hidden_code', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

### 문자열 만들기

1.  먼저 아래의 명령어를 입력하세요.

    ```js
    var string = 'The revolution will not be televised.';
    string;
    ```

    숫자에서 했던 것과 같게, 우리는 변수를 선언하고, 문자열을 초기화 하고, 값을 반환합니다. 차이점은 오직 숫자 대신 문자열을 넣었고, 문자열 값을 따옴표로 감싸주었습니다.

2.  따옴표를 빼거나 잘못쓰면 에러가 뜰 것입니다. 아래의 코드를 입력해 보세요.

    ```js example-bad
    var badString = This is a test;
    var badString = 'This is a test;
    var badString = This is a test';
    ```

    따옴표로 감싸져 있지 않은 텍스트는 변수 이름, 속성 이름, 예약어와 유사하다고 가정하기 때문에 이러한 코드는 작동하지 않습니다. 만약 브라우저가 찾을 수 없다면 에러가 발생할 것입니다. (e.g. "missing ; before statement"). 만약 브라우저가 문자열이 시작하는 곳은 볼 수 있지만, 끝나는 곳을 찾지 못하면 에러를 던집니다.("unterminated string literal"). 만약 당신의 프로그램이 에러를 계속 만들어낸다면, 다시 돌아가 당신의 문자열에 빠진 따옴표가 없는지 찾아보십시오.

3.  다음의 코드는 당신이 변수 `string` 을 선언했다면 작동할 것입니다. 아래의 코드를 입력해보세요 :

    ```js
    var badString = string;
    badString;
    ```

    `badString` 은 이제 `string` 과 같은 값으로 설정되었습니다.

### 따옴표 vs 쌍따옴표

1.  자바스크립트에서는 따옴표와 쌍따옴표가 모두 허용됩니다. 다음의 코드는 문제 없이 작동할 것입니다.

    ```js
    var sgl = 'Single quotes.';
    var dbl = "Double quotes";
    sgl;
    dbl;
    ```

2.  따옴표와 쌍따옴표는 차이점이 거의 없어, 편한대로 사용할 수 있습니다. 하지만 당신은 문자열을 감싸는데 한 종류의 따옴표만 사용해야 되며 그렇지 않으면 에러가 발생합니다. 아래의 코드를 실행해 보세요.

    ```js example-bad
    var badQuotes = 'What on earth?";
    ```

3.  브라우저는 다른종류의 따옴표가 감싸고 있어 문자열이 아직 끝나지 않았다고 생각합니다.  예를 들어, 아래 두 가지 모두 괜찮습니다.

    ```js
    var sglDbl = 'Would you eat a "fish supper"?';
    var dblSgl = "I'm feeling blue.";
    sglDbl;
    dblSgl;
    ```

4.  하지만, 당신은 같은 종류의 따옴표를 문자열에 포함시킬 수 없습니다. 브라우저는 어느 따옴표가 문자열이 끝났다는 것을 알리는지 혼돈하게 됩니다. 따라서 다음의 코드는 에러가 발생합니다.

    ```js example-bad
    var bigmouth = 'I've got no right to take my place...';
    ```

    이는 우리를 다음 문단으로 이끌어 줍니다.

### 문자열 이스케이프 문자

직전의 문제의 코드를 해결하기 위해, 우리는 따옴표를 이스케이프 문자로 만들어야 합니다. 이스케이프 문자란 어떤 한 문자를 코드가 아닌 문자열로 만들어주는 문자입니다. 자바스크립트에서는 역슬래시 ( \ )를 문자 바로 앞에 작성함으로써 코드가 아닌 문자열로 인식하게 합니다.

```js
var bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
```

이것은 에러가 일어나지 않습니다. 당신은 `\"` 와 같게도 사용할 수 있습니다. 자세한 사항은 [이스케이프 표기법](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)을 참고하십시오

## 문자열 연결하기

1.  'Concatenate'는 '결합' 을 의미하는 프로프래밍 단어입니다. 자바스크립트에서 문자열을 함꼐 결합하려면 숫자를 더할 때 사용하는 것과 동일한 더하기 (+) 연산자를 사용하지만 이 상황에서는 다른 작업을 수행합니다. 콘솔에 예를 들어 보겠습니다.

    ```js
    var one = 'Hello, ';
    var two = 'how are you?';
    var joined = one + two;
    joined;
    ```

    변수 `joined` 의 값은 "Hello, how are you?" 입니다.

2.  마지막 예에서는, 그저 두 개의 문자열을 결합했을 뿐이지만 각 문자열 사이에 +를 포함하기만 하면 원하는 만큼의 문자열을 결합할 수 있습니다. 다음을 시도해 보십시오.

    ```js
    var multiple = one + one + one + one + two;
    multiple;
    ```

3.  또한 변수와 실제 문자열을 혼합하여 사용할 수도 있습니다. 다음을 시도해 보십시오.

    ```js
    var response = one + 'I am fine — ' + two;
    response;
    ```

<div class="note"><p><strong>참고</strong>: 만약 코드에 따옴표나 쌍따옴표로 묶인 문자열을 입력하면 <strong>문자열 리터럴</strong> (string literal) 이라 불립니다.</p></div>

### 문자열의 연결

실제 작업에 사용되는 연결 방법에 대해 살펴보겠습니다. 이 과정에 앞부분의 예는 다음과 같습니다.

```html
<button>Press me</button>
```

```js
var button = document.querySelector('button');

button.onclick = function() {
  var name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

여기서 우리는 {{domxref("Window.prompt()", "Window.prompt()")}} 를 4번째 줄에 쓰는데, 그것은 팝업 대화 상자를 통해 질문에 응답하도록 요청한 다음 지정된 변수 내에 입력하는 텍스트를 저장합니다 — 이 경우에는 `name` 에 저장합니다. 우리는{{domxref("Window.alert()", "Window.alert()")}} 을 5번째 줄에 사용하여 두 개의 문자열 리터럴 및 변수의 값이 포함된 다른 팝업을 표시합니다.

### 숫자 vs 문자열

1.  그러면 문자열과 숫자를 추가 (또는 연결) 하면 어떻게 될까요? 콘솔에서 사용해 보겠습니다.

    ```js
    'Front ' + 242;
    ```

    이 경우 오류가 발생할 것으로 예상할 수 있지만 잘 작동합니다. 숫자로 문자열을 나타내려는 것은 말이 안되지만 숫자를 문자열로 표현하는 것은 의미가 있습니다. 그래서 브라우저는 숫자를 문자열로 변환하고 두 문자열을 서로 연결시킵니다.

2.  숫자 두 개로도 연결할 수 있습니다 — 따옴표로 감싸면 숫자를 강제로 문자열로 만들 수 있습니다. 아래 코드를 실행해보세요(아래 코드에서 변수가 숫자인지 문자열인지를 확인하기 위해 `typeof` 연산자를 사용합니다.):

    ```js
    var myDate = '19' + '67';
    typeof myDate;
    ```

3.  만약 코드에 문자열로 바꾸고 싶은 숫자형 변수가 있지만 변수 자체의 값을 바꾸고 싶지 않거나 숫자로 바꾸고 싶은 문자열 변수가 있지만 변수 자체의 값을 바꾸고 싶지 않으면 아래와 같은 생성자를 사용할 수 있습니다:

    - {{jsxref("Number")}} 객체는 가능하면 어떠한 입력값이건 숫자로 바꿉니다. 다음 코드를 실행해보세요:

      ```js
      var myString = '123';
      var myNum = Number(myString);
      typeof myNum;
      ```

    - 반면, 모든 숫자는 [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 이라는 함수를 가지고 있습니다. 이 함수는 숫자를 동등한 문자열로 변환합니다. 다음 코드를 실행해보세요:

      ```js
      var myNum = 123;
      var myString = myNum.toString();
      typeof myString;
      ```

    이 생성자들은 어떤 상황에서는 정말 유용할 수 있습니다. 예를 들어, 만약 어떤 사용자가 숫자를 텍스트 필드 폼에 입력하면, 그 입력 값은 문자열일 것입니다. 하지만 만약 여러분이 이 숫자를 어떤 값에다 더하고 싶다면, 이 입력 값을 숫자로 변환해야 합니다. 이 경우 `Number()` 에 이 값을 넘겨줘서 이 문제를 해결할 수 있습니다.우리는 이미 [Number Guessing Game, in line 61](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L61) 에서 이를 사용한 적이 있습니다.

## 마치며

여기까지 자바스크립트에서 다루는 문자열의 기본이었습니다. 다음 글에서는 자바스크립트에서 문자열에 사용할 수 있는 기본 제공 메소드를 조작하는 방법에 대해 알아보겠습니다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

## In this module

- [What is JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/en-US/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
