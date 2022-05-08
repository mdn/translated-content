---
title: MediaDevices.selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
tags:
  - API
  - MediaDevices
  - メソッド
  - リファレンス
  - WebRTC
  - selectAudioOutput
  - 実験的
browser-compat: api.MediaDevices.selectAudioOutput
translation_of: Web/API/MediaDevices/selectAudioOutput
---
{{APIRef("WebRTC")}} {{SeeCompatTable}}

{{domxref("MediaDevices")}} の **`selectAudioOutput()`** は、ユーザーに特定の音声出力機器、例えばスピーカーやヘッドフォンを選択するよう尋ねます。
成功すると、返される {{jsxref("Promise")}} は選択された機器を記述した {{domxref("MediaDeviceInfo")}} で解決されます。

このメソッドは、ボタンのクリックなどの UI 操作から起動されなければなりません（より正確には、{{Glossary("transient activation", "一時的な有効化")}}を必要とします）。

音声出力機器へのアクセスは[権限 API] (/ja/docs/Web/API/Permissions_API) によって制限されています。
`speaker-selection` 権限が与えられていない場合、プロンプトは表示されません。

## 構文

```js
selectAudioOutput()
selectAudioOutput(options)
```

### 引数

- `options` {{Optional_Inline}}

  - : ユーザーへの問い合わせで提供される機器を構成するオブジェクトです。

    - `deviceId` {{Optional_Inline}}

      - : プロンプトに表示する（唯一の）機器の ID を表す文字列（既定値は ""）。

        > **Note:** ユーザーエージェントは、指定された NULL ではない ID が以前のセッションで `selectAudioOutput()` によってユーザーに公開されていた場合、ユーザーへのプロンプトをスキップすることを選択することができます。
        > この場合、ユーザーエージェントは単にこの機器 ID で解決するか、同じ機器の新しい ID が変更されている場合は、それを使用することができます。
        >
        > これは、永続化された機器 ID を使用したいアプリケーションのためのものです。
        > この ID は {{domxref("HTMLMediaElement.setSinkId", "setSinkId()")}} で動作する前に `selectAudioOutput()` で正常に渡されなければなりません。

### 返値

{{ jsxref("Promise") }}で、プロミスが履行されると {{domxref("MediaDeviceInfo")}} オブジェクトを受け取ります。
このオブジェクトは、ユーザーが選択した音声出力デバイスを記述します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 現在のページに {{HTTPHeader("Feature-Policy/speaker-selection", "speaker-selection")}} 権限が与えられていない場合、またはユーザーが機器を選択せずに選択プロンプトを閉じた場合に返されます。
- `NotFoundError`  {{domxref("DOMException")}}
  - : 利用可能な音声出力機器がない場合に返されます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{Glossary("transient activation", "一時的な有効化")}}が発生していない場合に返されます（何らかの UI イベントから起動する必要があります）。

## 例

以下は `selectAudioOutput()` の使用例です。これは、ボタンのクリックをトリガーとして関数内で呼び出すことができます。
これは、選択された[デバイス ID](/ja/docs/Web/API/MediaDeviceInfo/deviceId) とラベル（もしあれば）またはエラーメッセージを出力しています。

```js
if (!navigator.mediaDevices.selectAudioOutput) {
  console.log("selectAudioOutput() not supported.");
  return;
}

//Display prompt and log selected device or error
navigator.mediaDevices.selectAudioOutput()
.then( (device) => {
    console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
  })
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
```

On selection of an output this might produce:

```bash
audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API) - この API の紹介ページ
