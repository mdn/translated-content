---
title: "MediaTrackConstraints: latency プロパティ"
short-title: latency
slug: Web/API/MediaTrackConstraints/latency
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`latency`** プロパティは、要求または必須の制約を記述する [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) で、制約可能プロパティ [`latency`](/ja/docs/Web/API/MediaStreamTrack/getSettings#latency) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`latency`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#latency) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

{{Glossary("RTP")}} にはこの情報が含まれていないため、[WebRTC](/ja/docs/Web/API/WebRTC_API) の {{domxref("RTCPeerConnection")}} に関連付けられているトラックには、このプロパティは含まれません。

## 値

[`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) は、受け入れ可能または必須の値を記述します。
これらの値は、音声トラックの遅延を秒単位で指定します。
音声処理における遅延とは、処理の開始時点（現実世界で音が発生した時点、またはハードウェア機器が音を生成した時点）から、音声の入出力処理の次の段階でデータが利用可能になるまでの時間です。
ほとんどの場合、パフォーマンスとユーザー体験の観点から低遅延が望ましい一方、消費電力が懸念される場合や、遅延が許容される場合には、より大きな遅延が許容されることもあります。

このプロパティの値が数値の場合、ユーザーエージェントはメディアを取得しようとします。
遅延をこの数値にできるだけ近づけるため、ハードウェアの能力と指定された他の制約を考慮します。
それ以外の場合、この [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) の値は、ユーザーエージェントが要求された遅延に正確に一致する値（`exact` が指定されている場合、または `min` と `max` の両方が指定され、その値が同じ場合）、またはできる限り最適な値を提供するための指針となります。

> [!NOTE]
> 遅延は、ハードウェアの使用状況やネットワーク上の制約などにより、常に多少変動します。
> そのため、"exact" による一致であっても、ある程度の変動が予想されます。

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
