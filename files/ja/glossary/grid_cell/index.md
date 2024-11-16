---
title: Grid Cell (グリッドセル)
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)における CSS グリッドの最小単位が**グリッドセル**です。 4 つの交差する {{glossary("grid lines", "グリッド線")}} に囲まれた領域のことで、表におけるセルと考え方はほぼ同じです。

![グリッド上の個々のセルを示す図。](1_grid_cell.png)

各アイテムのグリッド配置の方法を指定しなければ、グリッドコンテナ直下の子アイテムは自動配置アルゴリズムに従って個別のグリッドセルに一つずつ配置されます。全てのアイテムを保持できるように、行もしくは列 {{glossary("grid tracks", "トラック")}} が自動的に追加されます。

## 例

この例では 3 列のトラックグリッドを作成しています。5 つのアイテムはまず最初の行の 3 つのグリッドセルに配置され、新しい行を作って残りの 2 つのアイテムが配置されます。

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
  grid-template-columns: repeat(3, 1fr);
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

{{ EmbedLiveSample('Example', '300', '280') }}

## 関連情報

### プロパティリファレンス

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### 参考資料

- CSS グリッドレイアウトガイド: [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS グリッドレイアウト仕様におけるグリッドセルの定義](https://drafts.csswg.org/css-grid/#grid-track-concept)
