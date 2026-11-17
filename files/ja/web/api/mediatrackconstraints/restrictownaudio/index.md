---
title: "MediaTrackConstraints: restrictOwnAudio プロパティ"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackConstraints/restrictOwnAudio
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

{{domxref("MediaTrackConstraints")}} 辞書の **`restrictOwnAudio`** プロパティは、要求または必須の制約を指定する [`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) で、制約可能プロパティ [`restrictOwnAudio`](/ja/docs/Web/API/MediaStreamTrack/getSettings#restrictownaudio) の値に適用されます。

このプロパティは、キャプチャ元のタブに由来するシステム音声を画面キャプチャから除外するかどうかを制御します。その結果、場合によっては画面録画の音声をより聞き取りやすくできます。
例えば、画面キャプチャを開始したウェブページ自体で埋め込み音声や動画を再生している場合、その音声はキャプチャに含まれます。
不要なエコーが発生したり、ほかのタブやアプリケーションからの目的の音声ソースに干渉したりする可能性があるため、その音声をキャプチャから除外することが望ましい場合があります。

必要であれば、この制約に対応しているかどうかを、[`restrictOwnAudio`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#restrictownaudio) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} によって返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認が必要になることはほとんどありません。

## 値

[`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) 値です。

値が `true` の場合、ユーザーエージェントは画面キャプチャを開始するために {{domxref("MediaDevices.getDisplayMedia()")}} を呼び出したタブに由来する音声を除去しようとします。
処理による音声の除去に失敗した場合、ユーザーエージェントはキャプチャ元のタブに由来する音声をすべて除外することがあります。

> [!NOTE]
> キャプチャした表示面にシステム音声が含まれない場合、この設定は効果がありません。

値に `exact` フィールドが指定されている場合、そのフィールドの論理値は `restrictOwnAudio` 機能に対する厳密な要件を示します。
ユーザーエージェントがこの要件を満たせない場合、リクエストでエラーが発生します。

値が `false` の場合、ユーザーエージェントはキャプチャ元のタブに由来するシステム音声を制限しようとしません。

## 例

```js
let isCapturingTabSystemAudioRestricted = displayStream
  .getAudioTracks()[0]
  .getSettings().restrictOwnAudio;
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
