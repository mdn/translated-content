---
title: "WritableStreamDefaultController: signal プロパティ"
short-title: signal
slug: Web/API/WritableStreamDefaultController/signal
l10n:
  sourceCommit: e34bb4838ec2cd80afa7f37c190bf1c2750fe2a1
---

{{APIRef("Streams")}}

**`signal`** は {{domxref("WritableStreamDefaultController")}} インターフェイスの読み取り専用プロパティで、このコントローラーに関連付けられた {{domxref("AbortSignal")}} を返します。

## 値

{{domxref("AbortSignal")}} オブジェクトです。

## 例

### 長い書き込み操作の中止

この例では、ローカルシンクを使用して低速処理をシミュレーションします。データが書き込まれたら何もしませんが、少し待ちます。これにより、 `writer.abort()` メソッドを呼び出してプロミスを即座に拒否するのに十分な時間が得られます。

```js
const writingStream = new WritableStream({
  // 長い処理をシミュレーションするために、低速ローカルシンクを定義します。
  write(controller) {
    return new Promise((resolve, reject) => {
      controller.signal.addEventListener("abort", () =>
        reject(controller.signal.reason),
      );

      // 何もせずにローカルシンクのデータで待ちます。
      setTimeout(resolve, 1000); // 低速処理をシミュレーションするタイムアウト
    });
  },
});

// 書き込みを実行
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// 手動で書き込みを中止
await writer.abort("Manual abort!");
```

### `AbortSignal` を下層レイヤーへ移譲

この例では、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して、実際にメッセージをサーバーに送信しています。フェッチ API は {{domxref("AbortSignal")}} にも対応しています。 `fetch` メソッドと {{domxref("WritableStreamDefaultController")}} の両方に同じオブジェクトを使用することが可能です。

```js
const endpoint = "https://www.example.com/api"; // デモ用の架空の URL
const writingStream = new WritableStream({
  async write(chunk, controller) {
    // Write to the server using the Fetch API
    const response = await fetch(endpoint, {
      signal: controller.signal, // fetch と controller の両方で同じオブジェクトを使用
      method: "POST",
      body: chunk,
    });
    await response.text();
  },
});

// 書き込みを実行
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// 手動で書き込みを中止
await writer.abort("Manual abort!");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
