---
title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
---

{{APIRef("HTML DOM")}}

`TrackEvent()` コンストラクタは、トラックのリスト（{{domxref("AudioTrackList")}}、{{domxref("VideoTrackList")}}、または {{domxref("TextTrackList")}}）で発生したイベントを記述する新しい {{domxref("TrackEvent")}} オブジェクトを作成して返します。

## 構文

```
trackEvent = new TrackEvent(type, eventInfo);
```

### パラメーター

- `type`
  - : オブジェクトによって記述されるトラックイベントの種類: `"addtrack"` または `"removetrack"`。
- `eventInfo` {{optional_inline}}

  - : 新しいイベントを構成する追加情報を提供するオプションの辞書。 次のフィールドを自由に組み合わせて含めることができます。

    - `track` {{optional_inline}}
      - : イベントが参照するトラック。 これはデフォルトでは `null` ですが、トラックの種類に応じて {{domxref("VideoTrack")}}、{{domxref("AudioTrack")}}、または {{domxref("TextTrack")}} に設定する必要があります。
    - `bubbles` {{optional_inline}}
      - : イベントをバブリングするかどうかを示す Boolean。
    - `cancelable` {{optional_inline}}
      - : イベントをキャンセルできるかどうかを示す Boolean。
    - `composed` {{optional_inline}}
      - : イベントがシャドウルートの外側でリスナーをトリガーするかどうかを示す Boolean。 詳細については {{domxref("Event.composed")}} をご覧ください。

### 戻り値

新しく作成された {{domxref("TrackEvent")}} オブジェクト。 コンストラクタへの入力の説明に従って初期化されます。

## 仕様

| 仕様                                                                                                                                     | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "media.html#dom-trackevent-trackevent", "TrackEvent()")}}                         | {{Spec2('HTML WHATWG')}} | 初期定義 |
| {{SpecName('HTML5 W3C', "semantics-embedded-content.html#dom-trackevent-trackevent", "TrackEvent()")}} | {{Spec2('HTML5 W3C')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.TrackEvent.TrackEvent")}}
