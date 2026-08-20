---
title: "HTMLTableCellElement: vAlign プロパティ"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
l10n:
  sourceCommit: 9a6462fba2d1527b1d9e550cda954eafdccb5d58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`vAlign`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、{{htmlelement("th")}} または {{htmlelement("td")}} の表のセル内でテキストを垂直方向にどのように配置するかを示す文字列です。

> [!NOTE]
> このプロパティは非推奨です。セルのテキストを縦方向の位置に配置するには、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 値

指定できる値は、`"top"`、`"middle"`、`"bottom"`、`"baseline"` です。

- `top`
  - : テキストをセルの上端に配置します。代わりに `vertical-align: top` を使用してください。
- `center`
  - : テキストをセルの垂直方向の中央に配置します。`middle` の別名です。代わりに `vertical-align: middle` を使用してください。
- `middle`
  - : テキストをセルの垂直方向の中央に配置します。代わりに `vertical-align: middle` を使用してください。
- `bottom`
  - : テキストをセルの下端に配置します。代わりに `vertical-align: bottom` を使用してください。
- `baseline`
  - : `top` と同様ですが、文字のどの部分もセルの外にはみ出さないよう、テキストのベースラインをできるだけ上に配置します。

## 例

代わりに優先度の高い CSS の {{cssxref("vertical-align")}} を使用してください。その例は、[表のセル内の垂直配置](/ja/docs/Web/CSS/Reference/Properties/vertical-align#表のセル内での垂直方向の配置)で示されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("vertical-align")}}
- [学習: 表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)
