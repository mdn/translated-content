---
title: "Document: visibilitychange 이벤트"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

`visibilitychange` 이벤트는 브라우저 탭의 콘텐츠가 보여지거나 숨겨질 때 문서에서 발생합니다.

이 이벤트는 취소할 수 없습니다.

## 구문

이벤트 이름을 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 등의 메서드에 제공하거나, 이벤트 처리기 속성을 사용하세요.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## 이벤트 유형

일반 {{domxref("Event")}}.

## 사용 일람

이 이벤트 자체로는 문서의 새로운 노출 상태를 알아낼 수 없습니다. 문서의 {{domxref("Document.visibilityState", "visibilityState")}} 속성을 사용하세요.

사용자가 새로운 페이지로 이동하거나, 탭을 바꾸거나, 탭을 닫거나, 브라우저를 닫거나 최소화하거나, 모바일 기기에서는 다른 앱으로 전환하는 경우에는 `visibilityState`가 `hidden`으로 바뀌고 이 이벤트가 발생합니다. `hidden`으로의 전환은 페이지에서 안정적으로 관측할 수 있는 마지막 이벤트므로 개발자는 이 시점을 사용자 세션의 마지막으로 취급하여 ([분석 정보 전송](/ko/docs/Web/API/Navigator/sendBeacon) 등) 마무리 작업을 실행해야 합니다.

`hidden` 전환은 페이지의 UI 갱신을 중단하고, 사용자가 백그라운드에서는 원하지 않을 작업들을 중지할 때로도 적합한 시점입니다.

## 예제

## hidden 전환 시 음악 일시중지하기

이 예제는 문서가 보이게 되면 음악 트랙을 재생하고, 문서를 더 볼 수 없으면 일시중지합니다.

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});
```

## hidden 전환 시 세션 종료 분석 정보 전송하기

이 예제는 `hidden`으로의 전환을 사용자 세션의 마지막으로 취급하여, {{domxref("Navigator.sendBeacon()")}} API를 사용해 적절한 분석 정보를 전송합니다.

```js
document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Page Visibility API](/ko/docs/Web/API/Page_Visibility_API)
- {{domxref("Document.visibilityState")}}
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/)에서는 왜 `beforeunload`/`unload` 대신 `visibilitychange`를 사용해야 하는지 자세히 설명합니다.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state)에서는 웹 애플리케이션에서 페이지의 수명 주기 동작을 처리하는 최선의 방법들을 제시합니다.
