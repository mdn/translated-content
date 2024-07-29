---
title: Web MIDI API
slug: Web/API/Web_MIDI_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

Web MIDI API は、Musical Instrument Digital Interface (MIDI) デバイスに接続して操作します。

このインターフェイスは、MIDI メッセージの送受信の実用的な側面を扱います。
そのため、この API は音楽用途でも音楽意外の用途でも、コンピューターに接続された任意の MIDI デバイスを扱うことができます。

## インターフェイス

- {{domxref("MIDIInputMap")}}
  - : すべての利用可能な MIDI 入力ポートを表します。
- {{domxref("MIDIOutputMap")}}
  - : すべての利用可能な MIDI 出力ポートを表します。
- {{domxref("MIDIAccess")}}
  - : 入力デバイスや出力デバイスを列挙したり、個々のデバイスにアクセスしたりするメソッドを提供します。
- {{domxref("MIDIPort")}}
  - : 個々の MIDI ポートを表します。
- {{domxref("MIDIInput")}}
  - : 入力ポートから受信する MIDI メッセージを扱うメソッドを提供します。
- {{domxref("MIDIOutput")}}
  - : 接続された MIDI ポートに送信するメッセージをキューに追加します。メッセージはすぐに送信することも、指定の遅延の後で送信することもできます。
- {{domxref("MIDIMessageEvent")}}
  - : {{domxref("MIDIInput.midimessage_event")}} に渡されるイベントです。
- {{domxref("MIDIConnectionEvent")}}
  - : ポートが利用可能になったり利用不可能になったりした時、{{domxref("MIDIAccess.statechange_event")}} および {{domxref("MIDIPort.statechange_event")}} イベントに渡されるイベントです。

## セキュリティの要件

この API へのアクセスは、{{domxref("navigator.requestMIDIAccess()")}} メソッドを用いて要求します。

- このメソッドは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)で呼び出す必要があります。
- アクセスは [`midi`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/ja/docs/Web/HTTP/Permissions_Policy) により制限される可能性があります。
- ユーザーがユーザーエージェント固有のメカニズムによりこの API を用いる許可を明示的に与えるか、既に許可が与えられている必要があります。
  なお、アクセスが Permission Policy により拒否された場合は、ユーザーがアクセスを許可することはできません。

許可の状態は、[Permissions API](/ja/docs/Web/API/Permissions_API) のメソッド [`navigator.permissions.query()`](/ja/docs/Web/API/Permissions/query) に権限 `midi` と (省略可能な) `sysex` プロパティを設定した権限ディスクリプターを渡すことで取得できます。

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // アクセスが許可されました
  } else if (result.state === "prompt") {
    // API を使用すると、許可を求めるプロンプトが表示されます
  }
  // ユーザープロンプトまたは Permission Policy により権限が拒否されました
});
```

## 例

### MIDI ポートにアクセスできるようにする

{{domxref("navigator.requestMIDIAccess()")}} メソッドは {{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。このオブジェクトを利用して MIDI デバイスにアクセスできます。
このメソッドは、安全なコンテキストで呼ばれる必要があります。

```js
let midi = null; // グローバルの MIDIAccess オブジェクト
function onMIDISuccess(midiAccess) {
  console.log("MIDI の準備ができました！");
  midi = midiAccess; // グローバル変数に保存する (実際の使用法では、オブジェクトインスタンスに格納するのがよいでしょう)
}

function onMIDIFailure(msg) {
  console.error(`MIDI アクセスの取得に失敗しました - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
```

### 入力と出力を列挙する

この例では、入力ポートと出力ポートのリストを取得し、コンソールに出力します。

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `入力ポート [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `出力ポート [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
    );
  }
}
```

### MIDI 入力を扱う

この例では、1 個のポートで受信した MIDI メッセージをコンソールに出力します。

```js
function onMIDIMessage(event) {
  let str = `タイムスタンプ ${event.timeStamp} に受信した MIDI メッセージ [${event.data.length} バイト]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function startLoggingMIDIInput(midiAccess, indexOfPort) {
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Introduction to Web MIDI](https://code.tutsplus.com/tutorials/introduction-to-web-midi--cms-25220)
- [Making Music in the Browser](https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/)
