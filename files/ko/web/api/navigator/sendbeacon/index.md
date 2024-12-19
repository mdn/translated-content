---
title: "Navigator: sendBeacon() 메서드"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

**`navigator.sendBeacon()`** 메서드는 적은 양의 데이터를 포함하는 [HTTP POST](/ko/docs/Web/HTTP/Methods/POST) 요청을 {{glossary("Asynchronous", "비동기적")}}으로 웹 서버에 보냅니다.

{{domxref("XMLHttpRequest","XMLHttpRequest")}} 같은 오래된 기술로 웹 서버에 분석 정보를 전송할 때 생길 수 있는 일부 문제를 피하기 위해 고안됐습니다.

> [!NOTE]
> 요청을 `POST` 외의 다른 메서드로 보내야 하거나, 어떤 요청 속성을 바꾸어서 보내야 하거나, 서버로부터의 응답을 받아야 하면 [`fetch()`](/ko/docs/Web/API/Window/fetch)의 [`keepalive`](/ko/docs/Web/API/Window/fetch#keepalive)를 `true`로 설정한 것을 대신 사용하세요.

## 구문

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### 매개변수

- `url`
  - : _data_ 를 받을 서버의 URL 입니다. 상대 주소와 절대 주소 모두 가능합니다.
- `data` {{Optional_inline}}
  - : {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("Blob")}},
    문자열 또는 객체 리터럴, {{domxref("FormData")}}, {{domxref("URLSearchParams")}} 등, 전송할 데이터를 담은 객체입니다.

### 반환 값

**`sendBeacon()`** 메서드는 {{glossary("user agent", "사용자 에이전트")}}가 전송할 `data`를 대기열에 성공적으로 추가하면 `true`를 반환하고, 아니면 `false`를 반환합니다.

## 설명

이 메서드는 분석 정보나 진단 데이터를 서버에 보내기 위해 고안됐습니다.

많은 경우, 사이트에서 분석/진단 데이터 전송을 바라는 시점은 사용자가 다른 페이지로 이동할 때처럼 이탈 순간입니다. 기존 방법으로 분석 정보를 보낼 때의 문제는, 이탈 시 전송의 경우 페이지가 언로딩되기 직전인 순간일 수도 있으므로, 브라우저가 재량에 따라 비동기적인 {{domxref("XMLHttpRequest")}} 요청을 보내지 않을 수도 있다는 점입니다.

과거 웹 페이지들은 데이터를 모두 보낼 수 있을 정도로 페이지의 언로딩을 지연시키기도 했습니다. 정확히는 아래와 같은 기법이 있었습니다.

- 블로킹하도록 동기적 `XMLHttpRequest`로 데이터 전송
- {{HTMLElement("img")}} 태그를 만들고 `src`를 설정하기. 대부분의 사용자 에이전트는 이미지를 로드하기 위해 페이지 언로드를 미룹니다.
- 의미 없는 무한 반복 루프를 몇 초동안 실행하기.

이러한 방법들은 모두 문서의 언로딩을 막으므로 다음 페이지로의 탐색 속도가 저하됩니다. 다음 페이지에는 이를 피하기 위해 할 수 있는 게 없습니다. 따라서 성능 문제는 이전 페이지에 있는데도 새로운 페이지가 느리게 느껴질 것입니다.

`sendBeacon()` 메서드를 사용하면, 언로딩이나 다음 탐색 지연 없이, 사용자 에이전트가 적절한 순간에 데이터를 비동기적으로 전송합니다. 따라서...

- 데이터가 안정적으로 전송됨
- 비동기적임
- 다음 페이지에 영향을 끼치지 않음

데이터는 [HTTP POST](/ko/docs/Web/HTTP/Methods/POST) 요청으로 보내집니다.

### 세션 끝에서 분석 정보 보내기

웹 사이트는 대개 사용자가 페이지에서 이탈할 때 진단이나 분석 정보를 보내고자 합니다. 가장 안정적인 방법은 [`visibilitychange`](/ko/docs/Web/API/Document/visibilitychange_event) 이벤트에서 데이터를 전송하는 것입니다.

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### unload와 beforeunload 지양

과거에는 많은 웹 사이트들이 세션 끝에 분석 정보를 보내기 위한 용도로 [`unload`](/ko/docs/Web/API/Window/unload_event)나 [`beforeunload`](/ko/docs/Web/API/Window/beforeunload_event)를 사용했습니다. 그러나 이 방법은 극히 불안정합니다. 많은 경우, 특히 모바일에서, 브라우저는 `unload`, `beforeunload`, `pagehide` 등의 이벤트들을 전송하지 않습니다. 예를 들어, 아래의 세 경우에는 이 이벤트들을 수신할 수 없습니다.

1. 사용자가 페이지를 불러오고 상호작용합니다.
2. 사용자가 이탈할 때, 탭을 닫지 않고 다른 앱으로 전환합니다.
3. 사용자가 나중에 기기의 앱 관리자를 통해 브라우저를 닫습니다.

추가적으로, `unload` 이벤트는 최신 브라우저들에서 구현된 뒤로/앞으로 캐시([bfcache](https://web.dev/bfcache/))와 호환되지 않습니다. Firefox를 포함한 일부 브라우저들에서는 `unload` 이벤트 처리기가 포함되어 있는 페이지를 bfcache에서 제외함으로써 호환성 문제를 해소하므로, 성능이 저하됩니다. Safari와 Chrome 등 나머지 브라우저들은 사용자가 하나의 탭에서 다른 페이지로 탐색하는 경우 `unload` 이벤트를 아예 전송하지 않습니다.

Firefox는 `beforeunload` 처리기로도 페이지를 bfcache에서 제외합니다.

#### pagehide를 대비책으로 사용하기

`visibilitychange`를 지원하지 않는 브라우저들을 지원하려면 [`pagehide`](/ko/docs/Web/API/Window/pagehide_event) 이벤트를 사용하세요. `beforeunload`, `unload`와 같이 `pagehide`도 특히 모바일에서 불안정합니다. 하지만 적어도 bfcache와는 호환됩니다.

## 예제

다음 예제에서는 `sendBeacon()`을 호출해 분석 정보를 전송하는 {{domxref("document.visibilitychange_event", "visibilitychange")}} 이벤트 처리기를 지정합니다.

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

- [`visibilitychange`](/ko/docs/Web/API/Document/visibilitychange_event) 이벤트.
- {{domxref("Beacon_API","Beacon API", "" , "true")}} 개요.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/)에서는 왜 `beforeunload`/`unload` 대신 `visibilitychange`를 사용해야 하는지 자세히 설명합니다.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state)에서는 웹 애플리케이션에서 페이지의 수명 주기 동작을 처리하는 최선의 방법들을 제시합니다.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): 페이지 수명 주기의 브라우저간 불일치를 처리하기 위한 JavaScript 라이브러리입니다.
- [Back/forward cache](https://web.dev/bfcache/). 뒤로/앞으로 캐시가 뭔지, 다양한 페이지 수명 주기 이벤트에서 이 캐시가 갖는 의미가 뭔지 설명합니다.
