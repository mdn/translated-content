---
title: "HTMLImageElement: hspace プロパティ"
short-title: hspace
slug: Web/API/HTMLImageElement/hspace
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`hspace`** は {{domxref("HTMLImageElement")}} インターフェイスの*廃止された*プロパティで、ページをレイアウトする際に {{HTMLElement("img")}} 要素の左右に何ピクセル分の空きを残すかを指定します。

このプロパティは、{{Glossary("HTML")}} の [`hspace`](/ja/docs/Web/HTML/Element/img#hspace) 属性を反映します。

## 値

画像の左側と右側に適用する水平方向のマージンの幅をピクセル単位で指定する整数値です。

## 使用上の注意

`hspace` に指定された値は {{cssxref("margin-left")}} および {{cssxref("margin-right")}} プロパティにマッピングされて、それらのマージンの幅をピクセル単位で指定します。

> [!WARNING]
> このプロパティは廃止されました。代わりに、CSS の {{cssxref("margin")}} プロパティとその個別指定プロパティを使用して、`<img>` の周囲に余白を設定してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
