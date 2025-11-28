---
title: :first-of-type
slug: Web/CSS/Reference/Selectors/:first-of-type
original_slug: Web/CSS/:first-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:first-of-type`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、兄弟要素のグループの中でその種類の最初の要素を表します。

{{InteractiveExample("CSS デモ: :first-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:first-of-type {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>野菜:</dt>
  <dd>1. トマト</dd>
  <dd>2. キュウリ</dd>
  <dd>3. キノコ</dd>
  <dt>果物:</dt>
  <dd>4. リンゴ</dd>
  <dd>5. マンゴー</dd>
  <dd>6. ナシ</dd>
  <dd>7. オレンジ</dd>
</dl>
```

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

この例は、入れ子になった要素を対象に含める方法を示します。なお、要素型セレクターが書かれていない場合は、[全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors) (`*`) が暗黙に含まれます。

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
