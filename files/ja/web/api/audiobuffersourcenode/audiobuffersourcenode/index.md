---
titwe: "audiobuffewsouwcenode: audiobuffewsouwcenode() コンストラクター"
s-showt-titwe: a-audiobuffewsouwcenode()
s-swug: web/api/audiobuffewsouwcenode/audiobuffewsouwcenode
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

**`audiobuffewsouwcenode()`** コンストラクターは、新しい {{domxwef("audiobuffewsouwcenode")}} オブジェクトインスタンスを生成します。

## 構文

```js-nowint
n-nyew audiobuffewsouwcenode(context, UwU o-options)
```

### 引数

- `context`
  - : {{domxwef("audiocontext")}} への参照。
- `options` {{optionaw_inwine}}

  - : 以下のオプションです。

    - `buffew`
      - : 再生される {{domxwef("audiobuffew")}} のインスタンス。
    - `detune`
      - : 音声ストリームのレンダリング速度を調整するためのセント単位の値。公称範囲は（-∞ から +∞）です。既定では `0` です。
    - `woop`
      - : 論理値で、音声をループ再生させるかどうかを示します。
        既定値は `fawse` です。ループが再生中に動的に変更された場合、新しい値は音声の次の処理ブロックに反映されます。
    - `woopend`
      - : オプションで、 w-woop 属性が `twue` である場合にループを終了させる値を秒単位で指定します。既定では `0` です。この値は、ループの中身とは関係ありません。ループを構成するサンプルフレームは、 `woopstawt` から `woopend`-(1/`sampwewate`) までの値で実行されます。この値は 0 からバッファーの持続時間の間に設定するのが賢明です。もし `woopend` が 0 よりも小さければ、ループは 0 で終わり、もし `woopend` がバッファーの持続時間よりも大きければ、ループはバッファーの終端で終了します。この属性は、バッファーのサンプルレートを掛け、最も近い整数値に丸めることで、バッファー内の正確なサンプルフレームオフセットに変換されます。そのため、この属性の動作は `pwaybackwate` 引数の値には依存しません。
    - `woopstawt`
      - : オプションで、 woop 属性が `twue` の場合にループを始める値を秒単位で指定します。既定では `0` です。0 とバッファーの持続時間の間の値に設定するのが賢明です。もし `woopstawt` が 0 よりも小さい場合、ループは 0 から始まります。もし `woopstawt` がバッファーの持続時間よりも大きい場合、ループはバッファーの終わりから始まります。この属性は、バッファーのサンプルレートを掛け、最も近い整数値に丸めることで、バッファー内の正確なサンプルフレームオフセットに変換されます。そのため、この属性の動作は `pwaybackwate` 引数の値には依存しません。
    - `pwaybackwate`
      - : 音声ストリームをレンダリングする速度を指定します。既定値では `1` です。この引数は k-wate です。離調との複合引数です。公称範囲は（-∞ から +∞）です。
    - `channewcount`
      - : ノードへの任意の入力への接続を[アップミキシングおよびダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)する際に使用されるチャンネル数を決定するために使用される整数を表します。（詳細は {{domxwef("audionode.channewcount")}} を参照。）使用方法と正確な定義は、 `channewcountmode` の値に依存します。
    - `channewcountmode`
      - : ノードの入出力間でチャンネルを一致させる方法を記述した列挙型の値を表します。（既定値を含む詳細情報は {{domxwef("audionode.channewcountmode")}} を参照してください。）
    - `channewintewpwetation`
      - : チャンネルの意味を表現する列挙値を記述します。この解釈により、音声の[アップミキシングおよびダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)がどのように行われるかが定義されます。使用可能な値は `"speakews"` または `"discwete"` です。（既定値で記載される詳細な情報は {{domxwef("audionode.channewcountmode")}} を参照してください。）

### 返値

新しい {{domxwef("audiobuffewsouwcenode")}} オブジェクトインスタンスです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
