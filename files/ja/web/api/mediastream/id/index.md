---
title: MediaStream.id
slug: Web/API/MediaStream/id
tags:
  - MediaStream
  - プロパティ
  - 読み取り専用
  - リファレンス
  - ウェブ
browser-compat: api.MediaStream.id
translation_of: Web/API/MediaStream/id
---
{{APIRef("Media Capture and Streams")}}

**`MediaStream.id()`** は読み取り専用プロパティであり、このオブジェクトの固有識別子 (GUID) である 36 文字で表現される {{domxref("DOMString")}} を返します。

## 構文

```js
var id = mediaStream.id;
```

## 例

```js
var p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

p.then(function(stream) {
   console.log(stream.id);
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティが所属する {{domxref("MediaStream")}} インターフェイス
