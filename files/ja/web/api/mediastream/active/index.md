---
title: "MediaStream: active プロパティ"
short-title: active
slug: Web/API/MediaStream/active
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`active`** は {{domxref("MediaStream")}} インターフェイスの読み取り専用プロパティで、論理値を返します。ストリームが現在アクティブであれば `true` 、それ以外の場合は `false` となります。 {{domxref("MediaStreamTrack")}} のうち {{domxref("MediaStreamTrack.readyState")}} が `ended` に設定されているトラックが 1 本でもある場合は、ストリームが**アクティブ**であるとみなされます。すべでのトラックが終了すると、このストリームの `active` プロパティは `false` になります。

## 値

論理値で、このストリームが現在アクティブな場合は `true` を返します。それ以外は `false` を返します。

## 例

この例では、 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を用いて、要求されたユーザーのローカルのカメラとマイクをソースとする新しいストリームを取得します。ストリームが有効になると（ここでは、{{jsxref("Promise")}} が履行状態になった時）、ストリームが現在アクティブであるかどうかに応じてページにあるボタンの状態が更新されます。

```js
const promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});

promise.then((stream) => {
  const startBtn = document.querySelector("#startBtn");
  startBtn.disabled = stream.active;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
