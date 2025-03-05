---
title: Iterator.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

**`every()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、 {{jsxref("Array.prototype.every()")}} と似ています。このイテレーターによって生成されたすべての要素が、指定された関数によって実装された試験に合格するかどうかを確認します。論理値を返します。

## 構文

```js-nolint
every(callbackFn)
```

### 引数

- `callbackFn`
  - : このイテレーターによって生成された各要素に対して実行する関数。要素が試験に合格したことを示す[真値](/ja/docs/Glossary/Truthy)、またはそうでなければ[偽値](/ja/docs/Glossary/Falsy)を返さなければなりません。この関数は、以下の引数とともに呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

`callbackFn` がすべての要素に対して{{Glossary("truthy","真値")}}を返した場合は `true` です。そうでなければ `false` です。

## 解説

`every()` はイテレーターを反復処理し、各要素に対して一度ずつ `callbackFn` 関数を呼び出します。 コールバック関数が偽値を返した場合は、ただちに `false` を返します。そうでない場合は、イテレーターの最後まで反復処理を行い、 `true` を返します。 `every()` が `false` を返した場合、そのイテレーターの `return()` メソッドを呼び出して終了します。

イテレーターヘルパーの主な利点は、配列メソッドよりも「遅延的」であるということです。つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また無限イテレーターでも使用することができます。無限イテレーターでは、`every()` は最初の偽値が得られるとすぐに `false` を返します。もし `callbackFn` が常に真値を返した場合、メソッドは終了しません。

## 例

### every() の使用

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
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // Never completes
```

`every()` を呼び出すと、メソッドが早期に終了した場合でも、常にその元となるイテレーターが閉じられます。 イテレーターが未完了の状態で残されることはありません。

```js
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.every` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
