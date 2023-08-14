---
title: JavaScript 기본
slug: Learn/Getting_started_with_the_web/JavaScript_basics
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

자바스크립트는 여러분의 웹사이트에 상호작용성(예를 들면, 게임, 버튼이 눌리거나 폼에 자료가 입력될 때 반응, 동적인 스타일링과 애니메이션)을 더해 주는 프로그래밍 언어입니다. 이 글은 여러분이 이 흥미로운 언어를 시작하는 것을 도와드리고 가능한 것에 대한 아이디어를 제공할 것입니다.

## 자바스크립트는 무엇인가?

{{Glossary("JavaScript")}} (줄여서 "JS")는 {{Glossary("HTML")}} 문서에 적용될 때, 웹사이트상에서 동적 상호작용성을 제공할 수 있는 완전한 동적 프로그래밍 언어({{Glossary("Dynamic programming language", "dynamic programming language")}})입니다. 이것은 Mozilla 프로젝트, Mozilla 재단, 그리고 Mozilla 법인의 공동 창설자인 Brendan Eich 에 의해 만들어졌습니다.

자바스크립트는 믿을 수 없을 정도로 다재다능합니다. 캐러셀 기능(이미지를 차례대로 바꿔볼 수 있는 기능)을 가진 이미지 갤러리, 변화하는 레이아웃, 그리고 버튼이 클릭될 때의 반응과 같은 간단한 것부터 시작할 것입니다. 경험이 더 쌓이면 게임이나 움직이는 2D 및 3D 그래픽, 포괄적인 데이터베이스 지향적인 앱과 더 많은 것을 만들 수 있을 것입니다!

자바스크립트 그 자체는 상당히 작지만 아주 유연합니다. 개발자들은 코어 자바스크립트 언어(core JavaScript language) 위에서 동작하는 많은 다양한 도구를 개발해왔는데, 이를 이용하면 최소한의 수고로 엄청나게 많은 확장 기능을 사용할 수 있습니다. 여기에는 다음과 같은 것들이 포함됩니다:

- 브라우저 응용 프로그래밍 인터페이스 ({{Glossary("API","APIs")}}) — 브라우저에 내장된 API로 HTML을 동적으로 생성하고 CSS 스타일을 설정하거나, 사용자의 웹캠으로부터 비디오 스트림을 수집하거나 조작하는 것, 또는 3D 그래픽이나 오디오 샘플을 생성하는 것과 같은 다양한 기능을 제공합니다.
- 제3자 (third-party) API를 활용해 개발자는 트위터나 페이스북 같은 다른 컨텐츠 공급사부터 제공되는 기능을 자신의 사이트에 통합할 수 있습니다.
- 써드파티 프레임워크와 라이브러리를 여러분의 HTML에 적용함으로써 사이트와 어플리케이션을 빠르게 구축할 수 있습니다.

이 글은 자바스크립트를 가볍게 설명하기 위한 목적으로 작성되어, 지금 단계에서는 여러분을 혼란스럽게 만들지 않기 위해 코어 자바스크립트 언어와 위에 나열된 다른 도구 사이에 어떤 차이가 있는지 상세하게 언급하지 않을 것입니다. 이와 관련해서는 MDN의 나머지 글이나 [자바스크립트 학습 영역(JavaScript learning area)](/ko/docs/Learn/JavaScript)에서 자세하게 배울 수 있습니다.

## "Hello world" 예시

위의 섹션은 정말 흥분되게 만드는데 — 자바스크립트는 가장 활발한 웹 기술 중 하나이고, 이것을 잘 활용할 수 있게되면 여러분의 웹사이트는 새로운 차원의 힘과 창의성을 가지게될 것입니다.

하지만, 자바스크립트에 익숙해지는 것은 HTML과 CSS에 익숙해지는 것보다는 조금 더 어렵습니다. 여러분은 간단한 것부터 시작해 조금씩 지속적으로 꾸준히 나가야 할 것입니다. 시작하기에 앞서 "Hello world!" 예제([기본적인 프로그래밍 예제의 표준](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program))를 작성해 봄으로써 어떻게 페이지에 기본적인 자바스크립트를 추가할 수 있는지를 보여드릴 것입니다.

> **경고:** **중요**: 여러분이 우리의 나머지 코스를 따라오지 않으셨다면, [이 예제 코드를 다운](https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip) 받으시고 이것을 시작점으로 사용하세요.

1. 먼저, 여러분의 테스트 사이트로 가서 `scripts`라는 새로운 폴더를 생성하세요. 다음으로 방금 만든 스크립트 폴더 내에 `main.js` 라는 새 파일을 생성하세요. 그 파일을 `scripts` 폴더에 저장하시면 됩니다.
2. 다음은, `index.html` 파일로 가서 닫는 `</body>` 태그의 바로 앞에 새로운 줄을 추가하고 다음 요소를 입력하세요:

   ```html
   <script src="scripts/main.js"></script>
   ```

3. 이것은 기본적으로 CSS 참조를 위해 {{htmlelement("link")}} 요소를 추가할 때와 같은 일을 하는 것입니다 — 페이지에 자바스크립트를 적용하여 HTML에 영향을 줄 수 있습니다(CSS와 함께, 페이지의 다른 것들에도).
4. 이제 `main.js` 파일에 다음 코드를 추가하세요:

   ```js
   let myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. 끝으로, HTML과 자바스크립트 파일이 저장되었는지 확인하시고, 브라우저에서 `index.html`를 열어보세요. 여러분은 다음과 같은 것을 보게 될 것입니다:![](hello-world.png)

> **참고:** {{htmlelement("script")}} 요소를 HTML 파일의 맨 아래쪽 근처에 둔 이유는 HTML은 파일 내에 나타나는 순서대로 브라우저에 로드(load)되기 때문입니다. 만약 자바스크립트가 먼저 로드되고 자신의 아래 쪽에 있는 HTML에 영향을 준다고 하면, 영향을 줄 HTML 보다 먼저 자바스크립트가 로드되기 때문에 작동하지 않을 것입니다. 따라서, HTML 페이지의 맨 아래쪽 근처에 자바스크립트를 두는 것이 최고의 전략입니다.

### 무슨 일이 발생했나요?

자바스크립트를 이용하여 본문 제목 텍스트를 "Hello world!"로 변경하였습니다. 먼저 {{domxref("Document.querySelector", "querySelector()")}}라는 함수를 이용하여 본문 제목에 대한 참조를 `myHeading`이라는 변수에 저장하였습니다. 이는 CSS 선택자(selectors)를 이용하는 것과 아주 유사합니다. 어떤 요소에 뭔가 하길 원하면, 먼저 그것을 선택해야 합니다.

그 다음, `myHeading` 변수의 `{{domxref("Node.textContent", "textContent")}}` 프로퍼티의 값(본문 제목의 컨텐츠를 나타내는 것)을 "Hello world!"로 설정했습니다.

> **참고:** 위에서 사용한 두 기능은 모두 문서를 조작(manipulate)할 때 사용하는 [문서 객체 모델(Document Object Model;DOM) API](/ko/docs/Web/API/Document_Object_Model)의 일부입니다.

## 언어 기본 특강

이 모든 것이 작동하는 방식에 대해 더 잘 이해할 수 있도록 자바스크립트 언어의 핵심적인 특징을 몇 가지 설명드리겠습니다. 이런 특징은 모든 프로그래밍 언어에서 공통적으로 나타나는 것에 불과하므로 이런 원칙을 숙지한다면 어떤 것이라도 프로그램할 수 있게 될 것입니다!

> **경고:** **중요**: 이 글에서는, 어떤 일이 발생하는지 확인 할 수 있게 자바스크립트 콘솔에 예제 코드를 입력합니다. 자바스크립트 콘솔에 대한 더 자세한 사항은, [브라우저 개발 도구 탐험하기](/ko/Learn/Discover_browser_developer_tools)를 보세요.

### 변수

{{Glossary("Variable", "Variables")}}는 여러분이 값을 저장할 수 있는 컨테이너입니다. 변수를 선언할 때 `var` 또는 `let` 키워드 뒤에 원하는 어떤 이름을 붙이면 됩니다:

```js
let myVariable;
```

> **참고:** 한 줄의 끝에 있는 세미콜론은 문(statement)의 끝을 나타냅니다; 한 줄에 있는 여러 문을 분리할 필요가 있을 때에만 반드시 필요합니다. 하지만, 어떤 사람은 각 문의 끝에 세미콜론을 넣는 것이 좋은 습관이라 믿습니다. 언제 세미콜론을 넣고 언제 넣으면 안되는지에 대한 다른 규칙이 있습니다 — 자세한 사항은 [자바스크립트의 세미콜론 안내(Your Guide to Semicolons in JavaScript)](http://news.codecademy.com/your-guide-to-semicolons-in-javascript/)를 참고하세요.

> **참고:** 거의 모든 이름을 변수 이름으로 사용할 수 있지만, 몇 가지 제한이 있습니다 ([변수 이름 규칙에 관한 글](http://www.codelifter.com/main/tips/tip_020.shtml) 을 보세요). 변수 이름에 대해 확신이 없다면, [변수명 체크하기(check your variable name)](https://mothereff.in/js-variables)에서 적절한 변수명인지 확인해 볼 수 있습니다.

> **참고:** 자바스크립트는 대소문자를 구분합니다 — `myVariable`은 `myvariable`과는 다른 변수입니다. 만약 코드에 문제가 생겼다면, 대소문자를 확인해보세요!

> **참고:** `var` 와 `let` 의 차이에 대한 자세한 사항은 [The difference between var and let](/ko/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let)를 참고하세요.

변수를 선언한 후에, 값을 할당할 수 있습니다:

```js
myVariable = "Bob";
```

원한다면, 변수 선언과 값을 주는 작업을 한 줄로 처리할 수 있습니다:

```js
let myVariable = "Bob";
```

이름으로 변수를 호출하기만 하면 값을 추출할 수 있습니다.

```js
myVariable;
```

변수에 어떤 값을 준 후, 나중에 변경할 수도 있습니다.

```
let myVariable = 'Bob';
myVariable = 'Steve';
```

변수는 여러 [자료형](/ko/docs/Web/JavaScript/Data_structures)을 가질 수 있다는 점을 기억하세요:

| 변수                    | 설명                                                                                                                              | 예시                                                                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("String")}}  | 문자열로도 알려진 일련의 텍스트. 그 값이 문자열이라는 것을 나타내기 위해서는 인용부호로 둘러싸야 합니다.                          | `let myVariable = 'Bob';`                                                                                                             |
| {{Glossary("Number")}}  | 숫자. 숫자는 인용부호를 사용하지 않습니다.                                                                                        | `let myVariable = 10;`                                                                                                                |
| {{Glossary("Boolean")}} | 참/거짓 값. `true`와 `false`라는 단어는 JS의 특별한 키워드이며, 인용부호가 필요 없습니다.                                         | `let myVariable = true;`                                                                                                              |
| {{Glossary("Array")}}   | 여러 값을 하나의 단일 참조(single reference)에 저장할 수 있도록 해주는 구조                                                       | `let myVariable = [1,'Bob','Steve',10];` 해당 배열의 각 멤버는 다음과 같이 참조할 수 있습니다: `myVariable[0]`, `myVariable[1]`, etc. |
| {{Glossary("Object")}}  | 기본적으로, 무엇이든. 자바스크립트의 모든 것은 객체(object)이며 어떤 변수에 저장될 수 있습니다. 학습하는 동안 이 점을 기억하세요. | `let myVariable = document.querySelector('h1');` 위의 모든 예시도 마찬가지입니다.                                                     |

그러면 변수가 왜 필요할까요? 글쎄요, 변수는 프로그래밍에서 흥미로운 어떤 일을 하기 위해 필요합니다. 만약 값이 바뀔 수 없다면, 개인별 맞춤 인사 메시지나 이미지 갤러리에 표시되는 이미지를 바꾼다든지 하는 동적인 일을 할 수 없습니다.

### 주석

CSS에서 했던 것처럼 자바스크립트 코드 안에 주석을 넣을 수 있습니다:

```js
/*
사이에 있는 모든 것은 주석입니다.
*/
```

줄바꿈을 할 필요가 없는 주석이라면, 두 개의 슬래시 뒤에 주석을 놓는 것이 더 쉽습니다:

```js
// 이것은 주석입니다
```

### 연산자

`{{Glossary("operator")}}`는 두 값(또는 변수)로부터 결과를 만들어내는 수학 기호입니다. 다음 테이블에서 가장 간단한 연산자 몇 개와 자바스크립트 콘솔(console)에서 실행해 볼 수 있는 예제 몇 개를 같이 볼 수 있습니다.

| 연산자               | 설명                                                                                                                                                                          | 기호          | 예시                                                                                                                                                                                                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 더하기               | 두 수를 합치거나, 또는 두 문자열을 하나로 붙일 때 사용합니다.                                                                                                                 | `+`           | `6 + 9; "Hello " + "world!";`                                                                                                                                                                                                                                                                                             |
| 빼기, 곱하기, 나누기 | 예상하는 바와 같이 기초수학에서 하는 것과 동일하게 동작합니다.                                                                                                                | `-`, `*`, `/` | `9 - 3; 8 * 2; // JS 에서의 곱하기는 별표입니다 9 / 3;`                                                                                                                                                                                                                                                                   |
| 할당                 | 이것에 대해서는 이미 보았습니다: 값을 어떤 변수에 할당합니다.                                                                                                                 | `=`           | `let myVariable = 'Bob';`                                                                                                                                                                                                                                                                                                 |
| 동등                 | 두 값이 서로 같은지 테스트하여 `true`/`false` (불리언) 결과를 반환합니다.                                                                                                     | `===`         | `let myVariable = 3; myVariable === 4;`                                                                                                                                                                                                                                                                                   |
| 부정, 다름           | 연산자 뒤쪽의 값에 대해 논리적으로 반대인 값을 반환합니다;`true`를 `false`로 바꾸는 등. 동등 연산자와 함께 사용할 경우 부정 연산자는 두 값이 같지 않은지 여부를 테스트합니다. | `!`, `!==`    | 기본 표현은 `true`이지만 비교는 `false`를 반환합니다 왜냐하면 우리가 이것을 부정했기 때문입니다:`let myVariable = 3; !(myVariable === 3);`여기서 테스트하고 있는 것은 "`myVariable`이 3 과 같지 않은가"입니다. 이것은 `false`를 반환하는데, `myVariable`이 3 과 같기 때문입니다.`let myVariable = 3;` `myVariable !== 3;` |

살펴볼 연산자가 더 많이 있지만, 지금은 이것으로 충분합니다. 연산자에 대한 완전한 리스트는 [표현식과 연산자](/ko/docs/Web/JavaScript/Reference/Operators)에서 확인해보세요.

> **참고:** 계산을 수행할 때 자료형이 섞이게 되면 이상한 결과를 불러올 수 있으므로, 변수를 올바르게 참조해 예상하는 결과를 얻을 수 있게 주의해야 합니다. 예를 들어 `"35" + "25"`를 콘솔에 입력해 보세요. 왜 예상한 결과를 얻을 수 없을까요? 인용부호가 숫자를 문자열로 변경하였고, 숫자를 더하는 대신에 문자열을 붙인 결과를 얻습니다. `35 + 25`를 입력한다면, 올바른 결과를 얻을 것입니다.

### 조건문

조건문은 어떤 표현식(expression)이 참인지 아닌지를 테스트하고 그 결과에 따라 선택적으로 코드를 실행할 수 있도록 하는 코드 구조입니다. 가장 일반적인 조건문의 형태는 `if ... else` 문입니다. 예를 들어:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}
```

`if ( ... )` 안의 표현식은 테스트입니다 — 여기서는 (위에서 설명한 바와 같이)일치 연산자(identity operator)를 사용하여 변수 `iceCream`과 문자열 `chocolate`이 같은지를 비교합니다. 이 비교에서 `true`가 반환되면 코드의 첫 번째 블록이 실행됩니다. 이 비교가 참(true)이 아닌 경우에는 첫 번째 블록을 건너뛰고 `else`문 뒤에 있는 두 번째 코드 블록이 대신 실행됩니다.

### 함수

{{Glossary("Function", "Functions")}}는 재사용하기를 원하는 기능을 담는 방법입니다. 그 절차(재사용 기능)가 필요할 때 매번 전체 코드를 다시 작성하는 대신 함수의 이름으로 그 함수를 호출할 수 있습니다. 위에서 이미 몇 가지 함수의 사용법을 봤는데, 예를 들면:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

이 함수들, `document.querySelector`와 `alert`는 언제든지 사용할 수 있게 브라우저에 내장되어 있습니다.

변수 이름처럼 보이지만 그 뒤에 괄호 — `()` — 가 있다면 그것은 함수일 것입니다. 함수는 보통 인수({{Glossary("Argument", "arguments")}}) — 함수가 작동하는데 필요한 일련의 데이터 — 를 가집니다. 인수는 괄호 안으로 들어가고, 하나 이상의 인수가 있다면 콤마로 구분됩니다.

예를 들면, `alert()` 함수는 브라우저 창에서 팝업창을 만들지만, 그 함수가 그 팝업창에 표시할 문자열을 인자로 주어야 합니다.

좋은 소식은 여러분 자신만의 함수를 정의할 수 있다는 것입니다 — 다음 예제에서 두 수를 인수로 가지고 그것을 곱하는 간단한 함수를 작성합니다:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

콘솔에서 위 함수를 실행해보고 여러 인수로 테스트해보세요. 가령:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> **참고:** [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return) 문은 브라우저에게 함수로부터 나오는 `result` 변수를 반환하게 함으로써 그 변수를 사용할 수 있게 합니다. 이것은 필수적인 것으로 함수 안에서 정의된 변수는 오직 그 함수 내부에서만 사용 가능하기 때문입니다. 이것을 변수 {{Glossary("Scope", "scoping")}}이라고 합니다. ([변수 영역에 대한 더 많은 것](/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variable_scope) 을 여기서 읽어보세요.)

### 이벤트

웹사이트의 실질적인 상호작용에는 이벤트가 필요합니다. 이벤트는 브라우저에서 발생하는 일을 듣고 그에 대한 반응으로 코드를 실행하는 코드 구조입니다. 가장 확실한 예는 마우스로 무언가를 클릭하면 브라우저가 발생시키는 [클릭 이벤트](/ko/docs/Web/Events/click)입니다. 이를 시연하려면 콘솔에 다음 코드를 입력한 후 현재 웹페이지를 클릭해보시기 바랍니다:

```js
document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};
```

요소에 이벤트를 붙이는 방법은 많습니다. 여기서 HTML 요소를 선택하고 그 요소의 [`onclick`](/ko/docs/Web/API/GlobalEventHandlers.onclick) 핸들러 프로퍼티에 클릭 이벤트가 실행할 코드를 갖고 있는 익명(anonymous) 함수를 할당합니다.

유의하세요. 다음은

```js
document.querySelector("html").onclick = function () {};
```

다음과 같습니다.

```js
let myHTML = document.querySelector("html");
myHTML.onclick = function () {};
```

단지 짧을 뿐입니다.

## 예시 웹사이트 확장하기

지금까지 자바스크립트의 기본 중 몇 가지를 살펴보았으니 우리가 작성한 예제 사이트에 적용 가능한 몇 가지 멋진 기능을 추가해 봅시다.

### 이미지 변경자 추가하기

이 섹션에서는 DOM API 특징을 몇 가지 더 사용해 이미지를 하나 더 추가하고, 이미지가 클릭될 때 자바스크립트를 이용해 두 이미지 사이에 전환이 이루어지도록 해보겠습니다.

1. 맨 먼저, 사이트에 나타내길 원하는 다른 이미지를 찾으세요. 처음 이미지와 같은 사이즈 또는 가능하면 비슷한 크기여야 합니다.
2. `images` 폴더에 이미지를 저장하세요.
3. 이미지 이름을 'firefox2.png'(인용부호 없이)로 바꾸세요.
4. `main.js` 파일로 가서, 다음 자바스크립트를 입력하세요 (만약 "Hello world" 자바스크립트가 있다면, 지우세요):

   ```js
   let myImage = document.querySelector("img");

   myImage.onclick = function () {
     let mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

5. 모든 파일을 저장하고 브라우저에서 `index.html`을 불러오세요. 이제 여러분이 이미지를 클릭할 때 이미지가 다른 이미지로 바뀔 것입니다!

`myImage` 변수에 {{htmlelement("image")}} 요소에 대한 참조를 저장합니다. 다음으로 이 변수의 `onclick` 이벤트 핸들러 프로퍼티에 이름이 없는 함수("익명" 함수)를 할당합니다. 이제, 매번 이미지 요소가 클릭될 때:

1. 이미지의 `src` 속성 값을 얻습니다.
2. `src` 값이 원래 이미지 경로와 같은지 확인하기 위해 조건문을 사용합니다:

   1. 만약 같다면, `src` 값을 두 번째 이미지 경로로 변경하여 다른 이미지가 {{htmlelement("image")}} 요소 안에 로드되도록 합니다.
   2. 같지 않다면(이미 변경되었다는 것을 의미), 원래 상태로 되돌리기 위해 `src` 값을 원래 이미지 경로 바꿔 놓습니다.

### 개인화된 환영 메시지 추가하기

다음으로는 다른 코드를 약간 추가할 것인데, 이 코드는 사용자가 처음으로 사이트에 방문했을 때 페이지의 제목을 개인화된 환영 메시지로 바꾸는 것입니다. 이 환영 메시지는 해당 사용자가 사이트를 떠났다가 돌아오더라도 계속 유지될 것입니다 — 이 메시지를 [웹 저장소 API(Web Storage API)](/ko/docs/Web/API/Web_Storage_API)를 이용해 저장할 것입니다. 사용자를 변경할 수 있는 옵션도 추가하여 언제든지 필요할 때 환영 메시지를 나타나도록 할 것입니다.

1. `index.html` 내의 {{htmlelement("script")}} 요소 바로 앞에 다음 줄을 추가하세요:

   ```html
   <button>Change user</button>
   ```

2. `main.js` 파일의 맨 마지막에 다음 두 줄을 똑같이 추가하세요 — 이 코드는 새로 추가된 버튼과 본문 제목에 대한 참조를 가져와 변수에 저장하는 것입니다:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. 다음으로 개인화된 인삿말을 설정하기 위해 다음 함수를 추가합니다 — 아직 아무 동작도 하지않지만 좀 이따가 고칠겁니다:

   ```js
   function setUserName() {
     let myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = "Mozilla is cool, " + myName;
   }
   ```

   이 함수는 `alert()` 와 약간 닮은 대화상자를 불러오는 `prompt()` 함수를 포함하고 있습니다. `prompt()` 는 사용자에게 어떤 데이터를 입력하길 요청하고, 사용자가 _OK_ 를 누른 후에 그 값을 변수에 저장합니다. 이 예시에서는, 사용자에게 그들의 이름을 입력하길 요청하고 있습니다. 다음으로, 브라우저에 데이터를 저장하고 나중에 불러올 수 있도록 해주는 `localStorage` 라는 API 를 부릅니다. 우리는 `'name'` 라는 데이터 항목을 생성하고 저장하기 위해 localStorage 의 `setItem()`함수를 사용합니다. 그리고 사용자가 입력한 이름을 포함하는 그 값을 `myName` 변수에 저장합니다. 마지막으로, 헤딩의 textContent를 유저의 이름을 포함한 스트링으로 설정합니다.

4. 다음으로, 이 `if ... else` 문을 추가합니다 — 처음 불려질 때 앱이 셋업되도록 이 초기화 코드를 불러옵니다:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     let storedName = localStorage.getItem("name");
     myHeading.textContent = "Mozilla is cool, " + storedName;
   }
   ```

   이 구문은 먼저 `name` 데이터 아이템이 존재하는지 확인하기 위해 부정 연산자 (논리적 NOT, !로 표현되는) 를 사용합니다. 존재하지 않는다면 값을 생성하기 위해 `setUserName()` 함수를 실행합니다. 존재한다면 (예로, 이전 방문을 통해 사용자가 세팅되었음), 우리는 `getItem()` 을 사용해 저장된 이름 값을 얻고, 헤딩의 textContent 을 `setUserName()` 안에서 작업한 것과 같은 사용자의 이름을 포함한 문자열로 세팅합니다.

5. 마지막으로, 아래의 `onclick` 이벤트 핸들러를 버튼에 추가해서, 클릭될 때 `setUserName()` 함수가 실행되도록 합니다. 이것은 버튼을 누름으로 인해 유저가 원하는 새 이름을 설정할 수 있도록 해줍니다.

   ```js
   myButton.onclick = function () {
     setUserName();
   };
   ```

이제 여러분이 사이트에 처음으로 방문했을 때, 개인화된 메시지를 제공하기 위해 여러분의 이름을 물을 것입니다. 그리고 언제든 버튼을 누름으로 여러분이 원하는 이름으로 변경할 수 있습니다. 추가 선물로써, 이름은 `localStorage` 에 저장되기 때문에, 사이트가 닫힌 이후에도 이름이 유지됩니다. 그래서 개인화된 메시지는 여러분이 사이트를 다시 열었을 때 그대로 남아있을 것입니다!

### 사용자 이름이 null?

예제를 실행 시키고 바로 나타나는 다이얼로그 상자에 당신의 이름을 입력하고*Cancel* 버튼을 눌러보세요. "Mozilla is cool, null"라는 제목을 보게될 것입니다. 이것은 사용자가 입력을 취소했을 때 값이, 원래 Javascript가 값이 없음을 표현하는 특별한 값인 [`null`](/ko/docs/Web/JavaScript/Reference/Global_Objects/null)로 설정되기 때문입니다.

또한, 어떠한 이름도 기입하지 않고 OK를 눌러보세요. — 꽤 분명한 이유로 "Mozilla is cool,"라는 제목을 보게될 것입니다.

이러한 문제들을 피하고 싶다면, `setUserName()` 함수를 수정함으로써 사용자가 null 또는 공백 이름을 입력하지 않았는지 체크해야 합니다. 이와 같이:

```js
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}
```

해석하자면 — `myName`에 할당된 값이 없거나 null일 때, `setUserName()`함수를 처음부터 다시 실행합니다. 값이 있으면(위의 if 조건이 not true일 때) `localStorage`에 값을 저장하고 헤딩의 텍스트에 값을 설정합니다.

## 마무리

이 글의 모든 설명을 따라오셨다면, 이와 같이 보이는 페이지가 되실 겁니다. ([여기서](https://mdn.github.io/beginner-html-site-scripted/) 확인하실 수도 있습니다):

![](website-screen-scripted.png)

혹시 막히셨다면, 여러분의 코드와 Github에 있는 우리의 [예제 코드](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js)와 항상 비교해보세요.

여기서, 우리는 자바스크립트의 겉을 살짝 맛봤습니다. 즐겁게 배우셨고, 더 깊게 학습하고 싶으시다면, [JavaScript 안내서](/ko/docs/Learn/JavaScript) 페이지로 가보세요.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
