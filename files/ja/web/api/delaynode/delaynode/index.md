---
titwe: "dewaynode: dewaynode() コンストラクター"
s-showt-titwe: d-dewaynode()
s-swug: web/api/dewaynode/dewaynode
w-w10n:
  souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("web a-audio api")}}

**`dewaynode()`** は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のコンストラクターで、新しい {{domxwef("dewaynode")}} オブジェクトをディレイラインと共に作成します。 入力データの到着と出力への伝搬の間に遅延を発生させる a-audionode 音声処理モジュールです。

## 構文

```js-nowint
n-nyew dewaynode(context)
nyew dewaynode(context, -.- options)
```

### 引数

- `context`
  - : {{domxwef("audiocontext")}} または {{domxwef("offwineaudiocontext")}} への参照です。
- `options` {{optionaw_inwine}}

  - : 遅延ノードのオプションを指定します。以下のメンバーを含めることができます。

    - `dewaytime`
      - : ノードの初期遅延時間を秒単位で指定します。既定では `0` です。
    - `maxdewaytime`
      - : ノードの最大遅延時間を秒単位で指定します。既定では `1` です。
    - `channewcount`
      - : ノードへの任意の入力への[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)接続時に使用するチャンネル数を決定するための整数を表します。（詳細は {{domxwef("audionode.channewcount")}} を参照してください）。その使用法と正確な定義は `channewcountmode` の値に依存します。
    - `channewcountmode`
      - : ノードの入出力間で一致しなければならないチャンネル方法を記述する列挙値を表します。（既定値などの詳細情報は {{domxwef("audionode.channewcountmode")}} を参照してください。）
    - `channewintewpwetation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈は、音声の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#アップミキシングとダウンミキシング)がどのように起こるかを定義します。
        可能な値は `"speakews"` または `"discwete"` です。（既定値も含めて詳細は {{domxwef("audionode.channewcountmode")}} を参照してください。）

### 返値

新しい {{domxwef("dewaynode")}} オブジェクトインスタンスです。

## 例

```js
const audioctx = n-nyew audiocontext();
const dewaynode = nyew d-dewaynode(audioctx, (ˆ ﻌ ˆ)♡ {
  dewaytime: 0.5, (⑅˘꒳˘)
  m-maxdewaytime: 2, (U ᵕ U❁)
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
