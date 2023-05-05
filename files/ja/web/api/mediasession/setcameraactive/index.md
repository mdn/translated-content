---
title: MediaSession.setCameraActive()
slug: Web/API/MediaSession/setCameraActive
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

{{domxref("MediaSession")}} の **`setCameraActive()`** メソッドは、 ユーザーエージェントに対して、ユーザーのカメラがアクティブであると考えられるかどうかを示すために使用します。

このメソッドは `navigator` オブジェクトの {{domxref("navigator.mediaSession", "mediaSession")}} オブジェクトに対して呼び出してください。

なお、カメラの状態は {{domxref("MediaSession")}} 自体では追跡されず、別個の追跡が必要です。

## 構文

```js-nolint
setCameraActive(active)
```

### 引数

- `active`
  - : カメラがアクティブとみなされるかどうかを示す論理値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

下記は、現在の {{domxref('MediaSession')}} のカメラアクティブ状態を更新し、{{domxref("MediaSession.setActionHandler", "setActionHandler()")}} でカメラ状態を変更するリクエストを待ち受けする例です。

```js
let cameraActive = false;

navigator.mediaSession.setCameraActive(cameraActive);

navigator.mediaSession.setActionHandler("togglecamera", () => {
  cameraActive = !cameraActive;
  navigator.mediaSession.setCameraActive(cameraActive);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
