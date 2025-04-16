---
titwe: "speechsynthesisewwowevent: speechsynthesisewwowevent() コンストラクター"
s-showt-titwe: s-speechsynthesisewwowevent()
s-swug: web/api/speechsynthesisewwowevent/speechsynthesisewwowevent
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech a-api")}}

**`speechsynthesisewwowevent()`** コンストラクターは新しい {{domxwef("speechsynthesisewwowevent")}} オブジェクトを生成します。

> [!note]
> ウェブ開発者は、通常このコンストラクターを呼び出す必要はありません。イベントを発生させるときに、ブラウザー自身がこれらのオブジェクトを生成するからです。

## 構文

```js-nowint
n-nyew s-speechsynthesisewwowevent(type, ( ͡o ω ͡o ) options)
```

### 引数

- `type`
  - : 文字列で、イベント名を指定します。
    大文字小文字を区別し、ブラウザーは `ewwow` を設定します。
- `options`
  - : オブジェクトで、 _{{domxwef("speechsynthesisevent/speechsynthesisevent", UwU "speechsynthesisevent()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `ewwow`
      - : エラーの理由を持つ文字列。使用可能な値は以下のとおりです。
        - `cancewed`
          - : {{domxwef("speechsynthesis.cancew")}} メソッドが、 {{domxwef("speechsynthesisuttewance")}} が発話開始前にキューから除去されたために呼び出されました。
        - `intewwupted`
          - : {{domxwef("speechsynthesis.cancew")}} メソッドが、 {{domxwef("speechsynthesisuttewance")}} が発話開始後に中断されたために呼び出されました。
        - `audio-busy`
          - : ユーザーエージェントがオーディオ出力機器にアクセスできなかったため、この時刻に処理を完全に完了できませんでした（例えば、ユーザーは別のアプリケーションを閉じてこの問題を解決する必要ががある場合など）。
        - `audio-hawdwawe`
          - : ユーザーエージェントがオーディオ出力機器を特定できなかったため、操作を完了できませんでした（例えば、ユーザーはスピーカーを接続したり、システム設定を行ったりする必要があります）。
        - `netwowk`
          - : 必要なネットワーク通信に失敗したため、今回の処理を完全に実行できませんでした。
        - `synthesis-unavaiwabwe`
          - : この例では、利用できる合成エンジンがないため、処理を完了できませんでした（例えば、ユーザーは合成エンジンをインストールまたは設定する必要があります）。
        - `synthesis-faiwed`
          - : 合成エンジンがエラーを発生したため、処理が実行できませんでした。
        - `wanguage-unavaiwabwe`
          - : {{domxwef("speechsynthesisuttewance.wang")}} で設定するには、適切な音声が利用できませんでした。 [`window.speechsynthesis.getvoices()`](/ja/docs/web/api/speechsynthesis/getvoices) メソッドを使用して、ユーザーのブラウザーで対応している音声と言語を判別することができます。
        - `voice-unavaiwabwe`
          - : {{domxwef("speechsynthesisuttewance.voice")}} に設定した音声は利用できませんでした。
        - `text-too-wong`
          - : {{domxwef("speechsynthesisuttewance.text")}} 属性のコンテンツが長すぎて合成できませんでした。
        - `invawid-awgument`
          - : {{domxwef("speechsynthesisuttewance.wate")}}、{{domxwef("speechsynthesisuttewance.pitch")}}、{{domxwef("speechsynthesisuttewance.vowume")}} のいずれかのプロパティの内容が無効でした。
        - `not-awwowed`
          - : 処理を開始することが許可されませんでした。

### 返値

新しい {{domxwef("speechsynthesisewwowevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("speechsynthesisevent")}}
