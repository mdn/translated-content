---
title: "MIDIPort: close() メソッド"
slug: Web/API/MIDIPort/close
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの **`close()`** メソッドは、この `MIDIPort` に接続された MIDI デバイスへのアクセスを利用不可能にします。

ポートが正常に閉じられると、新しい {{domxref("MIDIConnectionEvent")}} が {{domxref("MIDIPort.statechange_event", "MIDIPort statechange")}} と {{domxref("MIDIAccess.statechange_event", "MIDIAccess statechange")}} イベントに渡され、{{domxref("MIDIPort.connection")}} プロパティが `"closed"` になります。

## 構文

```js-nolint
close()
```

### 引数

なし

### 返値

ポートが閉じられると解決する {{jsxref("Promise")}} を返します。

## 例

以下の例では、出力ポートを閉じます。

```js
let output = midiAccess.outputs.get(portID);
output.close(); // ポートを閉じる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
