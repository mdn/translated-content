---
title: "MediaTrackConstraints: height プロパティ"
short-title: height
slug: Web/API/MediaTrackConstraints/height
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`height`** プロパティは、要求または必須の制約を記述する [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、制約可能プロパティ [`height`](/ja/docs/Web/API/MediaStreamTrack/getSettings#height) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`height`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#height) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

この値が数値の場合、ユーザーエージェントはメディアを取得しようとします。
高さをこの数値にできるだけ近づけるため、ハードウェアの能力と指定された他の制約を考慮します。
それ以外の場合、この [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) の値は、ユーザーエージェントが要求された高さに正確に一致する値（`exact` が指定されている場合、または `min` と `max` の両方が指定され、その値が同じ場合）、またはできる限り最適な値を提供するための指針となります。

## 例

[制約エクササイザー](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザー)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack")}}
