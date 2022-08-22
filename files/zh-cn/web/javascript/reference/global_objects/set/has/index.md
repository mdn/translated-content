---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---
{{JSRef("Global_Objects", "Set")}}

## 概述

**has()** 方法返回一个布尔值来指示对应的值 value 是否存在 Set 对象中。

## 语法

```plain
mySet.has(value);
```

### 参数

- value
  - : 必需。用以测试该值是否存在于 Set 对象中。

### 返回值

- Boolean
  - : 如果指定的值（value）存在于 Set 对象当中，返回`true`；否则返回 `false`。

## 示例

### 使用 `has` 方法

```js
var mySet = new Set();
mySet.add('foo');

mySet.has('foo');  // 返回 true
mySet.has('bar');  // 返回 false

var set1 = new Set();
var obj1 = {'key1': 1};
set1.add(obj1);

set1.has(obj1);        // 返回 true
set1.has({'key1': 1}); // 会返回 false，因为其是另一个对象的引用
set1.add({'key1': 1}); // 现在 set1 中有 2 条（不同引用的）对象了
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
