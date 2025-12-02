---
title: align-content
slug: Web/CSS/Reference/Properties/align-content
original_slug: Web/CSS/align-content
l10n:
  sourceCommit: 8b4e6b773d03959d5a5b2d02200243c4714079b9
---

[CSS](/ja/docs/Web/CSS) の **`align-content`** プロパティは、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の交差軸または[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のブロック軸方向の内部のアイテムの間または周囲の空間の配分方法を設定します。

下記のインタラクティブデモでは、グリッドレイアウトを使用してこのプロパティの値のいくつかを説明しています。

{{InteractiveExample("CSS デモ: align-content")}}

```css interactive-example-choice
align-content: start;
```

```css interactive-example-choice
align-content: center;
```

```css interactive-example-choice
align-content: space-between;
```

```css interactive-example-choice
align-content: space-around;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  column-gap: 10px;
  height: 180px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

単一行のフレックスコンテナー (つまり、 `flex-wrap: nowrap` のもの) では、このプロパティは効果がありません。

## 構文

```css
/* 通常の配置 */
align-content: normal;

/* 基本的な位置による配置 */
/* align-content は left および right の値を取りません */
align-content: start;
align-content: center;
align-content: end;
align-content: flex-start;
align-content: flex-end;

/* ベースラインの配置 */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* 均等配置 */
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
align-content: stretch;

/* あふれた場合の配置 */
align-content: safe center;
align-content: unsafe center;

/* グローバル値 */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### 値

- `normal`
  - : 各アイテムは `align-content` の値が設定されていないかのように、既定の位置に寄せて配置されます。
- `start`
  - : 各アイテムは、交差軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `center`
  - : 各アイテムは、交差軸方向で配置コンテナーの中央に互いに寄せて配置されます。
- `end`
  - : 各アイテムは、交差軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : 各アイテムは、フレックスコンテナーに依存して、交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : 各アイテムは、フレックスコンテナーに依存して、交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。

    ![ベースラインは、ほとんどの文字がその上に「配置」される線で、ディセンダーがその下に伸びる線です。](410px-typography_line_terms.svg.png)

    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。

- `space-between`
  - : 各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは配置コンテナーの交差軸の先頭側に寄せられ、最後のアイテムは配置コンテナーの交差軸の末尾側に寄せられます。
- `space-around`
  - : 各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenly`
  - : 各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔、先頭側の端と最初のアイテムの間のの余白、末尾側の端と最後のアイテムの間の余白は、まったく同じ幅になります。
- `stretch`
  - : 各アイテムの交差軸方向の寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、交差軸方向の寸法の合計が配置コンテナーを満たすようになります。
- `safe`
  - : 配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : 配置キーワードと共に使用します。アイテムの寸法と配置コンテナーとの関係、あふれることによってデータの損失が発生するかどうかにかかわらず、指定された値を尊重します。

> [!NOTE]
> `<content-distribution>` 値 (`space-between`, `space-around`, `space-evenly`, `stretch`) は[ブロックレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content)では効果がありません。そのブロック内のすべてのコンテンツが単一の[配置対象物](/ja/docs/Glossary/Alignment_Subject)として扱われるためです。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### さまざまな align-content 値の効果

この例では 3 つの異なる {{cssxref("display")}} プロパティ値、つまり `flex`, `grid`, `block` を切り替えることができます。また、 `align-content` の値も切り替えることができます。

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html
<section>
  <div class="olive">Olive</div>
  <div class="coral">Coral</div>
  <div class="deepskyblue">Deep<br />sky<br />blue</div>
  <div class="orchid">Orchid</div>
  <div class="slateblue">Slateblue</div>
  <div class="maroon">Maroon</div>
</section>
```

```html-nolint hidden
<fieldset class="controls">
    <legend>制御</legend>
    <div class="row">
      <label for="display">display: </label>
      <select id="display">
        <option value="block" selected>block</option>
        <option value="flex">flex</option>
        <option value="grid">grid</option>
      </select>
    </div>
    <div class="row">
      <label for="alignContent">align-content: </label>
      <select id="alignContent">
        <option value="normal" selected>normal</option>
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>
    </div>
    <p>適用される CSS</p>
    <pre>
section {
  display: <span id="displayStyle">block</span>;
  align-content: <span id="align">normal</span>
}
    </pre>
  </fieldset>
</div>
```

#### CSS

```css hidden
.wrapper {
  font-size: 1.25rem;
  display: flex;
  gap: 1rem;
}
section div {
  font-family: monospace;
  padding: 3px;
}
```

```css
section {
  border: solid 1.5px tomato;
  height: 300px;
  width: 300px;
  flex-wrap: wrap; /* フレックスでのみ使用 */
  gap: 0.2rem; /* ブロックでは使われない */
}
.olive {
  background-color: olive;
}
.coral {
  background-color: coral;
}
.deepskyblue {
  background-color: deepskyblue;
}
.orchid {
  background-color: orchid;
}
.slateblue {
  background-color: slateblue;
  color: white;
}
.maroon {
  background-color: maroon;
  color: white;
}
```

```js hidden
const alignContent = document.querySelector("#alignContent");
const display = document.querySelector("#display");
const container = document.querySelector("section");
const displayStyle = document.querySelector("#displayStyle");
const alignStyle = document.querySelector("#align");
document.addEventListener("load", () => {
  updatePage();
});
alignContent.addEventListener("change", () => {
  updatePage();
});
display.addEventListener("change", () => {
  updatePage();
});
function updatePage() {
  const alVal = alignContent.value;
  const dVal = display.value;
  container.style.alignContent = alVal;
  container.style.display = dVal;
  alignStyle.innerText = alVal;
  displayStyle.innerText = dVal;
}
```

#### 結果

`display` の値と `align-content` の値を変更してみましょう。

{{EmbedLiveSample("Examples", 260, 310)}}

[ブロックレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content)では、子要素は単一の要素として扱われるため、 `space-between`、`space-around`、`space-evenly` の動作が異なります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)_
- CSS グリッドガイド: _[グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)_
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)
- [通常フローでのブロック及びインラインレイアウト](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [ブロックレベルコンテンツ](/ja/docs/Glossary/Block-level_content)
- {{CSSXRef("display")}}
