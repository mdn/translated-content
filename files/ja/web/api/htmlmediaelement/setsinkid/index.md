---
title: HTMLMediaElement.setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: af967bb052695baa631c004b9b149c6f91920776
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.setSinkId()`** メソッドは、出力に使用するオーディオ機器の ID を設定し、 [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。
これは、アプリケーションが指定された機器を使用することを許可されている場合にのみ動作します。

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
  - : `speaker-selection` [許可ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)が音声出力の使用をブロックするために使用された場合に返されます。
- `NotFoundError` {{domxref("DOMException")}}
  - : `deviceId` がどの音声機器にも一致しない場合に返されます。
- `AbortError` {{domxref("DOMException")}}
  - : 音声出力機器から新しい音声機器への切り替えに失敗した場合に返されます。

## 例

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevice = devices.find((device) => device.kind === 'audiooutput');
const audio = document.createElement('audio');
await audio.setSinkId(audioDevice.deviceId);
console.log(`Audio is being played on ${audio.sinkId}`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
