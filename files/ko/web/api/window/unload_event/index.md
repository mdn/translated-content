---
title: "Window: unload 이벤트"
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: f2175c4c2cf9de232ec9b2e1c395903d53ea24a0
---

{{APIRef}}{{deprecated_header}}

> [!WARNING]
> 개발자들은 이 이벤트의 사용을 피해야 합니다. 아래의 "사용 일람"을 참고하세요.

**`unload`** 이벤트는 문서나 하위 리소스가 언로딩 중일 때 발생합니다.

`unload`는 다음 이벤트 이후 발생합니다.

- {{domxref("Window/beforeunload_event", "beforeunload")}} (취소 가능한 이벤트)
- {{domxref("Window/pagehide_event", "pagehide")}}

`unload` 시점의 문서는 다음과 같은 상태입니다.

- 이미지, IFrame 등 모든 리소스는 여전히 존재합니다.
- 최종 사용자는 아무것도 볼 수 없습니다.
- UI 상호작용은 아무 효과도 없습니다. ({{domxref("window.open()")}}, {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, 등등)
- 오류가 발생해도 언로딩 절차는 중단되지 않습니다.

참고로 `unload` 이벤트 역시 문서 트리의 순서를 따라갑니다. 즉 부모 프레임의 `unload`가 자식 프레임의 `unload` **이전에** 발생합니다. (아래 예제를 확인하세요)

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 이벤트 이름을 사용하거나, 이벤트 처리기를 설정해 사용합니다.

```js
addEventListener("unload", (event) => {});
onunload = (event) => {};
```

## 이벤트 타입

일반적인 {{domxref("Event")}}.

## 이벤트 처리기 별칭

`Window` 인터페이스 외에도, 이벤트 처리기 속성 `onunload` 는 다음 대상에서도 사용할 수 있습니다.

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 사용 시 주의점

개발자들은 이 이벤트의 사용을 피해야 합니다.

특히 모바일에서는 `unload` 이벤트의 발생을 신뢰할 수 없습니다. 예를 들어, 다음 시나리오에서는 `unload` 이벤트가 언제나 발생하지 않습니다.

1. 모바일 사용자가 페이지에 방문한다.
2. 사용자가 다른 앱으로 전환한다.
3. 이후 앱 관리자에서 브라우저를 종료한다.

또한 `unload` 이벤트는 [뒤로/앞으로 캐시](https://web.dev/articles/bfcache)와 호환되지 않습니다. 이 이벤트를 사용하는 많은 페이지들에서는 이벤트가 발생한 후 페이지가 계속 존재하지 않을 것이라고 가정하기 때문입니다. 이를 해결하기 위해 일부 브라우저(예: Firefox)는 unload 리스너가 있는 페이지를 bfcache에 넣지 않으며, 이는 성능에 좋지 않습니다. 다른 브라우저(예: Chrome)는 사용자가 페이지를 이동할 때 `unload` 이벤트를 발생시키지 않습니다.

사용자의 세션 종료를 알리기 위해 사용할 수 있는 가장 좋은 이벤트는 [`visibilitychange`](/ko/docs/Web/API/Document/visibilitychange_event) 이벤트입니다. `visibilitychange` 를 지원하지 않는 브라우저에서는 [`pagehide`](/ko/docs/Web/API/Window/pagehide_event) 이벤트를 대신 사용할 수 있습니다. 이 이벤트도 신뢰성 있게 발생하지는 않지만, bfcache와 호환됩니다.

페이지 언로드 이벤트를 감지하고자 한다면, `pagehide` 이벤트를 감지하는 것이 가장 적합합니다.

`unload` 이벤트와 관련된 문제에 대한 자세한 내용은 [페이지 수명 주기 API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) 안내서를 참조하세요.

## 예제

```html
<!doctype html>
<html>
  <head>
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 3rd one.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

아래는 `child-frame.html`의 내용입니다.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 4th and last one…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

부모 프레임이 언로딩 될 때, `console.log()` 메시지를 통해 순서를 확인할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 이벤트: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- [`visibilitychange`](/ko/docs/Web/API/Document/visibilitychange_event) 이벤트.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/)
  `beforeunload`/`unload` 대신 `visibilitychange` 를 사용해야 하는 이유에 대해 자세히 설명합니다.
- [페이지 수명 주시 API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state)
  문서는 웹 애플리케이션에서 페이지 수명 주기 동작을 처리하는 모범 사례 지침을 제공합니다.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): 페이지 수명 주기 동작에서 브라우저 간의 불일치를 처리하는 JavaScript 라이브러리.
- [뒤로/앞으로 캐시](https://web.dev/articles/bfcache) 가 무엇인지 설명하고, 이것이 다양한 페이지 수명 주기 이벤트에 미치는 영향을 설명합니다.
