---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

**`filter()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)を返します。このオブジェクトは、提供されたコールバック関数が `true` を返すイテレーターの要素のみを返します。

## 構文

```js-nolint
filter(callbackFn)
```

### 引数

- `callbackFn`
  - : このイテレーターが生成するすべての要素に対して実行する関数です。[真値](/ja/docs/Glossary/Truthy)を返すと、その要素をこのイテレーターヘルパーが生成し、[偽値](/ja/docs/Glossary/Falsy)の場合は生成しません。この関数は、以下の引数とともに呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト)です。イテレーターヘルパーの `next()` メソッドを呼び出すたびに、このイテレーターでコールバック関数が `true` を返す次の要素を返します。このイテレーターが完了した場合、イテレーターヘルパーオブジェクトも完了します（`next()` メソッドが `{ value: undefined, done: true }` を生成します）。

## 解説

配列メソッドよりもイテレーターヘルパーのほうが優れている主な点は、遅延処理されるということ、つまり、リクエストされたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターでも使用することができます。

## 例

### filter() の使用

次の例では、フィボナッチ数列の項を生成するイテレーターを作成し、最初のいくつかの偶数の項を読み取ります。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### filter() と for...of ループの使用

`filter()` は、イテレーターを手作業で処理しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、返されたヘルパーを {{jsxref("Statements/for...of", "for...of")}} ループで反復処理することができます。

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 8
// 34
```

これは次のものと同等です、

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.filter` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
