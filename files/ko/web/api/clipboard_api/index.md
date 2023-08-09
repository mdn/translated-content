---
title: Clipboard API
slug: Web/API/Clipboard_API
---

{{DefaultAPISidebar("Clipboard API")}}

**Clipboard API**는 클립보드 명령(잘라내기, 복사, 붙여넣기)에 응답하거나 시스템 클립보드에 비동기적으로 접근하고 쓸 수 있는 기능을 제공합니다.

> **참고:** 이 API는 [웹 워커](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 **없습니다**. ({{domxref("WorkerNavigator")}}에 노출되지 않음)

Clipboard API는 {{domxref("document.execCommand()")}}를 사용한 클립보드 접근을 대체하기 위해 디자인되었습니다.

## 클립보드 접근

시스템 클립보드에 접근할 땐 `Clipboard` 객체의 인스턴스를 생성하지 않고, 전역 {{domxref("Navigator.clipboard")}}를 사용합니다.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

위의 코드 조각은 클립보드에서 텍스트를 가져와서, `editor` 클래스를 가진 첫 번째 요소의 콘텐츠 뒤에 추가합니다. {{domxref("Clipboard.readText", "readText()")}}는 ({{domxref("Clipboard.read", "read()")}}도 마찬가지로) 클립보드의 내용이 텍스트가 아니면 빈 문자열을 반환하므로, 이 코드는 안전합니다.

## 인터페이스

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : 시스템 클립보드에서 텍스트와 데이터를 읽고 쓸 수 있는 인터페이스를 제공합니다. 명세에서는 "Async Clipboard API"라고 부릅니다.
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} 이벤트처럼 클립보드 조작에 대한 정보를 제공하는 이벤트를 나타냅니다. 명세에서는 "Clipboard Event API"라고 부릅니다.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : 클립보드 데이터를 읽거나 쓸 때 데이터 형식을 나타낼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Async Clipboard API 데모 (Glitch)](https://async-clipboard-api.glitch.me/)
- [web.dev의 Async Clipboard API](https://web.dev/image-support-for-async-clipboard/)
