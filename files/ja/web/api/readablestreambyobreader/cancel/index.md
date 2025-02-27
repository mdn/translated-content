---
title: "ReadableStreamBYOBReader: cancel() メソッド"
short-title: cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`cancel()`** は {{domxref("ReadableStreamBYOBReader")}} インターフェイスのメソッドで、ストリームがキャンセルされたときに解決するプロミス ({{jsxref("Promise")}}) を返します。
このメソッドを呼び出すと、コンシューマーがストリームへの関心を失ったことを示します。

> [!NOTE]
> リーダーがアクティブな場合、 `cancel()` メソッドは、関連するストリームの場合（{{domxref("ReadableStream.cancel()")}}）と同じように振る舞います。

## 構文

```js-nolint
cancel()
cancel(reason)
```

### 引数

- `reason` {{optional_inline}}
  - : 人間が読むことができるキャンセルの理由です。基盤ソースは使用しても使用しなくても構いません。

### 返値

プロミス ({{jsxref("Promise")}})。 `reason` 引数で指定された値で満たされます。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableStreamBYOBReader` ではないか、ストリームに所有者がいません。

## 例

このコード例では、ボタンが押されたときに `cancel()` メソッドを呼び出します。理由として文字列 "user choice" を渡します。
プロミスはキャンセルが完了すると解決します。

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log(`cancel complete`));
});
```

このコードは、[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#result)の例で実行することができます（**Cancel stream** ボタンを押してください）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
