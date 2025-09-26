---
title: Iterator.prototype.drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

**`drop()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。これは、このイテレーターの開始位置から指定した数の要素を読み飛ばします。

## 構文

```js-nolint
drop(limit)
```

### 引数

- `limit`
  - : 反復処理の先頭から削除する要素の数です。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)です。 返されたイテレーターヘルパーの `next()` メソッドが最初に呼び出されると、現在のイテレーターは `limit` 要素分だけ即座に進められ、次の要素（`limit+1` 番目の要素）が返されます。その後、イテレーターヘルパーは残りの要素を順に返します。現在のイテレーターが `limit` 未満の数の要素しか保有していない場合、新しいイテレーターヘルパーは、 `next()` が最初に呼び出された時点で即座に処理が完了します。

### 例外

- {{jsxref("RangeError")}}
  - : `limit` を[整数に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数変換)する際に、 {{jsxref("NaN")}} または負の数になった場合に発生します。

## 例

### drop() の使用

次の例では、フィボナッチ数列の項を反復処理するイテレーターを作成します。最初の 2 項を省略し、 3 番目の項から開始します。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().drop(2);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
```

これは次のものと同等です。

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### drop() を for...of ループで使用

`drop()` は、イテレーターを手作業で作成しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、返されたヘルパーを {{jsxref("Statements/for...of", "for...of")}} ループで反復処理することができます。

```js
for (const n of fibonacci().drop(2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### drop() と take() の組み合わせ

`drop()` と {{jsxref("Iterator.prototype.take()")}} を組み合わせることで、イテレーターの一部を取得することができます。

```js
for (const n of fibonacci().drop(2).take(5)) {
  // 最初の 2 つの要素を削除し、次の 5 つを抽出する
  console.log(n);
}
// Logs:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // 最初の 5 つの要素を抽出し、次の 2 つを削除する
  console.log(n);
}
// Logs:
// 2
// 3
// 5
```

### 削除数の下限と上限

`limit` が負の数か {{jsxref("NaN")}} であった場合、 {{jsxref("RangeError")}} が発生します。

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

`limit` が反復処理で生成可能な要素の総数よりも大きい場合（{{jsxref("Infinity")}} など）、返された反復処理ヘルパーは、 `next()` が最初に呼び出されたときに、すべての要素を即座に破棄して完了します。現在の反復処理が無限である場合、返された反復処理ヘルパーは、決して完了しません。

```js
fibonacci().drop(Infinity).next(); // 終了しない
new Set([1, 2, 3]).values().drop(Infinity).next(); // { value: undefined, done: true }
new Set([1, 2, 3]).values().drop(4).next(); // { value: undefined, done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.drop` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.take()")}}
