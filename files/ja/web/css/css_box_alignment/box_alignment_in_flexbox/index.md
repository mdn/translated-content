---
title: フレックスボックスでのボックス配置
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
tags:
  - CSS
  - ガイド
  - ボックス配置
  - フレックスボックス
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
---
{{CSSRef}}

[ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)の仕様書では、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このページでは、フレックスボックスのコンテキストにおいてボックス配置がどのように働くかを探ります。このページの目的は、フレックスボックスとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)ページを合わせてお読みください。

## 基本的な例

この例では、3 つのフレックスアイテムが {{cssxref("justify-content")}} を使用して主軸に、 {{cssxref("align-items")}} を使用して交差軸に配置されます。最初のアイテムはグループに対して設定された `align-items` の値を上書きし、 {{cssxref("align-self")}} で `center` に設定しています。

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## 軸と flex-direction

フレックスボックスは文書の書字方向を尊重しますので、英語の場合で {{cssxref("justify-content")}} が `flex-end` に設定されていた場合、アイテムをフレックスコンテナーの末尾に配置します。 {{cssxref("flex-direction")}} が `row` に設定されていた場合、この配置はインライン方向になります。

しかし、フレックスボックスでは `flex-direction` を `column` に設定することで、主軸を変更することができます。この場合、 `justify-content` はアイテムをブロック方向に配置します。したがって、フレックスボックスでは主軸と交差じっくについて次のように考えると最も簡単です。

- 主軸 = `flex-direction` で設定された向き = `justify-content` で配置
- 交差軸 = 主軸と交差 = `align-content`, `align-self`/`align-items` で配置

### 主軸の配置

- {{cssxref("justify-content")}}

### 交差軸の配置

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### フレックスボックスには justify-self はない

主軸では、フレックスボックスはコンテンツをグループとして扱います。アイテムをレイアウトするために必要な空間の大きさが計算され、残りの空間は配分に利用されます。`justify-content` プロパティは、どのように残りの領域を使用するかを制御します。`justify-content: flex-end` に設定すると、余分な領域はアイテムの前に配置され、`justify-content: space-around` に設定すると、その大きさアイテムの両側に配置される、などです。

つまり、常にアイテムのグループ全体が動き回るよう配分されるため、`justify-self` プロパティはフレックスボックスでは意味を持ちません。

交差軸では、フレックスコンテナーのその方向に余白が追加され、単一のアイテムが始点と終点に動く可能性があるため、 `align-self` は意味を持ちます。

## alignment および auto のマージン

`justify-self` プロパティが必要であると考える可能性があるフレックスボックスの特定の利用場面があります。これは、おそらく分割ナビゲーションパターンを作成するために、一連のフレックスアイテムを分割したい場合です。この利用場面では、マージンに `auto` を使用することができます。 `auto` に設定されたマージンは、その方向で利用可能な領域をすべて吸収します。これが auto のマージンでブロックを中央揃えしたときの動作です。左右のマージンを `auto` に設定すると、ブロックの両側が利用可能なスペースをすべて利用しようとするので、ボックスは中央に配置されます。

開始点に配置された一連のフレックスアイテムのうち、1 つのアイテムで {{cssxref("margin")}} を `auto` に設定することで、分割ナビゲーションを作成できます。これは、フレックスボックスと alignment プロパティでうまくいきます。 auto のマージンに使用できる領域がなくなると、アイテムは他のすべてのフレックスアイテムと同じように動作し、空間に収まるように縮小します。

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}

## `gap` プロパティ

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### アイテム間における固定幅の間隔の作成

主軸では、`column-gap` プロパティは兄弟アイテムの間に固定幅の間隔を作成します。

交差軸では、`row-gap` プロパティは、隣接するフレックス行の間隔を作成するので、この効果を得るには `flex-wrap` を `wrap` に設定する必要があります。

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## リファレンス

### CSS プロパティ

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("align-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 用語集の項目

- {{Glossary("Cross axis", "交差軸")}}
- {{Glossary("Main axis", "主軸")}}

## ガイド

- [フレックスボックスでの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)

## 外部リソース

- [Box alignment cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
- [CSS Grid, Flexbox and Box Alignment](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Thoughts on partial implementations of Box Alignment](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
