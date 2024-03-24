---
title: "MIDIAccess: outputs プロパティ"
slug: Web/API/MIDIAccess/outputs
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIAccess")}} インターフェイスの読み取り専用プロパティ **`outputs`** は、任意の利用可能な MIDI 出力ポートへのアクセスを提供します。

## 値

{{domxref("MIDIOutputMap")}} のインスタンスです。

## 例

{{domxref("Navigator.requestMIDIAccess()")}} メソッドが {{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。`outputs` の値をコンソールに出力すると、{{domxref("MIDIOutputMap")}} が返ります。

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.outputs);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
