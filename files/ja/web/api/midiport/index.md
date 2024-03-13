---
title: MIDIPort
slug: Web/API/MIDIPort
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref('Web MIDI API','','',' ')}} の **`MIDIPort`** インターフェイスは、MIDI の入力ポートや出力ポートを表します。

`MIDIPort` のインスタンスは新しい MIDI デバイスが接続された時に生成されます。そのため、コンストラクターはありません。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("MIDIPort.id")}} {{ReadOnlyInline}}
  - : ポートの一意な ID を表す文字列を返します。
- {{domxref("MIDIPort.manufacturer")}} {{ReadOnlyInline}}
  - : ポートの製造元を表す文字列を返します。
- {{domxref("MIDIPort.name")}} {{ReadOnlyInline}}
  - : ポートのシステム名を表す文字列を返します。
- {{domxref("MIDIPort.type")}} {{ReadOnlyInline}}

  - : ポートの種類を表す文字列を返します。以下のいずれかです。

    - `"input"`
      - : この `MIDIPort` は入力ポートです。
    - `"output"`
      - : この `MIDIPort` は出力ポートです。

- {{domxref("MIDIPort.version")}} {{ReadOnlyInline}}
  - : ポートのバージョンを表す文字列を返します。
- {{domxref("MIDIPort.state")}} {{ReadOnlyInline}}

  - : ポートの状態を表す文字列を返します。以下のいずれかです。

    - `"disconnected"`
      - : この `MIDIPort` が表すデバイスはシステムから切断されています。
    - `"connected"`
      - : この `MIDIPort` が表すデバイスは現在接続されています。

- {{domxref("MIDIPort.connection")}} {{ReadOnlyInline}}

  - : ポートの接続状態を表す文字列を返します。以下のいずれかです。

    - `"open"`
      - : この `MIDIPort` が表すデバイスは既に開かれており、利用可能です。
    - `"closed"`
      - : この `MIDIPort` が表すデバイスは開かれていないか、閉じられた後です。
    - `"pending"`
      - : この `MIDIPort` が表すデバイスは開かれていますが、その後切断されました。

## インスタンスメソッド

_このインターフェイスは {{domxref("EventTarget")}} からもメソッドを継承します。_

- {{domxref("MIDIPort.open()")}}
  - : この `MIDIPort` に接続されている MIDI デバイスを明示的に利用可能にし、ポートへのアクセスに成功したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("MIDIPort.close()")}}
  - : この `MIDIPort` に接続されている MIDI デバイスを利用不可能にし、{{domxref("MIDIPort.state","state")}} を `"open"` から `"closed"` に変更します。ポートを閉じる操作が完了したら解決する {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("MIDIPort.statechange_event")}}
  - : 既存のポートの状態または接続状態が変化した時呼ばれます。

## 例

### ポートとその情報を列挙する

以下の例では入力ポートと出力ポートを列挙し、それらの情報を `MIDIPort` のプロパティを用いて表示します。

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `入力ポート [type:'${input.type}'] id:'${input.id}' manufacturer: '${input.manufacturer}' name: '${input.name}' version: '${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `出力ポート [type:'${output.type}'] id: '${output.id}' manufacturer: '${output.manufacturer}' name: '${output.name}' version: '${output.version}'`,
    );
  }
}
```

### 利用可能なポートを選択リストに入れる

以下の例では、ユーザーが使用したいデバイスを選択できるように、入力ポートのリストを受け取ってそれらを選択リストに入れます。

```js
inputs.forEach((port, key) => {
  const opt = document.createElement("option");
  opt.text = port.name;
  document.getElementById("inputportselector").add(opt);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
