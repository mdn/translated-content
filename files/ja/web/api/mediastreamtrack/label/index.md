---
title: "MediaStreamTrack: label プロパティ"
short-title: label
slug: Web/API/MediaStreamTrack/label
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`label`** は {{domxref("MediaStreamTrack")}} インターフェイスの読み取り専用のプロパティであり、トラックのソースを識別するために{{glossary("user agent", "ユーザーエージェント")}}によって割り当てられたラベルを含む文字列を返します。例えば `"internal microphone"` などです。

この文字列は空になることもあり、ソースが接続されていないと空になります。
トラックのソースとの関連付けが解除されても、このラベルは変更されません。

## 構文

```js-nolint
const label = track.label
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
