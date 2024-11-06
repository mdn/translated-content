---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
---

{{JSRef}}

静态方法 **`Reflect.defineProperty()`** 基本等同于 {{jsxref("Object.defineProperty()")}} 方法，唯一不同是返回 {{jsxref("Boolean")}} 值。

## 语法

```plain
Reflect.defineProperty(target, propertyKey, attributes)
```

### 参数

- `target`
  - : 目标对象。
- `propertyKey`
  - : 要定义或修改的属性的名称。
- `attributes`
  - : 要定义或修改的属性的描述。

### 返回值

{{jsxref("Boolean")}} 值指示了属性是否被成功定义。

### 异常

如果`target`不是 {{jsxref("Object")}}，抛出一个 {{jsxref("TypeError")}}。

## 描述

`Reflect.defineProperty` 方法允许精确添加或修改对象上的属性。更多的细节请参阅类似的{{jsxref("Object.defineProperty")}} 。

> **备注：** `Object.defineProperty` 返回一个对象，或者如果属性没有被成功定义，抛出一个 {{jsxref("TypeError")}}。相比之下，`Reflect.defineProperty` 方法只返回一个 {{jsxref("Boolean")}}，来说明该属性是否被成功定义。

## 示例

### 使用 `Reflect.defineProperty()`

```plain
let obj = {}
Reflect.defineProperty(obj, 'x', {value: 7})  // true
obj.x                                         // 7
```

### 检查属性是否被成功定义

{{jsxref("Object.defineProperty")}} 方法，如果成功则返回一个对象，否则抛出一个 {{jsxref("TypeError")}} 。另外，当定义一个属性时，你也可以使用 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 去捕获其中任何的错误。而因为 `Reflect.defineProperty` 返回 Boolean 值作为成功的标识，所以只能使用 [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) ：

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // 成功
} else {
  // 失败
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
