---
title: IIFE (即時実行関数式)
slug: Glossary/IIFE
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

**IIFE** (Immediately Invoked Function Expression; 即時実行関数式) は、定義されるとすぐに実行される {{glossary("JavaScript")}} の{{glossary("function", "関数")}}のイディオムです。これは「自己実行無名関数」としても知られています。IIFE という名前は Ben Alman の[ブログ](https://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)で付けられました。

```js
// 標準的な IIFE
(function () {
  // 文…
})();

// アロー関数形式
(() => {
  // 文…
})();

// 非同期 IIFE
(async () => {
  // 文…
})();
```

これは 2 つの重要な部分を含んでいます。

1. [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)。これは通常、正しく構文解析するために[中括弧で囲む](/ja/docs/Web/JavaScript/Reference/Operators/Grouping)必要があります。
2. その関数式を直ちに呼び出す。引数を指定することもありますが、引数なしの IIFE の方が一般的です。

IIFE は、単一の式が要求される場所で、独自のスコープ内で任意の多数の文を実行する（場合によって値を返す）ために使用される一般的なパターンです。これらは[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)と似ていますが、カンマ演算子は複数の式を実行することしかできず、ローカル変数や制御文を使用する方法が提供されていないため、IIFE のほうがはるかに強力です。

IIFE の主な用途には、次のようなものがあります。

- 新しい{{glossary("scope", "スコープ")}}を作成することにより、グローバル名前空間の汚染を防ぐ。
- 非同期でないコンテキストで {{jsxref("Operators/await", "await")}} を使用するために、新しい非同期コンテキストを作成する。
- 複数の文を単一の式として使用するなど、複雑なロジックを用いた値の計算。

コードの例については、[`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)および [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)のリファレンスページをご覧ください。

## 関連情報

- [即時実行関数式 (IIFE)](https://ja.wikipedia.org/wiki/即時実行関数式)（ウィキペディア）
- [カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- 関連用語:
  - {{Glossary("Function", "関数")}}
