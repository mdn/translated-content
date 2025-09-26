---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Function`** オブジェクトは[関数](/ja/docs/Web/JavaScript/Reference/Functions)についてのメソッドを提供します。 JavaScript では、すべての関数が実際には `Function` オブジェクトです。

## コンストラクター

- {{jsxref("Function/Function", "Function()")}}
  - : 新しい `Function` オブジェクトを生成します。コンストラクターを直接呼び出すと関数を動的に生成することができますが、セキュリティや、 {{jsxref("Global_Objects/eval", "eval()")}} と似た性能の (ただし、はるかに重要性の低い) 問題を抱えます。ただし `eval()` とは異なり、 `Function` コンストラクターはグローバルスコープで実行される関数のみを生成します。

## インスタンスプロパティ

以下のプロパティは `Function.prototype` で定義されており、すべての `Function` インスタンスで共有されています。

- {{jsxref("Function.prototype.arguments")}} {{deprecated_inline}} {{non-standard_inline}}
  - : この関数に渡された引数を表します。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)、アロー関数、非同期関数、ジェネレーター関数については、 `arguments` プロパティにアクセスすると {{jsxref("TypeError")}} が発生します。代わりに関数のクロージャ内で {{jsxref("Functions/arguments", "arguments")}} オブジェクトを使用してください。
- {{jsxref("Function.prototype.caller")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 現在実行している関数を呼び出した関数を返します。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)、アロー関数、非同期関数、ジェネレーター関数については、 `arguments` プロパティにアクセスすると {{jsxref("TypeError")}} が発生します。
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。 `Function` のインスタンスの場合、初期値は {{jsxref("Function/Function", "Function")}} コンストラクターです。

以下のプロパティは、それぞれの `Function` インスタンスが自分自身で持つプロパティです。

- {{jsxref("Function/displayName", "displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : 関数の表示名です。
- {{jsxref("Function/length", "length")}}
  - : 関数によって期待される引数の数を指定します。
- {{jsxref("Function/name", "name")}}
  - : 関数の名前です。
- {{jsxref("Function/prototype", "prototype")}}
  - : [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子付きでコンストラクターとして関数を使用する場合に使用されます。新しいオブジェクトのプロトタイプとなります。

## インスタンスメソッド

- {{jsxref("Function.prototype.apply()")}}
  - : 指定された `this` 値とオプションで引数を配列（または[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)）として渡し、指定された関数を呼び出します。
- {{jsxref("Function.prototype.bind()")}}
  - : 新しい関数を作成し、呼び出されたときに、 `this` を指定された値に設定します。オプションで、指定された一連の引数が、新しく結びつけられた関数が呼び出されたときに与えられた引数の前に付加されます。
- {{jsxref("Function.prototype.call()")}}
  - : 指定された `this` 値とオプションで引数を渡し、指定された関数を呼び出します。
- {{jsxref("Function.prototype.toString()")}}
  - : 関数のソースコードを表す文字列を返します。
    {{jsxref("Object.prototype.toString")}} メソッドを上書きします。
- [`Function.prototype[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : コンストラクター関数が、オブジェクトをコンストラクターのインスタンスの 1 つとして認識するかどうかを判断するための、既定の手順を指定します。 [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子によって呼び出されます。

## 例

### Function コンストラクターと関数宣言の違い

`Function` コンストラクターで生成された関数は、生成コンテキストにクロージャを作りません。つまり常にグローバルスコープで生成されます。これを実行すると、 `Function` コンストラクターの呼び出し元のスコープは入らず、自身のローカル変数とグローバル変数だけにアクセスできます。これは関数式のコードに {{jsxref("Global_Objects/eval", "eval()")}} を使うのとは異なります。

```js
// `var` でグローバルプロパティを作成
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // この `x` はグローバルの `x` を表す
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // この `x` は上記のローカルの `x` を表す
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

このコードはウェブブラウザーでは動作しますが、 Node.js では `f1()` で `ReferenceError` が発生します。 `x` が見つからないためです。これは Node の最上位のスコープがグローバルスコープではなく、 `x` はモジュールのローカルになるからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "関数", "", 1)}}
