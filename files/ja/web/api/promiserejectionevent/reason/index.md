---
title: PromiseRejectionEvent.reason
slug: Web/API/PromiseRejectionEvent/reason
---

{{APIRef("HTML DOM")}}

{{domxref("PromiseRejectionEvent")}}の **`reason`** 読み取り専用プロパティは、{{jsxref("Promise.reject()")}} に渡される理由を提供する任意の JavaScript 値、または {{jsxref("Object")}} です。理論的には promise が拒否された理由についての情報を提供します。

## 構文

```
reason = PromiseRejectionEvent.reason
```

### 値

なぜ Promise が拒否されたかを理解するのに使う情報を提供する値またはオブジェクト。これはテキスト、リンク、その他ほしいものをつけた、エラーコードからオブジェクトなんでもありえます。

## 例

```js
window.onunhandledrejection = function(e) {
  console.log(e.reason);
}
```

## 仕様

| 仕様                                                                                                                                                 | ステータス                           | コメント   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-promiserejectionevent-reason', 'PromiseRejectionEvent.reason')}} | {{ Spec2('HTML WHATWG') }} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.PromiseRejectionEvent.reason")}}

## 関連情報

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{event("rejectionhandled")}}
- {{event("unhandledrejection")}}
