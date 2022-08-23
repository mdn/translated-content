---
title: WindowEventHandlers.onafterprint
slug: conflicting/Web/API/Window/afterprint_event
tags:
  - API
  - DOM
  - Event Handler
  - HTML DOM
  - Property
  - Reference
  - WindowEventHandlers
  - printing
translation_of: Web/API/WindowEventHandlers/onafterprint
original_slug: Web/API/WindowEventHandlers/onafterprint
---
{{ApiRef}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onafterprint`** プロパティは、現在のウィンドウの {{event("afterprint")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。 このイベントは、ユーザーが印刷した後や、ユーザーが印刷ダイアログで中止した場合に発生します。

{{event("beforeprint")}} イベントと `afterprint` イベントを使用すると、印刷を開始する前にページでコンテンツを変更し（例えば、バナーを削除するなど）、印刷の完了後にそれらの変更を元に戻すことができます。 一般に、[`@media print`](/ja/docs/Web/CSS/@media#メディア種別) CSS @-規則の使用を好むはずですが、場合によってはこれらのイベントを使用する必要があるかもしれません。

## 構文

```
window.addEventListener("afterprint", function(event) { ... });
window.onafterprint = function(event) { ... };
```

## 仕様

| 仕様                                                                                                 | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-window-onafterprint', 'onafterprint')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onafterprint")}}

## 関連情報

- {{domxref("Window.print()")}}
- {{domxref("WindowEventHandlers.onbeforeprint")}}
- [印刷](/ja/docs/Web/Guide/Printing)
