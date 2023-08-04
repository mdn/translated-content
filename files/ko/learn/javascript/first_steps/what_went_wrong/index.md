---
title: 뭐가 잘못됐을까요? JavaScript 문제 해결
slug: Learn/JavaScript/First_steps/What_went_wrong
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

앞선 글의 "숫자 알아맞히기" 게임을 따라 만들다가 프로그램이 동작하지 않았나요? 두려워 마세요. 이 글에서는 JavaScript 프로그램에서 그런 문제를 찾아 수정하는 방법에 대한 팁을 제공하여 여러분이 머리카락을 쥐어뜯지 않도록 지켜드리겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 이해 능력, HTML과 CSS 기초, JavaScript 기본 개념.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        스스로의 코드에서 문제를 수정할 수 있는 능력과 자신감 얻기.
      </td>
    </tr>
  </tbody>
</table>

## 오류의 종류

일반적으로, 여러분의 코드에서 뭔가 잘못됐다면 마주하게 될 오류에는 크게 두 종류가 있습니다.

- **구문 오류**: 코드에 잘못된 철자가 있으면 발생하는 오류로, 프로그램이 아예 구동하지 못하거나 중간에 멈춰버리는 현상을 일으키며, 모종의 오류 메시지도 나타납니다. 올바른 도구와, 메시지의 뜻만 파악하고 있으면 그럭저럭 고칠 만합니다!
- **논리 오류**: 구문은 올바르지만 의도한 동작과 실제 코드에 차이가 있는 경우입니다. 따라서 프로그램은 성공적으로 돌아가지만 잘못된 결과를 낳습니다. 보통 오류를 직접 가리키는 메시지가 없기 때문에 구문 오류보다 고치기도 힘든 편입니다.

음, 이렇게 간단하게 끝은 아니고, 더 파고 들면 다른 분류도 있습니다. 하지만 이렇게만 나눠도 커리어의 초반에는 부족하지 않을 겁니다. 이제 아래로 나아가면서 두 종류 모두 하나씩 알아보겠습니다.

## 오류를 포함한 예제

시작하기 앞서서 숫자 맞히기 게임으로 돌아갑시다. 하지만 여기서는 의도적으로 오류를 추가한 버전을 사용할 겁니다. GitHub에 가서 [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) 파일의 로컬 복사본을 만들어 주세요([실행 결과 미리보기](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. 시작하려면 로컬 복사본을 선호하는 텍스트 편집기와 브라우저에서 열어주세요.
2. 게임 플레이를 시도해 보세요. "Submit guess" 버튼을 눌러도 아무 일이 없다는 걸 볼 수 있습니다.

> **참고:** 직접 작성한 게임 예제가 동작하지 않는 경우에도 우선 예제 파일로 진행하는 걸 추천합니다. 이 글에 적힌 기법을 먼저 알아본 다음에 여러분의 코드로 돌아가서 활용해 보세요.

이제 개발자 콘솔을 열어 구문 오류가 기록됐는지 확인하세요. 오류가 보인다면 수정해 봅시다. 바로 아래에서 그 방법을 확인하세요.

## 구문 오류 고치기

앞선 과정에서 [JavaScript 개발자 도구 콘솔](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)에 간단한 JavaScript 명령을 입력해 봤었습니다. (콘솔을 여는 방법이 기억나지 않으면 링크에서 알아보세요) 하지만 콘솔은 단순히 명령을 입력하는 기능보다 유용한데, 브라우저의 JavaScript 엔진이 읽은 JavaScript 안에 구문 오류가 존재하면 콘솔에 그 오류가 기록되기 때문입니다. 오류를 잡아 봅시다.

1. `number-game-errors.html`을 연 탭으로 이동해서 JavaScript 콘솔을 여세요. 스크린샷과 비슷한 내용의 오류 메시지를 볼 수 있어야 합니다. ![](not-a-function.png)
2. 이 오류는 찾기 쉬운 편이고, 브라우저도 도움이 될 다양한 정보를 제공합니다. (위의 스크린샷은 Firefox에서 촬영했지만 다른 브라우저도 비슷한 정보를 제공합니다) 우리가 알 수 있는 사실은, 왼쪽에서 오른쪽으로...

   - 붉은 "x"는 오류라는 뜻입니다.
   - 오류 메시지는 무엇이 잘못됐는지 나타냅니다. "TypeError: guessSubmit.addeventListener is not a function"
   - "Learn More" 링크는 오류의 뜻을 더 자세히 알아볼 수 있는 MDN 페이지로 향합니다.
   - JavaScript 파일 이름은 개발자 도구의 디버거 탭을 엽니다. 이 링크를 따라가면 오류가 발생한 정확한 위치를 볼 수 있습니다.
   - 오류가 발생한 줄 번호와, 오류를 처음으로 마주한 문자 번호를 볼 수 있습니다. 이 예제에서는 86번째 줄, 3번째 글자입니다.

3. 코드 편집기에서 86번째 줄을 보면 다음 코드를 볼 수 있습니다.

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. 오류 메시지 "guessSubmit.addeventListener is not a function"은 우리가 호출한 함수를 JavaScript 인터프리터가 인식하지 못했다는 뜻입니다. 보통 이 오류는 철자를 잘못 적은 경우 발생합니다. 구문의 올바른 철자가 확실하지 않을 땐 MDN에서 기능 참고서를 살펴보는 게 도움이 되곤 합니다. 선호하는 검색 엔진에서 "mdn '기능 이름'"을 검색해 보세요. 하지만 지금은 시간을 아끼기 위해 링크를 바로 드리겠습니다. [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)입니다.
5. `addEventListener()` 페이지를 보니, 함수 이름을 잘못 적었네요! JavaScript는 대소문자를 구분한다는 점을 기억하세요. 철자는 물론 대소문자도 잘못 적으면 오류가 발생합니다. `addeventListener`를 `addEventListener`로 수정하면 될 겁니다. 지금 해보세요.

> **참고:** MDN의 [TypeError: "x" is not a function](/ko/docs/Web/JavaScript/Reference/Errors/Not_a_function) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### 구문 오류 2회차

1. 페이지를 저장하고 새로고침하세요. 오류가 사라진 모습을 확인할 수 있어야 합니다.
2. 이제 숫자를 입력하고 Submit guess 버튼을 누르면... 다른 오류네요! ![](variable-is-null.png)
3. 이번 오류는 78번째 줄에서 "TypeError: lowOrHi is null"입니다.

   > **참고:** [`Null`](/ko/docs/Glossary/Null)은 "아무것도 아닌 것", 또는 "값이 없음"을 뜻하는 특별한 값입니다. 즉 `lowOrHi`가 선언됐고 초기화도 됐지만 의미 있는 값을 가지진 못한 겁니다. 타입도, 값도 없는 거죠.

   > **참고:** 이 오류는 페이지를 불러온 직후에 나타나진 않았는데, 함수 내부(`checkGuess() { ... }` 블록의 안)에서 발생했기 때문입니다. 이후 [함수에 관한 글](/ko/docs/Learn/JavaScript/Building_blocks/Functions)에서 더 알아보겠지만, 함수 안의 코드는 함수 바깥과 다른 범위(스코프)에서 동작합니다. 이 예제에서는 86번째 줄에 의해 `checkGuess()` 함수가 구동하기 전에는 코드가 동작하지 않았고, 따라서 오류도 발생하지 않았습니다.

4. 78번째 줄을 보면 다음 코드를 볼 수 있습니다.

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. 위의 코드에서는 `lowOrHi` 상수의 `textContent` 속성에 텍스트 문자열을 할당하려고 시도했지만, `lowOrHi`에 들어있어야 할 값이 없어서 동작하지 못했습니다. 이유를 알아봅시다. 코드 내에서 `lowOrHi`가 등장하는 다른 곳을 탐색해 보세요. JavaScript에서 `lowOrHi`가 제일 먼저 등장하는 곳은 48번째 줄입니다.

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. 여기서는 문서 HTML의 요소 참조를 변수에 저장하려고 시도하고 있습니다. 48번째 줄이 실행된 후에 `lowOrHi`가 `null`인지 확인해 봅시다. 49번째 줄에 아래의 코드를 추가하세요.

   ```js
   console.log(lowOrHi);
   ```

   > **참고:** [`console.log()`](/ko/docs/Web/API/console/log)는 콘솔에 값을 기록하는 엄청나게 유용한 디버깅 함수입니다. 따라서 이 코드는 48번째 줄에서 `lowOrHi`의 값을 설정하려고 시도한 직후에 그 결과를 콘솔에 기록합니다.

7. 저장하고 새로고침하세요. `console.log()`가 콘솔에 기록한 결과를 볼 수 있을 겁니다. ![](console-log-output.png) `lowOrHi`의 값이 명백히 `null`이므로, 48번째 줄에 문제가 있는 게 틀림없습니다.
8. 어떤 문제일지 생각해 봅시다. 48번째 줄은 [`document.querySelector()`](/ko/docs/Web/API/Document/querySelector) 메서드를 사용해, CSS 선택자로 선택한 요소의 참조를 가져옵니다. 우리 파일의 더 위쪽에서 우리가 찾으려는 문단을 볼 수 있습니다.

   ```html
   <p class="lowOrHi"></p>
   ```

9. 보아하니 우리가 사용했어야 하는 선택자는 마침표(`.`)로 시작하는 클래스 선택자였는데, 48번째 줄의 `querySelector()` 메서드에 제공한 선택자에는 마침표가 없습니다. 이게 문제일 수 있겠네요! `lowOrHi`를 `.lowOrHi`로 바꿔보세요.
10. 저장 후 다시 새로고침해보면 `console.log()` 명령문이 우리가 원하는 `<p>` 요소를 반환하는 모습을 볼 수 있습니다. 휴, 다른 오류를 고쳤네요. 이제 `console.log()`는 지워도 되고, 아니면 나중에 다시 보기 위해 남겨놔도 됩니다. 선호하는 쪽으로 선택하세요.

> **참고:** MDN의 [TypeError: "x" is (not) "y"](/ko/docs/Web/JavaScript/Reference/Errors/Unexpected_type) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### 구문 오류 3회차

1. 이제는 게임을 성공적으로 플레이할 수 있습니다. 올바른 숫자를 입력하거나, 턴을 모두 소모하기 전까지는요.
2. 게임이 정상적으로 끝나야 하는 순간, 다시 실패해버립니다. 맨 처음 봤던 것과 같은 종류의 오류, "TypeError: resetButton.addeventListener is not a function"과 함께요. 하지만 이번에는 94번째 줄에서 발생할 겁니다.
3. 94번째 줄을 확인하면 똑같은 실수가 있었다는 걸 알 수 있습니다. `addeventListener`를 `addEventListener`로 바꾸기만 하면 됩니다. 바로 수정해 보세요.

## 논리 오류

여기까지 왔으면 게임을 끝까지 플레이할 수 있을 겁니다. 하지만 몇 번 해보면, 우리가 맞춰야 할 "무작위" 숫자가 항상 1이라는 사실을 깨닫게 됩니다. 의도한 동작과 상당한 거리가 있네요!

게임 논리 어딘가에 확실히 문제가 있습니다. 오류를 반환하진 않지만, 정상적인 동작을 하지 못하기 때문입니다.

1. `randomNumber` 변수에 무작위 수를 설정하는 부분을 찾아보세요. 게임을 시작할 때 맞혀야 하는 무작위 수는 44번째 줄 부근에서 저장합니다.

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. 후속 라운드를 시작할 때 새로운 무작위 수를 생성하는 코드는 113번째 줄 근처입니다.

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. 위의 두 줄이 정말 문제일까요? 이전에 만났던 `console.log()`를 다시 꺼내옵시다. 각각의 줄 바로 밑에 다음 코드를 추가하세요.

   ```js
   console.log(randomNumber);
   ```

4. 저장, 새로고침, 그리고 몇 판 플레이해 보세요. 콘솔에 기록하는 시점에서, `randomNumber`가 정말 1임을 볼 수 있습니다.

### 논리 파고들기

문제를 수정하기 전에 이 코드가 어떻게 동작하는지 상기해 봅시다. 먼저, 0.5675493843처럼 0과 1 사이의 무작위 10진수 숫자를 생성하는 [`Math.random()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random)을 호출합니다.

```js
Math.random();
```

다음으로, `Math.random()`을 호출한 결과를 [`Math.floor()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)에 제공합니다. `Math.floor()`는 주어진 수의 버림을 반환합니다. 그리고 여기에 1을 더합니다.

```js
Math.floor(Math.random()) + 1;
```

0과 1 사이의 무작위 10진수 수를 버림하면 결과는 항상 0이니, 여기에 1을 더한 결과는 항상 1입니다. 무작위 수를 버림하기 전에 먼저 100을 곱해야 원하는 숫자를 얻을 수 있을 겁니다. 다음 코드는 0부터 99까지의 무작위 수를 생성합니다.

```js
Math.floor(Math.random() * 100);
```

그러므로, 여기에 1을 더하면 1과 100 사이의 수를 얻을 수 있습니다.

```js
Math.floor(Math.random() * 100) + 1;
```

두 줄 모두 이렇게 고친 후에 저장하고 새로고침해보세요. 이제 처음 의도했던 대로 게임을 플레이할 수 있을 겁니다.

## 다른 일반적인 오류

코드를 작성하다 보면 자주 마주치는 몇몇 오류들이 더 있습니다. 여기서는 그런 오류를 설명해 보겠습니다.

### SyntaxError: missing ; before statement

이 오류는 여러분의 코드 어딘가의 줄 끝에 세미콜론을 빠뜨렸을 때 보통 발생하지만, 간혹 더 알아채기 힘든 원인으로 인해 나타나기도 합니다. 예를 들어, `checkGuess()` 함수의 아래 코드를...

```js
const userGuess = Number(guessField.value);
```

이렇게 바꾸면,

```js
const userGuess === Number(guessField.value);
```

전혀 다른 작업으로 인식해서 오류를 던질 겁니다. 변수를 어떤 값과 동일하게 만드는 할당 연산자(`=`)와, 어떤 값이 다른 값과 같은지 판별해서 `true`/`false`를 반환하는 일치 연산자(`===`)를 헷갈리지 않도록 주의하세요.

> **참고:** MDN의 [SyntaxError: missing ; before statement](/ko/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### 어떤 값을 입력해도 항상 이겼다고 함

이 현상 또한 할당과 일치 연산자를 혼동해서 발생할 수 있습니다. 예를 들어, `checkGuess()` 함수의 아래 코드를...

```js
if (userGuess === randomNumber) {
```

이렇게 바꾸면,

```js
if (userGuess = randomNumber) {
```

조건이 항상 `true`가 돼서 언제나 게임을 이겼다고 생각할 겁니다. 조심하세요!

### SyntaxError: missing ) after argument list

이건 단순한 편입니다. 보통 함수나 메서드를 호출할 때 닫는 괄호를 누락하면 발생합니다.

> **참고:** MDN의 [SyntaxError: missing ) after argument list](/ko/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) 참고서에서 오류에 대한 자세한 설명을 확인하세요.

### SyntaxError: missing : after property id

일반적으로는 JavaScript 객체를 잘못된 형태로 작성했을 때 발생하지만, 아래의 코드를

```js
function checkGuess() {
```

이렇게 바꾸기만 해도 발생합니다.

```js
function checkGuess( {
```

브라우저가 함수의 본문을 본문이 아니라 매개변수로 잘못 인식하기 때문입니다. 괄호를 주의하세요!

### SyntaxError: missing } after function body

쉬운 오류입니다. 일반적으로 함수나 조건문 구조에 사용한 중괄호를 누락할 때 발생합니다. 예컨대 `checkGuess()` 함수 끝부분의 닫는 중괄호를 하나 제거하면 오류를 재현할 수 있습니다.

### SyntaxError: expected expression, got '_string_' 또는 SyntaxError: unterminated string literal

이 두 오류는 대개 문자열 값의 열거나 닫는 따옴표가 빠지면 발생합니다. 첫 번째 오류의 _string_ 부분에는 브라우저가 따옴표 대신 마주친, 예상치 못한 문자 또는 문자열이 들어갑니다. 두 번째 오류는 따옴표로 닫지 않은 문자열이 있다는 뜻입니다.

> **참고:** MDN의 [SyntaxError: Unexpected token](/ko/docs/Web/JavaScript/Reference/Errors/Unexpected_token)과 [SyntaxError: unterminated string literal](/ko/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal) 참고서에서 두 오류에 대한 자세한 설명을 확인하세요.

위의 오류 중 어떤 걸 만나더라도, 이 글에서 오류를 어떻게 해결했는지 기억하세요. 오류가 발생한 줄 번호로 가서 잘못된 부분을 찾을 수 있는지 확인하세요. 하지만 정말 그 줄이 오류의 원인이라는 법은 없고, 위에서 설명한 원인과는 다른 이유로 발생할 수도 있다는 점은 기억해야 합니다!

## 정리

간단한 JavaScript 프로그램에서 오류를 잡아내는 기초 방법을 알아봤습니다. 여러분의 코드에서 잘못된 곳을 찾는 일이 항상 이렇게 쉽진 않을 겁니다. 하지만 여러분의 배움 과정 초기에는 이 방법들로도 뭔가 잘못되더라도 문제 해결 속도를 약간 높여서 수면 시간을 확보하기에는 충분할 겁니다.

## 같이 보기

- 이 글에는 없지만, JavaScript에는 더 많은 종류의 오류들이 있습니다. [JavaScript 오류 참고서](/ko/docs/Web/JavaScript/Reference/Errors)에서 오류 각각의 뜻을 자세히 설명하고 있습니다.
- 이 글을 마친 후에도 어떻게 수정해야 할지 모르는 오류가 있으면 도움을 구해보세요! (영어) [MDN Discourse 포럼의 Learning 카테고리](https://discourse.mozilla.org/c/mdn/learn/250), 아니면 [Matrix](https://wiki.mozilla.org/Matrix)의 [MDN Web Docs 채팅방](https://chat.mozilla.org/#/room/#mdn:mozilla.org)에서 어떤 오류인지 설명하면 도와드리겠습니다. 여러분의 코드를 문의에 포함하면 더 좋습니다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
