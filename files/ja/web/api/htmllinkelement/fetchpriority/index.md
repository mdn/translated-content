---
title: "HTMLLinkElement: fetchPriority プロパティ"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

**`fetchPriority`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、ブラウザーが同じ種類の他のリソースに対して、与えられたリソースの先読みをどのように優先させるべきかを示すヒントを表します。

## 値

優先度のヒントを表す文字列です。使用可能な値は以下のとおりです。

- `high`
  - : 他の同じ種類のリソースと比較して、高い優先度で先読みを行います。
- `low`
  - : 同じ種類の他のリソースに対して、低い優先度で画像を取得します。
- `auto`
  - : 既定のモードで、フェッチの優先順位を指定しません。ブラウザーがユーザーにとって最適なものを決定します。

`fetchPriority` プロパティは、先読みの優先順位を高くしたり低くしたりするための信号を送ることができます。これは {{HTMLElement("link")}} 要素に適用すると、読み込み処理の早い段階で、ユーザーエクスペリエンスにとって重要な先読みを知らせることができ、便利です。

リソースの読み込みに対するヒントの効果はブラウザーによって異なるため、必ず複数のブラウザーエンジンでテストしてください。

ブラウザーがリソースを自動的に読み込むための最適な方法を推測できないような例外的なケースには、控えめに使用するようにしてください。過剰に使用すると、パフォーマンスが低下することがあります。

## 例

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myimage.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
