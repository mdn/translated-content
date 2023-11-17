---
title: Code unit (コードユニット)
slug: Glossary/Code_unit
l10n:
  sourceCommit: 1e0e8f74b6e22d43be7d7e63693a1ca4016cb291
---

**コードユニット** とは、文字エンコーディングシステムで用いられる UTF-8 や UTF-16 といった基本的構成要素です。文字エンコーディングシステムは Unicode {{Glossary("code point","コードポイント")}} をエンコードするためにひとつもしくは複数のコードユニットを用います。

UTF-16 （ JavaScript 文字列で用いられるエンコーディングシステム）では、コードユニットは 16 ビットの値です。このことはつまり、文字列にインデックスを付けたり、文字列の長さを取得するためのオペレーションは、これらの 16 ビットユニット上で操作されることを意味します。これらのユニットは我々が文字列と考えるものと常に 1 対 1 で関連付けるわけではありません。

例えば、強調表示のような発音記号を含む文字列は時々、ふたつの Unicode コードポイントを用いて表されます：

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

また、 Unicode で定義されている全てのコードポイントが 16 ビットに収まるわけではないため、多くの Unicode コードポイントは _サロゲートペア_ と呼ばれる UTF-16 コードユニットのペアでエンコードされています：

```js
const face = "🥵";
console.log(face.length); // 2
```

JavaScript {{jsxref("String")}} オブジェクトの {{jsxref("String/codePointAt", "codePointAt()")}} メソッドは、そのエンコードされたフォームから Unicode コードポイントを取得することを可能にさせます：

```js
const face = "🥵";
console.log(face.codePointAt(0)); // 129397
```

## 関連項目

- [Unicode encoding FAQ](https://www.unicode.org/faq/utf_bom.html)
