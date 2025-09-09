---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: 75c5e27d00ae191a3f549820c61d5bfff31428f8
---

{{JSRef}}

**`some()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、 {{jsxref("Array.prototype.some()")}} と似ています。これは、イテレーターによって生成された要素の少なくとも 1 つが、指定された関数で実装されている検査に合格しているかどうかを判定します。論理値を返します。

## 構文

```js-nolint
some(callbackFn)
```

### 引数

- `callbackFn`
  - : イテレーターによって生成されたそれぞれの要素に対して実行する関数。 要素が検査に合格した場合は[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返すようにします。 この関数は次の引数で呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

コールバック関数が少なくとも 1 つの要素に対して{{Glossary("truthy","真値")}}を返した場合、 `true` です。それ以外は `false` です。

## 解説

`some()` はイテレーターを反復処理し、それぞれの要素に対して一度ずつ `callbackFn` 関数を呼び出します。 コールバック関数が真値を返したら、`true` を即座に返します。 そうでない場合は、イテレーターの終わりまで反復処理を行い、 `false` を返します。 `some()` が `true` を返した場合、そのイテレーターは `return()` メソッドを呼び出して閉じられます。

イテレーターヘルパーの主な利点は、配列メソッドよりも「遅延的」であるということ、つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターでも使用することができます。無限イテレーターでは、 `some()` は最初の真値が得られるとすぐに `true` を返します。 `callbackFn` が常に偽値を返す場合、メソッドは決して戻りません。

## 例

### some() の使用

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().some(isEven)); // true

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).some(isNegative)); // false
console.log(fibonacci().some(isNegative)); // Never completes
```

`some()` を呼び出すと、メソッドが早期に復帰した場合でも、常にそのイテレーターは閉じられます。 イテレーターが途中の状態のままになることはありません。

```js
const seq = fibonacci();
console.log(seq.some(isEven)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.some` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Array.prototype.some()")}}
