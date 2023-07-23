---
title: JavaScript가 뭔가요?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

MDN의 JavaScript 초급자 과정에 오신 걸 환영합니다! 이 글은 JavaScript를 넓게 보면서 "뭔가요?", "뭘 하나요?"와 같은 질문을 답변하고, 여러분이 JavaScript에 친숙해지도록 도와드립니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>기본적인 컴퓨터 이해 능력, HTML과 CSS 기초.</td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        JavaScript가 뭔지, 어떤 일을 할 수 있는지, 웹 사이트에 어떻게 적용하는지 알아보기
        알기.
      </td>
    </tr>
  </tbody>
</table>

## 둘러보기

JavaScript는 웹 페이지에서 복잡한 기능을 구현할 수 있도록 하는 스크립팅 언어 또는 프로그래밍 언어입니다. 페이지의 내용이 — 가만히 정적인 정보만 보여주는 것이 아니라 — 주기적으로 갱신되거나, 사용자와 상호작용이 가능하거나, 애니메이션이 적용된 2D/3D 그래픽을 볼 수 있다면 JavaScript가 관여하고 있을 거라고 생각해도 좋습니다. JavaScript는 표준 웹 기술이라는 케이크의 세 번째 층입니다. 다른 두 개([HTML](/ko/docs/Learn/HTML)과 [CSS](/ko/docs/Learn/CSS))는 학습장의 다른 곳에서 자세히 알아봤습니다.

![](cake.png)

- {{glossary("HTML")}}은 웹 콘텐츠의 구조를 짜고 의미를 부여하는 마크업 언어입니다. 예를 들어 페이지의 어디가 문단이고, 헤딩이고, 데이터 표와 외부 이미지/비디오인지 정의합니다.
- {{glossary("CSS")}}는 HTML 콘텐츠에 스타일을 적용할 수 있는 스타일 규칙 언어입니다. 배경색을 추가하고, 글꼴을 바꾸고, 콘텐츠를 신문처럼 다열 레이아웃으로 배치할 수 있습니다.
- {{glossary("JavaScript")}}는 동적으로 콘텐츠를 바꾸고, 멀티미디어를 제어하고, 애니메이션을 추가하는 등 거의 모든 것을 만들 수 있는 스크립팅 언어입니다. (정말 모든게 가능하지는 않겠지만, JavaScript 코드 몇 줄만으로도 놀라운 결과를 이룰 수 있습니다)

이렇게 세 층은 서로의 위에 유기적으로 잘 올라가있습니다. 연습 삼아 간단한 텍스트 레이블을 만들어봅시다. HTML로, 아래처럼 텍스트에 구조와 목적을 부여할 수 있습니다.

```html
<p>Player 1: Chris</p>
```

![](just-html.png)

CSS를 추가하면 보기 좋게 꾸밀 수 있습니다.

```css
p {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0, 0, 200, 0.6);
  background: rgba(0, 0, 200, 0.3);
  color: rgba(0, 0, 200, 0.6);
  box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
}
```

![](html-and-css.png)

마지막으로는 JavaScript를 곁들여 동적인 기능을 추가할 수 있습니다.

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('둘러보기', '100%', 80) }}

바로 위의 텍스트 레이블을 클릭해서 어떤 일이 일어나는지 확인해보세요. (이 데모는 GitHub에서도 볼 수 있습니다. [소스코드](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html)를 읽거나 [실행된 모습](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html)을 확인해보세요)

JavaScript는 이것보다 훨씬 많은 일을 할 수 있습니다. 어떤 일이 가능한지 자세히 알아봅시다.

## 그래서 어떤 일을 할 수 있나요?

클라이언트 사이드 JavaScript 언어의 핵심은 다음과 같은 일을 가능하게 해주는 프로그래밍 기능들로 구성됩니다.

- 변수에 값을 저장할 수 있습니다. 바로 위의 예제를 보면, 요청해서 받은 새로운 이름을 `name`이라는 변수에 저장합니다.
- 프로그래밍에서 "문자열"(string)이라고 부르는, 텍스트 조각을 조작합니다. 위 예제에서는 문자열 "플레이어 1: "과 `name` 변수의 값을 합쳐 온전한 텍스트 레이블("Player 1: Chris")을 생성합니다.
- 웹 페이지에서 발생하는 어떤 이벤트에 코드가 응답하도록 합니다. 예제에서는 [`click`](/ko/docs/Web/API/Element/click_event) 이벤트를 사용해서 레이블을 클릭하는 순간을 탐지하고, 그 후에 텍스트 레이블을 업데이트하고 있습니다.
- 그밖에 더 많은 것들!

하지만 위 목록보다 더 흥미진진한건 클라이언트 사이드 JavaScript 언어 위에 올라가있는 기능들입니다. **애플리케이션 프로그래밍 인터페이스**(**API**)라고 부르는 이 기능들은 여러분의 JavaScript 코드에서 사용할 수 있는 강력한 마법을 추가로 제공합니다.

API는 개발자가 직접 구현하기는 어렵거나 불가능한 기능들을 미리 만들어서 제공하는 것입니다. 가구 DIY 키트 같은 거죠. 미리 재단된 판과 나사로 책장을 조립하는 게, 디자인하고 적합한 목재를 찾아서 올바른 크기와 모양으로 자른 후 적합한 크기의 나사를 찾아서 마침내 책장으로 만드는 것보다 훨씬 쉬운 법입니다.

API는 일반적으로 두 개의 범주로 분류할 수 있습니다.

![](browser.png)

**브라우저 API**는 웹 브라우저에 내장된 API로, 현재 컴퓨터 환경에 관한 데이터를 제공하거나 여러가지 유용하고 복잡한 일을 수행합니다.

- [DOM (Document Object Model) API](/ko/docs/Web/API/Document_Object_Model)로 HTML 콘텐츠를 추가, 제거, 변경하고, 동적으로 페이지에 스타일을 추가하는 등 HTML/CSS를 조작할 수 있습니다. 페이지 위에 뜨는 팝업창이나, (위쪽의 간단한 예제처럼) 새로운 콘텐츠가 나타나는 것을 본 적이 있으면 DOM이 동작한 겁니다.
- [Geolocation API](/ko/docs/Web/API/Geolocation)로 지리정보를 가져올 수 있습니다. [Google 지도](https://www.google.com/maps)에서 여러분의 위치를 찾아 지도에 그릴 수 있는 이유가 바로 이 API입니다.
- [Canvas](/ko/docs/Web/API/Canvas_API)와 [WebGL API](/ko/docs/Web/API/WebGL_API)로 애니메이션을 적용한 2D와 3D 그래픽을 만들 수 있습니다. 두 웹 기술을 사용해서 만들 수 있는 놀라운 결과를 엿보려면 [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome)와 [webglsamples](https://webglsamples.org/)를 방문하세요.
- {{domxref("HTMLMediaElement")}}와 {{domxref("WebRTC API", "WebRTC")}}를 포함하는 [오디오와 비디오 API](/ko/docs/Web/Guide/Audio_and_video_delivery)로는 멀티미디어를 사용한 흥미로운 일을 할 수 있습니다. 예를 들어 오디오나 비디오를 웹 페이지에서 바로 재생하거나, 여러분의 웹캠으로 비디오를 찍어 다른 사람의 화면에 보여줄 수 있습니다. (간단한 [스냅샷 데모](https://chrisdavidmills.github.io/snapshot/)를 방문해서 감을 잡아보세요)

> **참고:** 구형 브라우저에서는 위 예제 중 많은 수가 동작하지 않습니다. 웹 기술을 시험할 땐 Firefox, Chrome, Edge, Safari처럼 모던 브라우저를 사용하는 편이 좋습니다.
> 이후에 프로덕션 코드 (고객이 사용하게 될 코드) 배포에 다가가게 되면 [크로스 브라우저 테스트](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing)를 고려하세요.

**서드파티 API**는 브라우저에 탑재되지 않은 API로, 웹의 어딘가에서 직접 코드와 정보를 찾아야 합니다.

- [Twitter API](https://developer.twitter.com/en/docs)로 여러분의 최신 트윗을 웹 사이트가 보여주도록 구현할 수 있습니다.
- [Google 지도 API](https://developers.google.com/maps/)와 [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API)로 웹 사이트에 지도를 삽입하고, 지도 관련 기능을 추가할 수 있습니다.

> **참고:** 위의 서드파티 API는 고급 기능으로, 이 과정에서는 다루지 않습니다. [클라이언트 사이드 웹 API 과정](/ko/docs/Learn/JavaScript/Client-side_web_APIs)에서 알아보세요.

여기 나열된 항목 말고도 훨씬 다양한 API들이 존재합니다! 하지만 아직 너무 앞서나가진 마세요. JavaScript를 하루 배운 것으로 차세대 Facebook, Google 지도, Instagram을 만들 수는 없는 법입니다. 아직 배워야 할 기본이 많이 남았고, 기본을 배우는 것이 이 과정을 보는 이유이니, 시작해 봅시다!

## 웹 페이지에서 JavaScript는 어떤 일을 하나요?

이제부턴 코드를 살펴보면서, 페이지에서 JavaScript를 돌리면 어떤 일이 일어나는지도 알아보겠습니다.

브라우저가 웹 페이지를 불러오면 어떤 일이 발생하는지 간단하게 복습해봅시다([CSS 동작 방식](/ko/docs/Learn/CSS/First_steps/How_CSS_works#CSS_는_실제로_어떻게_작동합니까)에서 먼저 알아봤습니다). 웹 페이지를 브라우저로 불러오면, 브라우저는 여러분의 코드(HTML, CSS, JavaScript)를 실행 환경(브라우저 탭)에서 실행합니다. 원자재(코드)를 가져와서 상품(웹 페이지)을 생산하는 공장처럼 생각할 수 있습니다.

![](execution.png)

JavaScript는 DOM (Document Object Model) API를 통해 HTML과 CSS를 동적으로 수정, 사용자 인터페이스를 업데이트하는 일에 가장 많이 쓰입니다. 참고로 웹 문서(페이지)의 코드는 보통 문서 상에 나타나는 순서 그대로 불러와 실행합니다. 수정하려는 HTML과 CSS 코드보다 JavaScript를 먼저 불러와 실행해버리면 오류가 발생할 수 있습니다. 아래의 [스크립트 로딩 전략](#스크립트_로딩_전략)에서 이 문제의 해결법을 알아보겠습니다.

### 브라우저 보안

각각의 브라우저 탭은 코드를 실행하기 위한 독립적인 그릇(기술 용어로 "실행 환경"이라고 부릅니다)입니다. 독립적이라는 것은 대부분의 탭이 서로에게서 완전히 분리되어 한 탭의 코드가 다른 탭의 코드, 또는 다른 사이트에 직접적인 영향을 줄 수 없다는 뜻입니다. 이건 중요한 보안 절차입니다. 만약 이런 제약이 없으면 해커들이 다른 웹 사이트에서 정보를 훔치는 것을 포함해 여러가지 나쁜 일을 하는 코드를 작성할 것입니다.

> **참고:** 두 개의 다른 웹 사이트/탭 사이에서 코드와 정보를 안전하게 주고받을 수 있는 방법이 있지만, 지금 과정과는 거리가 멀기 때문에 여기서는 다루지 않겠습니다.

### JavaScript 실행 순서

브라우저가 JavaScript 블록을 마주치면, 일반적으로는 순서대로 위에서 아래로 실행합니다. 따라서 코드 배치 순서에도 주의를 기울여야 합니다. 예를 들기 위해 맨 위의 첫 예제 코드로 돌아가봅시다.

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
```

위 코드는 텍스트 문단을 선택(1번 줄)해서 이벤트 수신기를 부착(3번 줄)하여, 사용자가 문단을 클릭하면 `updateName()` 코드 블록(5번 ~ 8번 줄)을 실행하도록 합니다. `updateName()` 코드 블록(이렇게 재사용 가능하도록 나눠놓은 코드 블록을 "함수"라고 합니다)은 사용자에게 새로운 이름을 물어보고, 그 이름을 문단에 삽입해서 화면을 업데이트합니다.

만약 1번 줄의 코드와 3번 줄의 코드 순서를 서로 바꿔서 실행했으면 원하는 동작 대신 [브라우저 개발자 콘솔](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)에 오류, `TypeError: para is undefined`가 나타나며, `para` 객체가 아직 존재하지 않으므로 이벤트 수신기를 부착할 수도 없다는 뜻입니다.

> **참고:** 이 오류는 아주 흔하게 볼 수 있는 오류 중 하나입니다. 여러분의 코드 안에서 참조하는 객체가 존재하는지 주의하세요.

### 인터프리터와 컴파일러

프로그래밍에서의 **인터프리터**와 **컴파일러**라는 단어를 들어본 적이 있는지 생각해보세요. 인터프리터를 사용하는 언어에서는 코드를 위에서 아래로 실행하고, 코드 구동 결과는 즉시 반환됩니다. 브라우저에서 JavaScript 코드를 실행하기 전에 다른 형태로 변환할 필요가 없다는 점을 기억하세요. 코드는 프로그래머가 읽을 수 있는 형태로 입력되고, 별도의 처리 없이 그대로 실행됩니다.

반면, 컴파일러를 사용하는 컴파일 언어에서는 컴퓨터가 코드를 실행하기 전에 다른 형태로 변환(컴파일)해야 합니다. 예를 들어, C/C++에서는 코드를 컴파일러로 기계언어로 변환하여, 그 결과를 컴퓨터가 실행합니다. 프로그램은 프로그램의 원본 소스 코드에서 생성한 이진 형식(바이너리)으로부터 실행됩니다.

JavaScript는 가볍고, 인터프리터를 사용하는 프로그래밍 언어입니다. 웹 브라우저는 JavaScript 코드를 원문 텍스트 형식으로 입력받아 실행합니다. 기술적인 측면으로 따지자면, 대부분의 모던 JavaScript 인터프리터들은 사실 **JIT 컴파일**(just-in-time 컴파일)이라는 기술을 사용해 성능을 향상하기는 합니다. 스크립트의 실행과 동시에 소스 코드를 더 빠르게 실행할 수 있는 이진 형태로 변환하여 최대한 높은 실행 속도를 얻는 방법입니다. 하지만 JavaScript는 여전히 인터프리터 언어로 분류됩니다. 컴파일을 먼저 해놔야 하는 것이 아니라 런타임에 일어나기 때문입니다.

두 방법 모두 각자의 장점을 가지고 있으나, 여기서 그 부분까지 논하지는 않겠습니다.

### 서버 사이드와 클라이언트 사이드 코드

웹 개발에 관련한 또 다른 용어로 **서버 사이드 코드**와 **클라이언트 사이드 코드**를 들어봤나요? 클라이언트 사이드 코드는 사용자의 컴퓨터에서 동작하는 코드입니다. 웹 페이지를 방문하면 브라우저가 페이지 내의 클라이언트 사이드 코드를 다운로드하고 실행해서 화면에 띄웁니다. 바로 이 과정에서 다루는 것은, 정확히는 **클라이언트 사이드 JavaScript**입니다.

반대로 서버 사이드 코드는 서버에서 동작하는 코드로, 그 실행 결과를 브라우저가 다운로드해서 화면에 띄우게 됩니다. 유명한 서버 사이드 웹 언어로는 PHP, Python, Ruby, ASP.NET, 그리고... JavaScript가 있습니다! JavaScript는 브라우저 뿐만 아니라, 많은 사람들이 사용하는 Node.js 환경처럼 서버 사이드 언어로도 사용할 수 있습니다. 서버 사이드 JavaScript에 관해서는 [동적 웹 사이트 – 서버 사이드 프로그래밍](/ko/docs/Learn/Server-side) 과정에서 더 알아보세요.

### 동적 코드와 정적 코드

클라이언트 사이드 JavaScript와 서버 사이드 언어들 모두 **동적**이라는 단어로 설명할 수 있습니다. 동적인 이유는 웹 페이지/웹 앱의 서로 다른 상황에 서로 다른 화면을 보여줄 수 있고, 필요하면 새로운 콘텐츠를 생성할 수 있기 때문입니다. 서버 사이드 코드는 서버에서 새로운 콘텐츠를 생성 — 데이터베이스에서 데이터를 가져오는 등 — 합니다. 클라이언트 사이드 JavaScript는 클라이언트의 브라우저 내에서 새로운 콘텐츠를 생성 — 새로운 HTML 표를 생성하고, 서버에서 받아온 데이터로 채운 후, 사용자가 보고 있는 웹 페이지에 표시 — 합니다. 두 맥락 내에서 '동적'이라는 단어의 정확한 뜻은 약간 다르지만, 그럼에도 서로 연관되어 있으며, 두 방법(서버와 클라이언트 사이드)을 보통 함께 사용합니다.

동적으로 바뀌는 내용을 포함하지 않는 웹 페이지를 **정적**인 페이지라고 합니다. 정적인 페이지는 항상 같은 콘텐츠만 보여줍니다.

## 웹 페이지에 JavaScript를 어떻게 넣나요?

CSS와 비슷한 방법으로 JavaScript를 HTML 코드에 적용할 수 있습니다. CSS가 {{htmlelement("link")}} 요소로 외부 스타일 시트를 적용하고, {{htmlelement("style")}} 요소로 내부 스타일 시트를 적용했다면, JavaScript는 한 종류의 HTML 친구만 요구합니다. 바로 {{htmlelement("script")}} 요소입니다. 어떻게 사용하는지 알아보겠습니다.

### 내부 JavaScript

1. 먼저, 예제 파일인 [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html)을 여러분의 컴퓨터로 복사하세요. 적당한 폴더에 저장하면 됩니다.
2. 브라우저와 텍스트 편집기로 1번의 파일을 여세요. HTML 코드가 클릭 가능한 버튼 하나를 포함하는 간단한 웹 페이지를 만드는 것을 확인할 수 있습니다.
3. 텍스트 편집기로 가서 아래의 코드를 추가하세요. 닫는 `</head>` 태그 바로 앞에 넣어주세요.

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

4. 이제 {{htmlelement("script")}} 요소 안에 JavaScript를 넣어서 웹 페이지를 조금 흥미롭게 만들어보겠습니다. 밑의 코드를 "// JavaScript goes here" 바로 아래에 넣어주세요.

   ```js
   document.addEventListener("DOMContentLoaded", () => {
     function createParagraph() {
       const para = document.createElement("p");
       para.textContent = "You clicked the button!";
       document.body.appendChild(para);
     }

     const buttons = document.querySelectorAll("button");

     for (const button of buttons) {
       button.addEventListener("click", createParagraph);
     }
   });
   ```

5. 파일을 저장하고 브라우저에서 페이지를 새로고침하세요. 이제 버튼을 클릭하는 순간 새로운 문단이 생성돼 밑에 추가되는 모습을 볼 수 있습니다.

> **참고:** 예제가 잘 동작하지 않으면 각 단계를 다시 차근차근 시도하면서 모두 정확히 따라했는지 확인해보세요.
> 시작 코드를 저장할 때 `.html` 파일로 저장했나요?
> {{htmlelement("script")}} 요소를 닫는 `</head>` 요소 바로 앞에 배치했나요?
> JavaScript 코드를 정확히 보이는 그대로 입력했나요? **JavaScript는 대소문자를 구별하고 매우 까다로우므로 구문을 예제 그대로 입력하지 않으면 동작하지 않을 수 있습니다.**

> **참고:** 완성된 예제 코드를 GitHub의 [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)에서 볼 수 있습니다. ([실제로 동작하는 모습도 확인해보세요](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html))

### 외부 JavaScript

내부 JavaScript는 잘 동작했지만, JavaScript를 외부 파일로 분리하고 싶으면 어떡할까요? 지금 알아보겠습니다.

1. 위의 HTML 파일과 같은 폴더에 새로운 파일을 만드세요. `script.js`라는 이름을 붙여줍니다. 확장자를 .js로 지정했는지 다시 확인하세요. JavaScript 파일을 인식하는 방법입니다.
2. 현재 {{htmlelement("script")}} 요소를 다음 코드로 대체하세요.

   ```html
   <script src="script.js" defer></script>
   ```

3. `script.js` 파일 안에 아래 내용을 입력하세요.

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. 저장하고 브라우저를 새로고침하세요. 아까와 같은 모습을 볼 수 있습니다! 분명히 동작은 같지만, JavaScript 파일을 외부 파일로 분리할 수 있었습니다. 보통은, 코드도 정리하고 여러 HTML 파일에서 같은 코드를 재사용할 수 있도록, 스크립트를 외부 파일로 분리하는 것이 좋습니다.

> **참고:** 완성된 예제 코드를 GitHub의 [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)과 [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js)에서 볼 수 있습니다. ([실제로 동작하는 모습도 확인해보세요](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html))

### 인라인 JavaScript 처리기

가끔은 HTML에 JavaScript 코드가 포함된 모습을 볼 수도 있습니다. 아래 코드처럼요.

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Click me!</button>
```

예제로 확인해보세요.

{{ EmbedLiveSample('인라인_JavaScript_처리기', '100%', 150) }}

위 예제는 이전의 두 예제와 완전히 같은 기능을 가지고 있지만, {{htmlelement("button")}} 요소가 버튼 클릭 동작을 `onclick` 인라인 처리기로 포함한다는 점만 다릅니다.

**하지만, 이 방법을 사용하지 말아주세요.** JavaScript로 HTML 코드를 물들이는 것은 나쁜 방법일 뿐더러 비효율적입니다. JavaScript를 적용하려는 모든 버튼마다 일일히 `onclick="createParagraph()"`를 추가해야 하니까요.

### 대신 addEventListener 사용하기

HTML에 JavaScript를 직접 넣는 대신, 순수한 JavaScript 방법을 사용하세요. `querySelectorAll()` 함수를 사용하면 현재 페이지 내의 모든 버튼을 선택할 수 있습니다. 그 후 반복과 `addEventListener()`로 버튼 하나씩 처리기를 부착하세요. 다음과 같은 모습이 될 것입니다.

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

`onclick` 특성을 사용하는 방법보다 좀 길긴 하지만, 대신 페이지 내에 버튼이 몇 개가 있어도, 아니면 몇 개가 추가되고 제거됐는지 상관하지 않고, 그리고 JavaScript를 바꿔줄 필요 없이 모든 버튼에 대해 동작합니다.

> **참고:** 여러분 컴퓨터의 `apply-javascript.html`을 수정해서 버튼 몇 개를 추가해보세요. 브라우저를 새로고침해보면, 아무 버튼이나 눌러도 새로운 문단이 생성되는 모습을 볼 수 있습니다. 멋지지 않나요?

### 스크립트 로딩 전략

스크립트를 적절한 시점에 불러오는 일에는 몇 가지 문제가 있습니다. 뭐든지 보이는 것만큼 간단하지는 않은 법이죠. 흔히 마주치게 되는 문제는, 페이지의 모든 HTML은 순서 그대로 불러온다는 점입니다. JavaScript를 사용해서 페이지 내의 요소 — 더 정확하게는 [Document Object Model](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model) — 를 조작하려고 할 때, 해당 요소를 포함한 HTML 코드보다 JavaScript를 먼저 불러와버리면 코드가 올바르게 동작하지 못할 것입니다.

앞선 내부와 외부 JavaScript 예제에서는 HTML 본문을 읽기 전에 문서의 헤드에서 JavaScript를 불러와 실행합니다. 여기서 문제가 생길 여지가 있으므로, 예방할 수 있는 방법을 사용했었습니다.

내부 예제에서는 코드 주위에 이런 구조를 볼 수 있습니다.

```js
document.addEventListener('DOMContentLoaded', () => {
  ...
});
```

이건 이벤트, 그중에서도 HTML 본문 전체를 불러와 읽었다는 것을 나타내는 브라우저 `DOMContentLoaded` 이벤트를 수신하는 수신기입니다. 이 블록 내부의 JavaScript는 이벤트가 발생하기 전에는 실행되지 않으므로 로딩 시점으로 인한 오류를 예방할 수 있습니다. (이후 과정에서 [이벤트에 대해](/ko/docs/Learn/JavaScript/Building_blocks/Events) 알아보겠습니다)

외부 예제에서는 더 최신 기법을 사용해 문제 발생을 억제합니다. `defer` 특성은 브라우저가 `<script>` 태그를 마주쳐도 그 이후의 HTML 콘텐츠를 계속 불러오도록 지정합니다.

```js
<script src="script.js" defer></script>
```

이렇게 하면 스크립트와 HTML을 동시에 불러오므로 오류가 발생하지 않습니다.

> **참고:** `defer` 특성이 오류를 예방하므로, 외부 예제에서는 `DOMContentLoaded`를 사용하지 않았습니다. 내부 예제에서는 `defer` 방법을 사용하지 않았는데, `defer`는 외부 스크립트에만 사용할 수 있기 때문입니다.

고전적인 방법은 스크립트 요소를 본문의 맨 마지막(`</body>` 태그 바로 앞)에 배치하는 것입니다. 그러면 모든 HTML을 읽은 후에 스크립트를 불러오게 됩니다. 이 방법의 문제는 HTML DOM을 모두 불러오기 전에는 스크립트의 로딩과 분석이 완전히 중단된다는 점입니다. 그래서 많은 스크립트를 포함하는 대형 사이트에서는 성능이 저하될 수 있습니다.

#### async와 defer

스크립트 중단 문제를 해결할 수 있는 기능에는 사실 두 가지가 있습니다. `async`와 (위에서 본) `defer`입니다. 어떤 차이점이 있는지 알아봅시다.

`async` 특성을 지정하면 스크립트를 가져오는 동안 페이지 로딩을 중단하지 않습니다. 그러나 스크립트 다운로드가 끝나면 바로 실행되는데, 실행 도중에는 페이지 렌더링이 중단됩니다. 스크립트의 실행 순서를 보장할 방법은 없습니다. 따라서 `async`는 다른 스크립트에 의존하지 않는 독립 스크립트에 사용해야 합니다.

`defer` 특성을 지정한 스크립트는 페이지 내에 배치한 순서대로 불러오게 됩니다. 또한 페이지 콘텐츠를 모두 불러오기 전까지는 실행하지 않으므로, 페이지 요소를 수정하거나 추가하는 등 DOM 작업을 기대하는 스크립트에 유용합니다.

다음은 세 개의 스크립트 로딩 전략을 적용했을 때 페이지에 어떤 영향을 주는지 시각적으로 표현한 이미지입니다.

![](async-defer.jpg)

_[HTML 명세](https://html.spec.whatwg.org/images/asyncdefer.svg)에서 가져와 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 라이선스 하에서 축소한 이미지입니다._

예를 들어, 아래와 같이 세 개의 스크립트 요소를 가지고 있다고 가정해 보겠습니다.

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

위 코드로는 스크립트가 HTML의 순서대로 불러와질 것이라고 확실하게 예측할 수 없습니다. `jquery.js`를 `script2.js`와 `script3.js`보다 먼저 불러올 수도 있지만 이후에 불러올 수도 있습니다. 후자의 경우, `script2.js`와 `script3.js`에서 `jquery`에 의존하는 스크립트에서는 오류가 발생할 것입니다. `jquery`가 아직 정의되지 않았으니까요.

`async`는 다수의 백그라운드 스크립트를 최대한 빠르게 불러와야 할 때 사용하세요. 예를 들면 웹 게임을 시작했을 때 사용할 게임 데이터는 곧 필요하긴 하지만 지금 당장 필요한 것은 아니므로, 게임 데이터를 불러온다고 인트로 화면과 타이틀, 메인 메뉴 표시를 중단하지 않을 수 있습니다.

`defer` 특성으로 가져오는 스크립트(아래)는 페이지에 나타난 순서 그대로 불러와서, 페이지 콘텐츠와 위쪽 스크립트 로딩이 끝나면 실행합니다.

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

위 코드에서는 `script2.js`와 `script3.js`보다 `jquery.js`를 먼저 불러올 것이라고 확신할 수 있습니다. 세 스크립트 모두 페이지 콘텐츠를 모두 불러오기 전엔 실행하지 않으므로, 페이지 요소를 수정해야 하는 등 DOM 조작이 필요하다면 더 유용합니다.

요약하자면,

- `async`와 `defer` 모두, 브라우저가 페이지의 다른 내용(DOM 등등)을 불러오는 동안 스크립트를 별도 스레드에서 불러오게 만듭니다. 덕분에 스크립트를 가져오는 동안 페이지 로딩이 중단되지 않습니다.
- `async` 특성을 지정한 스크립트는 다운로드가 끝나는 즉시 실행합니다. 실행은 현재 페이지 렌더링을 중단하며, 실행 순서는 보장되지 않습니다.
- `defer` 특성을 지정한 스크립트는 순서를 유지한 채로 가져오며 모든 콘텐츠를 다 불러온 이후에 실행합니다.
- 의존성 없는 스크립트를 불러온 즉시 실행하려면 `async`를 사용하세요.
- 다른 스크립트에 의존하거나 DOM 로딩이 필요한 스크립트에는 `defer`를 사용하고, 원하는 순서에 맞춰서 `<script>` 요소를 배치하세요.

## 주석

HTML 및 CSS와 동일하게, JavaScript에서도 브라우저는 무시하는 주석을 작성해서 다른 개발자들(아니면 무슨 일을 했었는지 기억하지 못하는 미래의 여러분)에게 안내를 제공할 수 있습니다. 주석은 엄청 유용합니다. 자주 사용하세요. 특히 대규모 애플리케이션에서는요. 주석에는 두 종류가 있습니다.

- 한 줄 짜리 주석은 맨 앞에 이중 빗금(//)으로 작성합니다.

  ```js
  // 나, 주석
  ```

- 여러 줄 주석은 /\*과 \*/의 사이에 작성합니다.

  ```js
  /*
    나 또한
    주석
  */
  ```

그래서, 마지막으로 봤던 JavaScript 예제 코드에 주석을 추가한다면 이런 모습이 되겠죠.

```js
// 함수: 새로운 문단을 생성해서 HTML 본문 끝에 붙입니다.

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. 페이지 내의 모든 버튼에 대한 참조를 배열 형태로 가져옵니다.
  2. 버튼 각각을 순회하면서 클릭 이벤트 수신기를 추가합니다.

  아무 버튼이나 클릭하면 createParagraph() 함수가 실행됩니다.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> **참고:** 보통은 많은 주석이 적은 주석보다 낫지만, 너무 많은 주석으로 이 변수가 어떤 변수인지 설명(변수 이름을 더 직관적으로 나타낼 수 있을 수도)하고 있거나 매우 간단한 작업의 설명(코드가 과하게 복잡할지도)에 투자하고 있지는 않은지 주의하세요.

## 정리

이로써 JavaScript의 세계로 한 걸음 내딛었습니다. 왜 JavaScript를 써야 하는지, 그리고 어떤 일을 할 수 있는지 먼저 알아보기 위해 이론으로 시작했고, 약간의 코드 예제를 봤고, 여러분의 웹 사이트 어디에 JavaScript가 들어갈 수 있는지 등등을 알아봤습니다.

지금 당장은 JavaScript가 약간 버겁게 느껴질지도 모르겠지만, 너무 걱정하지 마세요. 이 과정에 걸친 간단한 단계들을 밟다 보면 전체적인 모습이 보일겁니다. 다음 글에서는 [바로 실전으로 들어가서](/ko/docs/Learn/JavaScript/First_steps/A_first_splash) 스스로 JavaScript 예제를 만들어보도록 합시다.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
