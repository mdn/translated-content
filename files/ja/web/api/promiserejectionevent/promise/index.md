---
title: PromiseRejectionEvent.promise
slug: Web/API/PromiseRejectionEvent/promise
---

{{APIRef("HTML DOM") }}{{domxref("PromiseRejectionEvent")}}インターフェイスの読み取り専用プロパティである **`promise`** は、拒否された JavaScript の {{jsxref("Promise")}} を表します。promise が拒否された理由は、イベントの {{domxref("PromiseRejectionEvent.reason")}} プロパティを検査することでわかります。

## 構文

```
promise = PromiseRejectionEvent.promise
```

### 値

reject(拒否) されて、処理されていない JavaScript の{{jsxref("Promise")}}。

## 例

この例では処理されておらず、{{domxref("PromiseRejectionEvent.reason", "reason")}} の `code` 項目が "Module not ready"であるオブジェクトである Promise をリッスンし、正しい実行に失敗するタスクを再実行する何もしないコールバックをセットアップします。

{{domxref("event.preventDefault()")}} は Promise が処理されたことを示すために呼ばれます。

```js
window.onunhandledrejection = function(event) {
  if (event.reason.code && event.reason.code == "Module not ready") {
    window.requestIdleCallback(function(deadline) {
      loadModule(event.reason.moduleName)
        .then(performStartup);
    });
    event.preventDefault();
  }
}
```

## 仕様

| 仕様                                                                                                                                                     | ステータス                           | コメント   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-promiserejectionevent-promise', 'PromiseRejectionEvent.promise')}} | {{ Spec2('HTML WHATWG') }} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.PromiseRejectionEvent.promise")}}

## ブラウザー実装状況

- {{SectionOnPage("/ja/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{event("rejectionhandled")}}
- {{event("unhandledrejection")}}
