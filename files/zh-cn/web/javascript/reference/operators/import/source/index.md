---
title: import.source()
slug: Web/JavaScript/Reference/Operators/import/source
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{SeeCompatTable}}

**`import.source()`** 语法的行为与普通的 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 语法类似，但它返回的是一个表示模块已编译源代码的对象。模块会被获取并编译，但其依赖不会被加载，模块也不会被链接或求值。它可以在之后通过命令式方式进行求值，例如使用[动态导入](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)或 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)。

要使用 `import.source()`，目标模块必须属于支持源阶段导入的类型。目前，只有 WebAssembly 模块支持源阶段导入，并会返回 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。JavaScript 模块源对象将由 [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) 提案引入。

有关源阶段导入语义的更多信息，请参阅 [`import source`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/source) 声明形式。

## 语法

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

`import.source()` 是一种特殊语法（“元属性”），而不是 `import` 对象上的方法。

### 参数

请参阅 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#参数)。

### 返回值

当模块成功加载并编译后，返回一个会兑现为 {{jsxref("AbstractModuleSource")}} 对象的 Promise，该对象表示模块的已编译源代码。

与普通的 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#返回值) 一样，如果模块无法加载或解析，该 Promise 会被拒绝。如果模块类型不支持源阶段导入，它还会以 {{jsxref("SyntaxError")}} 被拒绝。该导入不会加载依赖、链接模块或对模块求值，因此这些后续步骤中的错误不会被报告。

## 示例

### 使用 import.source()

```js
const myModuleSource = await import.source("./my-module.wasm");

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/source", "import source")}}
- {{jsxref("AbstractModuleSource")}}
