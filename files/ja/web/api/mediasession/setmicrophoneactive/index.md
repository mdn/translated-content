---
title: MediaSession.setMicrophoneActive()
slug: Web/API/MediaSession/setMicrophoneActive
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

{{domxref("MediaSession")}} の **`setMicrophoneActive()`** メソッドは、ユーザーエージェントに対して、ユーザーのマイクが現在ミュートされていると見なされるかどうかを示すために使用します。

このメソッドは `navigator` オブジェクトの {{domxref("navigator.mediaSession", "mediaSession")}} オブジェクトに対して呼び出してください。

なお、マイクの状態は {{domxref("MediaSession")}} 自体では追跡されず、別個の追跡が必要です。

## 構文

```js-nolint
setMicrophoneActive(active)
```

### 引数

- `active`
  - : マイクをミュートとみなすかどうかを示す論理値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

下記の例は、現在の{{domxref('MediaSession')}}のマイクミュート状態を更新し、{{domxref("MediaSession.setActionHandler", "setActionHandler()")}}でミュート状態を変更するリクエストを待ち受けするものです。

```js
let microphoneActive = false;

navigator.mediaSession.setMicrophoneActive(microphoneActive);

navigator.mediaSession.setActionHandler("togglemicrophone", () => {
  microphoneActive = !microphoneActive;
  navigator.mediaSession.setMicrophoneActive(microphoneActive);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
