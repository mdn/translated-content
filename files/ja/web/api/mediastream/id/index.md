---
title: "MediaStream: id プロパティ"
short-title: id
slug: Web/API/MediaStream/id
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`id`** は {{domxref("MediaStream")}} インターフェイスの読み取り専用プロパティで、このオブジェクトの固有識別子 (GUID) である 36 文字で表現される文字列を返します。

## 値

文字列です。

## 例

```js
const promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});

promise.then((stream) => {
  console.log(stream.id);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティが所属する {{domxref("MediaStream")}} インターフェイス
