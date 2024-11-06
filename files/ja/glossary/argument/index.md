---
title: Argument (実引数)
slug: Glossary/Argument
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

**実引数**は{{Glossary("function", "関数")}}の入力として渡される{{Glossary("value", "値")}}（{{Glossary("primitive", "プリミティブ")}}または{{Glossary("object", "オブジェクト")}}）です。

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

// この関数は単一の値を取るので、渡された第 2 引数は無視される。
function example(parameter) {
  console.log(parameter); // 出力 = foo
}
```

## 関連情報

- [仮引数と実引数の違い](http://ja.wikipedia.org/wiki/引数)（ウィキペディア）
- {{glossary("JavaScript")}} の {{jsxref("Functions/arguments","arguments")}} オブジェクト
