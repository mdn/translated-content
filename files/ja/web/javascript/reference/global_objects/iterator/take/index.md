---
title: Iterator.prototype.take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

**`take()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、このイテレーター内で指定された数の要素を生成し、その後終了する新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。

## 構文

```js-nolint
take(limit)
```

### 引数

- `limit`
  - : 反復処理の先頭から取り出す要素の数です。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)です。返されたイテレーターヘルパーは、元のイテレーターの要素を 1 つずつ生成し、 `limit` の数の要素が生成された場合、または元のイテレーターがすべて処理された場合（`next()` メソッドが `{ value: undefined, done: true }` を生成した場合）に、完了します。

### 例外

- {{jsxref("RangeError")}}
  - : `limit` を[整数に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)した場合に {{jsxref("NaN")}} または負の数になった場合。

## 例

### take() の使用

次の例では、フィボナッチ数列の項目を反復処理するイテレーターを作成し、最初の 3 つの項目をログ記録します。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().take(3);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // undefined
```

### take() を for...of ループで使用

`take()` は、イテレーターを手作業で作成しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、返されたヘルパーを {{jsxref("Statements/for...of", "for...of")}} ループで反復処理することができます。

```js
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// ログ出力:
// 1
// 1
// 2
// 3
// 5
```

`fibonacci()` は無限イテレーターであるため、`for` ループを使用して直接反復処理することはできません。

### drop() と take() の組み合わせ

`take()` を {{jsxref("Iterator.prototype.drop()")}} と結合すると、イテレーターのスライスを取得することができます。

```js
for (const n of fibonacci().drop(2).take(5)) {
  // 最初の 2 つの要素を捨て、次の 5 つを取る
  console.log(n);
}
// ログ出力:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // 最初の5つの要素を取り、その次の 2 つを捨てる
  console.log(n);
}
// ログ出力:
// 2
// 3
// 5
```

### 取得数の上限と下限

`limit` が負の数または {{jsxref("NaN")}} であった場合、 {{jsxref("RangeError")}} が発生します。

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

`limit` が反復可能オブジェクトの総数よりも大きい場合（{{jsxref("Infinity")}} など）、返されたイテレーターヘルパーは、基本的に元のイテレーターと同じ動作をします。

```js
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// ログ出力:
// 1
// 2
// 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.take` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.drop()")}}
