---
title: right
slug: Web/CSS/Reference/Properties/right
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`right`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/Reference/Properties/position)の水平位置の決定に関与します。この{{glossary("inset properties", "インセットプロパティ")}}は、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: right")}}

```css interactive-example-choice
right: 0;
```

```css interactive-example-choice
right: 4em;
```

```css interactive-example-choice
right: 10%;
```

```css interactive-example-choice
right: 20px;
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
right: 3px;
right: 2.4em;
right: anchor(--my-anchor 50%);
right: anchor-size(--my-anchor height, 65px);

/* 包含ブロックの幅に対する <percentage> */
right: 10%;

/* キーワード値 */
right: auto;

/* グローバル値 */
right: inherit;
right: initial;
right: revert;
right: revert-layer;
right: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。
    - 絶対位置指定要素の場合は、包含ブロックの右端までの距離を表します。
    - アンカー位置指定要素の場合は、{{cssxref("anchor()")}} 関数は、関連付けられたアンカー要素の左端または右端の位置を基準とした相対的な {{cssxref("&lt;length&gt;")}} 値に解決されます（詳細は[インセットプロパティで `anchor()` 関数値を使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#インセットプロパティで_anchor_関数値を使用)を参照）。また、{{cssxref("anchor-size()")}} 関数は、関連するアンカー要素の幅または高さに相対的な {{cssxref("&lt;length&gt;")}} 値に解決します（[アンカーサイズに基づく要素の位置の設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素の位置の設定) を参照）。
    - 相対位置指定要素の場合は、通常の位置からの左方向への移動量を表します。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの幅に対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`
  - : 以下のように指定します。
    - *絶対位置指定要素*では、要素の位置は {{Cssxref("left")}} プロパティに基づいて決まり、 `width: auto` は内容物の幅に基づいて決まります。また、 `left` も `auto` であった場合は、要素は水平方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("left")}} に基づきます。また、 `left` も `auto` であった場合は、水平方向には移動しません。

## 解説

`right` の効果は、要素がどの様に配置されているか (つまり、 {{cssxref("position")}} プロパティの値) によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、`right` プロパティは要素の右辺の外側のマージンと、包含ブロックの右辺の内側のマージンとの間の距離を指定します。位置指定要素に関連付けられた[アンカー要素](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)があり、プロパティ値に {{cssxref("anchor()")}} 関数が含まれいる場合、`right` は位置指定要素の右端を指定された [`<anchor-side>`](/ja/docs/Web/CSS/Reference/Values/anchor#anchor-side) の辺からの相対位置を基準とします。`right` プロパティは、`left`、`right`、`start`、`end`、`self-start`、`self-end`、`center`、および `<percentage>` 値と[互換性があります](/ja/docs/Web/CSS/Reference/Values/anchor#インセットプロパティと_anchor-side_の値の互換性)。
- `position` が `relative` に設定されている場合、 `right` プロパティは要素の右辺が通常位置から左方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `right` プロパティは sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `right` プロパティは*効果がありません*。

{{cssxref("left")}} と `right` の両方が定義された場合、他のプロパティで制約されていなければ、要素は両方を満たすように引き伸ばされます。もし要素が両方を満たすように伸びることができない場合 — 例えば `width` が宣言されている場合 — 要素の位置は過剰制約になります。このような場合、コンテナーが左書きの場合は `left` の値が優先され、コンテナーが右書きの場合は `right` の値が優先されます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 絶対位置指定および相対位置指定で right を使用

#### HTML

```html
<div id="relative">相対位置指定</div>
<div id="absolute">絶対位置指定</div>
```

#### CSS

```css
#relative {
  width: 100px;
  height: 100px;
  background-color: #ffc7e4;
  position: relative;
  top: 20px;
  left: 20px;
}

#absolute {
  width: 100px;
  height: 100px;
  background-color: #ffd7c2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

#### 結果

{{ EmbedLiveSample('絶対位置指定および相対位置指定で_right_を使用', 500, 220) }}

### left と right の同時指定

`left` と `right` の両方が宣言されている場合、他の制約条件がそれを妨げない限り、要素は両方を満たすように伸びます。要素が両方を満たすように伸びたり縮んだりしない場合、要素の位置が*過剰指定*のとなり、コンテナーの書字方向に基づいて優先順位が決まります。コンテナーの書字方向が左書きであれば、`left` が優先されます。コンテナーの書字方向が右書きの場合は、`right` が優先されます。

#### HTML

```html
<div id="parent">
  親
  <div id="noWidth">width なし</div>
  <div id="width">width: 100px</div>
</div>
```

#### CSS

```css
div {
  outline: 1px solid #cccccc;
}
#parent {
  width: 200px;
  height: 200px;
  background-color: #ffc7e4;
  position: relative;
}
/* left と right の両方を宣言 */
#width,
#noWidth {
  background-color: #c2ffd7;
  position: absolute;
  left: 0;
  right: 0;
}
/* width を宣言 */
#width {
  width: 100px;
  top: 60px;
}
```

#### 結果

{{ EmbedLiveSample('left と right の同時指定', 500, 220) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- {{cssxref("inset")}} 一括指定
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} および {{cssxref("inset-inline")}} 一括指定
- {{cssxref("position")}}
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
