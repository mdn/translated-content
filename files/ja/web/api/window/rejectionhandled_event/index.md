---
title: "Window: rejectionhandled イベント"
slug: Web/API/Window/rejectionhandled_event
---

{{APIRef("HTML DOM")}}

**`rejectionhandled`** イベントは、 JavaScript の {{jsxref("Promise")}} が拒否されたものの、その後で Promise の拒否が処理された場合にスクリプトのグローバルスコープ (ふつうは {{domxref("window")}} だが {{domxref("Worker")}} の場合もある) に送られます。これは、 Promise が拒否されたが拒否の手助けがないときに送信される {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} イベントと並行して、デバッグや一般的なアプリケーションの回復に使用できます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers.onrejectionhandled", "onrejectionhandled")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`rejectionhandled` イベントを使用して、拒否された Promise を、拒否された理由を添えてコンソールに出力することができます。

```js
window.addEventListener("rejectionhandled", event => {
  console.log("Promise rejected; reason: " + event.reason);
}, false);
```

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat("api.Window.rejectionhandled_event")}}

## 関連情報

- [プロミスの拒否イベント](/ja/docs/Web/JavaScript/Guide/Using_promises#%E3%83%97%E3%83%AD%E3%83%9F%E3%82%B9%E3%81%AE%E6%8B%92%E5%90%A6%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88)
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
