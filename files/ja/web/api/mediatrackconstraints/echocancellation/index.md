---
title: "MediaTrackConstraints: echoCancellation プロパティ"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`echoCancellation`** プロパティは、要求または必須の制約を記述する [`ConstrainBooleanOrDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) で、制約可能プロパティ [`echoCancellation`](/ja/docs/Web/API/MediaStreamTrack/getSettings#echocancellation) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`echoCancellation`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#echocancellation) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

論理値、文字列、または [`ConstrainBooleanOrDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) オブジェクトです。

ブラウザーが特定のエコーキャンセル種別に対応している場合、値には次のいずれかを設定できます。

- `"all"` {{experimental_inline}}
  - : ユーザーのシステムで生成され、ユーザーのマイクがキャプチャしたすべての音声を除去します。例えば、スクリーンリーダーの出力やシステム通知など、プライバシーに関わる音声のキャプチャを避けたい場合に役立ちます。
- `"remote-only"` {{experimental_inline}}
  - : ユーザーのシステムで生成され、ユーザーのマイクがリモートソースからキャプチャした音声だけを除去します。リモートソースは {{domxref("MediaStreamTrack")}} で表され、そのソースは {{domxref("RTCPeerConnection")}} です。この設定は、ローカル音声を共有しながらリモートピアとの通信からエコーを除去したい場合に役立ちます。例えば音楽のレッスンで、教師が音声トラックに合わせて演奏する生徒の音を聞きながら、生徒と明瞭に会話したい場合です。
- `true`
  - : マイクが記録した信号からどの音声を除去するかは、ブラウザーが決定します。少なくとも `remote-only` と同程度のエコーキャンセルを試みる必要があり、`all` と同程度のエコーキャンセルを試みるべきです。
- `false`
  - : 音声は除去されず、エコーキャンセルも行われません。

ブラウザーが特定のエコーキャンセル種別に対応していない場合、値には `true` または `false` を指定できます。

上記のいずれかの値が設定されている場合、ユーザーエージェントは指定されたとおりエコーキャンセルを有効または無効にしたメディアを取得しようとします。可能な場合に取得し、できなくても失敗しません。

値が `exact` フィールドを持つオブジェクトの場合、そのフィールドの値はエコーキャンセル機能に必要な設定を示します。その要件を満たせない場合、リクエストでエラーが発生します。

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
