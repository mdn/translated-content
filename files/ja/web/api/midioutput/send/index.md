---
title: "MIDIOutput: send() メソッド"
slug: Web/API/MIDIOutput/send
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIOutput")}} インターフェイスの **`send()`** メソッドは、対応する MIDI ポートに送信するメッセージをキューに追加します。メッセージはすぐに送信することも、省略可能なタイムスタンプを用いて送信を遅延させることもできます。

## 構文

```js-nolint
send(data)
send(data, timestamp)
```

### 引数

- `data`
  - : 1 個以上の[有効な MIDI メッセージ](https://www.midi.org/midi-articles/about-midi-part-3-midi-messages)の列です。それぞれのエントリーが 1 バイトのデータを表します。
- `timestamp` {{optional_inline}}
  - : ミリ秒単位の時刻を表す {{domxref("DOMHighResTimestamp")}} で、メッセージを送信するまでの遅延を表現します。

### 返値

なし ({{jsxref("undefined")}})

### 例外

- {{jsxref("TypeError")}}
  - : `data` が有効な列でないか、有効な MIDI メッセージが格納されていないとき投げられます。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : `data` がシステムエクスクルーシブメッセージで、{{domxref("MIDIAccess")}} でシステムエクスクルーシブへのアクセスが有効になっていないとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : ポートが切断されているとき投げられます。

## 例

以下の例では、真ん中のドのノートをすぐに送信し、1 秒後にノートオフメッセージを送信します。

```js
function sendMiddleC(midiAccess, portID) {
  const noteOnMessage = [0x90, 60, 0x7f]; // ノートオン、真ん中のド、フルベロシティー
  const output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // タイムスタンプの省略は、すぐに送信することを意味する
  output.send([0x80, 60, 0x40], window.performance.now() + 1000.0); // timestamp = now + 1000ms
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
