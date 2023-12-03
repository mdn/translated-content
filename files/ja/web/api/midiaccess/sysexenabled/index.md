---
title: "MIDIAccess: sysexEnabled プロパティ"
slug: Web/API/MIDIAccess/sysexEnabled
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIAccess")}} インターフェイスの読み取り専用プロパティ **`sysexEnabled`** は、現在の `MIDIAccess` インスタンスでシステムエクスクルーシブへの対応が有効かどうかを表します。

## 値

論理値です。

## 例

{{domxref("Navigator.requestMIDIAccess()")}} メソッドが {{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。`sysexEnabled` の値をコンソールに出力すると論理値が返り、これはシステムエクスクルーシブへの対応が有効になっている場合は `true` になります。

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.sysexEnabled);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
