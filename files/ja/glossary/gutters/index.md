---
title: Gutter (溝)
slug: Glossary/Gutters
l10n:
  sourceCommit: 21bed6549ed179757c999336ef4637d16f663137
---

{{GlossarySidebar}}

**溝** (Gutters) もしくはアレーはコンテンツトラック間に空間を開けることです。[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)で {{cssxref("column-gap")}}、{{cssxref("row-gap")}}、{{cssxref("gap")}} プロパティを使うと溝が作成されます。

## 例

下の例では 3 列 2 行のトラックを持つグリッドを、列トラックの間には 20 ピクセルの、列トラックの間には `20px` のすき間を空けています。

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
  background-color: #fff8f8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 45%;
  column-gap: 20px;
  row-gap: 20px;
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

{{EmbedLiveSample('Example', '300', '280')}}

グリッドのサイズ決定においては、溝によるすき間は通常のグリッドトラックのように扱われますが、すき間の中には何も配置できません。すき間の分だけその場所のグリッドラインのサイズが増えるように振る舞うため、そのラインの後のグリッドアイテムはすき間の後から始まるように配置されます。

トラックに余白を生じさせる原因は `row-gap` と `column-gap` プロパティだけではありません。マージン、パディング、[ボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)の余白分配プロパティなどいずれも視覚上のすき間を作ります。したがって、追加の余白をこれらの方法で一切作らないデザインをしていない限り、 `row-gap` および `column-gap` プロパティと「溝サイズ」が一致するようには見えません。

## 関連情報

### プロパティリファレンス

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("gap")}}

### 参考情報

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
- [CSS グリッドレイアウト仕様における溝の定義](https://drafts.csswg.org/css-grid/#gutters)
