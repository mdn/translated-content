---
title: "HTMLImageElement: loading プロパティ"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`loading`** プロパティは、現在のウィンドウの{{Glossary("visual viewport", "視覚ビューポート")}}の外にある画像の読み込みをどのように処理するかのヒントをブラウザーに提供するものです。これは、最初のページ読み込み時にすぐに画像を読み込むのではなく、必要と予想されるまで画像の読み込みを延期することで、文書のコンテンツの読み込みを最適化するのに役立ちます。これは `<img>` 要素の [`loading`](/ja/docs/Web/HTML/Reference/Elements/img#loading) コンテンツ属性に対応しています。

## 値

文字列で、値は `eager` または `lazy` のいずれかです。それぞれの意味については、HTML [`<img>`](/ja/docs/Web/HTML/Reference/Elements/img#loading) リファレンスを参照してください。

## 例

### 基本的な使い方

以下に示す `addImageToList()` 関数は、実際に必要になるまでネットワークから画像を読み込まないように遅延読み込みを使用して、写真のサムネイルをアイテムのリストに追加するものです。

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  const newItem = document.createElement("div");
  newItem.className = "photo-item";

  const newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("img")}} 要素
- [ウェブパフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance)（MDN 学習領域）
- [遅延読み込み](/ja/docs/Web/Performance/Guides/Lazy_loading)（MDN ウェブパフォーマンスガイド）
