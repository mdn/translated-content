---
title: Grid Track (グリッドトラック)
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: d2a9f2e26a8139d4bb270d7dc3cddd8b848719fe
---

**グリッドトラック**とは、2 本の{{glossary("grid lines", "グリッド線")}}の間の空間のことです。*明示的なグリッド*では、 {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} プロパティ、または一括指定の {{cssxref("grid")}} または {{cssxref("grid-template")}} プロパティを使用して定義します。明示的グリッドで作成したトラックの外側にグリッドアイテムを配置することで、*暗黙的グリッド*にもトラックが生成されます。

次の画像は、グリッドにおける最初の行トラックを表しています。

![Diagram showing a grid track.](1_grid_track.png)

## 明示的グリッドにおけるトラックの大きさ

{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} プロパティを使ってグリッドトラックを定義する際には、任意の長さ単位もしくは、グリッドコンテナー中で利用可能な領域の一部分を表す柔軟な単位 `fr` が利用できます。

## 例

次の例は、1 つ目が 200 ピクセルのトラック、2 つ目が 1fr、3 つめが 3fr となる、3 列のトラックから成るグリッドを作っています。グリッドコンテナ中の利用可能な領域のうち 200 ピクセル分を差し引いた残りの領域を 4 分割し、2 つめの列にはその 1 つ分を、3 つめの列には 3 つ分が割り当てられます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr 3fr;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '230') }}

## 暗黙的グリッドにおけるトラックの大きさ

暗黙的グリッドにおけるトラックは、既定では自動的に大きさが決定されますが、 {{cssxref("grid-auto-rows")}} および {{cssxref("grid-auto-columns")}} プロパティでこれらのトラックの大きさを定義することもできます。

## 関連情報

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [CSS グリッドレイアウト仕様書におけるグリッドトラックの定義](https://drafts.csswg.org/css-grid/#grid-track-concept)
- プロパティリファレンス

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
