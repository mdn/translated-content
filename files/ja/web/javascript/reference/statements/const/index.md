---
title: const
slug: Web/JavaScript/Reference/Statements/const
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Reference
  - Statement
  - constants
browser-compat: javascript.statements.const
translation_of: Web/JavaScript/Reference/Statements/const
---
{{jsSidebar("Statements")}}

定数は、[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) キーワードを使って定義する変数と同様にブロックスコープを持ちます。定数の値は、再代入による変更ができず、再宣言もできません。

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## 構文

```js
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];
```

- `nameN`
  - : 定数名。正当な{{Glossary("identifier", "識別子")}}ならば、何でもかまいません。
- `valueN`
  - : 定数の値。正当な[式](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)ならば、関数式を含め、何でもかまいません。

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文を使用して、定数を宣言することもできます。

```js
const { bar } = foo; // where foo = { bar:10, baz:12 };
/* これは、値が 10 の 'bar' という名前の変数を作成します。*/
```

## 解説

この宣言は、宣言された場所に応じて、グローバルまたはブロック内にローカルなスコープを持った定数を作成します。グローバルな定数は {{jsxref("Statements/var", "var")}} 変数とは異なり、{{domxref("window")}} オブジェクトのプロパティには**なりません**。

定数には初期化子が必要です。その値は、宣言されたのと同じ文の中で指定しなければなりません。(後から変更できないことを考えると、これは理にかなっています。)

**`const` 宣言**は、値への読み取り専用の参照を作ります。これは、定数に保持されている値は**不変ではなく**、その変数の識別子が再代入できないということです。たとえば、定数の中身がオブジェクトの場合、オブジェクトの内容（プロパティなど）は変更可能です。</p>

「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone)」に関する考慮事項はすべて、{{jsxref("Statements/let", "let")}} と `const` の両方に適用されます。

定数は、同じスコープ内の関数や変数と同じ名前にすることはできません。

## 例

### 基本的な定数の使い方

定数は大文字または小文字で宣言することができますが、すべて大文字で宣言するのが慣例です。

```js
// MY_FAV を定数として定義して、その値を 7 にします
const MY_FAV = 7;

// これはエラーが発生します - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV は 7 です
console.log('my favorite number is: ' + MY_FAV);

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
  console.log('my favorite number is ' + MY_FAV);

  // これはグローバルコンテキストに巻き上げられ、エラーが発生します
  var MY_FAV = 20;
}

// MY_FAV は 7 のままです
console.log('my favorite number is ' + MY_FAV);
```

### 定数は初期化が必要

```js
// エラーが発生します
// Uncaught SyntaxError: Missing initializer in const declaration

const FOO;
```

### オブジェクトと配列の定数

定数はオブジェクトや配列に対しても動作します。

```js
const MY_OBJECT = {'key': 'value'};

// オブジェクトの上書きはエラーを投げます。
// Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// しかしながら、オブジェクトのキーは保護されていないので、
// 次の文は問題なく実行されます。
MY_OBJECT.key = 'otherValue'; // Object.freeze() を使用すればオブジェクトを不変にできます。

// 配列も同じです。
const MY_ARRAY = [];
// 配列に要素をプッシュすることができます。
MY_ARRAY.push('A'); // ["A"]
// しかしながら、新しい配列を変数に代入するとエラーを投げます。
// Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [JavaScript ガイドの定数](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#Constants)
