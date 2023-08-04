---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
---

{{JSRef}}

**`@@iterator`** 属性的初始值和 {{jsxref("Set.prototype.values()", "values")}} 属性的初始值是同一个函数。

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## Syntax

```plain
mySet[Symbol.iterator]
```

### Return value

返回 `Set` **iterator** 函数，默认值是 {{jsxref("Set.prototype.values()", "values()")}} 函数。

## Examples

### Using `[@@iterator]()`

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

### Using `[@@iterator]()` with `for..of`

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
