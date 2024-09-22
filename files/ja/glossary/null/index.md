---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 8a3cafa914478bb274d649a95325c4b2dacd07cc
---

{{GlossarySidebar}}

コンピューターサイエンス分野において、一般的に **`null`** という値は、存在しないまたは無効な{{glossary("object","オブジェクト")}}やアドレスへのポインター参照を表します。 null による参照が持つ意味は、言語実装によって様々です。

{{Glossary("JavaScript")}} では、 `null` は動作が{{Glossary("Primitive", "プリミティブ値")}}らしく見えるので、プリミティブの一つであるとされています。しかし、場合によっては、 `null` はそれらしく見えても「プリミティブ」ではありません。あらゆるオブジェクトが `null` 値から派生しており、そのため `typeof` で検査すると `"object"` が返ります。

```js
console.log(typeof null); // "object"
```

これは[バグ](/ja/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)と考えられていますが、あまりにも多くのスクリプトを壊してしまうので修正することができないものです。

## 関連情報

- [JavaScript のデータ型](/ja/docs/Web/JavaScript/Data_structures)
- JavaScript のグローバルオブジェクト: [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)
- [ヌルポインタ](https://ja.wikipedia.org/wiki/ヌルポインタ)（ウィキペディア）
- **関連用語**

  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "文字列")}}
  - {{Glossary("number", "数値")}}
  - {{Glossary("bigint", "長整数")}}
  - {{Glossary("boolean", "論理値")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol", "シンボル")}}
