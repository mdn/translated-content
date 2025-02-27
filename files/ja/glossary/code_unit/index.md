---
title: Code unit (コード単位)
slug: Glossary/Code_unit
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**コード単位** とは、文字エンコーディングシステムで用いられる（UTF-8 や UTF-16 などの）基本的構成要素です。文字エンコーディングシステムは Unicode {{Glossary("code point","コードポイント")}}をエンコードするためにひとつもしくは複数のコード単位を用います。

UTF-16 （JavaScript 文字列で用いられるエンコーディングシステム）では、コード単位は 16 ビットの値です。このことはつまり、文字列にインデックスを付けたり、文字列の長さを取得するためのオペレーションは、これらの 16 ビット単位で操作されることを意味します。これらの単位は我々が文字列と考えるものと常に 1 対 1 で関連付けるわけではありません。

例えば、強調表示のような発音記号を含む文字列は、 2 つの Unicode コードポイントを用いて表されることがあります。

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

また、 Unicode で定義されている全てのコードポイントが 16 ビットに収まるわけではないため、多くの Unicode コードポイントは _サロゲートペア_ と呼ばれる UTF-16 コード単位のペアでエンコードされています：

```js
const face = "🥵";
console.log(face.length); // 2
```

JavaScript の {{jsxref("String")}} オブジェクトの {{jsxref("String/codePointAt", "codePointAt()")}} メソッドは、そのエンコードされた形から Unicode コードポイントを取得することができます。

```js
const face = "🥵";
console.log(face.codePointAt(0)); // 129397
```

## 関連情報

- [Unicode encoding FAQ](https://www.unicode.org/faq/utf_bom.html)
