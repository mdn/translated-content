---
title: margin
slug: Web/CSS/Reference/Properties/margin
original_slug: Web/CSS/margin
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

**`margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の全四辺の[マージン領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#マージン領域)を設定します。

{{InteractiveExample("CSS デモ: margin")}}

```css interactive-example-choice
margin: 1em;
```

```css interactive-example-choice
margin: 5% 0;
```

```css interactive-example-choice
margin: 10px 50px 20px;
```

```css interactive-example-choice
margin: 10px 50px 20px 0;
```

```css interactive-example-choice
margin: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## 構文

```css
/* 四辺すべてに適用 */
margin: 1em;
margin: -3px;

/* 上下 | 左右 */
margin: 5% auto;

/* 上 | 左右 | 下 */
margin: 1em auto 2em;

/* 上 | 右 | 下 | 左 */
margin: 2px 1em 0 auto;

/* anchor-size() の値 */
margin: 5% anchor-size(width);
margin: calc(anchor-size(width) / 4) 1em 0
  anchor-size(--myAnchor self-inline, 50px);

/* キーワード値 */
margin: auto;

/* グローバル値 */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

`margin` プロパティは 1 ～ 4 つの値を使って指定することができます。それぞれの値は {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、 または `auto` キーワードです。負の数を指定すると、要素を既定よりも隣と近づけて描画します。

- 値が **1 つ**指定された場合、**全四辺**に同じマージンが適用される。
- 値が **2 つ**指定された場合、1 つ目のマージンは**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目のマージンは**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、マージンはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- {{cssxref("length")}}
  - : マージンの寸法を固定値で表したものです。
    - アンカー位置指定要素の場合、 {{cssxref("anchor-size()")}} 関数は、関連付けられたアンカー要素の幅または高さに対する相対的な {{cssxref("&lt;length&gt;")}} 値に解決されます（[アンカーサイズに基づいて要素のマージンを設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)を参照してください）。

- {{cssxref("percentage")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)のインラインサイズ（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。
- `auto`
  - : ブラウザーが適切なマージンを選択して使用します。例えば、要素を中央揃えするためにこの値を使用することもあります。

## 解説

このプロパティを使用して、要素の全四辺のマージンを設定することができます。マージンは要素の周りに追加の領域を作成します。それに対して、 {{cssxref("padding")}} は要素*内部*に追加の領域を作成します。

top および bottom のマージンは、[置換要素](/ja/docs/Glossary/Replaced_elements)ではないインライン要素（{{HTMLElement("span")}} や {{HTMLElement("code")}} など）には効果がありません。

### 水平方向の中央揃え

`margin: 0 auto;` を設定すると、親要素内で要素を水平方向に中央揃えすることができます。

要素を水平方向に中央揃えにする一般的な方法としては、コンテナー内で `display: flex;` および [`justify-content: center;`](/ja/docs/Web/CSS/Reference/Properties/justify-content) を設定する方法があります。これにより、[フレックスアイテムの子要素が中央揃え](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)になります。

### マージンの相殺

要素の上下のマージンは、相殺されて 2 つのマージンのうち大きい方を取る単一のマージンになることがあります。詳しくは[マージンの相殺の習得](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

#### HTML

```html-nolint live-sample___basic_example
<div class="center">この要素は中央揃えされています。</div>

<div class="outside">この要素はコンテナーの外側に配置されています。</div>
```

#### CSS

```css live-sample___basic_example
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('Basic_example','100%',120) }}

### その他の例

```css
margin: 5%; /* 全辺: 5% のマージン */

margin: 10px; /* 全辺: 10px のマージン */

margin: 1.6em 20px; /* 上と下: 1.6em のマージン */
/* 左と右: 20px のマージン */

margin: 10px 3% -1em; /* 上:     10px のマージン */
/* 左と右: 3% のマージン   */
/* 下:     -1em のマージン */

margin: 10px 3px 30px 5px; /* 上:     10px のマージン */
/* 右:     3px のマージン */
/* 下:     30px のマージン */
/* 左:     5px のマージン */

margin: 2em auto; /* 上と下: 2em のマージン   */
/* ボックスは水平方向に中央 */

margin: auto; /* 上と下: 0 のマージン     */
/* ボックスは水平方向に中央 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}
- 一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}
- [マージンの相殺の習得](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
