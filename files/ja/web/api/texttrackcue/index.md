---
title: TextTrackCue
slug: Web/API/TextTrackCue
---

{{APIRef("WebVTT")}}

**`TextTrackCues`** は、{{domxref("TextTrack")}} に一定期間表示されるテキストの文字列を表します。 これには、キューが表示される開始時間と終了時間が含まれます。 **`TextTrackCue`** を直接使用することはできません。 その代わりに、派生型の 1 つ（例えば {{domxref("VTTCue")}}）を使用する必要があります。

## プロパティ

_このインターフェイスは {{domxref("EventTarget")}} からもプロパティを継承しています。_

- {{domxref("TextTrackCue.track")}} {{readOnlyInline}}
  - : このキューが属する {{domxref("TextTrack")}}。 いずれにも属さない場合は `null`。
- {{domxref("TextTrackCue.id")}}
  - : キューを識別する {{domxref("DOMString")}}。
- {{domxref("TextTrackCue.startTime")}}
  - : キューが表示され始める動画時間を表す `double` 型。
- {{domxref("TextTrackCue.endTime")}}
  - : キューが表示されなくなるまでの動画時間を表す `double` 型。
- {{domxref("TextTrackCue.pauseOnExit")}}
  - : このキューが表示されなくなったときに動画を一時停止するかどうか `boolean` 型。

### イベントハンドラ

- {{domxref("TextTrackCue.onenter")}}
  - : {{event("enter")}} イベントのイベントハンドラ。
- {{domxref("TextTrackCue.onexit")}}
  - : {{event("exit")}} イベントのイベントハンドラ。

## 仕様

| 仕様                                                                         | 状態                             | コメント |
| ---------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG','#texttrackcue','TextTrackCue')}} | {{Spec2("HTML WHATWG")}} |          |
| {{SpecName('HTML5 W3C','#texttrackcue','TextTrackCue')}} | {{Spec2("HTML5 W3C")}}     | 初期定義 |

## ブラウザーの互換性

未定
