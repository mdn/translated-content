---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
---

{{JSRef}} {{SeeCompatTable}}

**`flat()`** 函數以遞迴方式將特定深度的子陣列重新串接成為一新的陣列

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## 語法

```js
var newArray = arr.flat([depth]);
```

### 參數

- `depth` {{optional_inline}}
  - : 指定巢狀陣列展開的深度。預設為 1。

### 回傳值

函數將會回傳一個由原先陣列的子陣列串接而成的新陣列。

## 範例

### 展開巢狀陣列

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

### 當遭遇空元素時

`flat()` 函數會自動清除陣列中空的元素

```js
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

## 替代方案

### `reduce` 與 `concat`

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();

//展開單層陣列
arr1.reduce((acc, val) => acc.concat(val), []); // [1, 2, 3, 4]
```

```js
//欲展開更深層的巢狀結構請使用reduce與concat的遞迴
function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

```js
//使用stack來實作非遞迴的展開
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}
flatten(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

```js
// 递归版本的反嵌套
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
