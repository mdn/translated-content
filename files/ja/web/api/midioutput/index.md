---
title: MIDIOutput
slug: Web/API/MIDIOutput
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref('Web MIDI API','','',' ')}} の **`MIDIOutput`** インターフェイスは、出力デバイスのキューにメッセージを追加するメソッドと、メッセージのキューをクリアするメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは固有のプロパティを実装していませんが、{{domxref("MIDIPort")}} からプロパティを継承しています。_

## インスタンスメソッド

_このインターフェイスは {{domxref("MIDIPort")}} からもメソッドを継承します。_

- {{domxref("MIDIoutput.send()")}}
  - : MIDI ポートに送信するメッセージをキューに追加します。
- {{domxref("MIDIOutput.clear()")}}
  - : キュー上の送信待ち中のデータをすべてクリアします。

## 例

以下の例は、真ん中のドをすぐに MIDI チャンネル 1 に送信します。

```js
function sendMiddleC(midiAccess, portID) {
  const noteOnMessage = [0x90, 60, 0x7f]; // ノートオン、真ん中のド、フルベロシティー
  const output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // メッセージを送信する
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
