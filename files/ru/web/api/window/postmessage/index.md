---
title: Window.postMessage()
slug: Web/API/Window/postMessage
---

{{ApiRef("HTML DOM")}}

**`Window.postMessage()`** - этот метод позволяет безопасно отправлять кроссдоменные запросы. Обычно сценариям на разных страницах разрешён доступ друг к другу только если страницы, которые их выполняли, передаются по одному протоколу (обычно это https), номер порта (443 — по умолчанию для https) и хост (modulo {{domxref("Document.domain")}} установленный страницами на одно и тоже значение). `window.postMessage()` предоставляет контролируемый механизм, чтобы обойти это ограничение способом, который безопасен при правильном использовании.

При вызове метода `window.postMessage()` он вызывает {{domxref("MessageEvent")}} для отправки в целевом окне, когда завершается любой ожидающий сценарий, который должен быть выполнен (например, оставшиеся обработчики событий, если `window.postMessage()` вызывается из обработчика событий ранее заданных ожидающих таймаутов). {{domxref("MessageEvent")}} имеет тип `message`, `data-свойство` которого устанавливает значение первого аргумента в методе `window.postMessage()`, свойство `origin` соответствует адресу основного документа в вызове `window.postMessage` во время вызова `window.postMessage()`, свойство `source` указывает на окно, из которого `window.postMessage()` вызвали. (Другие стандартные свойства событий имеют ожидаемые значения)

## Syntax

```
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

- `otherWindow`
  - : Ссылка на другое окно; такая ссылка может быть получена, к примеру, при использовании свойства `contentWindow` элемента `iframe` , объекта, возвращаемого [window.open](/ru/docs/DOM/window.open), или по именованному и числовому индексу {{domxref("Window.frames")}}, если вы пытаетесь запустить сообщение из iframe в родительском окне, то родитель также является действительной ссылкой.
- `message`
  - : Данные, которые нужно отправить в другое окно. Данные сериализуются с использованием алгоритма структурированного клона. Это означает, что вы можете безопасно передавать большое количество объектов данных в окно назначения без необходимости их сериализации. \[[1](/ru/docs/)]
- `targetOrigin`
  - : Specifies what the origin of `otherWindow` must be for the event to be dispatched, either as the literal string `"*"` (indicating no preference) or as a URI. If at the time the event is scheduled to be dispatched the scheme, hostname, or port of `otherWindow`'s document does not match that provided in `targetOrigin`, the event will not be dispatched; only if all three match will the event be dispatched. This mechanism provides control over where messages are sent; for example, if `postMessage()` was used to transmit a password, it would be absolutely critical that this argument be a URI whose origin is the same as the intended receiver of the message containing the password, to prevent interception of the password by a malicious third party. **Always provide a specific `targetOrigin`, not `*`, if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site.**
- `transfer` {{optional_Inline}}
  - : Is a sequence of {{domxref("Transferable")}} objects that are transferred with the message. The ownership of these objects is given to the destination side and they are no longer usable on the sending side.

## The dispatched event

В `otherWindow` отправляемые сообщения могут быть обработаны следующим способом:

```js
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.origin !== "http://example.org:8080") return;

  // ...
}
```

Свойства отправляемых сообщений:

- `data`
  - : Объект, переданный из другого окна.
- `origin`
  - : The [origin](/ru/docs/Origin) of the window that sent the message at the time `postMessage` was called. This string is the concatenation of the protocol and "://", the host name if one exists, and ":" followed by a port number if a port is present and differs from the default port for the given protocol. Examples of typical origins are `https://example.org` (implying port `443`), `http://example.net` (implying port `80`), and `http://example.com:8080`. Note that this origin is _not_ guaranteed to be the current or future origin of that window, which might have been navigated to a different location since `postMessage` was called.
- `source`
  - : Ссылка на объект [`window`](/ru/docs/DOM/window) , который отправил сообщение; может быть использована для установки двустороннего соединения между окнами с разными `origins`.

## Вопросы безопасности

**Если вы не ожидаете получения сообщения от других сайтов, не добавляйте обработчики событий `message`.** Это гарантированный способ избежать проблем с безопасностью.

Если же вы хотите получать сообщения от других сайтов, то всегда необходимо идентифицировать отправителя, используя `origin` и возможно `source` свойства. Любой сайт (включая, например, `http://evil.example.com`) может отправлять сообщения любым другим, и у вас нет гарантии, что неизвестный отправитель не пошлёт вредоносные сообщения. Однако даже если отправитель известен, вам всё равно необходимо всегда подтверждать синтаксис получаемого сообщения. Иначе, дыра в безопасности сайта, которому вы доверяете, может открыть дыру для межсайтового скриптинга на вашем сайте.

**Всегда конкретизируйте целевой первоисточник, а не просто `*`, когда вы используете `postMessage` для отправки данных другим окнам. Вредоносный сайт может изменить локацию окна без вашего ведома и затем перехватить данные, посылаемые с использованием** `postMessage`.

## Example

```js
/*
 * In window A's scripts, with A being on <http://example.com:8080>:
 */

var popup = window.open(...popup details...);

// When the popup has fully loaded, if not blocked by a popup blocker:

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

Any window may access this method on any other window, at any time, regardless of the location of the document in the window, to send it a message. Consequently, any event listener used to receive messages **must** first check the identity of the sender of the message, using the `origin` and possibly `source` properties. This cannot be overstated: **Failure to check the `origin` and possibly `source` properties enables cross-site scripting attacks.**

As with any asynchronously-dispatched script (timeouts, user-generated events), it is not possible for the caller of `postMessage` to detect when an event handler listening for events sent by `postMessage` throws an exception.

The value of the `origin` property of the dispatched event is not affected by the current value of `document.domain` in the calling window.

For IDN host names only, the value of the `origin` property is not consistently Unicode or punycode; for greatest compatibility check for both the IDN and punycode values when using this property if you expect messages from IDN sites. This value will eventually be consistently IDN, but for now you should handle both IDN and punycode forms.

The value of the `origin` property when the sending window contains a `javascript:` or `data:` URL is the origin of the script that loaded the URL.

### Using window\.postMessage in extensions {{Non-standard_inline}}

`window.postMessage` is available to JavaScript running in chrome code (e.g., in extensions and privileged code), but the `source` property of the dispatched event is always `null` as a security restriction. (The other properties have their expected values.) The `targetOrigin` argument for a message sent to a window located at a `chrome:` URL is currently misinterpreted such that the only value which will result in a message being sent is `"*"`. Since this value is unsafe when the target window can be navigated elsewhere by a malicious site, it is recommended that `postMessage` not be used to communicate with `chrome:` pages for now; use a different method (such as a query string when the window is opened) to communicate with chrome windows. Lastly, posting a message to a page at a `file:` URL currently requires that the `targetOrigin` argument be `"*"`. `file://` cannot be used as a security restriction; this restriction may be modified in the future.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.domain")}}
- {{domxref("CustomEvent")}}
- [Interaction between privileged and non-privileged pages](/ru/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages)
