---
title: "MIDIPort: version プロパティ"
slug: Web/API/MIDIPort/version
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`version`** は、ポートのバージョンを返します。

## 値

ポートのバージョンを表す文字列です。

## 例

以下の例では、すべての入力ポートを走査し、それぞれのバージョンをコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.version);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
