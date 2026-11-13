---
title: bottom
slug: Web/CSS/Reference/Properties/bottom
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

**`bottom`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/Reference/Properties/position)の垂直位置の設定に関与します。この{{glossary("inset properties", "インセットプロパティ")}}は、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: bottom")}}

```css interactive-example-choice
bottom: 0;
```

```css interactive-example-choice
bottom: 4em;
```

```css interactive-example-choice
bottom: 10%;
```

```css interactive-example-choice
bottom: 20px;
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

## 構文

```css
/* <length> 値 */
bottom: 3px;
bottom: 2.4em;
bottom: calc(anchor(--my-anchor 50%) + 5px);
bottom: anchor-size(width);

/* 包含ブロックの高さに対する <percentage> */
bottom: 10%;

/* キーワード値 */
bottom: auto;

/* グローバル値 */
bottom: inherit;
bottom: initial;
bottom: revert;
bottom: revert-layer;
bottom: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。
    - 絶対位置指定要素の場合は、包含ブロックの下端までの距離を表します。
    - 相対位置指定要素の場合は、通常の位置からの上方向への移動量を表します。
    - アンカー位置指定要素の場合は、{{cssxref("anchor()")}} 関数は、関連付けられたアンカー要素の上端または下端の位置を基準とした相対的な {{cssxref("&lt;length&gt;")}} 値に解決されます（詳細は[インセットプロパティで `anchor()` 関数値を使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#インセットプロパティで_anchor_関数値を使用)を参照）。また、{{cssxref("anchor-size()")}} 関数は、関連するアンカー要素の幅または高さに相対的な {{cssxref("&lt;length&gt;")}} 値に解決します（[アンカーサイズに基づく要素の位置の設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素の位置の設定) を参照）。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの高さに対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`
  - : 以下のように指定します。
    - 絶対位置指定要素では、要素の位置は {{Cssxref("top")}} プロパティに基づいて決まり、 `height: auto` は内容物の高さに基づいて決まります。また、 `top` も `auto` であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。
    - 相対位置指定要素では、通常の位置から要素までの距離は {{Cssxref("top")}} に基づきます。また、`top` も `auto` であった場合は、垂直方向には移動しません。

## 解説

`bottom` の効果は、要素がどの様に配置されているか（つまり、{{cssxref("position")}} プロパティの値）によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、`bottom` プロパティは、要素の[下マージン](/ja/docs/Web/CSS/Guides/Box_model/Introduction)の外縁と、包含ブロックの下パディングの外縁との間の距離を指定します。または、[位置指定要素](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)の場合、値の中で {{cssxref("anchor()")}} 関数が使用されているときは、指定された [`<anchor-side>`](/ja/docs/Web/CSS/Reference/Values/anchor#anchor-side) の辺からの相対位置を基準とします。`bottom` プロパティは、`top`、`bottom`、`start`、`end`、`self-start`、`self-end`、`center`、および `<percentage>` 値と[互換性があります](/ja/docs/Web/CSS/Reference/Values/anchor#インセットプロパティと_anchor-side_の値の互換性)。
- `position` が `relative` に設定されている場合、 `bottom` プロパティは要素の下辺が通常位置から上方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `bottom` プロパティは sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `bottom` プロパティは*効果がありません*。

{{cssxref("top")}} と `bottom` の両方が指定されており、 `position` が `absolute` または `fixed` に設定されており、_かつ_ {{cssxref("height")}} が未指定 (`auto` または `100%` のどちらか) の場合は、 `top` と `bottom` の距離が尊重されます。それ以外の場合、 {{cssxref("height")}} が何らかの形で制約されていた場合、または `position` が `relative` に設定されていた場合は、 `top` プロパティが優先されて `bottom` プロパティは無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 絶対位置指定と固定位置指定

この例は、 {{cssxref("position")}} が `absolute` と `fixed` であった場合の `bottom` プロパティの動作の違いを示します。

#### HTML

```html
<p>
  This<br />is<br />some<br />tall,<br />tall,<br />tall,<br />tall,<br />tall<br />content.
</p>
<div class="fixed"><p>Fixed</p></div>
<div class="absolute"><p>Absolute</p></div>
```

#### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgb(55 55 55 / 20%);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

### 結果

{{EmbedLiveSample('Absolute_and_fixed_positioning','500','250')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}
- {{cssxref("inset")}} 一括指定
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} および {{cssxref("inset-inline")}} 一括指定
- {{cssxref("position")}}
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
