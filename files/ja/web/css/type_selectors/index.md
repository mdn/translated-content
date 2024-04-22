---
title: 要素型セレクター
slug: Web/CSS/Type_selectors
---

{{CSSRef}}

CSS の**要素型セレクター** (type selector) は、ノード名で要素を一致させます。つまり、文書内にある指定された型の要素をすべて選択します。

```css
/* すべての <a> 要素。 */
a {
  color: red;
}
```

要素型セレクターは {{CSSXref("@namespace")}} を使用して名前空間を付けることができます。これは、複数の名前空間を含む文書、例えば HTML5 とインライン SVG または MathML、または複数の語彙が混在した XML などを扱うのに有用です。

- `ns|h1` - 名前空間 _ns_ の中で `<h1>` 要素に一致します
- `*|h1` - `<h1>` 要素に一致します
- `|h1` - 名前空間が宣言されていない `<h1>` 要素に一致します

## 構文

```css
要素名 { スタイルプロパティ }
```

## 例

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>テキストを持つ span です。</span>
<p>テキストを持つ p です。</p>
<span>追加のテキストを持つ span です。</span>
```

### 結果

{{EmbedLiveSample('Examples', '100%', 150)}}

### 名前空間

この例では、セレクターは example 名前空間内の `<h1>` 要素にのみ一致します。

```css
@namespace example url(http://www.example.com);
example|h1 {
  color: blue;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)
- [CSS の学習: セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)
