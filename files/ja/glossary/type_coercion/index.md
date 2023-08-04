---
title: Type coercion (型強制)
slug: Glossary/Type_coercion
---

型強制 (Type coercion) は、あるデータ型から他のデータ型への値の自動的または暗黙の変換です (文字列から数値など)。*{{Glossary("Type conversion", "型変換")}}*と*型強制*はよく似ており、どちらもある型から他の型へ値を変換しますが、一つ重要な違いがあります。*型強制*は暗黙的であるのに対し、*型変換*は暗黙的*または*明示的のどちらかです。

## 例

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

上記の例では、 JavaScript は `9` を数値から文字列に*型強制*し、両者を結合するので、結果は文字列の `59` になります。 JavaScript は文字列と数値の何れかを選択する必要があり、文字列を使用するよう決定します。

コンパイラーは `5` を数値に強制して、合計値である `14` を返すこともできましたが、そうしませんでした。この結果を返すには、 {{jsxref("Global_Objects/Number", "Number()")}} メソッドを用いて明示的に `5` を数値に変換することができます。

```js
sum = Number(value1) + value2;
```

1. [用語集](/ja/docs/Glossary)

   1. {{Glossary("Type", "型")}}
   2. {{Glossary("Type conversion", "型変換")}}

2. Wikipedia の記事

   1. [型変換](https://ja.wikipedia.org/wiki/型変換)
