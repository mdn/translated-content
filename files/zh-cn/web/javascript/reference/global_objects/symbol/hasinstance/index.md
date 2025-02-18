---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
---

{{JSRef}}

**`Symbol.hasInstance`** 用于判断某对象是否为某构造器的实例。因此你可以用它自定义 {{jsxref("Operators/instanceof", "instanceof")}} 操作符在某个类上的行为。

{{InteractiveExample("JavaScript Demo: Symbol.hasInstance")}}

```js interactive-example
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof Array1);
// Expected output: true
```

{{js_property_attributes(0,0,0)}}

## 示例

你可实现一个自定义的`instanceof` 行为，例如：

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Operators/instanceof", "instanceof")}}
