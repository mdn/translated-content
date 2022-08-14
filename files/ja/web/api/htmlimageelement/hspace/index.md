---
title: HTMLImageElement.hspace
slug: Web/API/HTMLImageElement/hspace
page-type: web-api-instance-property
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Horizontal
  - 画像
  - Layout
  - プロパティ
  - リファレンス
  - hspace
  - img
  - left
  - margin
  - right
  - spacing
  - 非推奨
browser-compat: api.HTMLImageElement.hspace
translation_of: Web/API/HTMLImageElement/hspace
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

**`hspace`** は {{domxref("HTMLImageElement")}} インターフェイスの*廃止された*プロパティで、ページをレイアウトする際に {{HTMLElement("img")}} 要素の左右に何ピクセル分の空きを残すかを指定します。

このプロパティは、 {{Glossary("HTML")}} の {{htmlattrxref("hspace", "img")}} 属性を反映します。

## 値

画像の左側と右側に適用する水平方向のマージンの幅をピクセル単位で指定する整数値です。

## 使用上の注意

`hspace` に指定された値は {{cssxref("margin-left")}} および {{cssxref("margin-right")}} プロパティにマッピングされて、それらのマージンの幅をピクセル単位で指定します。

> **Warning:** このプロパティは廃止されました。代わりに、 CSS の {{cssxref("margin")}} プロパティとその個別指定プロパティを使用して、 `<img>` の周囲に余白を設定してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
