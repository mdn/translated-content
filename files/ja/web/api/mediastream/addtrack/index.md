---
title: MediaStream.addTrack()
slug: Web/API/MediaStream/addTrack
tags:
  - API
  - メディアストリーム API
  - メソッド
  - NeedsExample
  - リファレンス
  - addTrack
browser-compat: api.MediaStream.addTrack
translation_of: Web/API/MediaStream/addTrack
---
{{APIRef("Media Capture and Streams")}}

**`MediaStream.addTrack()`** メソッドは、ストリームへ新しいトラックを追加します。このトラックは {{domxref("MediaStreamTrack")}} 型の引数して指定します。

> **Note:** 指定されたトラックが既にストリームのトラックセットにあった場合、このメソッドは何もしません。

## 構文

```js
stream.addTrack(track);
```

### 引数

- `track`
  - : このストリームへ追加する {{domxref("MediaStreamTrack")}} です。

### 返値

{{jsxref("undefined")}}

## 例

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaStream")}} （所属先のインターフェイス）
