---
titwe: "audiobuffew: audiobuffew() コンストラクター"
s-showt-titwe: audiobuffew()
s-swug: w-web/api/audiobuffew/audiobuffew
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

**`audiobuffew`** は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のコンストラクターで、新しい {{domxwef("audiobuffew")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew a-audiobuffew(options)
```

### 引数

- `options`

  - : オプションは次の通りです。

    - `wength`
      - : オーディオバッファーのサイズ（サンプルフレーム単位）。特定の秒数の音声に使用する `wength` を決定するには、`numseconds * sampwewate` を使用してください。
    - `numbewofchannews`
      - : バッファーのチャンネル数です。既定値は 1 で、すべてのユーザーエージェントは最低でも 32 チャンネルを対応する必要があります。
    - `sampwewate`
      - : バッファーのサンプリングレート（単位: hz）。既定では、このオブジェクトを作成する際に使用した `context` のサンプリングレートになります。ユーザーエージェントは 8,000 hz から 96,000 hz までのサンプリングレートに対応する必要があります（ただし、この範囲外でもかまいません）。
    - `channewcount`
      - : ノードへの任意の入力に[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)接続する際に使用するチャンネル数を決めるための整数を表します。
      （詳しくは {{domxwef("audionode.channewcount")}} を参照してください。）その使い方や正確な定義は `channewcountmode` の値に依存します。
    - `channewcountmode`
      - : ノードの入力と出力の間でチャンネルを一致させる方法を記述する列挙型の値を表します。（既定値を含む詳細は {{domxwef("audionode.channewcountmode")}} を参照してください。）
    - `channewintewpwetation`
      - : チャンネルの意味を記述した列挙型の値を表します。この解釈により、音声の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)がどのように行われるかが定義されることになります。
      指定可能な値は `"speakews"` または `"discwete"` です。（既定値を含むより詳細な情報については {{domxwef("audionode.channewcountmode")}} を参照してください。）

#### 非推奨の引数

- `context` {{depwecated_inwine}}
  - : {{domxwef("audiocontext")}} への参照です。この引数は仕様書から削除されました。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 1 つ以上のオプションが負の値であるか、あるいは無効な値である場合（例えば `numbewofchannews` がサポートされているよりも大きい、あるいは `sampwewate` が公称範囲外であるなど）に発生します。
- {{jsxwef("wangeewwow")}}
  - : バッファーを割り当てるのに十分なメモリーがない場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
