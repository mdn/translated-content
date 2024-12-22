---
title: Iterator.prototype.toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

**`toArray()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、このイテレーターから取り出される要素で新しい {{jsxref("Array")}} インスタンスを作成します。

## 構文

```js-nolint
toArray()
```

### 引数

なし。

### 返値

このイテレーターから取り出され要素を取り出された順に持つ、新しい {{jsxref("Array")}} インスタンスです。

## 例

### toArray() の使用

`iterator.toArray()` は、 `Array.from(iterator)` および `[...iterator]` と同等ですが、複数のイテレーターヘルパーメソッドが関与する場合に、連結が容易になるという点が異なります。次の例では、フィボナッチ数列の項を生成するイテレーターを作成し、最初の10項を取り出し、奇数をフィルターで除外し、結果を配列に変換します。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const array = fibonacci()
  .take(10)
  .filter((x) => x % 2 === 0)
  .toArray();

console.log(array); // [2, 8, 34]
```

なお、 `toArray()` は処理の最後のステップとして呼び出すのがよい考えです。例えば、`fibonacci().take(10).toArray().filter(...)` は効率が悪いです。なぜなら、反復処理ヘルパーは遅延され、一時的な配列の作成を避けるからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.toArray` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
