---
title: 'Window: rejectionhandled イベント'
slug: Web/API/Window/rejectionhandled_event
tags:
  - API
  - Event
  - HTML DOM
  - JavaScript
  - Promise
  - Promises
  - Reference
  - Window
  - Worker
  - global
  - onrejectionhandled
  - rejectionhandled
  - イベント
translation_of: Web/API/Window/rejectionhandled_event
---
{{APIRef("HTML DOM")}}

**`rejectionhandled`** イベントは、 JavaScript の {{jsxref("Promise")}} が拒否されたものの、その後で Promise の拒否が処理された場合にスクリプトのグローバルスコープ (ふつうは {{domxref("window")}} だが {{domxref("Worker")}} の場合もある) に送られます。これは、 Promise が拒否されたが拒否の手助けがないときに送信される {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} イベントと並行して、デバッグや一般的なアプリケーションの回復に使用できます。

| バブリング                   | なし                                                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                               |
| インターフェイス             | {{domxref("PromiseRejectionEvent")}}                                                     |
| イベントハンドラープロパティ | {{domxref("WindowEventHandlers.onrejectionhandled", "onrejectionhandled")}} |

## 例

`rejectionhandled` イベントを使用して、拒否された Promise を、拒否された理由を添えてコンソールに出力することができます。

```js
window.addEventListener("rejectionhandled", event => {
  console.log("Promise rejected; reason: " + event.reason);
}, false);
```

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#unhandled-promise-rejections', 'rejectionhandled')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Window.rejectionhandled_event")}}

## 関連情報

- {{SectionOnPage("/ja/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
