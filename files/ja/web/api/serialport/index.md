---
title: SerialPort
slug: Web/API/SerialPort
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

`SerialPort` は [ウェブシリアル API](/ja/docs/Web/API/Web_Serial_API) のインターフェイスで、ホスト機器のシリアルポートへのアクセスを提供します。

{{InheritanceDiagram}}

## コンストラクター

このインターフェイスのインスタンスは {{domxref("Serial")}} インターフェイスのメソッドを呼ぶことにより得られるので、このインターフェイス自身のコンストラクターはありません。

## インスタンスプロパティ

- {{domxref("SerialPort.readable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ポートに接続されたデバイスからデータを受信する用の {{domxref("ReadableStream")}} を返します。
- {{domxref("SerialPort.writable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ポートに接続されたデバイスにデータを送信する用の {{domxref("WritableStream")}} を返します。

## インスタンスメソッド

- {{domxref("SerialPort.forget()")}} {{Experimental_Inline}}
  - : ポートを閉じ、忘れる処理が完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("SerialPort.getInfo()")}} {{Experimental_Inline}}
  - : ポートの情報が入ったオブジェクトを返します。
- {{domxref("SerialPort.open()")}} {{Experimental_Inline}}
  - : ポートを開く処理が完了したら解決する {{jsxref("Promise")}} を返します。デフォルトでは、ポートは 8 ビットのデータ、1 ビットのストップビット、パリティチェックなしで開かれます。
- {{domxref("SerialPort.setSignals()")}} {{Experimental_Inline}}
  - : ポートの制御信号を設定し、完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("SerialPort.getSignals()")}} {{Experimental_Inline}}
  - : ポートの制御信号の現在の状態が入ったオブジェクトで解決する {{jsxref("Promise")}} を返します。
- {{domxref("SerialPort.close()")}} {{Experimental_Inline}}
  - : ポートを閉じる処理が完了したら解決する {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("SerialPort.connect_event", "connect")}} {{Experimental_Inline}}
  - : ポートがデバイスに接続された時、発火するイベントです。
- {{domxref("SerialPort.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : ポートがデバイスから切断された時、発火するイベントです。

## 例

### ポートを開く

シリアルポートで通信を行う前に、ポートを開く必要があります。ポートを開くことで、サイトはデータがどのように送受信されるかを決めるために必要なパラメーターを設定できます。開発者は、適切なパラメーターを決めるために接続するデバイスのドキュメントを参照するべきです。

```js
await port.open({ baudRate: 9600 /* ボーレートを決める */ });
```

`open()` が返した `Promise` が解決したら、`readable` および `writable` プロパティにアクセスすることで、デバイスからデータを受信したり接続されたデバイスにデータを送信したりする用の {{domxref("ReadableStream")}} および {{domxref("WritableStream")}} を得ることができます。

### ポートからデータを受信する

この例は、ポートからデータを受信する方法を示します。外側のループは致命的なエラーが発生して `readable` が `null` になるまで新しい `reader` を生成し続けることで、致命的でないエラーを処理します。

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| がキャンセルされました。
        break;
      }
      // |value| について何かをする
    }
  } catch (error) {
    // |error| を処理する
  } finally {
    reader.releaseLock();
  }
}
```

### ポートにデータを送信する

この例では、ポートに文字列を送信する方法を示します。送信前に、{{domxref("TextEncoder")}} により文字列を `Uint8Array` に変換します。

```js
const encoder = new TextEncoder();
const writer = port.writable.getWriter();
await writer.write(encoder.encode("PING"));
writer.releaseLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
