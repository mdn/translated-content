---
title: AsyncDisposableStack.prototype.use()
short-title: use()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use
l10n:
  sourceCommit: 419694495e070daaf466c923b413b3f476740fd6
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`use()`** メソッドは、[非同期破棄プロトコル](/ja/docs/Web/JavaScript/Guide/Resource_management) を実装する値をスタックに登録します。

`use()` メソッドに関する一般的な情報については {{jsxref("DisposableStack.prototype.use()")}} を参照してください。

## 構文

```js-nolint
use(value)
```

### 引数

- `value`
  - : スタックに登録する値です。`[Symbol.asyncDispose]()` または `[Symbol.dispose]()` メソッドを持つか、`null` または `undefined` である必要があります。

### 返値

渡されたものと同じ `value`。

### 例外

- {{jsxref("TypeError")}}
  - : `value` が `null` または `undefined` ではなく、かつ `[Symbol.asyncDispose]()` または `[Symbol.dispose]()` メソッドを持たない場合にスローされます。
- {{jsxref("ReferenceError")}}
  - : スタックがすでに破棄されている場合にスローされます。

## 例

### use() の使用

この関数は、ファイル (Node.js の [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)) を読み込み、その内容を返します。`FileHandle` クラスはファイルを非同期で閉じる `[Symbol.asyncDispose]()` メソッドを実装しているため、関数の処理が完了するとファイルハンドルは自動的に閉じられます。

```js
async function readFileContents(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.use(await fs.open(path));
  const data = await handle.read();
  return data;
  // ここで disposer が破棄され、それに伴って handle も閉じられます
}
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
