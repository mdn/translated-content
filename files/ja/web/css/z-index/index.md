---
title: z-index
slug: Web/CSS/z-index
tags:
  - CSS
  - CSS 位置指定レイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.z-index
translation_of: Web/CSS/z-index
---
{{CSSRef}}

**`z-index`** は CSS のプロパティで、[位置指定](/ja/docs/Web/CSS/position)要素とその子孫要素、またはフレックスアイテムの z 順を定義します。より大きな z-index を持つ要素はより小さな要素の上に重なります。

{{EmbedInteractiveExample("pages/css/z-index.html")}}

位置指定されたボックス (つまり、`position` が `static` 以外のもの) では、`z-index` プロパティが以下のことを定義します。

1.  現在の[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)におけるボックスの重ね合わせレベル
2.  ボックスがローカルな重ね合わせコンテキストを作るかどうか

## 構文

```css
/* キーワード値 */
z-index: auto;

/* <integer> 値 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* 負の数はより低い優先度になる */

/* グローバル値 */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: unset;
```

`z-index` プロパティは、キーワード `auto` または `<integer>` のどちらかで指定します。

### 値

- `auto`
  - : ボックスはローカルな重ね合わせコンテキストを新たに作りません。現在の重ね合わせコンテキストで作られたボックスは、親ボックスと同じ重ね合わせレベルを持ちます。
- `<integer>`
  - : この整数値は、現在の重ね合わせコンテキストで作られたボックスの重ね合わせレベルです。ボックスは重ね合わせレベル `0` のローカルの重ね合わせコンテキストを作ります。これは、子孫要素の z-index は、この要素の外部にある要素の z-index とは比較されないということです。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Visually_layering_elements">視覚的な階層を持つ要素</h3>

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### 結果

{{ EmbedLiveSample('Visually_layering_elements', '550', '200', '') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{Cssxref("position")}} プロパティ
- [CSS の z-index を理解する](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
