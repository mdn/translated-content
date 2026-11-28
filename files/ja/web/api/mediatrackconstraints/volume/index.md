---
title: "MediaTrackConstraints: volume プロパティ"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}{{Non-standard_Header}}

{{domxref("MediaTrackConstraints")}} 辞書の **`volume`** プロパティは、要求または必須の制約を記述する [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) で、制約可能プロパティ [`volume`](/ja/docs/Web/API/MediaStreamTrack/getSettings#volume) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`volume`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#volume) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

音声トラックの音量の許容値または要求値を示す [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) です。
音量は線形スケールで表され、0.0 は無音、1.0 は対応する最大音量を示します。

この値が数値の場合、ユーザーエージェントはメディアを取得しようとします。
その際、音量をこの数値にできるだけ近づけるため、ハードウェアの能力と指定された他の制約を考慮します。
それ以外の場合、この [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) の値は、要求された音量に正確に一致する値（`exact` が指定されている場合、または `min` と `max` の両方が指定され、その値が同じ場合）、またはできる限り最適な値を提供するための指針となります。

0.0 から 1.0 の範囲外の値しか許可しない制約セットは満たせず、失敗します。

## 例

[制約エクササイザー](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザー)の例を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack")}}
