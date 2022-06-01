---
title: ':only-child'
slug: Web/CSS/:only-child
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.only-child
translation_of: Web/CSS/:only-child
---
{{CSSRef}}

**`:only-child`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素がない要素を表します。 `:first-child:last-child` または `:nth-child(1):nth-last-child(1)` と同じですが、詳細度はより低くなります。

```css
/* 親の唯一の子である <p> 要素をすべて選択 */
p:only-child {
  background-color: lime;
}
```

> **Note:** 最初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。

## 構文

{{csssyntax}}

## 例

### 基本的な例

#### HTML

```html
<div>
  <div>I am an only child.</div>
</div>

<div>
  <div>I am the 1st sibling.</div>
  <div>I am the 2nd sibling.</div>
  <div>I am the 3rd sibling, <div>but this is an only child.</div></div>
</div>
```

#### CSS

```css
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
```

#### 結果

{{EmbedLiveSample('Basic_example','100%',180)}}

### リストの例

#### HTML

```html
<ol>
  <li>First
    <ul>
      <li>This list has just one element.</li>
    </ul>
  </li>
  <li>Second
    <ul>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
```

#### 結果

{{EmbedLiveSample('A_list_example', '100%', 210)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}
