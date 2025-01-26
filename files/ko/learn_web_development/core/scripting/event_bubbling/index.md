---
title: 이벤트 버블링
slug: Learn_web_development/Core/Scripting/Event_bubbling
original_slug: Learn/JavaScript/Building_blocks/Event_bubbling
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

웹 페이지는 제목, 텍스트 단락, 이미지, 버튼 등 "요소"로 구성되어 있으며 이러한 요소에 발생하는 이벤트를 수신할 수 있다는 것을 살펴보았습니다. 예를 들어, 버튼에 수신기를 추가하면 사용자가 버튼을 클릭했을 때 실행됩니다.

또한 이러한 요소가 서로 "중첩"될 수 있다는 것을 보았습니다. 예를 들어, {{htmlelement("button")}}은 {{htmlelement("div")}} 요소 안에 놓일 수 있습니다. 이 때 `<div>` 요소를 "부모" 요소라고 부르고 `<button>`을 "자식" 요소라고 부릅니다.

이번 장에서는 부모 요소에 이벤트 수신기를 추가했을 때 사용자가 자식 요소를 클릭하면 어떤 일이 일어나는지 살펴보겠습니다.

## 이벤트 버블링 소개

### 부모 요소에 수신기 설정하기

다음과 같은 웹 페이지가 있다고 가정해 봅시다.

```html
<div id="container">
  <button>여기를 클릭하세요!</button>
</div>
<pre id="output"></pre>
```

여기서 버튼은 다른 요소인 {{HTMLElement("div")}} 안에 있습니다. 이 `<div>` 요소는 내부에 포함된 요소의 **부모**라고 합니다. 부모에 클릭 이벤트 처리기를 추가한 다음 버튼을 클릭하면 어떻게 될까요?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 요소를 클릭했습니다.\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

사용자가 버튼을 클릭하면 부모가 클릭 이벤트를 방출하는 것을 볼 수 있습니다.

```plain
DIV 요소를 클릭했습니다.
```

버튼이 `<div>` 안에 있으므로 버튼을 클릭하면 암시적으로 버튼 안에 있는 요소도 클릭하게 됩니다.

### 버블링 예제

버튼과 부모 "둘 다" 이벤트 수신기를 추가하면 어떻게 될까요?

```html
<body>
  <div id="container">
    <button>여기를 클릭하세요!</button>
  </div>
  <pre id="output"></pre>
</body>
```

버튼과 부모(`<div>`), 그리고 두 요소를 모두 포함하는 {{HTMLElement("body")}} 요소에 클릭 이벤트 처리기를 추가해 보겠습니다.

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 요소를 클릭했습니다.\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Bubbling example', '100%', 200, "", "") }}

사용자가 버튼을 클릭하면 세 요소 모두 클릭 이벤트를 방출하는 것을 볼 수 있습니다.

```plain
BUTTON 요소를 클릭했습니다.
DIV 요소를 클릭했습니다.
BODY 요소를 클릭했습니다.
```

이 경우는 다음과 같습니다.

- 버튼 클릭이 먼저 일어납니다.
- 그 다음에 부모(`<div>` 요소) 클릭이 일어납니다.
- 그리고 `<div>` 요소의 부모(`<body>` 요소) 클릭이 일어납니다.

이를 이벤트가 클릭한 가장 안쪽의 요소에서 **상위로 버블링**된다고 설명할 수 있습니다.

이 동작은 유용할 수도 있고 예상치 못한 문제를 일으킬 수도 있습니다. 다음 섹션에서는 이로 인해 발생하는 문제를 살펴보고 해결책을 찾아보겠습니다.

### 동영상 플레이어 예제

이 예제에서 페이지에 처음에는 숨겨져있는 동영상과 "동영상 표시"라는 버튼이 있습니다. 우리는 다음과 같은 상호작용을 원합니다.

- 사용자가 "동영상 표시" 버튼을 클릭하면 동영상이 포함된 상자를 표시하지만 재생하지는 않습니다.
- 사용자가 동영상을 클릭하면 재생합니다.
- 사용자가 동영상 외부의 상자 어딘가를 클릭하면 상자를 숨깁니다.

HTML은 다음과 같습니다.

```html
<button>동영상 표시</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      이 브라우저는 HTML 동영상을 지원하지 않습니다. 대신
      <a href="rabbit320.mp4">동영상 링크</a>를 제공합니다.
    </p>
  </video>
</div>
```

HTML에는 다음이 포함됩니다.

- `<button>` 요소
- 초기에 `class="hidden"` 특성을 갖는 `<div>` 요소
- `<div>` 요소 내부에 중첩된 `<video>` 요소.

CSS 를 사용해 `"hidden"` 클래스를 설정한 요소를 숨기고 있습니다.

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

JavaScript는 다음과 같습니다.

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

이렇게 하면 세 개의 `'click'` 이벤트 수신기가 추가됩니다.

- 하나는 `<button>`에 있으며, `<video>`를 포함하는 `<div>`를 표시합니다.
- 하나는 `<video>`에 있으며, 동영상을 재생합니다.
- 하나는 `<div>`에 있으며, 동영상을 숨깁니다.

예제가 어떻게 동작하는지 살펴보겠습니다.

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

버튼을 클릭하면 컨테이너와 그 안에 있는 동영상이 표시됩니다. 하지만 동영상을 클릭하면 동영상은 재생되지만 상자는 다시 숨겨집니다!

동영상은 `<div>` 안에 있으며 그 일부입니다. 따라서 동영상을 클릭하면 두 이벤트 처리기가 "모두" 실행되어 이런 동작이 일어납니다.

### stopPropagation() 으로 문제 해결하기

이전 섹션에서 보았듯이 이벤트 버블링은 때때로 문제를 일으킬 수 있지만 이를 방지하는 방법이 있습니다.
[`Event`](/ko/docs/Web/API/Event) 객체에는 [`stopPropagation()`](/ko/docs/Web/API/Event/stopPropagation)이라는 함수가 있으며 이벤트 처리기 내에서 호출되면 이벤트가 다른 요소로 버블링되는 것을 방지합니다.

JavaScript를 다음과 같이 변경하여 현재 문제를 해결할 수 있습니다.

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

`<video>` 요소의 `'click'` 이벤트 처리기에서 이벤트 객체에 `stopPropagation()`을 호출하기만 하면 됩니다. 이렇게 하면 해당 이벤트가 상위 박스로 버블링되는 것을 멈출 수 있습니다. 이제 버튼을 클릭하고 동영상을 클릭해 보세요.

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html hidden
<button>동영상 보기</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      이 브라우저는 HTML 동영상을 지원하지 않습니다. 대신
      <a href="rabbit320.mp4">동영상 링크</a>를 제공합니다.
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

## 이벤트 캡처

이벤트 전파의 또 다른 형태로 "이벤트 캡처"가 있습니다. 이것은 이벤트 버블링과 비슷하지만 순서가 반대입니다. 즉, 이벤트가 대상의 가장 안쪽의 대상 요소에서 발생해서 그 다음으로 중첩이 적은 요소순으로 전파되는게 아니라, 반대로 "가장 적게 중첩된" 요소에서 발생해서 그 다음으로 중첩이 많은 요소순으로 대상에 도달할 때까지 전파됩니다.

이벤트 캡처는 기본적으로 비활성화되어 있습니다. 활성화하려면 `addEventListener()`에서 `capture` 옵션을 전달해야 합니다.

이 예제는 `capture` 옵션을 사용한다는 점을 제외하면 앞서 본 [버블링 예제](#버블링_예제)와 동일합니다.

```html
<body>
  <div id="container">
    <button>클릭해주세요!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 요소를 클릭했습니다.\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Event capture', '100%', 200, "", "") }}

이 경우 메시지 순서는 반대입니다. `<body>` 이벤트 처리기가 먼저 실행되고, 그 다음에 `<div>` 이벤트 처리기가 실행되고, 그 다음에 `<button>` 이벤트 처리기가 실행됩니다.

```plain
BODY 요소를 클릭했습니다.
DIV 요소를 클릭했습니다.
BUTTON 요소를 클릭했습니다.
```

굳이 왜 버블링과 캡처링을 둘 다 쓰는걸까요? 브라우저 간의 호환성이 지금보다 훨씬 낮았던 예전에 Netscape는 이벤트 캡처링만 사용했고 Internet Explorer는 이벤트 버블링만 사용했습니다. W3C가 동작을 표준화하기로 결정하고 합의할 때, 최신 브라우저에 구현된 것처럼 둘 다 포함하는 시스템이 되었습니다.

기본적으로 거의 모든 이벤트 처리기는 버블링 단계에서 등록되며, 대부분의 경우 이 동작이 더 합리적입니다.

## 이벤트 위임

이전 섹션에서는 이벤트 버블링으로 인해 발생하는 문제와 그 해결 방법을 살펴보았습니다. 이벤트 버블링은 성가신게 아니라 매우 유용할 수도 있습니다. 특히, **이벤트 위임**을 가능하게 합니다. 많은 자식 요소 중 하나와 사용자가 상호 작용할 때 특정 코드를 실행하려면, 부모 요소에 이벤트 수신기를 설정하고 자식 요소에서 발생한 이벤트가 부모로 버블링되도록 하면 됩니다. 이렇게 하면 각 자식 요소에 개별적으로 이벤트 수신기를 설정할 필요가 없습니다.

사용자가 버튼을 클릭했을 때 전체 페이지의 배경색을 설정했던 첫 번째 예제로 돌아갑시다. 이번엔 페이지를 16개의 타일로 나누고 사용자가 해당 타일을 클릭했을 때 각 타일을 임의의 색상으로 설정하려고 합니다.

HTML은 다음과 같습니다.

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

타일의 크기와 위치를 설정하기 위해 간단한 CSS를 설정합니다.

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

JavaScript에서 모든 타일에 클릭 이벤트 처리기를 추가할 수 있습니다. 그러나 보다 간단하고 효율적인 옵션은 부모에 클릭 이벤트 처리기를 설정하고 이벤트 버블링을 사용하여 사용자가 타일을 클릭할 때 처리기가 실행되도록 하는 것입니다.

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

출력은 다음과 같습니다 (클릭해보십시오).

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> 이 예제에서, 우리는 `event.target`을 사용하여 이벤트의 대상이었던 요소(즉, 가장 안쪽 요소)를 가져오고 있습니다. 이 이벤트를 처리한 요소(이 경우 컨테이너)에 접근하고싶다면 `event.currentTarget`을 사용할 수 있습니다.

> [!NOTE]
> 전체 소스 코드는 [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html)에서 볼 수 있습니다. 또한 [라이브 실행](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)도 참고하십시오.

## `target` 과 `currentTarget`

이 페이지에서 소개한 예제를 자세히 살펴보면, 클릭한 요소에 접근하기 위해 이벤트 객체의 두 가지 속성을 사용하고 있음을 알 수 있습니다. [부모 요소에 수신기 설정하기](#부모_요소에_수신기_설정하기)에서 {{domxref("Event.currentTarget", "event.currentTarget")}}을 사용하고, [이벤트 위임](#이벤트_위임)에서는 {{domxref("Event.target", "event.target")}}을 사용하고 있습니다.

`target`이 이벤트가 처음 발생한 요소를 참조하는 반면 `currentTarget`은 이 이벤트 처리기가 연결된 요소를 참조하는 차이가 있습니다.

이벤트가 상위로 버블링되는 동안 `target`은 동일하게 유지되는 반면, `currentTarget`은 계층구조 내 서로 다른 요소에 연결된 이벤트 처리기에 따라 달라집니다.

위의 [버블링 예제](#버블링_예제)를 약간 변형하면 이를 확인할 수 있습니다. 이전과 같은 HTML을 사용하고 있습니다.

```html
<body>
  <div id="container">
    <button>클릭해주세요!</button>
  </div>
  <pre id="output"></pre>
</body>
```

JavaScript는 `target`과 `currentTarget`을 모두 로깅하는것 외에는 거의 같습니다.

```js
const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

버튼을 클릭했을 때, 이벤트 처리기가 버튼 자체나 `<div>` 또는 `<body>` 에 연결되어 있어도 `target` 은 항상 버튼 요소라는 점을 주의하세요. 그러나 `currentTarget`은 현재 실행중인 이벤트 처리기의 요소로 식별됩니다.

{{embedlivesample("target and currentTarget")}}

`target` 속성은 위의 [이벤트 위임](#이벤트_위임) 예제처럼 이벤트 위임에서 자주 사용합니다.

## 스킬 테스트!

이 문서의 마지막까지 왔습니다. 그런데 가장 중요한 정보를 기억하고 있나요? 계속하기 전에 이 정보를 기억했는지 확인하려면 [스킬 테스트: 이벤트](/ko/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events)를 참조하세요.

## 요약

이제 이 초기 단계에서 웹 이벤트에 대해 알아야 할 모든 것을 알게 되었을 것입니다.
앞서 언급했듯이 이벤트는 코어 JavaScript의 일부가 아니며 브라우저 웹 API에서 정의되어 있습니다.

또한 웹 API에서부터 브라우저 WebExtensions, Node.js(서버 측 JavaScript)와 같은 다른 영역에 이르기까지 JavaScript를 사용하는 맥락에 따라 다양한 이벤트 모델이 있다는 것을 이해하는 것이 중요합니다.
지금 당장 이 모든 영역을 이해할 것으로 기대하지는 않지만 웹 개발을 배우면서 이벤트의 기본을 이해하는 데 확실히 도움이 됩니다.

> [!NOTE]
> 진행중에 막혔다면 [커뮤니케이션 채널](/ko/docs/MDN/Community/Communication_channels)에서 도움을 요청하세요.

## 같이 보기

- [domevents.dev](https://domevents.dev/) — 탐색을 통해 DOM 이벤트 시스템의 동작에 대해 학습할 수 있는 매우 유용한 대화형 놀이터 앱입니다.
- [이벤트 참고서](/ko/docs/Web/Events)
- [이벤트 순서](https://www.quirksmode.org/js/events_order.html) (캡처링과 버블링에 대한 논의) — 피터-폴 코흐가 매우 자세하게 설명한 글입니다.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
