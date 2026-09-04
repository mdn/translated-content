---
title: xml:lang
slug: Web/SVG/Reference/Attribute/xml:lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{Deprecated_Header}}

**`xml:lang`** 属性は、特定の要素のテキストコンテンツが含まれている内容や属性で使用される主要な言語を指定します。

これは、要素に含まれる自然言語をマークアップするために、すべての XML 派生言語ですることができる汎用属性です。

同時に、{{SVGAttr("lang")}} という属性（名前空間なし）もあります。両方が定義されている場合、名前空間のある方が使用され、名前空間のない方は無視されます。

## 要素

この属性は、どのSVG要素でも使用できます。

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

## 例s

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text xml:lang="en-US">This is some English text</text>
</svg>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XML 仕様書の `xml:lang`](https://www.w3.org/TR/xml/#sec-lang-tag)<sup>(英語)</sup>
- {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}
