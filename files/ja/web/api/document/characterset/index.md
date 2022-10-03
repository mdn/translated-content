---
title: Document.characterSet
slug: Web/API/Document/characterSet
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** プロパティは読み取り専用で、文書の[文字エンコーディング](/ja/docs/Glossary/character_encoding)を表す文字列を返します。 (文字エンコーディングは文字セットであり、入力されたバイト列をどのように文字として解釈するか規定します。)

> **メモ:** 「文字セット」と「文字エンコーディング」は似ていますが違うものです。プロパティ名に反してエンコーディングを返します。

ユーザーは、 [Content-Type](/ja/docs/Web/HTTP/Headers/Content-Type) ヘッダーの中や `<meta charset="utf-8">` などのインラインで開発者が指定した文字エンコーディングを上書きできます。例えば Firefox では <kbd>表示 → テキストエンコーディング</kbd> メニューから可能です。このような上書き手段は開発者が誤って指定したエンコーディングによって[文字化け](https://ja.wikipedia.org/wiki/%E6%96%87%E5%AD%97%E5%8C%96%E3%81%91)を引き起こされたときに直すために提供されています。

> **メモ:** プロパティ `document.charset` および `document.inputEncoding` は、`document.characterSet` への古いエイリアスです。これらは使用しないでください。

## 構文

```js
var string = document.characterSet;
```

## 例

```html
<button onclick="console.log(document.characterSet);">
  Log character encoding
</button>
<!-- "ISO-8859-1" や "UTF-8" など、文書の文字セットが開発者コンソールに表示されます -->
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
