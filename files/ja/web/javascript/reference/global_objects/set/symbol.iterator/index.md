---
title: Set.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.iterator]()`** は {{jsxref("Set")}} インスタンスのメソッドで、[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装しており、 `Set` オブジェクトを、反復可能オブジェクトを期待するほとんどの構文、例えば[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax) や {{jsxref("Statements/for...of", "for...of")}} ループなどで利用できるようにします。これは、挿入順に集合の値を返す[集合イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

このプロパティの初期値は、{{jsxref("Set.prototype.values")}} プロパティの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## 構文

```js-nolint
set[Symbol.iterator]()
```

### 引数

なし。

### 返値

{{jsxref("Set.prototype.values()")}} と同じく、値の集合を生成する新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

## 例

### for...of ループを使用した反復処理

このメソッドを直接呼び出す必要はほとんどないことに注意してください。`[Symbol.iterator]()` メソッドの存在によって `Set` オブジェクトは[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)になり、`for...of` 文のような反復処理の構文は自動的にこのメソッドを呼ぶことで反復処理を行うためのイテレーターを取得できるようになります。

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
console.log(setIter.next().value); // {}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
