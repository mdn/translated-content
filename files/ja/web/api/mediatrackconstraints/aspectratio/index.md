---
title: "MediaTrackConstraints: aspectRatio プロパティ"
short-title: aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`aspectRatio`** プロパティは、制約可能プロパティ [`aspectRatio`](/ja/docs/Web/API/MediaStreamTrack/getSettings#aspectratio) の値に対する要求または必須の制約を記述する [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) です。

必要であれば、{{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返される [`aspectRatio`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#aspectratio) の値を確認し、この制約に対応しているかどうかを判断できます。ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

動画トラックの{{glossary("aspect ratio", "アスペクト比")}}の受け入れ可能または必須の値を記述する [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) です。
値は幅を高さで割ったもので、小数点以下 10 桁に丸められます。例えば、標準的な高精細動画のアスペクト比 16:9 は、1920/1080 または 1.7777777778 として計算できます。

この値が数値の場合、ユーザーエージェントはハードウェアの能力と指定された他の制約を踏まえて、この数値にできるだけ近いアスペクト比のメディアを取得しようとします。
それ以外の場合、この [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) の値は、要求されたアスペクト比と正確に一致する値（`exact` が指定されている場合、または `min` と `max` の両方が指定され、その値が同じ場合）またはできる限り最適な値を提供するための指針となります。

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
