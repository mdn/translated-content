---
title: IIFE (即時実行関数式)
slug: Glossary/IIFE
---

**IIFE** (Immediately Invoked Function Expression; 即時実行関数式) は定義されるとすぐに実行される {{glossary("JavaScript")}} の {{glossary("function", "関数")}} です。

```js
(function () {
    文
})();
```

このデザインパターンは{{glossary("Self-Executing Anonymous Function", "自己実行無名関数")}}とも呼ばれ、次の 2 つの主な部分から成ります。

1. 最初の部分は {{jsxref("Operators/Grouping", "グループ化演算子")}} `()` に囲まれた静的スコープ付きの無名関数です。これは IIFE イディオム内で、汚いグローバルスコープと同様に変数へアクセスすることを防ぎます。
2. 2 つ目の部分は即時実行関数式の `()` で、これを通じて JavaScript エンジンは直接関数を解釈実行します。

## 例

この関数は即時実行される関数式になります。関数式内の変数は外部からアクセスできません。

```js
(function () {
    var aName = "Barry";
})();
// 変数 aName はスコープ外からアクセスできません
aName // "Uncaught ReferenceError: aName is not defined" が発生します
```

IIFE を変数に代入することはその結果だけが保存されます。

```js
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```

1. 学習記事

    1. [簡単な例](/ja/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) (「関数」の節の最後、「カスタムオブジェクト」の直前)

2. Wikipedia の記事

    1. [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (英語)

3. [用語集](/ja/docs/Glossary)

    1. {{Glossary("Function", "関数")}}
    2. {{Glossary("Self-Executing Anonymous Function", "自己実行無名関数")}}
