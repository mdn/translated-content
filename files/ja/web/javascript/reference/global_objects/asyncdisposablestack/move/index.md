---
title: AsyncDisposableStack.prototype.move()
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/move
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`move()`** メソッドは、このスタックと同じディスポーザーを含む新しい `AsyncDisposableStack` インスタンスを作成し、その後ディスポーザーを呼び出すことなく、このスタックを破棄済みとしてマークします。

## 構文

```js-nolint
move()
```

### 引数

なし。

### 返値

新しい {{jsxref("AsyncDisposableStack")}} インスタンス。

### 例外

- {{jsxref("ReferenceError")}}
  - : スタックがすでに破棄されている場合にスローされます。

## 例

### スタックの所有権を取得する

```js
async function consumeStack(stack) {
  await using newStack = stack.move(); // newStack がディスポーザーの所有権を持ちます
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // 関数を終了する直前に newStack は破棄されます
}

const stack = new AsyncDisposableStack();
console.log(stack.disposed); // false
await consumeStack(stack);
console.log(stack.disposed); // true
```

### 2 つのコードパスでリソースを破棄できるようにする

`move()` の主な用途は、1 つ以上のリソースがあり、それらをその場で破棄するか、後で使うために保持するかを選択できる場合です。この場合は、リソースを `AsyncDisposableStack` に格納し、後で使用するために保持する必要がある場合に `move()` を呼び出します。

```js
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  static async init() {
    // init の終了時に破棄される AsyncDisposableStack を作成します。
    // 構築が成功した場合は、`stack` 内のすべてを `#disposables` に移し、
    // 後で破棄されるようにします。
    await using stack = new AsyncDisposableStack();

    const channel = stack.use(await getChannel());

    const socket = stack.use(await getSocket());

    // ここまで到達した場合、構築中にエラーは発生しておらず、
    // `stack` からディスポーザーを安全に移動できます。
    return new PluginHost(channel, socket, stack.move());

    // 構築に失敗した場合、この行に到達する前に `stack` が破棄され、
    // それに伴って `channel` と `socket` も順に破棄されます。
  }

  constructor(channel, socket, disposables) {
    this.#channel = channel;
    this.#socket = socket;
    this.#disposables = disposables;
  }

  [Symbol.asyncDispose]() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    // `this.#disposables` を `using` 変数に入れて、
    // 関数終了時に自動的に破棄されるようにします。
    await using disposables = this.#disposables;

    // 注: `#socket` と `#channel` は、下で呼び出される
    // `disposables[Symbol.asyncDispose]()` によって破棄されるため、
    // ここで解放できます。
    // すべてのディスポーザブルで必須ではありませんが、
    // これらのオブジェクトはもう使用できなくなるため、
    // 後始末として適切です。
    this.#socket = undefined;
    this.#channel = undefined;
    this.#disposables = undefined;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
