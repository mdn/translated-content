---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
tags:
  - API
  - MediaDevices
  - メソッド
  - リファレンス
  - WebRTC
browser-compat: api.MediaDevices.enumerateDevices
translation_of: Web/API/MediaDevices/enumerateDevices
---
{{APIRef("WebRTC")}}

{{domxref("MediaDevices")}} の **`enumerateDevices()`** メソッドは、マイクやカメラ、ヘッドセットなど、利用可能なメディア入出力機器の一覧を要求します。
返されたプロミス ({{jsxref("Promise")}}) は、機器を記述した {{domxref("MediaDeviceInfo")}} の配列で解決されます。

特定の機器へのアクセスは、[権限 API](/ja/docs/Web/API/Permissions_API) によって制限されます。
返される機器の一覧では、対応する権限が付与されていない機器は省略されます。 `microphone`, `camera`, `speaker-selection` （出力機器の場合）などです。

## 構文

```js
enumerateDevices()
```

### 引数

なし。

### 返値

{{ jsxref("Promise") }} で、プロミスが履行されると {{domxref("MediaDeviceInfo")}} オブジェクトの配列を受け取ります。
配列内の各オブジェクトは、利用可能なメディア入出力機器の 1 つを記述します（権限が付与された機器種別のみが "available" となります）。
順番は重要で、既定のキャプチャ機器が最初にリストアップされます。

列挙に失敗した場合、プロミスは拒否されます。

## 例

これは `enumerateDevices()` の使用例です。[デバイス ID](/ja/docs/Web/API/MediaDeviceInfo/deviceId) の一覧と、もしあればそのラベルが出力されます。

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  return;
}

// List cameras and microphones.

navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
  });
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
```

出力例です。

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

または 1 つ以上の {{domxref("MediaStream")}} がアクティブな場合、または永続的な権限が付与されている場合は次のようになります。

```bash
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
- [MediaStream API](/ja/docs/Web/API/Media_Streams_API) - メディアストリームオブジェクトの API
- [Taking webcam photos](/ja/docs/Web/API/WebRTC_API/Taking_still_photos) は、ビデオではなく写真を撮るために `getUserMedia()` を使用するチュートリアルです。
