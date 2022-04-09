---
title: MediaStream.active
slug: Web/API/MediaStream/active
tags:
  - API
  - メディアキャプチャとストリーム
  - メディアストリーム API
  - MediaStream
  - プロパティ
  - リファレンス
  - active
browser-compat: api.MediaStream.active
translation_of: Web/API/MediaStream/active
---
{{APIRef("Media Capture and Streams")}}

**`active`** は {{domxref("MediaStream")}} インターフェイスの読み取り専用プロパティで、ストリームが現在アクティブであれば `true` を返し、それ以外の場合は `false` を返します。トラックの状態が {{domxref("MediaStreamTrack.ended")}} でないトラックが 1 本でもある場合は、ストリームがアクティブであるとみなされます。すべでのトラックが終了すると、このストリームの `active` プロパティは `false` になります。

## 値

論理値で、このストリームが現在アクティブな場合は `true` を返します。それ以外は `false` を返します。

## 例

この例では、 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を用いて、要求されたユーザーのローカルのカメラとマイクをソースとする新しいストリームを取得します。ストリームが有効になると（ここでは、{{jsxref("Promise")}} が履行状態になった時）、ストリームが現在アクティブであるかどうかに応じてページにあるボタンの状態が更新されます。

```js
const promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
});

promise.then((stream) => {
  const startBtn = document.querySelector('#startBtn');
  startBtn.disabled = stream.active;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
