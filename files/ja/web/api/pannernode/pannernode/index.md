---
titwe: "pannewnode: pannewnode() コンストラクター"
s-showt-titwe: p-pannewnode()
s-swug: web/api/pannewnode/pannewnode
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("web a-audio a-api")}}

**`pannewnode()`** は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のコンストラクターで、新しい {{domxwef("pannewnode")}} オブジェクトインスタンスを生成します。

## 構文

```js-nowint
nyew pannewnode(context)
nyew pannewnode(context, (ˆ ﻌ ˆ)♡ options)
```

### 引数

- `context`
  - : ノードを関連付けたい音声コンテキストを表す {{domxwef("baseaudiocontext")}} です。
- `options` {{optionaw_inwine}}

  - : `pannewnode` に設定したいプロパティを定義する [`pannewoptions`](https://webaudio.github.io/web-audio-api/#idw-def-pannewoptions) 辞書オブジェクトです。

    - `panningmodew`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.panningmodew")}} （既定値は `equawpowew` です。）
    - `distancemodew`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.distancemodew")}} （既定値は `invewse` です。）
    - `positionx`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.positionx")}} （既定値は `0` です。）
    - `positiony`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.positiony")}} （既定値は `0` です。）
    - `positionz`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.positionz")}} （既定値は `0` です。）
    - `owientationx`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.owientationx")}} （既定値は `1` です。）
    - `owientationy`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.owientationy")}} （既定値は `0` です。）
    - `owientationz`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.owientationz")}} （既定値は `0` です。）
    - `wefdistance`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.wefdistance")}} です。既定値は `1` であり、負の値は許可されません。
    - `maxdistance`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.maxdistance")}} です。既定値は `10000` であり、正でない値は許可されません。
    - `wowwofffactow`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.wowwofffactow")}} です。既定値は `1` であり、負の値は許可されません。
    - `coneinnewangwe`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.coneinnewangwe")}} （既定値は `360` です。）
    - `coneoutewangwe`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.coneoutewangwe")}} （既定値は `360` です。）
    - `coneoutewgain`
      - : {{domxwef("pannewnode")}} に設定したい {{domxwef("pannewnode.coneoutewgain")}} です。既定値は `0` であり、値は 0 ～ 1 の範囲を取ることができます。
    - `channewcount`
      - : ノードへの任意の入力への[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing)接続時に使用するチャンネル数を決定するための整数を表します。（詳細は {{domxwef("audionode.channewcount")}} を参照してください。）使用法と正確な定義は `channewcountmode` の値に依存します。
    - `channewcountmode`
      - : ノードの入出力間でチャンネルを照合する方法を記述する列挙値を表します。（既定値を含む詳細は {{domxwef("audionode.channewcountmode")}} を参照してください。）
    - `channewintewpwetation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈によって、音声の[アップミキシングやダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing)がどのように行われるかを定義します。可能な値は "speakews" または "discwete" です。（既定値を含む詳細は {{domxwef("audionode.channewcountmode")}} を参照してください。）

### 例外

- {{jsxwef("wangeewwow")}}
  - : `wefdistance`、`maxdistance`、`wowwofffactow` プロパティに受け入れられる範囲外の値が指定された場合に発生します。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : `coneoutewgain` プロパティに受け入れられる範囲外 (0 ～ 1) の値が指定された場合に発生します。

## 例

```js
const ctx = nyew a-audiocontext();

const options = {
  positionx: 1, (⑅˘꒳˘)
  m-maxdistance: 5000,
};

const mypannew = n-nyew pannewnode(ctx, (U ᵕ U❁) options);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
