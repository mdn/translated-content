---
title: Function() コンストラクター
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: 06f8ebf948372dfb6c3c22d26d4f672c99cd4e0d
---

> [!WARNING]
> このコンストラクターに渡された引数は、JavaScript として動的に構文解析され実行されます。このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の経路となる可能性があります。
>
> 文字列の代わりに {{domxref("TrustedScript")}} オブジェクトを常に渡し、[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)することで、このリスクを軽減できます。
>
> 詳しくは[セキュリティ上の注意事項](#セキュリティ上の注意事項)をご覧ください。

**`Function()`** コンストラクターは、新しい {{jsxref("Function")}} オブジェクトを生成します。コンストラクターを直接呼び出すと動的に関数を作成できますが、{{jsxref("Global_Objects/eval", "eval()")}} と同様のセキュリティ上の問題と、重要性ははるかに低いものの同様のパフォーマンス上の問題があります。ただし、ローカルスコープにアクセスできる場合がある `eval` とは異なり、`Function` コンストラクターが生成する関数はグローバルスコープでのみ実行されます。

{{InteractiveExample("JavaScript デモ: Function() コンストラクター", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// 予想される結果: 8
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
  - : 関数の仮引数名を指定する {{domxref("TrustedScript")}} インスタンスまたは文字列です。値は、有効な JavaScript の引数（通常の[識別子](/ja/docs/Glossary/Identifier)、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)引数のいずれかで、任意で[デフォルト](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)値を指定したもの）か、カンマ区切りで並べたそのような文字列のリストに対応していなければなりません。

    引数は関数式と同様に構文解析されるため、空白やコメントも受け入れられます。例えば、`"x", "theValue = 42", "[a, b] /* 数値 */"`、または `"x, theValue = 42, [a, b] /* 数値 */"` です。（`"x, theValue = 42", "[a, b]"` も正しいですが、とても読みづらいです。）

- `functionBody`
  - : 関数定義を構成する JavaScript の文を含む {{domxref("TrustedScript")}} または文字列です。

### 例外

- {{jsxref("SyntaxError")}}
  - : 関数の引数を有効な引数リストとして構文解析できない場合、または `functionBody` を有効な JavaScript の文として構文解析できない場合に発生します。
- {{jsxref("TypeError")}}
  - : CSP によって [信頼型](/ja/docs/Web/API/Trusted_Types_API) が[強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)されており、デフォルトポリシーが定義されていない場合に、引数のいずれかが文字列であると発生します。

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

しかし、通常の[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)とは異なり、`anonymous` という名前は `functionBody` のスコープには追加されません。これは、`functionBody` がグローバルスコープにしかアクセスできないためです。`functionBody` が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でない場合（コンテキストから厳格モードは継承されないため、本体内に `"use strict"` ディレクティブを指定する必要があります）、[`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) を使って関数自体を参照できます。あるいは、再帰処理を内部関数として定義することもできます。

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

### セキュリティ上の注意事項

このメソッドは、いずれかの引数に渡された任意の入力を実行できます。ユーザーが指定した入力が安全でない可能性のある文字列の場合、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の経路となるおそれがあります。例えば、次の例では `untrustedCode` がユーザーから提供されたものとします。

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

[CSP の `script-src` ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)または[CSP の `default-src` ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)を指定した[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) を設定したウェブサイトでは、デフォルトでこのようなコードの実行が禁止されます。`Function()` によるスクリプトの実行を許可する必要がある場合は、文字列の代わりに {{domxref("TrustedScript")}} オブジェクトを常に渡し、[CSP の `require-trusted-types-for` ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)を使って[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)することで、リスクを軽減できます。これにより、入力が変換関数を通過するようになります。

`Function()` の実行を許可するには、CSP の `script-src` ディレクティブで [`trusted-types-eval` キーワード](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)も指定する必要があります。[`unsafe-eval` キーワード](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)でも `Function()` の実行を許可できますが、信頼型に対応していないブラウザーでも実行が許可されるため、`trusted-types-eval` より安全性が大幅に低くなります。

例えば、サイトに必要な CSP は次のようになります。

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

変換関数の動作は、ユーザー提供のスクリプトを必要とする具体的な用途によって異なります。可能であれば、実行を信頼するコードだけを許可するようにしてください。それができない場合は、渡された文字列内で特定の関数の使用を許可または禁止する方法もあります。

## 例

簡潔にするため、以下の例では信頼型の使用を省略しています。推奨される方法を示すコードは、`eval()` の[「TrustedScript の使用」](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#trustedscript_の使用)をご覧ください。

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

// new Function が呼び出されていることに注目してください。これは、作成した関数をその直後に呼び出せるようにするためです。
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// 関数を呼び出す
sumOfArray([1, 2, 3, 4]);
// 10

// 作成時に new Function を呼び出さない場合は、Function.call() メソッドを使用して呼び出せます。
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

- [`eval()` における Function コンストラクターの使用](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#function_コンストラクターの使用)
- [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "関数", "", 1)}}
