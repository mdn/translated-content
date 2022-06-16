---
title: 자바스크립트 문제해결
slug: Learn/JavaScript/First_steps/What_went_wrong
tags:
  - Article
  - Beginner
  - CodingScripting
  - Debugging
  - Developer Tools
  - Error
  - JavaScript
  - Learn
  - Tutorial
  - console.log
  - l10n:priority
translation_of: Learn/JavaScript/First_steps/What_went_wrong
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

이전 수업에서 "숫자맞추기" 프로그램을 만들어봤을때, 프로그램이 돌아가지 않는다는 것을 볼 것이다. 하지만 여기서 자바스크립트의 에러를 찾고 고치는 방법에 대해 알려주니 겁먹지 말고 도전해보자!

<table>
  <tbody>
    <tr>
      <th scope="row">알아야 할 것</th>
      <td>기본적인 컴퓨터 이해. HTML, CSS, 자바스크립트의 이해</td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>코드상의 문제를 고치는 능력과 자신감 고취</td>
    </tr>
  </tbody>
</table>

## 에러의 종류

일반적으로, 코드가 잘못된 이유에는 2가지 종류가 있으니 살펴보자.

- **구문 에러(Syntax errors)**: 코드 상의 구문 에러로 대개 철자가 잘못되어 작동이 안되거나 중간에 프로그램이 중지된다. 물론 여기서 에러 메시지가 출력되므로 확인할 수 있다. 코드 편집기 툴을 사용하고 에러 메시지의 의미만 파악할 수 있다면, 충분히 고칠 수 있다.
- **논리 에러(Logic errors)**: 구문은 올바르지만, 코드의 의미자체가 잘못된 경우이다. 즉 프로그램은 정상적으로 돌아가지만, 원하는 결과를 얻지 못하는 경우이다. 에러 메시지가 직접적으로 표시되지 않기 때문에, 일반적으로 구문에러보다 에러 수정이 힘들다.

물론, 간단하지는 않지만 좀 더 세분화된 분류가 있다. 그렇지만, 위의 분류가 처음에는 이해하기 좋다. 우리는 앞으로 이 두가지 종류에 대해 알아볼 것이다.

## 잘못된 예

시작하기 앞서, 이전에 볼 '숫자맞추기'게임을 살펴보자 (이번 시간을 제외하고는 앞으로 일부러 에러를 만든 코드를 볼 것입니다.) 깃허브에 가서 로컬 지역에 저장합니다. -> [number-game-errors.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (see it [running live here](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1.  시작하기에 앞서, 파일을 본인이 사용하는 텍스트 에디터와 브라우저를 통해 연다.
2.  프로그램을 실행시켜본다.("Submit Button"을 눌렀을 때, 정상적으로 실행이 되면 안된다)

> **참고:** You might well have your own version of the game example that doesn't work, which you might want to fix! We'd still like you to work through the article with our version, so that you can learn the techniques we are teaching here. Then you can go back and try to fix your example.

여기서 구문 에러가 발생했을때 볼 수 있는 개발자 콘솔에 대해 살펴보고, 이를 통해 수정해보자. 이제부터 시작이다!

## 구문(Syntax) 에러 고치기

수업 앞쪽에서 간단한 자바스크립트 명령어를 [developer tools JavaScript console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) 에서 살펴보았다 (만약 모르겠다면 앞의 링크를 살펴보자). 좋은 것은, 브라우저의 자바스크립트 엔진이 구문에러가 발생할 대마다 에러메시지를 콘솔에게 던져준다.  자, 이제 시작해보자

1.  열려져 있는 `number-game-errors.html`이 있는 탭으로 가서 자바스크립트 콘솔창을 연다. 다음줄을 따라 에러메시지를 볼 수 있을 것이다. ![](not-a-function.png)
2.  이는 쉬운 에러에 속하기 때문에, 브라우저가 해결하도록 팁등을 알려준다. (위의 캡처사진은 FireFox이지만, 아마 다른 브라우저에서도 비슷한 내용을 제공해준다). 왼쪽부터 살펴보면,

    - 빨간색 "x"는 에러라는 것을 의미한다.
    - 무엇이 잘못됬는지 알려준다. 여기서는 "TypeError: guessSubmit.addeventListener is not a function"
    - "Learn More" 링크는 다양한 내용이 있는 MDN 페이지와 연결해 에러의 의미를 설명해준다.
    - 자바스크립트 파일의 이름으로 개발자툴의 디버거 탭을 연결한다. 이 링크를 따라가면, 에러가 발생한 정확한 위치를 찾을 수 있다.
    - 에러가 발생한 줄번호와, 그 줄에서 몇번째 문자에 있는지 알려준다.  여기서는 86번줄, 앞에서 3번째 문자이다

3.  편집기에서 86번째 줄을 보자.

    ```js
    guessSubmit.addeventListener('click', checkGuess);
    ```

4.  "guessSubmit.addeventListener is not a function"라고 에러메시지가 뜨는걸로 보아, 아마 철자가 잘못되었을 것이다. 만약 철자가 애매하거나하면, MDN에서 찾아보는것이 좋을 것이다. 현재로 가장 좋은 방법은 검색엔진에서 "mdn _name-of-feature_" 를 검색하는 것이다. 예를들자면 다음을 살펴보자 -> [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener).
5.  여기서 살펴보며, 함수의 이름 철자가 틀려서 에러가 났음을 알수 있다. 자바스크립트와 같은 프로그래밍은 정확하기 때문에 한글자라도 틀리면 에러가 날 것이다. `addeventListener`를 `addEventListener`러 바꿈으로 에러는 해결된다. 고쳐보자.

> **참고:** See our [TypeError: "x" is not a function](/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function) reference page for more details about this error.

### 반복되는 구문에러

1.  저장하고 새로고침해보자. 하지만 그래도 여전히 에러가 난다.
2.  이제 숫자를 입력하고 "Submit guess" 버튼을 눌러보자. 그런데, 또 다른 에러가 나타났다! ![](variable-is-null.png)
3.  이번에는 에러 메시지가  78번 줄에 "TypeError: lowOrHi is null" 라고 떳다.

    > **참고:** [`Null`](/en-US/docs/Glossary/Null) is a special value that means "nothing", or "no value". So `lowOrHi` has been declared and initialized, but not with any meaningful value — it has no type or value.

    > **참고:** This error didn't come up as soon as the page was loaded because this error occurred inside a function (inside the `checkGuess() { ... }` block). As you'll learn in more detail in our later [functions article](/en-US/docs/Learn/JavaScript/Building_blocks/Functions), code inside functions runs in a separate scope than code outside functions. In this case, the code was not run and the error was not thrown until the `checkGuess()` function was run by line 86.

4.  78번줄은 다음 코드다.

    ```js
    lowOrHi.textContent = 'Last guess was too high!';
    ```

5.  이줄에서는 `lowOrHi`변수의` textContent`속성을 문자열로 지정하지만, `lowOrHi`가 어떤 역할을 하는지 포함하지 않았기 때문에 동작되지 않는다. 왜 그런지 살펴보면, 예제의 `lowOrHi`의 다른 예제를 보면 알 수 있다. 가장 가까이에 잇는 부분은 48번줄에서 찾을 수 있다.

    ```js
    var lowOrHi = document.querySelector('lowOrHi');
    ```

6.  여기서는 변수로 하여금 HTML안의 요소로 정보를 가지도록 하려고 한다. 이 줄이 실행되고 나서 값의 null인지도 확인해보자. 49번줄에 다음 코드를 추가해보자.

    ```js
    console.log(lowOrHi);
    ```

    > **참고:** [`console.log()`](/en-US/docs/Web/API/console/log) is a really useful debugging function that prints a value to the console. So it will print the value of `lowOrHi` to the console as soon as we have tried to set it in line 48.

7.  저장하고 새로고침해보면, 콘솔창에서 `console.log()` 의 결과를 볼 수 있을 것이다. ![](console-log-output.png) 물론, `lowOrHi`'s값은 여전히 null이므로 48번줄은 문제가 있다고 볼 수 있다.

8.  문제가 무엇인지 생각해보자. 49번줄 [`document.querySelector()`](/en-US/docs/Web/API/Document/querySelector) 메소드는 CSS 선택자로금 선택되는 요소의 정보를 갖도록 만든다. 파일을 살펴보면, 다음과 같은 코드를 볼 수 있다.

    ```js
    <p class="lowOrHi"></p>
    ```

9.  따라서 여기에 점(.) 으로 시작되는 클래스 선택자가 필요한 것이다 . 하지만 48번줄의 querySelector() 메소드에서는 바로 이 '점(.)' 이 없다. `lowOrHi`를 `.lowOrHi` 로 바꾸어 문제를 해결할 수 있다.
10. 저장하고 새로고침하면, `console.log() `에서 우리가 원하는 \<p> 요소를 반환할 것이다. 자, 이제 다른 에러가 해결되었다. `console.log()`를 지금 제거해도 되고 나중을 위해 놔둬도 되니 알아서 하자.

> **참고:** See our [TypeError: "x" is (not) "y"](/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type) reference page for more details about this error.

### 세번씩 반복되는 구문에러

1.  이제 프로그램을 계속 실행할수록, 성공횟수는 많아진다. 즉 프로그램이 종료될때까지 정확한 수를 추측하든, 횟수에 상관없이 완벽한 프로그램이 동작된다는 것이다.
2.  여기서 프로그램에 처음에 보았던 똑같던 에러가 발생한다. "TypeError: resetButton.addeventListener is not a function"이라고! 하지만 이번에는 94번줄이라고 표시된다.
3.  94번줄을 보면, 똑같은 실수를 하고 있다는 것을 쉽게 찾아볼 수 있다. 단지 `addeventListener` 를 `addEventListener` 로 철자만 주의해서 바꾸면 된다.

## 논리(Logic) 에러

이제, 프로그램은 잘 작동되지만, 몇 번 프로그램을 돌리면 추측해야 할 수가 항상 1이라는 것을 명백히 알 수 있다. 즉, 프로그램의 목표에 어긋난다는 것이다.

이는 분명 어딘가에 프로그램 논리적으로 무슨 문제가 있다는 것이다.(물론, 에러가 검출되지도 않고, 잘 작동된다)

1.  `randomNumber` 변수를 찾고, 임의의 수를 처음으로 지정된 곳도 찾는다. 임의의 수가 저장된 부분은 아마 44번 줄 언저리일 것이다.

    ```js
    var randomNumber = Math.floor(Math.random()) + 1;
    ```

    또한 한 게임이 끝나면 다시 임의의 수를 지정하는 부분은 아마 113번 줄 정도일 것이다.

    ```js
    randomNumber = Math.floor(Math.random()) + 1;
    ```

2.  `이 줄에서 문제가 발생되었는지 알기위해, console.log()` 를 불러오자. 다음 코드를 앞선 두 코드 아래에 넣는 것도 잊지 말자.

    ```js
    console.log(randomNumber);
    ```

3.  저장하고, 새로고침하게되면 randomNumer 변수가 항상 1이 콘솔창에 표시되는 것을 알 수 있다.

### 논리에 대한 고찰

고치기 전에, 이 코드가 무슨 역할을 하는지 살펴보자. 먼저, 0과 1사이의  임의의 10진수를 생성하는 `Math.random() `을 살펴보자.

```js
Math.random()
```

다음으로 가장 가까운 정수로 전달되는 [`Math.floor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)안의 `Math.random()`의 결과는 넘어간다. 그러고 결과값에 1을 더한다.

```js
Math.floor(Math.random()) + 1
```

0과 1사이의 임의의 10진수와 가장 가까운 수 중에 작은 수는 항상 0이므로, 여기서 1을 더하면 항상 1이 된다.  따라서 가까운 수를 찾기전에 임의수에 100을 곱해야 한다. 다음 코드는 곧 0과 99사이의 수를 나타낸다.

```js
Math.floor(Math.random()*100);
```

그러므로 여기서 1을 더하게 되면, 우리가 원하는 1과 100사이의 수가 될 것이다.

```js
Math.floor(Math.random()*100) + 1;
```

코드를 위와 같이 고치고, 저장 후 새로고침해보자. 그러면 프로그램은 우리가 생각하는 대로 작동될 것이다.

## 다른 일반적인 에러

코드상에서 맞딱드릴 수 있는 에러는 여러가지가 있다. 이번 섹션은 이러한 에러들에 대해 말해줄 것이다.

### SyntaxError: missing ; before statement

이번 에러는 일반적으로 코드의 끝부분에 세미콜론이 빠졌을 때 발생하지만, 때로는 헷갈릴 때도 있다. 예를 들어 `checkGuess()` 함수안의 코드를 고칠때를 살펴보자.

```js
var userGuess = Number(guessField.value);
```

이 코드를 다음코드로 바꾼다.

```js
var userGuess === Number(guessField.value);
```

당연히 이 둘의 코드가 다르기때문에 오류가 발생했을 것이다. 즉, 대입 연산자(=, 값을 변수에 지정하도록 함)와 비교연산자(===, 어떤 값과 다른값을 비교할때 쓰며, true와false중 하나가 반환됨)를 함께 혼동해서 쓰면 안된다.

> **참고:** See our [SyntaxError: missing ; before statement](/en-US/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement) reference page for more details about this error.

### 어떤 값을 입력해도, 항상 성공표시가 뜬다.

이 또한, 앞처럼 대입연산자와 비교연산자를 혼동해서 사용한 경우이다. 예를들어, `checkGuess()`함수 안의 다음코드

```js
if (userGuess === randomNumber) {
```

를

```js
if (userGuess = randomNumber) {
```

로 바꾼다면, 조건문은 항상 참이므로, 프로그램은 항상 성공했다고 뜰 것이니 주의하자!

### SyntaxError: missing ) after argument list

이는 보통 함수나 메소드 호출의 끝부분에 괄호 닫는것을 빼먹은 것을 의미한다.

> **참고:** See our [SyntaxError: missing ) after argument list](/en-US/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) reference page for more details about this error.

### SyntaxError: missing : after property id

이 오류는 자바스립트의 객체가 잘못되었을 때 발생하지만,  다음의 경우에는 변경할 수 있다.

```js
function checkGuess() {
```

\->

```js
function checkGuess( {
```

이는 브라우저로 하여금 함수안의 컨텐츠를 인자로 함수에게 넘겨주는 역할을 한다. 괄호에 주의하도록 하자!

### SyntaxError: missing } after function body

일반적으로 함수나 조건문에서 중괄호를 닫지 않아서 발생한다.  `checkGuess()` 함수의 아래부분의 중괄호를 닫지않아서 에러가 발생한다.

### SyntaxError: expected expression, got '_string_' or SyntaxError: unterminated string literal

이는 보통 문자열을 열거나 닫는 따옴표를 생략한 경우 에러가 발생한다.위의 첫 번째 에러를 살펴보면, *string은* 문자열이 시작하는 부분에서 따옴표 대신 브라우저가 검색한 예상치 못한 문자열로 대체된다. 두번째 에러는 따옴표로 문자열이 끝나지 못했기 때문에 발생했다.

모든 경우의 에러를 보았을 때, 지금까지 살펴본 예제에 어떻게 씨름했는지 생각해보자. 에러가 발생하면 , 발생된 줄 번호를 보고, 그 줄로 이동해 무엇이 잘못되었는지 살펴보는것이다.  이 오류가 반드시 해당 라인에 있는 것은 아니며, 위에서 언급되어진 문제로 인해  오류가 발생하지 않을 수도 있다는 점을 명심하자!

> **참고:** See our [SyntaxError: Unexpected token](/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token) and [SyntaxError: unterminated string literal](/en-US/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal) reference pages for more details about these errors.

## 요약

자, 지끔까지 자바스크립트 프로그램에서의 에러의 특징에 대해 살펴보았다.물론, 코드상의 에러가 항상 간단한 것만은 아니다. 하지만 최소한 업무량은 줄어줄 것이며, 작업도 빠르게 마치도록 해줄 것이다.

## 더보기

- 여기서 소개하지 못한 에러들도 많으니, 다음 링크에서 정보들을 찾아보며 그때그때 자세히 알아보자l — [JavaScript error reference](/en-US/docs/Web/JavaScript/Reference/Errors).
- 이것을 보고도 에러를 해결하지 힘들다면 MDN 토론 포럼로 에러를 보내면 도와줄 것이다. 또한 다른 코드를 살펴보는 것도 좋다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
