---
title: "HTMLScriptElement: src プロパティ"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: 2231cbd5847dff1ca21f8f7fb59d72cae615f088
---

{{APIRef("HTML DOM")}}

**`src`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、外部スクリプトの URL を表す文字列です。文書内に直接スクリプトを埋め込む代わりに使用することができます。

これは {{HTMLElement("script")}} 要素の `src` 属性を反映したものです。

## 値

文字列です。

## 例

このコードは URL が `https://example.com` であるウェブサイト上で動作していると想定します。

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

```js
const script_with_src = document.getElementById("script-with-src");
console.log(script_with_src.src); // 出力: "https://example.com/main.js"
const script_without_src = document.getElementById("script-without-src");
console.log(script_without_src.src); // 出力: ""
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
