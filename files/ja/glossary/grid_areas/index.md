---
title: Grid エリア
slug: Glossary/Grid_Areas
tags:
  - CSS Grids
translation_of: Glossary/Grid_Areas
---
**グリッドエリア**はグリッド上で一つ以上の {{glossary("grid cell", "グリッドセル")}} からなる長方形の領域です。グリッドエリアは [ライン指定による配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) や [名前付きグリッドエリア](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)でエリアを定義すると作成されます。

![Image showing a highlighted grid area](https://mdn.mozillademos.org/files/14771/1_Grid_Area.png)

グリッドエリアはその性質上、必ず長方形の領域となります。例えば T 字型や L 字型のグリッドエリアを作ることはできません。

次の例ではグリッドコンテナに二つのグリッドアイテムを含み、これらに {{cssxref("grid-area")}} プロパティで名前を付け、グリッド上に {{cssxref("grid-template-areas")}} を使ってレイアウトしています。これによりグリッドセルと 4 つ含むものと、2 つ含むものの二つのグリッドエリアができます。

```css hidden
* {box-sizing: border-box;}

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
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
   <div class="item1">Item</div>
   <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('example_1', '300', '280') }}

## より詳しく

### プロパティリファレンス

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### さらに詳しい説明

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本コンセプト](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS グリッドレイアウトガイド: _[グリッドテンプレートエリア](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- [CSS グリッドレイアウト仕様に於けるグリッドエリアの定義](https://drafts.csswg.org/css-grid/#grid-area-concept)
