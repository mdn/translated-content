---
title: grid
slug: Web/CSS/Reference/Properties/grid
original_slug: Web/CSS/grid
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`grid`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)として明示的・暗黙的なすべてのグリッドプロパティを単一の宣言で設定します。

`grid` を使用すると、一方の軸を {{cssxref("grid-template-rows")}} または {{cssxref("grid-template-columns")}} を使用して設定し、もう一方の軸でどのように内容物を自動反復させるかを、暗黙のグリッドプロパティである {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}} で設定します。

{{InteractiveExample("CSS デモ: grid")}}

```css interactive-example-choice
grid: auto-flow / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid: auto-flow dense / 40px 40px 1fr;
```

```css interactive-example-choice
grid: repeat(3, 80px) / auto-flow;
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
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-column: auto / span 3;
  grid-row: auto / span 2;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-column: auto / span 2;
}
```

> [!NOTE]
> 指定しないサブプロパティは、通常の一括指定と同様に初期値に設定されます。また、溝に関するプロパティはこの一括指定では初期化されません。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`grid-auto-columns`](/ja/docs/Web/CSS/Reference/Properties/grid-auto-columns)
- [`grid-auto-flow`](/ja/docs/Web/CSS/Reference/Properties/grid-auto-flow)
- [`grid-auto-rows`](/ja/docs/Web/CSS/Reference/Properties/grid-auto-rows)
- [`grid-template-areas`](/ja/docs/Web/CSS/Reference/Properties/grid-template-areas)
- [`grid-template-columns`](/ja/docs/Web/CSS/Reference/Properties/grid-template-columns)
- [`grid-template-rows`](/ja/docs/Web/CSS/Reference/Properties/grid-template-rows)

## 構文

```css
/* <'grid-template'> 値 */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [line-name1] "a" 100px [line-name2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? 値 */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> 値 */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* グローバル値 */
grid: inherit;
grid: initial;
grid: revert;
grid: revert-layer;
grid: unset;
```

### 値

- `<'grid-template'>`
  - : {{cssxref("grid-template")}} を定義し、これには {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}} が含まれます。
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : {{cssxref("grid-template-rows")}} プロパティを明示的に設定 (および {{cssxref("grid-template-columns")}} プロパティを `none` に設定) することで行トラックを設定し、 {{cssxref("grid-auto-columns")}} プロパティを設定 (および {{cssxref("grid-auto-rows")}} を `auto` に設定) することで列トラックの自動反復方法を設定します。 `dense` が設定されていれば、 {{cssxref("grid-auto-flow")}} も `column` に設定されます。

    ほかの `grid` のサブプロパティはすべて、初期値に初期化されます。

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : {{cssxref("grid-template-columns")}} プロパティを明示的に設定 (および {{cssxref("grid-template-rows")}} プロパティを `none` に設定) することで列トラックを設定し、 {{cssxref("grid-auto-rows")}} プロパティを設定 (および {{cssxref("grid-auto-columns")}} を `auto` に設定) することで行トラックの自動反復方法を設定します。 `dense` が設定されていれば、 {{cssxref("grid-auto-flow")}} も `column` に設定されます。

    ほかの `grid` のサブプロパティはすべて、初期値に初期化されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドレイアウトの作成

#### HTML

```html live-sample___creating_a_grid_layout
<div id="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css live-sample___creating_a_grid_layout
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

#### 結果

{{EmbedLiveSample("Creating_a_grid_layout", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [グリッドテンプレート領域: グリッド定義の一括指定](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#グリッド定義の一括指定)
