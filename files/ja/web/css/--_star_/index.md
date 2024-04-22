---
title: "カスタムプロパティ (--*): CSS 変数"
slug: Web/CSS/--*
l10n:
  sourceCommit: 8318078e0cf65cd4d56e80376c03019dcb292dc1
---

{{CSSRef}}

接頭辞 `--` が付いたプロパティ名、例えば `--example-name` は、*カスタムプロパティ*を表し、 {{cssxref("var", "var()")}} 関数を用いて他の宣言の中で使用することができる値を持ちます。

カスタムプロパティは宣言された要素のスコープになり、カスケードに関連します。そのようなカスタムプロパティの値は、カスケードのアルゴリズムによって決められた宣言から取られます。

{{CSSInfo}}

## 構文

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaration-value>`
  - : この並びに許可されていないトークンが含まれていない限り、この値は 1 つ以上のトークンの並びに一致します。つまり、有効な宣言がその値として保持できるものすべてを意味します。

> **メモ:** カスタムプロパティ名は大文字・小文字の区別があります。 `--my-color` は `--My-color` とは別なカスタムプロパティとして扱われます。

### 形式文法

{{CSSSyntax}}

## 例

### HTML

```html
<p id="firstParagraph">この段落は青色の背景で黄色のテキストとなります。</p>
<p id="secondParagraph">この段落は黄色の背景で青色のテキストとなります。</p>
<div id="container">
  <p id="thirdParagraph">この段落は緑色の背景で黄色のテキストとなります。</p>
</div>
```

### CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### 結果

{{EmbedLiveSample('Example', 500, 130)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 変数の使用](/ja/docs/Web/CSS/Using_CSS_custom_properties)
- {{cssxref("var", "var()")}} 関数
