---
title: Symbol.dispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/dispose
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

**`Symbol.dispose`** は、静的データプロパティーで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.dispose` を表します。{{jsxref("Statements/using", "using")}} 宣言が、変数を初期化するオブジェクトにおけるこのシンボルを調べることで、変数がスコープ外になる際に呼び出すメソッドを取得します。

## 値

ウェルノウンシンボル `Symbol.dispose` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

処分可能な（disposable）オブジェクトとは、 `[Symbol.dispose]()` メソッドを備えたオブジェクトです。このメソッドは、以下のようなセマンティクスを持つことが期待されます:

- このメソッドを呼び出すことで、呼び出し元がこのオブジェクトの使用を継続する意図がないことを、処分可能なオブジェクトに伝えます。このメソッドは、ファイルシステムハンドル、ストリーム、ホストオブジェクトなど、リソースを明示的にクリーンアップするために必要なロジックを実行する必要があります。
- このメソッドが例外をスローした場合、通常はリソースを解放できなかったことを意味します。
- 同じオブジェクトにおいて2回以上呼び出された場合でも、メソッドは例外をスローするべきではありません。ただし、この要件は強制ではありません。

このメソッドはプロミスを返すべきではありません。なぜなら、`[Symbol.dispose]()` が返すプロミスは {{jsxref("Statements/await_using", "await using")}} によって待機されないからです。非同期の処分可能オブジェクトを宣言するには、{{jsxref("Symbol.asyncDispose")}} を使用してください。

## 例

### ユーザー定義の処分可能オブジェクト

`[Symbol.dispose]` により、カスタムの処分可能オブジェクトを作成できます。詳細については、{{jsxref("Statements/using", "using")}} を参照してください。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `Symbol.dispose` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/using", "using")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
- [`Iterator.prototype[Symbol.dispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
