---
title: "TypeError: invalid Array.prototype.sort argument"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
---

{{jsSidebar("Errors")}}

JavaScript の例外 "invalid Array.prototype.sort argument" は、 {{jsxref("Array.prototype.sort()")}} の引数が {{jsxref("undefined")}} でもオペランドを比較する関数でもない場合に発生します。

## エラーメッセージ

```plain
TypeError: argument is not a function object (Edge)
TypeError: invalid Array.prototype.sort argument (Firefox)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

{{jsxref("Array.prototype.sort()")}} の引数には、{{jsxref("undefined")}} かオペランドを比較する関数のいずれかが求められれます。

## 例

### 無効な場合

```js example-bad
[1, 3, 2].sort(5); // TypeError

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || "asc"); // TypeError
```

### 有効な場合

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || "asc"]); // [1, 2, 3]
```

## 関連情報

- {{jsxref("Array.prototype.sort()")}}
