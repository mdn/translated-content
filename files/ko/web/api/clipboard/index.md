---
title: Clipboard
slug: Web/API/Clipboard
---

{{SeeCompatTable}}{{APIRef("Clipboard API")}}

> **참고:** clipboard는 데이터 저장 또는 전송을 위한 짧은 기간동안 사용하는 데이터 버퍼 입니다. documents 와 applications 양쪽에서 사용 가능합니다. It is usually implemented as an anonymous, temporary [data buffer](https://en.wikipedia.org/wiki/Data_buffer), sometimes called the paste buffer, that can be accessed from most or all programs within the environment via defined [programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface).A typical application accesses clipboard functionality by mapping [user input](https://en.wikipedia.org/wiki/User_input) such as [keybindings](https://en.wikipedia.org/wiki/Keybinding), [menu selections](<https://en.wikipedia.org/wiki/Menu_(computing)> "Menu (computing)"), etc. to these interfaces.

[Clipboard API](/ko/docs/Web/API/Clipboard_API) 의 **`Clipboard`** 인터페이스는 시스템 클립보드로부터 텍스트 및 데이터를 읽거나 시스템 클립보드에 쓰기 위한 인터페이스를 지원합니다.

The Clipboard API can be used to implement cut, copy, and paste features within a web application.

The system clipboard is exposed through the global {{domxref("Navigator.clipboard")}} property.

Calls to the methods of the `Clipboard` object will not succeed if the user hasn't granted the needed permissions using the [Permissions API](/ko/docs/Web/API/Permissions_API) and the `"clipboard-read"` or `"clipboard-write"` permission as appropriate.

> **참고:** In reality, at this time browser requirements for access to the clipboard vary significantly. Please see the section [Clipboard availability](#clipboard_availability) for details.

All of the Clipboard API methods operate asynchronously; they return a {{jsxref("Promise")}} which is resolved once the clipboard access has been completed. The promise is rejected if clipboard access is denied.

## Methods

_`Clipboard` 는 {{domxref("EventTarget")}} 인터페이스를 기반으로 하고 있으며, 해당 인터페이스의 method를 포함합니다._

- {{domxref("Clipboard.read()","read()")}}
  - : 클립보드로부터 임의의 데이터(이미지와 같은)를 요청하며, returning a {{jsxref("Promise")}}. When the data has been retrieved, the promise is resolved with a {{domxref("DataTransfer")}} object that provides the data.
- {{domxref("Clipboard.readText()","readText()")}}
  - : 시스템 클립보드로부터 텍스트를 읽는다. returns a `Promise` which is resolved with a {{domxref("DOMString")}} containing the clipboard's text once it's available.
- {{domxref("Clipboard.write()","write()")}}
  - : 시스템 클립보드에 예를 들어 이미지들과 같은 데이터를 쓴다. 이 비동기 작업은 Promise를 반환된 `Promise`를 resolve 함으로써 작업이 종료되었다는 사실을 알립니다.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : 시스템 클립보드에 텍스트를 쓰며, returning a `Promise` which is resolved once the text is fully copied into the clipboard.

## Clipboard availability

The asynchronous clipboard API is a relatively recent addition, and the process of implementing it in browsers is not yet complete. Due to both potential security concerns and technical complexities, the process of integrating this API is happening gradually in most browsers.

For example, Firefox does not yet support the `"clipboard-read"` and `"clipboard-write"` permissions, so access to the methods that access and change the contents of the clipboard are restricted in other ways.

For WebExtensions, you can request the clipboardRead and clipboardWrite permissions to be able to use clipboard.readText() and clipboard.writeText(). Content scripts applied on HTTP sites do not have access to the clipboard object. See [extensions in Firefox 63](https://blog.mozilla.org/addons/2018/08/31/extensions-in-firefox-63/).

In addition, {{domxref("Clipboard.read", "read()")}} and {{domxref("Clipboard.write", "write()")}} are disabled by default and require changing a preference to enable them. Check the compatibility tables for each method before using it.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
