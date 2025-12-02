---
title: Symbol.asyncDispose
short-title: asyncDispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

**`Symbol.asyncDispose`** は静的データプロパティであり、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.asyncDispose` を表します。 {{jsxref("Statements/await_using", "await using")}} 宣言は、変数の初期化子において、変数がスコープ外になった際に呼び出すメソッドとしてこのシンボルを検索します。

## 値

ウェルノウンシンボル `Symbol.asyncDispose` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

非同期に処分可能な (async disposable) オブジェクトとは、 `[Symbol.asyncDispose]()` メソッドを備えたオブジェクトです。このメソッドは、以下のようなセマンティクスを持つことが期待されます。

- このメソッドを呼び出すことで、呼び出し元がこのオブジェクトの使用を継続する意図がないことを、非同期に処分可能なオブジェクトに伝えます。このメソッドは、ファイルシステムハンドル、ストリーム、ホストオブジェクトなど、リソースを明示的にクリーンアップするために必要なロジックを実行する必要があります。
- このメソッドはプロミスを返すことがあり、そのプロミスを待ってから処理を続行します。
- このメソッドで例外が発生した場合、通常はリソースを解放できなかったことを意味します。非同期に処分可能なオブジェクトは、返される Promise が履行されるまで「処分された」とはみなされません。
- 同じオブジェクトにおいて 2 回以上呼び出された場合に、メソッドは例外を発生させるべきではありません。ただし、この要件は強制ではありません。

## 例

### ユーザー定義の非同期に処分可能なオブジェクト

`[Symbol.dispose]` により、独自の非同期に処分可能なオブジェクトが作成できます。詳細については、`await using` を参照してください。

```js
class Disposable {
  #fileHandle;
  #disposed;

  constructor(handle) {
    this.#disposed = false;
    this.#fileHandle = handle;
  }

  async [Symbol.asyncDispose]() {
    await this.#fileHandle.close();
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable(await fs.open("my-file.txt", "r"));
{
  await using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}
console.log(resource.isDisposed); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.asyncDispose` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
