---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: 075e089ec955f14ed65dfaa0bf3311051c58f666
---

**`using`** 声明用于声明块级作用域的局部变量，这些变量会被*同步释放*。类似于 {{jsxref("Statements/const", "const")}}，使用 `using` 声明的变量必须要被初始化，且不能被重新赋值。变量的值必须是 `null`、`undefined` 或是一个实现了 [`[Symbol.dispose]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) 方法的对象。当变量退出作用域时，会调用该对象的 `[Symbol.dispose]()` 方法，以确保资源被释放。

## 语法

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - 要声明的变量名。每个变量名必须是合法的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)，且*不能是*[解构赋值模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)。
- `valueN`
  - 变量的初始值，可以是任意合法的表达式，但值必须是 `null`、`undefined` 或一个实现了 `[Symbol.dispose]()` 方法的对象。

## 描述

此声明可用于以下场景：

- 用于[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)内。
- 用于任意[函数体](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)或[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)内。
- 用于[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的顶层作用域中。
- 用于 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)、[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)、[`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 循环的初始化表达式中。

特别注意，它不可用于以下场景：

- 不可用于脚本的顶层作用域中，因为脚本的作用域持久存在。
- 不可用于 [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 语句的顶层作用域内
- 不可用于 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环的初始化表达式中。因为循环变量只能是字符串或 symbol 类型的值，这样做没有意义。

`using` 声明一个可释放的资源，该资源的生命周期与变量所在的作用域（如块语句、函数、模块等）绑定。当退出作用域时，该资源会被同步释放。变量允许取值为 `null` 或 `undefined`，因此对应资源可选存在与否。

当变量首次被声明且取值非空时，会从对象中获取一个*释放器（disposer）*。如果 `[Symbol.dispose]` 属性未包含函数，则会抛出一个 `TypeError`。该释放器会被保存到当前作用域中。

当变量退出其作用域时，会调用释放器。如果同一作用域包含了多个 `using` 或 {{jsxref("Statements/await_using", "await using")}} 声明，则所有释放器会以声明顺序的逆序执行，而不考虑声明类型。保证执行所有释放器（类似 {{jsxref("Statements/try...catch", "try...catch...finally")}} 语句的 `finally` 块）。在释放过程中抛出的所有错误，包括导致退出作用域的初始化错误（如果有），都会被聚合到 {{jsxref("SuppressedError")}} 中，其中较早抛出的异常将作为 `suppressed` 属性，较晚抛出的异常将作为 `error` 属性。该 `SuppressedError` 会在释放完成后被抛出。

`using` 将资源管理和词法作用域绑定在一起，这既方便，但又有时候会令人困惑。当变量本身退出作用域时，有许多办法可以保存变量的值，因此你可能会持有一个已经被释放的资源的引用。参见下方的一些示例，有的可能不按你的预期表现。如果你希望手动管理资源释放，同时保持相同的错误处理准则，可以改用 {{jsxref("DisposableStack")}}。

## 示例

In the following examples, we assume a simple `Resource` class that has a `getValue` method and a `[Symbol.dispose]()` method:

```js
class Resource {
  value = Math.random();
  #isDisposed = false;

  getValue() {
    if (this.#isDisposed) {
      throw new Error("Resource is disposed");
    }
    return this.value;
  }

  [Symbol.dispose]() {
    this.#isDisposed = true;
    console.log("Resource disposed");
  }
}
```

### `using` in a block

The resource declared with `using` is disposed when exiting the block.

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // resource disposed here
}
```

### `using` in a function

You can use `using` in a function body. In this case, the resource is disposed when the function finishes executing, immediately before the function returns.

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

Here, `resource[Symbol.dispose]()` will be called after `getValue()`, before the `return` statement executes.

The resource may outlive the declaration, in case it's captured by a [closure](/en-US/docs/Web/JavaScript/Guide/Closures):

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

In this case, if you call `example()()`, you will always execute `getValue` on a resource that's already disposed, because the resource was disposed when `example` returns. In case you want to dispose the resource immediately after the callback has been called once, consider this pattern:

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

Here, we _alias_ a `const`-declared resource to a `using`-declared resource, so that the resource is only disposed after the callback is called; note that if it is never called then the resource will never be cleaned up.

### `using` in a module

You can use `using` at the top level of a module. In this case, the resource is disposed when the module finishes executing.

```js
using resource = new Resource();
export const value = resource.getValue();
// resource disposed here
```

`export using` is invalid syntax, but you can `export` a variable declared elsewhere using `using`:

```js
using resource = new Resource();
export { resource };
```

This is still discouraged, because the importer will always receive a disposed resource. Similar to the closure problem, this causes the value of resource to live longer than the variable.

### `using` with `for...of`

You can use `using` in the initializer of a `for...of` loop. In this case, the resource is disposed on every loop iteration.

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // resource disposed here
}
```

### Multiple `using`

The following are two equivalent ways to declare multiple disposable resources:

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// OR

using resource1 = new Resource();
using resource2 = new Resource();
```

In both cases, when the scope exits, `resource2` is disposed before `resource1`. This is because `resource2` may have a dependency on `resource1`, so it's disposed first to ensure that `resource1` is still available when `resource2` is disposed.

### Optional `using`

`using` allows the variable to have a value of `null` or `undefined`, so the resource can be optionally present. This means that, for example, if you are checking the availability of a resource of some kind:

```js
function acquireResource() {
  // Imagine some real-world relevant condition here,
  // such as whether there's space to allocate for this resource
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}
```

You don't have to do this:

```js example-bad
const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

And can instead do this:

```js example-good
using resource = acquireResource();
console.log(resource?.getValue());
```

### `using` declaration without using the variable

You can achieve automatic resource disposing using `using`, without even using the variable. This is very useful for setting up a context within a block, such as creating a lock:

```js
{
  using _ = new Lock();
  // Perform concurrent operations here
  // Lock disposed (released) here
}
```

Note that `_` is a normal identifier, but it's a convention to use it as a "throwaway" variable. To create multiple unused variables, you need to use distinct names, for example by using a variable name prefixed with `_`.

### Initialization and temporal dead zones

`using` variables are subject to the same [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) restriction as `let` and `const` variables. This means that you can't access the variable before the initialization—the valid lifetime of the resource is strictly from its initialization to the end of its scope. This is enables [RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)-style resource management.

```js
let useResource;
{
  useResource = () => resource.getValue();
  useResource(); // Error: Cannot access 'resource' before initialization
  using resource = new Resource();
  useResource(); // Valid
}
useResource(); // Error: Resource is disposed
```

### Error handling

The `using` declaration is the most useful for managing resource disposal in the presence of errors. If you are not careful, some resources may leak because the error prevents code afterwards from executing.

```js
function handleResource(resource) {
  if (resource.getValue() > 0.5) {
    throw new Error("Resource value too high");
  }
}

try {
  using resource = new Resource();
  handleResource(resource);
} catch (e) {
  console.error(e);
}
```

This will successfully catch the error thrown by `handleResource` and log it, and no matter if `handleResource` throws an error or not, the resource is disposed before exiting the `try` block.

Here, if you don't use `using`, you may do something like:

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

But, if `handleResource()` throws an error, then control never reaches `resource[Symbol.dispose]()`, and the resource is leaked. Furthermore, if you have two resources, then errors thrown in earlier disposals may prevent later disposals from running, leading to more leaks.

Consider a more complicated case where the disposer itself throws an error:

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

You can inspect the error thrown in your browser's console. It has the following structure:

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Can't dispose resource1
    error: Error: Error in main block
  error: Error: Can't dispose resource2
```

As you can see, `error` contains all the errors that were thrown during disposal, as a {{jsxref("SuppressedError")}}. Each additional error is added as the `error` property, and the original error is added as the `suppressed` property.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript resource management](/zh-CN/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Symbol.dispose")}}
- {{jsxref("DisposableStack")}}
