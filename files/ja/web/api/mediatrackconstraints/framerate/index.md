---
title: "MediaTrackConstraints: frameRate プロパティ"
short-title: frameRate
slug: Web/API/MediaTrackConstraints/frameRate
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`frameRate`** プロパティは、要求または必須の制約を記述する [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) で、制約可能プロパティ [`frameRate`](/ja/docs/Web/API/MediaStreamTrack/getSettings#framerate) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`frameRate`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#framerate) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

[`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) は、受け入れ可能または必須の値を記述します。
対象は動画トラックのフレームレート（1 秒あたりのフレーム数）です。

この値が数値の場合、ユーザーエージェントはメディアを取得しようとします。
フレームレートをこの数値にできるだけ近づけるため、ハードウェアの能力と指定された他の制約を考慮します。
それ以外の場合、この [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) の値は、ユーザーエージェントが要求されたフレームレートに正確に一致する値（`exact` が指定されている場合、または `min` と `max` の両方が指定され、その値が同じ場合）、またはできる限り最適な値を提供するための指針となります。

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
