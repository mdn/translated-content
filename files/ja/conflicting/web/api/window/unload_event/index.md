---
title: WindowEventHandlers.onunload
slug: conflicting/Web/API/Window/unload_event
tags:
  - API
  - Event Handler
  - HTML DOM
  - MakeBrowserAgnostic
  - Property
  - Reference
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onunload
original_slug: Web/API/WindowEventHandlers/onunload
---
{{APIRef("HTML DOM")}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onunload`** プロパティは、{{Event("unload")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。 このイベントは、ウィンドウがコンテンツとリソースをアンロードするときに発生します。 リソースの除去は、`unload` イベントが発生した後に処理されます。

> **Note:** **メモ**: ポップアップブロッカーを備えたブラウザーは、`onunload` イベントハンドラ関数にあるすべての {{domxref("Window.open()")}} メソッドの呼び出しを無視します。

## 構文

```
window.addEventListener("unload", function(event) { ... });
window.onunload = function(event) { ... };
```

通常は、`onunload` の代わりに {{domxref("EventTarget.addEventListener", "window.addEventListener()")}} と {{event("unload")}} イベントを使用することをお勧めします。

## 仕様

| 仕様                                                                                             | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-window-onunload', 'onunload')}}         | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}     | {{Spec2('HTML5.1')}}     |          |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}} | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onunload")}}

Firefox 1.5 では、ページでこのイベントハンドラを使用すると、ブラウザーがメモリ内の bfcache にページをキャッシュできなくなります。 詳細については、[Firefox 1.5 のキャッシュの使用](/ja/Firefox/Releases/1.5/Using_Firefox_1.5_caching)を参照してください。
