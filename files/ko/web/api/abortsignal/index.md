---
title: AbortSignal
slug: Web/API/AbortSignal
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`AbortSignal`** 인터페이스는 DOM 요청(Fetch와 같은)과 통신하고 필요한 경우 {{domxref("AbortController")}} 객체를 통해 취소할 수 있게 해주는 신호 객체를 나타냅니다.

## 프로퍼티

_AbortSignal 인터페이스는 또한 부모 인터페이스 {{domxref("EventTarget")}}으로부터 프로퍼티를 상속받습니다._

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : 신호가 통신하는 요청이 취소되었는지(`true`) 그렇지 않은지(`false`)를 나타내는 {{domxref("Boolean")}}입니다.

## 이벤트

[`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용하거나 이 인터페이스의 `oneventname` 프로퍼티로 이벤트 리스너를 할당하여 이벤트를 리슨합니다.

- [`abort`](/ko/docs/Web/API/AbortSignal/abort_event)
  - : 신호가 통신하는 요청이 취소되었을 때 호출됩니다. [`onabort`](/ko/docs/Web/API/AbortSignal/onabort) 프로퍼티를 통해서도 사용이 가능합니다.

## 메소드

_AbortSignal 인터페이스는 부모인 {{domxref("EventTarget")}}로부터 메소드를 상속받습니다._

## 예제

다음 스니펫에서는 [Fetch API](/ko/docs/Web/API/Fetch_API)를 사용해 비디오를 다운로드하는 것을 목표로 합니다.

먼저 {{domxref("AbortController.AbortController","AbortController()")}} 생성자를 사용해 컨트롤러를 {{domxref("AbortController.signal")}} 프로퍼티를 사용해 {{domxref("AbortSignal")}} 객체와 관계된 참조를 얻습니다.

[Fetch 요청](/ko/docs/Web/API/fetch)을 시작할 때, 요청의 옵션 객체 내부에 `AbortSignal` 옵션을 전달합니다(아래의 `{signal}` 참고). 이것은 신호와 컨트롤러를 fetch 요청과 관계짓고, 아래의 두 번째 이벤트 리스너에서 보여주듯이 {{domxref("AbortController.abort()")}}를 호출하여 이를 취소할 수 있게 합니다.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **참고:** `abort()`가 호출되면, `fetch()` promise는 <code dir="ltr">AbortError</code>과 함께 reject됩니다.

> **경고:** 현재 버전의 Firefox는 `DOMException`으로 promise를 reject합니다.

동작하는 완전한 예제는 GitHub에서 확인 할 수 있습니다 — [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) 참고([라이브 실행도 확인할 수 있습니다](https://mdn.github.io/dom-examples/abort-api/)).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- [Fetch API](/ko/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
