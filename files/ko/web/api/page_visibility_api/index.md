---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

**Page Visibility API**는 웹페이지가 visible 또는 focus 상태인지 당신이 알도록 한다. 탭 브라우징 사용시에, background 에 어떤 웹페이지가 존재하면서 유저에게 보이지 않을 가능성이 있다. 사용자가 웹페이지를 최소화하거나 다른 탭으로 이동했을 때, 이 API 는 페이지의 visibility 를 관찰하는 {{event("visibilitychange")}} 이벤트를 전달한다. 당신은 이벤트를 감지할 수 있고, 어떠한 action 을 수행하거나 다르게 반응할 수 있다. 예를 들어, 당신의 웹 앱이 video 를 재생한다면, 사용자가 다른 브라우저를 보고 있을 때 video 를 pause 하고, 탭으로 돌아왔을 때 다시 재생할 수 있다. 사용자는 video 에서 자신의 위치를 잃지 않고 계속 시청할 수 있다.

Visibility states of an {{HTMLElement("iframe")}} 의 visibility 상태는 부모 document 와 동일하다. CSS 속성으로 iframe 을 숨기더라도 visibility 이벤트가 트리거되거나 content document 의 상태가 변경되지 않는다.

### Use cases

몇몇 예시 :

- 사용자가 페이지를 보고 있지 않는 한, 다음 슬라이드로 전진하지 않아야 하는 이미지 carousel 을 가지는 웹사이트.
- 페이지가 보이지 않을 때 업데이트를 위해 서버를 폴링하기 원하지 않는, 정보의 대시보드를 보여주는 어플리케이션.
- prerender 되는 시점을 감지하여, 페이지 뷰의 카운트를 정확하게 유지할 수 있기를 원하는 페이지
- 디바이스가 대기 모드(유저가 power 버튼을 눌러 screen off)일 때, sound off 를 원하는 웹사이트

개발자들은 역사적으로 이를 감지하기 위해 불완전한 프록시들을 사용하였었습니다. 예를 들어, window 에 onblur/onfocus 핸들러를 등록록함으로써, 당신의 페이지가 활성화된 페이지가 아닐 때 당신이 알 수 있도록 하였지만, 그것은 당신의 페이지가 사용자에게 숨겨져 있음을 알려주지는 못 합니다. Page Visibility API 는 이를 다룹니다. (window 에 onblur/onfocus 핸들러들을 등록하는 것과 비교하자면, 주요 차이점은 다른 window 가 활성화되고 브라우저 window 가 focus 를 잃을 때 페이지가 숨겨지지 않는다는 점입니다. 페이지는 단지 사용자가 다른 탭으로 전환하거나, 브라우저 window 를 최소화하였을 때 숨겨집니다.)

## Example

[live example](http://daniemon.com/tech/webapps/page-visibility/) 보기 (사운드를 가진 video).

당신이 다른 tab 으로 이동했을 때 video 를 일시 정지하는, 다음의 코드로 구현되어 있는 예시 :

```js
// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
  if (document[hidden]) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (
  typeof document.addEventListener === "undefined" ||
  typeof document[hidden] === "undefined"
) {
  console.log(
    "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.",
  );
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // When the video pauses, set the title.
  // This shows the paused
  videoElement.addEventListener(
    "pause",
    function () {
      document.title = "Paused";
    },
    false,
  );

  // When the video plays, set the title.
  videoElement.addEventListener(
    "play",
    function () {
      document.title = "Playing";
    },
    false,
  );
}
```

## Properties overview

### `document.hidden` Read only

페이지가 사용자에게 보이지 않는 것으로 간주되는 상태일 경우 `true` 를 반환하고, 그렇지 않을 경우 `false` 를 반환한다.

### `document.visibilityState` Read only

는 document 의 visibility 상태를 나타내는 `string`. 가능한 values:

- `visible` : 페이지 컨텐츠가 적어도 부분적으로 보일 수 있다. 실제로 이것은 페이지가 최소화되지 않은 window 의 맨 앞쪽 탭임을 의미한다.
- `hidden` : 페이지 컨텐츠가 사용자에게 보이지 않는다. 실제로 이것은 document 가 뒤쪽 탭이거나 최소화된 window 의 부분이거나, OS Screen 의 lock 이 활성화되어 있음을 의미한다.
- `prerender` : 페이지 컨텐츠가 프리렌더되고 있으며 유저에게 보이지 않는다 (`document.hidden` 목적으로 숨겨진 것으로 간주). document 는 이 상태에서 시작될 수도 있지만, 다른 값으로부터 이 상태로 전환되지는 않을 것이다. 참고: 브라우저 지원은 optional 하다.
- `unloaded` : 페이지가 메모리로부터 unload 되고 있다. 참고: 브라우저 지원은 optional 하다.

```js
//startSimulation and pauseSimulation defined elsewhere
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- Description of the [Page Visibility API](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx) on the IEBlog.
- Description of the [Page Visibility API](http://code.google.com/chrome/whitepapers/pagevisibility.html) by Google
