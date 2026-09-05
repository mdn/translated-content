---
title: Iterator.prototype.windows()
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{SeeCompatTable}}

**`windows()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、要素の移動ウィンドウを生成する新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。このヘルパーが反復処理されるたびに、前回の反復処理で除去された最初の要素を除去し、元のイテレーターから次の要素を追加した配列を生成します。

チャンク単位で取得するには、{{jsxref("Iterator.prototype.chunks()")}} を参照してください。

## 構文

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### 引数

- `windowSize`
  - : 移動ウィンドウに含まれる要素の数。2<sup>32</sup>（配列の最大長）未満の正の整数でなければなりません。
- `underSized` {{optional_inline}}
  - : イテレーター内の要素数が `windowSize` 未満だが 0 より大きい場合にどう処理するのが最適かを指定する文字列。次のいずれかを指定できます。
    - `"only-full"` (default)
      - : 部分的なウィンドウは無視します。返されるイテレーターは、入力データが空であるかのように、直ちに処理を完了します。
    - `"allow-partial"`
      - : 部分ウィンドウ内のすべての要素を配列として返します（長さは `windowSize` 未満です）。

    なお、入力が空の場合、返されるイテレーターは常に、空の配列を返すことなく直ちに完了することに注意してください。

### 返値

新しい [イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)。返されたイテレーターヘルパーの `next()` メソッドが初めて呼び出される際、現在のイテレーターは直ちに `windowSize` 個の要素分だけ進められます。その数の要素が利用できる場合、それらは配列としてまとめて取り出されます。そうでない場合、その挙動は `underSized` 引数によって異なります。イテレーターは、何も取り出さずに直ちに完了するか（`"only-full"` の場合、または入力が完全に空の場合）、あるいは `windowSize` より短い長さの配列が取り出されます。

その後、それぞれの時点で、返される配列は、前回の配列から左端の要素を除去し、入力反復可能オブジェクトから取得した新しい要素を末尾に追加したもので構成されます。反復可能な入力オブジェクトが尽きると、イテレーターヘルパーも同時に完了します。

### 例外

- {{jsxref("TypeError")}}
  - : `limit` が整数でない場合、または `underSized` が許可された値のいずれでもない場合に発生します。
- {{jsxref("RangeError")}}
  - : `limit` が 1 未満、または 2<sup>32</sup>－1 を超える場合に発生します。

## 例

### 移動平均

次の例では、フィボナッチ数列の項を返すイテレーターを作成します。その後、隣接する 2 つの要素の平均値を返す新しいイテレーターが作成されます。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const averaged = fibonacci()
  .windows(2)
  .map((window) => (window[0] + window[1]) / 2);

console.log(averaged.next().value); // 1 (1, 1)
console.log(averaged.next().value); // 1.5 (1, 2)
console.log(averaged.next().value); // 2.5 (2, 3)
console.log(averaged.next().value); // 4 (3, 5)
```

「移動平均」として知られるこの手法は、信号処理においてとても有益です。

### 部分文字列の列挙

次の例では、文字列の中から指定された長さのすべての部分文字列を列挙します。`windows()` メソッドを使用して文字の移動ウィンドウを作成し、それらを結合して部分文字列を形成します。

> [!NOTE]
> これは、数値インデックスを手動で繰り返し処理して {{jsxref("String.prototype.substring()")}} メソッドを呼び出すよりも、おそらくはるかに非効率でしょう。

```js
const chars = Iterator.from("MASSACHUSETTS");

const substrings = chars.windows(3).map((window) => window.join(""));

for (const substring of substrings) {
  console.log(substring);
}
// MAS
// ASS
// SSA
// ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.windows` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-chunking)
- [es-shims による `Iterator.prototype.windows` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.chunks()")}}
