---
title: Array.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`every()`** は {{jsxref("Array")}} インスタンスのメソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.every()", "shorter")}}

```js interactive-example
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// 期待される出力結果: true
```

## 構文

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックスです。
    - `array`
      - : `every()` が実行されている配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用される値です。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

`callbackFn` 関数がいずれかの要素で{{Glossary("falsy", "偽値")}}を返した場合は、すぐに `false` を返します。それ以外は `true` です。

## 解説

`every()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列のそれぞれの要素に対して、指定された `callbackFn` 関数が[偽値](/ja/docs/Glossary/Falsy)を返すまで一度ずつ呼び出します。 そのような要素が見つかった場合、 `every()` は直ちに `false` を返し、配列の反復処理を中止します。そうでない場合、 `callbackFn` がすべての要素に対して[真値](/ja/docs/Glossary/Truthy)を返すと、 `every()` は `true` を返します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の章を参照してください。

`every` は数学における「∀ （すべての / for all）」記号と同様のふるまいをします。特に、空の配列に対しては `true` を返します。（[空集合](https://ja.wikipedia.org/wiki/空集合#性質)のすべての要素が与えられた任意の条件を満たすことは[空虚に真](https://en.wikipedia.org/wiki/Vacuous_truth)です。）

`callbackFn` は値が代入されている配列の要素に対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

`every()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` の値に `length` プロパティと整数のキーを持ったプロパティがあることだけを求めます。

## 例

### すべての配列要素の大きさをテストする

次の例は、配列内のすべての要素が 10 以上であるかどうかテストします。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### ある配列が別の配列の部分集合であるかどうかを調べる

以下の例では、ある配列のすべての要素が別の配列に存在するかどうかをテストしています。

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスする場合に便利です。次の例では、まず `filter()` を使用して正の値を抽出し、次に `every()` を使用して配列が厳密に増加しているかどうかを確認しています。

```js
const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(isIncreasing); // true
```

### 疎配列に対する every() の使用

`every()` は空のスロットに対して関数を実行しません。

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### 配列でないオブジェクトに対する every() の呼び出し

`every()` メソッドは `this` の `length` プロパティを読み込み、すべてアクセスするか `callbackFn` が `false` を返すまで `length` より小さい非負の整数キーを持つ各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // length が 3 なので every() からは無視される
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.every` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims polyfill of `Array.prototype.every`](https://www.npmjs.com/package/array.prototype.every)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
