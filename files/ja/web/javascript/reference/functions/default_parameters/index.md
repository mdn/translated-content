---
title: デフォルト引数
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**関数のデフォルト引数**は、値が渡されなかった場合や `undefined` が渡された場合に、名前付き引数を既定値で初期化するためのものです。

{{InteractiveExample("JavaScript デモ: デフォルト引数")}}

```js interactive-example
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// 予想される結果: 10

console.log(multiply(5));
// 予想される結果: 5
```

## 構文

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## 解説

JavaScript では、関数の引数は、指定しなければ {{jsxref("undefined")}} になります。しかし、別な既定値を設定すると有用な場合がよくあります。そのような場合に、デフォルト引数が役立ちます。

次の例では、`b` の値を指定せずに `multiply` を呼び出した場合、`a * b` を評価するときに `b` の値が `undefined` となり、`multiply` は `NaN` を返します。

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

以前は、既定値を設定する一般的な手法として、関数本体内で引数の値を検査し、 `undefined` の場合に値を代入する方法が用いられていました。次の例では、 `multiply` が引数 1 つだけで呼び出された場合、 `b` は `1` に設定されます。

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

デフォルト引数を用いると、関数本体内のチェックが必要なくなります。関数の先頭で `1` を `b` の既定値として設定するだけです。

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

引数は左から右の順序で設定され、既定値のない後続の引数が存在した場合でも、既定値を上書きします。

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> 最初のデフォルト引数と、後に続くすべての引数は、関数の[`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length)には影響しません。

デフォルト引数の初期化子は、関数本体用に作成されるスコープの親となる、独自のスコープ内に存在します。

これは、後続の引数の初期化子において、先行する引数を参照できるということです。ただし、関数本体で宣言された関数や変数は、デフォルト引数の初期化子から参照することはできません。これを試みると、実行時に {{jsxref("ReferenceError")}} が発生します。これには関数本体で [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) 宣言された変数も含まれます。

例えば、次の関数は呼び出されると `ReferenceError` が発生します。デフォルト引数の値が、関数本体の子スコープの変数にアクセス権を持たないためです。

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

この関数は引数の `a` の値を出力します。変数 `var a` は関数本体用に作成されたスコープの先頭までしか巻き上げられず、引数リスト用に作成された親スコープまで巻き上げられないため、 `b` からはその値が見えないからです。

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

デフォルト引数は任意の式が使用できますが、デフォルト式の評価を一時停止させる {{jsxref("Operators/await", "await")}} や {{jsxref("Operators/yield", "yield")}} は使用できません。引数は同期的に初期化しなければなりません。

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> デフォルト引数は関数が定義された時ではなく呼び出された時に評価されるため、`await` および `yield` 演算子の有効性は、その関数自体に依存し、周囲の関数には依存しません。例えば、現在の関数が `async` でない場合、`await` は識別子として構文解析され、通常の [識別子の構文規則](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) に従います。これは、この関数が `async` 関数内に入れ子である場合でも同様です。

## 例

### undefined とその他の偽値を渡した場合

この例の 2 番目の呼び出しでは、第 1 引数で明示的に (`null` やその他の{{glossary("falsy", "偽値")}}ではなく) `undefined` を設定していても、`num` 引数の値は既定値のままになります。</p>

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num は 1 に設定)
test(undefined); // 'number' (こちらも num は 1 に設定)

// 他の偽値での検査
test(""); // 'string' (num は '' に設定)
test(null); // 'object' (num は null に設定)
```

### 呼び出し時の評価

デフォルト引数は呼び出し時に評価されるので、（例えば） Python とは異なり、関数が呼び出される度に新しいオブジェクトが生成されます。

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [1, 2] ではなく [2]
```

これは、関数と変数にも適用されます。

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### 前の引数を後のデフォルト引数で利用可能

前に (左側で) 定義された引数は、その後のデフォルト引数で利用することができます。

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

この機能はこの、いくつもの極端な例を扱うデモに近いかもしれません。

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
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
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### 既定値のある構造分解の引数

既定値の代入を、[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)構文で行うことができます。

これを行う一般的な方法は、空のオブジェクト/配列をオブジェクト/配列に構造分解することです。例えば、 `[x = 1, y = 2] = []` とします。
このようにすることで、空の配列/オブジェクトを関数に渡しても、あらかじめ設定した値を保持することができます。

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// オブジェクトでも同様に動作します。
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [ヌル値合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
