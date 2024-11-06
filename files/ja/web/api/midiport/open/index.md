---
title: "MIDIPort: open() メソッド"
slug: Web/API/MIDIPort/open
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの **`open()`** メソッドは、この `MIDIPort` に接続された MIDI デバイスを明示的に利用可能にします。

ポートを開くのに成功したら、新しい {{domxref("MIDIConnectionEvent")}} が {{domxref("MIDIPort.statechange_event", "MIDIPort statechange")}} と {{domxref("MIDIAccess.statechange_event", "MIDIAccess statechange")}} イベントに渡され、{{domxref("MIDIPort.connection")}} プロパティが `"open"` になります。

このメソッドが呼ばれたときにポートが既に開かれている場合は、Promise は正常に解決します。

## 構文

```js-nolint
open()
```

### 引数

なし

### 返値

ポートへのアクセスを正常に得たら解決する {{jsxref("Promise")}} を返します。

### 例外

- `InvalidAccessError` {{domxref("DOMException")}}
  - : ポートが利用不可能で開けない場合、Promise はこのエラーで拒否されます。

## 例

以下の例では、出力ポートを開きます。

```js
const output = midiAccess.outputs.get(portID);
output.open(); // ポートを開く
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
