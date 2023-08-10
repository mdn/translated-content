---
title: Using fullscreen mode
slug: Web/API/Fullscreen_API
---

{{DefaultAPISidebar("Fullscreen API")}}

**Fullscreen API** 는 특정 요소{{DOMxRef("Element")}}(와 해당 자손들을)를 full-screen mode로 표시하고, 더 이상 필요하지 않으면 full-screen mode를 종료하는 메서드를 추가합니다. 이렇게 하면 사용자의 전체 화면을 사용하여, 온라인 게임과 같은 원하는 내용을 표시할 수 있습니다. full-screen mode가 종료될 때까지 화면에서 브라우저의 모든 유저 인터페이스 요소와 기타 응용 프로그램을 제거할 수 있습니다.

API 사용 방법에 대한 자세한 내용은 [Guide to the Fullscreen API](/ko/docs/Web/API/Fullscreen_API/Guide) 문서를 참조하세요.

> **참고:** **주의:** 이 API에 대한 지원은 여러 브라우저에서 이루어지며, 다양한 업체의 접두사(prefix)가 필요하거나, 최신 사양을 구현하지 않는 경우가 많습니다. 이 API 지원에 대한 자세한 내용은 아래에 있는 [Browser compatibility](#browser_compatibility) 섹션을 참조하세요. Fullscreen API를 지원하지 않는 업체의 경우, [Fscreen](https://github.com/rafrex/fscreen) 과 같은 라이브러리를 사용할 수 있습니다.

## Interfaces

_Fullscreen API 에는 자체 인터페이스가 없습니다. 대신에, full-screen 기능을 제공하는데 필요한 메서드, 속성(property), 이벤트 핸들러를 추가하기 위해, 다음 섹션에 나열된 것과 같은 몇 가지 다른 인터페이스를 추가합니다._

## Methods

Fullscreen API 는 {{DOMxRef("Document")}}, {{DOMxRef("Element")}} 인터페이스에 메서드를 추가하여 full-screen mode를 설정하거나 해제할 수 있습니다.

### Methods on the Document interface

- {{DOMxRef("Document.exitFullscreen()")}}
  - : {{Glossary("user agent")}} 가 full-screen mode에서 창 모드로 다시 전환되도록 요청합니다. full-screen mode가 완전히 종료되면 {{jsxref("Promise")}} resolved 를 반환합니다.

### Methods on the Element interface

- {{DOMxRef("Element.requestFullscreen()")}}
  - : 유저 에이전트가 지정한 요소(그리고 그 자손들까지)를 full-screen mode로 설정하고, 브라우저의 모든 UI 요소와 다른 모든 애플리케이션을 화면에서 제거하도록 요구합니다. full-screen mode가 활성화되면 {{jsxref("Promise")}} resolved를 반환합니다.

## Properties

_{{DOMxRef("Document")}} 인터페이스는 full-screen mode가 지원되고 사용 가능한지, full-screen mode가 현재 활성화 되어있는지, 어떤 요소가 스크린을 사용하고 있는지 확인하는데 사용할 수 있는 속성(property)을 제공합니다._

- {{DOMxRef("DocumentOrShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` 속성은 DOM(혹은 shadow DOM)에서 현재 full-screen mode로 표시되는 요소{{DOMxRef("Element")}}를 알려줍니다. 이것이 `null`인 경우, document는 full-screen mode가 아닙니다.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` 속성(property)은 full-screen mode를 사용할 수 있는지 여부를 알려줍니다. 이유가 어떻든(예를들어, `"fullscreen"` 기능이 허락되지 않거나, full-screen mode가 지원되지 않는 경우) full-screen mode를 사용할 수 없으면 `false` 입니다.

### Event handlers

_Fullscreen API는 full-screen mode를 켜고 끌 때 혹은, full-screen mode와 window mode간에 변경하는 과정에서 오류가 발생하는 것을 감지하는데 사용할 수 있는 두 가지 이벤트를 정의합니다. 이러한 이벤트에 대한 이벤트 핸들러는 {{DOMxRef("Document")}} 와{{DOMxRef("Element")}} 인터페이스 에서 사용할 수 있습니다._

> **참고:** **주의:** 이러한 이벤트 핸들러 속성(property)은 HTML 컨텐트 속성(attribute)으로 사용할 수 없습니다. 즉, HTML 컨텐트에서 {{Event("fullscreenchange")}} 및 {{Event("fullscreenerror")}} 이벤트를 지정할 수 없습니다. 자바스크립트 코드로 추가해야만 합니다.

#### Event handlers on documents

- {{DOMxRef("Document.onfullscreenchange")}}
  - : 문서(document)가 full-screen mode로 전환되거나 full-screen mode를 종료할 때 {{DOMxRef("Document")}}로 보내지는 {{Event("fullscreenchange")}} 이벤트에 대한 이벤트 핸들러 입니다. 이 핸들러는 오직 전체 문서가 full-screen mode로 표시될 때만 호출됩니다.
- {{DOMxRef("Document.onfullscreenerror")}}
  - : 전체 문서에 대해 full-screen mode를 사용하거나, 사용하지 않도록 설정하는 동안 오류가 발생하면, {{DOMxRef("Document")}}로 보내지는 {{Event("fullscreenerror")}} 이벤트의 이벤트 핸들러입니다.

#### Event handlers on elements

- {{DOMxRef("Element.onfullscreenchange")}}
  - : {{Event("fullscreenchange")}} 이벤트가 요소(element)로 전송되면, 요소가 full-screen mode로 배치되거나 제거되었음을 나타내는 이벤트 핸들러입니다.
- {{DOMxRef("Element.onfullscreenerror")}}
  - : full-screen mode 를 사용하거나, 사용하지 않도록 설정하는 동안 오류가 발생하면 요소로 보내지는 {{Event("fullscreenerror")}} 이벤트의 이벤트 핸들러입니다.

### Obsolete properties

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : 문서에 현재 full-screen mode로 표시되는 요소가 있는 경우 `true`, 그렇지 않으면 `false`의 Boolean 값입니다.> **참고:** **주의:** 대신에 {{DOMxRef("Document")}} 나 {{DOMxRef("ShadowRoot")}} 에서 {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} 속성(property)을 사용하세요. 그것이 `null`이 아닌 경우 {{DOMxRef("Element")}}가 full-screen mode로 표시됩니다.

## Events

_Fullscreen API는 full-screen mode를 켜고 끌 때 혹은, full-screen mode와 window mode간에 변경하는 과정에서 오류가 발생하는 것을 감지하는데 사용할 수 있는 두 가지 이벤트를 정의합니다._

- {{Event("fullscreenchange")}}
  - : full-screen mode를 사용하거나, 사용하지 않도록 전환할 때 {{DOMxRef("Document")}} 혹은{{DOMxRef("Element")}} 로 보냅니다.
- {{Event("fullscreenerror")}}
  - : full-screen mode를 사용하거나, 사용하지 않도록 전환하려고 시도하는 중에 오류가 발생하면 `Document` 또는 `Element` 로 보냅니다.

## Dictionaries

- {{DOMxRef("FullscreenOptions")}}
  - : {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}}을 호출할 때 지정할 수 있는 옵션 설정을 제공합니다.

## Controlling access

[Feature Policy](/ko/docs/Web/HTTP/Feature_Policy)을 사용하여 full-screen mode의 유효성을 제어할 수 있습니다. full-screen mode는 `"fullscreen"`으로 식별되고, 기본 허용 목록 값은 `"self"` 입니다. 이는 최상위(top-level) 문서 컨텍스트에서 full-screen mode가 허용된다는 것을 의미하며, 최상위(top-most) 문서와 같은 출처에서 로드 된 중첩 된 컨텍스트에도 적용됩니다.

기능 정책을 사용하여 API에 대한 액세스를 제어하는 자세한 내용은 [Using Feature Policy](/ko/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)을 참조하세요.

## Usage notes

사용자는 <kbd>ESC</kbd> (혹은 <kbd>F11</kbd>) 키를 누르기만하면 사이트 또는 앱이 프로그래밍 방식으로 기다리는 대신에, full-screen mode를 종료하도록 선택할 수 있습니다. 유저 인터페이스의 어딘가에 사용자에게 이 옵션을 사용할 수 있음을 알리는, 적절한 유저 인터페이스 요소를 제공해야 합니다.

> **참고:** **주의:** 다른 페이지로 이동하거나, 탭을 변경하거나, 응용 프로그램 전환기(또는 <kbd>Alt</kbd>-<kbd>Tab</kbd>)를 사용하여, 다른 응용 프로그램으로 전환하면 마찬가지로 full-screen mode가 종료됩니다.

## Example

이 예제에서는 비디오가 웹 페이지에 표시됩니다. <kbd>Return</kbd> 또는 <kbd>Enter</kbd> 키를 누르면, 사용자가 비디오의 창과 full-screen 표시를 전환할 수 있습니다.

[View Live Examples](/samples/domref/fullscreen.html)

### Watching for the Enter key

페이지가 로드되면, 이 코드가 실행되어 <kbd>Enter</kbd> 키 를 주시하는 이벤트 리스너를 설정합니다.

```js
document.addEventListener(
  "keypress",
  function (e) {
    if (e.keyCode === 13) {
      toggleFullScreen();
    }
  },
  false,
);
```

### Toggling full-screen mode

이 코드는 사용자가 <kbd>Enter</kbd> 키를 누를 때, 위의 이벤트 핸들러에 의해 호출됩니다.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

먼저 {{DOMxRef("Document", "document")}}의 `fullscreenElement` 속성(attribute)값을 살펴보겠습니다. 실제 배포 시에는 이 시점에 접두어가 붙은 버전(예를들어, `mozFullscreenElement`, `msFullscreenElement`, `webkitFullscreenElement`)을 확인해야 합니다. 값이 `null`인 경우, 문서는 현재 window mode에 있으므로, full-screen mode로 전환해야 합니다. 그렇지 않으면, 이 요소는 지금 full-screen mode 상태입니다. full-screen mode로 전환하는 작업은, {{HTMLElement("video")}}요소에서 {{DOMxRef("Element.requestFullscreen()")}}을 호출하여 수행합니다.

full-screen mode가 이미 활성화 된 경우(`fullscreenElement` 가 `null`이 아닌 경우), `document`에서 {{DOMxRef("Document.exitFullscreen", "exitFullscreen()")}}을 호출하여 full-screen mode를 종료합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using full-screen mode](/ko/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/ko/docs/Web/HTML/Element/iframe#allowfullscreen)
