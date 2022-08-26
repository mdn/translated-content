---
title: WindowEventHandlers.onbeforeprint
slug: conflicting/Web/API/Window/beforeprint_event
tags:
  - API
  - DOM
  - Event Handler
  - HTML DOM
  - Reference
  - onbeforeprint
  - プロパティ
  - 印刷
translation_of: Web/API/WindowEventHandlers/onbeforeprint
original_slug: Web/API/WindowEventHandlers/onbeforeprint
---
{{ApiRef}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onbeforeprint`** プロパティは、現在のウィンドウの {{event("beforeprint")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。 このイベントは、印刷ダイアログウィンドウが開く前に発生します。

`beforeprint` イベントと {{event("afterprint")}} イベントを使用すると、印刷を開始する前にページでコンテンツを変更し（例えば、バナーを削除するなど）、印刷の完了後にそれらの変更を元に戻すことができます。 一般に、[`@media print`](/ja/docs/Web/CSS/@media#メディア種別) CSS @-規則の使用を好むはずですが、場合によってはこれらのイベントを使用する必要があるかもしれません。

## 構文

```
window.addEventListener("beforeprint", function(event) { ... });
window.onbeforeprint = function(event) { ... };
```

## ポリフィル

Safari はこれらのイベントを実装していませんが、{{domxref("window.matchMedia")}}`('print')` を使用して `beforeprint` イベントと同等の結果を作成できます。

```js
var mediaQueryList = window.matchMedia('print');
mediaQueryList.addListener(function(mql) {
  if(mql.matches) {
    console.log('onbeforeprint に相当する webkit');
  }
});
```

## 仕様

| 仕様                                                                                                     | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-window-onbeforeprint', 'onbeforeprint')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onbeforeprint")}}

## 関連情報

- {{domxref("Window.print()")}}
- {{domxref("WindowEventHandlers.onafterprint")}}
- [印刷](/ja/docs/Web/Guide/Printing)
