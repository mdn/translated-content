---
title: PromiseRejectionEvent.promise
slug: Web/API/PromiseRejectionEvent/promise
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("HTML DOM") }}

{{domxref("PromiseRejectionEvent")}} インターフェイスの **`promise`** は読み取り専用プロパティで、拒否された JavaScript の {{jsxref("Promise")}} を表します。プロミスが拒否された理由は、イベントの {{domxref("PromiseRejectionEvent.reason")}} プロパティを検査することでわかります。

### 値

拒否されて、処理されていない JavaScript の {{jsxref("Promise")}} です。

## 例

この例では処理されておらず、 {{domxref("PromiseRejectionEvent.reason", "reason")}} の `code` 項目が "Module not ready" であるオブジェクトであるプロミスを待ち受けし、正しい実行に失敗するタスクを再実行する何もしないコールバックをセットアップします。

{{domxref("event.preventDefault()")}} はプロミスが処理されたことを示すために呼ばれます。

```js
window.onunhandledrejection = (event) => {
  if (event.reason?.code === "Module not ready") {
    requestIdleCallback((deadline) => {
      loadModule(event.reason.moduleName)
        .then(performStartup);
    });
    event.preventDefault();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SectionOnPage("/ja/docs/Web/JavaScript/Guide/Using_promises", "プロミスの拒否イベント")}}
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}
