---
title: "MediaTrackConstraints: suppressLocalAudioPlayback プロパティ"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

{{domxref("MediaTrackConstraints")}} 辞書の **`suppressLocalAudioPlayback`** プロパティは、要求または必須の制約を記述する [`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) で、制約可能プロパティ [`suppressLocalAudioPlayback`](/ja/docs/Web/API/MediaStreamTrack/getSettings#suppresslocalaudioplayback) の値に適用されます。
このプロパティは、タブがキャプチャされたときに、タブ内で再生される音声がユーザーのローカルスピーカーから引き続き再生されるかどうかを制御します。

必要であれば、この制約に対応しているかどうかを、[`suppressLocalAudioPlayback`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#suppresslocalaudioplayback) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

[`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) 値です。

値が単純な `true` または `false` の場合、ユーザーエージェントは指定されたとおりローカル音声再生を有効または無効にしたメディアの取得を試みます。
可能な場合に取得し、できなくても失敗しません。

値が `ideal` フィールドを持つオブジェクトの場合、そのフィールドの論理値はローカル音声再生抑制機能に対する理想的な設定を示します。
この設定を満たせない場合、リクエストでエラーが発生します。

## 例

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

メディアトラック制約の使い方は、[制約エクササイザー](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザー)の例で確認できます。

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
