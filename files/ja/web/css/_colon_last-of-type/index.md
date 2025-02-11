---
title: :last-of-type
slug: Web/CSS/:last-of-type
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

**`:last-of-type`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中でその種類の最後の要素を表します。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-last-of-type.html", "tabbed-shorter")}}

## 構文

```css
:last-of-type {
  /* ... */
}
```

## 例

### 最後の段落の整形

#### HTML

```html
<h2>見出し</h2>
<p>段落 1</p>
<p>段落 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample('最後の段落の整形')}}

### 入れ子になった要素

この例は、入れ子になった要素を対象に含める方法を示します。なお、要素型セレクターが書かれていない場合は、[全称セレクター](/ja/docs/Web/CSS/Universal_selectors) (`*`) が暗黙に含まれます。

#### HTML

```html-nolint
<article>
  <div>これは最初の `div` です。</div>
  <div>これは<span>内側で最後の `span`</span> です。</div>
  <div>
    これは<em>内側で最初の `em`</em>で、一方これは<em>最後の `em` </em>です。
  </div>
  <p>これは `p` で修飾しています。</p>
  <div>これは最後の `div` です。</div>
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

### 複数セレクターの要素

この HTML の例では、さまざまな種類の要素が入れ子になっています。 CSS には、型セレクターとクラスセレクターの両方が含まれています。

#### HTML

```html-nolint
<p>この `p` は選択されていません。</p>
<p>この `p` も選択されていません。</p>
<p>
  この `p` は `p` 要素型セレクターで選択された `body` などの親の最後の `p` 要素です。
</p>
<div class="container">
  <div class="item">この `div` は選択されていません。</div>
  <div class="item">この `div` も選択されていません。</div>
  <div class="item">
    この `div` は親 `div` の `.container .item` クラスセレクターで選択される最後の `div` 要素です。
  </div>
  <p class="item">
    この `p` は親 `div` の `.container .item` クラスセレクターで選択される最後の `p` 要素です。
  </p>
</div>
```

#### CSS

```css
p:last-of-type {
  background: skyblue;
}

.container .item:last-of-type {
  color: red;
  font-weight: bold;
}
```

#### 結果

{{EmbedLiveSample('Multiple_selectors_elements', 500)}}

最後の `<div>` と最後の `<p>` はどちらも赤で太字になっています。これは `.item:last-of-type` がすべての型の最後の要素を選択するためで、その最後の要素は `item` クラスも持っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}
