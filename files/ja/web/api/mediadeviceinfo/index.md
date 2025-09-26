---
title: MediaDeviceInfo
slug: Web/API/MediaDeviceInfo
l10n:
  sourceCommit: fe34c23539ce7fdba29782e7e83b9e9d7a18fb22
---

{{APIRef("WebRTC")}}

**`MediaDeviceInfo`** インターフェイスは、単一のメディア入力または出力機器を示す情報を持ちます。

{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} の呼び出しによって取得できる機器の一覧は、`MediaDeviceInfo` オブジェクトの配列であり、1 つのメディア機器が 1 つに対応します。

## インスタンスプロパティ

- {{domxref("MediaDeviceInfo.deviceId")}} {{ReadOnlyInline}}
  - : 文字列で、セッションをまたいで維持される機器を表す識別子を返します。他のアプリケーションからは推測できず、呼び出されたアプリケーションのオリジンで固有のものです。ユーザーがクッキーを消去するとリセットされます（プライベートブラウジングの場合は、セッションをまたいで維持されない異なる識別子を使用します）。
- {{domxref("MediaDeviceInfo.groupId")}} {{ReadOnlyInline}}
  - : 文字列で、グループ識別子を返します。2 つの機器が同一のグループ識別子を持つ場合、それらの機器は同一の物理機器に属していることになります。例えば、モニターに内蔵カメラとマイクが付いている場合などです。
- {{domxref("MediaDeviceInfo.kind")}} {{ReadOnlyInline}}
  - : `"videoinput"`、`"audioinput"`、`"audiooutput"` の何れかの列挙値を返します。
- {{domxref("MediaDeviceInfo.label")}} {{ReadOnlyInline}}
  - : この機器を記述する文字列を返します（例えば "External USB Webcam"）。

> [!NOTE]
> セキュリティのため、`label` フィールドはアクティブなメディアストリームが存在するか、メディア機器への継続的な権限をユーザーが付与しない限り、常に空欄になります。機器ラベルの組み合わせによって、ユーザーを識別するための[フィンガープリント](/ja/docs/Glossary/Fingerprinting)の一部として利用することができてしまいます。

## インスタンスメソッド

- {{domxref("MediaDeviceInfo.toJSON()")}}
  - : この `MediaDeviceInfo` オブジェクトの JSON 表現を返します。

## 例

ここでは、機器の一覧を取得するために {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} を使用しています。

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // カメラとマイクを一覧にする。
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

コンソールには次のように表示されるでしょう。

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

もしくは、1 つ以上のメディアストリームが有効の場合や、継続的な許可が与えられている場合は、次のように表示されるでしょう。

```bash
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}}
- {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}}
