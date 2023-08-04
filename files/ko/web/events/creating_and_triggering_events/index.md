---
title: 이벤트 생성 및 트리거
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: e633202a8cda3c340a0510c27f3902f743275140
---

이 문서에서는 DOM 이벤트를 생성하고 전송하는 방법을 설명합니다. 이러한 이벤트들은 브라우저 자체에서 발생하는 이벤트와 달리 일반적으로 **합성 이벤트**라고 불립니다.

## 커스텀 이벤트 생성

이벤트는 [`Event`](/ko/docs/Web/API/Event) 생성자를 사용하여 다음과 같이 생성될 수 있습니다.

```js
const event = new Event("build");

// 이벤트를 수신합니다.
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// 이벤트를 전송합니다.
elem.dispatchEvent(event);
```

위의 코드 예제는 [EventTarget.dispatchEvent()](/ko/docs/Web/API/EventTarget/dispatchEvent) 메서드를 사용합니다.

이 생성자는 대부분의 최신 브라우저에서 지원됩니다. 좀 더 장황한 접근 방법은 아래의 [구식 방법](#구식_방법)을 참고하시길 바랍니다.

### 커스텀 데이터 추가 - CustomEvent()

이벤트 객체에 더 많은 데이터를 추가하기 위해 [CustomEvent](/ko/docs/Web/API/CustomEvent) 인터페이스가 존재하며 커스텀 데이터를 전달하기 위해 **상세** 속성이 사용될 수 있습니다. 예를 들어 이벤트는 다음과 같이 생성될 수 있습니다.

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

그러면 이벤트 수신기의 추가 데이터에 접근할 수 있습니다.

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### 구식 방법

이벤트를 생성하는 오래된 접근 방식은 Java에서 영감을 받은 API를 사용합니다. 다음은 {{domxref("document.createEvent()")}}을 사용한 예제입니다.

```js
// 이벤트를 생성합니다.
const event = document.createEvent("Event");

// 이벤트 이름을 'build'로 정의합니다.
event.initEvent("build", true, true);

// 이벤트를 수신합니다.
elem.addEventListener(
  "build",
  (e) => {
    // e.target은 elem과 일치합니다.
  },
  false,
);

// 대상은 임의의 요소 혹은 다른 EventTarget일 수 있습니다.
elem.dispatchEvent(event);
```

### 이벤트 버블링

보통 하위 요소에서 이벤트를 트리거하고 상위 요소가 이벤트를 탐지하도록 하는 것이 바람직합니다. 선택적으로 다음과 같은 데이터를 사용합니다.

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// 새로운 이벤트를 생성하고 버블링을 허용하며 "detail" 속성에 전달할 모든 데이터를 제공합니다.
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// 폼 요소는 사용자 지정 "awesome" 이벤트를 수신한 다음 전달된 text() 메서드의 결과를 콘솔에 출력합니다.
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// 사용자가 입력할 때 폼 내부의 텍스트 영역은 발생한 이벤트를 전송 및 트리거하여 시작점으로 사용합니다.
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### 동적으로 이벤트 생성 및 전송

요소는 아직 생성되지 않은 이벤트를 수신할 수 있습니다.

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // 이벤트를 즉시 생성하고 전송 및 트리거합니다.
  // 참고: 선택적으로 "함수 표현식"("화살표 함수 표현식" 대신)을 활용하여 "this"가 요소를 나타냅니다.
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## 기본 제공 이벤트 트리거

이 예제는 DOM 메서드를 사용하여 체크박스의 클릭(프로그램적으로 클릭 이벤트 생성)을 시뮬레이션하는 것을 설명합니다. [실행 중인 예제를 봅니다.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // preventDefault 핸들러.
    alert("cancelled");
  } else {
    // preventDefault 핸들러 없음.
    alert("not cancelled");
  }
}
```

## 같이 보기

- [CustomEvent()](/ko/docs/Web/API/CustomEvent/CustomEvent)
- {{domxref("Event.createEvent()")}}
- {{domxref("Event.initEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- {{domxref("EventTarget.addEventListener()")}}

<section id="Quick_links">
  <ol>
    <li><a href="/ko/docs/Learn/JavaScript/Building_blocks/Events">이벤트 입문</a></li>
    <li><a href="/en-US/docs/Web/Events/Event_handlers">Event handlers (overview)</a></li>
    <li><a href="/en-US/docs/Web/Events">Event reference</a></li>
  </ol>
</section>
