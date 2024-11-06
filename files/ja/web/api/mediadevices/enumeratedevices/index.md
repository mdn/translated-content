---
title: "MediaDevices: enumerateDevices() メソッド"
short-title: enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
l10n:
  sourceCommit: b2875dbaa70efb5850084b9802803b439db325f5
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

**`enumerateDevices()`** は {{domxref("MediaDevices")}} インターフェイスのメソッドで、マイクやカメラ、ヘッドセットなど、現在利用可能なメディア入出力機器の一覧を要求します。
返されたプロミス ({{jsxref("Promise")}}) は、機器を記述した {{domxref("MediaDeviceInfo")}} の配列で解決されます。

特定の機器へのアクセスは、[権限ポリシー](/ja/docs/Web/HTTP/Headers/Permissions-Policy)によって制限されます。返される機器の一覧では、対応する権限が付与されていない機器は省略されます。[`microphone`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/microphone), [`camera`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/camera), [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) （出力機器の場合）などです。
また、[権限 API](/ja/docs/Web/API/Permissions_API) によって、特定の既定ではない機器へのアクセスも制限され、ユーザーが明示的な許可を与えていない端末はリストから省略されます。

## 構文

```js-nolint
enumerateDevices()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、{{domxref("MediaDeviceInfo")}} オブジェクトの配列で履行されます。
配列内の各オブジェクトは、利用可能なメディア入出力機器の 1 つを記述します。
順番は重要で、既定のキャプチャ機器が最初にリストアップされます。

既定以外の危機は、権限が付与された機器のみが "available" となります。

メディア機器が入力機器である場合、代わりに {{domxref("InputDeviceInfo")}} オブジェクトが返されます。

列挙に失敗した場合、プロミスは拒否されます。

## セキュリティ要件

API へのアクセスは、以下の制約を受けます。

- このメソッドは、[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)で呼び出す必要があります。
- 文書は完全にアクティブで、その可視性が「可視」である必要があります。

## 例

これは `enumerateDevices()` の使用例です。[機器 ID](/ja/docs/Web/API/MediaDeviceInfo/deviceId) の一覧と、もしあればそのラベルが出力されます。

```js
if (!navigator.mediaDevices?.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // カメラとマイクを列挙
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
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API) - メディアストリームオブジェクトの API
- [ウェブカムでの写真撮影](/ja/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) は、動画ではなく写真を撮るために `getUserMedia()` を使用するチュートリアルです。
