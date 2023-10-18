---
title: ":last-child"
slug: Web/CSS/:last-child
---

{{CSSRef}}

**`:last-child`** は[CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中で最後の要素を表します。

```
/* 兄弟要素の中で最後の <p> を
   すべてを選択 */
p:last-child {
  color: lime;
}
```

> **メモ:** 当初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。

## 構文

```
:last-child
```

## 例

### 基本的な例

#### HTML

```html
<div>
  <p>このテキストは選択されません。</p>
  <p>このテキストは選択されます！</p>
</div>

<div>
  <p>このテキストは選択されません。</p>
  <h2>このテキストは選択されません。 `p` ではありません。</h2>
</div>
```

#### CSS

```css
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample('Basic_example', 500, 200)}}

### リストのスタイル付け

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Styling_a_list')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
