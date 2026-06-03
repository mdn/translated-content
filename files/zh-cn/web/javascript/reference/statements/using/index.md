---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: 075e089ec955f14ed65dfaa0bf3311051c58f666
---

**`using`** 声明用于声明块级作用域的局部变量，这些变量会被*同步释放*。与 {{jsxref("Statements/const", "const")}} 类似，使用 `using` 声明的变量必须要被初始化，且不能被重新赋值。变量的值必须是 `null`、`undefined` 或是一个实现了 [`[Symbol.dispose]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) 方法的对象。当变量退出作用域时，会调用该对象的 `[Symbol.dispose]()` 方法，确保资源被释放。

## 语法

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 要声明的变量名。每个变量名必须是合法的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)，且*不能用*[解构赋值模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)。
- `valueN`
  - : 变量的初始值，可以是任意合法的表达式，但值必须是 `null`、`undefined` 或是一个实现了 `[Symbol.dispose]()` 方法的对象。

## 描述

此声明可用于以下场景：

- 可用于[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)内。
- 可用于任意[函数体](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)或[类的静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)内。
- 可用于[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的顶层作用域中。
- 可用于 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)、[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)、[`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 循环的初始化表达式中。

特别注意，它不可用于以下场景：

- 不可用于脚本的顶层作用域中，因为脚本的作用域恒久存在。
- 不可用于 [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 语句的顶层作用域内
- 不可用于 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环的初始化表达式中。因为循环变量只能是字符串或 symbol 类型的值，这样做没有意义。

`using` 声明一个可释放的资源，该资源的生命周期与变量所在的作用域（如块语句、函数、模块等）绑定。当退出作用域时，该资源会被同步释放。变量允许取值为 `null` 或 `undefined`，因此对应资源是可选存在的。

当变量首次被声明且取值非空（不为 null 或 undefined）时，会从对象中获取一个*释放器*（disposer）。如果 `[Symbol.dispose]` 属性未包含函数，则会抛出一个 `TypeError`。该释放器会被保存到当前作用域中。

当变量退出其作用域时，会调用释放器。如果同一作用域包含了多个 `using` 或 {{jsxref("Statements/await_using", "await using")}} 声明，则所有释放器会以声明顺序的逆序执行，且不考虑声明类型。保证所有释放器（类似 {{jsxref("Statements/try...catch", "try...catch...finally")}} 语句的 `finally` 块）都会执行。在释放过程中抛出的所有错误，包括导致退出作用域的初始化错误（如果有），都会被聚合到 {{jsxref("SuppressedError")}} 中，其中较早抛出的异常将作为 `suppressed` 属性，较晚抛出的异常将作为 `error` 属性。该 `SuppressedError` 会在释放完成后抛出。

`using` 将资源管理和词法作用域绑定在一起，这既方便，但又有时候会令人困惑。当变量本身退出作用域时，有许多办法可以保存变量的值，因此你可能会持有一个已经被释放的资源的引用。参见下方的一些示例，有的可能不按你的预期表现。如果你希望手动管理资源释放，同时保持相同的错误处理准则，可以改用 {{jsxref("DisposableStack")}}。

## 示例

在以下示例中，我们假设一个简单的 `Resource` 类，该类包含 `getValue` 方法和 `[Symbol.dispose]()` 方法。

```js
class Resource {
  value = Math.random();
  #isDisposed = false;

  getValue() {
    if (this.#isDisposed) {
      throw new Error("资源被释放");
    }
    return this.value;
  }

  [Symbol.dispose]() {
    this.#isDisposed = true;
    console.log("资源已被释放");
  }
}
```

### 在块内使用 `using`

`using` 声明的资源会在退出块时被释放。

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // 资源在这里被释放
}
```

### 在函数内使用 `using`

你可以在函数体内部使用 `using`。在本示例中，资源会在函数执行完毕，即将返回前被释放。

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

这里，`resource[Symbol.dispose]()` 会在 `getValue()` 之后， `return` 语句执行前被调用。

在资源被[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)捕获的情况下，资源的生命周期可能会超出其声明时的作用域：

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

在本示例中，如果你调用 `example()()`，将总是会在一个已经被释放的资源上执行 `getValue`，这是因为资源在 `example` 返回时就已经被释放。如果你希望回调被调用一次后就立即释放资源，可以考虑这个模式：

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

这里，我们将一个用 `const` 声明的资源*别名*为 `using` 声明的资源，使得该资源只会在调用回调后才被释放；需要注意的是，如果回调从未被调用，那么该资源将永远不会被清理。

### 在模块内使用 `using`

你可以在模块的顶层作用域中使用 `using`。在本示例中，资源将在模块执行完毕时被释放。

```js
using resource = new Resource();
export const value = resource.getValue();
// 资源在这里被释放
```

`export using` 是无效语法，但你可以导出（`export`）在其他位置使用 `using` 声明的变量：

```js
using resource = new Resource();
export { resource };
```

仍然不推荐这种做法，因为导入方总是会接收一个已经被释放的资源。这与闭包问题相似，会造成资源的值比变量存活得更久。

### 将 `using` 与 `for...of` 一起用

你可以在 `for...of` 循环的初始化表达式中使用 `using`。在本示例中，资源将在每次循环迭代后被释放。

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // 资源在这里被释放
}
```

### 多个 `using`

下面是两种等价的方法，用于声明多个可释放的资源：

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// 或

using resource1 = new Resource();
using resource2 = new Resource();
```

在这两种情况下，当作用域结束时，`resource2` 会先于 `resource1` 被释放。这是因为 `resource2` 可能依赖于 `resource1`，进而先被释放，以确保 `resource2` 被释放时 `resource1` 仍然可用。

### 可选的 `using`

`using` 允许变量的值为 `null` 或 `undefined`，因此资源是可选存在的。这意味着，假设当你在检查某种资源是否可用时：

```js
function acquireResource() {
  // 可以设想一些现实世界的相关情况，
  // 例如是否有足够的空间来容纳这种资源。
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}
```

你不必这样做：

```js example-bad
const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

而是可以这样做：

```js example-good
using resource = acquireResource();
console.log(resource?.getValue());
```

### 不使用变量的 `using` 声明

你可以使用 `using` 实现资源自动释放，甚至无需使用变量。这在块内建立某种上下文时非常有用，例如创建一个锁：

```js
{
  using _ = new Lock();
  // 在此处执行并发操作
  // 在此处释放锁
}
```

注意 `_` 是一个普通的标识符，但通常将其作为“一次性”变量。如果你需要创建多个未使用的变量，则必须使用不同的变量名，例如用下划线 `_` 作为前缀的变量名。

### 初始化与暂时性死区

`using` 声明的变量和 `let`、`const` 声明的变量一样，受相同的[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)限制。这意味着你不能在初始化前访问该变量——资源的有效生命周期严格限制为初始化开始到作用域结束为止。这使得我们可以实现类似 [RAII](https://zh.wikipedia.org/wiki/RAII) 风格的资源管理。

```js
let useResource;
{
  useResource = () => resource.getValue();
  useResource(); // Error: Cannot access 'resource' before initialization
  using resource = new Resource();
  useResource(); // 有效
}
useResource(); // Error: Resource is disposed
```

### 错误处理

在发生错误的情况下，`using` 声明在管理资源释放方面尤为有效。如果你不够小心的话，错误可能会阻止代码后续执行，从而导致某些资源泄漏。

```js
function handleResource(resource) {
  if (resource.getValue() > 0.5) {
    throw new Error("资源值过大");
  }
}

try {
  using resource = new Resource();
  handleResource(resource);
} catch (e) {
  console.error(e);
}
```

这将成功捕获 `handleResource` 抛出的错误并打印出来，并且无论 `handleResource` 是否抛出错误，资源都会在退出 `try` 块前被释放。

这里，如果你不使用 `using`，你可能会这样做：

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

但是，如果 `handleResource()` 抛出了错误，那么程序将永远无法到达 `resource[Symbol.dispose]()`，进而导致资源泄漏。此外，如果你有两个资源，在较早的一个资源释放过程中抛出的错误可能会阻止后一个资源执行释放操作，从而产生更多资源泄漏。

考虑一个更复杂的情况，即释放器本身抛出了错误：

```js
class CantDisposeMe {
  #name;
  constructor(name) {
    this.#name = name;
  }
  [Symbol.dispose]() {
    throw new Error(`Can't dispose ${this.#name}`);
  }
}

let error;

try {
  using resource1 = new CantDisposeMe("resource1");
  using resource2 = new CantDisposeMe("resource2");
  throw new Error("Error in main block");
} catch (e) {
  error = e;
}
```

你可以在浏览器的控制台中查看抛出的错误，其结构如下：

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Can't dispose resource1
    error: Error: Error in main block
  error: Error: Can't dispose resource2
```

如你所见，`error` 以 {{jsxref("SuppressedError")}} 的形式包含了在释放过程中抛出的所有错误。每一个后续产生的错误都会被添加为 `error` 属性，而最初的错误则会被添加为 `suppressed` 属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 资源管理](/zh-CN/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Symbol.dispose")}}
- {{jsxref("DisposableStack")}}
