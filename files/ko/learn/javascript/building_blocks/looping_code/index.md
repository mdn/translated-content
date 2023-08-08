---
title: 반복문
slug: Learn/JavaScript/Building_blocks/Looping_code
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals", "Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

다수의 기본적인 계산에서부터 완료해야 할 비슷한 작업들을 가지고 있는 상황들에 대해서까지, 프로그래밍 언어는 반복적인 작업을 빠르게 완료하는 데 대단히 유용합니다. 여기서 우리는 그러한 필요를 다루는 자바스크립트에서 이용 가능한 반복문 구조를 살펴볼 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, HTML과 CSS,
        <a href="/ko/docs/Learn/JavaScript/First_steps">JavaScript 첫걸음</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>JavaScript에서 반복문(loop)을 사용하는 방법을 이해합니다.</td>
    </tr>
  </tbody>
</table>

## 저를 반복 속에 계속 잡아 두세요

반복, 반복, 반복(loop). [인기있는 아침 시리얼](https://en.wikipedia.org/wiki/Froot_Loops), [롤러 코스터](https://en.wikipedia.org/wiki/Vertical_loop) 그리고 [음악 제작](<https://en.wikipedia.org/wiki/Loop_(music)>)과 연관되어 있는 것처럼, 반복은 또한 프로그래밍에서 중요한 개념입니다. 프로그래밍의 반복은 같은 것을 계속 그리고 계속 반복해서 하는 것에 모든 관계가 있는데, 이는 프로그래밍 언어에서 **반복**(iteration)이라고 일컫어집니다.

가족들이 일주일동안 먹을 식량이 충분한지 확신하기 위해 고민하는 농부의 상황을 봅시다. 그는 이것을 알기 위해 다음과 같은 반복을 사용할지도 모릅니다:

![](loop_js-02-farm.png)

반복은 보통 다음 기능의 하나 또는 그 이상을 가집니다:

- **카운터**(counter). 이는 어떤 값으로 초기화됩니다 — 이것이 반복문의 시작점입니다 (상기의 그림에서, "시작: I have no food").
- **조건**(condition). 이는 반복문이 계속 실행될지, 혹은 멈출지를 결정하는 true/false 테스트입니다 — 보통 카운터가 어떤 값에 도달했을 때입니다. 이것은 상기 그림의 "Have I got enough food?" 부분에 나와 있습니다. 그가 가족에게 먹일 10인분의 음식이 필요하다고 해 봅시다.
- **반복자**(iterator). 이는 보통 조건이 더 이상 true가 아닐 때까지 각각의 연이은 반복에서 조금씩 카운터를 증가시킵니다. 우리는 위의 그림에서 명시적으로 이를 보이지 않았지만, 농부가 시간당 2인분의 음식을 수집한다고 생각해 볼 수 있습니다. 매 시간 후마다, 그가 모은 음식의 양은 2인분씩 증가되고, 그는 충분한 음식을 가지고 있는지 확인합니다. 만약 그가 10인분에 도달했다면 (조건이 더 이상 참이 아닌 지점, 따라서 반복은 종료됩니다), 그는 수집을 멈추고 집에 갈 수 있습니다.

의사 코드({{glossary("pseudocode")}})에서 이것은 다음과 같이 보일 것입니다:

```
loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // 우리는 충분한 음식을 가지고 있다; 집에 돌아가자
  } else {
    food += 2; // 2인분을 더 모으기 위해 1시간을 소모한다
    // 그리고 반복문은 다시 실행될 것입니다
  }
}
```

따라서 필요한 음식의 양은 10으로 설정되어 있고, 현재 농부가 소지하고 있는 양은 0으로 설정되어 있습니다. 반복문의 각 반복에서, 우리는 농부가 가진 음식의 양이 그가 필요한 양보다 크거나 같은지 확인합니다. 만약 그렇다면, 우리는 반복문을 종료(exit)할 수 있습니다. 만약 그렇지 않다면, 농부는 2인분의 음식을 모으기 위해 한 시간을 보내고 반복문은 다시 실행됩니다.

### 왜 굳이?

이 시점에서, 여러분은 아마도 반복문 뒤에 있는 고급 개념을 이해했을 것이지만, 여러분은 아마도 "좋아, 훌륭하군, 하지만 어떻게 이게 내가 JavaScript 코드를 더 잘 짜게 도와준다는 거지?" 라고 생각할 것입니다. 앞서 말했듯이, **반복문은 같은 것을 계속 그리고 계속 다시 하는 것에 모든 관련이 있는데**, 이는 **빠르게 반복적인 일을 완료**하는 데 뛰어납니다.

종종, 코드는 반복문의 각각의 연이은 반복에서 조금 다를 것인데, 이는 여러분이 비슷하지만 조금 다른 일더미를 완료할 수 있다는 것을 의미합니다; 만약 여러분이 수행할 많은 다른 계산들을 가지고 있다면, 여러분은 같은 것을 계속 그리고 계속 하는 것이 아니라, 각각의 다른 것을 하기를 원할 것입니다.

왜 반복문이 그렇게 좋은 것인지를 완벽히 보여주는 예제를 봅시다. 우리가 {{htmlelement("canvas")}} 요소 위에 무작위의 원 100개를 그리고 싶다고 칩시다 (예제를 다시 실행하고, 다시 다른 무작위 집합들을 보기 위해 *Update*버튼을 누르세요):

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Random canvas circles</title>
    <style>
      html {
        width: 100%;
        height: inherit;
        background: #ddd;
      }

      canvas {
        display: block;
      }

      body {
        margin: 0;
      }

      button {
        position: absolute;
        top: 5px;
        left: 5px;
      }
    </style>
  </head>
  <body>
    <button>Update</button>

    <canvas></canvas>

    <script>
      const btn = document.querySelector("button");
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");

      let WIDTH = document.documentElement.clientWidth;
      let HEIGHT = document.documentElement.clientHeight;

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (let i = 0; i < 100; i++) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,0,0,0.5)";
          ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      btn.addEventListener("click", draw);
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code', '100%', 400, "", "", "hide-codepen-jsfiddle") }}

지금 당장은 모든 코드를 이해할 필요는 없지만, 실제로 100개의 원을 그리는 코드 부분을 살펴봅시다:

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

- 코드의 앞부분에서 정의한 `random()`은, `0`과 `x-1`사이의 정수를 반환합니다.
- `WIDTH`와 `HEIGHT` 는 내부 브라우저 윈도우의 너비와 높이입니다.

기본 개념을 잡아야만 합니다 — 우리는 이 코드의 100번의 반복(iteration)을 실행하기 위해 반복문을 사용하고 있는데, 각 반복은 페이지의 무작위의 위치에 원을 그립니다. 우리가 100개의 원을 그리든, 1000개의 원을 그리든, 혹은 10,000개의 원을 그리든 간에 필요한 코드의 양은 같을 것입니다. 오직 숫자 하나만 바뀌면 됩니다.

만약 우리가 여기서 반복문을 사용하지 않았다면, 우리가 그리고 싶은 모든 원에 대해 다음의 코드를 반복해야만 했을 것입니다:

```js
ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

이것은 몹시 지루하고 아주 빠르게 유지보수하기 힘들 것입니다. 반복문은 정말로 최고입니다.

## 반복문의 표준

몇몇 특정한 반복문 구조 탐구를 시작해 봅시다. 여러분이 대부분의 경우에 사용하게 될, 첫번째는 [for](/ko/docs/Web/JavaScript/Reference/Statements/for) 반복문입니다. 이것은 다음의 문법(syntax)을 가지고 있습니다:

```
for (초기화식; 종료 조건; 증감식) {
  // 실행할 코드
}
```

여기서 우리가 알 수 있는 것:

1. 괄호가 뒤따라오는 키워드 `for`.
2. 괄호 안에는, 세미콜론으로 구분되는, 세개의 항목이 있습니다:

   1. **초기화식**(initializer) — 이것은 보통 숫자로 설정된 변수인데, 반복문이 실행될 횟수(count)까지 증가됩니다. 이것은 또한 때때로 **카운터 변수**(counter variable)라고도 불립니다.
   2. **조건식**(condition) — 전에 언급했듯이, 이것은 언제 반복문이 반복을 멈춰야만 하는지를 정의합니다. 이것은 일반적으로 비교 연산자(comparison operator)를 특징으로 하는 표현식(expression)인데, 이는 종료 조건이 충족되었는지를 확인하는 테스트입니다.
   3. **증감식**(final-expression) — 이것은 반복문이 전체 반복을 거쳤을 때마다 항상 평가(혹은 실행)됩니다. 이것은 보통 카운터 변수를 증가 (혹은 몇몇 경우에는 감소)시키기 위해, 조건이 더 이상 `true`가 아닌 지점에 가까워지게 하기 위해 제공됩니다.

3. 코드 블럭을 감싸는 중괄호 — 이 코드는 반복문이 반복될 때마다 실행될 것입니다.

이것들이 무엇을 하는지를 더욱 확실하게 시각화할 수 있도록 실제 예제를 봅시다.

```js
const cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
let info = "My cats are called ";
const para = document.querySelector("p");

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ", ";
}

para.textContent = info;
```

이것은 우리에게 다음의 결과를 보여줍니다:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Basic for loop example</title>
    <style></style>
  </head>
  <body>
    <p></p>

    <script>
      const cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
      let info = "My cats are called ";
      const para = document.querySelector("p");

      for (let i = 0; i < cats.length; i++) {
        info += cats[i] + ", ";
      }

      para.textContent = info;
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_2', '100%', 60, "", "", "hide-codepen-jsfiddle") }}

> **참고:** 여러분은 이 [예제를 GitHub에서](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for.html) 또한 찾을 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html)).

이것은 반복문이 배열 안의 요소들에 대해 반복하고 그 각각의 요소들과 무언가를 하기 위해 쓰였다는 것을 보여줍니다 — 이것은 JavaScript에서 아주 일반적인 패턴입니다. 여기서:

1. 카운터 변수 (때때로 초기화식(initializer) 또는 반복 변수(iteration variable)으로도 알려져 있음) `i`는 `0`에서 시작합니다 (`let i = 0`).
2. 반복문은 `i`가 더 이상 `cats` 배열의 길이(length)보다 작지 않을 때까지 실행되라는 명령을 받았습니다. 이것은 중요합니다 — 조건은 반복문이 여전히 실행되는 것 아래의 조건입니다. 그래서 이 경우, `i < cats.length`가 여전히 true인 동안, 반복문은 계속 실행될 것입니다.
3. 반복문 안에서, 우리는 콤마와 공백(space)과 같이 있는 현재 반복 요소(item) (`cats[이 때 i가 무엇이든]`인, `cats[i]`)를 `info` 변수의 끝에 연결시킵니다. 그래서:

   1. 첫번째 실행 동안에, `i = 0`이므로, `cats[0] + ', '` (이는 `Bill,`과 같습니다)는 `info`에 연결될 것입니다.
   2. 두번째 실행 동안에, `i = 1`이므로, `cats[1] + ', '` (이는 `Jeff,`와 같습니다)는 `info`에 연결될 것입니다.
   3. 계속 이와 같습니다. 반복문이 실행 된 후마다, `i`에 1이 더해질 것이고 (`i++`), 이 과정(process)은 다시 실행될 것입니다.

4. `i`가 `cats.length`와 같아질 때 (이 경우, 5), 반복문은 멈출 것이고, 브라우저는 반복문 아래에 있는 다음 코드로 이동할 것입니다.

> **참고:** 우리는 조건을 `i <= cats.length`이 아니라 `i < cats.length`로 만들었는데, 이는 컴퓨터는 카운트를 1부터가 아니라 0부터 세기 때문입니다 — 우리는 `i`를 0에서 시작했고, `i = 4`까지 갔습니다 (마지막 배열 원소의 인덱스). 배열에 5개의 원소가 있으므로, `cats.length`는 5를 반환하지만, 우리는 `i = 5`까지 가고 싶지는 않습니다. 왜냐하면 이는 마지막 원소에 대해 `undefined`를 반환할 것이기 때문입니다 (5의 인덱스를 가진 배열 원소는 없습니다). 그래서, 그러므로, 우리는 `cats.length`과 같은 데까지가 아니라 (`i <=`), `cats.length`보다 1 작은 데까지 가기를 원합니다 (`i <`).

> **참고:** 조건에 관련된 일반적인 실수는 "보다 작거나 같다(less than or equal to)" (`<=`)가 아니라 "동등(equal to)" (`===`)을 사용하는 것입니다. 만약 우리가 반복문을 `i = 5`까지 실행하기를 원했다면, 종료 조건은 `i <= cats.length`일 필요가 있었을 것입니다. 만약 우리가 그것을 `i === cats.length`에 설정했다면, 첫 반복문 반복에서 `i`는 `5`와 같지 않아서, 반복문은 즉시 멈췄을 것이기 때문에 반복문은 전혀 실행되지 않을 것입니다.

우리는 마지막으로 출력되는 문장이 잘 만들어지지 않았다는 작은 문제를 가지고 있습니다:

> My cats are called Bill, Jeff, Pete, Biggles, Jasmin,

이상적으로, 우리는 문장의 끝에 콤마를 가지지 않도록 마지막 반복문 반복에서 연결을 변경하기를 원합니다. 좋습니다, 문제 없어요 — 우리는 꽤 행복하게 반복문이 이 특별한 경우를 다루도록 조건문을 내부에 삽입할 수 있습니다:

```js
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
}
```

> **참고:** 여러분은 이 [예제 코드를 Github](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html)에서 또한 찾아볼 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)).

> **경고:** **중요**: 모든 반복문과 마찬가지로 — for 문에서, 초기화식(initializer)이 결국 조건이 true가 아닌 지점에 닿도록, 경우에 따라, 증가되거나 혹은 감소되게 해야만 합니다. 만약 그렇지 않다면, 반복문은 영원히 계속될 것이고, 브라우저가 강제로 멈추게 하거나, 브라우저가 멈출(crash) 것입니다. 이것은 **무한 루프**(infinite loop)라고 불립니다.

## break로 반복문 종료하기

만약 여러분이 모든 반복이 완료되기 전에 반복문을 종료하고 싶다면, 여러분은 [break](/ko/docs/Web/JavaScript/Reference/Statements/break)문을 사용할 수 있습니다. 우리는 이미 이것을 지난 문서에서 [switch문](/ko/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)을 살펴볼 때 만났습니다 — 입력 표현식과 일치하는 switch문에서 case가 충족되었을 때, `break`문은 즉시 switch문을 종료하고 switch문 다음에 있는 코드로 이동합니다.

이것은 반복문과 같은 것입니다 — `break`문은 즉시 반복문을 종료하고 브라우저가 반복문 뒤에 있는 코드로 이동하게 합니다.

우리가 연락처와 핸드폰 번호의 배열을 탐색하고 우리가 원하는 바로 그 번호를 반환하고 싶다고 합시다. 첫째로, 간단한 HTML — 찾고자 하는 이름을 입력할 수 있게 해 주는 텍스트 {{htmlelement("input")}}, 검색을 제출할 {{htmlelement("button")}} 요소, 그리고 결과를 표시할 {{htmlelement("p")}} 요소:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

이제 JavaScript를 봅시다:

```js
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let searchName = input.value;
  input.value = "";
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(":");
    if (splitContact[0] === searchName) {
      para.textContent =
        splitContact[0] + "'s number is " + splitContact[1] + ".";
      break;
    } else {
      para.textContent = "Contact not found.";
    }
  }
});
```

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple contact search example</title>
    <style></style>
  </head>
  <body>
    <label for="search">Search by contact name: </label>
    <input id="search" type="text" />
    <button>Search</button>

    <p></p>

    <script>
      const contacts = [
        "Chris:2232322",
        "Sarah:3453456",
        "Bill:7654322",
        "Mary:9998769",
        "Dianne:9384975",
      ];
      const para = document.querySelector("p");
      const input = document.querySelector("input");
      const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        let searchName = input.value;
        input.value = "";
        input.focus();
        for (let i = 0; i < contacts.length; i++) {
          let splitContact = contacts[i].split(":");
          if (splitContact[0] === searchName) {
            para.textContent =
              splitContact[0] + "'s number is " + splitContact[1] + ".";
            break;
          } else if (i === contacts.length - 1)
            para.textContent = "Contact not found.";
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_3', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. 우선 우리는 몇 가지 변수 정의를 합니다 — 우리는 콜론으로 분리된 이름과 핸드폰 번호를 포함하고 있는 각각의 문자열 요소를 가지고 있는, 연락처 정보의 배열을 가지고 있습니다.
2. 다음으로, 버튼이 눌렸을 때 검색을 수행하고 결과를 반환하기 위해 코드가 실행되도록 버튼(`btn`)에 이벤트 리스너를 붙입니다.
3. 다음 검색의 준비를 위해, 텍스트 인풋을 비우고 그것을 다시 포커싱하기 전에, 우리는 `searchName` 변수에 텍스트 인풋에 입력된 값을 저장합니다. 검색이 대소문자 구분이 없도록(case-insensitive) 우리가 또한 [`toLowerCase()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)메서드를 문자열에 실행했다는 것에 주목하세요.
4. 이제 for 반복문의 흥미로운 점을 봅시다:

   1. 우리는 `0`에서 카운터를 시작하고, 카운터가 `contacts.length`보다 더 이상 작지 않을 때까지 반복문을 실행시키고, 그리고 `i`를 반복문의 각 반복 후마다 1씩 증가시킵니다.
   2. 반복문 내부에서, 우리는 첫째로 현재 연락처 (`contacts[i]`)를 콜론 문자에서 나누고(split), 결과인 두 값을 `splitContact` 배열에 저장했습니다.
   3. 그리고서 우리는 `splitContact[0]` (연락처의 이름, 다시 얘기하자면 [`toLowerCase()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)로 소문자화(lower-cased)된)이, 입력된 `searchName`과 같은지를 검사하는 조건문을 사용했습니다. 만약 그렇다면, 우리는 연락처의 번호가 무엇인지를 알리는 문자열을 문단에 입력하고, 반복문을 끝내기 위해 `break`을 사용합니다.

5. `(contacts.length-1)` 반복 후에, 만약 연락처 이름이 입력된 검색과 일치하지 않으면 문단 텍스트는 "Contact not found."로 설정되고, 반복문은 조건이 더 이상 true가 아닐 때까지 반복을 계속합니다.

> **참고:** 참고: 여러분은 [전체 소스 코드를 GitHub에서](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/contact-search.html) 또한 볼 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Continue로 반복 건너뛰기

[continue](/ko/docs/Web/JavaScript/Reference/Statements/continue)문은 `break`와 유사한 방식으로 작동하지만, 반복문을 완전히 탈출하는 대신, 이것은 반복문의 다음 반복으로 건너뜁니다. 숫자를 입력으로 취하고, 오직 정수의 제곱인 수만을 반환하는 다른 예제를 봅시다.

HTML은 기본적으로 지난 예제와 같습니다 — 간단한 텍스트 입력, 그리고 출력을 위한 문단. JavaScript는 대부분 또한 같지만, 반복문 자체는 약간 다릅니다:

```js
let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + " ";
}
```

여기 출력이 있습니다:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Integer squares generator</title>
    <style></style>
  </head>
  <body>
    <label for="number">Enter number: </label>
    <input id="number" type="text" />
    <button>Generate integer squares</button>

    <p>Output:</p>

    <script>
      const para = document.querySelector("p");
      const input = document.querySelector("input");
      const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        para.textContent = "Output: ";
        let num = input.value;
        input.value = "";
        input.focus();
        for (let i = 1; i <= num; i++) {
          let sqRoot = Math.sqrt(i);
          if (Math.floor(sqRoot) !== sqRoot) {
            continue;
          }

          para.textContent += i + " ";
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_4', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. 이 경우에, 입력은 반드시 숫자 (`num`)여야 합니다. `for` 반복문은 1에서 시작하는 카운터 (우리는 이 경우에서 0에 관심이 없으니까요), 카운터가 입력 `num`보다 더 크게 되었을 때 반복문이 멈춘다고 말하는 종료 조건, 그리고 매번 카운터에 1을 더하는 반복자가 주어져 있습니다.
2. 반복문 안에서, 우리는 [Math.sqrt(i)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)를 사용하여 각 숫자의 제곱근을 찾고, 이 제곱근이 가장 가까운 정수로 내림되었을 때 (이것이 [Math.floor()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)가 전달된 숫자에게 하는 일입니다) 그 자신과 같은지를 검사함으로써 정수인지 확인합니다.
3. 만약 제곱근과 내림된 제곱근이 서로 같지 않다면 (`!==`), 이것은 제곱근이 정수가 아니라는 것을 의미하므로, 우리는 이것에 관심이 없습니다. 그러한 경우에, 우리는 숫자를 어디에도 기록하는 일 없이 다음 반복문 반복으로 건너뛰기 위해 `continue`문을 사용합니다.
4. 만약 제곱근이 정수라면, 우리는 `continue`문이 실행되지 않도록 지난 `if`블록을 완전히 건너뜁니다; 대신, 우리는 현재 `i`값 + 공백을 단락 콘텐츠의 끝에 연결합니다.

> **참고:** 여러분은 [전체 소스 코드를 GitHub에서](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/integer-squares.html) 또한 볼 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while 그리고 do ... while

`for` 는 JavaScript에서 사용할 수 있는 유일한 유형의 반복문이 아닙니다. 실제로 많은 다른 것들이 있고, 지금 이 모든 것을 이해할 필요는 없는 반면 여러분이 약간 다른 방식으로 작업에서 같은 기능을 인식할 수 있도록 다른 두 개의 구조를 살펴 볼 가치가 있습니다.

먼저 [while](/ko/docs/Web/JavaScript/Reference/Statements/while) 반복문을 살펴봅시다. 이 반복문의 구문은 다음과 같습니다:

```
초기화식
while (종료 조건) {
  // 실행할 코드

  증감식
}
```

초기화식 변수와 증감식이 괄호 안에 포함되어 있는 것이 아니라, 초기화식 변수가 반복문 전에 설정되어 있다는 것과, 증감식이 반복문 안에 실행할 코드 후에 포함되어 있다는 것을 제외하고, 이것은 `for` 반복문과 아주 비슷한 방식으로 작동합니다. 조건은 괄호 안에 포함되어 있고, `for` 대신 `while` 키워드가 앞에 옵니다.

같은 세 가지 요소가 여전히 존재하고, 이것들은 for 반복문에서처럼 여전히 같은 순서로 정의되어 있습니다. 여전히 카운터 변수가 조건이 더 이상 true가 아닌 지점에 도달했는지를 확인하기 전에 정의된 초기화식을 가지고 있어야만 하므로 이것은 말이 됩니다. 반복문 안의 코드가 실행된 이후에 증감식은 그리고서 실행되는데 (반복은 완료되었습니다), 이는 오직 조건이 여전히 참인 경우에만 일어납니다.

고양이 목록 예제를 다시 봐 봅시다. 하지만 while 반복문을 사용하기 위해 재작성되었습니다:

```js
let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
}
```

> **참고:** 예상한 대로 이것은 여전히 똑같이 동작합니다 — 여기서 한 번 봐 보세요 [running live on GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (또한 [전체 소스 코드](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/while.html)도 보세요).

[do...while](/ko/docs/Web/JavaScript/Reference/Statements/do...while) 반복문은 많이 비슷하지만 while 구조에 변형을 제공합니다:

```
초기화식
do {
  // 실행할 코드

  증감식
} while (종료 조건)
```

이 경우, 반복문이 시작하기 전에, 초기화식은 다시 첫번째로 옵니다. 키워드는 곧장 실행할 코드와 증감식을 포함하는 중괄호의 앞에 있습니다.

여기서 차별화 요소는 조건이 모든 것 뒤에 오는데, 괄호에 감싸져 있고 `while` 키워드가 앞에 있다는 점입니다. `do...while` 반복문에서, 중괄호 안의 코드는 이것이 다시 실행되어야 하는지를 보기 위해 확인이 만들어지기 전에 항상 한 번은 실행됩니다 (while과 for에서는, 확인이 먼저 와서, 코드는 혹시라도 절대로 실행될 일이 없습니다).

`do...while`을 사용하기 위해 고양이 목록 예제를 다시 작성해 봅시다:

```js
let i = 0;

do {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
} while (i < cats.length);
```

> **참고:** 다시 말하지만, 이것은 예상한 바와 같이 똑같이 동작합니다 — 한 번 봐 보세요 [running live on GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (또한 [전체 소스 코드](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/do-while.html)도 보세요).

> **경고:** **중요**: 모든 반복문과 마찬가지로 — while과 do...while문에서, 조건이 결국 false가 되도록, 경우에 따라, 초기화식이 증가되거나 감소되게 해야만 합니다.만약 그렇지 않다면, 반복문은 영원히 계속될 것이고, 브라우저가 강제로 멈추게 하거나, 브라우저가 멈출(crash) 것입니다. 이것은 **무한 루프**(infinite loop)라고 불립니다.

## 직접 해보기: 카운트 다운 시작!

이 연습에서, 우리는 여러분이 간단한 발사 카운트다운을, 10에서 발사까지, 출력 박스에 출력하기를 원합니다. 구체적으로 말하면, 우리는 여러분이 다음을 하기를 원합니다:

- 10에서 0까지 반복하세요. 우리는 여러분에게 초기화식을 제공합니다 — `let i = 10;`.
- 각 반복마다, 새로운 단락을 만들고, 우리가 `const output = document.querySelector('.output');`를 사용해 선택한, 출력 `<div>`에 추가하세요. 주석에, 우리는 여러분에게 반복문 내부 어딘가에서 사용될 필요가 있는 세 줄의 코드를 제공합니다.

  - `const para = document.createElement('p');` — 새로운 단락을 만듭니다.
  - `output.appendChild(para);` — 단락을 출력 `<div>`에 추가합니다.
  - `para.textContent =` — 등호 기호 이후에, 우항(right-hand side)에 여러분이 입력한 것과 같은 텍스트를 단락 내부에 만듭니다.

- 다른 반복 숫자는 그 반복에 대한 단락에 입력될 다른 텍스트를 요구합니다 (여러분은 조건문과 다수의 `para.textContent =` 줄이 필요할 것입니다):

  - 만약 숫자가 10이면, 단락에 "Countdown 10"을 출력하세요.
  - 만약 숫자가 0이면, "Blast off!"를 단락에 출력하세요.
  - 다른 숫자에 대해서는, 단지 단락에 그 숫자를 출력하세요.

- 반복자를 포함하는 것을 잊지 마세요! 그러나, 이 예제에서는 우리는 각 반복마다 카운트를 위가 아니라 아래로 셉니다. 그러니 여러분은 `i++`를 원하지 **않을** 것입니다 — 어떻게 아래로 반복하실 건가요?

> **참고:** 만약 여러분이 반복문을 타이핑하기 시작했다면 (예를 들어 (while(i>=0)), 아직 종료 조건을 입력하지 않았기 때문에 브라우저는 멈출(stuck) 지도 모릅니다. 그러니 조심하세요. 이 문제에 대처하기 위해 코드를 주석에 작성하고, 완성한 이후에 주석을 제거할 수 있습니다.

만약 실수했다면, 언제나 예제를 "Reset" 버튼으로 리셋할 수 있습니다. 만약 정말로 막혔다면, 답을 보기 위해 "Show solution"을 누르세요.

###### Active learning

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
var output = document.querySelector('.output');
output.innerHTML = '';

// var i = 10;

// var para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var output = document.querySelector('.output');\noutput.innerHTML = '';\n\nvar i = 10;\n\nwhile(i >= 0) {\n var para = document.createElement('p');\n if(i === 10) {\n para.textContent = 'Countdown ' + i;\n } else if(i === 0) {\n  para.textContent = 'Blast off!';\n } else {\n para.textContent = i;\n }\n\n output.appendChild(para);\n\n i--;\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning', '100%', 880, "", "", "hide-codepen-jsfiddle") }}

## 직접 해보기: 손님 목록 작성

이 연습에서, 우리는 여러분이 배열에 저장된 이름 목록을 취하고 그것을 손님 명단에 넣기를 원합니다. 하지만 이것은 쉽지 않습니다 — Phil과 Lola는 탐욕스럽고 무례하고, 항상 모든 음식을 먹기 때문에 우리는 Phil과 Lola를 목록에 넣고 싶지 않습니다. 우리는 두 목록을 가지고 있는데, 하나는 승인할 손님들을 위한 것이고 하나는 거절할 손님들을 위한 것입니다.

구체적으로, 우리는 여러분이 다음을 하기를 원합니다:

- 0부터 `people` 배열의 길이까지 반복하는 반복문을 작성하세요. 여러분은 초기화식 `let i = 0;`에서부터 시작할 필요가 있을 것이지만, 여러분은 무슨 조건을 필요로 하나요?
- 각 반복문 반복 동안에, 조건문을 사용하여 현재 배열 원소가 "Phil" 또는 "Lola"와 동일한지 검사하세요:

  - 만약 그렇다면, 배열 원소를 `refused` 단락의 `textContent`의 끝에 콤마와 공백을 붙여 연결하세요.
  - 만약 그렇지 않다면, 배열 원소를 `admitted` 단락의 `textContent`의 끝에 콤마와 공백을 붙여 연결하세요.

우리는 이미 여러분에게 다음을 제공했습니다:

- `let i = 0;` — 초기화식.
- `refused.textContent +=` — 무언가를 `refused.textContent`의 끝에 연결할 줄의 시작.
- `admitted.textContent +=` — 무언가를 `admitted.textContent`의 끝에 연결할 줄의 시작.

추가 보너스 질문 — 위의 일을 성공적으로 완료한 이후에, 여러분은 콤마로 나눠진 두 이름 목록을 가지고 있을 것이지만, 그것들은 단정치 못합니다 — 각 목록의 끝에 콤마가 있을 것입니다. 각 경우에 어떻게 마지막 콤마를 잘라낸 줄을 작성하고, 끝에 마침표를 추가할 지 알아내실 수 있으신가요? 도움을 위해 [유용한 문자열 메서드](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods) 문서를 한 번 봐 보세요.

만약 실수했다면, 언제나 예제를 "Reset" 버튼으로 리셋할 수 있습니다. 만약 정말로 막혔다면, 답을 보기 위해 "Show solution"을 누르세요.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// let i = 0;

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

let jsSolution =
  "const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];\n\nconst admitted = document.querySelector('.admitted');\nconst refused = document.querySelector('.refused');\n\nadmitted.textContent = 'Admit: ';\nrefused.textContent = 'Refuse: '\nlet i = 0;\n\ndo {\n if(people[i] === 'Phil' || people[i] === 'Lola') {\n refused.textContent += people[i] + ', ';\n } else {\n admitted.textContent += people[i] + ', ';\n }\n i++;\n} while(i < people.length);\n\nrefused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';\nadmitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';";
let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  let scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  let front = textarea.value.substring(0, caretPos);
  let back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_2', '100%', 680, "", "", "hide-codepen-jsfiddle") }}

## 어떤 반복문을 써야 할까?

기본적 사용에 대해, `for`, `while`, 그리고 `do...while` 반복문들은 대체로 교체할 수 있습니다. 이것들은 같은 문제를 풀기 위해 모두 쓰여질 수 있고, 어떤 것을 사용할지는 주로 여러분의 개인적인 선호에 달려 있습니다 — 어떤 것이 가장 기억하기 쉽거나 직관적이라고 생각하시나요. 이것들을 다시 살펴봅시다.

첫째로 `for`:

```
for (초기화식; 종료 조건; 증감식) {
  // 실행할 코드
}
```

`while`:

```
초기화식
while (종료 조건) {
  // 실행할 코드

  증감식
}
```

그리고 마지막으로 `do...while`:

```
초기화식
do {
  실행할 코드

  증감식
} while (종료 조건)
```

우리는, 적어도 시작하는 데, `for`를 추천합니다. 왜냐하면 이것은 아마도 모든 것을 기억하기 가장 쉽기 때문입니다 — 초기화식, 조건, 증감식 모두가 괄호 안에 깔끔하게 들어가야만 하므로, 이것들이 어디 있는지 보고 여러분이 이것들을 놓치지 않았다는 것을 확인하기 쉽습니다.

> **참고:** 다른 반복문 형태/기능 또한 있는데, 이는 고급/특수한 상황에서 유용하고 이 글의 범위 너머에 있습니다. 만약 반복문을 더 많이 배우고 싶다면, 고급 [반복문과 반복 가이드](/ko/docs/Web/JavaScript/Guide/Loops_and_iteration)를 읽어 보세요.

## 실력을 평가해 보세요!

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 반복문](/ko/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops).

## 결론

이 문서는 여러분에게 JavaScript에서의 반복문에 대한 기본 개념과 이용 가능한 다른 옵션들을 드러내 보였습니다. 여러분은 이제 왜 반복문이 반복적인 코드를 다루는 데 좋은 메커니즘인지 확실히 이해하고, 여러분만의 예제에서 그것들을 사용하고 싶어서 몸이 근질거리실 것입니다!

만약 뭐든지 이해하지 못한 게 있다면, 자유롭게 이 문서를 다시 읽거나, [문의하기](/ko/docs/Learn#contact_us)에서 도움을 요청해 보세요.

## 같이 보기

- [반복문과 반복 자세히 알아보기](/ko/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for 문 참고서](/ko/docs/Web/JavaScript/Reference/Statements/for)
- [while](/ko/docs/Web/JavaScript/Reference/Statements/while) 과 [do...while](/ko/docs/Web/JavaScript/Reference/Statements/do...while) 레퍼런스
- [break](/ko/docs/Web/JavaScript/Reference/Statements/break) 과 [continue](/ko/docs/Web/JavaScript/Reference/Statements/continue) 레퍼런스
- <p class="entry-title"><a href="https://www.impressivewebs.com/javascript-for-loop/">JavaScript For 반복문을 작성하는 가장 좋은 방법이 무엇인가?</a> — 몇몇 고급 반복문 습관</p>

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
