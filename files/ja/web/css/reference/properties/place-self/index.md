---
title: place-self
slug: Web/CSS/Reference/Properties/place-self
original_slug: Web/CSS/place-self
l10n:
  sourceCommit: b505d75f1dbc5f31dd06eecab86e0b86159a4caa
---

**`place-self`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、アイテムのブロック軸およびインライン軸に沿ったアイテムの配置 (すなわち {{cssxref("align-self")}} および {{cssxref("justify-self")}} プロパティ) を一度に指定することができます。このプロパティは、ブロックレベルのボックス、絶対位置指定のボックス、グリッドアイテムに適用されます。 2 番目の値が設定されていない場合、最初の値がそちらにも使用されます。

{{InteractiveExample("CSS デモ: place-self")}}

```css interactive-example-choice
place-self: stretch center;
```

```css interactive-example-choice
place-self: center start;
```

```css interactive-example-choice
place-self: start end;
```

```css interactive-example-choice
place-self: end center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 220px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 構成要素のプロパティ

根のプロパティは以下の CSS プロパティの一括指定です。

- [`align-self`](/ja/docs/Web/CSS/Reference/Properties/align-self)
- [`justify-self`](/ja/docs/Web/CSS/Reference/Properties/justify-self)

## 構文

```css
/* キーワード値 */
place-self: auto center;
place-self: normal start;
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: anchor-center;

/* ベースラインによる配置 */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* グローバル値 */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
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
    - グリッドアイテムでは、このキーワードは `stretch` のうちの一つと似た動作をしますが、{{glossary("aspect ratio","アスペクト比")}}や内在的な寸法を持つボックスは `start` のように動作します。
    - ブロックレベルボックスと表のセルでは、プロパティは適用されません。

- `self-start`
  - : アイテムは交差軸の開始側に対応する配置コンテナーの端に詰めて配置されます。
- `self-end`
  - : アイテムは交差軸の終端側に対応する配置コンテナーの端に詰めて配置されます。
- `flex-start`
  - : このフレックスアイテムの交差軸の先頭側マージンが、行の交差軸の先頭側に詰められます。
- `flex-end`
  - : このフレックスアイテムの交差軸の末尾側マージンが、行の交差軸の末尾側に詰められます。
- `center`
  - : このフレックスアイテムのマージンボックスが、行の交差軸方向の中央に配置されます。アイテムの交差軸方向の寸法がフレックスコンテナーよりも大きい場合は、両方向に均等にはみ出します。
- `baseline`, `first baseline`. `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `stretch`
  - : アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が `auto` であった場合、アイテムの寸法は {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 `auto` が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。
- `anchor-center`
  - : [アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)要素の場合、関連付けられたアンカー要素のブロックおよびインライン方向の中心にアイテムを配置します。 [`anchor-center` を使用してアンカーの中央に配置](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-center_を使用してアンカーの中央に配置)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 簡単なデモ

以下の例では簡単な 2 x 2 のグリッドレイアウトを用意しました。最初にグリッドコンテナーには [`justify-items`](/ja/docs/Web/CSS/Reference/Properties/justify-items) および [`align-items`](/ja/docs/Web/CSS/Reference/Properties/align-items) の値を `stretch` — 既定値 — に設定し、グリッドアイテムがセルの幅全体に広がるようにしています。

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
  margin: 20px;
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
```

#### 結果

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
