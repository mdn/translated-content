---
title: "MIDIPort: type プロパティ"
slug: Web/API/MIDIPort/type
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`type`** は、ポートの種類を返し、この MIDI ポートが入力ポートなのか出力ポートなのかを表します。

## 値

ポートの種類を表す文字列で、以下のいずれかです。

- `"input"`
  - : この `MIDIPort` は入力ポートです。
- `"output"`
  - : この `MIDIPort` は出力ポートです。

## 例

以下の例では、すべての入力ポートを走査し、その `type` をコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.type); // 常に input のはず
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
