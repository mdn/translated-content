---
title: AsyncDisposableStack.prototype.disposeAsync()
short-title: disposeAsync()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposeAsync
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`disposeAsync()`** メソッドは、登録されているすべてのディスポーザーを登録順とは逆の順序で呼び出し、各ディスポーザーの完了を待ってから次のディスポーザを呼び出すことで、このスタックを破棄します。スタックがすでに解放されている場合、このメソッドは何も行いません。

これは、スコープ終了時に `disposer = new AsyncDisposableStack()` を使用して `await` と同じ動作を実行します。スコープ終了時以外の場所でクリーンアップが必要な場合に使用できます。

## 構文

```js-nolint
disposeAsync()
```

### 引数

なし。

### 返値

登録されているすべてのディスポーザーが順番に完了したときに、`undefined` で解決される新しい {{jsxref("Promise")}}。

### 例外

`disposeAsync()` は同期的にエラーをスローすることはありません。返されるプロミスは、次のいずれかのエラーで拒否される可能性があります。

- {{jsxref("SuppressedError")}}
  - : スタック内の複数のディスポーザーがエラーをスローした場合に発生します。 エラーが 1 つだけの場合は、そのエラーがそのまま再スローされます。追加のエラーごとに新しい {{jsxref("SuppressedError")}} が作成され、元のエラーは `suppressed` プロパティに、新しいエラーは `error` プロパティに設定されます。

## 例

### スタックの破棄

ここでは、{{jsxref("AsyncDisposableStack/use", "use()")}}、{{jsxref("AsyncDisposableStack/adopt", "adopt()")}}、{{jsxref("AsyncDisposableStack/defer", "defer()")}} メソッドを使って、3 つのディスポーザーをスタックに追加します。`disposeAsync()` を呼び出すと、ディスポーザーは登録した順序とは逆の順序で呼び出されます。

通常、`disposeAsync()` を手動で呼び出す必要はありません。スタックを {{jsxref("Statements/await_using", "await using")}} で宣言すると、スコープを抜けるときに [`[Symbol.asyncDispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) メソッドが自動的に呼び出されます。

```js
class Resource {
  #doDisposal() {
    // ここでは、より実用的な解放処理が行われると想定してください
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async dispose() {
    await this.#doDisposal();
    console.log("Resource disposed");
  }
  async [Symbol.asyncDispose]() {
    await this.#doDisposal();
    console.log("Resource disposed via Symbol.asyncDispose");
  }
}

async function doSomething() {
  const disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  const resource2 = disposer.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  disposer.defer(() => console.log("Deferred disposer"));
  disposer.disposeAsync();
  // 次の順序でログ出力されます:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
}

doSomething();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
