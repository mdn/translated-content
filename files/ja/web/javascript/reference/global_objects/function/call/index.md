---
title: Function.prototype.call()
short-title: call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`call()`** は {{jsxref("Function")}} インスタンスのメソッドで、 `this` の値と、独立して提供された引数によって関数を呼び出します。

{{InteractiveExample("JavaScript デモ: Function.prototype.call()")}}

```js interactive-example
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// 期待される出力結果: "cheese"
```

## 構文

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### 引数

- `thisArg`
  - : `func` が呼び出されたときに `this` として使用される値です。関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でない場合、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) と [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) はグローバルオブジェクトに置き換わり、プリミティブ値はオブジェクトに変換されます。
- `arg1`, …, `argN` {{optional_inline}}
  - : 呼び出し先の関数に渡される引数です。

### 返値

`this` の値と引数を指定して関数を呼び出した結果です。

## 解説

> [!NOTE]
> この関数はほぼ {{jsxref("Function/apply", "apply()")}} と同等ですが、 `call()` では関数の引数がリストとして個別に渡されるのに対し、 `apply()` では 1 つのオブジェクト、通常は配列にまとめられます。例えば、 `func.call(this, "eat", "bananas")` と `func.apply(this, ["eat", "bananas"])` のようになります。

通常、関数を呼び出す場合、関数内の [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値は、その関数がアクセスされたオブジェクトです。 `call()` を使用すると、既存の関数を呼び出す際に、最初のプロパティとしてオブジェクトにその関数を添付することなく、 `this` に任意の値を割り当てることができます。これにより、あるオブジェクトのメソッドを汎用のユーティリティ関数として使用することができます。

> [!WARNING]
> コンストラクターを連結する（例えば、継承を実装する）ために `call()` を使用しないでください。これは、コンストラクター関数を単なる関数として呼び出すことになり、つまり [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) が `undefined` となり、クラスがエラーを発生します。これは、 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) なしで呼び出されるためです。代わりに {{jsxref("Reflect.construct()")}} または [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) を使用してください。

## 例

### call を使用した関数を呼び出しと 'this' のコンテキストの指定

次の例では、 `greet` メソッドを呼ぶとき、`this` の値を `obj` オブジェクトにバインドしています。

```js
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### call() を使用した最初の引数を指定しない関数の呼び出し

最初の `thisArg` 引数を省略すると、既定では `undefined` となります。 厳格モード以外では、 `this` の値は `globalThis` （グローバルオブジェクトに類似）に置き換えられます。

```js
globalThis.globProp = "foo";

function display() {
  console.log(`globProp の値は ${this.globProp}`);
}

display.call(); // "globProp の値は foo" と出力
```

厳格モードでは `this` の値は `undefined` になります。以下を参照してください。

```js
"use strict";

globalThis.globProp = "foo";

function display() {
  console.log(`globProp の値は ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### メソッドのユーティリティ関数への変換

`call()` は通常の関数呼び出しとほぼ同様ですが、 `this` が関数のアクセス元の値ではなく、通常の引数として渡される点が異なります。これは、汎用ユーティリティ関数がどのように動作するのかと似ています。 `array.map(callback)` を呼ぶ代わりに、 `map(array, callback)` を使用することで、 `Object.prototype` を変更することなく、配列ではない配列風オブジェクト（例えば [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments)）に対して `map` を使用することができます。

例えば、配列風のオブジェクトを実際の配列に変換するために使用する {{jsxref("Array.prototype.slice()")}} を例に挙げます。 この例では、次のようなショートカットを作成することができます。

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

なお、 `slice.call` を保存して、それを単なる関数として名付けることはできません。 `call()` メソッドもこの値を読み取るため、呼び出すべき関数が指定されてしまうからです。この場合、 {{jsxref("Function/bind", "bind()")}} を使用すると `this` 値を `call()` にバインドすることができます。次のコードでは、 `slice()` は `Function.prototype.call()` のバインド済みバージョンであり、 `this` 値は `Array.prototype.slice()` にバインドされています。つまり、追加の `call()` 呼び出しを省略できるということです。

```js
// 前の例の "slice" と同じ
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// …

slice(arguments);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Reflect.apply()")}}
- [スプレッド構文 (`...`)](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [オブジェクト指向 JavaScript 入門](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
