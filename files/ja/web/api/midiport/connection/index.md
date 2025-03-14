---
title: "MIDIPort: connection プロパティ"
slug: Web/API/MIDIPort/connection
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの読み取り専用プロパティ **`connection`** は、このポートの接続状態を返します。

## 値

このポートの接続状態を表す文字列で、以下のいずれかです。

- `"open"`
  - : この `MIDIPort` が表すデバイスは既に開かれており、利用可能です。
- `"closed"`
  - : この `MIDIPort` が表すデバイスは開かれていないか、閉じられた後です。
- `"pending"`
  - : この `MIDIPort` が表すデバイスは開かれていますが、その後切断されました。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの接続状態をコンソールに出力します。

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.connection);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
