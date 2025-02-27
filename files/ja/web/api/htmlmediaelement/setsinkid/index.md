---
title: "HTMLMediaElement: setSinkId() メソッド"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

**`setSinkId()`** は {{domxref("HTMLMediaElement")}} インターフェイスのメソッドで、出力に使用するオーディオ機器の ID を設定し、プロミス ({{jsxref("Promise")}}) を返します。

これは、アプリケーションが指定された機器を使用することを許可されている場合にのみ動作します。詳しくは下記の[セキュリティ要件](#セキュリティ要件)を参照してください。

## 構文

```js-nolint
setSinkId(sinkId)
```

### 引数

- `sinkId`
  - : オーディオ出力機器の {{domxref("MediaDeviceInfo.deviceId")}} です。

### 返値

{{jsxref("Promise")}} で、 {{jsxref("undefined")}} に解決します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)が音声出力の使用をブロックするために使用された場合に返されます。
- `NotFoundError` {{domxref("DOMException")}}
  - : `deviceId` がどの音声機器にも一致しない場合に返されます。
- `AbortError` {{domxref("DOMException")}}
  - : 音声出力機器から新しい音声機器への切り替えに失敗した場合に返されます。

## セキュリティ要件

この API にアクセスするには、以下の制約があります。

- このメソッドは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)の中で呼び出すこと。
- アクセスが [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)で制限されることがあります。
- 既定以外の端末にアクセスするには、そのユーザー権限が要求されます。
  ユーザーは、{{domxref("MediaDevices.selectAudioOutput()")}} で表示されるプロンプトで、ID に関連付けられた端末を選択することで、その権限を付与します。

## 例

この例では、{{domxref("MediaDevices.enumerateDevices()")}} が返す配列から音声出力機器を選択し、それを音声のシンクとして設定する方法を示します。
`enumerateDevices()` の結果には、ユーザー権限が要求されていないか、すでに付与されている端末しか含まれないことに注意してください。

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevice = devices.find((device) => device.kind === "audiooutput");
const audio = document.createElement("audio");
await audio.setSinkId(audioDevice.deviceId);
console.log(`Audio is being output on ${audio.sinkId}`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オーディオ出力機器 API](/ja/docs/Web/API/Audio_Output_Devices_API)
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.sinkId")}}
