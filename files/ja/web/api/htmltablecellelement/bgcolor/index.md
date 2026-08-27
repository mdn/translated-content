---
title: "HTMLTableCellElement: bgColor プロパティ"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: 21fddb9643fae34dce16aec8eb5dd86cc29e0b7c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLTableCellElement.bgColor`** property is used to set the background color of a cell or get the value of the obsolete [`bgColor`](/ja/docs/Web/HTML/Reference/Elements/td#bgcolor) attribute, if present.

> [!NOTE]
> このプロパティは非推奨となっており、背景色の設定には CSS を使用すべきです。代わりに {{cssxref("background-color")}} プロパティを使用してください。

## 値

以下の値型のどちらかを使用できます。

- 名前付き色、たとえば `red` や `blue`
- 16 進コード、たとえば, `#0000dd` や `#00d`

> [!NOTE]
> ここで受け入れられる値は、CSS の色値の一部に限定されています。{{cssxref("named-color")}} および 3 桁または 6 桁の {{cssxref("hex-color")}}（アルファチャンネルなし）のみが使用可能です。CSS ではすべての HTML 色値が有効ですが、その逆は当てはまりません。

## 例

代わりに CSS の `background-color` を使用してください。[HTML の表要素で `background-color` を使用する例](/ja/docs/Web/CSS/Reference/Properties/background-color#表への色付け) は、{{cssxref("background-color")}} ページにあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTableRowElement.bgColor")}}
