---
title: Window.postMessage()
slug: Web/API/Window/postMessage
---

{{ApiRef("HTML DOM")}}

**`window.postMessage()`** 메소드는 {{domxref("Window")}} 오브젝트 사이에서 안전하게 cross-origin 통신을 할 수 있게 합니다. 예시로, 페이지와 생성된 팝업 간의 통신이나, 페이지와 페이지 안의 iframe 간의 통신에 사용할 수 있습니다.

일반적으로, 다른 페이지 간의 스크립트는 각 페이지가 같은 프로토콜, 포트 번호와 호스트을 공유하고 있을 때에("[동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)"으로도 불려 집니다.) 서로 접근할 수 있습니다. **`window.postMessage()`** 는 이 제약 조건을 안전하게 우회하는 기능을 제공합니다.

대체로, 한 window는 다른 window를 참조할 수 있고(_예시,_ `targetWindow = window.opener`), `targetWindow.postMessage()`를 통해 다른 window에 {{domxref("MessageEvent")}}를 전송할 수 있습니다. 이벤트를 받는 window는 이를 통해 필요에 따라 [이벤트를 처리](/ko/docs/Web/Guide/Events)할 수 있습니다. **`window.postMessage()`** 를 통해 전달된 인자(예시, "message")는 [이벤트 객체를 통해 이벤트를 받는 window에서 사용](#The_dispatched_event)할 수 있습니다.

## 문법

```js
targetWindow.postMessage(message, targetOrigin, [transfer]);
```

- `targetWindow`
  - : 메세지를 전달 받을 window의 참조. 참조를 취득할 방법으로는 다음과 같은 것이 있습니다:\* {{domxref("Window.open")}} (새 창을 만들고 새 창을 참조할 때),
    - {{domxref("Window.opener")}} (새 창을 만든 window를 참조할 때),
    - {{domxref("HTMLIFrameElement.contentWindow")}} (부모 window에서 임베디드된 {{HTMLElement("iframe")}}을 참조할 때),
    - {{domxref("Window.parent")}} (임베디드된 {{HTMLElement("iframe")}}에서 부모 window를 참조할 때),
    - {{domxref("Window.frames")}} + an index value (named or numeric).
- `message`
  - : 다른 window에 보내질 데이터. 데이터는 [the structured clone algorithm](/ko/docs/DOM/The_structured_clone_algorithm)을 이용해 직렬화됩니다. 이를 통해 직렬화를 직접할 필요 없이 대상 window에 다양한 데이터 객체를 안전하게 전송할 수 있습니다. \[[1](/ko/docs/)]
- `targetOrigin`
  - : `targetWindow`의 origin을 지정합니다. 이는 전송되는 이벤트에서 사용되며, 문자열 `"*"`(별도로 지정하지 않음을 나타냄) 혹은 URI이어야 합니다. 이벤트를 전송하려 할 때에 `targetWindow`의 스키마, 호스트 이름, 포트가 `targetOrigin`의 정보와 맞지 않다면, 이벤트는 전송되지 않습니다. 세 가지 모두 일치해야 이벤트가 전송됩니다. 이는 메세지를 보내는 곳을 제안하기 위함입니다. 예를 들어, `postMessage()`를 통해 비밀번호가 전송된다면, 악의적인 제 3자가 가로채지 못하도록, `targetOrigin`을 반드시 지정한 수신자와 동일한 URI를 가지도록 설정하는 것이 정말 중요합니다. **다른 window의 document의 위치를 알고 있다면, 항상 `targetOrigin`에 `*` 말고 특정한 값을 설정하세요. 특정한 대상을 지정하지 않으면 악의적인 사이트에 전송하는 데이터가 공개되어 버립니다.**
- `transfer` {{optional_Inline}}
  - : 일련의 {{Glossary("transferable objects", "transfer 객체")}}. 메세지와 함께 전송됩니다. 이 객체들의 소유권은 수신 측에게 전달되며, 더 이상 송신 측에서 사용할 수 없습니다.

## 디스페치 이벤트(The dispatched event)

이하의 JavaScript를 실행하면 `otherWindow` 에서 전달된 메시지를 받을 수 있습니다:

```js
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.origin !== "http://example.org:8080") return;

  // ...
}
```

전달된 메시지의 프로퍼티는 다음과 같습니다:

- `data`
  - : 다른 윈도우에서 온 오브젝트.
- `origin`
  - : `postMessage` 가 호출될 때 메시지를 보내는 윈도우의 [origin](/ko/docs/Origin).
    이 문자열은 프로토콜과 "://", 호스트 명(존재할 경우), 그리고 ":"의 뒤에 이어 지는 포트 번호가 연결된 것입니다. (포트 번호는 포트 번호가 명기되었거나 주어진 프로토콜의 디폴트 포트와 다를 경우). 전형적인 origin의 예로 `https://example.org` (이 경우 port `443`), `http://example.net` (이 경우 port `80`), and `http://example.com:8080` 가 있습니다. 이 origin은 `postMessage` 호출 이후 다른 위치로 이동되었을 수 있는 해당 윈도우의 현재 또는 미래의 origin 이 보장되지 *않는다*는 점에 주의하세요.
- `source`
  - : 메시지를 보낸 [`window`](/ko/docs/DOM/window) 오브젝트에 대한 참조.
    이것을 사용함으로 다른 orign에 있는 두 개의 윈도우에서 쌍방향 통신을 확립할 수 있습니다.

## 보안 문제(Security concerns)

**다른 사이트로부터 메시지를 받고 싶지 않다면, `message` 이벤트를 위해 어떠한 이벤트 리스너도 추가하지 _마세요_.** 이것은 보안 문제를 피할 수 있는 단순명료한 방법입니다.

다른 사이트로부터 메시지를 받고자 한다면, `origin`과 추가로 `source` 프로퍼티를 이용해 **항상 보내는 쪽의 신원을 확인하세요**. 임의의 어떤 윈도우(예: `http://evil.example.com` 를 포함)는 다른 윈도우에 메시지를 보낼 수 있으며, 알 수 없는 발신자가 악의적인 메시지를 보내지 않는다는 보장이 없습니다. 그러나 신원을 확인했더라도 **수신된 메시지의 구문을 항상 확인해야 합니다**. 그렇지 않으면 신뢰할 수 있는 메시지만 전송할 것으로 기대한 사이트의 보안 구멍으로 인해 크로스 사이트 스크립트 빈틈이 생길 수 있습니다.

**`postMessage` 를 이용해 다른 윈도우로 데이터를 보낼 때, 항상 정확한 타겟 origin (`*`가 아니라) 을 지정하세요.** 악의적인 사이트는 당신이 모르는 사이에 윈도우의 위치를 변경할 수 있고, 따라서 `postMessage`를 사용하여 전송된 데이터를 가로챌 수 있습니다.

## Example

```js
/*
 * <http://example.com:8080>에 있는 윈도우 A의 스크립트:
 */

var popup = window.open(...popup details...);

// 팝업이 완전히 로드되었을 때:

// This does nothing, assuming the window hasn't changed its location.
popup.postMessage("The user is 'bob' and the password is 'secret'",
                  "https://secure.example.net");

// This will successfully queue a message to be sent to the popup, assuming
// the window hasn't changed its location.
popup.postMessage("hello there!", "http://example.com");

function receiveMessage(event)
{
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example).
  if (event.origin !== "http://example.com")
    return;

  // event.source is popup
  // event.data is "hi there yourself!  the secret response is: rheeeeet!"
}
window.addEventListener("message", receiveMessage, false);
```

```js
/*
 * In the popup's scripts, running on <http://example.com>:
 */

// Called sometime after postMessage is called
function receiveMessage(event) {
  // Do we trust the sender of this message?
  if (event.origin !== "http://example.com:8080") return;

  // event.source is window.opener
  // event.data is "hello there!"

  // Assuming you've verified the origin of the received message (which
  // you must do in any case), a convenient idiom for replying to a
  // message is to call postMessage on event.source and provide
  // event.origin as the targetOrigin.
  event.source.postMessage(
    "hi there yourself!  the secret response " + "is: rheeeeet!",
    event.origin,
  );
}

window.addEventListener("message", receiveMessage, false);
```

### Notes

윈도우 document의 장소와 무관하게, 임의의 윈도우는 언제든지 메시지를 보내기 위해 임의의 다른 윈도우에 있는 함수에 접근할 수도 있습니다. 그래서 이벤트 리스너는 메시지를 취득할 때, `origin` 또는 `source` 프로퍼티를 이용해, 먼저 메시지 송신자의 식별 정보를 **체크해야만 합니다**. 이것은 아무리 강조해도 지나치지 않습니다. 왜냐하면, **`origin` 또는 `source` 프로퍼티의 체크 실패는 크로스 사이트 스크립팅 공격을 가능하게 하기 때문입니다.**

비동기로 전달된 스크립트(타임아웃, 유저 생성 이벤트)에서, `postMessage`의 호출자의 판별이 불가능할 때, `postMessage`에 의해 보내진 이벤트를 기다리는 이벤트 핸들러는 예외를 발생시킵니다.

`postMessage()`는 _보류 중인 모든 실행 컨텍스트가 완료된 후에만_ {{domxref("MessageEvent")}}을 발송하도록 스케줄합니다. 예를 들어, 이벤트 핸들러에서 `postMessage()`가 호출되는 경우, {{domxref("MessageEvent")}}가 발송되기 전에 해당 이벤트에 대한 나머지 핸들러와 마찬가지로 이벤트 핸들러는 완료까지 실행됩니다.

전달된 이벤트의 `origin` 프로퍼티의 값은 호출하는 윈도우의 `document.domain` 현재 값에 영향을 받지 않습니다.

IDN 호스트 명에 한하여, `origin` 프로퍼티 값은 일관되게 Unicode 또는 punycode가 아닙니다. 그래서, IDN 사이트로 부터 메시지를 기대하는 경우 최상의 호환성 체크를 하기위해, IDN과 Punycode의 값 모두를 체크하세요. 이 값은 결국 일관되게 IDN이 될 것이지만, 현재로서는 IDN과 Punycode 양식을 모두 처리해야 합니다.

송신 창에 `javascript:` 또는`data:` URL이 있을 때의 `origin` 프로퍼티의 값은 URL을 로드한 스크립트의 origin입니다.

### Using window\.postMessage in extensions {{Non-standard_inline}}

`window.postMessage`는 크롬 코드(예: 확장 코드 및 권한 코드)로 실행되는 JavaScript에서 사용할 수 있지만, 발송된 이벤트의 `source` 프로퍼티는 보안 제한으로 항상 `null`입니다. (다른 프로퍼티에는 예상 값이 있습니다.)

콘텐츠 또는 웹 컨텍스트 스크립트가 `targetOrigin`을 지정하여 확장 스크립트(백그라운드 스크립트 또는 콘텐츠 스크립트)와 직접 통신하는 것은 불가능합니다. 웹 또는 콘텐츠 스크립트는 `"*"`의 `targetOrigin`이 포함된 `window.postMessage`를 사용하여 모든 리스너에게 브로드캐스트할 수 있지만, 확장은 이러한 메시지의 발신지를 확인할 수 없고 다른 리스너(제어하지 않는 수신자 포함)가 수신할 수 있기 때문에 이 작업은 중지됩니다.

컨텐츠 스크립트는 [runtime.sendMessage](/en-US/Add-ons/WebExtensions/API/runtime) 를 사용하여 백그라운드 스크립트와 통신해야 합니다. 웹 컨텍스트 스크립트는 사용자 지정 이벤트를 사용하여 컨텐츠 스크립트(필요한 경우 게스트 페이지에서 스누핑을 방지하기 위해 임의로 생성된 이벤트 이름 포함)와 통신할 수 있습니다.

마지막으로, `file:` URL의 페이지의 메시지를 보낼 경우 `targetOrigin` 파라미터를 `"*"`로 할 필요가 있습니다. `file://` 은 보안 제한으로 사용할 수 없으며 이 제한은 향후 수정될 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Document.domain")}}
- {{domxref("CustomEvent")}}
- [Interaction between privileged and non-privileged pages](/ko/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages)
