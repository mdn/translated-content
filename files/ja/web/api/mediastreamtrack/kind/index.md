---
title: MediaStreamTrack.kind
slug: Web/API/MediaStreamTrack/kind
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.kind`** は読み取り専用のプロパティであり、トラックの種類を示す文字列を返します。トラックが音声トラックの場合は `"audio"` を返し、映像トラックの場合は `"video"` を返します。トラックがソースから切り離されている場合は、何も変更されません。

## 値

有効な値は、以下のいずれかの値を取る文字列です。

- `"audio"`: このトラックは音声トラックです。
- `"video"`: このトラックは映像トラックです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
