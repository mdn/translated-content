---
title: AsyncDisposableStack
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`AsyncDisposableStack`** オブジェクトは、 スタック自体が破棄される際に実行される[非同期ディスポーザー](/ja/docs/Web/JavaScript/Reference/Statements/await_using)のスタックを表します。ディスポーザー関数は登録された順序とは逆の順序で実行され、強力なエラー処理が保証されます。`move()` メソッドを呼び出すと、現在登録されているディスポーザーを実行する責任が新しい `AsyncDisposableStack` に移され、新たなディスポーザーは登録できなくなります。

使い捨てスタックの使用方法に関する一般的な情報については、{{jsxref("DisposableStack")}} を参照してください。

## コンストラクター

- {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack()")}}
  - : 新しい `AsyncDisposableStack` オブジェクトを作成します。

## インスタンスプロパティ

これらのプロパティは `AsyncDisposableStack.prototype` で定義され、すべての `AsyncDisposableStack` インスタンスで共有されます。

- {{jsxref("Object/constructor", "AsyncDisposableStack.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクタ関数。`AsyncDisposableStack` インスタンスの場合、初期値は {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack")}} コンストラクタです。
- {{jsxref("AsyncDisposableStack.prototype.disposed")}}
  - : 読み取り専用。`AsyncDisposableStack` が破棄されている場合は `true`、そうでない場合は `false` を返します。
- `AsyncDisposableStack.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列`"AsyncDisposableStack"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
  - : 非同期ディスポーザブルプロトコルを実装していない値を、カスタムのディスポーザー関数を提供することでスタックに登録します。
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
  - : このスタックを破棄し、登録されたすべてのディスポーザーを登録とは逆の順序で呼び出します。
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
  - : スタックが破棄されるときに呼び出されるコールバック関数を受け取ります。
- {{jsxref("AsyncDisposableStack.prototype.move()")}}
  - : このスタックと同じディスポーザを含む新しい `AsyncDisposableStack` インスタンスを作成し、ディスポーザを呼び出すことなくこのスタックを破棄済みとしてマークします。
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
  - : 非同期ディスポーザブルプロトコルを実装している値をスタックに登録します。
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
  - : `disposeAsync()` メソッドのエイリアス。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`AsyncDisposableStack` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
