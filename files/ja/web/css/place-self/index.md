---
title: place-self
slug: Web/CSS/place-self
---

{{CSSRef}}

**`place-self`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、アイテムのブロック軸およびインライン軸に沿ったアイテムの配置 (すなわち {{cssxref("align-self")}} および {{cssxref("justify-self")}} プロパティ) を、[グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)や[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)などのレイアウトシステムにおいて、一度に指定することができます。2 番目の値が設定されていない場合、最初の値がそちらにも使用されます。

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## 構成要素のプロパティ

根のプロパティは以下の CSS プロパティの一括指定です。

- [`align-self`](/ja/docs/Web/CSS/align-self)
- [`justify-self`](/ja/docs/Web/CSS/justify-self)

## 構文

```css
/* キーワード値 */
place-self: auto center;
place-self: normal start;

/* 位置による配置 */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: left auto;
place-self: right normal;

/* ベースラインによる配置 */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* グローバル値 */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: unset;
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
- `baseline`, `first baseline`. `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `stretch`
  - : アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が `auto` であった場合、アイテムの寸法は {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 `auto` が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

<h3 id="Simple_demonstration">簡単なデモ</h3>

以下の例では簡単な 2 x 2 のグリッドレイアウトを用意しました。最初にグリッドコンテナーには [`justify-items`](/ja/docs/Web/CSS/justify-items) および [`align-items`](/ja/docs/Web/CSS/align-items) の値を `stretch` — 既定値 — に設定し、グリッドアイテムがセルの幅全体に広がるようにしています。

2 番目、3 番目、4 番目のグリッドアイテムは、別々な `place-self` の値を指定し、これらが既定の配置をオーバーライドする様子を表示します。これらの値はグリッドアイテムの幅や高さを内容物の幅や高さに設定し、セルごとにブロック方向とインライン方向の両方で異なる位置に配置しています。

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
  <span>Fourth</span>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  width: 300px;
}

span:nth-child(2) {
  place-self: start center;
}

span:nth-child(3) {
  place-self: center start;
}

span:nth-child(4) {
  place-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article {
  margin: 20px;
}
```

#### 結果

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内でのアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウト内でのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
- {{cssxref("align-self")}} プロパティ
- {{cssxref("justify-self")}} プロパティ
