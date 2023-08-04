---
title: 함수 반환 값
slug: Learn/JavaScript/Building_blocks/Return_values
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

함수에 대해 우리가 이야기해야 할 마지막 한 가지 필수적인 개념이 있습니다 — 반환 값(return value)입니다. 몇몇 함수들은 중요한 값을 반환(return)하지 않지만, 다른 함수들은 반환합니다. 그 값들이 무엇인지, 그것들을 어떻게 사용하는지, 그리고 어떻게 함수가 유용한 값을 반환하게 만드는지를 이해하는 것은 중요합니다. 우리는 이 모든 것을 아래에서 다룰 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 사용 능력, HTML과 CSS에 대한 기본적인 이해,
        <a href="/ko/docs/Learn/JavaScript/First_steps">JavaScript 첫걸음</a
        >,
        <a href="/ko/docs/Learn/JavaScript/Building_blocks/Functions"
          >함수 — 코드 재사용</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>함수 반환 값과, 어떻게 그것을 사용하는지 이해하기.</td>
    </tr>
  </tbody>
</table>

## 반환 값이 무엇인가요?

**반환 값**(return value)이란 그냥 들리는 그대로입니다 — 함수가 완료되었을 때 함수가 반환하는 값입니다. 여러분은 이미 수 차례 반환 값을 마주쳤습니다. 비록 그것들에 대해 분명하게 생각하지는 않았을지도 모르지만요.

(이 시리즈의 [지난 문서](/ko/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions)에서 본) 익숙한 예제로 돌아가 봅시다.

```js
let myText = "The weather is cold";
let newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// replace() 문자열 함수는 문자열을 취해서,
// 부분열(substring)을 다른 것으로 바꾸고,
// 새로운 문자열을 반환합니다.
```

[`replace()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 함수는 `myText` 문자열에서 호출되었고, 두 매개변수(parameter)를 전달받았습니다:

1. 찾을 부분열 ('cold').
2. 바꿀 문자열 ('warm').

이 함수가 완료되었을 (실행을 끝냈을) 때, 값을 반환하는데, 그것은 교체된 문자열입니다. 위의 코드에서, 이 반환 값의 결과는 `newString`에 저장됩니다.

[`replace()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 함수 MDN 레퍼런스 페이지를 본다면, [return value](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value) 라는 섹션을 보게 될 것입니다. 어떤 값이 함수에 의해 반환되는지 이해하고 아는 것은 몹시 유용합니다. 어디든지 가능한 곳에 이 정보를 사용해 볼 수 있도록 말입니다.

어떤 함수들은 어떠한 값도 반환하지 않습니다. (이 경우, 우리의 레퍼런스 페이지는 반환 값을 [`void`](/ko/docs/Web/JavaScript/Reference/Operators/void) 나 [`undefined`](/ko/docs/Glossary/undefined)로 보여줍니다.) 예를 들면, 지난 문서에서 우리가 만든 [`displayMessage()`](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50) 함수에서, 어떤 특정한 값도 함수가 호출되었을 때 반환되지 않습니다. 이 함수는 단지 화면 어딘가에 박스가 나타나게 만들 뿐입니다 — 그게 전부입니다!

일반적으로, 반환 값은 함수가 어떤 종류의 계산에서의 중간 단계인 곳에서 사용됩니다. 최종 결과를 얻기 위해, 몇몇 값들은 함수에 의해 계산될 필요가 있을 수 있습니다. 함수가 값을 계산한 이후에, 결과가 변수에 저장될 수 있도록 함수는 계산 결과를 반환합니다; 그리고 다음 단계의 계산에서 그 변수를 사용할 수 있습니다.

### 사용자 정의 함수에서 반환 값 사용하기

사용자 정의(custom) 함수에서 값을 반환하기 위해서는, [return](/ko/docs/Web/JavaScript/Reference/Statements/return) 키워드를 사용할 필요가 있습니다. 우리는 최근에 이것을 [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html) 예제에서 보았습니다. `draw()` 함수는 무작위의 원 100개를 HTML {{htmlelement("canvas")}}에 그립니다:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

각 반복 내에서, 현재 원의 _x-coordinate_, _y-coordinate_, 그리고 *radius*에 대한 무작위 값을 생성하기 위해, `random()` 함수가 세 번 호출되었습니다. `random()` 함수는 한 개의 매개변수 — 정수 — 를 취하고 `0`과 그 숫자 사이의 무작위 정수를 반환합니다. 이 함수는 다음과 같습니다:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

이것은 다음과 같이 쓰여질 수도 있습니다:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

하지만 첫번째 코드가 더 작성이 빠르고, 더 콤팩트합니다.

함수가 호출될 때마다 `Math.floor(Math.random() * number)` 계산의 결과가 반환되고 있습니다. 이 반환 값은 함수가 호출된 시점에서 나타나고, 코드는 계속됩니다.

그래서 다음을 실행했을 때:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

만약 세 개의 `random()` 호출이 각각 값 `500`, `200`, 그리고 `35`를 반환했다면, 이 줄은 실제로는 다음처럼 실행될 것입니다:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

함수 호출들이 먼저 실행되고, 줄 자체가 그리고서 실행되기 전에 함수의 반환 값이 함수 호출을 대신합니다.

## 직접 해보기: 우리만의 반환 값 함수

반환 값을 포함하는 우리만의 함수를 작성해 봅시다.

1. 우선, GitHub에서 [function-library.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html) 파일을 다운받으세요. 이것은 텍스트 {{htmlelement("input")}} 필드와 단락을 포함하고 있는 단순한 HTML 페이지입니다. 또한 {{htmlelement("script")}} 요소가 있는데, 두 HTML 요소에 대한 참조를 두 변수에 저장해 놓았습니다. 이 작은 페이지는 숫자를 텍스트 박스에 입력할 수 있게 하고, 그것에 관련된 다른 숫자들을 아래의 단락에 표시할 것입니다.
2. 몇몇 유용한 함수들을 이 `<script>` 요소에 추가합시다. 두 줄의 [JavaScript](/ko/docs/Web/JavaScript) 아래에, 다음의 함수 정의를 추가하세요.

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     if (num < 0) return undefined;
     if (num == 0) return 1;
     let x = num - 1;
     while (x > 1) {
       num *= x;
       x--;
     }
     return num;
   }
   ```

   `squared()` 와 `cubed()` 함수는 분명합니다 — 이 함수들은 매개변수로 주어진 숫자의 제곱과 세제곱을 반환합니다. `factorial()` 함수는 주어진 숫자의 [팩토리얼](https://ko.wikipedia.org/wiki/%EA%B3%84%EC%8A%B9)을 반환합니다.

3. 다음으로, 우리는 텍스트 인풋에 입력된 숫자에 대한 정보를 출력할 방법을 포함할 것입니다. 다음의 이벤트 핸들러를 존재하는 함수들 아래에 입력해 보세요:

   ```js
   input.onchange = function () {
     const num = parseFloat(input.value);
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent =
         num +
         " squared is " +
         squared(num) +
         ". " +
         num +
         " cubed is " +
         cubed(num) +
         ". " +
         num +
         " factorial is " +
         factorial(num) +
         ".";
     }
   };
   ```

   여기서 우리는 `onchange` 이벤트 핸들러를 만들었습니다. 이것은 `change` 이벤트가 언제든지 텍스트 인풋에서 발생(fire)되었을 때 실행됩니다 — 즉, 새로운 값이 텍스트 `input`에 입력되고, 제출되었을 때 (예: 값을 입력하고, <kbd>Tab</kbd>이나 <kbd>Return</kbd>을 눌러 그리고서 인풋에서 포커스를 옮겼을 때). 익명 함수가 실행되었을 때, `input` 내의 값은 `num` 상수에 저장됩니다.

   다음으로, 우리는 조건문 테스트를 합니다. 만약 입력된 값이 숫자가 아니라면, 오류 메시지가 단락에 출력됩니다. 이 테스트는 표현식(expression) `isNaN(num)`이 `true`를 반환하는지를 살핍니다. [`isNaN()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 함수는 `num` 값이 숫자가 아닌지를 검사합니다 — 만약 그렇다면, 이것은 `true`를 반환하고, 아니라면, `false`를 반환합니다.

   만약 검사가 `false`를 반환했다면, `num` 값은 숫자입니다. 그러므로, 문장이 그 숫자의 제곱, 세제곱, 그리고 팩토리얼을 서술하는 단락 요소 내부에 출력됩니다. 문장은 `squared()`, `cubed()`, 그리고 `factorial()` 함수를 요구된 값을 계산하기 위해 호출합니다.

4. 코드를 저장하고, 브라우저에서 로드한 후, 시도해 보세요.

> **참고:** 만약 이 예제를 작업하는 데 어려움이 있다면, 자유롭게 [GitHub에 있는 완성된 버전](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html)과 비교해 보거나 ([실제로 작동하는 모습](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)도 보세요), 우리에게 도움을 요청해 보세요.

## 이제 여러분의 차례입니다!

이 시점에서, 우리는 여러분이 두 개의 함수를 작성해 보고 라이브러리에 추가하기를 원합니다. 숫자의 제곱근이나 세제곱근은 어떠세요? 혹은 주어진 반지름의 원의 둘레는 어떠세요?

몇몇 추가적인 함수에 관계된 팁들:

- 함수 내부에 _오류 처리_(error handling)를 작성하는 다른 예제를 보세요. 필수적인 매개변수가 확인되는 것과, 선택적인 매개변수가 몇몇 종류의 주어진 기본 값을 가지고 있는 것을 검사하는 것은 일반적으로 좋은 생각입니다. 이 방법으로, 여러분의 프로그램이 오류를 발생시킬 가능성은 더 적어질 것입니다.
- _함수 라이브러리_(function library)를 만드는 것에 대해 생각해 보세요. 프로그래밍 경력이 더 오래 갈수록, 여러분은 똑같은 종류의 것들을 계속 그리고 계속 하게 될 것입니다. 이런 종류의 것들을 하기 위한 여러분만의 유틸리티 함수 라이브러리를 만드는 것은 좋은 생각입니다. 여러분은 이것들을 새로운 코드에 복사해 넣거나, 심지어는 단순히 필요한 곳 어디든 HTML 페이지에 적용할 수도 있습니다.

## 실력을 평가해 보세요!

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 함수](/ko/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions).

## 결론

이제 끝났습니다 — 함수는 즐겁고, 아주 유용하고, 그리고 비록 함수의 문법과 기능성에 대해 이야기할 것들이 많지만, 그것들은 꽤 이해하기 쉽습니다.

만약 뭐든지 이해하지 못한 게 있다면, 자유롭게 이 문서를 다시 읽거나, [문의하기](/ko/docs/Learn#contact_us)에서 도움을 요청해 보세요.

## 같이 보기

- [함수 고급](/ko/docs/Web/JavaScript/Reference/Functions) — 더욱 고급의 함수에 관련된 정보를 다루는 자세한 가이드
- [JavaScript에서의 콜백(callback) 함수](https://www.impressivewebs.com/callback-functions-javascript/) — 일반적인 JavaScript 패턴은 함수를 다른 함수 내부에 _인자(argument)로서_ 전달하는 것입니다. 이것은 그리고서 첫번째 함수 내부에서 호출됩니다. 이것은 이 코스의 범위를 조금 넘어서지만, 머지않아 공부할 가치는 있습니다.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
