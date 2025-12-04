---
title: "Window: credentialless プロパティ"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{APIRef}}{{SeeCompatTable}}

**`window.credentialless`** は読み取り専用プロパティで、現在の文書が信頼性のない {{htmlelement("iframe")}} 内に読み込まれたかどうか、つまり新しい、一時的なコンテキストで読み込まれたかを示す論理値を返します。

このコンテキストは、そのオリジンに関連するネットワーク、クッキー、ストレージデータにアクセスすることはありません。それは最上位の文書の寿命に依存する新しいコンテキストを使用します。返ると、{{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 埋め込みルールが解除され、COEP を設定した文書はそうでないサードパーティ文書を埋め込むことができます。

より詳しい説明は、[無信頼の iframe](/ja/docs/Web/HTTP/Guides/IFrame_credentialless) を参照してください。

## 値

論理値です。`true` の値は文書が無信頼の `<iframe>` 内に読み込まれたことを示し、`false` は読み込まれなかったことを示します。

## 例

次のようにして、無信頼の `<iframe>` を指定することができます。

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

対応しているブラウザー内の `<iframe>` に読み込まれた文書が以下の行を実行した場合、`true` を返します。

```js
console.log(window.credentialless);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
