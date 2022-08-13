---
title: Grid セル
slug: Glossary/Grid_Cell
tags:
  - CSS Grids
translation_of: Glossary/Grid_Cell
---
[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)に於ける CSS グリッドの最小単位が**グリッドセル**です。四つの交差する {{glossary("grid lines", "グリッドライン")}} に囲まれた領域のことで、表に於けるセルと考え方はほぼ同じです。

![Diagram showing an individual cell on the grid.](https://mdn.mozillademos.org/files/14767/1_Grid_Cell.png)

各アイテムのグリッド配置の方法を指定しなければ、グリッドコンテナ直下の子アイテムは自動配置アルゴリズムに従って個別のグリッドセルに一つずつ配置されます。全てのアイテムを保持できるように、行もしくは列 {{glossary("grid tracks", "トラック")}} が自動的に追加されます。

この例では 3 列のトラックグリッドを作成しています。5 つのアイテムはまず最初の行の 3 つのグリッドセルに配置され、新しい行を作って残りの 2 つのアイテムが配置されます。

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
  grid-auto-rows: 100px;
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

{{ EmbedLiveSample('example_1', '300', '280') }}

## より詳しく

### プロパティリファレンス

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### さらに詳しい説明

- CSS グリッドレイアウトガイド: [グリッドレイアウトの基本コンセプト](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [CSS グリッドレイアウト仕様に於けるグリッドセルの定義](https://drafts.csswg.org/css-grid/#grid-track-concept)
