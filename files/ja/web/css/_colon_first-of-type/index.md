---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

**`:first-of-type`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中でその種類の最初の要素を表します。

```
/* 兄弟要素の中で最初の <p> 要素をすべて選択 */
p:first-of-type {
  color: red;
}
```

> **メモ:** 当初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。

## 構文

```
:first-of-type
```

## 例

### 最初の段落の整形

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample('Styling_the_first_paragraph')}}

### 入れ子になった要素

この例は、どうやった入れ子になった要素を対象にするかを示します。なお、単純セレクターが書かれていない場合は、[ユニバーサルセレクター](/ja/docs/Web/CSS/Universal_selectors) (`*`) が暗黙に含まれています。

#### HTML

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
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

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
