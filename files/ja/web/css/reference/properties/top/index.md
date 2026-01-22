---
title: top
slug: Web/CSS/Reference/Properties/top
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`top`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/Reference/Properties/position)の垂直位置を設定します。この{{glossary("inset properties", "インセットプロパティ")}}は、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: top")}}

```css interactive-example-choice
top: 0;
```

```css interactive-example-choice
top: 4em;
```

```css interactive-example-choice
top: 10%;
```

```css interactive-example-choice
top: 20px;
```

```html-nolint interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">これは絶対位置指定されています。</div>
    <p>
      まるで地球の表面から水が引き始めたかのように、通りは泥だらけで、ホルボーン通りを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

`top` の効果は、要素がどの様に配置されているか（つまり、 {{cssxref("position")}} プロパティの値）によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、`top` プロパティは、要素の上端の外側のマージンと、その包含ブロックの上端の内側の境界線との間の距離を指定します。または、値内で `anchor()` 関数が使用されている場合、[位置指定要素](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)の場合、値内で {{cssxref("anchor()")}} 関数が使用されているときは、指定された [`<anchor-side>`](/ja/docs/Web/CSS/Reference/Values/anchor#anchor-side) の辺を基準とします。`top` プロパティは、`top`、`bottom`、`start`、`end`、`self-start`、`self-end`、`center`、および `<percentage>` 値と[互換性があります](/ja/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values)。
- `position` が `relative` に設定されている場合、 `top` プロパティは要素の上辺が通常位置から下方へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `top` プロパティは粘着制約矩形の計算に使用されます。
- `position` が `static` に設定されている場合、 `top` プロパティは*効果がありません*。

`top` と {{cssxref("bottom")}} の両方が指定されている場合は、 3 つの異なる場合があります。

- `position` が `absolute` または `fixed` に設定されており、 {{cssxref("height")}} が指定されていない（`auto` または `100%` である）場合、 `top` および `bottom` の両方が尊重されます。
- `position` が `relative` に設定されているか、 `height` が指定されている場合、 `top` プロパティが優先され、 `bottom` プロパティは無視されます。
- `position` が `sticky` に設定されている場合、 `top` と `bottom` の両方の値が考慮されます。つまり、粘着位置指定要素は、要素の位置ボックスがそのブロック内に収まっている限り、これら 2 つのプロパティの値に基づいて、そのブロック内で上下に移動できる可能性があります。

## 構文

```css
/* <length> 値 */
top: 3px;
top: 2.4em;
top: anchor(bottom);
top: anchor-size(--my-anchor self-block, 10%);

/* 包含ブロックの高さに対する <percentage> */
top: 10%;

/* キーワード値 */
top: auto;

/* グローバル値 */
top: inherit;
top: initial;
top: revert;
top: revert-layer;
top: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。
    - 絶対位置指定要素の場合は、包含ブロックの上辺までのを表します。
    - アンカー位置指定要素の場合は、{{cssxref("anchor()")}} 関数は、関連付けられたアンカー要素の上端または下端の位置を基準とした相対的な {{cssxref("&lt;length&gt;")}} 値に解決されます（詳細は[インセットプロパティで `anchor()` 関数値を使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#インセットプロパティで_anchor_関数値を使用)を参照）。また、{{cssxref("anchor-size()")}} 関数は、関連するアンカー要素の幅または高さに相対的な {{cssxref("&lt;length&gt;")}} 値に解決します（[アンカーサイズに基づく要素の位置の設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素の位置の設定) を参照）。
    - 相対位置指定要素の場合は、通常の位置からの下方向への移動量を表します。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの高さに対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`
  - : 以下のように指定します。
    - *絶対位置指定要素*では、要素の位置は {{Cssxref("bottom")}} プロパティに基づいて決まり、 `height: auto` は内容物の高さに基づいて決まります。また、 `bottom` も `auto` であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("bottom")}} に基づきます。また、 `bottom` も `auto` であった場合は、垂直方向には移動しません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 位置指定要素を上から 10% に設定

```css
body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}
```

```html
<div>この内容の寸法は、辺の位置によって決まります。</div>
```

{{EmbedLiveSample('Examples','100%','200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}
- {{cssxref("inset")}} 一括指定
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} および {{cssxref("inset-inline")}} 一括指定
- {{cssxref("position")}}
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
