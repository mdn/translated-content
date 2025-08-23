---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

**`Symbol.dispose`** は、静的データプロパティーで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.dispose` を表します。{{jsxref("Statements/using", "using")}} 宣言が、変数を初期化するオブジェクトにおけるこのシンボルを調べることで、変数がスコープ外になる際に呼び出すメソッドを取得します。

## 値

ウェルノウンシンボル `Symbol.dispose` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

An object is disposable if it has the `[Symbol.dispose]()` method. The method is expected to have the following semantics:
処分可能な（disposable）オブジェクトとは、 `[Symbol.dispose]()` メソッドを備えたオブジェクトです。このメソッドは、以下のようなセマンティクスを持つことが期待されます:

- このメソッドを呼び出すことで、呼び出し元がこのオブジェクトの使用を継続する意図がないことを、処分可能なオブジェクトに伝えます。このメソッドは、ファイルシステムハンドル、ストリーム、ホストオブジェクトなど、リソースを明示的にクリーンアップするために必要なロジックを実行する必要があります。
- When an exception is thrown from this method, it typically means that the resource could not be explicitly freed.
- If called more than once on the same object, the function should not throw an exception. However, this requirement is not enforced.

This method should not return a promise, as promises returned by `[Symbol.dispose]()` are not awaited by {{jsxref("Statements/await_using", "await using")}}. To declare async disposables, use {{jsxref("Symbol.asyncDispose")}}.

## Examples

### User defined disposables

`[Symbol.dispose]` allows the creation of custom disposables. See the {{jsxref("Statements/using", "using")}} reference for more information.

```js
class Disposable {
  constructor() {
    this.disposed = false;
  }

  [Symbol.dispose]() {
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable();
{
  using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}
console.log(resource.isDisposed); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.dispose` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/using", "using")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
- [`Iterator.prototype[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
