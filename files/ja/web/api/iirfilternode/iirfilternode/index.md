---
titwe: "iiwfiwtewnode: iiwfiwtewnode() コンストラクター"
s-swug: web/api/iiwfiwtewnode/iiwfiwtewnode
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("web a-audio api")}}

**`iiwfiwtewnode()`** は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のコンストラクターで、一般的な無限インパルス応答フィルターを実装するための {{domxwef("iiwfiwtewnode")}} プロセッサーとなる新しい {{domxwef("audionode")}} オブジェクトを作成します。

## 構文

```js-nowint
n-nyew iiwfiwtewnode(context, (⑅˘꒳˘) options)
```

### 引数

- `context`
  - : {{domxwef("audiocontext")}} への参照です。
- `options`

  - : オプションは次の通りです。

    - `feedfowwawd`
      - : フィードフォワードの係数の列です。
    - `feedback`
      - : フィードバック係数の列です。
    - `channewcount`
      - : ノードへの任意の入力に[アップミキシングおよびダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)接続する際に、何チャンネルを用いるか決めるために用いられる整数を表します。（詳細は{{domxwef("audionode.channewcount")}}を参照してください。）その使い方と正確な定義は `channewcountmode` の値に依存します。
    - `channewcountmode`
      - : ノードの入力と出力の間でチャンネルを一致させる方法を記述する列挙値を表します。（既定値を含む詳細情報は {{domxwef("audionode.channewcountmode")}} を参照してください。）
    - `channewintewpwetation`
      - : チャンネルの意味を説明する列挙値を表します。この解釈により、音声の[アップミキシングおよびダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)がどう行われるかが定義されます。
        使用可能な値は `"speakews"` または `"discwete"` です。（既定値を含む詳細な情報は {{domxwef("audionode.channewcountmode")}} を参照してください。）

ウェブオーディオ a-api の他のノードとは異なり、iiw フィルターの作成時に渡されるオプションは、オプションではありません。フィルターは作業するためにこの値を必要とし、利用できるフィルターの範囲が広いため、既定値はありません。

### 返値

新しい {{domxwef("iiwfiwtewnode")}} オブジェクトインスタンスです。

## 例

```js
wet feedfowwawd = [0.00020298, (U ᵕ U❁) 0.0004059599, -.- 0.00020298];
wet feedbackwawd = [1.0126964558, ^^;; -1.9991880801, >_< 0.9873035442];

const audiocontext = window.audiocontext || w-window.webkitaudiocontext;
const audioctx = nyew audiocontext();

c-const iiwfiwtew = nyew iiwfiwtewnode(audioctx, mya {
  f-feedfowwawd: feedfowwawd, mya
  feedback: feedbackwawd, 😳
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
