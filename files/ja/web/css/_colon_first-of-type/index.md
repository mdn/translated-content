---
title: :first-of-type
slug: Web/CSS/:first-of-type
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

**`:first-of-type`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中でその種類の最初の要素を表します。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-of-type.html", "tabbed-shorter")}}

## 構文

```css
:first-of-type {
  /* ... */
}
```

## 例

### 最初の段落の整形

#### HTML

```html
<h2>見出し</h2>
<p>段落 1</p>
<p>段落 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample('最初の段落の整形')}}

### 入れ子になった要素

この例は、入れ子になった要素を対象に含める方法を示します。なお、要素型セレクターが書かれていない場合は、[全称セレクター](/ja/docs/Web/CSS/Universal_selectors) (`*`) が暗黙に含まれます。

#### HTML

```html
<article>
  <div>これは最初の `div` です。</div>
  <div>これは<span>内側で最初の `span`</span> です。</div>
  <div>
    これは<em>内側で最初の `em`</em>で、一方これは<em>最後の `em` </em>です。
  </div>
  <div>これは<span>スタイル付けされた内側の `span`</span>です</div>
  <p>これは `p` で修飾しています。</p>
  <div>これは最後の `div` です。</div>
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
