---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`copyWithin()`** メソッドは、サイズを変更せずに、配列の一部を同じ配列内の別の場所にシャローコピーして返します。

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## 構文

```js
copyWithin(target);
copyWithin(target, start);
copyWithin(target, start, end);
```

### 引数

- `target`

  - : シーケンスのコピー先となる、0 から始まる位置です。負の場合、`target` は最後から数えられます。

    `target` が `arr.length` 以上の場合、何もコピーされません。 `target` が `start` より後に配置されている場合、コピーされたシーケンスは `arr.length` に合うように切り詰められます。

- `start` {{optional_inline}}

  - : 要素のコピー元の始まりを表す、0 から始まる位置です。負の場合、 `start` は最後から数えられます。

    `start` が省略された場合、`copyWithin` は最初の要素からコピーします（つまり、初期値は 0 です）。

- `end` {{optional_inline}}

  - : 要素のコピー元の末尾を表す、0 から始まるインデックスです。 `copyWithin` のコピーは `end` を含みません。負の場合、 `end` は最後から数えられます。

  `end` が省略された場合、 `copyWithin` は最後までコピーします（つまり、初期値は `arr.length` です）。

### 返値

変更された配列です。

## 解説

`copyWithin()` メソッドは C 言語や C++ の `memmove` のような動きをし、{{jsxref("Array")}} のデータを移動するための高いパフォーマンスのメソッドです。これは特に {{jsxref("TypedArray/copyWithin", "TypedArray")}} の同名メソッドに当てはまります。シーケンスはコピーされ貼り付けられる処理が一命令で行われます。コピー＆ペースト領域が重なっている場合でも、ペーストされたシーケンスはコピーされた値を持ちます。

`copyWithin()` は変更を行うメソッドです。 `this` の長さは変更しませんが、 `this` の内容を変更し、必要に応じて新しいプロパティを作成します。

`Array.prototype.copyWithin()` 関数は、意図的に一般化されています。 `this` 値が {{jsxref("Array")}} オブジェクトである必要はありません。

## 例

### copyWithin の使用

```js
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

console.log([].copyWithin.call({ length: 5, 3: 1 }, 0, 3));
// {0: 1, 3: 1, length: 5}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.copyWithin` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
