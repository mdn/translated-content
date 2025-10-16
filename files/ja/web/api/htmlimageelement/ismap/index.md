---
title: "HTMLImageElement: isMap プロパティ"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`isMap`** プロパティは、論理値で、画像がサーバーサイドイメージマップで使用されることを示します。
これは {{HTMLElement("a")}} 要素内にある画像にのみ使用することができます。

> [!NOTE]
> アクセシビリティの観点から、サーバーサイドイメージマップはマウスを使う必要があるため、一般に使用しない方が良いでしょう。代わりに[クライアントサイドイメージマップ](/ja/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)を使ってください。

## 値

論理値で、画像がサーバーサイドイメージマップに使用される場合は `true` となり、そうでない場合は `false` となります。

## 使用上の注意

サーバーサイトイメージマップの一部としてマークされている画像がクリックされると、ブラウザーは "?x,y" という文字列を組み立てます。 x と y は、マウスでクリックされた位置を画像の左上隅からのオフセットの CSS ピクセル数でで示します。

そして、ブラウザーはその URL をサーバーから取得し、 [`download`](/ja/docs/Web/HTML/Reference/Elements/a#download) 属性の値によって表示またはダウンロードを行います。

サーバーサイドイメージマップとは異なり、クライアントサイドイメージマップは {{HTMLElement("img")}} 要素を対話型コンテンツモードにしません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
