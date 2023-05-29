---
title: TextTrackCue
slug: Web/API/TextTrackCue
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVTT")}}

**`TextTrackCue`** は抽象クラスで、 {{domxref("VTTCue")}} などの派生キュー型の基礎として使用されます。代わりに、これらの派生型を使用して作業することになります。これらのキューは、 {{domxref("TextTrack")}} の再生中にある時間だけ表示される文字列を表します。キューには、開始時刻（テキストが表示される時刻）と終了時刻（テキストが表示されなくなる時刻）、およびその他の情報を記載します。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスは {{domxref("EventTarget")}} からもプロパティを継承しています。_

- {{domxref("TextTrackCue.track")}} {{ReadOnlyInline}}
  - : このキューが属する {{domxref("TextTrack")}}。 いずれにも属さない場合は `null`。
- {{domxref("TextTrackCue.id")}}
  - : 文字列で、キューを識別します。
- {{domxref("TextTrackCue.startTime")}}
  - : `double` で、キューが表示を開始する動画時刻を、秒単位で指定します。
- {{domxref("TextTrackCue.endTime")}}
  - : `double` で、キューの表示を停止する動画時刻を、秒単位で指定します。
- {{domxref("TextTrackCue.pauseOnExit")}}
  - : このキューが表示されなくなったときに動画を一時停止するかどうかを示す論理型です。

### イベント

- {{domxref("TextTrackCue.enter_event", "enter")}}
  - : キューがアクティブになったときに発行されます。
- {{domxref("TextTrackCue.exit_event", "exit")}}
  - : キューがアクティブではなくなったときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
