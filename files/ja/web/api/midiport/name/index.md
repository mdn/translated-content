---
title: "MIDIPort: name プロパティ"
slug: Web/API/MIDIPort/name
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`name`** は、ポートのシステム名を返します。

## 値

ポートのシステム名を表す文字列です。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの名前をコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.name);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
