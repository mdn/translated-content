---
title: 이벤트 입문
slug: Learn/JavaScript/Building_blocks/Events
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

이벤트(event)란 여러분이 프로그래밍하고 있는 시스템에서 일어나는 사건(action) 혹은 발생(occurrence)인데, 이는 여러분이 원한다면 그것들에 어떠한 방식으로 응답할 수 있도록 시스템이 말해주는 것입니다. 예를 들자면, 만약 유저가 웹페이지에 있는 버튼을 고른다면, 여러분은 그 사건에 인포메이션 박스를 표시함으로써 응답하기를 원할지도 모릅니다. 이 문서에서는, 우리는 이벤트에 대한 몇몇 중요한 개념을 논하고, 그것들이 브라우저에서 어떻게 작동하는지 살펴봅니다. 이것은 완전한 공부가 되지 않을 것입니다; 단지 지금 단계에서 여러분이 알아야 할 필요가 있는 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, HTML, CSS,
        <a href="/ko/docs/Learn/JavaScript/First_steps">JavaScript 첫걸음</a
        >에 대한 기본적인 이해
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        이벤트에 대한 필수적인 이론, 브라우저에서 이벤트가 어떻게 작동하는지,
        그리고 어떻게 다른 프로그래밍 환경에서 다를 지도 모르는지를 이해하기
      </td>
    </tr>
  </tbody>
</table>

## 일련의 운 좋은 사건들

위에서 언급했다시피, **이벤트**란 여러분이 프로그래밍하고 있는 시스템에서 일어나는 사건이나 발생입니다 — 시스템은 이벤트가 발생될 때 몇몇 종류의 신호를 생산(produce) (또는 "발생(fire)"시키고, 이벤트가 발생되었을 때 사건이 자동적으로 취해질 수 있는 메커니즘 (즉, 코드의 실행)을 제공합니다. 예를 들자면, 공항에서, 활주로가 이륙을 위해 막혀 있지 않을 때, 신호가 파일럿에게 전달됩니다. 결과적으로, 비행기는 안전하게 이륙할 수 있습니다.

![](mdn-mozilla-events-runway.png)

웹의 경우에, 이벤트는 브라우저 윈도우 내에서 발생되고, 그것이 거주하는 특정한 요소에 부착되는 경향이 있습니다 — 이것은 하나의 요소, 요소들의 집합, 현재 탭에 로드된 HTML 문서, 혹은 전체 브라우저 윈도우일지도 모릅니다. 발생될 수 있는 많은 각양각색의 이벤트 타입이 있습니다. 예를 들자면:

- 유저가 어떤 요소를 선택하거나 어떤 요소 위에 커서를 올려둡니다(hover).
- 유저가 키보드에서 키를 선택합니다.
- 유저가 브라우저 창의 크기를 재조정하거나 닫습니다.
- 웹 페이지가 로딩을 완료했습니다.
- 양식(form)이 제출되었습니다.
- 비디오가 재생되거나, 멈추거나, 혹은 끝났습니다.
- 오류가 발생했습니다.

여러분은 이것으로부터 (그리고 MDN [이벤트 레퍼런스](/ko/docs/Web/Events)를 흘낏 보는 것으로부터) 응답되어질 수 있는 **많은** 이벤트들이 있다는 것을 알 수 있습니다.

각각의 이용가능한 이벤트들은 **이벤트 핸들러**(event handler)를 가지고 있는데, 이는 이벤트가 발생되면 실행되는 코드 블럭 (보통 여러분과 같은 프로그래머가 만드는 JavaScript 함수)입니다. 그러한 코드 블럭이 이벤트에 응답해서 실행되기 위해 정의되었을 때, 우리는 **이벤트 핸들러를 등록**(register)했다고 말합니다. 알림: 이벤트 핸들러는 때때로 **이벤트 리스너**(event listener)라고 불립니다 — 이것들은 우리의 목적을 위해 꽤 교체할수 있지만, 그러나 엄밀히 말하자면, 그들은 같이 동작합니다. 리스너는 발생되는 이벤트에 대해 듣고, 핸들러는 발생되는 이벤트에 응답해서 실행되는 코드입니다.

> **참고:** #### 참고웹 이벤트는 코어 JavaScript 언어의 일부가 아닙니다 — 이것들은 브라우저에 내장된 API의 일부로서 정의됩니다.

### 간단한 예제

우리가 여기서 의미한 것의 간단한 예제를 봅시다. 여러분은 이미 많은 예제들에서 사용된 이벤트와 이벤트 핸들러를 보았지만, 단지 우리의 지식을 견고하게 하기 위해 요약해 봅시다. 다음의 예제에서, 우리는 하나의 {{htmlelement("button")}}을 가지고 있는데, 눌러졌을 때, 이는 배경이 무작위의 색으로 바뀌게 만듭니다:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

JavaScript는 다음과 같습니다:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
```

이 코드에서, {{domxref("Document.querySelector()")}} 함수를 사용하여, 우리는 `btn` 상수 내부에 버튼에 대한 참조를 저장했습니다. 우리는 또한 무작위의 숫자를 반환하는 함수를 정의했습니다. 코드의 세번째 부분은 이벤트 핸들러입니다. `btn` 상수는 [`<button>`](/ko/docs/Web/HTML/Element/button) 요소를 가리키고, 이 타입의 객체는 발생시킬 수 있는 얼마간의 이벤트를 가지고 있으므로, 이벤트 핸들러를 사용 가능합니다. [`onclick`](/ko/docs/Web/API/GlobalEventHandlers/onclick) 이벤트 핸들러 프로퍼티를 무작위의 RGB 색상을 생성하고 그것과 같은 [`<body>`](/ko/docs/Web/HTML/Element/body) [`background-color`](/ko/docs/Web/CSS/background-color)를 설정하는 코드를 포함하는 익명함수에 설정함으로써, 우리는 [`click`](/ko/docs/Web/API/Element/click_event) 이벤트 발생에 귀를 기울이고 있습니다.

이 코드는 언제든지 `<button>` 요소에서 click 이벤트가 발생될 때, 즉 언제든지 유저가 그것을 선택했을 때, 실행됩니다.

예제 출력은 다음과 같습니다:

{{ EmbedLiveSample('A_simple_example', '100%', 200, "", "", "hide-codepen-jsfiddle") }}

### 이것은 단지 웹 페이지가 아닙니다

이 지점에서 언급할 가치가 있는 다른 것은 이벤트는 JavaScript 특유의 것이 아니라는 것입니다 — 대부분의 프로그래밍 언어는 몇몇 종류의 이벤트 모델을 가지고 있고, 그 모델이 작동하는 방식은 종종 JavaScript의 방법과는 다릅니다. 사실, 웹 페이지를 위한 JavaScript에서의 이벤트 모델은 다른 환경에서 쓰이는 JavaScript에 대한 이벤트 모델과는 다릅니다.

예를 들자면, 개발자들이 JavaScript를 네트워크와 서버사이드 어플리케이션을 제작하기 위해 사용하는 것을 가능하게 하는 [Node.js](/ko/docs/Learn/Server-side/Express_Nodejs)는 매우 인기있는 JavaScript 런타임입니다. [Node.js 이벤트 모델](https://nodejs.org/docs/latest-v12.x/api/events.html)은 이벤트를 듣는 리스너와 이벤트를 주기적으로 발산하는 이미터(emitter)에 의존하고 있습니다 — 이것은 그렇게 다른 것처럼 들리지 않지만, 코드는 상당히 다른데, 이벤트 리스너를 등록하기 위해 `on()`, 이벤트 리스너를 등록하고 한 번 실행된 이후에 등록을 해제하는 `once()`같은 함수를 사용합니다. [HTTP connect 이벤트 문서](https://nodejs.org/docs/latest-v12.x/api/http.html#http_event_connect)는 좋은 예시를 제공합니다.

[WebExtensions](/ko/docs/Mozilla/Add-ons/WebExtensions)이라 불리는 기술을 사용하여, 여러분은 또한 크로스 브라우저 애드온(cross-browser add-on) — 브라우저 기능성 강화 — 을 개발하기 위해 JavaScript를 사용할 수 있습니다. 이 이벤트 모델은 웹 이벤트 모델과 유사하나, 조금 다릅니다 — 이벤트 리스너 프로퍼티들은 (`onmessage`가 아니라 `onMessage`와 같이) 카멜케이스(camel-case)화 되어있고, `addListener` 함수와 연결될 필요가 있습니다. 예시를 위해 [`runtime.onMessage` 페이지](/ko/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples)를 봐 보세요.

지금 배우는 단계에서는 그러한 다른 환경들에 대해서 아무것도 이해할 필요가 없습니다; 우리는 단지 이벤트가 다른 프로그래밍 환경에서 다를 수 있다는 것을 확실히 하고 싶었습니다.

## 웹 이벤트를 사용하는 방법들

이벤트 리스너 코드가 관련된 이벤트가 발생되었을 때 실행되도록 웹 페이지에 이것을 더하는 얼마간의 방법들이 있습니다. 이 섹션에서, 우리는 다양한 메커니즘을 관찰하고 어떤 것을 여러분이 사용해야만 하는지 논할 것입니다.

### 이벤트 핸들러 프로퍼티

이것들은 이 코스 동안에 우리가 가장 자주 봤던 이벤트 핸들러 코드를 포함하기 위해 존재하는 프로퍼티입니다. 위의 예제로 돌아가 봅시다.

```js
const btn = document.querySelector("button");

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
```

[`onclick`](/ko/docs/Web/API/GlobalEventHandlers/onclick) 프로퍼티는 이 상황에서 쓰이고 있는 이벤트 핸들러 프로퍼티입니다. 이것은 본질적으로 버튼에서 사용 가능한 다른 것들과 같은 프로퍼티지만 (예: [`btn.textContent`](/ko/docs/Web/API/Node/textContent), 또는 [`btn.style`](/ko/docs/Web/API/HTMLElement/style)), 이것은 특별한 타입입니다 — 어떤 코드와 동일한 것을 설정했을 때, 그 코드는 버튼에서 이벤트가 발생되었을 때 실행됩니다.

여러분은 또한 기명 함수 이름과 같은 핸들러 프로퍼티를 설정할 수 있습니다 ([자신만의 함수 만들기](/ko/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)에서 본 것처럼요). 다음은 아주 똑같이 동작합니다:

```js
const btn = document.querySelector("button");

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

사용 가능한 많은 가지각색의 이벤트 핸들러 프로퍼티가 있습니다. 실험해 봅시다.

우선, [random-color-eventhandlerproperty.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html)를 다운받으시고, 여러분의 브라우저에서 열어보세요. 이것은 우리가 이미 해본 단순한 무작위 색상 예제의 복사본입니다. 이제 `btn.onclick`를 다음의 다른 값들로 차례대로 바꿔 보시고, 예제에서 그 결과를 관찰해 보세요.

- [`btn.onfocus`](/ko/docs/Web/API/GlobalEventHandlers/onfocus)와 [`btn.onblur`](/ko/docs/Web/API/GlobalEventHandlers/onblur) — 색상은 버튼이 포커스되고 포커스가 해제되었을 때 바뀝니다; 버튼을 포커스하기 위해 탭 키를 눌러 보시고 다시 탭 키를 눌러서 버튼으로부터 포커스를 해제해 보세요. 이것들은 종종 양식 필드(form field)가 포커스되었을 때 그것에 채움(filling)에 대한 정보를 표시하기 위해 사용되거나, 만약 양식 필드가 올바르지 않은 값으로 채워진다면 에러 메시지를 표시하기 위해 사용됩니다.
- [`btn.ondblclick`](/ko/docs/Web/API/GlobalEventHandlers/ondblclick) — 오직 버튼이 더블 클릭되었을 때만 색상이 바뀝니다.
- [`window.onkeydown`](/ko/docs/Web/API/GlobalEventHandlers/onkeydown), [`window.onkeyup`](/ko/docs/Web/API/GlobalEventHandlers/onkeyup) — 키보드에서 키가 눌렸을 때 색상이 바뀝니다. `keydown` 과 `keyup`은 단지 각각 키 누름(keystroke)의 누름(key down)과 뗌(key up) 부분을 지칭합니다. 알림: 만약 여러분이 이 이벤트 핸들러를 버튼 그 자체에 등록한다면 이것은 작동하지 않습니다 — 우리는, 전체 브라우저를 나타내는, [window](/ko/docs/Web/API/Window)에 이것을 등록해야만 합니다.
- [`btn.onmouseover`](/ko/docs/Web/API/GlobalEventHandlers/onmouseover) 와 [`btn.onmouseout`](/ko/docs/Web/API/GlobalEventHandlers/onmouseout) — 각각 마우스 포인터가 버튼 위에 올라가 있을 때, 혹은 포인터가 버튼에서 벗어났을 때 색상이 바뀝니다.

몇몇 이벤트들은 일반적이고 거의 어디서나 사용 가능한 반면 (예: `onclick` 핸들러는 거의 어떠한 요소에서도 등록될 수 있습니다), 몇몇은 더욱 특수하고 오직 어떤 상황들에서만 유용합니다 (예: [onplay](/ko/docs/Web/API/GlobalEventHandlers/onplay)를 오직 {{htmlelement("video")}}와 같은, 특정한 요소에서만 사용하는 것은 타당합니다).

### 인라인 이벤트 핸들러 — 사용하지 마세요

여러분은 또한 코드에서 이것과 같은 패턴을 봤을 지도 모릅니다:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}
```

> **참고:** #### 참고여러분은 이 예제에 대한 [전체 소스 코드를](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerattributes.html) Github에서 찾을 수 있습니다 (또한 [실제로 작동하는 모습](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventhandlerattributes.html)도 보세요).

웹에서 찾아지는 가장 이른 이벤트 핸들러의 등록 방법은 위에서 보이는 것처럼 **이벤트 핸들러 HTML 어트리뷰트** (또는 **인라인 이벤트 핸들러**)을 포함합니다. — 어트리뷰트 값은 말 그대로 이벤트가 발생되었을 때 여러분이 실행하기를 원하는 JavaScript 코드입니다. 위의 예시는 같은 페이지의 {{htmlelement("script")}} 요소 안에서 정의된 함수를 호출하지만, 여러분은 또한 어트리뷰트 안에 직접적으로 JavaScript을 삽입할 수 있습니다. 예를 들자면:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

여러분은 HTML 어트리뷰트를 많은 이벤트 핸들러 프로퍼티와 동등한 것이라고 생각할 수도 있습니다; 그러나, 여러분은 이 방법을 사용해서는 안 됩니다 — 이 방법은 나쁜 습관이라고 여겨집니다. 만약 여러분이 뭔가를 정말 빨리 한다면 이벤트 핸들러 어트리뷰트를 사용하는 것이 쉬워 보일지도 모르나, 이것은 빠르게 다루기 힘들어지고 비효율적이 됩니다.

우선, HTML과 JavaScript를 뒤죽박죽으로 만드는 것은 좋은 생각이 아닙니다. 왜냐하면 분석하기(parse)가 어려워지기 때문입니다 — JavaScript를 분리한 채로 놔두는 것이 좋은 습관입니다; 만약 이것이 분리된 파일 안에 있다면 여러분은 이것을 다수의 HTML 문서에 적용할 수 있습니다.

하나의 파일이더라도, 인라인 이벤트 핸들러는 좋은 생각이 아닙니다. 하나의 버튼은 괜찮지만, 100개의 버튼이라면 어떡할 건가요? 여러분은 파일에 100개의 어트리뷰트를 더해야만 합니다; 이것은 빠르게 유지보수의 악몽으로 변할 것입니다. JavaScript와 함께, 다음과 같은 것을 통해서, 여러분은 버튼이 얼마나 있든 간에 페이지에 있는 모든 버튼에 쉽게 이벤트 핸들러를 추가할 수 있습니다.

```js
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
```

여기서의 또 다른 옵션은 [`NodeList`](/ko/docs/Web/API/NodeList) 객체에서 사용 가능한 [`forEach()`](/ko/docs/Web/API/NodeList/forEach) 내장 메서드를 사용하는 것이라는 데 주목해 주세요.

```js
buttons.forEach(function (button) {
  button.onclick = bgChange;
});
```

> **참고:** #### 참고프로그래밍 로직을 콘텐츠로부터 분리하는 것은 또한 여러분의 사이트를 검색 엔진에 더욱 친화적으로 만듭니다.

### 이벤트 핸들러를 추가하고 제거하기

이벤트 핸들러를 더하는 현대적인 메커니즘은 [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener) 메서드입니다. 이것을 사용해서, 우리는 무작위 색상 예제를 다음과 같이 재작성할 수 있습니다.

```js
const btn = document.querySelector("button");

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", bgChange);
```

> **참고:** 여러분은 이 예제에 대한 [전체 소스 코드를](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-addeventlistener.html) Github에서 찾을 수 있습니다 (또한 [실제로 작동하는 모습](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-addeventlistener.html)도 보세요).

`addEventListener()` 함수 안에, 우리는 두 매개변수(parameter)를 명시합니다: 우리가 이 핸들러에 등록하고자 하는 이벤트의 이름과, 그것에 응답하여 우리가 실행하기를 원하는 핸들러 함수를 구성하는 코드입니다. 알림: `addEventListener()` 내부에, 다음과 같이, 익명 함수 안에 모든 코드를 넣는 것은 완벽히 괜찮습니다:

```js
btn.addEventListener("click", function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
});
```

이 메커니즘은 앞에서 논한 낡은 메커니즘들에 비해 몇몇 이점을 가지고 있습니다. 첫째로, 이전에 추가한 이벤트 핸들러를 제거하는, [`removeEventListener()`](/ko/docs/Web/API/EventTarget/removeEventListener)라는 대응 관계에 있는 함수가 있습니다. 예를 들어, 이것은 이 섹션의 첫번째 코드 블록 안에 있는 이벤트 핸들러를 제거할 것입니다.

```js
btn.removeEventListener("click", bgChange);
```

이벤트 핸들러는 또한 {{domxref("AbortSignal")}}을 {{domxref("EventTarget/addEventListener()", "addEventListener()")}}에 전달하고, 그리고서 나중에, `AbortSignal`을 소유하고 있는 컨트롤러에서 {{domxref("AbortController/abort()", "abort()")}}를 호출함으로써 제거할 수도 있습니다. 예를 들자면, 우리가 `AbortSignal`로 제거할 수 있는 이벤트 핸들러를 추가하기 위해서는:

```js
const controller = new AbortController();
btn.addEventListener(
  "click",
  function () {
    var rndCol =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal },
); // 이 핸들러에 AbortSignal을 전달
```

그리고서 위의 코드로 생성된 이벤트 핸들러는 다음과 같이 제거될 수 있습니다:

```js
controller.abort(); // 이 컨트롤러와 연관된 어떠한/모든 이벤트 핸들러를 제거
```

간단하고, 작은 프로그램에 대해서는, 낡고, 사용되지 않는 이벤트 핸들러를 청소하는 것은 필수적이지 않습니다 — 하지만 더 크고, 더욱 복잡한 프로그램에 대해서는, 이것은 효율성을 향상시킬 수 있습니다. 더해서, 이벤트 핸들러를 제거할 수 있는 능력은 같은 버튼이 다른 상황에서 다른 작동을 수행하도록 하는 것을 가능케 합니다.

앞서 논한 낡은 메커니즘에 대해 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 가 가지고 있는 두 번째 이점은 같은 리스너에 대해 다수의 핸들러를 등록하는 것을 가능하게 한다는 것입니다. 다음의 두 핸들러는 둘 다 적용되지 않을 것입니다:

```js
myElement.onclick = functionA;
myElement.onclick = functionB;
```

두 번째 줄이 첫 번째 줄에 의해 설정된 `onclick`의 값을 덮어씁니다. 그러나, 다음은 작동할 것입니다.

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

두 함수 모두는 이제 요소가 선택되었을 때 실행될 것입니다.

추가적으로, 이 이벤트 메커니즘과 함께 이용 가능한 옵션과 강력한 다른 기능들이 있습니다. 이것들은 이 문서의 범위를 조금 벗어나지만, 만약 그것들을 읽고 싶으시다면, [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener) 와 [`removeEventListener()`](/ko/docs/Web/API/EventTarget/removeEventListener) 참조 페이지를 방문해 보세요.

### 어떤 메커니즘을 사용해야만 하는가?

이 세 가지 메커니즘 중에서, 여러분은 HTML 이벤트 핸들러 어트리뷰트를 사용해서는 안 됩니다 — 이것은 위에서 언급되었다시피, 구식이고, 나쁜 습관입니다.

다른 두 가지는, 적어도 간단한 사용에 대해서는, 비교적 서로 바꿀 수 있습니다.

- 이벤트 핸들러 프로퍼티는 더 적은 능력과 옵션을 가지고 있지만, 더 나은 크로스 브라우저 호환성을 가지고 있습니다 (Internet Explorer 8만큼 옛날 브라우저에서도 지원됨). 여러분은 아마도 학습을 시작하면서 이것들과 함께 시작해야 합니다.
- DOM Level 2 이벤트 (`addEventListener()` 등)은 더욱 강력하지만, 또한 복잡하며 덜 지원됩니다 (Internet Explorer 9만큼 옛날 브라우저에서 지원됨). 여러분은 또한 이것들로 실험해봐야 하고, 가능한 곳에서 사용해봐야 합니다.

세 번째 메커니즘의 주된 이점은, 필요하다면 `removeEventListener()`을 사용하여 이벤트 핸들러 코드를 삭제할 수 있고, 만약 요구된다면 같은 타입의 다수의 리스너를 요소들에 추가할 수 있다는 것입니다. 예를 들어, 여러분은 요소에 `addEventListener('click', function() { ... })`를, 두 번째 인자(argument)에 다른 함수를 명시한 채로, 여러 번 호출할 수 있습니다. 이것은 이벤트 핸들러 프로퍼티로는 불가능합니다. 왜냐하면 프로퍼티를 설정하려는 어떠한 연이은 시도도 앞선 것들을 덮어쓸 것이기 때문입니다. 예를 들자면:

```js
element.onclick = function1;
element.onclick = function2;
등등.
```

> **참고:** #### 참고만약 여러분이 Internet Explorer 8보다 오래된 브라우저를 지원하라고 요청받았다면, 그러한 아주 오래된 브라우저들은 새로운 브라우저들과는 다른 이벤트 모델을 사용하므로, 여러분은 어려움을 만날 지도 모릅니다. 하지만 걱정하지 마세요, 대부분의 JavaScript 라이브러리들은 (예를 들자면 `jQuery`) 크로스 브라우저 차이를 분리하는 내장 함수들을 가지고 있습니다. 이 배움의 단계에서 이것을 너무 많이는 걱정하지 마세요.

## 다른 이벤트 개념들

이 섹션에서는, 우리는 간략하게 이벤트에 관련된 몇몇 고급 개념들을 다룹니다. 이 개념들을 이 지점에서 완전히 이해하는 것은 중요하지 않지만, 여러분이 마주칠 가능성이 있는 몇몇 코드 패턴의 설명을 제공할지도 모릅니다.

### 이벤트 객체

때때로 이벤트 핸들러 함수 내부에서, 여러분은 `event`, `evt`, 혹은 `e`와 같은 이름으로 명명된 매개변수(parameter)를 봤을 것입니다. 이것들은 **이벤트 객체**라고 불리고, 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에 자동으로 전달됩니다. 예시로, 무작위 색상 예제를 다시 약간 재작성해 봅시다.

```js
function bgChange(e) {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> **참고:** #### 참고여러분은 이 예제에 대한 [전체 소스 코드를](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventobject.html) Github에서 찾을 수 있습니다 (또한 [실제로 작동하는 모습](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)도 보세요).

여기서 여러분은 우리가 이벤트 객체, **e**를, 함수에 포함하고, 함수에서 배경 색상 스타일을 — 버튼 그 자체인 — `e.target`에서 설정한 것을 볼 수 있습니다. 이벤트 객체의 `target` 프로퍼티는 항상 이벤트가 발생된 요소에 대한 참조입니다. 그래서, 이 예제에서, 우리는 무작위의 배경색을 페이지가 아니라, 버튼에 설정했습니다.

> **참고:** #### 참고여러분은 이벤트 객체에 대해 여러분이 좋아하는 어떠한 이름이든 사용할 수 있습니다 — 여러분은 단지 이벤트 핸들러 함수 내에서 그것을 참조하기 위해 사용할 수 있는 이름을 선택할 필요가 있습니다. `e`/`evt`/`event`가 가장 일반적으로 개발자들에 의해 사용됩니다. 왜냐하면 짧고 기억하기 쉽기 때문입니다. 일관적인 것은 항상 좋습니다 — 여러분 자신과, 그리고 만약 가능하다면 타인과.

여러분이 같은 이벤트 핸들러를 다수의 요소에 설정하고 그것들에 이벤트가 발생되었을 때 그것들 모두에 뭔가를 하기를 원할 때 `e.target`은 엄청나게 유용합니다. 예를 들자면, 여러분에게 선택되었을 때 사라지는 16개의 타일 세트가 있다고 합시다. 타일을 몇몇 더욱 어려운 방법으로 선택해야만 하는 것 대신에, `e.target`으로서 단지 타일을 사라지게 항상 설정할 수 있는 것은 유용합니다. 다음의 예제에서 (전체 소스 코드는 [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/useful-eventtarget.html)에서 찾을 수 있습니다; [또한 실제로 작동하는 모습](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)도 보세요), 우리는 16개의 {{htmlelement("div")}} 요소를 JavaScript를 통해 생성했습니다. 우리는 그리고서 {{domxref("document.querySelectorAll()")}}을 사용해 그것들 모두를 선택했고, 그리고서 선택되었을 때 무작위 색상이 적용되도록 만드는 `onclick` 핸들러를 각각에 추가하며 요소들을 순회했습니다:

```js
const divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function (e) {
    e.target.style.backgroundColor = bgChange();
  };
}
```

출력은 다음과 같습니다 (타일들을 클릭해 보세요 — 즐겨 보세요):

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Useful event target example</title>
    <style>
      div {
        height: 100px;
        width: 25%;
        float: left;
      }
    </style>
  </head>
  <body>
    <script>
      for (let i = 1; i <= 16; i++) {
        const myDiv = document.createElement("div");
        myDiv.style.backgroundColor = "red";
        document.body.appendChild(myDiv);
      }

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function bgChange() {
        var rndCol =
          "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        return rndCol;
      }

      const divs = document.querySelectorAll("div");

      for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function (e) {
          e.target.style.backgroundColor = bgChange();
        };
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_example', '100%', 400, "", "", "hide-codepen-jsfiddle") }}

여러분이 만날 대부분의 이벤트 핸들러들은 이벤트 객체에서 사용 가능한 표준 프로퍼티와 함수 (메서드) 집합을 가지고 있습니다; 전체 리스트를 위해 {{domxref("Event")}} 객체 레퍼런스를 참조해 보세요. 그러나 몇몇의 더욱 고급 핸들러들은 그들이 기능하기를 필요로 하는 추가적인 데이터를 포함하는 전문적인 프로퍼티들을 추가합니다. 예를 들어, [Media Recorder API](/ko/docs/Web/API/MediaStream_Recording_API)는 `dataavailable` 이벤트를 가지고 있는데, 이는 몇몇 오디오나 비디오가 기록되고 뭔가를 할 수 있을 때 (예를 들자면 저장하거나, 다시 재생하거나) 발생됩니다. 해당하는 [ondataavailable](/ko/docs/Web/API/MediaRecorder/ondataavailable) 핸들러의 이벤트 객체는 여러분이 그것에 접근하거나 그것으로 무언가를 할 수 있게 하는 녹화된 오디오나 비디오 데이터를 포함하는 이용 가능한 `data` 프로퍼티를 가지고 있습니다.

### 기본 행동 방지하기

때때로, 이벤트가 기본으로 하는 것을 방지하고 싶은 상황에 마주칠 수 있습니다. 가장 일반적인 예제는 웹 양식에 관한 것인데, 예를 들자면, 커스텀 등록 양식입니다. 세부 사항을 채우고 제출 버튼을 선택했을 때, 자연적인 행동은 데이터가 처리를 위해 서버에 있는 명시된 페이지로 제출되는 것이고, 브라우저는 몇몇 종류의 "성공 메시지" 페이지로 리다이렉트되는 것입니다 (혹은 만약 다른 것이 명시되지 않았다면, 같은 페이지로).

문제는 유저가 데이터를 옳게 제출하지 않았을 때 발생합니다 — 개발자로서, 여러분은 서버로의 제출을 방지하고 무엇이 잘못되었고 옳게 되기 위해 무엇이 완료되어야 하는지를 말하는 에러 메시지를 주기를 원합니다. 몇몇 브라우저는 자동 양식 데이터 확인 기능을 제공하지만, 많은 브라우저들은 그렇지 않으므로, 그것들에 의존하지 않고 여러분만의 점검 기능을 구현하는 것이 낫습니다. 간단한 예제를 살펴봅시다.

우선, 이름과 성을 입력하기를 요구하는 간단한 HTML 양식입니다.

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

이제 JavaScript입니다 — 여기 우리는 텍스트 필드가 비었는지를 검사하는 [`onsubmit`](/ko/docs/Web/API/GlobalEventHandlers/onsubmit) 이벤트 핸들러 (제출 이벤트는 양식이 제출되었을 때 발생됩니다) 내부에 아주 간단한 점검을 구현했습니다. 만약 텍스트 필드가 비었다면, 우리는 이벤트 객체에 있는 — 양식 제출을 멈추는 — [`preventDefault()`](/ko/docs/Web/API/Event/preventDefault) 함수를 호출하고 그리고서 유저에게 무엇이 잘못되었는지를 말하기 위해 양식 아래에 있는 단락에 에러 메시지를 표시합니다.

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
};
```

명백히, 이것은 아주 약한 양식 확인입니다 — 예를 들자면, 필드에 공백이나 숫자가 입력된 채의 양식을 확인하는 유저를 멈추지 못할 것입니다 — 하지만 예제의 목적으로라면 괜찮습니다. 결과는 다음과 같습니다.

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 140, "", "", "hide-codepen-jsfiddle") }}

> **참고:** #### 참고전체 코드 소스는 [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/preventdefault-validation.html)에서 확인하실 수 있습니다 (또한 여기서 [실제로 작동하는 모습](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)도 보세요).

### 이벤트 버블링과 캡처

여기서 다룰 마지막 주제는 여러분이 종종 마주치지 못할 무언가이지만, 만약 여러분이 이것을 이해하지 못한다면 진짜 고통일 것입니다. 이벤트 버블링과 캡처는 같은 이벤트 타입의 두 이벤트 핸들러가 한 요소에서 작동되었을 때 무슨 일이 일어나는지를 기술하는 두 메커니즘입니다. 이것을 쉽게 만드는 예시를 봅시다. [show-video-box.html](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box.html) 예시와 ([소스 코드](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html)를 다른 탭에서) 여세요. 이것은 또한 아래에서 바로 이용 가능합니다.

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Show video box example</title>
    <style>
      div {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 480px;
        height: 380px;
        border-radius: 10px;
        background-color: #eee;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.1)
        );
      }

      .hidden {
        left: -50%;
      }

      .showing {
        left: 50%;
      }

      div video {
        display: block;
        width: 400px;
        margin: 40px auto;
      }
    </style>
  </head>
  <body>
    <button>Display video</button>

    <div class="hidden">
      <video>
        <source
          src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.mp4"
          type="video/mp4" />
        <source
          src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm"
          type="video/webm" />
        <p>
          Your browser doesn't support HTML5 video. Here is a
          <a href="rabbit320.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>

    <script>
      const btn = document.querySelector("button");
      const videoBox = document.querySelector("div");
      const video = document.querySelector("video");

      btn.onclick = function () {
        displayVideo();
      };

      function displayVideo() {
        if (videoBox.getAttribute("class") === "hidden") {
          videoBox.setAttribute("class", "showing");
        }
      }

      videoBox.addEventListener("click", function () {
        videoBox.setAttribute("class", "hidden");
      });

      video.addEventListener("click", function () {
        video.play();
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_video_example', '100%', 500, "", "", "hide-codepen-jsfiddle") }}

이것은 {{htmlelement("video")}}를 내부에 가지고 있는 {{htmlelement("div")}}를 보이고 감추는 아주 간단한 예제입니다.

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML5 video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

{{htmlelement("button")}}이 선택되었을 때, `<div>`의 클래스 어트리뷰트를 `hidden`에서 `showing`으로 바꿈으로써, 비디오는 표시됩니다. (예제의 CSS는 이 두 클래스를 포함하고 있는데, 각각 박스를 화면에서 벗어나게 만들고 들어오게 위치시킵니다):

```js
btn.onclick = function () {
  videoBox.setAttribute("class", "showing");
};
```

우리는 그리고서 두 개의 `onclick` 이벤트 핸들러를 추가합니다 — 첫번째는 `<div>`에 대한 것이고 두번째는 `<video>`에 대한 것입니다. 이제, 비디오 외부의 `<div>` 영역이 선택되었을 때, 박스는 다시 숨겨져야만 하고 비디오 그 자체가 선택되었을 때, 비디오는 재생을 시작해야만 합니다.

```js
videoBox.onclick = function () {
  videoBox.setAttribute("class", "hidden");
};

video.onclick = function () {
  video.play();
};
```

하지만 문제가 있습니다 — 현재, 비디오를 클릭했을 때 이것은 재생을 시작하나, 동시에 `<div>`가 숨겨지는 것을 유발합니다. 이것은 왜냐하면 비디오가 `<div>` 내부에 있기 때문입니다 — 비디오는 div의 부분입니다 — 그래서 비디오를 선택하는 것은 실제로는 위의 _두 이벤트 핸들러를 다_ 실행합니다.

#### 버블링과 캡처링 설명

부모 요소를 가지고 있는 요소에서 이벤트가 발생되었을 때 (이 경우, {{htmlelement("video")}}는 부모로서의 {{htmlelement("div")}}를 가지고 있습니다), 현대의 브라우저들은 두 가지 다른 단계(phase)를 실행합니다 — **캡처링**(capturing) 단계와 **버블링**(bubbling) 단계입니다.

**캡처링** 단계에서는:

- 브라우저는 요소의 가장 바깥쪽의 조상 ({{htmlelement("html")}})이 캡처링 단계에 대해 그것에 등록된 `onclick` 이벤트 핸들러가 있는지를 확인하기 위해 검사하고, 만약 그렇다면 실행합니다.
- 그리고서 `<html>` 내부에 있는 다음 요소로 이동하고 같은 것을 하고, 그리고서 그 다음 요소로 이동하고, 실제로 선택된 요소에 닿을 때까지 계속합니다.

**버블링** 단계에서는, 정확히 반대의 일이 일어납니다:

- 브라우저는 선택된 요소가 버블링 단계에 대해 그것에 등록된 `onclick` 이벤트 핸들러를 가지고 있는지 확인하기 위해 검사하고, 만약 그렇다면 실행합니다.
- 그리고서 그것은 바로 다음의 조상 요소로 이동하고 같은 일을 하고, 그리고서 그 다음 요소로 이동하고, `<html>` 요소에 닿을 때까지 계속합니다.

[![](bubbling-capturing.png)](bubbling-capturing.png)

(더 큰 도표를 보려면 이미지를 클릭하세요)

현대의 브라우저들은, 기본으로, 모든 이벤트 핸들러들은 버블링 단계에 대해 등록되어 있습니다. 그래서 우리의 현재 예제에서는, 비디오를 선택했을 때, 이벤트는 `<video>` 요소로부터 밖으로 나가 `<html>` 요소까지 올라갑니다(bubble). 그 동안 다음이 일어납니다:

- `video.onclick...` 핸들러를 발견하고 실행하므로, 비디오가 먼저 재생을 시작합니다.
- 그리고서 `videoBox.onclick...` 핸들러를 발견하고 실행하므로, 비디오는 또한 숨겨집니다.

> **참고:** #### 참고버블링과 캡처링, 두 타입의 이벤트 핸들러가 모두 존재하는 경우에, 캡처링 단계가 먼저 실행되고, 이어서 버블링 단계가 실행됩니다.

#### stopPropagation()으로 문제 고치기

이것은 몹시 짜증나는 움직임이지만, 고칠 방법이 있습니다! 표준 [`Event`](/ko/docs/Web/API/Event) 객체는 [`stopPropagation()`](/ko/docs/Web/API/Event/stopPropagation)라 불리는 사용 가능한 함수를 가지고 있는데, 핸들러의 이벤트 객체가 호출되었을 때, 이는 첫번째 핸들러가 실행되지만 이벤트가 더 이상 위로 전파되지 않도록 만들어, 더 이상의 핸들러가 실행되지 않도록 합니다.

그러므로, 이전 코드 블럭에 있는 두 번째 핸들러 함수를 다음으로 변경함으로써 우리는 현재의 문제를 고칠 수 있습니다:

```js
video.onclick = function (e) {
  e.stopPropagation();
  video.play();
};
```

[show-video-box.html 소스 코드](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html)를 다운받아 직접 고쳐볼 수도 있고, [show-video-box-fixed.html](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html)에서 고쳐진 결과를 볼 수도 있습니다 (또한 여기서 [소스 코드](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box-fixed.html)를 보세요).

> **참고:** #### 참고왜 캡처링과 버블링으로 애를 쓰냐구요? 글쎄요, 브라우저들이 지금보다 훨씬 덜 호환되던 옛날의 좋지 못하던 시절에, Netscape는 오직 이벤트 캡처링만을 사용했고, Internet Explorer는 오직 이벤트 버블링만을 사용했습니다. W3C가 이 움직임을 표준화하고 합의에 이르기를 시도하기로 결정했을 때, 그들은 양 쪽을 다 포함하는 이 시스템을 채용하게 되었는데, 이것이 현대 브라우저들이 구현한 것입니다.

> **참고:** #### 참고위에서 언급했다시피, 기본적으로 모든 이벤트 핸들러는 버블링 단계에 등록되어 있고, 이것은 대부분의 경우 더 타당합니다. 만약 정말로 이벤트를 캡처링 단계에 대신 등록하기를 원한다면, [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용하고, 옵션인 세 번째 프로퍼티를 `true`로 설정하여 핸들러를 등록함으로써 그렇게 할 수 있습니다.

#### 이벤트 위임(Event delegation)

버블링은 또한 **이벤트 위임**의 이점을 취할 수 있게 합니다 — 이 개념은 만약 다수의 자식 요소 중 하나를 선택했을 때 코드를 실행하기를 원한다면, 모든 자식에 개별적으로 이벤트 리스너를 설정해야만 하는 것 대신 이벤트 리스너를 그들의 부모에 설정하고 그들에게서 일어난 이벤트가 그들의 부모에게까지 올라오게 할 수 있다는 사실에 의존합니다. 기억하세요, 버블링은 이벤트 핸들러에 대해 이벤트가 발생된 요소를 먼저 검사하고서, 요소의 부모 등등으로 올라가는 것을 포함합니다.

하나의 좋은 예시는 일련의 리스트 아이템들입니다 — 만약 각각이 선택되었을 때 메시지를 띄우기(pop up)를 원한다면, 여러분은 `click` 이벤트 리스너를 부모 `<ul>`에 설정할 수 있고, 이벤트들은 리스트 아이템들에서 `<ul>`까지 올라갈 것입니다.

이 개념은 David Walsh의 블로그에서, 다수의 예제와 함께 더 설명됩니다. [어떻게 JavaScript 이벤트 위임은 작동하는가](https://davidwalsh.name/event-delegate)를 보세요..

## 실력을 평가해 보세요!

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 이벤트](/ko/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events).

## 결론

여러분은 이제 이 이른 단계에서의 웹 이벤트에 대해 알아야 할 모든 것들을 알고 계실 것입니다. 언급했듯이, 이벤트는 코어 JavaScript의 일부가 정말 아닙니다 — 이것들은 브라우저 웹 API에 정의되어 있습니다.

또한, JavaScript가 쓰이는 다른 맥락들은 다른 이벤트 모델들을 가지고 있다는 것을 이해하는 것은 중요합니다 — 웹 API에서 브라우저 WebExtensions과 Node.js (서버사이드 JavaScript)와 같은 다른 영역들까지. 우리는 이 모든 영역을 지금 여러분이 이해하기를 기대하지는 않지만, 이것은 여러분이 웹 개발을 배우며 나아가는 동안 이벤트의 기본을 이해하는 것을 분명히 돕습니다.

만약 뭐든지 이해하지 못한 게 있다면, 자유롭게 이 문서를 다시 읽거나, [문의하기](https://discourse.mozilla.org/c/mdn/learn)에서 도움을 요청해 보세요.

## 같이 보기

- [domevents.dev](https://domevents.dev/) — 탐험을 통해 DOM 이벤트 시스템의 움직임에 대한 배울 수 있는 매우 유용한 인터랙티브 놀이터 앱
- [이벤트 참고서](/ko/docs/Web/Events)
- [이벤트 순서](https://www.quirksmode.org/js/events_order.html) (캡처링과 버블링에 대한 논의) — Peter-Paul Koch가 작성한 뛰어나게 상세한 글
- [이벤트 접근](https://www.quirksmode.org/js/events_access.html) (이벤트 객체에 대한 논의) — Peter-Paul Koch가 작성한 또 다른 뛰어나게 상세한 글

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
