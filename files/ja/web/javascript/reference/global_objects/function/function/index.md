---
title: Function() コンストラクター
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Function()`** コンストラクターは、新しい {{jsxref("Function")}} オブジェクトを生成します。コンストラクターを直接呼び出すと動的に関数を生成することができますが、セキュリティや、 {{jsxref("Global_Objects/eval", "eval()")}} と似た性能の（ただし、はるかに重要性の低い）問題を抱えます。ただし `eval` とは異なり、 `Function` コンストラクターはグローバルスコープで実行される関数のみを生成します。

{{InteractiveExample("JavaScript デモ: Function() コンストラクター", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// 期待される出力結果: 8
```

## 構文

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `Function()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出すことができます。どちらも新しい `Function` インスタンスを作成します。

### 引数

- `arg1`, …, `argN` {{optional_inline}}
  - : 関数で仮引数名として使用される名前。それぞれ、JavaScript で有効な引数（プレーン[識別子](/ja/docs/Glossary/Identifier)、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[分割](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)引数のいずれか、オプションで[既定](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)値付き）に対応する文字列、またはカンマで区切られたそのような文字列のリストでなければなりません。

    引数は関数式と同様に解釈できるため、空白やコメントも受け入れられます。例えば、`"x", "theValue = 42", "[a, b] /* 数値 */"`、または `"x, theValue = 42, [a, b] /* 数値 */"` です。（`"x, theValue = 42", "[a, b]"` も正しいですが、とても読みづらいです。）

- `functionBody`
  - : 関数定義を形成する JavaScript の文を含む文字列です。

## 解説

`Function` コンストラクターで生成された `Function` オブジェクトは、関数が作成されたときに構文解析されます。これは、関数を[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)または[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)を使って定義してコード内で呼び出すと、コードの他の部分と一緒に構文解析されるため、それに比べて効率が落ちます。

関数に渡される引数のうち、最後のものを除くすべては、渡された順番で、作成する関数の引数の識別子名として扱われます。関数は、次の方法でソースを組み立てることで、関数式として動的にコンパイルされます。

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

これは、この関数の [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) メソッドを呼び出すことで観察することができます。

しかし、通常の[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)とは異なり、 `anonymous` の名前は `functionBody` のスコープには追加されません。 `functionBody` はグローバルスコープにしかアクセスしないためです。 `functionBody` が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でない場合（本体自体に `"use strict"` ディレクティブを指定する必要があるのは、コンテキストから厳格性が継承されないためです）、 [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) を使用して関数自体を参照することができます。あるいは、再帰的な部分を内部関数として定義することもできます。

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

なお、組み立てられたソースの 2 つの動的な部分、すなわち、引数リスト `args.join(",")` および `functionBody` は、最初の段階で別個に構文解析され、それぞれ構文的に有効であることが保証されます。これにより、インジェクションのような試みを防止します。

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// "function anonymous(/*) {*/) {}" にはならない
```

## 例

### Function コンストラクターに引数を指定する

以下のコードは 2 つの引数を取る `Function` オブジェクトを生成します。

```js
// この例は JavaScript コンソールで直接実行することができます

// 2 つの引数を取り、その合計を返す関数を生成します
const adder = new Function("a", "b", "return a + b");

// 関数を呼び出します
adder(2, 6);
// 8
```

引数 `a` および `b` は関数の本体 `return a + b` の中で使用される形式的な仮引数名です。

### 関数宣言または関数式から関数オブジェクトを作成

```js
// function コンストラクターは、セミコロンで区切られた複数の文を受け取ることができます。関数式では、関数名付きの return 文が要求されます。

// 新しい関数が呼び出されることを監視します。これは、その後すぐに作成した関数を呼び出すことができるようにするためです。
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// 関数を呼び出す
sumOfArray([1, 2, 3, 4]);
// 10

// 新しい関数を呼び出す際にこの点を考慮しない場合、 Function.call() メソッドを使用して関数を呼び出すことができます。
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);

// 関数の呼び出し
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// 関数宣言には return 文は必要ない
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// 関数を呼び出し
sayHello("world");
// Hello, world
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "関数", "", 1)}}
