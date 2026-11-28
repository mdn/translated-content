---
title: "MediaTrackConstraints: sampleSize プロパティ"
short-title: sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`sampleSize`** プロパティは、要求または必須の制約を記述する [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、制約可能プロパティ [`sampleSize`](/ja/docs/Web/API/MediaStreamTrack/getSettings#samplesize) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`sampleSize`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#samplesize) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

この値が数値の場合、ユーザーエージェントはメディアを取得しようとします。
その際、サンプルサイズ（線形サンプルあたりのビット数）をこの数値にできるだけ近づけるため、ハードウェアの能力と指定された他の制約を考慮します。
それ以外の場合、この [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) の値は、要求されたサンプルサイズに正確に一致する値（`exact` が指定されている場合、または `min` と `max` の両方が指定され、その値が同じ場合）、またはできる限り最適な値を提供するための指針となります。

> [!NOTE]
> このプロパティは線形サンプルサイズのみを表すことができるため、この制約は線形サンプルの音声を生成できる機器でのみ満たせます。

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
