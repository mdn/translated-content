---
title: Code unit(コードユニット)
slug: Glossary/Code_unit
---

**コードユニット** とは、文字エンコーディングシステムで用いられるUTF-8やUTF-16といった基本的構成要素です。文字エンコーディングシステムはUnicode {{Glossary("code point","コードポイント")}} をエンコードするためにひとつもしくは複数のコードユニットを用います。


UTF-16（JavaScript文字列で用いられるエンコーディングシステム）では、コードユニットは16ビットの値です。このことはつまり、文字列にインデックスを付けたり、文字列の長さを取得するためのオペレーションは、これらの16ビットユニット上で操作されることを意味します。これらのユニットは我々が文字列と考えるものと常に1対1で関連付けるわけではありません。

例えば、強調表示のような発音記号を含む文字列は時々、ふたつのUnicodeコードポイントを用いて表されます：

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

また、Unicodeで定義されている全てのコードポイントが16ビットに収まるわけではないため、多くのUnicodeコードポイントは _サロゲートペア_ と呼ばれるUTF-16コードユニットのペアでエンコードされています：

```js
const face = "🥵";
console.log(face.length); // 2
```

The {{jsxref("String/codePointAt", "codePointAt()")}} method of the JavaScript {{jsxref("String")}} object enables you to retrieve the Unicode code point from its encoded form:

```js
const face = "🥵";
console.log(face.codePointAt(0)); // 129397
```

## See also

- [Unicode encoding FAQ](https://www.unicode.org/faq/utf_bom.html)
