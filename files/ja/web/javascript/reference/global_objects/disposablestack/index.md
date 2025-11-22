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

そして `disposer` がスコープ外になると、`move()` で移動されていない限り、登録されたすべてのリソースが登録の逆順で破棄されます。

リソースを取得する式がどれほど長くても、別の文に _切り出さない_ ことが良い習慣です。`use()` または `adopt()` の呼び出しでリソースを取得する式を常にラップして、リソースが直ちにスタックに登録されることを保証する必要があります。

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

これら二つのコードスニペットは機能的には同等です。しかし、最初の方がリソースが一行で宣言され登録されるため、エラーが起こりにくいです。もし誰かが二番目のスニペットにおいて二行目と三行目の間にさらにコードを追加した場合、エラーが発生しリソースがリークする可能性があります。

## コンストラクター

- {{jsxref("DisposableStack/DisposableStack", "DisposableStack()")}}
  - : 新しい `DisposableStack` オブジェクトを作成します。

## インスタンスプロパティ

これらのプロパティは DisposableStack.prototype で定義されており、すべての DisposableStack インスタンスで共有されます。

- {{jsxref("Object/constructor", "DisposableStack.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`DisposableStack` インスタンスの場合、初期値は {{jsxref("DisposableStack/DisposableStack", "DisposableStack")}} コンストラクターです。
- {{jsxref("DisposableStack.prototype.disposed")}}
  - : 読み取り専用。`DisposableStack` が破棄されている場合は `true`、そうでない場合は `false` を返します。
- `DisposableStack.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"DisposableStack"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("DisposableStack.prototype.adopt()")}}
  - : スタックに破棄可能プロトコルを実装していない値を、カスタムのディスポーザー関数を提供することで登録します。
- {{jsxref("DisposableStack.prototype.defer()")}}
  - : スタックが破棄されるときに呼び出される、コールバック関数を受け取ります。
- {{jsxref("DisposableStack.prototype.dispose()")}}
  - : 登録された順番とは逆の順番で、スタックに登録されたすべてのディスポーザーを呼び出し、スタックを破棄します。
- {{jsxref("DisposableStack.prototype.move()")}}
  - : スタック内に同じディスポーザーを含む新しい `DisposableStack` インスタンスを作成し、ディスポーザーをまったく呼び出すことなくスタックを破棄済みとしてマークします。
- {{jsxref("DisposableStack.prototype.use()")}}
  - : 破棄可能プロトコルを実装している値をスタックに登録します。
- [`DisposableStack.prototype[Symbol.dispose]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
  - : `dispose()` メソッドのエイリアス。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `DisposableStack` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("AsyncDisposableStack")}}
