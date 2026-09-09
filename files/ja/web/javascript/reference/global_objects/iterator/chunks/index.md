---
title: Iterator.prototype.chunks()
short-title: chunks()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/chunks
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{SeeCompatTable}}

**`chunks()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、元のイテレーターから要素を連続した配列のチャンクに分割する新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。このヘルパーオブジェクトが反復処理されるたびに、基盤となるイテレーターから指定された数の要素を取得し、それらをまとめて返します。

重複するシーケンス（すなわち、移動ウィンドウ）を生成するには、{{jsxref("Iterator.prototype.windows()")}} を参照してください。

## 構文

```js-nolint
chunks(chunkSize)
```

### 引数

- `chunkSize`
  - : それぞれのチャンクに含まれる要素の数。2<sup>32</sup>（配列の最大長）未満の正の整数でなければなりません。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)です。返されたイテレーターヘルパーの `next()` メソッドが呼び出されるたびに、元のイテレーターが `chunkSize` 個の要素分進められ、それらの要素が配列としてまとめて返されます。

元のイテレーターに要素が残っていても、その数が `chunkSize` より少ない場合、それらの要素が配列として返されます（したがって、長さは `chunkSize` より短くなります）。そして、次に `next()` が呼び出された時点で、イテレーターヘルパーは直ちに完了します。

元のイテレーターに要素が残っていない場合、イテレーターヘルパーは空の配列を返すことなく、直ちに完了します。

### 例外

- {{jsxref("TypeError")}}
  - : `chunkSize` が整数でない場合に発生します。
- {{jsxref("RangeError")}}
  - : `chunkSize` が 1 未満、または 2<sup>32</sup>－1 より大きい場合に発生します。

## 例

### グリッド内への要素の表示

次の例では、フィボナッチ数列の項を返すイテレーターを生成します。その後、毎回 5 つの要素ずつ取得して、グリッドレイアウトで表示します。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const rows = fibonacci().chunks(5);

for (const row of rows.take(5)) {
  console.log(row.join("\t"));
}
```

出力結果:

```plain
1       1       2       3       5
8       13      21      34      55
89      144     233     377     610
987     1597    2584    4181    6765
10946   17711   28657   46368   75025
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.chunks` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-chunking)
- [es-shims による `Iterator.prototype.chunks` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.windows()")}}
