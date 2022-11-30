---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---

{{JSRef}}

**`Symbol.toStringTag`**，众所周知的 symbol，其是一个字符串值属性，用于创建对象的默认字符串描述。它由 {{jsxref("Object.prototype.toString()")}} 方法内部访问。

{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}{{js_property_attributes(0,0,0)}}

## 示例

### 默认标签

一些值没有 `Symbol.toStringTag`，但是有额外的 `toString()` 表示。有关完整列表，请参见 {{jsxref("Object.prototype.toString()")}}。

```js
Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more
```

### 内置的 toStringTag symbol

Most built-in objects provide their own `@@toStringTag` property. All built-in objects' `@@toStringTag` property is not writable, not enumerable, and configurable.

```js
Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

### 有着 toStringTag 的自定义标签

当创建你自己的类时，JavaScript 默认用 “Object” 标签：

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

现在，在 `toStringTag` 的帮助下，您可以设置自己的自定义标签：

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag 适用于所有 DOM 原型对象

由于 2020 年年中 [WebIDL规范的变化](https://github.com/whatwg/webidl/pull/357)，浏览器正在向所有 DOM 原型对象添加 `Symbol.toStringTag` 属性。例如，要访问 {{domxref("HTMLButtonElement")}} 上的 `Symbol.toStringTag` 属性：

```js
const test = document.createElement('button');
test.toString(); // Returns [object HTMLButtonElement]
test[Symbol.toStringTag];  // Returns HTMLButtonElement
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Symbol.toStringTag` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.prototype.toString()")}}
