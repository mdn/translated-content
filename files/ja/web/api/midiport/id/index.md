---
title: "MIDIPort: id プロパティ"
slug: Web/API/MIDIPort/id
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`id`** は、ポートの一意な ID を返します。

## 値

ポートの ID を表す文字列です。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの ID をコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.id);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
