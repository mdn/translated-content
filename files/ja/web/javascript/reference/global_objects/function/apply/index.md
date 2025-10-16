---
title: Function.prototype.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`apply()`** メソッドは、 `this` 値を指定して関数を呼び出し、 `arguments` は配列 (または[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)) として提供します。

{{InteractiveExample("JavaScript デモ: Function.prototype.apply()")}}

```js interactive-example
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// 期待される出力: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// 期待される出力: 2
```

## 構文

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### 引数

- `thisArg`
  - : `this` の値で、 `func` の呼び出しに提供されます。この関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でない場合は、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) および [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) はグローバルオブジェクトに置き換えられ、プリミティブ値はオブジェクトに変換されます。
- `argsArray` {{optional_inline}}
  - : 配列風のオブジェクトであり、 `func` 関数が呼ぶことになる引数を列挙したものです。関数に引数が渡されない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) となります。

### 返値

指定した `this` と引数で関数を呼び出した結果が返ります。

## 解説

> [!NOTE]
> この関数はほぼ {{jsxref("Function/call", "call()")}} と同等ですが、 `call()` では関数の引数がリストとして個別に渡されるのに対し、 `apply()` では 1 つのオブジェクト、通常は配列にまとめられます。例えば、 `func.call(this, "eat", "bananas")` と `func.apply(this, ["eat", "bananas"])` のようになります。

通常、関数を呼び出す場合、関数内の [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) 値は、関数がアクセスされたオブジェクトです。 `apply()` を使用すると、既存の関数を呼び出す際に、最初のオブジェクトにプロパティとして関数を関連付けることなく、任意の値を `this` として割り当てることができます。これにより、あるオブジェクトのメソッドを汎用ユーティリティ関数として使用することができます。

また、配列風オブジェクトであれば、どのようなものでも第 2 引数として使用することができます。実際には、 `length` プロパティを持ち、 `(0..length - 1)` の範囲の整数（「インデックス」）のプロパティを持つ必要があるということです。例えば、 {{domxref("NodeList")}} や、 `{ 'length': 2, '0': 'eat', '1': 'bananas' }` のようなカスタムオブジェクトを使用することができます。また、例えば、 {{jsxref("Functions/arguments", "arguments")}} を使用することもできます。

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)や引数の[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を用いると、これは次のように書き直すことができます。

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

一般的に、 `fn.apply(null, args)` は、引数スプレッド構文を使用した `fn(...args)` と同等ですが、 `args` は、前者の場合、 `apply()` による配列風オブジェクトであることが期待され、後者の場合、スプレッド構文による[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)であることが期待されます。

> [!WARNING]
> コンストラクターを連結する（例えば、継承を実装する）ために `apply()` を使用しないでください。これは、コンストラクター関数を単なる関数として呼び出すことになり、つまり [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) が `undefined` となり、クラスがエラーを発生します。これは、 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) なしで呼び出されるためです。代わりに {{jsxref("Reflect.construct()")}} または [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) を使用してください。

## 例

### apply() で配列を別の配列に追加する

{{jsxref("Array.prototype.push()")}} を使用すると、要素を配列に追加できます。そして、`push()` は可変長引数に対応しているので、複数の要素を一度に追加することもできます。しかし、配列を `push()` に渡すと、実際にはその配列が単一の要素として追加され、個々の要素が追加されるのではなく、配列の末尾に配列が追加されることになります。一方、 {{jsxref("Array.prototype.concat()")}} は、この場合、期待通りの動作をしますが、既存の配列に追加するのではなく、新しい配列を作成して返します。

この場合、`apply` を使用して、配列を暗黙的に一連の引数として「展開」することができます。

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

同じ効果は、スプレッド構文でも得られます。

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### apply() を組み込み関数と共に利用する

apply()` を賢く使用することで、おそらくは手動で集合をループ処理（またはスプレッド構文を使用）しなければならないような場合でも、組み込み関数を使用してタスクを処理することができます。

下記の例では、配列の最大値・最小値を求めるために {{jsxref("Math.max()")}} および {{jsxref("Math.min()")}} を使っています。

```js
// 最小値・最大値を求めたい配列
const numbers = [5, 6, 2, 3, 7];

// Math.min/Math.max と apply を使う
let max = Math.max.apply(null, numbers);
// これは右と同じ Math.max(numbers[0], …)
// または Math.max(5, 6, …)

let min = Math.min.apply(null, numbers);

// 対して、ループ文を使うとこうなる
max = -Infinity;
min = Infinity;

for (const n of numbers) {
  if (n > max) {
    max = n;
  }
  if (n < min) {
    min = n;
  }
}
```

しかし注意してください。この方法で `apply()` （またはスプレッド構文）を使用する場合、 JavaScript エンジンの引数の長さ上限を超えてしまう危険があります。

多すぎる引数（おおよそ数万個以上だと思って下さい）を与えた結果は、その上限が特に決まっていないため、エンジンによって (JavaScriptCore ライブラリーでは[引数の上限は 65536 である](https://webkit.org/b/80797)とハードコーディングされています）異なります。ほとんどのエンジンでは例外が発生しますが、他にも、適用された関数に実際に渡される引数の数値を任意に制限するなど、特定の動作を妨げる仕様はありません。後者について詳しく解説しますと、そのエンジンの引数の上限が 4 つの場合 (実際の上限値は当然もっと上です)、上の例では、完全な配列でなく `5, 6, 2, 3` が `apply` へ渡されたかのような動作をします。

もし実装しているコードで利用する配列の変数の数が数万を超えそうなときは、以下に示すように一度に apply に渡す配列を分割して利用する方法を併用すべきでしょう。

```js
function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const subMin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length)),
    );
    min = Math.min(subMin, min);
  }

  return min;
}

const min = minOfArray([5, 6, 2, 3, 7]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Functions/arguments", "arguments")}} オブジェクト
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [スプレッド構文 (`...`)](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
