---
title: "HTMLIFrameElement: sandbox プロパティ"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: 9a9ff6734f2ea1d27b048045a62a38acd4670baf
---

{{APIRef("HTML DOM")}}

**`sandbox`** は {{domxref("HTMLIFrameElement")}} インターフェイスの読み取り専用プロパティで、内部のコンテンツの動作に関する追加の制限を示す {{domxref("DOMTokenList")}} を返します。

これは {{HTMLElement("iframe")}} 要素の `sandbox` 属性を反映します。

## 値

{{domxref("DOMTokenList")}} です。各アイテムは、{{HTMLElement("iframe")}} 要素の `sandbox` 属性にリストされているトークンのいずれかでなければなりません。

## 例

```html
<iframe
  id="el"
  title="example"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // 出力: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // 出力: []
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
