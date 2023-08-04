---
title: "Null"
slug: Glossary/Null
---

コンピュータサイエンス分野において、一般的に **`null`** という値は、存在しないまたは無効な{{glossary("object","オブジェクト")}}やアドレスへのポインター参照を表します。 null による参照が持つ意味は、言語実装によって様々です。

{{Glossary("JavaScript")}} では、 `null` は動作がプリミティブらしく見えるので、{{Glossary("Primitive", "プリミティブ値")}}の一つであるとされています。

しかし、場合によっては、 `null` はそれらしく見えても「プリミティブ」ではありません。あらゆるオブジェクトが `null` 値から派生しており、そのため `typeof` で検査すると `object` が返るという一面もあります。

```js
typeof null === "object"; // true
```

- **[用語集](/ja/docs/Glossary)**

  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "文字列")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}

- [JavaScript のデータ型](/ja/docs/Web/JavaScript/Data_structures)
- JavaScript のグローバルオブジェクト: {{jsxref("null")}}
- Wikipedia 上の記事「[Null](https://ja.wikipedia.org/wiki/Null)」
