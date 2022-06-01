---
title: align-self
slug: Web/CSS/align-self
tags:
  - CSS
  - CSS ボックス配置
  - CSS フレックスボックス
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.align-self
translation_of: Web/CSS/align-self
---
{{CSSRef}}

**`align-self`** は [CSS](/ja/docs/Web/CSS) のプロパティで、グリッドやフレックスのアイテムの {{cssxref("align-items")}} の値を上書きします。グリッドでは、アイテムは{{glossary("Grid Areas", "グリッド領域")}}内で配置されます。フレックスボックスでは、アイテムは{{glossary("cross axis", "交差軸")}}上で配置されます。

{{EmbedInteractiveExample("pages/css/align-self.html")}}

このプロパティは、ブロックレベルのボックスやテーブルのセルには適用されません。フレックスボックスの交差軸のマージンが `auto` の場合、`align-self` は無視されます。

## 構文

```css
/* キーワード値 */
align-self: auto;
align-self: normal;

/* 位置による配置 */
/* align-self は left および right の値をとりません */
align-self: center; /* アイテムを中央付近に配置 */
align-self: start; /* アイテムを起点に配置 */
align-self: end; /* アイテムを末端に配置 */
align-self: self-start; /* アイテムを起点に詰めて配置 */
align-self: self-end; /* アイテムを末端に詰めて配置 */
align-self: flex-start; /* フレックスアイテムを起点に配置 */
align-self: flex-end; /* フレックスアイテムを末端に配置 */

/* ベースラインによる配置 */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* 寸法が 'auto' のアイテムをコンテナーに合うよう伸長 */

/* あふれたときの配置 */
align-self: safe center;
align-self: unsafe center;

/* グローバル値 */
align-self: inherit;
align-self: initial;
align-self: revert;
align-self: unset;
```

### 値

- `auto`
  - : 親の {{cssxref("align-items")}} の値で計算します。
- `normal`

  - : このキーワードの効果は、現在のレイアウトモードに依存します。

    - 絶対位置のレイアウトでは、このキーワードは*置換*の絶対位置ボックスには `start` のように動作し、*その他*の絶対位置ボックスには `stretch` のように動作します。
    - 絶対位置指定レイアウトの固定位置指定時は、このキーワードは `stretch` と同様に動作します。
    - フレックスアイテムでは、このキーワードは `stretch` と同様に動作します。
    - グリッドアイテムでは、このキーワードは `stretch` のうちの一つと似た動作をしますが、アスペクト比や固有の寸法を持つボックスは `start` のように動作します。
    - ブロックレベルボックスと表のセルでは、プロパティは適用されません。

- `self-start`
  - : アイテムは交差軸の開始側に対応する配置コンテナーの端に詰めて配置されます。
- `self-end`
  - : アイテムは交差軸の終端側に対応する配置コンテナーの端に詰めて配置されます。
- `flex-start`
  - : このフレックスアイテムの cross-start マージン側が、行の cross-start 側に詰められます。
- `flex-end`
  - : このフレックスアイテムの cross-end マージン側が、行の cross-end 側に詰められます。
- `center`
  - : このフレックスアイテムのマージンボックスが、行の交差軸方向の中央に配置されます。アイテムの交差軸方向の寸法がフレックスコンテナーよりも大きい場合は、両方向に均等にはみ出します。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `stretch`
  - : アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が `auto` であった場合、アイテムの寸法は {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 `auto` が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。
- `safe`
  - : アイテムのサイズが配置コンテナーを超えるとき、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : アイテムの配置コンテナーのサイズの関係にかかわらず、指定した値を尊重します。

## 公式定義

{{CSSInfo}}

## 関連情報

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<section>
  <div>Item #1</div>
  <div>Item #2</div>
  <div>Item #3</div>
</section>
```

### CSS

```css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications("css.properties.align-self.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内でのアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウト内でのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
- {{cssxref("align-items")}} プロパティ
