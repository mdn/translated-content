---
title: MIDIAccess
slug: Web/API/MIDIAccess
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

[Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の **`MIDIAccess`** インターフェイスは、MIDI の入力デバイスや出力デバイスを列挙するメソッドと、それらのデバイスへのアクセスを得るメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("MIDIAccess.inputs")}} {{ReadOnlyInline}}
  - : 任意の利用可能な MIDI 入力ポートへのアクセスを提供する {{domxref("MIDIInputMap")}} のインスタンスを返します。
- {{domxref("MIDIAccess.outputs")}} {{ReadOnlyInline}}
  - : 任意の利用可能な MIDI 出力ポートへのアクセスを提供する {{domxref("MIDIOutputMap")}} のインスタンスを返します。
- {{domxref("MIDIAccess.sysexEnabled")}} {{ReadOnlyInline}}
  - : 現在の `MIDIAccess` インスタンスでシステムエクスクルーシブへの対応が有効かどうかを表す論理値の属性です。

### イベント

- {{domxref("MIDIAccess.statechange_event")}}
  - : 新しい MIDI ポートが追加されるか、既存のポートの状態が変わると、毎回呼ばれます。

## 例

{{domxref("Navigator.requestMIDIAccess()")}} メソッドが {{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。入力ポートおよび出力ポートの情報が返されます。

ポートの状態が変わると、そのポートの情報をコンソールに出力します。

```js
navigator.requestMIDIAccess().then((access) => {
  // 利用可能な MIDI コントローラーのリストを取得する
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();

  access.onstatechange = (event) => {
    // この接続 (または切断) された MIDI コントローラーの情報を出力する
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
