---
title: SourceBuffer.updating
slug: Web/API/SourceBuffer/updating
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの `updating` 読み取り専用プロパティは、`SourceBuffer` が現在更新されているかどうか、つまり {{domxref("SourceBuffer.appendBuffer()")}}、{{domxref("SourceBuffer.appendStream()")}}、または {{domxref("SourceBuffer.remove()")}} の操作が現在進行中かどうかを示します。

## 構文

```
var isUpdating = sourceBuffer.updating;
```

### 値

{{jsxref("Boolean")}}。

## 例

未定

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.SourceBuffer.updating")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
