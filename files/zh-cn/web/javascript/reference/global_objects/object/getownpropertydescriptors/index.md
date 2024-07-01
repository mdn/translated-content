---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

**`Object.getOwnPropertyDescriptors()`** 静态方法返回给定对象的所有自有属性描述符。

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## 语法

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### 参数

- `obj`
  - : 要获取其所有自有属性描述符的对象。

### 返回值

一个包含给定对象的所有自有属性描述符的对象。如果没有属性，则可能是一个空对象。

## 描述

该方法允许查看对象的所有自有属性的精确描述。在 JavaScript 中，一个*属性*由一个字符串值的名称或一个 {{jsxref("Symbol")}} 和一个属性描述符组成。关于属性描述符类型及其特性的更多信息可以在 {{jsxref("Object.defineProperty()")}} 中找到。

一个*属性描述符*是一个记录，具有以下一些特性：

- `value`
  - : 与属性关联的值（仅限数据描述符）。
- `writable`
  - : 当且仅当与属性关联的值可以更改时，为 `true`（仅限数据描述符）。
- `get`
  - : 作为属性 getter 的函数，如果没有 getter 则为 {{jsxref("undefined")}}（仅限访问器描述符）。
- `set`
  - : 作为属性 setter 的函数，如果没有 setter 则为 {{jsxref("undefined")}}（仅限访问器描述符）。
- `configurable`
  - : 当且仅当此属性描述符的类型可以更改且该属性可以从相应对象中删除时，为 `true`。
- `enumerable`
  - : 当且仅当此属性在相应对象的属性枚举中出现时，为 `true`。

## 示例

### 浅拷贝一个对象

而 {{jsxref("Object.assign()")}} 方法仅将可枚举的自有属性从源对象复制到目标对象，你可以使用此方法和 {{jsxref("Object.create()")}} 方法对两个未知对象进行[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)：

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### 创建子类

创建子类的典型方法是定义子类，将其原型设置为超类的实例，然后在该实例上定义属性。这么写很不优雅，特别是对于 getter 和 setter 而言。相反，你可以使用此代码设置原型：

```js
function superclass() {}
superclass.prototype = {
  // 在这里定义超类的构造方法、方法和属性
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // 在这里定义子类的构造方法、方法和属性
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.getOwnPropertyDescriptors` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
