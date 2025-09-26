---
title: "MIDIAccess: inputs プロパティ"
slug: Web/API/MIDIAccess/inputs
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIAccess")}} の読み取り専用プロパティ **`inputs`** は、任意の利用可能な MIDI 入力ポートへのアクセスを提供します。

## 値

{{domxref("MIDIInputMap")}} のインスタンスです。

## 例

{{domxref("Navigator.requestMIDIAccess()")}} メソッドが {{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。`inputs` の値をコンソールに出力すると、{{domxref("MIDIInputMap")}} が返ります。

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.inputs);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
