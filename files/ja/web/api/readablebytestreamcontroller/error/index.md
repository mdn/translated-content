---
title: "ReadableByteStreamController: error() メソッド"
short-title: error()
slug: Web/API/ReadableByteStreamController/error
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Streams")}}

**`error()`** は {{domxref("ReadableByteStreamController")}} インターフェイスのメソッドで、関連するストリームとの今後のやり取りを、指定した理由でエラーとします。

これは一般的に、データを取得するインターフェイスからのエラー（ファイル読み込みやソケットエラーなど）を表面化するために、基盤から呼び出されます。
また、例えばストリームが依存しているシステムの別の部分に障害が発生した場合など、ストリームエラーを発生させるために他の場所から呼び出すこともできます。

## 構文

```js-nolint
error(errorObject)
```

### 引数

- `errorObject`
  - : 今後のやり取りを失敗させるための任意のオブジェクトです。

### 返値

なし ({{jsxref("undefined")}}).

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableByteStreamController` ではないか、何らかの理由でストリームが読み取り可能ではありません。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#読み取り可能なソケットプッシュバイトストリームの作成) の例では、`error()` を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームエラーを発生させる方法を示しています。

具体的には、基盤ソースの `start()` メソッドは `readRepeatedly()` を呼び出して、すべてのセットアップ処理を行い、データのリクエストを行います。
これはプロミスを返します。
データを読み込む際に発生したエラーは、連鎖する `catch()` 関数で捕捉されます。
`catch()` では、コントローラーの `error()` を呼び出して、その理由を基盤から渡します。

```js
function start(controller) {
  readRepeatedly().catch((e) => controller.error(e));
}

function readRepeatedly() {
  return socket.select2().then(() => {
    // …
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
