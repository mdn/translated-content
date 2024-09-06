---
title: "MediaDevices: enumerateDevices() メソッド"
slug: Web/API/MediaDevices/enumerateDevices
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("WebRTC")}}

{{domxref("MediaDevices")}} の **`enumerateDevices()`** メソッドは、マイクやカメラ、ヘッドセットなど、利用可能なメディア入出力機器の一覧を要求します。
返されたプロミス ({{jsxref("Promise")}}) は、機器を記述した {{domxref("MediaDeviceInfo")}} の配列で解決されます。

特定の機器へのアクセスは、[権限 API](/ja/docs/Web/API/Permissions_API) によって制限されます。
返される機器の一覧では、対応する権限が付与されていない機器は省略されます。[`microphone`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/microphone), [`camera`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/camera), [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) （出力機器の場合）などです。

## 構文

```js-nolint
enumerateDevices()
```

### 引数

なし。

### 返値

{{ jsxref("Promise") }} で、プロミスが履行されると {{domxref("MediaDeviceInfo")}} オブジェクトの配列を受け取ります。
配列内の各オブジェクトは、利用可能なメディア入出力機器の 1 つを記述します。
順番は重要で、既定のキャプチャ機器が最初にリストアップされます。

権限が付与された機器種別のみが "available" となります。
また、[`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)を使用して、音声出力の使用をブロックしていた場合、リストには現れないことに注意してください。

列挙に失敗した場合、プロミスは拒否されます。

## セキュリティ要件

API へのアクセスは、以下の制約を受けます。

- このメソッドは、[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)で呼び出す必要があります。

## 例

これは `enumerateDevices()` の使用例です。[デバイス ID](/ja/docs/Web/API/MediaDeviceInfo/deviceId) の一覧と、もしあればそのラベルが出力されます。

```js
if (!navigator.mediaDevices?.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
      });
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
}
```

出力例です。

```plain
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

または 1 つ以上の {{domxref("MediaStream")}} がアクティブな場合、または永続的な権限が付与されている場合は次のようになります。

```plain
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaDevices.getUserMedia")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API) - API の入門ページ
- [MediaStream API](/ja/docs/Web/API/Media_Capture_and_Streams_API) - メディアストリームオブジェクトの API
- [ウェブカメラでの写真撮影](/ja/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) は、動画ではなく写真を撮るために `getUserMedia()` を使用するチュートリアルです。
