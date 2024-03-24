---
title: "ReadableStream: tee() メソッド"
short-title: tee()
slug: Web/API/ReadableStream/tee
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`tee()`** メソッドは、現在の読み取り可能なストリームを[分配](https://streams.spec.whatwg.org/#tee-a-readable-stream)し、結果の 2 つの分岐を新しい {{domxref("ReadableStream")}} インスタンスとして含む 2 つの要素の配列を返します。

これは、2 つのリーダーがストリームを同時に、おそらく異なる速度で読み取ることができるようにする場合に便利です。 例えば、サーバーからレスポンスを取得してブラウザーにストリーム入力したいが、サービスワーカーのキャッシュにもストリーム入力したい場合は、サービスワーカーでこれを行うことができます。レスポンスの本体を複数回使用することはできないため、これを行うには 2 つのコピーが必要です。

分配したストリームは、 2 つの `ReadableStream` の分岐のうち、消費速度の速い方の速度で部分的に背圧の信号を出し、未読データは、制限や背圧なしに消費速度の遅い方の `ReadableStream` に内部で待ち行列に入れられます。
つまり、両方の分岐の内部キューに未読の要素がある場合、元の `ReadableStream` のコントローラの内部キューが埋まり始め、その {{domxref("ReadableStreamDefaultController.desiredSize", "desiredSize")}} ≤ 0 またはバイトストリームのコントローラーの {{domxref("ReadableByteStreamController.desiredSize", "desiredSize")}} ≤ 0 になると、コントローラーは `pull(controller)` を呼び出すのを、新しい {{domxref("ReadableStream.ReadableStream", "new ReadableStream()")}} に渡された元の入力に対して停止します。一方の分岐のみが消費される場合、本文全体がメモリー上の待ち行列に入れられます。したがって、非常に大きなストリームを並列に異なる速度で読み込むために、組み込みの `tee()` を使用するべきではありません。その代わり、消費速度の遅い方の分岐の速度に完全に背圧するような実装を探しましょう。

ストリームを取り消すには、結果の分岐をどちらも取り消す必要があります。ストリームを分配すると、一般に、その間はそのストリームがロックされ、他のリーダーがロックするのを防ぎます。

## 構文

```js-nolint
tee()
```

### 引数

なし。

### 返値

2 つの {{domxref("ReadableStream")}} インスタンスを含む {{jsxref("Array")}}。

### 例外

- TypeError
  - : ソースストリームは `ReadableStream` ではありません。

## 例

次の簡単な例では、以前に作成したストリームをティーイングした結果の両方のストリーム（生成された配列の 2 つのメンバーに含まれる）を、2 つのストリームからデータを読み取り、各ストリームのチャンクを UI の異なる部分に順番に印刷する関数に渡します。 完全なコードについては、[単純な tee の例](https://mdn.github.io/dom-examples/streams/simple-tee-example/)を参照してください。

```js
function teeStream() {
  const teedOff = stream.tee();
  fetchStream(teedOff[0], list2);
  fetchStream(teedOff[1], list3);
}

function fetchStream(stream, list) {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決するプロミスを返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには 2 つのプロパティが含まれます。
    // done - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      return;
    }

    // フェッチしたストリームの値は Uint8Array です
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list.appendChild(listItem);

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクター
- [ストリームの分岐](/ja/docs/Web/API/Streams_API/Using_readable_streams#ストリームの分岐)
