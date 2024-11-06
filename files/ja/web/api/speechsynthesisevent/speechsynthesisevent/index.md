---
title: "SpeechSynthesisEvent: SpeechSynthesisEvent() コンストラクター"
short-title: SpeechSynthesisEvent()
slug: Web/API/SpeechSynthesisEvent/SpeechSynthesisEvent
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`SpeechSynthesisEvent()`** コンストラクターは、新しい {{domxref("SpeechSynthesisEvent")}} オブジェクトを生成します。

> [!NOTE]
> ウェブ開発者は、通常このコンストラクターを呼び出す必要はありません。イベントを発生させるときに、ブラウザー自身がこれらのオブジェクトを生成するからです。

## 構文

```js-nolint
new SpeechSynthesisEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベント名を指定します。
    大文字小文字を区別し、ブラウザーは `start`, `end`, `error`, `pause`, `resume`, `mark`, `boundary` を設定します。
- `options`
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `utterance`
      - : イベントが発生した発話リクエストである {{domxref("SpeechSynthesisUtterance")}} オブジェクトです。
    - `charIndex` {{Optional_inline}}
      - : イベントが発生したときに発話されていた{{domxref("SpeechSynthesisUtterance.text")}}内の文字のインデックス位置です。既定値は `0` です。
    - `charLength` {{Optional_inline}}
      - : {{DOMxRef("SpeechSynthesisEvent.charIndex", "charIndex")}} の位置にある文字の後に発話される残りの文字数です。既定値は `0` です。
    - `elapsedTime` {{Optional_inline}}
      - : イベントが発生した時点の {{domxref("SpeechSynthesisUtterance.text")}} が話し始めてからの経過時間（秒）です。既定値は `0` です。
    - `name` {{Optional_inline}}
      - : 特定の種類のイベントに関連付けられた名前です。 {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} イベントの場合は到達した [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) マーカーの名前、 {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} イベントの場合は到達した境界の種類です。既定値は空文字列 (`""`) です。

### 返値

新しい {{domxref("SpeechSynthesisEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SpeechSynthesisErrorEvent")}}
