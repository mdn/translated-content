---
title: ブロック、絶対配置、表レイアウトのブロック配置
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
tags:
  - ブロック
  - CSS
  - ガイド
  - 絶対配置
  - ボックス配置
  - 表
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
---
[ボックス配置仕様書](/ja/docs/Web/CSS/CSS_Box_Alignment)は、様々なレイアウト方式でどのように配置が動作するかを詳説しています。このページでは、ボックス配置は浮動、位置指定、表要素を含むボックスレイアウトのレイアウトでどのように動作するかを明らかにします。このページはブロックレイアウトとボックス配置に固有のことを詳説するため、様々なレイアウト方式に共通のボックス配置の共通機能について説明している、中心となる[ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)ページを併せて読んでください。

> **Note:** 執筆時点 (2018 年 5 月) では、ブロックレイアウトのボックス配置プロパティへの対応は実際にはありません。この文書では完全性を保つために、仕様がこれらのプロパティをどのように実装することを期待しているかを詳細に説明していますが、仕様やブラウザーの実装が発展するにつれて変更される可能性があります。

## align-content と justify-content

{{cssxref("justify-content")}} プロパティは、ブロックコンテナーや表のセルには適用されません。

{{cssxref("align-content")}} プロパティは、ブロック軸に適用され、ボックスの内容物をそのコンテナー内で整列させるためのものです。`space-between`、`space-around`、`space-evenly` などの内容物配分方法が要求されている場合は、内容物が 1 つの[配置対象物](/ja/docs/Glossary/Alignment_Subject)として扱われるため、代替配置が使用されます。

## justify-self

{{cssxref("justify-self")}} プロパティは、インライン軸上で包含ブロックの内部にアイテムを配置するために使用されます。

このプロパティは浮動要素や表のセルには適用されません。

## align-self

{{cssxref("align-self")}} プロパティは、ブロックレベルボックスには (浮動要素を含め) 適用されません。ブロック軸に複数のアイテムがあるからです。表のセルにも適用されません。

### 絶対配置要素

配置コンテナーは、上、左、下、右のオフセット値を考慮して位置指定されたブロックです。normal キーワードは `stretch` に解決されますが、その位置指定アイテムが置換要素である場合は `start` に解決されます。

## 現在のレイアウト方法での整列

現在、ブラウザーはブロックレイアウトでのボックス配置に対応していないため、整列には既存の配置方法のいずれかを使用するか、コンテナー内の 1 つのアイテムでもフレックスボックスで指定された配置プロパティを使用するためにフレックスアイテムにするかのいずれかを選択できます。

フレックスボックスが導入される前のブロックの水平方向の整列は、ブロックに auto のマージンを設定する方法が一般的でした。{{cssxref("margin")}} を `auto` に設定すると、その次元で利用可能なすべての空間を吸収するため、左右のマージンを自動に設定すると、ブロックを中央に配置することができます。

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

表レイアウトでは、{{cssxref("vertical-align")}} プロパティを使用して、セルの内容をそのセル内で配置させることができます。

多くの利用場面では、ブロックコンテナーをフレックスアイテムに変えることで、求めていた配置機能が得られます。以下の例では、アイテムが 1 つだけ入っているコンテナーを、配置プロパティを使用できるようにするためにフレックスコンテナーに変えています。

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## リファレンス

### CSS プロパティ

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### 用語集の項目

- [配置対象物](/ja/docs/Glossary/Alignment_Subject)
- [配置コンテナー](/ja/docs/Glossary/Alignment_Container)
- [代替配置](/ja/docs/Glossary/Fallback_Alignment)

{{CSSRef}}
