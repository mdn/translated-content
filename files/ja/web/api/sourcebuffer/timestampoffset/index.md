---
title: SourceBuffer.timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
l10n:
  sourceCommit: 7455f0c585ea29fa85ea09e11716b70f76241f5b
---

{{APIRef("Media Source Extensions")}}

**`timestampOffset`** は {{domxref("SourceBuffer")}} インターフェイスのプロパティで、`SourceBuffer` に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。

`timestampOffset` の初期値は 0 です。

## 値

double 型で、秒単位のオフセット量です。

### 例外

このプロパティに新しい値を設定すると、次の例外が発生する場合があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource.sourceBuffers")}} に含まれる {{domxref("SourceBuffer")}} オブジェクトの 1 つ以上が更新中（つまり、{{domxref("SourceBuffer.updating")}} プロパティが現在 `true`）、`SourceBuffer` 内のメディアセグメントが現在解析中、またはこの `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれていた場合に発生します。

## 例

TBD

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
