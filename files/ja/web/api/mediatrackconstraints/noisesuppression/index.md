---
title: "MediaTrackConstraints: noiseSuppression プロパティ"
short-title: noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`noiseSuppression`** プロパティは、要求または必須の制約を記述する [`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) で、制約可能プロパティ [`noiseSuppression`](/ja/docs/Web/API/MediaStreamTrack/getSettings#noisesuppression) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`noiseSuppression`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#noisesuppression) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

ノイズ抑制は通常マイクによって提供される機能ですが、ほかの入力ソースによっても提供される場合があります。

## 値

値が単純な `true` または `false` の場合、ユーザーエージェントは指定されたとおりノイズ抑制が有効または無効になったメディアの取得を試みます。
可能な場合に取得し、できなくても失敗しません。
一方、値が `exact` フィールドを持つオブジェクトの場合、そのフィールドの論理値はノイズ抑制機能に必要な設定を示します。
要件を満たせない場合、リクエストでエラーが発生します。

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
