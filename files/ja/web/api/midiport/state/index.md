---
title: "MIDIPort: state プロパティ"
slug: Web/API/MIDIPort/state
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`state`** は、ポートの状態を返します。

## 値

ポートの状態を表す文字列で、以下のいずれかです。

- `"disconnected"`
  - : この `MIDIPort` が表すデバイスは、システムから切断されています。
- `"connected"`
  - : この `MIDIPort` が表すデバイスは、現在接続されています。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの状態をコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.state);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
