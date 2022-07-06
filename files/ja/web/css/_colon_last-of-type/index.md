---
title: ':last-of-type'
slug: Web/CSS/:last-of-type
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.last-of-type
translation_of: Web/CSS/:last-of-type
---
{{CSSRef}}

**`:last-of-type`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中でその種類の最後の要素を表します。

```css
/* 兄弟要素の中で最後の <p> 要素をすべて選択 */
p:last-of-type {
  color: lime;
}
```

> **Note:** 当初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。

## 構文

{{csssyntax}}

## 例

### 最後の段落の整形

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample('Styling_the_last_paragraph')}}

### 入れ子になった要素

この例は、どうやって入れ子になった要素を対象にするかを示します。なお、単純セレクターが書かれていない場合は、[ユニバーサルセレクター](/ja/docs/Web/CSS/Universal_selectors) (`*`) が暗黙に含まれています。

#### HTML

```html
<article>
  <div>This `div` is first.</div>
  <div>This <span>nested `span` is last</span>!</div>
  <div>This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`!</div>
</article>
```

#### CSS

```css
article :last-of-type {
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample('Nested_elements', 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}
