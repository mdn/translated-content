---
title: left
slug: Web/CSS/Reference/Properties/left
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`left`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/Reference/Properties/position)の水平位置の決定に関与します。この{{glossary("inset properties", "インセットプロパティ")}}は、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: left")}}

```css interactive-example-choice
left: 0;
```

```css interactive-example-choice
left: 4em;
```

```css interactive-example-choice
left: 10%;
```

```css interactive-example-choice
left: 20px;
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
left: 3px;
left: 2.4em;
left: anchor(--my-anchor 50%);
left: calc(anchor-size(--my-anchor inline, 100px) * 2);

/* 包含ブロックの幅に対する <percentage> */
left: 10%;

/* キーワード値 */
left: auto;

/* グローバル値 */
left: inherit;
left: initial;
left: revert;
left: revert-layer;
left: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。
    - 絶対位置指定要素の場合は、包含ブロックの左端までの距離を表します。
    - アンカー位置指定要素の場合は、{{cssxref("anchor()")}} 関数は、関連付けられたアンカー要素の左端または右端の位置を基準とした相対的な {{cssxref("&lt;length&gt;")}} 値に解決されます（詳細は[インセットプロパティで `anchor()` 関数値を使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#インセットプロパティで_anchor_関数値を使用)を参照）。また、{{cssxref("anchor-size()")}} 関数は、関連するアンカー要素の幅または高さに相対的な {{cssxref("&lt;length&gt;")}} 値に解決します（[アンカーサイズに基づく要素の位置の設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素の位置の設定) を参照）。
    - 相対位置指定要素の場合は、通常の位置からの右方向への移動量を表します。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの幅に対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`
  - : 以下のように指定します。
    - *絶対位置指定要素*では、要素の位置は {{Cssxref("right")}} プロパティに基づいて決まり、 `width: auto` は内容物の幅に基づいて決まります。また、 `right` も `auto` であった場合は、要素は水平方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("right")}} に基づきます。また、 `right` も `auto` であった場合は、水平方向には移動しません。

## 解説

`left` の効果は、要素がどの様に配置されているか（つまり、 {{cssxref("position")}} プロパティの値）によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、`left` プロパティは要素の左辺の外側のマージンと、包含ブロックの左辺の内側のマージンとの間の距離を指定します。（包含ブロックは、この要素が相対位置指定される祖先要素です。）位置指定要素に関連付けられた[アンカー要素](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)があり、プロパティ値に {{cssxref("anchor()")}} 関数が含まれいる場合、`left` は位置指定要素の左端を指定された [`<anchor-side>`](/ja/docs/Web/CSS/Reference/Values/anchor#anchor-side) の辺からの相対位置を基準とします。`left` プロパティは、`left`、`right`、`start`、`end`、`self-start`、`self-end`、`center`、および `<percentage>` 値と[互換性があります](/ja/docs/Web/CSS/Reference/Values/anchor#インセットプロパティと_anchor-side_の値の互換性)。
- `position` が `relative` に設定されている場合、 `left` プロパティは要素の左辺が通常位置から右方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `left` プロパティは sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `left` プロパティは*効果がありません*。

`left` と {{cssxref("right")}} の両方が定義されていて、幅の制約がない場合、要素は両方を満たすように伸縮されます。要素が両方を満たすように伸縮できない場合、要素の位置は過剰指定になります。このような場合、コンテナーが左書きの場合は `left` の値が優先され、コンテナーが右書きの場合は `right` の値が優先されます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 位置指定要素

#### HTML

```html-nolint
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      この div を含んでいる要素はメインウィンドウのみであるため、それに関連して位置を決定します。
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>兄弟要素から相対の相対位置指定。</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>上の兄弟 div に相対的ですが、コンテンツのフローから除外されています。</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>相対位置指定の親の内部で絶対位置指定</p>
    </div>

    <div id="example_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>left と right の両方を宣言した絶対位置指定</p>
    </div>
  </div>
</div>
```

#### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
#example_5 {
  position: absolute;
  right: 0;
  left: 0;
  top: 100px;
  background-color: #d7ffc2;
}
```

#### 結果

{{EmbedLiveSample('位置指定要素',1200,650)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("right")}}
- {{cssxref("inset")}} 一括指定
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} および {{cssxref("inset-inline")}} 一括指定
- {{cssxref("position")}}
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
