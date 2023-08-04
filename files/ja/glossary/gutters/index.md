---
title: Gutter (ガター)
slug: Glossary/Gutters
l10n:
  sourceCommit: 21bed6549ed179757c999336ef4637d16f663137
---

**ガター** もしくはアレーはコンテンツトラック間のスペースです。[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)で {{cssxref("column-gap")}}、{{cssxref("row-gap")}}、{{cssxref("gap")}} プロパティを使うとガターが作成されます。

## 例

下の例では 3 列 2 行のトラックを持つグリッドを、列トラックの間には 20 ピクセルの、列トラックの間には 20 ピクセルの隙間を空けています。

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

グリッドのサイズ決定においては、ガターによる隙間は通常のグリッドトラックのように扱われますが、隙間の中には何も配置できません。隙間の分だけその場所のグリッドラインのサイズが増えるように振る舞うため、そのラインの後のグリッドアイテムは隙間の後から始まるように配置されます。

トラックに余白を作るのは grid-gap プロパティだけではありません。マージン、パディング、[ボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)のスペース分配プロパティなどいずれも視覚上の隙間を作ります。したがって、これらの方法で追加の余白は一切作らないデザインをしていない限り、grid-gap プロパティと「ガターサイズ」が一致するようには見えません。

## 関連情報

### プロパティリファレンス

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("gap")}}

### より詳しい説明

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- [CSS グリッドレイアウト仕様におけるガターの定義](https://drafts.csswg.org/css-grid/#gutters)
