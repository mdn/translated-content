---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
---

{{JSRef}}

**`apply()`** メソッドは、 `this` 値を指定して関数を呼び出し、 `arguments` は配列 (または[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)) として提供します。

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## 構文

```
func.apply(thisArg, [ argsArray])
```

### 引数

- `thisArg`

  - : `this` の値で、 `func` の呼び出しで提供されます。

    このメソッドで指定した `this` が必ず呼び出したメソッドで参照されるわけではないことに注意してください。もし呼び出したメソッドが{{jsxref("Strict_mode", "厳格モードではない", "", 1)}}コード内の関数であれば、ここで渡した値が {{jsxref("null")}} もしくは {{jsxref("undefined")}} であった場合はグローバルオブジェクトに置き換えられ、プリミティブ型の変数はボックス化されます。この引数は必須です。

- `argsArray` {{optional_inline}}

  - : 1 つの配列風のオブジェクトであり、 `func` 関数が呼ぶことになる引数を列挙したものです。関数に引数が渡されない場合は {{jsxref("null")}} または {{jsxref("undefined")}} となります。

    ECMAScript 5 以降ではこれらの値は配列ではなく配列風のオブジェクトを用いる事になりました。後述の[ブラウザーの互換性](#browser_compatibility)を参照してください。

### 返値

指定した **`this`** と引数で関数を呼び出した結果が返ります。

## 解説

> **メモ:** 関数の構文は {{jsxref("Function.call", "call()")}} メソッドとほぼ同じですが、根本的な違いは `call()` メソッドは**連続した引数のリスト**を受け取るのに対して、 `apply()` メソッドが**引数の配列を 1 つだけ**受け取るという点です。

> **メモ:** 最初の引数が undefined または null の場合、配列の[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用して同様の結果を得ることができます。

存在する関数を呼び出す時は通常と異なる `this` オブジェクトを渡すことができます。`this` はカレントオブジェクト、呼び出したオブジェクトを参照します。`apply` を用いることで、新たなオブジェクトのためにそのメソッドを書き直すことなく継承させることができます。

`apply` は、対応する引数の型を除けば {{jsxref("Function.call", "call()")}} によく似ています。引数のリストの代わりに引数の配列を用いることができます。`apply` は配列リテラルを引数に用いることもできます。例えば `func.apply(this, ['eat', 'bananas'])` のように利用でき、同様に配列オブジェクトを `func.apply(this, new Array('eat', 'bananas'))` のように利用できます。

`argsArray` で {{jsxref("Functions/arguments", "arguments")}} を利用することもできます。`arguments` は関数内のローカル変数です。これは、呼び出されたオブジェクトの不特定の引数すべてに対して用いることができます。つまり、 `apply` メソッドを使うにあたって呼び出されたオブジェクトの引数について知る必要がないのです。`arguments` を利用することで、引数のすべてを呼び出されたオブジェクトに渡すことができます。引数の扱いは、呼び出されたオブジェクトが受け持ちます。

ECMAScript 第 5 版以降では、配列風のオブジェクトも使えます。具体的には、`length` プロパティとその範囲 (0 から length-1 まで) の整数の名称のプロパティを持った、あらゆる種類のオブジェクトの利用を認めています。例えば、{{domxref("NodeList")}} や `{ 'length': 2, '0': 'eat', '1': 'bananas' }` のような独自のオブジェクトを利用できます。

> **メモ:** Chrome 14 や Internet Explorer 9 などのブラウザーでは、配列風オブジェクトを扱えずに例外が発生します。

## 例

### apply で配列を別の配列に追加する

`push` で 1 つの要素を配列に追加できます。そして、`push` は可変長引数に対応しているので、複数の要素を一度に追加することもできます。

しかし `push` に配列を渡すと、配列の要素ごとにではなく配列全体を 1 つの要素として追加してしまいます。配列の中に配列が入るだけなのです。

それを望まない場合はどうすればいいのでしょう？ `concat` ならば望みの結果を得られます。しかし、*既存*の配列に追加するのではなく、新しい配列を生成して返します。

既存の配列に追加したいのに... では、どうすれば？ループ文を書きますか？おことわりですよね？

`apply` が救ってくれます！

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### `apply` をビルトイン関数と共に利用する

`apply` を賢く使うと、本来なら配列のためにループ文を書かなくてはならないような処理に対して、ビルトイン関数をそのまま使えるようになります。

下記の例では、配列の最大値・最小値を求めるために `Math.max`/`Math.min` を使っています。

```js
// 最小値・最大値を求めたい配列
const numbers = [5, 6, 2, 3, 7];

// Math.min/Math.max と apply を使う
let max = Math.max.apply(null, numbers);
// これは右と同じ Math.max(numbers[0], ...)
// または Math.max(5, 6, ...)

let min = Math.min.apply(null, numbers);

// 対して、ループ文を使うとこうなる
(max = -Infinity), (min = +Infinity);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

しかし注意してください。この方法で `apply` を使う場合、 JavaScript エンジンの引数の長さ上限を超えてしまう危険があります。多すぎる (おおよそ数万個以上だと思って下さい) 引数を与えた結果は、その上限が特に決まっていない (本当に任意の巨大なデータのかたまりに対してさえ) ためエンジンによって (JavaScriptCore ライブラリでは[引数の上限は 65536 である](https://bugs.webkit.org/show_bug.cgi?id=80797)とハードコーディングされています) 異なります。

これは、その限界 (実際には、過剰に大きなスタックの挙動の性質さえも) が不特定であるためです。例外を投げるエンジンも存在します。さらに酷い場合では、関数へ実際に渡す引数の数を勝手に制限するものもあります。後者について詳しく解説しますと、そのエンジンの引数の上限が 4 つの場合 (実際の上限値は当然もっと上です)、上の例では、完全な配列でなく `5, 6, 2, 3` が `apply` へ渡されたかのような動作をします。

もし実装しているコードで利用する配列の変数の数が数万を超えそうなときは、以下に示すように一度に apply に渡す配列を分割して利用する方法を併用すべきでしょう。

```js
function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

let min = minOfArray([5, 6, 2, 3, 7]);
```

### apply を利用したコンストラクターチェーン

`apply` を利用して、Java のように {{jsxref("Operators/new", "constructors")}} の連結を行なうことができます。

以下に示す例ではグローバルな `construct` という名称の {{jsxref("Function")}} オブジェクトを作成し、引数のリストの代わりに配列風オブジェクトをコンストラクターと共に利用できるようになります。

```js
Function.prototype.construct = function (aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

> **メモ:** 上記で使用している `Object.create()` メソッドは比較的新しいです。代わりの方法として、以下の例を検討してください。
>
> [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) を利用:
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   let oNew = {};
>   oNew.__proto__ = this.prototype;
>   this.apply(oNew, aArgs);
>   return oNew;
> };
> ```
>
> [クロージャ](/ja/docs/Web/JavaScript/Closures)を利用:
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   let fConstructor = this,
>     fNewConstr = function () {
>       fConstructor.apply(this, aArgs);
>     };
>   fNewConstr.prototype = fConstructor.prototype;
>   return new fNewConstr();
> };
> ```
>
> {{jsxref("Function")}} コンストラクターを利用:
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   let fNewConstr = new Function("");
>   fNewConstr.prototype = this.prototype;
>   let oNew = new fNewConstr();
>   this.apply(oNew, aArgs);
>   return oNew;
> };
> ```

使用例:

```js
function MyConstructor() {
  for (let nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

let myArray = [4, "Hello world!", false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1); // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor); // logs 'MyConstructor'
```

> **メモ:** この非ネイティブな `Function.construct` メソッドはいくつかのネイティブ実装されたコンストラクタ (例えば {{jsxref("Date")}} のような物) と併用できません。このようなケースにおいては {{jsxref("Function.bind")}} メソッドを利用する必要があります。
>
> 例えば `[2012, 11, 4]` のような配列を {{jsxref("Global_Objects/Date", "Date")}} コンストラクターに利用する事を考えてみてください。この場合では `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` のように書く必要があります。
>
> いずれにせよこれは最適な選択肢とは言えず、実用上はいかなる状況でも用いるべきではないでしょう)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.apply")}}

## 関連情報

- {{jsxref("Functions/arguments", "arguments")}} オブジェクト
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "関数と関数スコープ", "", 1)}}
- {{jsxref("Reflect.apply()")}}
- {{jsxref("Operators/Spread_syntax", "スプレッド構文", "", 1)}}
