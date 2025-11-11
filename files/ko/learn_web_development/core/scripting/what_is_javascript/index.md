---
title: JavaScript가 뭔가요?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
original_slug: Learn/JavaScript/First_steps/What_is_JavaScript
l10n:
  sourceCommit: 1eabeec088d52723d74386bad44296bbbbe9b5f3
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

MDN의 JavaScript 초급자 과정에 오신 걸 환영합니다!
이 글에서는 "JavaScript는 무엇인가요?", "JavaScript로 무엇을 할 수 있나요?"와 같은 질문에 답하며 JavaScript의 용도에 익숙해지도록 높은 수준에서 JavaScript를 살펴볼 것입니다.

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

## 높은 수준의 정의

JavaScript는 웹 페이지에서 복잡한 기능을 구현할 수 있는 스크립팅 또는 프로그래밍 언어입니다. 웹 페이지가 단순히 정적인 정보를 표시하는 것 이상으로 시의적절한 콘텐츠 업데이트, 대화형 지도, 애니메이션 2D/3D 그래픽, 스크롤링 비디오 주크박스 등을 표시할 때마다 JavaScript가 관련되어 있을 가능성이 높습니다. JavaScript는 표준 웹 기술이라는 케이크의 세 번째 층입니다. 다른 두 개([HTML](/ko/docs/Learn_web_development/Core/Structuring_content)과 [CSS](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics_b957eec7deaf1ea2b20721d6838ea6e1))는 학습장의 다른 곳에서 자세히 알아봤습니다.

![표준 웹 기술의 세 가지 계층, HTML, CSS, JavaScript](cake.png)

- {{glossary("HTML")}}은 문단, 제목, 데이터 표를 정의하거나 페이지에 이미지와 동영상을 삽입하는 등 웹 콘텐츠를 구성하고 의미를 부여하는 데 사용하는 마크업 언어입니다.
- {{glossary("CSS")}}는 배경색과 글꼴을 설정하고 콘텐츠를 여러 열에 배치하는 등 HTML 콘텐츠에 스타일을 적용하는 데 사용하는 스타일 규칙 언어입니다.
- {{glossary("JavaScript")}}는 동적으로 변경되는 콘텐츠를 만들고, 멀티미디어를 제어하고, 이미지에 애니메이션을 적용하는 등 거의 모든 작업을 수행할 수 있는 스크립팅 언어입니다. (모든 것이 가능한 것은 아니지만 몇 줄의 JavaScript 코드로 달성할 수 있는 것은 놀랍습니다.)

세 가지 레이어가 서로 잘 어울립니다. 간단한 텍스트 레이블을 예로 들어 보겠습니다. HTML을 사용하여 구조와 목적을 부여하기 위해 마크업할 수 있습니다.

```html
<p>Player 1: Chris</p>
```

![플레이어 1의 paragraph: 일반 텍스트로서의 크리스](just-html.png)

CSS를 추가하면 보기 좋게 꾸밀 수 있습니다.

```css
p {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgb(0 0 200 / 0.6);
  background: rgb(0 0 200 / 0.6);
  color: rgb(255 255 255 / 1);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
}
```

![스타일이 적용된 플레이어 1의 paragraph: 크리스](html-and-css.png)

마지막으로는 JavaScript를 곁들여 동적인 기능을 추가할 수 있습니다.

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80, , , , , 'allow-modals') }}

이 마지막 버전의 텍스트 레이블을 클릭하여 어떤 일이 발생하는지 확인해 보세요. (이 데모는 GitHub에서 찾을 수 있습니다 - [소스코드](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) 또는 [실행된 모습](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html)을 확인해보세요)

JavaScript는 이것보다 훨씬 많은 일을 할 수 있습니다. 어떤 일이 가능한지 자세히 알아봅시다.

## 그래서 어떤 일을 할 수 있나요?

클라이언트 사이드 JavaScript 언어의 핵심은 다음과 같은 일을 가능하게 해주는 프로그래밍 기능들로 구성됩니다.

- 변수에 값을 저장할 수 있습니다. 바로 위의 예제를 보면, 새 이름을 입력하도록 요청하고 해당 이름을 `name`이라는 변수에 저장합니다.
- 프로그래밍에서 "문자열"(string)이라고 부르는, 텍스트 조각을 조작합니다. 위 예제에서는 문자열 "플레이어 1: "과 `name` 변수의 값을 합쳐 온전한 텍스트 레이블("Player 1: Chris")을 생성합니다.
- 웹 페이지에서 특정 이벤트에 대한 응답으로 코드를 실행합니다. 예제에서는 {{domxref("Element/click_event", "click")}} 이벤트를 사용하여 레이블이 클릭된 시점을 감지한 다음 텍스트 레이블을 업데이트하는 코드를 실행했습니다.
- 그밖에 더 많은 것들이 있습니다!

하지만 더욱 흥미로운 것은 클라이언트 측 JavaScript 언어 위에 구축된 기능입니다. **애플리케이션 프로그래밍 인터페이스**(**API**)라고 부르는 이 기능들은 JavaScript 코드에서 사용할 수 있는 강력한 마법을 추가로 제공합니다.

API는 개발자가 구현하기 어렵거나 불가능한 프로그램을 구현할 수 있도록 미리 만들어서 제공하는 것입니다.
기성품 가구 키트로 집을 짓는 것과 동일한 방식으로 프로그래밍할 수 있습니다. 직접 디자인을 구상하고, 올바른 목재를 찾고, 모든 패널을 올바른 크기와 모양으로 자르고, 올바른 크기의 나사를 찾아서 책장을 만드는 것보다 기성품 패널을 나사로 고정하여 책장을 만드는 것이 훨씬 쉽습니다.

API는 일반적으로 두 개의 범주로 나뉩니다.

![두 카테고리의 API; 브라우저 측면에 표시되는 서드파티 API와 브라우저에 표시되는 브라우저 API](browser.png)

**브라우저 API**는 웹 브라우저에 내장되어 있으며, 주변 컴퓨터 환경의 데이터를 노출하거나 유용한 복잡한 작업을 수행할 수 있습니다.

- {{domxref("Document_Object_Model","DOM (Document Object Model) API")}}를 사용하면 HTML과 CSS를 조작하여 HTML을 생성, 제거 및 변경하고 페이지에 새 스타일을 동적으로 적용하는 등의 작업을 수행할 수 있습니다.
  예를 들어 페이지에 팝업 창이 나타나거나 새로운 콘텐츠가 표시될 때마다(위의 간단한 데모에서 보았듯이) DOM이 작동하는 것입니다.
- {{domxref("Geolocation","Geolocation API")}}로 지리정보를 가져올 수 있습니다.
  이것이 [Google 지도](https://www.google.com/maps)가 사용자의 위치를 찾아 지도에 표시하는 방법입니다.
- {{domxref("Canvas_API","Canvas")}}와 {{domxref("WebGL_API","WebGL")}} API를 사용하면 애니메이션 2D 및 3D 그래픽을 만들 수 있습니다.
  두 웹 기술을 사용해서 만들 수 있는 놀라운 결과를 엿보려면 [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome)와 [webglsamples](https://webglsamples.org/)를 방문하세요.
- {{domxref("HTMLMediaElement")}}와 {{domxref("WebRTC API", "WebRTC")}}를 포함하는 [오디오와 비디오 API](/ko/docs/Web/Media/Guides/Audio_and_video_delivery)를 사용하면 웹 페이지에서 바로 오디오 및 비디오를 재생하거나 웹 카메라에서 비디오를 가져와 다른 사람의 컴퓨터에 표시하는 등 멀티미디어로 정말 흥미로운 작업을 할 수 있습니다. (간단한 [스냅샷 데모](https://chrisdavidmills.github.io/snapshot/)를 방문해서 감을 잡아보세요.)

> [!NOTE]
> 위의 데모 중 상당수는 구형 브라우저에서 작동하지 않으므로 실험할 때는 Firefox, Chrome, Edge, Opera와 같은 최신 브라우저를 사용하여 코드를 실행하는 것이 좋습니다.
> 이후에 프로덕션 코드 (고객이 사용하게 될 코드) 배포에 다가가게 되면 [크로스 브라우저 테스트](/ko/docs/Learn_web_development/Extensions/Testing)를 고려하세요.

**서드파티 API**는 기본적으로 브라우저에 내장되어 있지 않으며, 일반적으로 웹 어딘가에서 해당 코드와 정보를 가져와야 합니다.

- [Twitter API](https://developer.twitter.com/en/docs)로 여러분의 최신 트윗을 웹 사이트가 보여주도록 구현할 수 있습니다.
- [Google 지도 API](https://developers.google.com/maps/)와 [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API)로 웹 사이트에 지도를 삽입하고, 지도 관련 기능을 추가할 수 있습니다.

> [!NOTE]
> 위의 서드파티 API는 고급 기능으로, 이 과정에서는 다루지 않습니다. 이에 대한 자세한 내용은 [클라이언트 사이드 웹 API 과정](/ko/docs/Learn_web_development/Extensions/Client-side_APIs)에서 알아보세요.

여기 나열된 항목 말고도 훨씬 다양한 API들이 존재합니다! 하지만 아직 너무 앞서나가진 마세요. JavaScript를 하루 배운 것으로 차세대 Facebook, Google 지도, Instagram을 만들 수는 없는 법입니다. 아직 배워야 할 기본이 많이 남았고, 기본을 배우는 것이 이 과정을 보는 이유이니, 시작해 봅시다!

## 웹 페이지에서 JavaScript는 어떤 일을 하나요?

여기서는 실제로 몇 가지 코드를 살펴보면서 페이지에서 JavaScript를 실행하면 실제로 어떤 일이 일어나는지 살펴보겠습니다.

브라우저에서 웹 페이지를 로드할 때 어떤 일이 일어나는지 간단히 정리해 보겠습니다. ([CSS 동작 방식](/ko/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_는_실제로_어떻게_작동합니까)에서 먼저 알아봤습니다.) 브라우저에서 웹 페이지를 로드하면 실행 환경(브라우저 탭) 내에서 코드(HTML, CSS 및 JavaScript)를 실행하게 됩니다. 이는 원재료(코드)를 받아 제품(웹 페이지)을 출력하는 공장과 같습니다.

![페이지가 로드될 때 HTML, CSS, JavaScript 코드가 함께 브라우저 탭에 콘텐츠를 생성합니다.](execution.png)

JavaScript의 가장 일반적인 용도는 위에서 언급했듯이 DOM (Document Object Model) API를 통해 HTML과 CSS를 동적으로 수정하여 사용자 인터페이스를 업데이트하는 것입니다.
웹 문서의 코드는 일반적으로 페이지에 표시되는 순서대로 로드되고 실행됩니다.
수정하려는 HTML과 CSS 코드보다 JavaScript를 먼저 불러와 실행해버리면 오류가 발생할 수 있습니다.
이 글의 뒷부분에 있는 [스크립트 로딩 전략](#스크립트_로딩_전략)에서 이 문제의 해결법을 알아보겠습니다.

### 브라우저 보안

각 브라우저 탭에는 코드를 실행할 수 있는 별도의 그릇이 있습니다. (전문 용어로 '실행 환경'이라고 부릅니다.) 대부분의 경우 각 탭의 코드는 완전히 독립적으로 실행되며 한 탭의 코드가 다른 탭이나 다른 웹사이트의 코드에 직접적인 영향을 미칠 수 없습니다.
이건 중요한 보안 절차입니다. 이런 제약이 없으면 해커들이 다른 웹사이트의 정보를 훔치는 코드를 작성하는 등 나쁜 짓을 할 수 있기 때문입니다.

> [!NOTE]
> 서로 다른 웹 사이트/탭 사이에서 코드와 정보를 안전하게 주고받을 수 있는 방법이 있지만, 지금 과정과는 거리가 멀기 때문에 여기서는 다루지 않겠습니다.

### JavaScript 실행 순서

브라우저가 JavaScript 블록을 마주치면, 일반적으로는 순서대로 위에서 아래로 실행합니다.
따라서 코드 배치 순서에도 주의를 기울여야 합니다.
예를 들기 위해 맨 위의 첫 예제 코드로 돌아가봅시다.

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
```

위 코드는 텍스트 단락을 선택(1번 줄)해서 이벤트 수신기를 첨부(3번 줄)하여, 사용자가 단락을 클릭하면 `updateName()` 코드 블록(5번 ~ 8번 줄)을 실행하도록 합니다. `updateName()` 코드 블록(이렇게 재사용 가능하도록 나눠놓은 코드 블록을 "함수"라고 합니다)은 새 이름을 요청한 다음 해당 이름을 단락에 삽입하여 표시를 업데이트합니다.

코드의 처음 두 줄의 순서를 바꾸면 더 이상 작동하지 않고 [브라우저 개발자 콘솔](/ko/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)에 오류 `TypeError: para is undefined`가 나타납니다.
`para` 객체가 아직 존재하지 않으므로 이벤트 수신기를 추가할 수 없기 때문입니다.

> [!NOTE]
> 이는 매우 흔한 오류로, 코드에서 참조하는 객체가 실제로 존재하는지 확인한 후에 작업을 수행해야 합니다.

### 인터프리터와 컴파일러

프로그래밍에서 **인터프리터**와 **컴파일러**라는 용어를 들어봤을 것입니다.
인터프리터를 사용하는 언어에서는 코드가 위에서 아래로 실행되고 코드 실행 결과가 즉시 반환됩니다.
브라우저에서 코드를 실행하기 전에 코드를 다른 형태로 변환할 필요가 없습니다.
코드는 프로그래머에게 친숙한 텍스트 형식으로 수신되어 바로 처리됩니다.

반면, 컴파일러를 사용하는 컴파일 언어는 컴퓨터에서 실행되기 전에 다른 형태로 변환(컴파일)됩니다.
예를 들어, C/C++에서는 코드를 컴파일러로 기계언어로 변환하여, 그 결과를 컴퓨터가 실행합니다.
프로그램은 프로그램의 원본 소스 코드에서 생성된 이진 형식(바이너리)으로부터 실행됩니다.

JavaScript는 가볍고, 인터프리터를 사용하는 프로그래밍 언어입니다.
웹 브라우저는 JavaScript 코드를 원문 텍스트 형식으로 입력받아 실행합니다.
기술적인 측면으로 따지자면, 대부분의 모던 JavaScript 인터프리터들은 실제 성능 향상을 위해 **JIT 컴파일**(just-in-time 컴파일)이라는 기술을 사용하는데, 스크립트의 실행과 동시에 소스 코드를 더 빠르게 실행할 수 있는 이진 형태로 변환하여 최대한 높은 실행 속도를 얻는 방법입니다.
하지만 컴파일이 미리 처리되는 것이 아니라 런타임에 처리되기 때문에 JavaScript는 여전히 인터프리터 언어로 분류됩니다.

두 방법 모두 각자의 장점을 가지고 있으나, 여기서 그 부분까지 논하지는 않겠습니다.

### 서버 사이드와 클라이언트 사이드 코드

웹 개발의 맥락에서 **서버 사이드 코드**와 **클라이언트 사이드 코드**를 들어봤을 것입니다.
클라이언트 사이드 코드는 사용자의 컴퓨터에서 실행되는 코드로, 웹 페이지를 볼 때 페이지의 클라이언트 측 코드가 다운로드된 후 실행되어 브라우저에 표시됩니다.
이 과정에서 다루는 것은, 정확히는 **클라이언트 사이드 JavaScript**입니다.

반대로 서버 사이드 코드는 서버에서 실행되고 그 결과가 다운로드되어 브라우저에 표시됩니다.
인기 있는 서버 사이드 웹 언어로는 PHP, Python, Ruby, ASP.NET, 그리고 JavaScript가 있습니다!
JavaScript는 브라우저 뿐만 아니라, 많은 사람들이 사용하는 Node.js 환경처럼 서버 사이드 언어로도 사용할 수 있습니다. 서버 사이드 JavaScript에 관해서는 [동적 웹 사이트 – 서버 사이드 프로그래밍](/ko/docs/Learn_web_development/Extensions/Server-side) 과정에서 더 알아보세요.

### 동적 코드와 정적 코드

**동적**이라는 단어는 클라이언트 사이드 JavaScript와 서버 사이드 언어를 모두 설명하는 데 사용되며, 웹 페이지/웹 앱의 디스플레이를 업데이트하여 상황에 따라 다른 내용을 표시하고 필요에 따라 새 콘텐츠를 생성하는 기능을 의미합니다.
서버 사이드 코드는 데이터베이스에서 데이터를 가져오는 등 서버에서 새 콘텐츠를 동적으로 생성하는 반면, 클라이언트 사이드 JavaScript는 새 HTML 표를 생성하고 서버에서 요청한 데이터로 채운 다음 사용자에게 표시되는 웹 페이지에 테이블을 표시하는 등 클라이언트 브라우저 내부에서 새 콘텐츠를 동적으로 생성합니다.
두 가지 맥락에서 의미는 약간 다르지만 서로 연관되어 있으며 일반적으로 두 가지 접근 방식(서버와 클라이언트 사이드)이 함께 작동합니다.

동적으로 바뀌는 내용이 없는 웹 페이지를 **정적**인 페이지라고 하며, 항상 동일한 콘텐츠만 표시합니다.

## 웹 페이지에 JavaScript를 어떻게 넣나요?

JavaScript는 CSS와 유사한 방식으로 HTML 페이지에 적용됩니다.
CSS가 외부 스타일시트를 적용하는 데 {{htmlelement("link")}} 요소를 사용하고 내부 스타일시트를 적용하는 데 {{htmlelement("style")}} 요소를 사용하는 반면, JavaScript는 HTML의 세계에서 단 하나의 친구인 {{htmlelement("script")}} 요소만 있으면 됩니다. 이것이 어떻게 작동하는지 알아봅시다.

### 내부 JavaScript

1. 먼저, 예제 파일인 [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html)을 여러분의 컴퓨터로 복사하세요. 적당한 폴더에 저장하면 됩니다.
2. 브라우저와 텍스트 편집기로 1번의 파일을 여세요. HTML 코드가 클릭 가능한 버튼 하나를 포함하는 간단한 웹 페이지를 만드는 것을 확인할 수 있습니다.
3. 텍스트 편집기로 가서 아래의 코드를 추가하세요. 닫는 `</head>` 태그 바로 앞에 넣어주세요.

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

4. 이제 {{htmlelement("script")}} 요소 안에 JavaScript를 넣어서 웹 페이지를 조금 흥미롭게 만들어보겠습니다. 아래 코드를 "// JavaScript goes here" 바로 아래에 넣어주세요.

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

> [!NOTE]
> 예제가 잘 동작하지 않으면 각 단계를 다시 차근차근 시도하면서 모두 정확히 따라했는지 확인해보세요.
> 시작 코드를 저장할 때 `.html` 파일로 저장했나요?
> {{htmlelement("script")}} 요소를 닫는 `</head>` 요소 바로 앞에 배치했나요?
> JavaScript 코드를 정확히 보이는 그대로 입력했나요? **JavaScript는 대소문자를 구별하고 매우 까다로우므로 구문을 예제 그대로 입력하지 않으면 동작하지 않을 수 있습니다.**

> [!NOTE]
> 완성된 예제 코드를 GitHub의 [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)에서 볼 수 있습니다. ([실제로 동작하는 모습도 확인해보세요](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html))

### 외부 JavaScript

내부 JavaScript는 잘 동작했지만, JavaScript를 외부 파일로 분리하고 싶으면 어떡할까요? 지금부터 살펴봅시다.

1. 위의 HTML 파일과 같은 폴더에 새로운 파일을 만드세요. `script.js`라는 이름을 붙여줍니다. 파일 확장자가 .js여야 JavaScript로 인식되므로 이 확장자를 사용하세요.
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

4. 저장하고 브라우저를 새로고침하세요. 아까와 같은 모습을 볼 수 있습니다!
   분명히 동작은 같지만, JavaScript 파일을 외부 파일로 분리할 수 있었습니다.
   일반적으로 코드를 체계적으로 정리하고 여러 HTML 파일에서 재사용할 수 있다는 측면에서 스크립트를 외부 파일로 분리하는 것이 좋습니다.
   또한 HTML에 스크립트 덩어리를 넣지 않았기에 HTML을 더 쉽게 읽을 수 있습니다.

> [!NOTE]
> 완성된 예제 코드를 GitHub의 [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)과 [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js)에서 볼 수 있습니다. ([실제로 동작하는 모습도 확인해보세요](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html))

### 인라인 JavaScript 처리기

가끔 HTML 안에 실제 JavaScript 코드가 있는 경우가 있습니다.
아래 코드처럼요.

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

아래에서 이 버전의 데모를 사용해 볼 수 있습니다.

{{ EmbedLiveSample('Inline_JavaScript_handlers', '100%', 150) }}

이 데모는 앞의 두 섹션과 완전히 같은 기능을 가지고 있지만 {{htmlelement("button")}} 요소가 버튼 클릭 동작을 `onclick` 인라인 처리기로 포함한다는 점만 다릅니다.

**하지만, 이 방법을 사용하지 말아주세요.** JavaScript로 HTML 코드를 물들이는 것은 나쁜 방법일 뿐더러 비효율적입니다. JavaScript를 적용하려는 모든 버튼마다 일일히 `onclick="createParagraph()"`를 추가해야 하니까요.

### 대신 addEventListener 사용하기

HTML에 JavaScript를 직접 넣는 대신, 순수한 JavaScript 구문을 사용하세요.
`querySelectorAll()` 함수를 사용하면 현재 페이지 내의 모든 버튼을 선택할 수 있습니다.
그런 다음 `addEventListener()`를 사용하여 각각에 핸들러를 할당하여 버튼을 반복할 수 있습니다.
이를 위한 코드는 아래와 같습니다.

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

이 속성은 `onclick` 속성보다 약간 길 수 있지만 페이지에 있는 버튼의 수나 추가 또는 제거된 버튼의 수에 관계없이 모든 버튼에 대해 작동합니다.
JavaScript는 변경할 필요가 없습니다.

> [!NOTE]
> `apply-javascript.html` 버전을 편집하고 파일에 버튼을 몇 개 더 추가해 보세요.
> 브라우저를 새로고침해보면, 아무 버튼을 누르더라도 새로운 문단이 생성되는 모습을 볼 수 있습니다.
> 멋지지 않나요?

### 스크립트 로딩 전략

스크립트를 적절한 시점에 불러오는 일에는 몇 가지 문제가 있습니다. 뭐든지 보이는 것만큼 간단하지는 않은 법이죠.
흔히 마주치게 되는 문제는, 페이지의 모든 HTML이 표시되는 순서대로 로드된다는 것입니다.
JavaScript를 사용해서 페이지 내의 요소(더 정확하게는 [Document Object Model](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model))를 조작하려고 할 때, 해당 요소를 포함한 HTML 코드보다 JavaScript를 먼저 불러와버리면 코드가 올바르게 동작하지 못할 것입니다.

앞선 내부와 외부 JavaScript 예제에서는 HTML 본문을 읽기 전에 문서의 헤드에서 JavaScript를 불러와 실행합니다.
이 경우 오류가 발생할 수 있으므로 몇 가지 구문을 사용하여 문제를 해결했습니다.

내부 예제에서는 코드 주위에 이런 구조를 볼 수 있습니다.

```js
document.addEventListener("DOMContentLoaded", () => {
  // …
});
```

이건 이벤트, 그중에서도 HTML 본문 전체를 불러와 읽었다는 것을 나타내는 브라우저의 `DOMContentLoaded` 이벤트를 수신하는 이벤트 수신기입니다.
이 블록 내부의 JavaScript는 이벤트가 발생하기 전에는 실행되지 않으므로 로딩 시점으로 인한 오류를 예방할 수 있습니다. (이후 과정에서 [이벤트에 대해 배우기](/ko/docs/Learn_web_development/Core/Scripting/Events)를 참조하세요.)

외부 예제에서는 `<script>` 태그 요소에 도달하면 브라우저에 HTML 콘텐츠를 계속 다운로드하도록 지시하는 `defer` 속성이라는 보다 최신 JavaScript 기능을 사용하여 문제를 해결합니다.

```html
<script src="script.js" defer></script>
```

이 경우 스크립트와 HTML이 동시에 로드되어 코드가 작동합니다.

> [!NOTE]
> `defer` 특성이 오류를 예방하므로, 외부 예제에서는 `DOMContentLoaded` 이벤트를 사용하지 않았습니다.
> `defer`은 외부 스크립트에서만 작동하기 때문에 내부 JavaScript 예제에서는 `defer` 솔루션을 사용하지 않았습니다.

고전적인 방법은 스크립트 요소를 본문의 맨 마지막(`</body>` 태그 바로 앞)에 배치하는 것입니다. 그러면 모든 HTML을 읽은 후에 스크립트를 불러오게 됩니다.
이 방법의 문제는 HTML DOM을 모두 불러오기 전에는 스크립트의 로딩과 분석이 완전히 중단된다는 점입니다.
그래서 많은 스크립트를 포함하는 대형 사이트에서는 이로 인해 사이트 속도가 느려지는 중대한 성능 문제가 발생할 수 있습니다.

#### async와 defer

스크립트 중단 문제를 해결할 수 있는 기능에는 사실 두 가지가 있습니다. `async`와 (위에서 본) `defer`입니다.
어떤 차이점이 있는지 알아봅시다.

`async` 특성을 지정하면 스크립트를 가져오는 동안 페이지 로딩을 중단하지 않습니다.
그러나 다운로드가 끝나면 스크립트가 바로 실행되는데, 실행 도중에는 페이지 렌더링이 중단됩니다.
스크립트의 실행 순서를 보장할 방법은 없습니다.
따라서 `async`는 스크립트가 서로 독립적으로 실행되고, 다른 스크립트에 의존하지 않는 경우에 사용하는 것이 가장 좋습니다.

`defer` 속성으로 로드된 스크립트는 페이지에 표시되는 순서대로 로드됩니다.
또한 페이지 콘텐츠를 모두 불러오기 전까지는 실행하지 않으므로, 스크립트가 DOM의 위치에 의존하는 경우(예: 페이지에서 하나 이상의 요소를 수정하는 경우) 유용합니다.

다음은 다양한 스크립트 로드 방법과 해당 방법이 페이지에 미치는 영향을 시각적으로 표현한 것입니다.

![세 가지 스크립트 로딩 방법의 작동 방식: 기본값은 JavaScript를 가져와 실행하는 동안 구문 분석이 차단됩니다. async를 사용하면 구문 분석이 실행 중에만 일시 중지됩니다. defer을 사용하면 구문 분석은 일시 중지되지 않지만 다른 모든 구문 분석이 완료된 후에 실행이 이루어집니다.](async-defer.jpg)

이 이미지는 [HTML 명세](https://html.spec.whatwg.org/images/asyncdefer.svg)에서 가져와 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 라이선스 하에 축소한 이미지입니다.

예를 들어, 아래와 같이 세 개의 스크립트 요소를 가지고 있다고 가정해 보겠습니다.

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

위 코드로는 스크립트가 HTML의 순서대로 불러와질 것이라고 확실하게 예측할 수 없습니다.
`jquery.js`가 `script2.js` 및 `script3.js`의 앞이나 뒤에 로드될 수 있으며, 이 경우 스크립트가 실행될 때 `jquery`가 정의되지 않기 때문에 `jquery`에 따라 해당 스크립트의 모든 함수가 오류를 발생시킬 수 있습니다.

`async`는 로드할 백그라운드 스크립트가 많고 가능한 한 빨리 제자리에 배치하고 싶을 때 사용해야 합니다.
예를 들어 실제로 게임이 시작될 때 필요한 게임 데이터 파일을 로드해야 하지만 지금은 스크립트 로딩으로 인해 차단되지 않고 게임 인트로, 제목, 로비만 표시하고 싶다고 가정해 보겠습니다.

`defer` 속성(아래 참조)을 사용하여 로드된 스크립트는 페이지에 표시되는 순서대로 실행되며 스크립트와 콘텐츠가 다운로드되는 즉시 실행됩니다:

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

두 번째 예제에서는 `jquery.js`가 `script2.js` 및 `script3.js`보다 먼저 로드되고, `script2.js`가 `script3.js`보다 먼저 로드되는 것을 확인할 수 있습니다.
페이지 콘텐츠가 모두 로드될 때까지 실행되지 않으므로 스크립트가 DOM의 위치에 의존하는 경우(예: 페이지에서 하나 이상의 요소를 수정하는 경우) 유용합니다.

요약하자면,

- `async`와 `defer` 모두 브라우저가 페이지의 다른 내용(DOM 등등)을 불러오는 동안 스크립트를 별도 스레드에서 불러오게 만듭니다. 덕분에 스크립트를 가져오는 동안 페이지 로딩이 중단되지 않습니다.
- `async` 속성을 지정한 스크립트는 다운로드가 끝나는 즉시 실행합니다.
  이렇게 하면 현재 페이지의 렌더링을 중단하며, 특정 실행 순서가 보장되지 않습니다.
- `defer` 속성을 지정한 스크립트는 순서를 유지한 채로 가져오며 모든 콘텐츠를 다 불러온 이후에 실행합니다.
- 스크립트를 즉시 실행해야 하고 종속성이 없는 경우 `async`를 사용하세요.
- 다른 스크립트에 의존하거나 DOM 로딩이 필요한 스크립트에는 `defer`를 사용하여 스크립트를 로드하고, 원하는 순서에 맞춰서 `<script>` 요소를 배치하세요.

## 주석

HTML 및 CSS와 마찬가지로 JavaScript 코드에서도 브라우저가 무시하는 주석을 작성할 수 있으며, 코드 작동 방식에 대한 지침을 동료 개발자(아니면 6개월 후에 코드를 다시 살펴보고 무엇을 했는지 기억이 나지 않는 여러분)에게 제공하기 위해 존재합니다.
주석은 매우 유용하며, 특히 규모가 큰 애플리케이션의 경우 자주 사용해야 합니다.
주석에는 두 종류가 있습니다.

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

> [!NOTE]
> 보통은 많은 주석이 적은 주석보다 낫지만, 변수가 무엇인지 설명하기 위해(변수 이름이 더 직관적이어야 함) 또는 매우 간단한 연산을 설명하기 위해(코드가 지나치게 복잡할 수 있음) 많은 주석을 추가하는 경우 주의해야 합니다.

## 요약

이로써 JavaScript의 세계로 한 걸음 내딛었습니다.
왜 JavaScript를 써야 하는지, 그리고 어떤 일을 할 수 있는지에 대해 익숙해지기 위해 이론부터 시작했습니다.
그 과정에서 몇 가지 코드 예제를 보고 JavaScript가 웹사이트의 나머지 코드와 어떻게 조화를 이루는지 등을 배웠습니다.

지금 당장은 JavaScript가 약간 버겁게 느껴질지도 모르겠지만, 너무 걱정하지 마세요. 이 과정에 걸친 간단한 단계들을 밟다 보면 전체적인 모습이 보일겁니다.
다음 글에서는 [바로 실전으로 들어가서](/ko/docs/Learn_web_development/Core/Scripting/A_first_splash) 스스로 JavaScript 예제를 만들어보도록 합시다.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
