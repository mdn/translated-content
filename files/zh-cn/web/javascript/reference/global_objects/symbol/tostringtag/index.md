---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---

{{JSRef}}

**`Symbol.toStringTag`** 是一个内置 symbol，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签，通常只有内置的 {{jsxref("Object.prototype.toString()")}} 方法会去读取这个标签并把它包含在自己的返回值里。

{{js_property_attributes(0,0,0)}}

## 描述

许多内置的 JavaScript 对象类型即便没有 `toStringTag` 属性，也能被 `toString()` 方法识别并返回特定的类型标签，比如：

```js
Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more
```

另外一些对象类型则不然，`toString()` 方法能识别它们是因为引擎为它们设置好了 `toStringTag` 标签：

```js
Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

但你自己创建的类不会有这份特殊待遇，`toString()` 找不到 `toStringTag` 属性时只好返回默认的 `Object` 标签：

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

加上 `toStringTag` 属性，你的类也会有自定义的类型标签了：

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.toString()")}}
