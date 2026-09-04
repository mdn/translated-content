---
title: AsyncDisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
l10n:
  sourceCommit: 419694495e070daaf466c923b413b3f476740fd6
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`adopt()`** メソッドは、独自の破棄関数を提供することで、非同期破棄プロトコルを実装していない値をスタックに登録します。

`adopt()` メソッドの一般的な情報については、{{jsxref("DisposableStack.prototype.adopt()")}} を参照してください。

## 構文

```js-nolint
adopt(value, onDispose)
```

### 引数

- `value`
  - : スタックに登録する任意の値です。
- `onDispose`
  - : スタックが破棄されるときに呼び出される関数です。この関数は引数として `value` のみを受け取り、プロミスを返すこともできます (その場合は待機されます)。

### 返値

渡された `value` をそのまま返します。

### 例外

- {{jsxref("TypeError")}}
  - : `onDispose` が関数でない場合にスローされます。
- {{jsxref("ReferenceError")}}
  - : スタックがすでに破棄されている場合にスローされます。

## 例

### adopt() の使用

この関数は、関数の実行が完了すると閉じられるファイルハンドル (Node.js の [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)) を作成します。ここでは、このファイルハンドルが非同期破棄プロトコルを実装していないものと仮定します (実際には実装されています)。そのため、`adopt()` を使用してスタックに登録します。`handle.close()` メソッドはプロミスを返すため、破棄処理が待機されるように `AsyncDisposableStack` を使用する必要があります。

```js
async function readFile(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.adopt(
    await fs.open(path),
    async (handle) => await handle.close(),
  );
  const data = await handle.read();
  // 終了する前に、ここで handle.close() メソッドが呼び出され、待機される
  return data;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
