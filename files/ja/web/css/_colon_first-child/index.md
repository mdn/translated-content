---
title: :first-child
slug: Web/CSS/:first-child
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

**`:first-child`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中で最初の要素を表します。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-child.html", "tabbed-shorter")}}

## 構文

```css
:first-child {
  /* ... */
}
```

## 例

### 基本的な例

#### HTML

```html live-sample___basic_example
<div>
  <p>このテキストは選択されます。</p>
  <p>このテキストは選択されません。</p>
</div>

<div>
  <h2>このテキストは選択されません。: `p` ではありません。</h2>
  <p>このテキストは選択されません。</p>
</div>
```

#### CSS

```css live-sample___basic_example
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample('Basic_example', 500, 200)}}

### リストのスタイル設定

#### HTML

```html live-sample___styling_a_list
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
  <li>
    アイテム 3
    <ul>
      <li>アイテム 3.1</li>
      <li>アイテム 3.2</li>
      <li>アイテム 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css live-sample___styling_a_list
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### 結果

{{EmbedLiveSample('Styling_a_list')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
