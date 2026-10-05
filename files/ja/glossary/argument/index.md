---
title: Argument (実引数)
slug: Glossary/Argument
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**実引数**は、{{Glossary("function", "関数")}}の入力として渡される{{Glossary("value", "値")}}（{{Glossary("primitive", "プリミティブ")}}または{{Glossary("object", "オブジェクト")}}）です。関数定義内で実引数を参照するために使用される名前である{{Glossary("parameter","仮引数")}}と混同しないでください。

> [!NOTE]
> （訳注）日本語では、実引数 (argunment) と仮引数 (parameter) をまとめて**引数**と呼ぶのが一般的です。MDN の翻訳記事では、区別が必要な場面を除いて「引数」の用語を使用しています。

例:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // 2 つの引数を渡す

// この関数は 2 つの値を取る
function example(parameter1, parameter2) {
  console.log(parameter1); // 出力 = "Web"
  console.log(parameter2); // 出力 = "Development"
}
```

関数呼び出しにおける実引数の順序は、関数定義内の{{Glossary("parameter", "仮引数")}}の順序と同じでなければなりません。

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // 2 つの実引数を渡す

// この関数は単一の値を取るので、渡された第二引数は無視される。
function example(parameter) {
  console.log(parameter); // 出力 = foo
}
```

## 関連情報

- [仮引数と実引数の違い](http://ja.wikipedia.org/wiki/引数) - ウィキペディア
- JavaScript の {{jsxref("Functions/arguments", "arguments")}} オブジェクト
- 関連用語:
  - {{Glossary("Function", "関数")}}
  - {{Glossary("Parameter", "仮引数")}}
  - {{glossary("JavaScript")}}
