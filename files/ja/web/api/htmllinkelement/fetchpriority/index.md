---
title: "HTMLLinkElement: fetchPriority プロパティ"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

**`fetchPriority`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、特定のリソースの取得を同じ種類の他のリソースと比較してどのように優先するか、ブラウザーに示すヒントを表します。
これは `<link>` 要素の [`fetchpriority`](/ja/docs/Web/HTML/Reference/Elements/link#fetchpriority) コンテンツ属性を反映します。

## 値

文字列です。許可された値については、HTML の [`fetchpriority`](/ja/docs/Web/HTML/Reference/Attributes/fetchpriority) 属性を参照してください。

## 例

```js
const preloadLink = document.createElement("link");
preloadLink.href = "my-image.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} ヘッダー
- [Fetch Priority API を使用したリソース読み込みの最適化](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority)<sup>(英語)</sup> — この API が Chrome の優先度にどのように影響するかについて
