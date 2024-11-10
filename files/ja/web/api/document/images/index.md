---
title: "Document: images プロパティ"
short-title: images
slug: Web/API/Document/images
l10n:
  sourceCommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{APIRef("DOM")}}

**`images`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、現在の HTML 文書内の[画像](/ja/docs/Web/API/HTMLImageElement)の[集合](/ja/docs/Web/API/HTMLCollection)を返します。

## 値

現在の文書内に掲載されているすべての画像の生きたリストを提供する {{domxref("HTMLCollection")}} 。
集合の各項目は、単一の画像要素を表す {{domxref("HTMLImageElement")}} です。

## 使用メモ

返された集合において、集合内のアイテムにアクセスするには、JavaScript の配列記法か {{domxref("HTMLCollection.item", "item()")}} メソッドを使用することができます。
以下はのものは同等です。

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## 例

この例では、画像のリストを見て、`"banner.gif"` という名前の画像を探します。

```js
for (const image of document.images) {
  if (image.src === "banner.gif") {
    console.log("バナーを見つけました");
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
