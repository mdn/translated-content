---
title: CSS `:only-child` 擬似クラス
short-title: :only-child
slug: Web/CSS/Reference/Selectors/:only-child
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:only-child`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、兄弟要素がない要素を表します。 `:first-child:last-child` または `:nth-child(1):nth-last-child(1)` と同じですが、詳細度はより低くなります。

{{InteractiveExample("CSS デモ: :only-child", "tabbed-shorter")}}

```css interactive-example
li:only-child {
  color: fuchsia;
}

b:only-child {
  text-decoration: underline;
}
```

```html interactive-example
<p>参加予定のスター:</p>
<ol>
  <li>Robert Downey, Jr.</li>
</ol>

<p>返事待ちのスター:</p>
<ol>
  <li>Scarlett Johansson</li>
  <li>Samuel L. Jackson</li>
  <li>Chris Pratt</li>
</ol>

<p>授賞式は、<b>ドルビーシアター</b>で開催されます。</p>
```

## 構文

```css
:only-child {
  /* ... */
}
```

## 例

### 基本的な例

#### HTML

```html
<div>
  <div>これは単独の子です。</div>
</div>

<div>
  <div>これは 1 つ目の兄弟です。</div>
  <div>これは 2 つ目の兄弟です。</div>
  <div>
    これは 3 つ目の兄弟です。
    <div>ただし、これは単独の子です。</div>
  </div>
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
  <li>
    その 1
    <ul>
      <li>このリストには 1 つだけ要素があります。</li>
    </ul>
  </li>
  <li>
    その 2
    <ul>
      <li>このリストには 3 つの要素があります。</li>
      <li>このリストには 3 つの要素があります。</li>
      <li>このリストには 3 つの要素があります。</li>
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
