---
title: CSS 表
slug: Web/CSS/Guides/Table
original_slug: Web/CSS/CSS_table
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

**CSS 表** (CSS table) モジュールは、表データをレイアウトする方法を定義するのに役立ちます。

この CSS モジュールは、表形式のデータを表示するために使用されている HTML の {{htmlelement("table")}} 要素に適用できるスタイルを定義します。既定では、表は、連続する行と列にセルが並んだ 2 次元グリッドとして表示されます。このレイアウトは表構造から生成され、セルのコンテンツに基づいたサイズになります。このモジュールでは、表の {{htmlelement("caption")}} がある場合は、その位置を定義することもできます。

このモジュールで導入されるプロパティは、 `<table>` 要素に限定されません。これらは、あらゆる要素に表関連の CSS {{cssxref("display")}} 値を適用できます。

## リファレンス

### プロパティ

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## ガイド

- [学習: 表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : HTML 表の外観を改善するためのガイドで、表のスタイル設定手法にを扱います。

- [学習: HTML の表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : HTML の表の概要で、行とセル、見出し、および複数の列と行にまたがるセルを作成するための HTML を含みます。

- [学習: HTML 票のアクセシビリティ](/ja/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : キャプションや表の行を表のヘッダー、本体、フッターのセクションにグループ化する機能など、高度な HTML 表の機能を見ていきます。また、視覚障碍のあるユーザーのための表のアクセシビリティについても見ていきます。

## 関連概念

- {{cssxref("display")}} プロパティ
- {{cssxref("vertical-align")}} プロパティ
- {{cssxref("text-align")}} プロパティ

- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}} キーワード

- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
  - {{cssxref("border")}} 一括指定
  - {{cssxref("border-width")}}
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

- HTML 表関連要素:
  - {{htmlelement("table")}}
  - {{htmlelement("caption")}}
  - {{htmlelement("colgroup")}}
  - {{htmlelement("col")}}
  - {{htmlelement("thead")}}
  - {{htmlelement("tbody")}}
  - {{htmlelement("tfoot")}}
  - {{htmlelement("tr")}}
  - {{htmlelement("th")}}
  - {{htmlelement("td")}}

## 仕様書

{{Specifications}}

> [!NOTE]
> CSS 2.2 仕様書では、表の書式設定に関する詳細な仕様を含め、ウェブのスタイル設定に関する安定した標準を定義しています。 [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) 仕様書は、表のレイアウトおよびレンダリングに関する高度な機能により、これらの機能を拡張することを目的としています。ただし、表モジュール仕様書は現在開発中であり、まだ実装の準備は整っていません。

## 関連情報

- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュール
