---
title: "Navigator: requestMIDIAccess() メソッド"
slug: Web/API/Navigator/requestMIDIAccess
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

{{domxref('Navigator')}} インターフェイスの **`requestMIDIAccess()`** メソッドは、ユーザーのシステム上の MIDI デバイスへのアクセスの要求を表す {{jsxref('Promise')}} を返します。このメソッドは MIDI デバイスのアクセス、列挙、操作の方法を提供する [Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の一部です。

このメソッドは、ユーザーにシステムで利用可能な MIDI デバイスへのアクセスを要求するプロンプトを表示する可能性もありますし、事前の設定に基づいてアクセスを許可または拒否する可能性もあります。
許可が得られた場合は、{{jsxref('Promise')}} が解決し、[`MIDIAccess`](/ja/docs/Web/API/MIDIAccess) オブジェクトが返されます。

## 構文

```js-nolint
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### 引数

- `MIDIOptions` {{optional_inline}}
  - : メソッドに渡すオプションを表す {{jsxref('Object')}} です。以下のオプションがあります。
    - `sysex`
      - : {{jsxref('Boolean')}} 値で、`true` に設定するとシステムエクスクルーシブ (sysex) メッセージを送受信する機能を許可します。デフォルト値は `false` です。
    - `software`
      - : {{jsxref('Boolean')}} 値で、`true` に設定するとすべてのインストール済のソフトウェアシンセサイザーの使用をシステムに許可します。デフォルト値は `false` です。

### 返値

[`MIDIAccess`](/ja/docs/Web/API/MIDIAccess) オブジェクトで解決する {{jsxref('Promise')}} を返します。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : ユーザーの操作によりドキュメントまたはページが閉じられたとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 下層のシステムでエラーが発生したとき投げられます。
- `NotSupportedError` {{domxref("DOMException")}}
  - : システムが機能またはオプションに対応していないとき投げられます。
- `SecurityError` {{domxref("DOMException")}}
  - : ユーザーまたはシステムがアプリケーションによる要求されたオプションを持つ [MIDIAccess](/ja/docs/Web/API/MIDIAccess) オブジェクトの生成を拒否したか、ドキュメントがこの機能の使用を許可されていないとき (たとえば、[Permission Policy](/ja/docs/Web/HTTP/Guides/Permissions_Policy) で制限されているときや、ユーザーが以前に許可の要求を拒否しているとき) 投げられます。

## セキュリティの要件

この API へのアクセスは、以下の制約の対象です。

- このメソッドは[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)で呼び出される必要があります。
- アクセスは [`midi`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/ja/docs/Web/HTTP/Guides/Permissions_Policy) で制限される可能性があります。
- ユーザーがユーザーエージェント固有のメカニズムによりこの API を使用する許可を明示的に与えるか、以前に許可を与えている必要があります。なお、Permission Policy でアクセスが拒否された場合は、ユーザーがアクセスを許可することはできません。

許可の状態は、[権限 API](/ja/docs/Web/API/Permissions_API) の [`navigator.permissions.query()`](/ja/docs/Web/API/Permissions/query) メソッドに権限 `midi` および (省略可能な) `sysex` プロパティを設定した権限ディスクリプターを渡すことで取得できます。

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // アクセスが許可されました
  } else if (result.state === "prompt") {
    // API を使用すると、許可を要求するプロンプトが表示されます
  }
  // ユーザープロンプトまたは Permission Policy でアクセスが拒否されました
});
```

## 例

### MIDI へのアクセスを要求する

以下の例では、{{domxref("Navigator.requestMIDIAccess()")}} メソッドが {{domxref("MIDIAccess")}} オブジェクトを返します。このオブジェクトは、入力および出力の MIDI ポートの情報へアクセスするのに用いることができます。

```js
navigator.requestMIDIAccess().then((access) => {
  // 利用可能な MIDI コントローラーのリストを取得する
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();
  // …
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web MIDI API](/ja/docs/Web/API/Web_MIDI_API)
- [Introduction to Web MIDI](https://code.tutsplus.com/tutorials/introduction-to-web-midi--cms-25220)
