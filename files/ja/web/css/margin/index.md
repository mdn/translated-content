---
title: margin
slug: Web/CSS/margin
---

{{CSSRef}}

**`margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の全四辺の[マージン領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#マージン領域)を設定します。

{{EmbedInteractiveExample("pages/css/margin.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}

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

/* グローバル値 */
margin: inherit;
margin: initial;
margin: revert;
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
- {{cssxref("percentage")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/Web/CSS/Containing_block)の*幅*に対するパーセント値で表したものです。
- `auto`
  - : ブラウザーが適切なマージンを選択して使用します。例えば、要素を中央揃えするためにこの値を使用することもあります。

## 解説

このプロパティを使用して、要素の全四辺のマージンを設定することができます。マージンは要素の周りに追加の領域を作成します。それに対して、 {{cssxref("padding")}} は要素*内部*に追加の領域を作成します。

top および bottom のマージンは、 {{HTMLElement("span")}} または {{HTMLElement("code")}} などの[置換要素](/ja/docs/Web/CSS/Replaced_element)ではないインライン要素には効果がありません。

### 水平方向の中央揃え

最近のブラウザーで何かを中央揃えしたい場合は、{{cssxref("display")}}`: flex;` {{cssxref("justify-content")}}`: center;` を使用することができます。

しかし、 IE8-9 のような古いブラウザーはフレックスボックスレイアウトに対応していないため、これは利用できません。親要素内で要素を中央揃えするのであれば、 `margin: 0 auto;` を使用してください。

### マージンの相殺

要素の上下のマージンは、相殺されて 2 つのマージンのうち大きい方を取る単一のマージンになることがあります。詳しくは[マージンの相殺の習得](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Simple_example">単純な例</h3>

#### HTML

```html
<div class="center">This element is centered.</div>

<div class="outside">This element is positioned outside of its container.</div>
```

#### CSS

```css
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

{{ EmbedLiveSample('Simple_example','100%',120) }}

### その他の例

```css
margin: 5%; /* 全辺: 5% のマージン */

margin: 10px; /* 全辺: 10px のマージン */

margin: 1.6em 20px;
/* 上と下: 1.6em のマージン */
/* 左と右: 20px のマージン  */

margin: 10px 3% -1em;
/* 上:     10px のマージン */
/* 左と右: 3% のマージン   */
/* 下:     -1em のマージン  */

margin: 10px 3px 30px 5px;
/* 上:     10px のマージン */
/* 右:     3px のマージン  */
/* 下:     30px のマージン */
/* 左:     5px のマージン  */

margin: 2em auto;
/* 上と下: 2em のマージン   */
/* ボックスは水平方向に中央 */

margin: auto;
/* 上と下: 0 のマージン     */
/* ボックスは水平方向に中央 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- 対応する論理的プロパティ: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} および一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}
