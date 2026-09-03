---
title: Iterator.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/includes
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{SeeCompatTable}}

**`includes()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、{{jsxref("Array.prototype.includes()")}} と似ています。指定された値と等しい要素が見つかった場合は `true` を返します。一方、そのような要素が見つからないままイテレーターが終了した場合は、`false` を返します。

## 構文

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 検索する値です。
- `fromIndex` {{optional_inline}}
  - : 検索を開始するゼロ基点のインデックス。非負の整数、`Infinity`、または `undefined` でなければなりません。`fromIndex` がイテレーターによって生成される要素数以上である場合（`fromIndex` が `Infinity` の場合も含む）、イテレーターが最後まで処理された後、このメソッドは常に `false` を返します。`fromIndex` が `undefined` の場合、デフォルト値は `0` になります。

### 返値

イテレーター内（または、指定されている場合は `fromIndex` から始まるイテレーターの一部）で `searchElement` という値が見つかった場合に `true` となる論理値です。

### 例外

- {{jsxref("TypeError")}}
  - : `fromIndex` が整数、`Infinity`、`-Infinity`、`undefined` のいずれでもない場合に発生します。
- {{jsxref("RangeError")}}
  - : `fromIndex` が負の値の場合に発生します。

## 解説

`includes()` メソッドは、[SameValueZero アルゴリズム](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) を使用して、`searchElement` と配列の要素を比較します。このアルゴリズムは、厳密な等価性 `===`（`-0` と `+0` が等しいとみなされる）と同様に動作しますが、{{jsxref("NaN")}} がそれ自体と等しいとみなされる点が異なります。

`Array.prototype.includes()` とは異なり、`Iterator.prototype.includes()` の `fromIndex` 引数は負の値に設定できません。これは、イテレーターが長さを前もって知らないためです。また、型の検証もより厳格であり、整数以外の値は整数に切り捨てられません。

イテレーターヘルパーが配列メソッドに比べて持つ主な利点は、それらが「遅延評価」であることです。つまり、リクエストされた場合にのみ次の値を生成します。これにより、不要な計算を避けることができるだけでなく、無限イテレーターとの併用も可能になります。無限イテレーターの場合、`includes()` はまず最初の一致が得られる次第に `true` を返します。一致する値が一度も見つからない場合は、このメソッドは決して返りません。

`includes()` を呼び出すと、メソッドが途中で返った場合でも、常にその元となるイテレーターが閉じられます。イテレーターが未完了の状態で残されることはありません。

## 例

### includes() の使用

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8)); // true
console.log(fibonacci().take(10).includes(7)); // false
console.log(fibonacci().includes(7)); // 完了しない
```

このメソッドは返値の返却後、イテレーターを閉じます。

```js
const seq = fibonacci();
console.log(seq.includes(8)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

### fromIndex の使用

`fromIndex` は、先頭からスキップする要素の数を指定します。これは、`drop(fromIndex).includes(searchElement)` を呼び出すのと同じです。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8, 3)); // true
console.log(fibonacci().includes(8, 10)); // false
```

`fromIndex` が利用できる要素数以上である場合、`false` が返されます。

```js
["a", "b", "c"].values().includes("a", 3); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [es-shims による `Iterator.prototype.includes` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.includes()")}}
