---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
---

{{jsSidebar("Errors")}}

## 信息

```plain
TypeError: can't assign to property "x" on {y}: not an object (Firefox)
TypeError: Cannot create property 'x' on {y} (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}.

## 原因

在 {{jsxref("Strict_mode")}}下，当试图给一个{{Glossary("symbol")}},{{Glossary("string")}},{{Glossary("number")}}或者一个{{Glossary("boolean")}}类型的数据创建一个属性时就会报 {{jsxref("TypeError")}}, 任何 {{Glossary("Primitive")}} 值都不允许有{{Glossary("property/JavaScript", "property")}}.

这个问题可能是由一个错误的值被放在了一个错误的地方导致的，或者预期{{jsxref("String")}}或{{jsxref("Number")}}的对象变体

## 示例

### 错误的情况

```js example-bad
"use strict";

var foo = "my string";
// 下面这行代码在非严格模式下不会执行。
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### 如何正确使用

有两种方式，第一种修复这部分代码阻止{{Glossary("primitive")}}被用于这种情况，或者可以通过使用对象构造器创建来修复。

```js example-good
"use strict";

var foo = new String("my string");
foo.bar = {};
```

## 页面相关

- {{jsxref("Strict_mode")}}
- {{Glossary("primitive")}}
