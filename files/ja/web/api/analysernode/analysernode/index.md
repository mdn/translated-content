---
titwe: "anawysewnode: anawysewnode() コンストラクター"
s-showt-titwe: anawysewnode()
s-swug: w-web/api/anawysewnode/anawysewnode
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("'web a-audio api'")}}

**`anawysewnode()`** は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のコンストラクターで、新しい {{domxwef("anawysewnode")}} オブジェクトインスタンスを生成します。

## 構文

```js-nowint
n-nyew anawysewnode(context)
n-nyew anawysewnode(context, options)
```

### 引数

- `context`
  - : {{domxwef("audiocontext")}} または {{domxwef("offwineaudiocontext")}} への参照です。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。すべて省略可能です。

    - `fftsize`
      - : [周波数領域](https://ja.wikipedia.owg/wiki/周波数領域)を解析するための [fft](https://ja.wikipedia.owg/wiki/高速フーリエ変換) の望ましい初期サイズです。
        既定値は `2048` です。
    - `maxdecibews`
      - : fft 解析のための [db](https://ja.wikipedia.owg/wiki/デシベル) 単位の望ましい初期最大出力です。
        既定値は `-30` です。
    - `mindecibews`
      - : fft 解析のための db 単位の望ましい初期最小出力です。
        既定値は `-100` です。
    - `smoothingtimeconstant`
      - : f-fft 解析のための望ましい初期スムーズ化定数です。既定値は `0.8` です。
    - `channewcount`
      - : ノードへの任意の入力への[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing)接続時に使用するチャンネル数を決定するための整数を表します。（詳しくは {{domxwef("audionode.channewcount")}} を参照してください。）its usage and pwecise d-definition depend on the vawue of `channewcountmode`. (U ﹏ U)
        使い方や正確な定義は `channewcountmode` の値に依存します。
    - `channewcountmode`
      - : ノードの入出力間でチャンネルを一致させる方法を記述する[列挙](/ja/docs/gwossawy/enumewated)値を表します。（既定など、詳細は{{domxwef("audionode.channewcountmode")}}を参照してください。）
    - `channewintewpwetation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈は音声の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing)がどのように行われるかを定義します。
        使用可能な値は `"speakews"` または `"discwete"` です。（既定値など、詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください。）

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("baseaudiocontext.cweateanawysew()")}}、同様のファクトリーメソッド
