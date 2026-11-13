---
title: 次兄弟結合子
slug: Web/CSS/Reference/Selectors/Next-sibling_combinator
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**次兄弟結合子** (next-sibling combinator, `+`) は 2 つのセレクターを接続し、 2 つ目の要素が 1 つ目の要素の直後にあって、両者が同じ親{{DOMxRef("element", "要素")}}の子同士である場合に一致します。

```css
/* 画像の直後に来る段落 */
img + p {
  font-weight: bold;
}
```

## 構文

```css-nolint
/* 結合子の前後の空白はオプションですが、推奨されます。 */
直前の要素 + 対象の要素 { スタイルプロパティ }
```

## 例

### 基本的な例

この例は、次の兄弟要素が特定の型である場合に選択する方法を示しています。

#### CSS

最初の `<li>` の直後にある `<li>` のみにスタイル設定します。

```css
li:first-of-type + li {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

#### 結果

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### 直前の兄弟を選択

次兄弟結合子は、直前の兄弟要素を選択するために、{{cssxref(":has()")}} 機能セレクター内に含めることができます。

#### CSS

`<li>` 要素の次の兄弟要素が `<li>` で、かつその型の中で最後の要素である場合にのみスタイル設定します。

```css
li:has(+ li:last-of-type) {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three!</li>
  <li>Four</li>
</ul>
```

#### 結果

{{EmbedLiveSample("Selecting a previous sibling", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [後続兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)
