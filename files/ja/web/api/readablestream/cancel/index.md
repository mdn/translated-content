---
title: "ReadableStream: cancel() メソッド"
short-title: cancel()
slug: Web/API/ReadableStream/cancel
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`cancel()`** は {{domxref("ReadableStream")}} インターフェイスのメソッドで、ストリームがキャンセルされたときに解決する {{jsxref("Promise")}} を返します。

キャンセルは、ストリームを完全に終了し、読み取り待ちのチャンクがキューに入れられている場合でも、それ以上データを必要としない場合に使用します。 キャンセルが呼び出された後、そのデータは失われ、ストリームは読み取り不能になります。 これらのチャンクをまだ読み取り、ストリームを完全に取り除くわけではない場合は、 {{domxref("ReadableStreamDefaultController.close()")}} を使用してください。

## 構文

```js-nolint
cancel()
cancel(reason)
```

### 引数

- `reason` {{optional_inline}}
  - : 人間が読むことができるキャンセルの理由を提供する文字列です。

### 返値

{{jsxref("Promise")}} です。 `reason` 引数で指定された値で履行されます。

### 例外

- {{jsxref("TypeError")}}
  - : キャンセルしようとしているストリームは {{domxref("ReadableStream")}} ではないか、ロックされています。

## 例

Jake Archibald による[フェッチのキャンセル](https://jsbin.com/gameboy/edit?js,console)の例では、ストリームを使用して、チャンクごとに WHATWG HTML 仕様をフェッチします。 各チャンクで文字列 "service workers" を検索します。 検索用語が見つかると、`cancel()` を使用してストリームをキャンセルします — 仕事は終了しているため、ストリームは不要になります。

```js
const searchTerm = "service workers";
// 一致した結果の両側を表示する文字数
const contextBefore = 30;
const contextAfter = 30;
const caseInsensitive = true;
const url = "https://html.spec.whatwg.org/";

console.log(`'${searchTerm}' を '${url}' で検索`);

fetch(url)
  .then((response) => {
    console.log("ヘッダーを受信しました");

    const decoder = new TextDecoder();
    const reader = response.body.getReader();
    const toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
    const bufferSize = Math.max(toMatch.length - 1, contextBefore);

    let bytesReceived = 0;
    let buffer = "";
    let matchFoundAt = -1;

    return reader.read().then(function process(result) {
      if (result.done) {
        console.log("一致するものが見つかりませんでした");
        return;
      }

      bytesReceived += result.value.length;
      console.log(`これまでに ${bytesReceived} バイトのデータを受信しました`);

      buffer += decoder.decode(result.value, { stream: true });

      // 一致するものが既に見つかっており、コンテキストを収集していますか？
      if (matchFoundAt === -1) {
        matchFoundAt = (
          caseInsensitive ? buffer.toLowerCase() : buffer
        ).indexOf(toMatch);
      }

      if (matchFoundAt === -1) {
        buffer = buffer.slice(-bufferSize);
      } else if (
        buffer.slice(matchFoundAt + toMatch.length).length >= contextAfter
      ) {
        console.log("これが一致したものです:");
        console.log(
          buffer.slice(
            Math.max(0, matchFoundAt - contextBefore),
            matchFoundAt + toMatch.length + contextAfter,
          ),
        );
        console.log("フェッチのキャンセル");
        reader.cancel();
        return;
      } else {
        console.log("一致が見つかりましたが、さらにコンテキストが必要です…");
      }

      // 読み続ける
      return reader.read().then(process);
    });
  })
  .catch((err) => {
    console.error(
      "失敗しました。詳細については、開発者ツールを参照してください。 レスポンスから CORS ヘッダー抜けていませんか？",
    );
    throw err;
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
