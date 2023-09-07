---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
---

{{JSRef}}

`Set` オブジェクトの **`@@iterator`** メソッドは[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装し、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax) や [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) 文などの反復可能オブジェクトを期待するほとんどの文法で `Set` を利用できるようにします。`@@iterator` メソッドは `Set` の値を返すイテレーターを返します。

**`@@iterator`** プロパティの初期値は {{jsxref("Set.prototype.values()", "values")}} プロパティの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## 構文

```js
mySet[Symbol.iterator]();
```

### 返値

返値は {{jsxref("Set.prototype.values()", "values()")}} 同様、`Set` の値を返す新しい反復可能なイテレーターオブジェクトです。

## 例

### for..of とともに \[@@iterator]\() を使う

このメソッドを直接呼び出す必要はほとんどないことに注意してください。`iterator` メソッドの存在によって `Set` オブジェクトは[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)になり、`for...of` 文のような反復処理の構文は自動的にこのメソッドを呼ぶことで反復処理を行うためのイテレーターを取得できるようになります。

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

### 手動でイテレーターを扱う

反復処理を最大限に制御するために、返されたイテレーターオブジェクトの `next()` メソッドを手動で呼び出すことも可能です。

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
