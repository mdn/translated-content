---
title: MediaStreamTrack.label
slug: Web/API/MediaStreamTrack/label
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.label`** は読み取り専用のプロパティであり、トラックのソースを識別するために{{glossary("user agent", "ユーザーエージェント")}}によって割り当てられたラベルを含む文字列を返します。例えば `"internal microphone"` などです。

この文字列は空になることもあり、ソースが接続されていないと空になります。トラックのソースとの関連付けが解除されても、このラベルは変更されません。

## 構文

```js
const label = track.label;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
