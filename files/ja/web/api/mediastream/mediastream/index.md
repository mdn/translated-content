---
title: "MediaStream: MediaStream() コンストラクター"
short-title: MediaStream()
slug: Web/API/MediaStream/MediaStream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`MediaStream()`** コンストラクターは、新しく生成された {{domxref("MediaStream")}} を返し、これはそれぞれが {{domxref("MediaStreamTrack")}} オブジェクトで表されるメディアトラックのコレクションとして機能します。

何か引数が与えられた場合は、指定されたトラックが新しいストリームに追加されます。そうでなければ、ストリームはトラックを持ちません。

## 構文

```js-nolint
new MediaStream()
new MediaStream(stream)
new MediaStream(tracks)
```

### 引数

- `stream` {{optional_inline}}
  - : 様々な {{domxref("MediaStream")}} オブジェクトで、そのトラックが新しく生成されたストリームに自動的に追加されます。トラックは元のストリームから除去されないので、 2 つのストリームで共用されることになります。
- `tracks` {{optional_inline}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトの {{jsxref("Array")}} で、それぞれがストリームに追加するトラックです。

### 返値

生成された {{domxref("MediaStream")}} オブジェクトで、空のトラック、もしくは指定されたトラックを持つ。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaStream")}}
