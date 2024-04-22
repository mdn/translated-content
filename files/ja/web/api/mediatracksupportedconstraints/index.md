---
title: MediaTrackSupportedConstraints
slug: Web/API/MediaTrackSupportedConstraints
---

{{DefaultAPISidebar("Media Capture and Streams")}}

**`MediaTrackSupportedConstraints`** 辞書は{{Glossary("user agent", "ユーザーエージェント")}}またはブラウザーが {{domxref("MediaStreamTrack")}} オブジェクトの実装で認識する制約可能なプロパティのリストを確立するものです。 `MediaTrackSupportedConstraints` に適合するオブジェクトは {{domxref("MediaDevices.getSupportedConstraints()")}} によって返されます。

WebIDLのインターフェイス定義はこのように動作するため、制約が要求されたが対応していない場合、エラーは発生しません。代わりに、指定された制約が適用され、認識されない制約が要求から取り除かれます。これは混乱をもたらすことがあり、エラーのデバッグが困難になるので、制約を黙って無視することと制約を受け入れることの違いを知る必要がある場合は、制約を確立しようとする前に、必ず `getSupportedConstraints()` を使用してこの情報を取り出してください。

実際の制約セットは {{domxref("MediaTrackConstraints")}} 辞書をベースにしたオブジェクトで表現されます。

制約がどのように動作するかについての詳細を知りたい場合は、[能力、制約、設定](/ja/docs/Web/API/Media_Streams_API/Constraints)を読んでください。

## プロパティ

オブジェクトは以下のプロパティの組み合わせであり、必ずしも全てのプロパティが含まれるわけではありません。

- {{domxref("MediaTrackSupportedConstraints.autoGainControl", "autoGainControl")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`autoGainControl`](/ja/docs/Web/API/MediaTrackConstraints#autogaincontrol) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.width", "width")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`width`](/ja/docs/Web/API/MediaTrackConstraints#width) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.height", "height")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`height`](/ja/docs/Web/API/MediaTrackConstraints#height) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.aspectRatio", "aspectRatio")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`aspectRatio`](/ja/docs/Web/API/MediaTrackConstraints#aspectratio) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.frameRate", "frameRate")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`frameRate`](/ja/docs/Web/API/MediaTrackConstraints#framerate) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.facingMode", "facingMode")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`facingMode`](/ja/docs/Web/API/MediaTrackConstraints#facingmode) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.resizeMode", "resizeMode")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`resizeMode`](/ja/docs/Web/API/MediaTrackConstraints#resizemode) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.volume", "volume")}}

  - : 論理値で、値が `true` ならば、現在の環境で [`volume`](/ja/docs/Web/API/MediaTrackConstraints#volume) 制約に対応しています。

- {{domxref("MediaTrackSupportedConstraints.sampleRate", "sampleRate")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`sampleRate`](/ja/docs/Web/API/MediaTrackConstraints#samplerate) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.sampleSize", "sampleSize")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`sampleSize`](/ja/docs/Web/API/MediaTrackConstraints#samplesize) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.echoCancellation", "echoCancellation")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`echoCancellation`](/ja/docs/Web/API/MediaTrackConstraints#echocancellation) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.latency", "latency")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`latency`](/ja/docs/Web/API/MediaTrackConstraints#latency) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.noiseSuppression", "noiseSuppression")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`noiseSuppression`](/ja/docs/Web/API/MediaTrackConstraints#noisesuppression) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.channelCount", "channelCount")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`channelCount`](/ja/docs/Web/API/MediaTrackConstraints#channelcount) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.deviceId", "deviceId")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`deviceId`](/ja/docs/Web/API/MediaTrackConstraints#deviceid) 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.groupId", "groupId")}}
  - : 論理値で、値が `true` ならば、現在の環境で [`groupId`](/ja/docs/Web/API/MediaTrackConstraints#groupid) 制約に対応しています。

### 画面共有トラックに固有のプロパティ

ユーザーの画面内コンテンツから映像ソースを含むトラックには、映像トラックで利用可能なプロパティに加え、以下のプロパティを入れることができます。

- {{domxref("MediaTrackSupportedConstraints.displaySurface", "displaySurface")}}
  - : 論理値で、値が `true` ならば、現在の環境で {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}} 制約に対応しています。
- {{domxref("MediaTrackSupportedConstraints.logicalSurface", "logicalSurface")}}
  - : 論理値で、値が `true` ならば、現在の環境で {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}} 制約に対応しています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Streams_API)
- [能力、制約、設定](/ja/docs/Web/API/Media_Streams_API/Constraints)
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
