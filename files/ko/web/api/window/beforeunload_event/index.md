---
title: "Window: beforeunload 이벤트"
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef}}

**`beforeunload`** 이벤트는 window, 문서(document) 및 해당 리소스가 언로드(unload) 되려고 할 때 시작됩니다. 문서는 계속 보이고 있으며 이벤트는 이 시점에서도 취소할 수 있습니다.

이 이벤트를 사용하면 웹 페이지에서 사용자에게 실제로 페이지를 떠날 것인지 묻는 확인 대화 상자를 표시할 수 있습니다. 사용자가 확인 버튼을 누를 경우 브라우저는 새 페이지로 이동하고 그렇지 않으면 탐색을 취소하고 현재 페이지에 머무릅니다.

명세에 따라 확인 대화 상자를 표시하려면 이벤트 핸들러가 이벤트에서 {{domxref("Event.preventDefault()", "preventDefault()")}}를 호출해야 합니다.

HTML 명세에는 이 이벤트 동안 {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, 및 {{domxref("window.prompt()")}} 메서드에 대한 호출이 무시될 수 있다고 명시되어 있습니다. 자세한 내용은 [HTML 명세](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts)을 참고하세요.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다.

```js
addEventListener("beforeunload", (event) => {});
onbeforeunload = (event) => {};
```

## 이벤트 타입

{{domxref("BeforeUnloadEvent")}} 이벤트는 {{domxref("Event")}}에서 상속됩니다.

## 이벤트 처리기 별칭(alias)

`Window` 인터페이스 뿐만 아니라 이벤트 핸들러 속성 `onbeforeunload`도 사용할 수 있습니다.

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 보안

[임시 사용자 활성화](/ko/docs/Web/Security/User_activation)가 필요합니다. beforeunload 이벤트가 동작하기 위해선 사용자가 페이지 또는 UI 요소와 상호 작용해야 합니다.

## 사용 일람

`beforeunload` 이벤트는 [`unload`](/ko/docs/Web/API/Window/unload_event) 이벤트와 동일한 문제가 있습니다.

특히 모바일에서 `beforeunload` 이벤트는 안정적으로 실행되지 않습니다. 예를 들면, 다음의 시나리오에서는 `beforeunload` 이벤트가 전혀 발생하지 않습니다.

1. 모바일 사용자가 페이지를 방문합니다.
2. 그런 다음 사용자가 다른 앱으로 전환합니다.
3. 나중에 사용자는 앱 관리자에서 브라우저를 닫습니다.

`beforeunload` 이벤트는 [back/forward cache](https://web.dev/bfcache/) (bfcache)와 호환되지 않습니다. 이 이벤트를 사용하는 많은 페이지가 이벤트 후에 페이지가 더 이상 존재하지 않을 것이라고 가정하기 때문입니다. 이를 방지하기 위해 브라우저는 `beforeunload` 수신기(listener)가 있는 경우 bfcache에 페이지를 배치하지 않으며 이는 성능에 좋지 않습니다.

그러나 `unload` 이벤트와 달리 `beforeunload` 이벤트에는 합법적인 사용 사례가 있습니다. 사용자가 페이지에서 데이터를 입력후 저장하지 않고 이탈(unload) 할때 데이터가 손실되는 경우의 시나리오입니다.

개발자는 성능에 미치는 영향을 최소화하기 위해 이 시나리오에서 실제로 저장되지 않는 변경 사항이 있을 때만 `beforeunload`를 수신하는 것이 좋습니다. 이에 대한 예는 아래의 예제 섹션을 참조하세요.

`beforeunload` 이벤트와 관련된 문제에 대한 더 많은 정보는 [페이지 라이프사이클 API](https://developer.chrome.com/blog/page-lifecycle-api/) 가이드를 참고하세요.

## 예제

이 예제에서 페이지는 [`input` 텍스트](/ko/docs/Web/HTML/Element/input/text)에 대한 변경 사항을 수신합니다. 만약 요소의 값이 포함되어 있으면 `beforeunload`에 대한 수신기(listener)를 추가합니다. 만약 요소가 비어있으면 수신기를 제거합니다.

```js
const beforeUnloadListener = (event) => {
  event.preventDefault();
  return (event.returnValue = "");
};
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, { capture: true });
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {
      capture: true,
    });
  }
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

{{domxref("WindowEventHandlers.onbeforeunload")}}에서 각각의 브라우저가 beforeunload를 어떻게 처리하는지 자세히 알아보세요.

## 호환성 참고 사항

HTML 명세에는 개발자가 {{domxref("Event.returnValue")}}를 사용하여 사용자에게
메시지를 표시하는 대신 {{domxref("Event.preventDefault()")}} 메서드를 사용해야 한다고
명시되어 있습니다. 그러나 아직 모든 브라우저에서 지원하고 있지는 않습니다.

이 이벤트가 `null` 또는 `undefined` 이외의 값을 반환(또는 `returnValue` 속성을 설정)하면
페이지 언로드를 확인하라는 메시지가 사용자에게 표시됩니다. 오래된 브라우저에서는 이벤트의
반환 값이 표시됩니다. Firefox 44, Chrome 51, Opera 38, 및 Safari 9.1 이후로 반환된 문자열 대신
웹 페이지에서 제어할 수 없는 문자열이 표시됩니다. 예를들면 아래와 같습니다.

- Firefox는 "This page is asking you to confirm that you want to leave - data you have entered may not be saved."라는 문자열을 표시합니다([Firefox 버그 588292](https://bugzil.la/588292)를 확인하세요).
- Chrome은 "Do you want to leave the site? Changes you made may not be saved."라는 문자열을 표시합니다([Chrome 플랫폼 상태](https://chromestatus.com/feature/5349061406228480)를 확인하세요).

일부 브라우저에서 {{domxref("window.alert()")}},
{{domxref("window.confirm()")}}, 및 {{domxref("window.prompt()")}} 호출은 beforeunload 이벤트가
진행되는 동안 무시될 수 있습니다. 자세한 내용은 [HTML 명세](https://html.spec.whatwg.org/multipage/webappapis.html#user-prompts)를 확인하세요.

또한 다양한 브라우저는 이벤트 결과를 무시하고 사용자에게 확인을 전혀 요청하지 않습니다. 이러한 경우
문서는 항상 자동으로 언로드 됩니다. Firefox는 이 동작을 활성화 하기 위해 _about:config_ 에
`dom.disable_beforeunload`라는 스위치가 있습니다. Chrome 60부터는 프레임이나 페이지가 로드된 이후
사용자가 제스처를 수행하지 않은 경우 확인을 [건너뜁니다](https://chromestatus.com/feature/5082396709879808).
페이지에서 F5를 누르는 것은 사용자 상호작용으로 간주되는 반면 새로고침 화살표를 마우스로 클릭하거나
Chrome DevTools에 포커스가 있는 상태에서 F5를 누르는 것은 사용자 상호작용으로 간주되지 않습니다
(Chrome 81 기준입니다).

## 같이 보기

- 관련 이벤트: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/)는 `beforeunload`/`unload`가 아닌 `visibilitychange`를 사용해야 하는 이유를 자세히 설명합니다.
- [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api/#developer-recommendations-for-each-state)는 웹 애플리케이션에서 페이지 수명 주기 동작을 처리하는 모범 사례 지침을 제공합니다.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle)는 페이지 생명 주기 동작의 브라우저간 불일치를 처리하는 JavaScript 라이브러리입니다.
- [Back/forward cache](https://web.dev/bfcache/)는 back/forward 캐시가 무엇이며 다양한 페이지 수명 주기 이벤트에 미치는 영향을 설명합니다.
