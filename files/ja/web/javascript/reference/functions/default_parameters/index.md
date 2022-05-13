---
title: デフォルト引数
slug: Web/JavaScript/Reference/Functions/Default_parameters
tags:
  - ECMAScript 2015
  - 関数
  - JavaScript
  - 言語機能
  - 関数
browser-compat: javascript.functions.default_parameters
translation_of: Web/JavaScript/Reference/Functions/Default_parameters
---
{{jsSidebar("Functions")}}

**関数のデフォルト引数**は、関数に値が渡されない場合や `undefined` が渡された場合に、デフォルト値で初期化される形式上の引数を指定することができます。

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## 構文

```js
function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) { /* ... */ }
```

## 解説

JavaScript では、関数の引数は、指定しなければ {{jsxref("undefined")}} になります。しかし、別な既定値を設定すると有用な場合がよくあります。そのような場合に、デフォルト引数が役立ちます。

以前は、既定値を設定するための一般的な方法は、関数の本体で引数の値を検査し、`undefined` であった場合に値を代入することでした。

次の例では、`b` の値を指定せずに `multiply` を呼び出した場合、`a` * `b` を評価するときに `b` の値が `undefined` となり、`multiply` は `NaN` を返します。</p>

```js
function multiply(a, b) {
  return a * b
}

multiply(5, 2)  // 10
multiply(5)     // NaN !
```

こうなることを防ぐためには、 2 行目で使われているように、`multiply` が 1 つだけの引数で呼び出された場合に `b` を `1` に設定します。</p>

```js
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1
  return a * b
}

multiply(5, 2)  // 10
multiply(5)     // 5
```

ES2015 のデフォルト引数を用いると、関数本体内のチェックはもはや必要なくなります。関数の先頭で `1` を `b` の既定値として設定するだけです。

```js
function multiply(a, b = 1) {
  return a * b
}

multiply(5, 2)          // 10
multiply(5)             // 5
multiply(5, undefined)  // 5
```

## 例

### `undefined` とその他の偽値を渡した場合

この例の 2 番目の呼び出しでは、第 1 引数で明示的に (`null` やその他の{{glossary("falsy", "偽値")}}ではなく) `undefined` を設定していても、`num` 引数の値は既定値のままになります。</p>

<pre class="brush: js">function test(num = 1) {
  console.log(typeof num)
}

test()           // 'number' (num は 1 に設定)
test(undefined)  // 'number' (こちらも num は 1 に設定)

// 他の偽値での検査
test('')         // 'string' (num は '' に設定)
test(null)       // 'object' (num は null に設定)
</pre>

### 呼び出し時の評価

デフォルト引数は*呼び出し時*に評価されるので、（例えば） Python とは異なり、関数が呼ばれる度に新しいオブジェクトが生成されます。

```js
function append(value, array = []) {
  array.push(value)
  return array
}

append(1)  // [1]
append(2)  // [1, 2] ではなく [2]
```

これは、関数と変数にも適用されます。

```js
function callSomething(thing = something()) {
  return thing
}

let numberOfTimesCalled = 0
function something() {
  numberOfTimesCalled += 1
  return numberOfTimesCalled
}

callSomething()  // 1
callSomething()  // 2
```

### 前の引数を後のデフォルト引数で利用可能

前に (左側で) 定義された引数は、その後のデフォルト引数で利用することができます。

```js
function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message]
}

greet('David', 'Hi')                     // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!')  // ["David", "Hi", "Happy Birthday!"]
```

この機能はこの、いくつもの極端な例を扱うデモに近いかもしれません。

```js
function go() {
  return ':P'
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a, b, c, d, e, f, g]
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### スコープの影響

デフォルト引数が 1 つ以上定義された場合、引数リスト内の識別子のみに対する[第二のスコープ](https://tc39.es/ecma262/#sec-functiondeclarationinstantiation) (Environment Record) が生成されます。このスコープは関数本体のために生成されたスコープの親になります。

すなわち、関数の本体で宣言された関数や変数は、デフォルト値の引数初期化子から参照することができません。これを行おうとすると、実行時に {{jsxref("ReferenceError")}} の例外が発生します。

また、関数の本体内で `var` を使用して宣言した変数は、同じ名前の引数をマスクするので、通常の `var` 宣言の重複に効果がないのとは異なります。

次の関数では、デフォルト引数が関数本体の子スコープにアクセスできないため、呼び出されると `ReferenceError` が発生します。T

```js example-bad
function f(a = go()) { // `f` を呼び出すと `ReferenceError` が発生する。
  function go() { return ':P' }
}
```

...そしてこの関数は、変数 `var a` が (引数リストに作成された親スコープではなく) 関数本体に作成されたスコープの最上部にのみ巻き上げられているため、 `undefined` と表示されます。

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1
  b() // `undefined` と表示。デフォルト引数の値は独自のスコープにあるため
}
```

### デフォルト引数の後の既定値なしの引数

引数は左から右に設定され、後の引数に既定値がなくてもデフォルト引数を上書きします。

```js
function f(x = 1, y) {
  return [x, y]
}

f()   // [1, undefined]
f(2)  // [2, undefined]
```

### 既定値のある分割代入の引数

既定値の代入を、{{jsxref("Operators/Destructuring_assignment", "分割代入", "", 1)}}表記で行うことができます。

これを行う一般的な方法は、空のオブジェクト/配列をオブジェクト/配列に分割代入することです。例えば、 `[x = 1, y = 2] = []` とします。
このようにすることで、空の配列/オブジェクトを関数に渡しても、あらかじめ設定した値を保持することができます。

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray();       // 3
preFilledArray([]);     // 3
preFilledArray([2]);    // 4
preFilledArray([2, 3]); // 5

// オブジェクトでも同様に動作します。
function preFilledObject({z = 3} = {}) {
  return z;
}

preFilledObject();          // 3
preFilledObject({});        // 3
preFilledObject({ z: 2 });  // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ecmascript.org における元の提案](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
