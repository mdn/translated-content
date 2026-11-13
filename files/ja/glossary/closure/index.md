---
title: Closure (クロージャ)
slug: Glossary/Closure
l10n:
  sourceCommit: f2497dd4077c67b7832a466868fd5c828df40ec1
---

コンピュータプログラミングにおいて、**クロージャ**とは、{{glossary("first-class function", "第一級関数")}}を持つ言語において、字句的に{{glossary("scope", "スコープ化")}}された名前バインディングを実装するための手法です。

{{glossary("JavaScript")}} では、{{glossary("function", "関数")}}がクロージャのコンテキストを作成します。
以下のコードが示すように、内側の関数は `count` 変数へのアクセスを、`createCounter()` の実行が完了した後でも維持します。

```js
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

## 関連情報

- [JavaScript におけるクロージャ](/ja/docs/Web/JavaScript/Guide/Closures)
- [クロージャ](https://ja.wikipedia.org/wiki/クロージャ) - ウィキペディア
