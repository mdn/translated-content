---
title: "MIDIPort: manufacturer プロパティ"
slug: Web/API/MIDIPort/manufacturer
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`manufacturer`** は、ポートの製造元を返します。

## 値

ポートの製造元を表す文字列です。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの製造元をコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.manufacturer);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
