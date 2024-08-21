---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`every()`** は {{jsxref("Array")}} インスタンスのメソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

{{EmbedInteractiveExample("pages/js/array-every.html", "shorter")}}

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

`every()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列のそれぞれの要素に対して、指定された `callbackFn` 関数が[偽値](/ja/docs/Glossary/Falsy)を返すまで一度ずつ呼び出します。 そのような要素が見つかった場合、 `every()` は直ちに `false` を返し、配列の反復処理を中止します。そうでない場合、 `callbackFn` がすべての要素に対して[真値](/ja/docs/Glossary/Truthy)を返すと、 `every()` は `true` を返します。

`every` は数学における「∀ （すべての / for all）」記号と同様のふるまいをします。特に、空の配列に対しては `true` を返します。（[空集合](https://ja.wikipedia.org/wiki/空集合#性質)のすべての要素が与えられた任意の条件を満たすことは[空虚に真](https://en.wikipedia.org/wiki/Vacuous_truth)です。）

`callbackFn` は値が代入されている配列の要素に対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

`every()` は呼び出された配列を変更しませんが、 `callbackFn` として指定された関数は変更することができます。ただし、配列の長さは `callbackFn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `callbackFn` は、 `every()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `callbackFn` によって変更された場合、`callbackFn` に渡される値はその要素が取得された時点での値になります。[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)された要素は処理されません。

> [!WARNING]
> 上記のように進行中の配列に対して変更を行うと、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

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

### 疎配列に対する every() の使用

`every()` は空のスロットに対して関数を実行しません。

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### 初期配列への影響（変更、追加、削除）

次の例は、配列が変更されたときに `every` メソッドの動作をテストするものです。

```js
// ---------------
// アイテムの変更
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// ループは 3 回反復処理されるが、
// 何も変更しなければ 2 回実行される
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// アイテムの追加
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 新しい項目を追加しても、ループは 3 回反復処理する
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// アイテムの削除
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 残りのアイテムは `pop()` して取り除かれるため、ループは 2 回だけ反復処理される
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
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
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
