---
title: AbortController
slug: Web/API/AbortController
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`AbortController`** 인터페이스는 하나 이상의 웹 요청을 취소할 수 있게 해준다.

{{domxref("AbortController.AbortController()")}} 생성자를 사용해 새로운 `AbortController` 를 생성한다. {{domxref("AbortSignal")}} 객체를 사용해 DOM 요청과의 통신이 완료된다.

## 생성자

- {{domxref("AbortController()")}}
  - : 새로운 `AbortController` 객체 인터페이스를 생성한다.

## 프로퍼티

- {{domxref("AbortController.signal")}} {{readonlyInline}}
  - : DOM 요청과 통신하거나 취소하는데 사용되는 {{domxref("AbortSignal")}} 객체 인터페이스를 반환한다.

## 메소드

- {{domxref("AbortController.abort()")}}
  - : DOM 요청이 완료되기 전에 취소한다. 이를 통해 [fetch 요청](/ko/docs/Web/API/fetch), 모든 응답 {{domxref("Body")}} 소비, 스트림을 취소할 수 있다.

## 예제

다음 스니펫에서는 [Fetch API](/ko/docs/Web/API/Fetch_API)를 사용해 비디오를 다운로드하는 것을 목표로 한다.

먼저 {{domxref("AbortController.AbortController","AbortController()")}} 생성자를 사용해 컨트롤러를 {{domxref("AbortController.signal")}} 프로퍼티를 사용해 {{domxref("AbortSignal")}} 객체와 관계된 참조를 얻는다.

[Fetch 요청](/ko/docs/Web/API/fetch)을 시작할 때, 요청의 옵션 객체 내부에 `AbortSignal` 옵션을 전달한다(아래의 `{signal}` 참고). 이것은 신호와 컨트롤러를 fetch 요청과 관계짓고, 아래의 두 번째 이벤트 리스너에서 보여주듯이 {{domxref("AbortController.abort()")}}를 호출하여 이를 취소할 수 있게한다.

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

> **참고:** `abort()`가 호출되면, `fetch()` promise는 `AbortError`으로 명명된 `DOMException`과 함께 reject된다.

동작하는 완전한 예제는 GitHub에서 확인 할 수 있다 — [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) 참고([라이브 실행도 확인할 수 있다](https://mdn.github.io/dom-examples/abort-api/)).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- [Fetch API](/ko/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
