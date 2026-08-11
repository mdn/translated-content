---
title: lang
slug: Web/SVG/Reference/Attribute/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`lang`** 属性は、具体的な要素のテキストコンテンツが含まれている内容や属性で使用される主要な言語を指定します。

また、{{SVGAttr("xml:lang")}} 属性（名前空間付き）もあります。両方が定義されている場合、名前空間付きのものが使用され、名前空間のないものは無視されます。

SVG 1.1 では、`lang` 属性が別の意味で定義されており、`<glyph>` 要素にのみ適用されていました。この属性は、{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}のリストを指定するものでした。このグリフは、`xml:lang` 属性の値が、この引数の値で指定された言語のいずれかと完全に一致する場合、または `xml:lang` 属性の値が、この引数の値で指定された言語のいずれかの接頭辞と完全に一致し、かつその接頭辞に続く最初のタグ文字が "-" である場合に使用されることを意図していました。

この属性は、どの SVG 要素でも使用できます。

## 例

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text lang="ja">これは日本語のテキストです</text>
</svg>
```

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;language-tag></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `<language-tag>`
  - : この値は、その要素に使用される言語を、有効な{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}として指定します。

    最も一般的な構文は、言語を表す小文字の 2 文字の部分と、地域または国を表す大文字の 2 文字の部分をマイナス記号で別個に区切った形式です。例えば、米国英語は `en-US`、オーストリアのドイツ語は `de-AT` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}
