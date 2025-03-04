---
title: 뭐가 잘못됐을까요? JavaScript 문제 해결
slug: Learn_web_development/Core/Scripting/What_went_wrong
original_slug: Learn/JavaScript/First_steps/What_went_wrong
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

앞선 글의 "숫자 알아맞히기" 게임을 따라 만들다가 프로그램이 동작하지 않았나요? 두려워 마세요. 이 글에서는 JavaScript 프로그램에서 그런 문제를 찾아 수정하는 방법에 대한 팁을 제공하여 여러분이 머리카락을 쥐어뜯지 않도록 지켜드리겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 이해 능력, HTML과 CSS 기초, JavaScript 기본 개념
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        스스로의 코드에서 문제를 수정할 수 있는 능력과 자신감 얻기
      </td>
    </tr>
  </tbody>
</table>

## 오류의 종류

일반적으로, 여러분의 코드에서 뭔가 잘못됐다면 마주하게 될 오류에는 크게 두 종류가 있습니다.

- **구문 오류**: 코드에 잘못된 철자가 있으면 발생하는 오류로, 프로그램이 아예 구동하지 못하거나 중간에 멈춰버리는 현상을 일으키며, 모종의 오류 메시지도 나타납니다. 올바른 도구와, 메시지의 뜻만 파악하고 있으면 그럭저럭 고칠 만합니다!
- **논리 오류**: 구문은 올바르지만 의도한 동작과 실제 코드에 차이가 있는 경우입니다. 따라서 프로그램은 성공적으로 돌아가지만 잘못된 결과를 낳습니다. 보통 오류를 직접 가리키는 메시지가 없기 때문에 구문 오류보다 고치기도 힘든 편입니다.

더 자세히 들여다보면 다른 차별화 요소가 몇 가지 더 있습니다. 하지만 이렇게만 나눠도 커리어의 초반에는 부족하지 않을 겁니다. 앞으로 이 두 가지 유형을 모두 살펴볼 것입니다.

## 오류를 포함한 예제

시작하기 앞서서 숫자 맞히기 게임으로 돌아갑시다. 하지만 여기서는 의도적으로 오류를 추가한 버전을 사용할 것입니다. GitHub로 이동하여 [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) 파일의 로컬 복사본을 만듭니다.([실행 결과 미리보기](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. 시작하려면 즐겨 사용하는 텍스트 편집기와 브라우저에서 로컬 사본을 엽니다.
2. 게임 플레이를 시도해 보세요. "Submit guess" 버튼을 누르면 작동하지 않는 것을 알 수 있습니다.

> [!NOTE]
> 직접 작성한 게임 예제가 동작하지 않는 경우에도 우선 예제 파일로 진행하는 걸 추천합니다. 이 글에 적힌 기법을 먼저 알아본 다음에 여러분의 코드로 돌아가서 활용하시면 됩니다.

이 시점에서 개발자 콘솔을 참조하여 구문 오류가 발생하는지 확인한 다음 오류를 수정해 보겠습니다. 아래에서 방법을 알아보도록 하겠습니다.

## 구문 오류 수정하기

앞선 과정에서 [JavaScript 개발자 도구 콘솔](/ko/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)에 간단한 JavaScript 명령을 입력해 보았습니다. 콘솔을 여는 방법이 기억나지 않으면 이전 링크를 따라 알아보시면 됩니다. 하지만 콘솔은 단순히 명령을 입력하는 기능보다 유용한데, 브라우저의 JavaScript 엔진이 읽은 JavaScript 안에 구문 오류가 존재하면 콘솔에 그 오류가 기록되기 때문입니다. 이제 오류를 잡아 볼 것입니다.

1. `number-game-errors.html`을 연 탭으로 이동해서 JavaScript 콘솔을 엽니다. 스크린샷과 비슷한 내용의 오류 메시지를 볼 수 있어야 합니다.
   ![Firefox의 "숫자 알아맞히기 게임" 데모 페이지입니다. JavaScript 콘솔에 한 가지 오류가 표시됩니다. "X TypeError: guessSubmit.addeventListener is not a function [자세히 알아보기](number-game-errors.html:86:3)".](not-a-function.png)
2. 오류 메시지의 첫 줄은 다음과 같습니다.

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:86:15
   ```

   - 첫 번째 부분인 `Uncaught TypeError: guessSubmit.addeventListener is not a function`에서 무엇이 잘못되었는지를 알 수 있습니다.
   - 두 번째 부분인 `number-game-errors.html:86:15`는 코드에서 오류가 발생한 위치를 알려줍니다. "number-game-errors.html" 파일의 86번째 줄, 15번째 문자입니다.

3. 코드 편집기에서 86번째 줄을 보면 다음과 같은 줄을 찾을 수 있습니다.

   > [!WARNING]
   > 오류가 86번째 줄에 없을 수 있습니다. 로컬 컴퓨터에서 라이브 서버를 실행하는 확장 기능이 있는 코드 편집기를 사용하는 경우 추가 코드가 삽입됩니다. 이 때문에 개발자 도구는 86번째 줄이 아닌 다른 줄에서 오류가 발생한 것으로 표시합니다.

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. 오류 메시지 "guessSubmit.addeventListener is not a function"은 우리가 호출한 함수를 JavaScript 인터프리터가 인식하지 못했다는 뜻입니다. 보통 이 오류는 철자를 잘못 적은 경우 발생합니다. 구문의 올바른 철자가 확실하지 않을 땐 MDN에서 기능 참고서를 살펴보는 게 도움이 됩니다. 현재 가장 좋은 방법은 자주 사용하는 검색 엔진에서 "mdn '기능 이름'"으로 검색하는 것입니다. 이 상황에서 시간을 절약하는 방법은 [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)입니다.

5. `addEventListener()` 페이지를 보면 함수 이름의 철자가 잘못되어 오류가 발생한 것으로 보입니다. JavaScript는 대소문자를 구분하므로 철자는 물론 대소문자도 잘못 적으면 오류가 발생합니다. `addeventListener`를 `addEventListener`로 수정하면 이 문제가 해결됩니다. 지금 변경해 보세요.

> [!NOTE]
> MDN의 [TypeError: "x" is not a function](/ko/docs/Web/JavaScript/Reference/Errors/Not_a_function) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### 구문 오류 2회차

1. 페이지를 저장하고 새로고침하면 오류가 사라진 것을 확인할 수 있습니다.
2. 이제 숫자를 입력하고 Submit guess 버튼을 누르면 또 다른 오류가 표시됩니다.
   ![동일한 "숫자 알아맞히기 게임" 데모의 스크린샷입니다. 이번에는 콘솔에 다른 오류가 표시되며 "X TypeError: lowOrHi is null"라는 메시지가 표시됩니다.](variable-is-null.png)

3. 이번 오류는 다음과 같습니다.

   ```plain
   Uncaught TypeError: can't access property
   "textContent", lowOrHi is null
   ```

   사용 중인 브라우저에 따라 여기에 다른 메시지가 표시될 수 있습니다. 위의 메시지는 Firefox에 표시되는 메시지이지만, 예를 들어 Chrome에는 다음과 같은 메시지가 표시됩니다.

   ```plain
   Uncaught TypeError: Cannot set properties of null
   (setting 'textContent')
   ```

   동일한 오류이지만 브라우저마다 다른 방식으로 설명합니다.

   > [!NOTE]
   > 이 오류는 함수 `checkGuess() {}` 블록에서 발생했기 때문에 페이지가 로드되자마자 나타나지 않았습니다. 나중에 [함수 문서](/ko/docs/Learn/JavaScript/Building_blocks/Functions)에서 자세히 알아보겠지만 함수 내부 코드는 함수 외부 코드와 별도의 범위에서 실행됩니다. 이 경우 코드가 시행되지 않았고 86번째 줄에서 `checkGuess()` 함수가 실행될 때까지 오류가 발생하지 않았습니다.

4. 오류에 표시된 줄 번호는 80입니다. 80번째 줄을 살펴보면 다음 코드를 볼 수 있습니다.

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. 이 줄은 `lowOrHi` 변수의 `textContent` 속성을 텍스트 문자열로 설정하려고 시도하고 있지만, `lowOrHi`에 예상되는 내용이 포함되어 있지 않기 때문에 작동하지 않습니다. 왜 그런지 코드에서 `lowOrHi`의 다른 인스턴스를 검색해 보겠습니다. 가장 먼저 찾을 수 있는 인스턴스는 49번째 줄에 있습니다.

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. 여기서는 문서 HTML의 요소에 대한 참조를 변수에 저장하려고 시도하고 있습니다. 이 줄을 실행한 후 변수에 무엇이 포함되는지 살펴봅시다. 50번째 줄에 다음 코드를 추가합니다.

   ```js
   console.log(lowOrHi);
   ```

   이 코드는 49번째 줄에서 설정하려고 시도한 후 콘솔에 `lowOrHi`값을 출력합니다. 자세한 내용은[`console.log()`](/ko/docs/Web/API/console/log_static)를 참조하세요.

7. 저장하고 새로고침하면 `console.log()`가 콘솔에 기록한 결과를 볼 수 있습니다.
   ![동일한 데모의 스크린샷입니다. 콘솔에 단순히 "null"을 읽는 하나의 로그 문이 표시됩니다.](console-log-output.png)
   이 시점에서 `lowOrHi`의 값은 `null`이며, 이는 Firefox 오류 메시지인 `lowOrHi is null`과 일치합니다. 따라서 49번 줄에 확실한 문제가 있습니다. [null](/ko/docs/Web/JavaScript/Reference/Operators/null) 값은 "아무것도 없음" 또는 "값 없음"을 의미합니다. 따라서 요소에 `lowOrHi`를 설정하는 코드 부분이 잘못되었습니다.

8. 어떤 문제일지 생각해 봅시다. 48번째 줄은 [`document.querySelector()`](/ko/docs/Web/API/Document/querySelector) 메서드를 사용해, CSS 선택자로 선택한 요소에 대한 참조를 가져옵니다. 우리 파일의 더 위쪽에서 우리가 찾으려는 문단을 볼 수 있습니다.

   ```html
   <p class="lowOrHi"></p>
   ```

9. 따라서 우리가 사용했어야 하는 선택자는 마침표(`.`)로 시작하는 클래스 선택자였는데, 49번째 줄의 `querySelector()` 메서드에 제공한 선택자에는 마침표가 없습니다. 이것이 문제일 수 있습니다! `lowOrHi`를 `.lowOrHi`로 바꿔보세요.
10. 저장 후 다시 새로고침해보면 `console.log()` 명령문이 우리가 원하는 `<p>` 요소를 반환하는 모습을 볼 수 있습니다. 또 다른 오류를 고쳤습니다! 이제 `console.log()`를 삭제하거나 나중에 참고할 수 있도록 보관할 수 있습니다.

> [!NOTE]
> MDN의 [TypeError: "x" is (not) "y"](/ko/docs/Web/JavaScript/Reference/Errors/Unexpected_type) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### 구문 오류 3회차

1. 이제는 게임을 성공적으로 플레이할 수 있습니다. 올바른 숫자를 맞히거나 추측이 부족하여 게임이 종료될 때까지 게임이 정상적으로 진행됩니다.
2. 게임이 정상적으로 끝나야 하는 순간, 다시 실패해 버립니다. 맨 처음 봤던 것과 같은 종류의 오류, "TypeError: resetButton.addeventListener is not a function"가 출력됩니다! 하지만 이번에는 94번째 줄에서 발생한 것으로 표시됩니다.
3. 94번째 줄을 확인하면 똑같은 실수가 있었다는 걸 알 수 있습니다. `addeventListener`를 `addEventListener`로 바꾸기만 하면 됩니다. 바로 수정해 보세요.

## 논리 오류

여기까지 왔으면 게임이 정상적으로 플레이되지만, 몇 번 플레이하고 나면 게임이 항상 1을 "무작위" 숫자로 선택한다는 사실을 알게 될 것입니다. 확실히 저희가 원하는 게임 방식이 아닙니다!

게임 논리 어딘가에 확실히 문제가 있습니다. 오류를 반환하진 않지만, 정상적인 동작을 하지 못하기 때문입니다.

1. `randomNumber`변수와 난수가 처음 설정된 줄을 검색합니다. 게임 시작 시 추측하고자 하는 난수를 저장하는 인스턴스는 45번째 줄 근처에 있어야 합니다.

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. 후속 라운드를 시작할 때 새로운 무작위 수를 생성하는 코드는 113번째 줄 근처입니다.

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. 이 줄이 실제로 문제인지 확인하려면 이전에 사용한 `console.log()`를 다시 사용하여 위의 두 줄 바로 아래에 다음 줄을 삽입해 보겠습니다.

   ```js
   console.log(randomNumber);
   ```

4. 저장하고 새로고침한 다음 게임을 몇 판 플레이하면 콘솔에 기록되는 각 지점에서 `randomNumber`가 1과 같다는 것을 확인할 수 있습니다.

### 논리 파고들기

이 문제를 해결하기 위해 이 줄이 어떻게 작동하는지 살펴봅시다. 먼저 [`Math.random()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random)을 호출하여 0과 1 사이의 0.5675493843와 같은 임의의 수를 생성합니다.

```js
Math.random();
```

다음으로, `Math.random()`을 호출한 결과를 [`Math.floor()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)에 전달하고, 전달된 숫자를 가장 가까운 정수로 반올림합니다. 그런 다음 그 결과에 1을 더합니다.

```js
Math.floor(Math.random()) + 1;
```

0과 1 사이의 무작위 수를 버림하면 결과는 항상 0이니, 여기에 1을 더한 결과는 항상 1입니다. 무작위 수를 버림하기 전에 먼저 100을 곱해야 원하는 숫자를 얻을 수 있을 겁니다. 다음 코드는 0부터 99까지의 무작위 수를 생성합니다.

```js
Math.floor(Math.random() * 100);
```

따라서 여기에 1을 더하면 1과 100 사이의 수를 얻을 수 있습니다.

```js
Math.floor(Math.random() * 100) + 1;
```

이렇게 두 줄을 모두 고친 다음 저장하고 새로고침하면 이제 게임이 의도한 대로 재생됩니다!

## 다른 일반적인 오류

코드에서 발견할 수 있는 다른 일반적인 오류도 있습니다. 이 섹션에서는 이러한 오류를 중점적으로 설명합니다.

### SyntaxError: missing ; before statement

이 오류는 일반적으로 코드 줄 중 하나 끝에 세미콜론을 놓쳤음을 의미하지만 때로는 더 복잡할 수 있습니다. 예를 들어 `checkGuess()`함수 내에서 이 줄을 변경하는 경우입니다

```js
const userGuess = Number(guessField.value);
```

이렇게 바꾸면,

```js example-bad
const userGuess === Number(guessField.value);
```

이 오류는 사용자가 다른 작업을 수행하려고 한다고 생각하기 때문에 발생합니다. 변수를 어떤 값과 동일하게 만드는 할당 연산자(`=`)와, 어떤 값이 다른 값과 같은지 판별해서 `true`/`false`를 반환하는 일치 연산자(`===`)를 혼동하지 않도록 주의해야 합니다.

> [!NOTE]
> MDN의 [SyntaxError: missing ; before statement](/ko/docs/conflicting/Web/JavaScript/Reference/Errors/Unexpected_token) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### 어떤 값을 입력해도 항상 이겼다고 함

이 현상 또한 할당 연산자와 일치 연산자를 혼동해서 발생할 수 있습니다. 예를 들어 `checkGuess()`내에서 이 줄을 변경한다고 가정해 보겠습니다.

```js
if (userGuess === randomNumber) {
```

이렇게 바꾸면,

```js
if (userGuess = randomNumber) {
```

조건이 항상 `true`가 돼서 언제나 게임을 이겼다고 판별합니다. 조심하세요!

### SyntaxError: missing ) after argument list

이 오류는 단순한 편입니다. 일반적으로 함수/메서드 호출이 끝날 때 닫는 괄호를 놓쳤음을 의미합니다.

> [!NOTE]
> MDN의 [SyntaxError: missing ) after argument list](/ko/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### SyntaxError: missing : after property id

이 오류는 일반적으로 잘못 형성된 JavaScript 객체와 관련이 있지만, 이 경우에는 다음과 같이 변경하여 문제를 해결했습니다.

```js
function checkGuess() {
```

이렇게 바꾸기만 해도 발생합니다.

```js
function checkGuess( {
```

브라우저가 함수의 본문을 본문이 아니라 매개변수로 잘못 인식하기 때문입니다. 괄호를 주의하세요!

### SyntaxError: missing } after function body

쉬운 오류입니다. 일반적으로 함수나 조건문 구조에 사용한 중괄호를 누락할 때 발생합니다. 예컨대 `checkGuess()` 함수 끝부분의 닫는 중괄호 중 하나를 삭제하여 발생했습니다.

### SyntaxError: expected expression, got '_string_' 또는 SyntaxError: unterminated string literal

이 두 오류는 대개 문자열 값의 열거나 닫는 따옴표가 빠지면 발생합니다. 첫 번째 오류의 _string_ 부분에는 브라우저가 따옴표 대신 마주친, 예상치 못한 문자 또는 문자열이 들어갑니다. 두 번째 오류는 따옴표로 닫지 않은 문자열이 있다는 뜻입니다.

이러한 모든 오류에 대해 연습에서 살펴본 예제를 어떻게 해결했는지 생각해 봅시다. 오류가 발생하면 주어진 줄 번호를 보고 해당하는 줄로 이동하여 무엇이 잘못되었는지 찾아봅니다. 오류가 반드시 해당하는 줄에 있는 것은 아니며, 위에서 인용한 것과 똑같은 문제로 인해 오류가 발생하지 않을 수도 있다는 점을 명심해야 합니다!

> [!NOTE]
> MDN의 [SyntaxError: Unexpected token](/ko/docs/Web/JavaScript/Reference/Errors/Unexpected_token)과 [SyntaxError: unterminated string literal](/ko/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) 참고서에서 두 오류에 대한 자세한 설명을 확인하세요.

## 요약

지금까지 간단한 JavaScript 프로그램에서 오류를 파악하는 기본 사항을 알아봤습니다. 코드에서 무엇이 잘못되었는지 알아내는 것이 항상 그렇게 간단하지는 않겠지만, 적어도 이렇게 하면 몇 시간의 잠을 절약할 수 있고 특히 학습 여정의 초기 단계에서 일이 제대로 풀리지 않을 때 조금 더 빠르게 진행할 수 있습니다.

## 같이 보기

- 이 글에는 없지만, JavaScript에는 더 많은 종류의 오류들이 있습니다. [JavaScript 오류 참고서](/ko/docs/Web/JavaScript/Reference/Errors)에서 오류 각각의 뜻을 자세히 설명하고 있습니다.
- 이 글을 마친 후에도 어떻게 수정해야 할지 모르는 오류가 있으면 도움을 받을 수 있습니다! [커뮤니케이션 채널](/ko/docs/MDN/Community/Communication_channels)에서 도움을 요청하세요. 오류가 무엇인지 알려주시면 최선을 다해 도와드리겠습니다. 여러분의 코드를 문의에 포함하면 더 좋습니다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
