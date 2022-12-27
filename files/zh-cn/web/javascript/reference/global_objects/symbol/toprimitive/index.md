---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
---

{{JSRef}}

**`Symbol.toPrimitive`** 是一个内置的 Symbol 值，它是作为对象的函数值属性存在的，当一个对象转换为对应的原始值时，会调用此函数。

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## 描述

在 `Symbol.toPrimitive` 属性 (用作函数值) 的帮助下，一个对象可被转换为原始值。该函数被调用时，会被传递一个字符串参数 `hint` ，表示要转换到的原始值的预期类型。 `hint` 参数的取值是 `"number"`、`"string"` 和 `"default"` 中的任意一个。

{{js_property_attributes(0,0,0)}}

## 示例

下面的例子展示了， `Symbol.toPrimitive` 属性是如何干扰一个对象转换为原始值时输出的结果的。

```js
// 一个没有提供 Symbol.toPrimitive 属性的对象，参与运算时的输出结果
var obj1 = {};
console.log(+obj1);     // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// 接下面声明一个对象，手动赋予了 Symbol.toPrimitive 属性，再来查看输出结果
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return 10;
    }
    if (hint == "string") {
      return "hello";
    }
    return true;
  }
};
console.log(+obj2);     // 10      -- hint 参数值是 "number"
console.log(`${obj2}`); // "hello" -- hint 参数值是 "string"
console.log(obj2 + ""); // "true"  -- hint 参数值是 "default"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他资料

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
