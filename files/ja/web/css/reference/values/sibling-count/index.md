---
title: sibling-count()
slug: Web/CSS/Reference/Values/sibling-count
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`sibling-count()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、それが使用されている要素の兄弟 DOM 要素（親要素の直接の子）の総数（自分自身を含む）を表す整数を返します。

> [!NOTE]
> {{CSSxRef("counter()")}} 関数は同様の結果を `<string>` で返す（これは[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)により適しています）のに対し、 `sibling-index()` は `<integer>` で返します（これは計算に使用することができます）。

## 構文

```css-nolint
sibling-count()
```

### 引数

`sibling-count()` 関数は引数を取りません。

### 返値

整数。この要素自身を含む、兄弟 DOM 要素の総数です。

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
  <li>Five</li>
</ul>
```

#### CSS

それぞれのリストアイテムの {{CSSxRef("width")}} を、そのリストが含む直接の子要素の数で割ります。同時に、結果の効果をより明確に示すため、奇数番目の要素にはすべて {{CSSxRef("background-color")}} を設定します。

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
}

li {
  width: calc(100% / sibling-count());
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
