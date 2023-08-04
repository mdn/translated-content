---
title: "HTMLImageElement: fetchPriority プロパティ"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{SeeCompatTable}}

**`fetchPriority`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、ブラウザーが他の画像と比較して、画像の取得をどのように優先させるべきかというヒントを表します。

## 値

優先度ヒントを表す文字列です。使用可能な値は以下の通りです。

- `high`
  - : 他の画像と比較して高い優先度で画像を取得します。
- `low`
  - : 他の画像と比較して低い優先度で画像を取得します。
- `auto`
  - : 既定のモード。取得の優先順位がないことを示します。ユーザーにとって最適なものをブラウザーが決定します。

`fetchPriority` プロパティを使用すると、画像の取得の優先順位を高くしたり低くしたりすることができます。これは {{HTMLElement("img")}} 要素に適用すると、読み込み処理の早い段階でユーザの操作にとって「重要」な画像を通知するのに役立ちます。

リソースの読み込みに対するヒントの効果はブラウザーに依存するため、複数のブラウザーエンジンで試すようにしてください。

ブラウザーが画像を自動的に読み込むための最適な方法を推測できないような例外的なケースには、控えめに使用するようにしてください。過剰に使用すると、パフォーマンスが低下する可能性があります。

## 例

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
