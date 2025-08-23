---
title: アットルール
slug: Web/CSS/CSS_syntax/At-rule
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**アットルール**は [CSS の文](/ja/docs/Web/CSS/CSS_syntax/Syntax#css_statements)のうち、CSS の動作を規定するものです。アットルールはアットマーク、`@` (U+0040 COMMERCIAL AT) で始まり、識別子が続きます。次のセミコロン、 `;` (U+003B SEMICOLON) もしくは次の [CSS ブロック](/ja/docs/Web/CSS/CSS_syntax/Syntax#css_の宣言ブロック)のどちらかが現れるまでの部分からなります。

アットルールは、スタイルルールや他のアットルールをグループ化して構造化したり、選択したコンテンツに直接関連付けられていないスタイル情報を宣言したり、インポートや名前空間キーワードの割り当てなどの構文構造を管理したりするために使用されます。

## 構文

アットルールは、 [CSS 構文](/ja/docs/Web/CSS/CSS_syntax)モジュールで定義されており、それぞれのモジュールで異なるアットルールが定義されています。アットルールは、通常、特定のルールとその目的に応じて、 2 つの形式のどちらかで記述されます。文アットルールとブロックアットルールがあり、後者には中に修飾ルール、アットルール、宣言を含むことができます。

### 文アットルール

```css
/* 一般的な構造 */
@identifier (RULE);

/* 例: ブラウザーに UTF-8 文字セットを使用することを知らせる */
@charset "utf-8";
```

文アットルールはセミコロンで終わります。いくつかの文アットルールがあり、それぞれ識別子で指定され、構文も異なります。

- {{cssxref("@charset")}}
  - : スタイルシートで使用される代替文字セットを決定するアルゴリズム（アットルールの構文形式を有しますが、定義ではありません）（[CSS 構文](/ja/docs/Web/CSS/CSS_syntax)）。
- {{cssxref("@import")}}
  - : 外部スタイルシートを含めるよう CSS エンジンに指示します（[CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)）。
- {{cssxref("@layer")}}
  - : 複数のカスケードレイヤー（[CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)）の場合の優先順位を定義します。レイヤーのスタイルを定義するためのブロックアットルールとしても使用されます。
- {{cssxref("@namespace")}}
  - : スタイルシートまたはセレクターが、名前空間およびそれ以外のセレクター要素が一致する場合にのみ一致する名前空間の既定の名前空間、または名前空間の接頭辞を定義します（[CSS 名前空間](/ja/docs/Web/CSS/CSS_namespaces)）。

### ブロックアットルール

```css
@identifier (RULE) {
}
```

ブロックアットルールは、入れ子になったルール、他のアットルール、プロパティまたは記述子の宣言を含む `{}` ブロックで終わります。

- {{cssxref("@counter-style")}}
  - : 独自のカウンタースタイルを定義し、定義済みのリストスタイルを拡張します ([CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : コンテナーが [`<container-condition>`](/ja/docs/Web/CSS/@container#container-condition) を満たす場合にそのコンテンツを適用する条件付きグループルール（[CSS コンテナー](/ja/docs/Web/CSS/CSS_containment)）。
- {{cssxref("@font-face")}}
  - : ローカルおよび外部フォントリソースの場所、および、宣言された {{cssxref("font-family")}} とともにそれらのリソースが使用される場合のスタイル特性を定義します（[CSS フォント](/ja/docs/Web/CSS/CSS_fonts)）。
- {{cssxref("@font-feature-values")}} （および `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset`, `@character-variant`）
  - : フォントファミリーごとにフォントの表示を制御します。 OpenType の {{cssxref("font-variant-alternates")}} のインデックスに、フォント固有の代替フォントまたは独自の名前を定義します（[CSS フォント](/ja/docs/Web/CSS/CSS_fonts)）。
- {{cssxref("@keyframes")}} (and the `@-webkit-keyframes` alias)
  - : アニメーションシーケンスの中間段階（またはキーフレーム）の CSS スタイルを記述して、名前付きアニメーションを定義します（[CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)）。
- {{cssxref("@layer")}}
  - : そのレイヤーの CSS ルールを含む、名前付きのカスケードレイヤーを作成します（[CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)）。複数のカスケードレイヤーの場合の優先順位を定義する[文アットルール](#文アットルール)としても使用されます。
- {{cssxref("@media")}}
  - : メディアクエリーを使用して定義された条件を満たす端末にコンテンツを適用する条件付きグループルール（[CSS 条件付きルール](/ja/docs/Web/CSS/CSS_conditional_rules)）。
- {{cssxref("@page")}}
  - : ページの寸法、方向、マージンなど、表示するページに関するものを指定します（[CSS ページメディア](/ja/docs/Web/CSS/CSS_paged_media)）。
- {{cssxref("@position-try")}}
  - : アンカー位置指定要素の代替位置指定および配置オプションを定義するために使用できる、独自の位置指定オプションを定義します（[CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning)）。
- {{cssxref("@property")}}
  - : [CSS カスタムプロパティ](/ja/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)を定義し、プロパティの型のチェックと制約、既定値の設定、およびカスタムプロパティが値を継承できるかどうかを定義します（[カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/CSS_cascading_variables)）。
- {{cssxref("@scope")}}
  - : 選択した要素に適用する範囲と、その範囲内の要素に適用するスタイルを定義します（[CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)）。
- {{cssxref("@starting-style")}}
  - : 要素が最初のスタイル更新を受けたとき（たとえば、`display: none` からトランジションする場合など）に、要素がトランジションする開始プロパティの値を定義します（[CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)）。
- {{cssxref("@supports")}}
  - : 条件付きグループルールは、指定された条件の CSS 機能に対応しているブラウザーで、そのコンテンツを適用します（[CSS 条件付きルール](/ja/docs/Web/CSS/CSS_conditional_rules)）。
- {{cssxref("@view-transition")}}
  - : 現在の文書を[ビュートランジション](/ja/docs/Web/API/View_Transition_API)に選択し、文書間のナビゲーショントランジションの場合は宛先文書も選択します。

## 索引

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@position-try")}}
- {{cssxref("@property")}}
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}
- {{cssxref("@view-transition")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS アットルール関数](/ja/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [入れ子の CSS アットルール](/ja/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS 文](/ja/docs/Web/CSS/CSS_syntax/Syntax#css_statements)
- [CSSRule](/ja/docs/Web/API/CSSRule) インターフェイス
- [CSS 条件付きルール](/ja/docs/Web/CSS/CSS_conditional_rules)モジュール
- [CSS 構文](/ja/docs/Web/CSS/CSS_syntax/Syntax)
- [詳細度](/ja/docs/Web/CSS/CSS_cascade/Specificity)
- [継承](/ja/docs/Web/CSS/CSS_cascade/Inheritance)
