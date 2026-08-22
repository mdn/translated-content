---
title: "HTMLTableCellElement: align プロパティ"
short-title: align
slug: Web/API/HTMLTableCellElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`align`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、{{htmlelement("th")}} または {{htmlelement("td")}} による表のセル内で、テキストを水平方向にに配置する方法を示す文字列です。

> [!NOTE]
> このプロパティは非推奨となっており、セル内のテキストを水平方向に揃えるには CSS を使用すべきです。優先度が高い CSS の {{cssxref("text-align")}} プロパティを使用して、セル内のテキストを水平方向に揃えてください。

## 値

取り得る値は次のとおりです。

- `left`
  - : テキストを左揃えにします。代わりに `text-align: left` を使用してください。
- `right`
  - : テキストを右揃えにします。代わりに `text-align: right` を使用してください。
- `center`
  - : テキストを中央揃えにします。代わりに `text-align: center` を使用してください。

## 例

代わりに CSS の `text-align` を使用してください。[例](/ja/docs/Web/CSS/Reference/Properties/text-align#table_alignment)は {{cssxref("text-align")}} ページにあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-align")}}
- [学習: 表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)
