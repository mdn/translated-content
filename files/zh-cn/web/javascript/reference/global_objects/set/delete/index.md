---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---
{{JSRef}}

**`delete()`** 方法可以从一个 `Set` 对象中删除指定的元素。

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## 语法

```js
delete(value)
```

### 参数

- `value`
  - : 将要删除的元素。

### 返回值

成功删除返回 `true`，否则返回 `false`。

## 示例

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // 返回 false，不包含 "bar" 这个元素
console.log(mySet.delete("foo")); // 返回 true，删除成功

console.log(mySet.has("foo"));    // 返回 false，"foo" 已经成功删除
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
