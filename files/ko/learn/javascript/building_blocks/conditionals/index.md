---
title: 판단 내리기 — 조건문
slug: Learn/JavaScript/Building_blocks/conditionals
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

어떤 프로그래밍 언어든 코드는 의사 결정을 내리고 입력 내용에 따라 작업을 수행해야 합니다. 예를 들어 게임에서 플레이어의 생명 수치가 0이면 게임이 종료됩니다. 날씨 앱에서는 아침에 해가 뜬 그림을 보여주고 밤에는 달과 별을 보여줍니다. 이 문서에서는 JavaScript에서 조건문이 작동하는 방법을 살펴 보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, HTML, CSS,
        <a href="/ko/docs/Learn/JavaScript/First_steps">Javascript 첫걸음</a>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>자바스크립트에서 조건문의 사용법을 이해합니다.</td>
    </tr>
  </tbody>
</table>

## 여러분은 한 조건보다 우위에 있을 수 있습니다..!

사람(과 동물)은 항상 그들의 삶에 영향을 미치는 결정을, 작은 것(과자를 하나 먹을까? 두개 먹을까?)부터 큰 것(고향에 머물면서 아버지의 농장에서 일해야 할까? 아니면 천체물리학을 공부하러 미국으로 유학을 갈까?)까지 내립니다.

조건문은 우리가, 반드시 내려져야 하는 선택에서부터 (예를 들자면, "쿠키 한 개 또는 두 개"), 그 선택들의 결과까지 (아마도 "쿠키 한 개를 먹는다" 의 결과는 "여전히 배가 고프다" 일지도 모르고, "쿠키 두 개를 먹는다" 의 결과는 "배부르다, 그러나 엄마가 쿠키를 다 먹었다고 나를 야단칠 것이다" 일지도 모릅니다), 그러한 의사 결정을 자바스크립트에서 표현할 수 있게 합니다.

![](cookie-choice-small.png)

## if ... else 문

여러분이 자바스크립트에서 쓸 단연코 가장 일반적인 형태의 조건문을 살펴봅시다 — 변변찮은 [`if ... else` 문](/ko/docs/Web/JavaScript/Reference/Statements/if...else)입니다.

### 기본 if ... else 문법

기본 `if...else` 문법은 의사 코드({{glossary("pseudocode")}})로 다음과 같이 보입니다:

```
if (조건) {
  만약 조건(condition)이 참일 경우 실행할 코드
} else {
  대신 실행할 다른 코드
}
```

위를 살펴보면:

1. 키워드 `if` 뒤에 괄호가 옵니다.
2. 시험할 조건은 괄호 안에 위치합니다 (전형적으로 "이 값은 다른 값보다 큰가?", 또는 "이 값은 존재하는가?"). 이 조건은 마지막 모듈에서 논의했던 비교 연산자([comparison operators](/ko/docs/Learn/JavaScript/First_steps/Math#comparison_operators))를 사용할 것이고 `true`나 `false`를 리턴합니다.
3. 내부의 중괄호 안에 코드가 있습니다. — 이것은 우리가 좋아하는 어떤 코드든 될 수 있고, 오직 조건이 `true`를 반환하는 경우에만 실행됩니다.
4. 키워드 `else`.
5. 또 다른 중괄호 안에 더 많은 코드가 있습니다. — 이것은 우리가 좋아하는 어떤 코드든 될 수 있고, 오직 조건이 `true`가 아닌 경우에만 실행됩니다. — 또는 다른 말로 하자면, 조건이 `false`인 경우에만 실행됩니다.

이 코드는 사람이 읽을 수 있습니다. — 이것은 "**만약** **조건**이 `true`면, 코드 A를 실행하고, **아니면** 코드 B를 실행한다." 라고 말합니다.

반드시 `else`와 두 번째 중괄호를 포함하지 않아도 된다는 것을 주목해야 합니다. — 다음은 또한 완벽한 코드입니다:

```
if (조건) {
  만약 조건(condition)이 참일 경우 실행할 코드
}

실행할 다른 코드
```

하지만, 여기서 조심해야 할 점 — 위의 경우, 코드의 두 번째 블록은 조건문에 의해서 제어되지 않아서, 조건이 `true`나 `false`를 리턴하는 것에 관계없이 **항상** 동작합니다. 이것이 반드시 나쁜 것은 아니지만, 여러분이 원하는 것이 아닐 지도 모릅니다. — 종종 여러분은 둘 다가 아니라, 코드의 한 블럭 또는 다른 블럭을 실행하기를 원합니다.

마지막으로, 여러분은 때때로 다음과 같이 짧은 스타일로 중괄호 없이 쓰여진 `if...else`를 보았을 지도 모릅니다:

```
if (조건) 만약 조건(condition)이 참일 경우 실행할 코드
else 대신 실행할 다른 코드
```

이것은 완벽하게 유효한 코드이지만, 사용하는 것을 추천하지 않습니다 — 만약 코드 블록의 범위를 정하기 위해 중괄호를 사용하고, 다수의 줄과 들여쓰기를 사용한다면 코드를 읽고 무엇이 진행되는지 알아내는 것이 훨씬 쉽습니다.

### 실제 예시

문법을 잘 이해하기 위해서 실제 예시를 알아봅시다. 어머니나 아버지가 아이에게 집안일을 도와달라고 요청한다고 상상해 봅시다. 부모님께서 "우리 애기, 만약에 쇼핑 가는 걸 도와주면, 네가 원하는 장난감을 살 여유가 되도록 용돈을 더 줄게." 라고 말씀하실지도 모릅니다. 자바스크립트에서, 우리는 이것을 다음과 같이 표현할 수 있습니다:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

위 코드는 항상 `false`를 리턴하는 `shoppingDone`변수를 결과로 낳는데, 이는 우리의 불쌍한 아이에게 실망을 안겨주겠죠. 아이가 부모님과 함께 쇼핑을 간다면 부모님이 `shoppingDone`변수를 `true`로 설정하는 메커니즘을 제공하는 것은 우리에게 달렸습니다.

> **참고:** GitHub에서 예시를 더 볼 수 있습니다. [이 예제의 완성 버전 on GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html) (also see it [running live](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

지난 예시에서는 두 가지 선택, 또는 결과가 있었죠 — 하지만 우리가 두 가지보다 더 많은 것을 원한다면?

추가로 선택/결과를 `if...else`에 연결하는 방법이 있습니다. — `else if`를 사용해서 말입니다. 각 추가 선택은 `if() { ... }`와 `else { ... }`사이에 넣을 추가적인 블록을 필요로 합니다. 간단한 날씨 예보 어플리케이션의 일부가 될 수 있는 다음의 좀 더 관련된 예시를 확인하세요:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. 여기서 우리는 HTML {{htmlelement("select")}} 엘리먼트를 사용하여 다른 날씨 선택과 간단한 문단을 만들 수 있습니다.
2. 자바스크립트 코드에서 {{htmlelement("select")}} 와 {{htmlelement("p")}} 요소를 모두 저장하고 있고, 값이 변할 때 `setWeather()`함수가 동작하도록 `<select>` 요소에 이벤트 리스너를 추가했습니다.
3. 함수가 동작했을 때, 현재 `<select>` 요소에서 선택된 현재 값을 `choice`라는 변수에 먼저 설정합니다. 그런 다음 `choice`값에 따라 문단 안에 다른 텍스트를 표시하기 위해 조건문을 사용합니다. `if() {...} block`에서 테스트된 첫 번째를 제외하고, `else if() {...}`에서 모든 조건들이 어떻게 테스트되는지에 유의하세요.
4. `else {...}`안의, 가장 마지막 선택은 기본적으로 "최후의 수단" 옵션입니다 — `true`인 조건이 없으면 그 안의 코드가 실행됩니다. 이 경우 아무것도 선택되지 않으면, 예를 들어, 사용자가 처음에 표시한 "--Make a choice--" 플레이스홀더(placeholder) 옵션을 다시 선택하기로 한다면, 문단의 텍스트를 비우는 역할을 합니다.

> **참고:** 또한 [이 예제를 GitHub에서 찾을 수 있습니다](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html). ([see it running live](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) on there also.)

### 비교 연산자에 대한 메모

비교 연산자는 우리의 조건문 안의 조건을 테스트하는데 사용됩니다. 우리는 먼저 이전의 [자바스크립트의 기본적인 연산 - 숫자와 연산자](/ko/docs/Learn/JavaScript/First_steps/Math#comparison_operators) 문서에서 비교 연산자를 봤습니다. 우리의 선택들은 다음과 같습니다:

- `===`와 `!==` — 한 값이 다른 값과 같거나 다른지 테스트한다.
- `<` 와 `>` — 한 값이 다른 값보다 작은지 큰지 테스트한다.
- `<=` 와 `>=` — 한 값이 다른 값보다 작거나 같은지, 크거나 같은지 테스트한다

> **참고:** 이것들에 대한 기억을 되살리기를 원하신다면 저 링크에 있는 것들을 다시 보세요.

몇 번이고 다시 만날 boolean(`true`/`false`)값을 테스트하는 것과 일반적인 패턴에 대한 특별한 언급을 하고 싶었습니다. 어떠한 값들이든 `false`, `undefined`, `null`, `0`, `NaN`이나 빈 문자열(`''`)이 아닌 값은 조건문으로 테스트되었을 때, 실제로는 `true`를 리턴하므로, 변수가 참인지 혹은 값이 존재하는지를 테스트하기 위해 변수 이름 그 자체를 사용할 수 있습니다. 예를 들어:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

그리고, 부모님을 위해 집안일을 하는 아이에 대한 이전 예시로 돌아가자면, 다음과 같이 작성할 수 있습니다.

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone) {
  // 명시적으로 '=== true'를 명시할 필요가 없습니다
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### if ... else 중첩

`if...else`문을 또 다른 문 앞에 (중첩하기 위하여) 넣는 것은 완벽하게 가능합니다. 예를 들어, 온도가 무엇인지에 따라 추가적인 선택의 옵션을 보여주기 위해 우리의 날씨 예보 어플리케이션을 업데이트 할 수 있습니다.

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent =
      "It is " +
      temperature +
      " degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.";
  } else if (temperature >= 86) {
    para.textContent =
      "It is " +
      temperature +
      " degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.";
  }
}
```

비록 코드가 모두 동작하더라도, 각 `if...else`문은 다른 문과 완전히 독립적으로 동작합니다.

### 논리 연산자: AND, OR 그리고 NOT

만약 중첩된 `if...else`문을 작성 없이 다양한 조건을 테스트하길 원한다면 [논리 연산자](/ko/docs/Web/JavaScript/Reference/Operators)가 여러분을 도와줄 수 있습니다. 조건 내에서 사용될 때, 처음의 두 가지는 다음을 합니다:

- `&&` — AND; 전체 표현식(expression)이 `true`를 리턴하기 위해 두 개 혹은 그 이상의 표현식이 개별적으로 `true`로 평가되도록 그 식들을 같이 연결할 수 있게 합니다.
- `||` — OR; 전체 표현식이 `true`를 리턴하기 위해 하나 혹은 그 이상의 표현식이 개별적으로 `true`로 평가되도록 두 개 혹은 그 이상의 식들을 같이 연결할 수 있게 합니다.

AND 예시를 위해서 앞의 예제 코드를 다음과 같이 재작성할 수 있습니다.

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent =
    "It is " +
    temperature +
    " degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.";
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent =
    "It is " +
    temperature +
    " degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.";
}
```

위 예시에서, 첫 번째 코드 블록은 `choice === 'sunny'`_와_ `temperature < 86`가 오직 `true`를 리턴해야만 실행될 것입니다.

빠르게 OR 예시를 봅시다.

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

논리 연산자의 마지막 유형인 `!` 연산자로 표현되는 NOT은 표현식을 부정(negate)하기 위해 사용될 수 있습니다. 위 OR 예시와 함께 봅시다.

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

위 예시에서, OR 문이 `true`를 리턴한다면, NOT 연산자는 전체 표현식이 `false`를 리턴하도록 부정할 것입니다.

어떤 구조든지, 여러분이 원하는 만큼 많은 논리 문(statement)을 결합할 수 있습니다. 다음 예시는 오직 두 OR 문 모두가 true를 리턴하면 내부의 코드를 실행하는데, 이는 전체의 AND 문이 true를 리턴할 것임을 의미합니다.

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

조건문에서 논리적 OR 연산자를 사용할 때의 일반적인 실수는 여러분이 검사하는 값의 변수를 한 번 명시하기(state)를 시도하고, 그리고 true를 리턴할 수 있는 값들의 목록을, `||` (OR) 연산자에 의해 분리하며 제공하는 것입니다. 예를 들자면:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

이 경우에 `if(...)` 내부 조건은 7(또는 다른 0이 아닌 값)이 항상 true로 평가되므로, 항상 true로 평가될 것입니다. 이 조건은 실제로는 "만약 x가 5와 같거나, 7이 true면 — 이것은 항상 true다"라고 분명하게 말하고 있습니다. 이것은 논리적으로 우리가 원하는 것이 아닙니다! 이를 동작하게 하기 위해 우리는 각 OR 연산자의 양 측에서 완전한 테스트를 명시해야 합니다.

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch 문

`if...else` 문은 조건문 코드가 잘 가능하게 하는 일을 하지만, 단점이 없지는 않습니다. 그 문은 두 가지 선택을 가지고 있고, 각각은 실행될 합리적인 양의 코드가 필요하고, 및/또는 그 조건이 복잡한 (예를 들자면, 다수의 논리 연산자) 경우에 주로 유용합니다. 여러분이 단지 어떤 값의 선택에 변수를 설정하거나 조건에 달린 특정한 문(statement)을 출력하기를 원하는 경우에, 그 구문(syntax)은 다소 번거로울 수 있는데, 특히 여러분이 다수의 선택을 가지고 있는 경우에 그렇습니다.

그러한 경우에 [`switch`문](/ko/docs/Web/JavaScript/Reference/Statements/switch)은 여러분의 친구입니다. 이는 입력으로 하나의 표현식/값을 받고, 값과 일치하는 하나를 찾을 때까지 여러 항목을 살펴보고 그에 맞는 코드를 실행합니다. 여러분에게 아이디어를 주기 위해, 여기 몇몇 많은 의사 코드가 있습니다:

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // 원하는 만큼 많은 case를 포함하십시오

  default:
    actually, just run this code
}
```

여기에서:

1. 뒤에 괄호가 오는 키워드 `switch`.
2. 괄호 내부에는 표현식이나 값을 입력합니다.
3. 표현식이나 값이 될 수 있는 선택이 따라오는, 키워드 `case`는 콜론이 뒤에 옵니다.
4. 만약 선택이 표현식과 일치하면 실행할 코드.
5. `break`문은 뒤에 세미콜론이 옵니다. 이전의 선택이 표현식이나 값과 일치한다면 브라우저는 해당 코드 블록에서 실행을 멉추고, switch 문 아래에 있는 코드로 이동합니다.
6. 원하는 만큼 다른 케이스를 (3번–5번) 입력할 수 있습니다.
7. 키워드 `default`는 그 뒤에 선택이 없다는 것을 제외하고 케이스들 중 하나와 완전히 같은 코드 패턴인데 (3번–5번), 이 블록 이후에는 실행할 어떤 코드도 없으므로 `break` 문이 필요하지 않습니다. 일치하는 항목이 없으면 실행되는 기본 옵션입니다.

> **참고:** `default`를 반드시 포함하지 않아도 됩니다 — 만약 표현식이 미지의 값과 같게 되어버릴 수 있는 경우가 없다면 여러분은 안전하게 이것을 생략할 수 있습니다. 그러나, 그 경우가 있다면, 여러분은 미지의 경우를 다루기 위해 이것을 포함할 필요가 있습니다.

### A switch example

실전 예제를 해 봅시다. switch문을 대신 사용해 일기예보 애플리케이션을 재작성할 것입니다.

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('A_switch_example', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

> **참고:** 또한 [이 예제를 GitHub에서 찾을 수 있습니다](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html). (see it [running live](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) on there also.)

## 삼항연산자

다른 예제로 들어가기 전에 소개하고 싶은 마지막 구문이 있습니다. 삼항(조건)연산자([ternary or conditional operator](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator))는 조건을 테스트하고 만약 조건이 `true`라면 하나의 값/표현식을 리턴하고, 만약 `false`라면 다른 값/표현식을 리턴하는 구문입니다 — 이것은 어떤 상황에 유용할 수 있으며, 만약 `true`/`false`조건 사이를 통해 선택되는 두 선택을 가지고 있다면 `if...else` 블록보다 코드를 훨씬 적게 사용할 수 있습니다. 이 의사 코드는 아래와 같습니다:

```
( condition ) ? run this code : run this code instead
```

그러면 간단한 예를 봅시다:

```js
let greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

`isBirthday` 라는 변수명이 여기 있습니다 — 만약 이것이 `true`라면, 우리는 게스트에게 생일 축하 메시지를 보냅니다; 만약 아니라면, 우리는 그녀에게 일반적인 인사를 보냅니다.

### 삼항 연산자 예제

삼항연산자로 단지 변수 값만을 정할 필요가 없습니다; 무엇이든지 좋아하는 함수나 코드를 실행할 수 있습니다. 이 예제는 삼항연산자를 사용하여 사이트의 스타일링이 적용되는 간단한 테마 선택기를 보여줍니다.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === "black"
    ? update("black", "white")
    : update("white", "black");
};
```

{{ EmbedLiveSample('Ternary_operator_example', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

여기에는 테마(검정 또는 하양)를 고르기 위한 '{{htmlelement('select')}}' 요소가 있고, 여기에 더하여 웹사이트 제목을 보여주는 간단한 '{{htmlelement('h1')}}" 요소가 있습니다. 우리는 또한 `update()`라는 함수를 가지고 있는데, 이 함수는 두 색상을 매개변수(parameter)(입력)로 취합니다. 웹사이트의 배경색이 첫 번째 제공된 색상으로 지정되고, 텍스트 색상이 두 번째 제공된 색상으로 정해집니다.

끝으로, 우리는 또한 삼항연산자를 포함하고 있는 함수의 실행을 제공하는 '[onchange](/ko/docs/Web/API/GlobalEventHandlers/onchange)' 이벤트 리스너를 가지고 있습니다. 이것은 테스트 조건으로 시작합니다 — `select.value === 'black'`. 만약 이것이 `true`를 리턴하면, 우리는 검정과 하양의 매개변수를 지니고 있는 `update()`함수를 실행하는데, 이는 배경색은 검정으로 텍스트 색은 하양으로 되는 결과를 의미합니다. 만약 이것이 `false`를 리턴하면, 우리는 하양과 검정의 매개변수를 지니고 있는 `update()`함수를 실행하는데, 이는 사이트의 색상이 반전됐다는 것을 의미합니다.

> **참고:** 또한 [이 예제를 GitHub에서 찾을 수 있습니다](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-ternary.html). (see it [running live](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) on there also.)

## 직접 해보기: 간단한 달력 만들기

이 예제에서는 간단한 달력 어플리케이션을 만들어 볼 것입니다. 코드에는 다음과 같은 것들이 들어 있습니다.

- 유저가 여러 달을 고를 수 있게 하는 {{htmlelement("select")}} 요소.
- `<select>` 메뉴에서 선택된 값이 변경되었을 때를 탐지하는 `onchange` 이벤트 핸들러.
- {{htmlelement("h1")}} 요소에 올바른 달을 표시하고 달력을 생성하는 `createCalendar()` 함수.

`onchange` 핸들러 함수내에 조건문을 작성해야 합니다. 위치는 `// ADD CONDITIONAL HERE` 주석 바로 아래입니다. 조건문은 다음을 만족해야 합니다:

1. 선택된 달 보기 (`choice`변수 안에 저장되어 있습니다. 이것은 값이 변경된 이후에 `<select>` 요소 값일 것입니다. 예를 들자면 "January")
2. `days` 변수를 선택된 달의 일수와 동일하게 설정하기. 이것을 하기 위해서는 1년의 각 달의 일수를 찾아봐야만 할 것입니다. 이 예제의 목적을 위해 윤년은 무시할 수 있습니다.

힌트:

- 논리연산자 OR을 사용해 동일한 일 수인 여러 달을 하나의 조건으로 그룹화하기. 많은 달들이 동일한 일수를 공유합니다.
- 가장 흔한 일 수를 생각해보고, 그것을 기본값으로 사용하기.

만약 실수를 하더라도 'Reset' 버튼으로 초기화 할 수 있습니다. 정말로 해답을 모르겠다면, "Show solution" 으로 해결 방법을 확인하세요.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 500px;overflow: auto;">
  <label for="month">Select month: </label>
  <select id="month">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;

  // ADD CONDITIONAL HERE

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}

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

const jsSolution =
  "const select = document.querySelector('select');\nconst list = document.querySelector('ul');\nconst h1 = document.querySelector('h1');\n\nselect.onchange = function() {\n const choice = select.value;\n let days = 31;\n if(choice === 'February') {\n days = 28;\n } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {\n days = 30;\n }\n\n createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n list.innerHTML = '';\n h1.textContent = choice;\n for(let i = 1; i <= days; i++) {\n const listItem = document.createElement('li');\n listItem.textContent = i;\n list.appendChild(listItem);\n }\n }\n\ncreateCalendar(31,'January');";
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
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
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

{{ EmbedLiveSample('Playable_code', '100%', 1110, "", "", "hide-codepen-jsfiddle") }}

## 직접 해보기: 색깔 고르기

이 예제에서는 위에서 봤던 삼항연산자 예제의 삼항연산자를 간단한 웹사이트에 더 많은 선택을 적용할 수 있게 하는 switch문으로 전환할 것입니다. {{htmlelement("select")}}을 보세요 — 이번에는 이것이 두 개의 테마 옵션을 가지고 있지 않고, 다섯 개를 가지고 있는 것을 보실 수 있을 것입니다. 여러분은 `// ADD SWITCH STATEMENT` 주석 바로 밑에 추가할 필요가 있습니다:

- 이것은 `choice` 변수를 이것의 입력 표현식으로 받아야 합니다.
- 각각의 경우에 대해, 선택은 선택될 수 있는 가능한 값들 중 하나와 동일해야만 합니다. 예: 하양, 검정, 보라, 노랑, 또는 사이키델릭.
- 각각의 경우에 대해, `update()` 함수는 실행되어야만 하고, 두 개의 색상을, 첫번째는 배경색으로, 두번째는 텍스트 색상으로 전달해야만 합니다. 색상값은 문자열이므로, 따옴표로 감싸져야 할 필요가 있다는 것을 기억하세요.

만약 실수를 하더라도 'Reset' 버튼으로 초기화 할 수 있습니다. 정말로 해답을 모르겠다면, "Show solution" 으로 해결 방법을 확인하세요.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 300px;">
  <label for="theme">Select theme: </label>
  <select id="theme">
    <option value="white">White</option>
    <option value="black">Black</option>
    <option value="purple">Purple</option>
    <option value="yellow">Yellow</option>
    <option value="psychedelic">Psychedelic</option>
  </select>

  <h1>This is my website</h1>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 450px;width: 95%">
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea
>

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

const jsSolution =
  "const select = document.querySelector('select');\nconst html = document.querySelector('.output');\n\nselect.onchange = function() {\n const choice = select.value;\n\n switch(choice) {\n case 'black':\n update('black','white');\n break;\n case 'white':\n update('white','black');\n break;\n case 'purple':\n update('purple','white');\n break;\n case 'yellow':\n update('yellow','darkgray');\n break;\n case 'psychedelic':\n update('lime','purple');\n break;\n }\n}\n\nfunction update(bgColor, textColor) {\n html.style.backgroundColor = bgColor;\n html.style.color = textColor;\n}";
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
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
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

{{ EmbedLiveSample('Playable_code_2', '100%', 950, "", "", "hide-codepen-jsfiddle") }}

## 실력을 평가해 보세요!

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 조건문](/ko/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

## 결론

그리고 이것이 여러분이 지금 자바스크립트에서 알아야 할 조건문 구조에 대한 모든 것입니다! 저는 여러분이 이 개념들을 이해했고 이 예제들을 쉽게 통과했을 것이라고 확신합니다; 만약 뭐든지 이해하지 못한 게 있다면, 자유롭게 이 문서를 다시 읽거나, [문의하기](/ko/docs/Learn#contact_us)에서 도움을 요청해 보세요.

## 같이 보기

- [비교 연산자(Comparison operators)](/ko/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
- [조건문 자세하게 살펴보기](/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else 참고서](/ko/docs/Web/JavaScript/Reference/Statements/if...else)
- [삼항연산자 참고서](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
