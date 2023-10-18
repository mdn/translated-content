---
title: アットルール
slug: Web/CSS/At-rule
---

{{CSSRef}}

**アットルール**は [CSS の文](/ja/docs/Web/CSS/Syntax#css_statements)のうち、CSS の動作を既定するものです。アットルールはアットマーク、'`@`' (`U+0040 COMMERCIAL AT`) で始まり、それに続く識別子から、次のセミコロン、 '`;`' (`U+003B SEMICOLON`) もしくは次の [CSS ブロック](/ja/docs/Web/CSS/Syntax#css_declarations_blocks)のどちらかが現れるまでの部分からなります。

## 構文

### 通常

```css
/* 一般的な構造 */
@identifier (RULE);

/* 例: ブラウザーに UTF-8 文字セットを使用することを知らせる */
@charset "utf-8";
```

アットルールは何種類かあり、識別子で区別され、それぞれに異なる構文が使用されます。

- {{cssxref("@charset")}} — スタイルシートで使用される文字セットを定義します。
- {{cssxref("@import")}} — 外部のスタイルシートを読み込むよう CSS エンジンに指示します。
- {{cssxref("@namespace")}} — CSS エンジンに、内容のすべてに XML 名前空間の接頭辞がついていると見なすよう指示します。

### 入れ子

```css
@identifier (RULE) {
}
```

入れ子になった文のサブセットになります。スタイルシートの文としてだけではなく、条件付きグループルールの内部で使用されます。

- {{cssxref("@media")}} — *メディアクエリ*の条件を満たす端末で読み込まれた場合にこれの中身が適用される、条件付きグループルールです。
- {{cssxref("@supports")}} — ブラウザーが指定の条件を満たす場合にこれの中身が適用される、条件付きグループルールです。
- {{cssxref("@document")}} {{deprecated_inline}} — このスタイルシートが適用される文書が、与えられた条件を満たす場合に、これの中身が適用される条件付きグループルールです。 _(CSS Level 4 仕様に先送り)_
- {{cssxref("@page")}} — 文書印刷の際に適用されるレイアウト変更に関する指定を記述します。
- {{cssxref("@font-face")}} — ダウンロードすべき外部フォントに関する指定を記述します。
- {{cssxref("@keyframes")}} — CSS アニメーションシーケンスの中間段階に関する指定を記述します。
- {{cssxref("@counter-style")}} — 定義済みのスタイルにはない、独自のカウンタースタイルを定義します。_(勧告候補段階ですが、現時点で Gecko しか実装していません)_
- {{cssxref("@font-feature-values")}} (および `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset`, `@character-variant`) — OpenType の各機能を有効化するために、 {{cssxref("font-variant-alternates")}} の一般名を定義します。_(勧告候補段階ですが、現時点で Gecko しか実装していません)_
- {{cssxref("@property")}} {{experimental_inline}} — カスタムプロパティと変数に関して指定します。 _(現在は草稿段階)_
- {{cssxref("@color-profile")}} {{experimental_inline}} — {{cssxref("color_value/color", "color()")}} 関数で使用するカラープロファイルを定義できます。

## 条件付きグループルール

プロパティの値と同様に、アットルールはそれぞれ異なる構文を持っています。しかし、いくつかのアットルールは **条件付きグループルール**という特別なカテゴリーに分類されます。これらの文は構文が共通しており、どれも*内側の文*—*規則セット*または*内側のアットルール*を入れることができます。さらに言えば、それらはすべて共通の意味合いがあります。 — すべては常に**真**か**偽**かで判定される何らかの条件と結びついています。条件が**真**であれば、条件付きグループルール内の文全部が適用されます。

条件付きグループルールは [CSS Conditionals Level 3](https://drafts.csswg.org/css-conditional-3/) で定義されており、以下の規則があります。

- {{cssxref("@media")}}
- {{cssxref("@supports")}}
- {{cssxref("@document")}} _(CSS Level 4 仕様に先送り)_

条件付きグループは、入れ子状の文を持ち、いくつでも入れ子にすることができます。

## 索引

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}} {{experimental_inline}}
- {{cssxref("@counter-style")}}
- {{cssxref("@document")}} {{deprecated_inline}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@property")}} {{experimental_inline}}
- {{cssxref("@supports")}}

## 仕様書

{{Specifications}}

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
