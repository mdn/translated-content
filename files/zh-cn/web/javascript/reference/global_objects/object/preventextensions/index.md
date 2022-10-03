---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef("Global_Objects", "Object")}}

**`Object.preventExtensions()`**方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## 语法

```plain
Object.preventExtensions(obj)
```

### 参数

- `obj`
  - : 将要变得不可扩展的对象。

### 返回值

已经不可扩展的对象。

## 描述

如果一个对象可以添加新的属性，则这个对象是可扩展的。`Object.preventExtensions()`将对象标记为不再可扩展，这样它将永远不会具有它被标记为不可扩展时持有的属性之外的属性。注意，一般来说，不可扩展对象的属性可能仍然可被*删除*。尝试将新属性添加到不可扩展对象将静默失败或抛出{{jsxref("TypeError")}}（最常见的情况是{{jsxref("Functions_and_function_scope/Strict_mode", "strict mode", "", 1)}}中，但不排除其他情况）。

`Object.preventExtensions()`仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性。

该方法使得目标对象的 `[[prototype]]` 不可变；任何重新赋值 `[[prototype]]` 操作都会抛出 `TypeError` 。这种行为只针对内部的 `[[prototype]]` 属性，目标对象的其它属性将保持可变。

一旦将对象变为不可扩展的对象，就再也不能使其可扩展。

## 例子

```js
// Object.preventExtensions 将原对象变的不可扩展，并且返回原对象。
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2;  // true

// 字面量方式定义的对象默认是可扩展的。
var empty = {};
Object.isExtensible(empty) //=== true

// ...但可以改变。
Object.preventExtensions(empty);
Object.isExtensible(empty) //=== false

// 使用 Object.defineProperty 方法为一个不可扩展的对象添加新属性会抛出异常。
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出 TypeError 异常

// 在严格模式中，为一个不可扩展对象的新属性赋值会抛出 TypeError 异常。
function fail()
{
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();
```

​​​​

不可扩展对象的原型是不可变的：

```plain
var fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: 'hai' };
```

## Notes

在 ES5 中，如果参数不是一个对象类型（而是原始类型），将抛出一个{{jsxref("TypeError")}}异常。在 ES2015 中，非对象参数将被视为一个不可扩展的普通对象，因此会被直接返回。

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
