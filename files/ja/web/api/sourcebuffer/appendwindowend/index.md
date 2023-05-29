---
title: SourceBuffer.appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
l10n:
  sourceCommit: 7455f0c585ea29fa85ea09e11716b70f76241f5b
---

{{APIRef("Media Source Extensions")}}

**`appendWindowEnd`** は {{domxref("SourceBuffer")}} インターフェイスのプロパティで、追加ウィンドウ（[append window](https://w3c.github.io/media-source/#append-window)）の終わりのタイムスタンプを制御します。 タイムスタンプの範囲は、`SourceBuffer` に追加されるメディアデータをフィルターするために使用できます。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。

`appendWindowEnd` の既定値は正の無限大です。

## 値

double 型で、追加ウィンドウの終了時間を秒単位で示します。

### 例外

このプロパティに新しい値を設定すると、次の例外が発生する場合があります。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 値を {{domxref("SourceBuffer.appendWindowStart")}} 以下、または `NaN` に設定しようとした場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("SourceBuffer")}} オブジェクトが更新中（つまり、その {{domxref("SourceBuffer.updating")}} プロパティが現在 `true`）であるか、この `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれていた場合に発生します。

## 例

TBD

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
