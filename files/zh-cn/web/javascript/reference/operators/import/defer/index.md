---
title: import.defer()
slug: Web/JavaScript/Reference/Operators/import/defer
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{SeeCompatTable}}

**`import.defer()`** 语法的行为与普通的 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 语法类似，但它返回的是一个[延迟模块命名空间对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer#延迟模块命名空间对象)。模块及其依赖会先被获取并链接，但它们的同步求值会延迟到访问该命名空间的属性时才发生。

关于延迟求值（包括它与顶层 `await` 的交互）的更多信息，请参阅 [`import defer`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer) 声明形式。

## 语法

```js-nolint
import.defer(moduleName)
import.defer(moduleName, options)
```

`import.defer()` 是一种特殊语法（“元属性”），而不是 `import` 对象上的方法。

### 参数

请参阅 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#参数)。

### 返回值

在模块图加载并链接完成，且所有急切求值的[顶层 `await` 依赖](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer#顶层_await)完成求值之后，返回一个会兑现为[延迟模块命名空间对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer#延迟模块命名空间对象)的 Promise。

与普通的 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#返回值) 一样，如果模块或其依赖无法加载、解析或链接，该 Promise 会被拒绝。如果某个急切求值的模块抛出错误，它也会被拒绝。而仍处于延迟阶段的求值错误，则会由触发求值的命名空间操作以同步方式抛出。

## 示例

### 使用 import.defer()

> [!NOTE]
> 可以保证，对返回的 Promise 进行 `await` 时不会意外调用导出的 `then` 方法——这是[普通模块命名空间对象](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#模块命名空间对象)常见的陷阱——因为延迟模块命名空间对象永远不会暴露名为 `then` 的属性。

```js
const ts = await import.defer("typescript");

function compilePath(path) {
  // typescript 模块子图的求值从这里开始
  const program = ts.createProgram([path], {});
}
```

不要立即解构返回的命名空间，因为这会触发求值：

```js example-bad
const { createProgram } = await import.defer("typescript");
// typescript 模块现在已经被求值。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/defer", "import defer")}}
