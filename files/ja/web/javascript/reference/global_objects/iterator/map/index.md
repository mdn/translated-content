---
title: Iterator.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

**`map()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、マッピング関数によってそれぞれ変換されたイテレーターの要素を生成する新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。

## 構文

```js-nolint
map(callbackFn)
```

### 引数

- `callbackFn`
  - : イテレーターによって生成された各要素に対して実行する関数。その返値はイテレーターヘルパーによって生成されます。関数は次の引数とともに呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)です。イテレーターヘルパーの `next()` メソッドが呼び出されるたびに、そのイテレーターヘルパーは基礎となるイテレーターから次の要素を取得し、 `callbackFn` を適用し、その返値を返します。基礎となるイテレーターが完了すると、イテレーターヘルパーも完了します（`next()` メソッドは `{ value: undefined, done: true }` を生成します）。

## 解説

配列メソッドよりもイテレーターヘルパーのほうが優れている主な点は、遅延的であるということ、つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターで使用することもできます。 `map()` メソッドを使用すると、反復処理したときに変換された要素を生成する新しいイテレーターを作成することができます。

## 例

### map() の使用

次の例では、フィボナッチ数列の項を生成するイテレーターを作成し、それを各項を 2 乗した新しい数列に変換し、最初のいくつかの項を読み取ります。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().map((x) => x ** 2);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 4
```

### map() の for...of ループでの使用

`map()` は、イテレーターを手作業で作成しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、 {{jsxref("Statements/for...of", "for...of")}} ループを使用して、返されたヘルパーを反復処理することができます。

```js
for (const n of fibonacci().map((x) => x ** 2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 1
// 1
// 4
// 9
// 25
// 64
```

This is equivalent to:

```js
for (const n of fibonacci()) {
  const n2 = n ** 2;
  console.log(n2);
  if (n2 > 30) {
    break;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
