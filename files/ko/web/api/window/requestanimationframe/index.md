---
title: window.requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}
**`window.requestAnimationFrame()`**은 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다. 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받습니다.

> **참고:** **노트:** 다음 리페인트에서 그 다음 프레임을 애니메이트하려면 콜백 루틴이 반드시 스스로 `requestAnimationFrame()`을 호출해야합니다.

화면에 새로운 애니메이션을 업데이트할 준비가 될때마다 이 메소드를 호출하는것이 좋습니다. 이는 브라우저가 다음 리페인트를 수행하기전에 호출된 애니메이션 함수를 요청합니다. 콜백의 수는 보통 1초에 60회지만, 일반적으로 대부분의 브라우저에서는 W3C 권장사항에 따라 그 수가 디스플레이 주사율과 일치하게됩니다. 대부분의 최신 브라우저에서는 성능과 배터리 수명 향상을 위해 `requestAnimationFrame()` 호출은 백그라운드 탭이나 hidden {{ HTMLElement("iframe") }}에서 실행이 중단됩니다.

콜백 메소드에는 `requestAnimationFrame()`이 대기된 콜백을 실행하는 시점을 나타내는 단일 인자 {{domxref("DOMHighResTimeStamp")}}가 전달됩니다. 따라서, 모든 이전 콜백의 작업 부하를 계산하는동안 시간이 지나갔음에도 불구하고 단일 프레임에서의 다중 콜백은 각각 동일한 타임스탬프를 받습니다. 이 타임스탬프는 밀리초 단위의 십진수지만, 최소 정밀도는 1ms (1000 µs) 입니다.

## 구문

```js
window.requestAnimationFrame(callback);
```

### 파라미터

- `callback`
  - : 다음 리페인트를 위한 애니메이션을 업데이트할 때 호출할 함수입니다. 콜백 함수에는 `requestAnimationFrame()`이 콜백 함수 실행을 시작할 때의 시점을 나타내는 {{domxref('performance.now()')}} 에 의해 반환되는 것과 유사한 {{domxref("DOMHighResTimeStamp")}} 단일 인자가 전달됩니다.

### 반환 값

콜백 리스트의 항목을 정의하는 고유한 요청 id 인 `long` 정수 값. 0 이 아니라는것 외에는 다른 추측을 할 수가 없는 값입니다. 이 값을 {{domxref("window.cancelAnimationFrame()")}} 에 전달해 콜백 요청을 취소할 수 있습니다.

## 예시

```js
var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## 노트

인터넷 익스플로러와 Edge 17 버전 이하는 페인트 사이클 이전에 `requestAnimationFrame` 실행을 보장하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("Window.mozAnimationStartTime")}}
- {{domxref("Window.cancelAnimationFrame()")}}
- [mozRequestAnimationFrame](http://weblogs.mozillazine.org/roc/archives/2010/08/mozrequestanima.html) - 블로그 포스트
- [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) - 블로그 포스트
- [Animating with javascript: from setInterval to requestAnimationFrame](http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - 블로그 포스트
- [Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 1](http://blogs.msdn.com/b/ie/archive/2011/07/05/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-1.aspx) - 블로그 포스트
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](http://www.testufo.com/#test=animation-time-graph)
- Paul Irish: [requestAnimationFrame API: now with sub-millisecond precision](http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision)
