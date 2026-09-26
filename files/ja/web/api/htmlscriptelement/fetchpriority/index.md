---
title: "HTMLScriptElement: fetchPriority プロパティ"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

**`fetchPriority`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、ブラウザーが外部スクリプトを取得する際に、他の外部スクリプトと相対的にどのように優先させるべきかを示すヒントを表します。
これは `<script>` 要素の [`fetchpriority`](/ja/docs/Web/HTML/Reference/Elements/script#fetchpriority) コンテンツ属性を反映します。

## 値

文字列。許可される値については、HTML の [`fetchpriority`](/ja/docs/Web/HTML/Reference/Attributes/fetchpriority) 属性をご覧ください。

## 例

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // 出力: "high"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLLinkElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} ヘッダー
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority): API が Chrome での優先順位にどのような影響を与えるかについての情報
