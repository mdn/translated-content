---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: d5b04c7f6cc34a74802f62b742321e9300a97862
---

{{jsSidebar("Statements")}}

**`const`** 宣言は定数を宣言し、これは [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) キーワードを使って宣言する変数と同様にブロックスコープを持ちます。定数の値は、再代入（すなわち[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment) の使用）による変更ができず、再宣言（すなわち[変数宣言](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)）もできません。しかし、定数が[オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)または[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)であった場合、そのプロパティやアイテムは更新したり削除したりすることができます。

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## 構文

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 定数名。正当な{{Glossary("identifier", "識別子")}}ならば、何でもかまいません。
- `valueN`
  - : 定数の値。正当な式ならば、関数式を含め、何でもかまいません。

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文を使用して、定数を宣言することもできます。

```js
const { bar } = foo; // where foo = { bar: 10, baz: 12 };
/* これは、値が 10 の 'bar' という名前の変数を作成します。*/
```

## 解説

この宣言は、宣言された場所に応じて、グローバルまたはブロック内にローカルなスコープを持った定数を作成します。グローバルな定数は {{jsxref("Statements/var", "var")}} 変数とは異なり、 {{jsxref("globalThis")}} オブジェクトのプロパティには**なりません**。

定数には初期化子が必要です。その値は、宣言と同じ文の中で指定しなければなりません。（後から変更できないことを考えると、これは理にかなっています。）

`const` 宣言は、値への読み取り専用の参照を作成します。これは、定数に保持されている値は不変ではなく、その変数の識別子が再代入できないということです。たとえば、定数の中身がオブジェクトの場合、オブジェクトの内容（プロパティなど）は変更可能です。

[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)に関する考慮事項はすべて、{{jsxref("Statements/let", "let")}} と `const` の両方に適用されます。このため `const` 宣言は一般的に[巻き上げされない](/ja/docs/Glossary/Hoisting)と考えられています。

定数は、同じスコープ内の関数や変数と同じ名前にすることはできません。

Firefox のウェブコンソール (**ツール** > **ウェブ開発者** > **ウェブコンソール**) などの REPL で実験しているときに、同じ名前の `const` 宣言を 2 つの入力で実行すると、同じ再宣言エラーが発生することがあります。この課題については、[Firefox bug 1580891](https://bugzil.la/1580891)で詳しく議論されていますので、ご覧ください。Chrome コンソールでは、異なる REPL 入力間でのクラスの再宣言が可能です。

`var` とは異なり、`const` は[宣言であり、文ではありません](/ja/docs/Web/JavaScript/Reference/Statements#文と宣言の違いについて)。 つまり、ブロックの本体として単独の `const` 宣言を使用することはできません（変数にアクセスする方法がないため、理にかなっています）。

```js example-bad
if (true) const a = 1; // SyntaxError: Unexpected token 'const'
```

## 例

### 基本的な定数の使い方

定数は大文字または小文字で宣言することができますが、すべて大文字で宣言するのが慣例です。

```js
// MY_FAV を定数として定義して、その値を 7 にします
const MY_FAV = 7;

// これはエラーが発生します - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV は 7 です
console.log("my favorite number is: " + MY_FAV);

// 定数を再宣言しようとするとエラーが発生します
// Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// MY_FAV という名前は上記の定数のために予約されているので、これも失敗します
var MY_FAV = 20;

// これもエラーが発生します
let MY_FAV = 20;
```

### ブロックスコープ

ブロックスコープの性質に注意することが重要です。

```js
if (MY_FAV === 7) {
  // これは問題なく、ブロックスコープの MY_FAV 変数を作成します
  // (ブロックスコープの変数を宣言する let も問題なく機能します)
  let MY_FAV = 20;

  // MY_FAV は現在 20 です。
  console.log("my favorite number is " + MY_FAV);

  // これはグローバルコンテキストに巻き上げられ、エラーが発生します
  var MY_FAV = 20;
}

// MY_FAV は 7 のままです
console.log("my favorite number is " + MY_FAV);
```

### 定数は初期化が必要

```js example-bad
// エラーが発生します
// Uncaught SyntaxError: Missing initializer in const declaration

const FOO;
```

### オブジェクトと配列の定数

`const` はオブジェクトや 配列にも作用します。オブジェクトを上書きしようとすると、"Assignment to constant variable" というエラーが発生します。

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

しかし、オブジェクトのキーは保護されていないので、次の文は問題なく実行されます。

```js
MY_OBJECT.key = "otherValue";
```

オブジェクトを不変にするには、[`Object.freeze()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) を使用する必要があります。

配列も同様です。新しい配列を変数に割り当て要とすると、"Assignment to constant variable" のエラーが発生します。

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

しかし、配列にアイテムを追加することはでき、変更は可能です。

```js
MY_ARRAY.push("A"); // ["A"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [JavaScript ガイドの定数](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#定数)
