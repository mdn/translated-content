---
title: repeat()
slug: Web/CSS/repeat
---

{{CSSRef}}

**`repeat()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、トラックリスト内での部分的な繰り返しを表し、列や行の繰り返しをよりコンパクトに書くことができます。

この関数は CSS グリッドのプロパティである {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} の中で使うことができます。

```css
/* <track-repeat> 値 */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* <auto-repeat> 値 */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <fixed-repeat> 値 */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

## 構文

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 正の整数で表される長さです。
- {{cssxref("&lt;percentage&gt;")}}
  - : 負の数ではないパーセント値で、列グリッドトラック内のグリッドコンテナーのインライン寸法と、行グリッドトラック内のグリッドコンテナーのブロック寸法との相対的値を表します。グリッドコンテナーの寸法がトラックの寸法に依存する場合、 `<percentage>` は `auto` として扱う必要があります。ユーザーエージェントは、トラックの本質的な寸法の寄与をグリッドコンテナーの寸法に調整し、トラックの最終的な寸法を、パーセント値を尊重する結果となる最小の量だけ増加させることができます。
- {{cssxref("&lt;flex&gt;")}}
  - : トラックのフレックス要素を明示している `fr` 単位の負ではない寸法。それぞれのフレックスサイズのトラックは、それらのフレックス要素に比例して残りの空間を配分します。
- `max-content`
  - : グリッドトラックにあるグリッドアイテムの最も大きい max-content を表します。
- `min-content`
  - : グリッドトラックにあるグリッドアイテムの最も大きい min-content を表します。
- `auto`
  - : 最大値としては、 `max-content` と同じです。最小値としては、グリッドトラックを占めるグリッドアイテムの最大最小サイズ ({{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの) を表します。
- `auto-fill`
  - : グリッドコンテナーが関連する軸に、定義されたまたは最大の幅を持っている場合、繰り返しの数は、グリッドコンテナーをオーバーフローさせない最大の正の数になります。各トラックは定義されているならば、最大トラック幅を調整する関数 (`grid-template-rows` または `grid-template-columns` を定義するために使用されるそれぞれ独立した値) として扱われます。それ以外の場合は、最小トラック幅を調整する関数として扱い、グリッドギャップを考慮に入れます。何回繰り返してもオーバーフローしてしまう場合は、繰り返しを 1 とする。そうでなければ、グリッドコンテナーが関連する軸に、定義された最小の寸法をもっている場合、繰り返しの数は最小の要件を満たす可能性がある最小の正の整数になります。その他の場合は、指定されたトラックリストは `1` 回のみ繰り返します。
- `auto-fit`

  - : `auto-fill` と同様に動作しますが、グリッドアイテムを配置した後、空の繰り返しトラックが折りたたまれる点が異なります。空のトラックとは、フロー内のグリッドアイテムが配置されていない、またはそれをまたいで配置されているものがないトラックのことです。 (これは、すべてのトラックが空の場合、すべてのトラックが折りたたまれる結果になる可能性があります。)

折り畳まれたトラックは、 `0px`　の固定トラックサイジング機能を1つ持っているものとして扱われ、その左右の溝も折り畳まれます。

自動反復トラックの数を見つけるために、ユーザーエージェントは、ゼロによる除算を避けるために、トラックの寸法をユーザーエージェントが指定した値 (例えば `1px`) に切り下げます。

## 例

### repeat() を使用したグリッド列の指定

#### HTML

```html
<div id="container">
  <div>This item is 50 pixels wide.</div>
  <div>Item with flexible width.</div>
  <div>This item is 50 pixels wide.</div>
  <div>Item with flexible width.</div>
  <div>Inflexible item of 100 pixels width.</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample("Specifying_grid_columns_using_repeat", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- グリッドレイアウトガイド: [CSS グリッドでの線ベースの配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- グリッドレイアウトガイド: [グリッドテンプレート領域 - グリッド定義の一括指定](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#グリッド定義の一括指定)
