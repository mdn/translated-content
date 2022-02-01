---
title: 全称セレクター
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - リファレンス
  - セレクター
browser-compat: css.selectors.universal
translation_of: Web/CSS/Universal_selectors
---
{{CSSRef}}

CSS の**全称セレクター** (universal selector) (`*`) は、すべての種類の要素に一致します。

```css
/* すべての要素を選択 */
* {
  color: green;
}
```

全称セレクターは {{CSSXref("@namespace")}} を使用して名前空間を付けることができます。これは、複数の名前空間を含む文書、例えば HTML5 とインライン SVG または MathML、または複数の語彙が混在した XML などを扱うのに有用です。

- `ns|*` - 名前空間 _ns_ の中ですべての要素に一致します
- `*|*` - すべての要素に一致します
- `|*` - 名前空間が宣言されていないすべての要素に一致します

## 構文

```css
* { スタイルプロパティ }
```

アスタリスクは単純セレクターを伴う場合に省略可能です。たとえば、 `*.warning` と `.warning` は等価です。

## 例

### CSS

```css
* [lang^=en] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left
}

/* 浮動要素の後の兄弟要素で自動的に浮動を解除する */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>
```

### 結果

{{EmbedLiveSample('Examples')}}

### 名前空間

この例では、セレクターは example 名前空間内の要素にのみ一致します。

```css
@namespace example url(http://www.example.com);
example|* { color: blue }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)
- [CSS の学習: セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)
