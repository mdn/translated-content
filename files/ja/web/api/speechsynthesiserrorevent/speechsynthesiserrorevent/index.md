---
title: "SpeechSynthesisErrorEvent: SpeechSynthesisErrorEvent() コンストラクター"
short-title: SpeechSynthesisErrorEvent()
slug: Web/API/SpeechSynthesisErrorEvent/SpeechSynthesisErrorEvent
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`SpeechSynthesisErrorEvent()`** コンストラクターは新しい {{domxref("SpeechSynthesisErrorEvent")}} オブジェクトを生成します。

> [!NOTE]
> ウェブ開発者は、通常このコンストラクターを呼び出す必要はありません。イベントを発生させるときに、ブラウザー自身がこれらのオブジェクトを生成するからです。

## 構文

```js-nolint
new SpeechSynthesisErrorEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベント名を指定します。
    大文字小文字を区別し、ブラウザーは `error` を設定します。
- `options`
  - : オブジェクトで、 _{{domxref("SpeechSynthesisEvent/SpeechSynthesisEvent", "SpeechSynthesisEvent()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `error`
      - : エラーの理由を持つ文字列。使用可能な値は以下のとおりです。
        - `canceled`
          - : {{domxref("SpeechSynthesis.cancel")}} メソッドが、 {{domxref("SpeechSynthesisUtterance")}} が発話開始前にキューから除去されたために呼び出されました。
        - `interrupted`
          - : {{domxref("SpeechSynthesis.cancel")}} メソッドが、 {{domxref("SpeechSynthesisUtterance")}} が発話開始後に中断されたために呼び出されました。
        - `audio-busy`
          - : ユーザーエージェントがオーディオ出力機器にアクセスできなかったため、この時刻に処理を完全に完了できませんでした（例えば、ユーザーは別のアプリケーションを閉じてこの問題を解決する必要ががある場合など）。
        - `audio-hardware`
          - : ユーザーエージェントがオーディオ出力機器を特定できなかったため、操作を完了できませんでした（例えば、ユーザーはスピーカーを接続したり、システム設定を行ったりする必要があります）。
        - `network`
          - : 必要なネットワーク通信に失敗したため、今回の処理を完全に実行できませんでした。
        - `synthesis-unavailable`
          - : この例では、利用できる合成エンジンがないため、処理を完了できませんでした（例えば、ユーザーは合成エンジンをインストールまたは設定する必要があります）。
        - `synthesis-failed`
          - : 合成エンジンがエラーを発生したため、処理が実行できませんでした。
        - `language-unavailable`
          - : {{domxref("SpeechSynthesisUtterance.lang")}} で設定するには、適切な音声が利用できませんでした。 [`window.speechSynthesis.getVoices()`](/ja/docs/Web/API/SpeechSynthesis/getVoices) メソッドを使用して、ユーザーのブラウザーで対応している音声と言語を判別することができます。
        - `voice-unavailable`
          - : {{domxref("SpeechSynthesisUtterance.voice")}} に設定した音声は利用できませんでした。
        - `text-too-long`
          - : {{domxref("SpeechSynthesisUtterance.text")}} 属性のコンテンツが長すぎて合成できませんでした。
        - `invalid-argument`
          - : {{domxref("SpeechSynthesisUtterance.rate")}}、{{domxref("SpeechSynthesisUtterance.pitch")}}、{{domxref("SpeechSynthesisUtterance.volume")}} のいずれかのプロパティの内容が無効でした。
        - `not-allowed`
          - : 処理を開始することが許可されませんでした。

### 返値

新しい {{domxref("SpeechSynthesisErrorEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SpeechSynthesisEvent")}}
