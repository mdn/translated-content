---
title: AbstractModuleSource
slug: Web/JavaScript/Reference/Global_Objects/AbstractModuleSource
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

**`AbstractModuleSource`** 对象表示使用 [`import source`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/source) 或 [`import.source()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import/source) 获取的模块的已编译源代码。不存在可直接访问的 `AbstractModuleSource` 构造函数。

## 描述

`AbstractModuleSource` 构造函数（通常称为 `%AbstractModuleSource%`，以表示其“内在性”——因为它并不对应任何向 JavaScript 程序公开的全局对象）充当所有模块源代码子类的超类，为它们提供一组工具方法的公共接口。该构造函数并未直接暴露：不存在全局的 `AbstractModuleSource` 属性。只能通过 `Object.getPrototypeOf(moduleSourceObject.constructor)` 等类似方式访问它。

### AbstractModuleSource 对象

- [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)

JavaScript 模块源代码对象将由 [ECMAScript 模块阶段导入](https://github.com/tc39/proposal-esm-phase-imports)提案添加。

## 构造函数

此对象无法直接实例化——使用 `new` 尝试构造它会抛出 {{jsxref("TypeError")}}。

```js
import source modSource from "./module.wasm";

new (Object.getPrototypeOf(modSource.constructor))();
// TypeError: Abstract class AbstractModuleSource not directly constructable
```

应改为使用 `import source`、`import.source()` 或具体模块类型的 API（例如 `WebAssembly.Module()`）来获取模块源代码对象。这些机制不会调用抽象构造函数。

## 实例属性

这些属性定义在 `AbstractModuleSource.prototype` 上，由所有 `AbstractModuleSource` 子类实例共享。

- {{jsxref("Object/constructor", "AbstractModuleSource.prototype.constructor")}}
  - : 创建该实例对象的构造函数。`AbstractModuleSource.prototype.constructor` 是隐藏的 `AbstractModuleSource` 构造函数，但每个模块源代码子类也会定义自己的 `constructor` 属性。
- `AbstractModuleSource.prototype[Symbol.toStringTag]`
  - : [`AbstractModuleSource.prototype[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是一个 getter，它根据构造函数的身份返回相应的字符串，例如 `"WebAssembly.Module"` 或 `"ModuleSource"`。如果 `this` 的值不是某个模块源代码子类的实例，则返回 `undefined`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("Statements/import/source", "import source")}}
