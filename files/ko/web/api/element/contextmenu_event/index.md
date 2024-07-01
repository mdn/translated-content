---
title: GlobalEventHandlers.oncontextmenu
slug: Web/API/Element/contextmenu_event
---

{{ ApiRef("HTML DOM") }}

윈도우에서 마우스 오른쪽 클릭시 발생하는 이벤트 이벤트 핸들러 속성 입니다. 기본동작을 막지 않는 한 (아래의 예제를 참조하세요), 브라우저의 컨텍스트 메뉴가 활성화됩니다. (그러나 IE8는 이것과 관련된 버그가 있어 contextmenu 가 정의 되어있다고 할지라도 활성화 되지 않습니다). 이 이벤트는 비활성화되지 않은(non-disabled) 오른쪽 클릭 이벤트와 함께 발생하며 ["contextmenu" 속성](http://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/) 을 가진 엘리먼트에는 달리지 않는다는 것을 유의하세요.

## Syntax

```js
window.oncontextmenu = funcRef;
//funcRef refers to the function to be called
```

## Example

페이지상에서 오른쪽 클릭을 막는 예제들 입니다:

```js
document.oncontextmenu = function () {
  // Use document as opposed to window for IE8 compatibility
  return false;
};

window.addEventListener(
  "contextmenu",
  function (e) {
    // Not compatible with IE < 9
    e.preventDefault();
  },
  false,
);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
