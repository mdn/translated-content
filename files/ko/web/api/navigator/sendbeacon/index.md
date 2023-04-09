---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
---

{{APIRef("HTML DOM")}}

**`navigator.sendBeacon()`**
메서드는 작은 양의 데이터를 포함하는 [HTTP POST](/ko/docs/Web/HTTP/Methods/POST) 요청을 {{glossary("Asynchronous", "비동기적")}}으로 웹 서버로 보냅니다.

웹 서버에 분석 정보를 보내고 {{domxref("XMLHttpRequest","XMLHttpRequest")}} 같은 오래된 기술로 분석을 전송하며 생길 수 있는 몇몇 문제를 피하기 위해 고안됐습니다.

> **참고:** 요청을 `POST` 외의 다른 메서드를 사용하거나, 요청 속성을 바꾸어서 보내야 하거나, 서버로부터의 응답이 필요하면 Beacon 대신 [`fetch()`](/en-US/docs/Web/API/fetch) 를 [`keepalive`](/en-US/docs/Web/API/fetch#keepalive) 를 `true` 로 설정한 체로 사용하세요.

## 구문

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### 매개변수

- `url`
  - : _data_ 를 받을 서버의 URL 입니다. 상대적 주소일 수도 있고 절대적 주소일 수도 있습니다.
- `data` {{Optional_inline}}
  - : {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("Blob")}},
    문자열, 객체, {{domxref("FormData")}}, {{domxref("URLSearchParams")}} 등 전송할 데이터를 담은 객체입니다.

### 반환 값

**`sendBeacon()`** 매서드는 {{glossary("user agent", "사용자 에이전트")}} 가 전송할 `data` 를 성공적으로 대기열에 추가하면 `true` 를 반환하고 그 외에는 `false` 를 반환합니다.

## 설명

이 메서드는 분석 정보나 진단 데이터를 서버에 보내기 위해 고안됐습니다.

분석 정보를 보낼 때 문제는 사이트는 대게 유저가 다른 페이지로 이동할 때 등
유저가 페이지와 끝났을 때 분석 정보를 보내길 원합니다.
이럴 경우 브라우저가 페이지를 언로드 하려 할 때 브라우저는 비동기적인 {{domxref("XMLHttpRequest")}} 요청을 보내지 않을 수도 있습니다.

과거에는, 웹 페이지들은 데이터를 보내기 충분하도록 페이지가 언로드되는 것을 지연시키기도 했습니다. 이를 위해 다음과 같은 대안적 방법을 사용했습니다.

- 사용자와 브라우저간의 상호작용을 차단하고 동기적으로 실행되는 `XMLHttpRequest` 로 데이터를 보내기.
- {{HTMLElement("img")}} 태그를 만들고 src 를 설정하기. 대부분의 사용자 에이전트는 이미지를 로드하기 위해 페이지를 언로드하는 것을 미룰 것입니다.
- 의미 없는 무한 반복 루프를 몇 초동안 실행하기.

이러한 방법들은 모두 문서가 언로드되는 것을 막아 다음 페이지로 이동하는 속도를 늦춥니다.
다음 페이지가 이를 피하기 위해 할 수 있는 것은 없습니다. 따라서 성능 문제는 그 전의 페이지에 있는데도 새로운 페이지가 느리게 보일 것입니다.

`sendBeacon()` 메서드를 사용하면 언로딩이나 다음 페이지를 지연시키는 것 없이 사용자 에이전트가 할 수 있을 때 데이터가 비동기적으로 전송될 수 있게 합니다.

이는 다음과 같은 이점들을 가집니다.

- 데이터가 안정적으로 전송된다.
- 비동기적으로 전송된다.
- 다음 페이지에 영향을 끼치지 않는다.

데이터는 [HTTP POST](/en-US/docs/Web/HTTP/Methods/POST) 요청으로 보내집니다.

### 세션 끝에서 분석 정보 보내기

웹 사이트는 대게 유저가 페이지에서 더이상 볼 일이 없을 때 진단 정보나 분석 정보를 보내고 싶어합니다.
가장 신뢰성 있는 방법은 [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) 이벤트가 바뀌었을 때 데이터를 보내는 것입니다.

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### unload 와 beforeunload 를 피하라

과거에는 많은 웹 사이트들이 세션 끝에서 분석 정보를 보내기 위해 [`unload`](/en-US/docs/Web/API/Window/unload_event)
나 [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) 를 사용했습니다.
그러나, 이건 매우 안정성이 없는 방법입니다. 많은 상황에서 (특히 모바일), 브라우저는 `unload`, `beforeunload` 나 `pagehide` 같은 이벤트들을 발생하지 않을 것입니다. 예를 들어, 이러한 이벤트들은 다음과 같은 상황에서 발생되지 않을 것입니다.

1. 유저가 페이지를 로드하고 페이지와 상호작용한다.
2. 유저가 끝났을때, 탭을 닫는 것 대신 다른 앱으로 전환한다.
3. 나중에, 유저가 폰의 앱 매니저를 통해 브라우저 자체를 닫는다.

추가적으로, `unload` 이벤트는 많은 모던 브라우저에서 구현된 bfcache([bfcache](https://web.dev/bfcache/)) 와 호환되지 않습니다. Firefox 등의 몇몇 브라우저들은 unload 이벤트 처리기가 포함되어 있을 때 bfcache를 제외함으로써 호환되지 않는 이슈를 해결합니다, 따라서 성능을 저하시킵니다. Safari 나 Android Chrome 같은 다른 브라우저들은 `unload` 이벤트를 발생시키지 않음으로써 bfcache와 호환되게 합니다.

또한 Firefox 는 `beforeunload` 처리기가 포함돼 있어도 bfcache를 제외합니다.

#### pagehide 를 대비책으로 사용하기

`visibilitychange` 를 지원하지 않는 브라우저들을 지원하기 위해 [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) 이벤트를 사용해 보세요.
`beforeunload` 나 `unload` 와 달리, 이 이벤트는 안정적으로 실행되지 않습니다, 특히 모바일에서는 더욱 그렇고요. 하지만 이 이벤트는 bfcache와 호환됩니다.

## 예제

다음 예제에서는 {{domxref("document.visibilitychange_event", "visibilitychange")}} 이벤트를 위한 처리기를 보여줍니다. 이 핸들러는 `sendBeacon()` 를 호출해 분석 정보를 보냅니다.

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) 이벤트.
- {{domxref("Beacon_API","Beacon API", "" , "true")}} 의 개요.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) 는 더 자세히 왜 `beforeunload`/`unload` 를 사용하면 안 되고 `visibilitychange` 를 사용해야하는지 설명합니다.
- [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api/#developer-recommendations-for-each-state) 에서는 웹 애플리케이션에서 페이지의 수명 주기에 관한 행동들을 처리하는 것에 대해 최고의 지침을 알려줍니다.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle) 는 페이지의 수명 주기에 대한 브라우저간의 불일치를 다루는 크로스 브라우저 JavaScript 라이브러리입니다.
- [Back/forward cache](https://web.dev/bfcache/) 에서는 back/forward 캐시가 무엇인지 설명하고 그것이 페이지에서의 다양한 수명 주기 이벤트에 어떤 영향을 주는지 설명합니다.
