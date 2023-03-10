---
title: 'Window: beforeunload 이벤트'
slug: Web/API/Window/beforeunload_event
---
{{APIRef}}

**`beforeunload`** 이벤트는 문서와 그 리소스가 언로드 되기 직전에 {{domxref("window")}}에서 발생합니다. 이벤트 발생 시점엔 문서를 아직 볼 수 있으며 이벤트도 취소 가능합니다.

| 확산               | 아니오                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------- |
| 취소 가능          | 예                                                                                       |
| 인터페이스         | {{domxref("Event")}}                                                             |
| 이벤트 처리기 속성 | {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}} |

`beforeunload` 이벤트를 사용하면 사용자가 페이지를 떠날 때 정말로 떠날 것인지 묻는 확인 대화 상자를 표시할 수 있습니다. 사용자가 확인을 누를 경우 브라우저는 새로운 페이지로 탐색하고, 취소할 경우 탐색을 취소하고 현재 페이지에 머무릅니다.

명세에 따라, 확인 대화 상자를 표시하려면 이벤트의 {{domxref("Event.preventDefault()", "preventDefault()")}}를 호출해야 합니다.

다만, 모든 브라우저가 위의 방법을 지원하는 것은 아니므로 아래의 두 가지 구형 방법을 사용해야 할 수도 있습니다.

- 이벤트의 `returnValue` 속성에 문자열 할당
- 이벤트 처리기에서 문자열 반환

일부 브라우저에서는 확인 대화 상자의 문구를 직접 지정할 수 있었습니다. 그러나 현재 대부분의 브라우저에서는 사용자 지정 문구를 사용하지 않으며 이 동작을 지원하지 않습니다.

원치 않는 팝업을 방지하기 위해, 브라우저는 사용자가 이벤트 발생 전에 현재 페이지와 상호작용을 했을 때만 대화 상자를 표시할 수도 있고, 심지어 아예 표시하지 않을 수도 있습니다.

`window` 또는 `document`에 `beforeunload` 이벤트 처리기를 부착하면 페이지가 브라우저의 메모리 내 탐색 캐시에 추가되는 것을 방지합니다.

HTML 명세는 이벤트 처리 중의 {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, 및 {{domxref("window.prompt()")}} 메서드를 무시할 수 있음을 요구합니다. [HTML 명세](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts)에서 더 자세한 정보를 확인하세요.

## 예제

HTML 명세에 따르면 개발 시 {{domxref("Event.returnValue")}} 대신 {{domxref("Event.preventDefault()")}} 메서드를 사용해야 합니다. 그러나 모든 브라우저가 이 방법을 지원하는 것은 아닙니다.

```js
window.addEventListener('beforeunload', (event) => {
  // 표준에 따라 기본 동작 방지
  event.preventDefault();
  // Chrome에서는 returnValue 설정이 필요함
  event.returnValue = '';
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

{{domxref("WindowEventHandlers.onbeforeunload")}}에서 각각의 브라우저가 beforeunload를 어떻게 처리하는지 자세히 알아보세요.

## 같이 보기

- 관련 이벤트: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)
