---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack`** は{{domxref("Media Capture and Streams API", "メディアキャプチャとストリーム API", "", "nocode")}} のインターフェイスで、ストリームに含まれる一つのメディアトラックを表現します。一般的に、音声や動画のトラックですが、他の種類のトラックも存在することがあります。

ユーザーエージェントによっては、{{domxref("CanvasCaptureMediaStreamTrack")}} のように、より詳細な情報や機能を提供するためにこのインターフェイスをサブクラス化するものもあります。

{{InheritanceDiagram}}

## インスタンスプロパティ

以下に示すプロパティに加えて、 `MediaStreamTrack` は制約可能なプロパティを持っています。これらのプロパティは、 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} によって設定でき、 {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} と {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} によって取得できます。制約可能なプロパティを用いて適切に動作させるためにはどのようにすればいいかを知りたい場合は、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を見てください。適切に動作させなかった場合の結果として、あなたが作成したコードは信頼できないものになります。

- {{domxref("MediaStreamTrack.contentHint")}}
  - : 文字列で、ウェブアプリケーションが、トラックがどのような種類のコンテンツを含んでいるかについてのヒントを提供し、 API の利用者がどのように扱うべきかをガイドするために使用することがあります。使用できる値は、{{domxref("MediaStreamTrack.kind")}} プロパティの値によって異なります。
- {{domxref("MediaStreamTrack.enabled")}}
  - : 論理型で、トラックが有効の場合は `true` の値になり、メディアソースストリームを出力することができます。トラックが無効な場合は `false` の値になり、メディアソースストリームに出力されません。トラックの接続が解除された場合、この値は変更することはできますが、影響を与えることはありません。

    > [!NOTE]
    > 標準的な「ミュート」（消音）機能は `enabled` を `false` に設定することで実装できます。 `muted` プロパティは技術的な問題でメディアがない状態を表します。

- {{domxref("MediaStreamTrack.id")}} {{ReadOnlyInline}}
  - : トラックの固有識別子 (GUID) を含む文字列を返します。この識別子はブラウザーによって生成されます。
- {{domxref("MediaStreamTrack.kind")}} {{ReadOnlyInline}}
  - : このトラックが音声トラックの場合は `"audio"` が設定され、動画トラックの場合は `"video"` が設定される文字列を返します。ソースからの関連付けが解除された場合、この値が変更されることはありません。
- {{domxref("MediaStreamTrack.label")}} {{ReadOnlyInline}}
  - : ユーザーエージェントによって割り当てられた、 `"internal microphone"` のようなトラックソースを識別するラベルを含む文字列を返します。この文字列は空になることもあり、ソースが接続されていないと空になります。トラックのソースとの関連付けが解除されても、このラベルは変更されません。
- {{domxref("MediaStreamTrack.muted")}} {{ReadOnlyInline}}
  - : 技術的な問題でこのトラックがメディアデータを提供できないかどうかを示す論理値を返します。

    > [!NOTE]
    > 標準的な「ミュート」（消音）機能は `enabled` を `false` に設定することで実装でき、再び `true` に設定することでメディアのミュートを解除することができます。

- {{domxref("MediaStreamTrack.readyState")}} {{ReadOnlyInline}}
  - : トラックの状態を表す列挙値の文字列を返します。この値は次のいずれかになります。
    - `"live"` は入力機器が接続されており、ベストエフォートでリアルタイムなデータを提供することを表します。この状態では、 {{domxref("MediaStreamTrack.enabled", "enabled")}} 属性を用いることで、データの出力のオンとオフを切り替えることができます。
    - `"ended"` は入力機器がこれ以上データを提供することがなく、新しいデータも一切提供されないことを示します。

## インスタンスメソッド

- {{domxref("MediaStreamTrack.applyConstraints()")}}
  - : `MediaStreamTrack` の制約可能なプロパティについて、理想的な値や許容される値の範囲を指定することができます。
- {{domxref("MediaStreamTrack.clone()")}}
  - : `MediaStreamTrack` の複製を返します。
- {{domxref("MediaStreamTrack.getCapabilities()")}}
  - : `MediaStreamTrack` で利用できる制約可能なプロパティの一覧を返します。
- {{domxref("MediaStreamTrack.getConstraints()")}}
  - : トラックに設定されている制約を含む {{domxref('MediaTrackConstraints')}} を返します。返値は、最後に {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} を用いて設定した制約に一致します。
- {{domxref("MediaStreamTrack.getSettings()")}}
  - : `MediaStreamTrack` の制約可能なプロパティの値を含む {{domxref("MediaTrackSettings")}} オブジェクトを返します。
- {{domxref("MediaStreamTrack.stop()")}}
  - : トラックに関連付けられたソースの再生を停止し、ソースとトラックの関連付けを解除します。トラックの状態は `ended` に設定されます。

## イベント

これらのイベントを待ち受けするには、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxref("MediaStreamTrack/ended_event", "ended")}}
  - : トラックの再生が終わったとき（{{domxref("MediaStreamTrack.readyState", "readyState")}} の値が `ended` に変化したとき）に送られます。ただし、トラックが {{domxref("MediaStreamTrack.stop")}} を呼び出すことで終了した場合を除きます。
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
  - : そのトラックが一時的にデータを提供できなくなったこと（ネットワークに異常が発生した場合など）を示すために {{domxref("MediaStreamTrack.muted", "muted")}} プロパティの値が `true` になったときに `MediaStreamTrack` に送られます。
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}
  - : データが再び利用可能になり、 `muted` 状態が終わったときにトラックに送信されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStream")}}
