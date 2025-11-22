---
title: DisposableStack
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`DisposableStack`** オブジェクトは、[ディスポーザー](/ja/docs/Web/JavaScript/Reference/Statements/using)のスタックを表します。スタックに登録したディスポーザーは、スタック自体が破棄される時に実行されます。ディスポーザーの関数は、強力なエラーハンドリングによる保証の元、登録した順番とは逆の順番で実行されます。ディスポーザーの `move()` メソッドを呼び出すと、現在登録しているディスポーザーを新しい `DisposableStack` に呼び出す責任を移譲し、追加のディスポーザーの登録を防止します。

## 解説

`DisposableStack` は、そのインターフェイスの観点から見ると、厳密には「スタック」ではありません。ディスポーザーをスタックにプッシュするためのメソッドはいくつかありますが、ディスポーザーを一つポップする方法はありません。それどころか、スタックが破棄されるときに _すべての_ ディスポーザーが一つずつポップされて実行されます。

`DisposableStack`に[処分可能なリソース](/ja/docs/Web/JavaScript/Guide/Resource_management)を登録するには、{{jsxref("DisposableStack/use", "use()")}}、{{jsxref("DisposableStack/adopt", "adopt()")}}、または{{jsxref("DisposableStack/defer", "defer()")}}メソッドを使用します。

```js
using disposer = new DisposableStack();
const reader = disposer.use(stream.getReader());
```

Then, when the `disposer` goes out of scope, all resources registered to it are disposed in reverse order of registration, unless they have been moved out with `move()`.

It is good practice to _not_ extract the resource acquisition expression to a separate statement, no matter how long the expression is. You should always wrap the `use()` or `adopt()` call around the resource acquisition expression to ensure that the resource is registered to the stack immediately.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

Functionally, these two code snippets are equivalent. However, the first one is less error-prone because the resource is declared and registered in a single line. If someone puts more code between the second and third lines of the second snippet, an error could occur, causing the resource to leak.

## Constructor

- {{jsxref("DisposableStack/DisposableStack", "DisposableStack()")}}
  - : Creates a new `DisposableStack` object.

## Instance properties

These properties are defined on `DisposableStack.prototype` and shared by all `DisposableStack` instances.

- {{jsxref("Object/constructor", "DisposableStack.prototype.constructor")}}
  - : The constructor function that created the instance object. For `DisposableStack` instances, the initial value is the {{jsxref("DisposableStack/DisposableStack", "DisposableStack")}} constructor.
- {{jsxref("DisposableStack.prototype.disposed")}}
  - : Read-only. Returns `true` if the `DisposableStack` has been disposed, or `false` if not.
- `DisposableStack.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"DisposableStack"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("DisposableStack.prototype.adopt()")}}
  - : Registers a value that doesn't implement the disposable protocol to the stack by providing a custom disposer function.
- {{jsxref("DisposableStack.prototype.defer()")}}
  - : Takes a callback function to be called when the stack is disposed.
- {{jsxref("DisposableStack.prototype.dispose()")}}
  - : Disposes this stack by calling all disposers registered to it in reverse order of registration.
- {{jsxref("DisposableStack.prototype.move()")}}
  - : Creates a new `DisposableStack` instance that contains the same disposers as this stack, and then marks this stack as disposed, without calling any disposers.
- {{jsxref("DisposableStack.prototype.use()")}}
  - : Registers a value that implements the disposable protocol to the stack.
- [`DisposableStack.prototype[Symbol.dispose]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
  - : An alias for the `dispose()` method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `DisposableStack` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("AsyncDisposableStack")}}
