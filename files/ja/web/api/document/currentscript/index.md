---
title: "Document: currentScript プロパティ"
short-title: currentScript
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: e633202a8cda3c340a0510c27f3902f743275140
---

{{APIRef("DOM")}}

**`Document.currentScript`** プロパティは、現在処理中で、 [JavaScript モジュールではない](https://github.com/whatwg/html/issues/997)スクリプトの {{HTMLElement("script")}} 要素を返します。（モジュールの場合は代わりに [`import.meta`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta) を使用してください。）

重要なことですが、スクリプト内のコードがコールバックまたはイベントハンドラーとして呼び出されている場合は、 {{HTMLElement("script")}} 要素を参照しないことに注意してください。初期化時に処理されている要素のみを参照します。

## 値

{{domxref("HTMLScriptElement")}} または null です。

## 例

次の例では、スクリプトが非同期で実行されているかどうかをチェックしています。

```js
if (document.currentScript.async) {
  console.log("非同期で実行中");
} else {
  console.log("同期で実行中");
}
```

[実際の表示を確認](https://mdn.dev/archives/media/samples/html/currentScript.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`import.meta`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta)
- {{HTMLElement("script")}}
- {{DOMxRef("document.afterscriptexecute_event")}}
- {{DOMxRef("document.beforescriptexecute_event")}}
