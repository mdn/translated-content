---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`unshift()`** メソッドは、配列の最初に 1 つ以上の要素を追加し、新しい配列の長さを返します。

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## 構文

```js
unshift(element0);
unshift(element0, element1);
unshift(element0, element1, /* … ,*/ elementN);
```

### 引数

- `elementN`
  - : `arr` の先頭に追加する要素。

### 返値

メソッドを呼び出した後のオブジェクトの新しい {{jsxref("Array.length", "length")}} プロパティの値です。

## 解説

`unshift` メソッドは、与えられた要素を配列風オブジェクトの一番最初に挿入します。

{{jsxref("Array.prototype.push()")}} は `unshift()` と似た動作をしますが、配列の末尾に対して行う点が異なります。

`Array.prototype.unshift()` は意図的に汎用化されています。このメソッドは，配列に類似したオブジェクトに対して呼び出すことができます。 `length` プロパティ、すなわち連続の最後を示すゼロベースの数値プロパティがないオブジェクトでは、意味のある動作ができない可能性があります。

複数の要素が引数として渡された場合、引数として渡されたものと全く同じ順番で、オブジェクトの最初のチャンクに挿入されることに注意してください。したがって、 `unshift` を `n` 個の引数で 1 回呼び出すのと、1 個の引数で `n` 回（例えばループを使って）呼び出すのとでは同じ結果にはなりません。

例をご覧ください。

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // 配列をリセット

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

## 例

### unshift の使用

```js
const arr = [1, 2];

arr.unshift(0); // 呼び出しの返値は 3、新しい配列の長さ
// arr is [0, 1, 2]

arr.unshift(-2, -1); // 新しい配列の長さは 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // 新しい配列の長さは 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // 新しい配列の長さは 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.unshift` の修正を含むポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
