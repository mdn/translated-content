---
title: sibling-count()
slug: Web/CSS/Reference/Values/sibling-count
original_slug: Web/CSS/sibling-count
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

**`sibling-count()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、それが使用されている親要素の直接の子 DOM 要素の総数を表す整数を返します。

> [!NOTE]
> {{CSSxRef("counter()")}} 関数も同様の結果を提供しますが、 `<string>` を返すのに対し、 `sibling-count()` は計算に使用できる `<integer>` を返します。

## 構文

```css
--total-sibling-elements: sibling-count();
```

### 引数

`sibling-count()` 関数は引数を取りません。

### 返値

整数。直接の子DOM要素の総数です。

## 例

### 動的な列カウント

この例では、コンテナーの列の数をその子要素の数と同じに設定し、それぞれの要素を自分自身で列に配置できるようにしています。

#### HTML

{{htmlelement("ul")}} コンテナーと、その子要素である {{htmlelement("li")}} 要素をいくつか設置しています。

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

コンテナーの {{CSSxRef("column-count")}} を、コンテナーに含まれている直接の子要素の数と同じに設定します。また、結果の効果をよりよく示すために、奇数要素に {{CSSxRef("background-color")}} を設定します。

```css
ul {
  column-count: sibling-count();
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li:nth-of-type(odd) {
  background-color: rgb(0 0 0 / 0.05);
}
```

#### 結果

{{EmbedLiveSample("Dynamic column count", "300", "80")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sibling-index()")}}
- {{CSSxRef("calc")}}
