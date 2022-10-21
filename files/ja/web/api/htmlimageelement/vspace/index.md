---
title: HTMLImageElement.vspace
slug: Web/API/HTMLImageElement/vspace
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`vspace`** は {{domxref("HTMLImageElement")}} インターフェイスの廃止されたプロパティで、ページをレイアウトする際に {{HTMLElement("img")}} 要素の上下に空ける空間のピクセル数を指定します。

## 値

画像の上下に適用される垂直方向のマージンの高さをピクセル単位で指定する整数値。

## 使用上の注意

`vspace` に指定された値は {{cssxref("margin-top")}} と {{cssxref("margin-bottom")}} プロパティに対応付けられ、それらのマージンの高さをピクセル単位で指定します。

> **警告:** このプロパティは廃止されています。代わりに、 CSS の {{cssxref("margin")}} プロパティとその個別指定形を使用して、`<img>` の周囲にマージンを設定してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
