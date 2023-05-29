---
title: "MediaDeviceInfo: toJSON() メソッド"
slug: Web/API/MediaDeviceInfo/toJSON
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("WebRTC")}}

{{domxref("MediaDeviceInfo")}} インターフェイスの **`toJSON()`** メソッドは、{{Glossary("Serialization","シリアライザー")}}です。このメソッドは、この {{domxref("MediaDeviceInfo")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし

### 返値

この {{domxref("MediaDeviceInfo")}} オブジェクトをシリアライズした {{jsxref("JSON")}} オブジェクトを返します。

### 例

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() に未対応です。");
} else {
  // カメラとマイクを列挙する
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(device.toJSON());
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

以下の結果になる可能性があります。

```bash
Object { deviceId: "HJtTemQTM64Bivxv3ZEyKjCi1VR8042lPNpmXKObKJE=", kind: "videoinput", label: "", groupId: "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0=" }
Object { deviceId: "EqDubLxPlPeW+5w/ereWTF/3EaAMVHh9QBBHkZHiP0k=", kind: "audioinput", label: "", groupId: "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0=" }
Object { deviceId: "CanWttL2RnHOiS7FzzYXMIvLqVFE5S06Lfy8H//nhEw=", kind: "audioinput", label: "", groupId: "nOdLNeXGIw9oL9f2wH69SssQpRVs7cmt9jqZrUWgQwI=" }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
