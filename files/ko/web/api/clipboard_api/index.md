---
title: Clipboard API
slug: Web/API/Clipboard_API
tags:
  - API
  - Clipboard API
  - Landing
  - Overview
  - 클립보드
translation_of: Web/API/Clipboard_API
---
{{DefaultAPISidebar("Clipboard API")}}

**Clipboard API**는 클립보드 명령(잘라내기, 복사, 붙여넣기)에 응답할 수 있는 기능 및 시스템 클립보드에 비동기적으로 읽고 쓸 수 있는 방법을 제공합니다. 클립보드 콘텐츠로의 접근은 [Permissions API](/ko/docs/Web/API/Permissions_API)를 통해야 하며, 사용자 동의 없이는 콘텐츠를 읽거나 수정할 수 없습니다.

Clipboard API는 {{domxref("document.execCommand()")}}를 사용한 클립보드 접근을 대체하기 위해 디자인되었습니다.

## 클립보드 접근

`Clipboard` 객체의 인스턴스를 생성하지 않고, 전역 {{domxref("Navigator.clipboard", "navigator.clipboard")}}를 사용해 시스템 클립보드에 접근합니다.

```js
navigator.clipboard.readText().then(
  clipText => document.querySelector(".editor").innerText += clipText);
```

위의 코드 조각은 클립보드에서 텍스트를 가져와서, `editor` 클래스를 가진 요소의 콘텐츠 뒤에 추가합니다. {{domxref("Clipboard.readText", "readText()")}}는 클립보드의 내용이 텍스트가 아니면 빈 문자열을 반환하므로, 이렇게 작성해도 안전합니다.

## 인터페이스

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : 시스템 클립보드에서 텍스트와 데이터를 읽고 쓸 수 있는 인터페이스를 제공합니다. 명세는 'Async Clipboard API'라고 부릅니다.
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : 클립보드 수정에 관련된 정보를 제공하는 이벤트, 즉 {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} 이벤트를 나타냅니다. 명세는 'Clipboard Event API'라고 부릅니다.

## 명세

| Specification                            | Status                               | Comment             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Clipboard API')}} | {{Spec2('Clipboard API')}} | Initial definition. |

## 브라우저 호환성

### `Clipboard`

{{Compat("api.Clipboard")}}

### `ClipboardEvent`

{{Compat("api.ClipboardEvent")}}

## 같이 보기

- [Permissions API](/ko/docs/Web/API/Permissions_API)
- [Using the Permissions API](/ko/docs/Web/API/Permissions_API/Using_the_Permissions_API)
