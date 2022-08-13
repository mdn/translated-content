---
title: WindowEventHandlers
slug: Web/API/WindowEventHandlers
tags:
  - API
  - HTML DOM
  - Interface
  - Mixin
  - Reference
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers
---
{{APIRef("HTML DOM")}}

**`WindowEventHandlers`** ミックスインは、{{domxref("Window")}}、{{domxref("HTMLBodyElement")}}、{{domxref("HTMLFrameSetElement")}} などのいくつかのインターフェイスに共通のイベントハンドラを記述します。 これらの各インターフェイスは、追加の固有のイベントハンドラを実装できます。

> **Note:** **注**: `WindowEventHandlers` はインターフェースではなく、ミックスインです。 実際には、`WindowEventHandlers` 型のオブジェクトを作成することはできません。

## プロパティ

_`onXYZ` という形式のイベントプロパティは、{{domxref("WindowEventHandlers")}} で定義され、{{domxref("Window")}} および Web Workers の {{domxref("WorkerGlobalScope")}} によって実装されます。_

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : {{event("afterprint")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : {{event("beforeprint")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : {{event("beforeunload")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : {{event("hashchange")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : {{event("languagechange")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onmessage")}}
  - : {{event("message")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onmessageerror")}}
  - : {{event("MessageError")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onoffline")}}
  - : {{event("offline")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.ononline")}}
  - : {{event("online")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : {{event("pagehide")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : {{event("pageshow")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : {{event("popstate")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onrejectionhandled")}}
  - : {{event("rejectionhandled")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。 {{jsxref("Promise")}} が拒否され、拒否が処理されたことを示します。
- {{domxref("WindowEventHandlers.onstorage")}}
  - : {{event("storage")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。
- {{domxref("WindowEventHandlers.onunhandledrejection")}}
  - : {{event("unhandledrejection")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。 {{jsxref("Promise")}} は拒否されたが拒否が処理されなかったことを示します。
- {{domxref("WindowEventHandlers.onunload")}}
  - : {{event("unload")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。

## メソッド

_このインターフェイスはメソッドを定義しません。_

## 仕様

| 仕様                                                                                                 | 状態                             | コメント                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'WindowEventHandlers')}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName("HTML5.1")}} 以降、変更はありません。                                                            |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'WindowEventHandlers')}}         | {{Spec2('HTML5.1')}}     | {{SpecName("HTML WHATWG")}} のスナップショット。 {{SpecName("HTML5 W3C")}} スナップショット以降に `onlanguage` が追加されました。 |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "WindowEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName("HTML WHATWG")}} のスナップショット。 `WindowEventHandlers` の作成（ターゲットの前にあるプロパティ）。                        |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers")}}

## 関連情報

- {{domxref("Window")}} と {{domxref("WorkerGlobalScope")}}
