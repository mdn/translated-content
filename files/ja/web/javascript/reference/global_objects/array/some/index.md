---
title: Array.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`some()`** は {{jsxref("Array")}} インスタンスのメソッドで、指定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が合格するかどうかを判定します。配列の中で指定された関数が true を返す要素を見つけた場合は true を返し、そうでない場合は false を返します。配列は変更しません。

{{InteractiveExample("JavaScript デモ: Array.prototype.some()")}}

```js interactive-example
const array = [1, 2, 3, 4, 5];

// 要素が偶数であるかどうかを調べる
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// 予想される結果: true
```

## 構文

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。この関数は、要素がテストに合格したことを示すには[真値](/ja/docs/Glossary/Truthy)を、そうでない場合は[偽値](/ja/docs/Glossary/Falsy)を返します。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で処理中の現在の要素です。
    - `index`
      - : 配列内で処理中の現在の要素のインデックスです。
    - `array`
      - : `some()` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用される値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

配列の要素のいずれかで `callbackFn` が{{Glossary("truthy", "真値")}}を返した場合は、直ちに `true` を返します。それ以外の場合は `false` です。

## 解説

`some()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された `callbackFn` 関数を配列の各要素に対して一度ずつ、 `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで呼び出します。該当する要素が見つかった場合は、 `some()` は直ちに `true` を返し、配列の反復処理を中止します。一方、 `callbackFn` がすべての要素に対して[偽値](/ja/docs/Glossary/Falsy)を返した場合、 `some()` は `false` を返します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節を参照してください。

`some()` は数学の量化子 "there exists" のような働きをします。特に、空配列の場合、どのような条件でも `false` を返します。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

`some()` は呼び出し元の配列を変更しませんが、 `callbackFn` として指定された関数は配列を変更することができます。ただし、配列の長さは `callbackFn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `callbackFn` は、 `some()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `callbackFn` によって変更された場合、`callbackFn` に渡される値はその要素が取得された時点での値になります。[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)された要素は処理されません。

> [!WARNING]
> 上記のように進行中の配列に対して変更を行うと、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

`some()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列要素の値のテスト

次の例は、配列のいずれかの要素に 10 よりも大きいものがあるかどうかをテストします。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### アロー関数を使った配列要素のテスト

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)は、より短い構文で同じテストを提供します。

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### ある値が配列に存在するかどうかのチェック

`includes()` メソッドを真似て、このカスタム関数は配列にその要素が存在する場合に `true` を返します。

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "grapefruit"); // false
checkAvailability(fruits, "banana"); // true
```

### 任意の値の論理値への変換

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスしたい場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、まず `filter()` を使用して正の値を抽出し、次に `some()` を使用して、配列が厳密に増加しているかどうかを確認しています。

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .some((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });
console.log(isIncreasing); // false
```

### 疎配列に対する some() の使用

`some()` は空のスロットでは処理を実行しません。

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### 配列以外のオブジェクトに対する some() の呼び出し

`some()` メソッドは `this` の `length` プロパティを読み込み、キーが `length` より小さい非負の整数である各プロパティに、すべてアクセスするか `callbackFn` が `true` を返すまでアクセスします。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 3, // length が 3 .なので some() 空は無視される
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.some` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.some` のポリフィル](https://www.npmjs.com/package/array.prototype.some)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}
