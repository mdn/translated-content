---
title: MediaDeviceInfo
slug: Web/API/MediaDeviceInfo
---

{{APIRef("WebRTC")}}

**`MediaDevicesInfo`** インタフェースは 1 つメディアが入力か出力のデバイスであるかを示す情報を含みます。{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}}の呼び出しによって取得できるデバイスの一覧は、`MediaDeviceInfo`オブジェクトの配列であり、1 つの要素が 1 つのメディアデバイスになります。

## プロパティ

- {{domxref("MediaDeviceInfo.deviceId")}}{{readonlyinline}}
  - : デバイスの識別子の{{domxref("DOMString")}}を返します。この識別子はセッションを越えて保持されます。この識別子は、他のアプリケーションから推測可能でないものであり、呼び出しているアプリケーション元に対して固有のものになります。この識別子は、ユーザがクッキー(プライベートブラウジングでは異なる識別子が使用され、セッションを越えて保持されません)をクリアした時にリセットされます。
- {{domxref("MediaDeviceInfo.groupId")}}{{readonlyinline}}
  - : グループ識別子の{{domxref("DOMString")}}を返します。2 つのデバイスが同一のグループ識別子を持つ場合、それらのデバイスは同一の物理デバイスに属していることになります。例として、内蔵カメラとマイクロフォンを持つモニターなど。
- {{domxref("MediaDeviceInfo.kind")}}{{readonlyinline}}
  - : `"videoinput"`、`"audioinput"` 、`"audiooutput"`のどれかを返します。
- {{domxref("MediaDeviceInfo.label")}}{{readonlyinline}}
  - : デバイスを説明するラベルである{{domxref("DOMString")}}を返します。(例、"External USB Webcam")

> **メモ:** セキュリティ的な関係で、アクティブなメディアストリームが存在するか、メディアデバイスへの継続的な権限をユーザが付与しない限り、`label`のフィールドは常に空欄になります。デバイスラベルの組み合わせによって、ユーザを識別するためのフィンガープリントの一部として利用することができてしまいます。

## メソッド

なし。

## 例

ここでは、デバイスの一覧を取得するために、{{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}を使用しています。

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  return;
}

// カメラとマイクを一覧にする。

navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
  });
})
.catch(function(err) {
  console.log(err.name + ": " + error.message);
});
```

コンソールには次のように表示されるでしょう。

```
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

もしくは、1 つ以上のメディアストリームが有効の場合や、継続的な許可が与えられている場合は、次のように表示されるでしょう。

```
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## 仕様

| 仕様                                                                                                     | 状況                                 | コメント |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Media Capture', '#idl-def-MediaDeviceInfo', 'MediaDevicesInfo')}} | {{Spec2('Media Capture')}} | 初版     |

## ブラウザーの互換性

{{Compat("api.MediaDeviceInfo")}}

## 関連項目

- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}}
- {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}}
