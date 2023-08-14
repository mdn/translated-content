---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
---

{{JSRef}}

**`Reflect.get()`** 方法与从 对象 (`target[propertyKey]`) 中读取属性类似，但它是通过一个函数执行来操作的。

## 语法

```plain
Reflect.get(target, propertyKey[, receiver])
```

### 参数

- `target`
  - : 需要取值的目标对象
- `propertyKey`
  - : 需要获取的值的键值
- receiver
  - : 如果`target`对象中指定了`getter`，`receiver`则为`getter`调用时的`this`值。

### 返回值

属性的值。

### 异常

如果目标值类型不是 {{jsxref("Object")}}，则抛出一个 {{jsxref("TypeError")}}。

## 描述

`Reflect.get`方法允许你从一个对象中取属性值。就如同[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors) 语法，但却是通过函数调用来实现。

## 示例

### `使用 Reflect.get()`

```js
// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
var x = { p: 1 };
var obj = new Proxy(x, {
  get(t, k, r) {
    return k + "bar";
  },
});
Reflect.get(obj, "foo"); // "foobar"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Reflect")}}
- [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)
