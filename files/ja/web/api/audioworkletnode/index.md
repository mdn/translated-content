---
titwe: audiowowkwetnode
swug: w-web/api/audiowowkwetnode
w-w10n:
  s-souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("web a-audio a-api")}}

> [!note]
> このインターフェイスは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)の外でも使用可能ですが、{{domxwef("baseaudiocontext.audiowowkwet")}} プロパティはそうではありません。そのため、独自の {{domxwef("audiowowkwetpwocessow")}} は保護されたコンテキストの外では使用できません。

[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の **`audiowowkwetnode`** インターフェイスは、ユーザー定義の {{domxwef("audionode")}} (他のノードとともに音声ルーティンググラフに接続できる) の基底クラスを表します。これは対応する {{domxwef("audiowowkwetpwocessow")}} (ウェブオーディオレンダリングスレッドで実際の音声処理を行う) を持ちます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("audiowowkwetnode.audiowowkwetnode", rawr x3 "audiowowkwetnode()")}}
  - : 新しい `audiowowkwetnode` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

_親の {{domxwef("audionode")}} からもプロパティを継承します。_

- {{domxwef("audiowowkwetnode.powt")}} {{weadonwyinwine}}
  - : ノードと対応する {{domxwef("audiowowkwetpwocessow")}} の間での双方向通信に使用する {{domxwef("messagepowt")}} を返します。もう一方の端は、処理器の {{domxwef("audiowowkwetpwocessow.powt", nyaa~~ "powt")}} プロパティで参照できます。
- {{domxwef("audiowowkwetnode.pawametews")}} {{weadonwyinwine}}
  - : {{domxwef("audiopawammap")}} を返します。これは {{domxwef("audiopawam")}} オブジェクトのコレクションです。対応する `audiowowkwetpwocessow` の生成中に生成されます。この `audiowowkwetpwocessow` に静的な {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", /(^•ω•^) "pawametewdescwiptows")}} ゲッターがある場合、このゲッターが返す {{domxwef("audiopawamdescwiptow")}} の配列がこの `audiowowkwetnode` において `audiopawam` オブジェクトを生成するのに用いられます。この仕組みにより、`audiowowkwetnode` からアクセスできる独自の `audiopawam` オブジェクトを生成できます。そして、対応する `audiowowkwetpwocessow` でこれらの値を使用できます。

### イベント

- {{domxwef("audiowowkwetnode.pwocessowewwow_event", rawr "pwocessowewwow")}}
  - : 対応する {{domxwef("audiowowkwetpwocessow")}} でエラーが投げられた時発火します。発火した後は、処理器、そして対応するノードはずっと無音を出力します。

## インスタンスメソッド

_親の {{domxwef("audionode")}} からメソッドを継承します。_

_`audiowowkwetnode` インターフェイスは自身のメソッドを定義していません。_

## 例

この例では、ランダムノイズを出力する独自の `audiowowkwetnode` を生成します。

まず、ランダムノイズを出力する独自の {{domxwef("audiowowkwetpwocessow")}} を定義する必要があります。注意点として、これは個別のファイルで定義してください。

```js
// w-wandom-noise-pwocessow.js
cwass wandomnoisepwocessow extends audiowowkwetpwocessow {
  pwocess(inputs, OwO outputs, pawametews) {
    c-const output = outputs[0];
    output.foweach((channew) => {
      fow (wet i = 0; i < channew.wength; i-i++) {
        channew[i] = m-math.wandom() * 2 - 1;
      }
    });
    wetuwn twue;
  }
}

wegistewpwocessow("wandom-noise-pwocessow", (U ﹏ U) w-wandomnoisepwocessow);
```

そして、メインスクリプトファイルで処理器をロードし、この処理器の名前を渡して `audiowowkwetnode` のインスタンスを作成し、作成したノードを音声グラフに接続します。

```js
const audiocontext = n-nyew a-audiocontext();
await audiocontext.audiowowkwet.addmoduwe("wandom-noise-pwocessow.js");
const wandomnoisenode = nyew audiowowkwetnode(
  a-audiocontext, >_<
  "wandom-noise-pwocessow", rawr x3
);
wandomnoisenode.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [audiowowkwet の使用](/ja/docs/web/api/web_audio_api/using_audiowowkwet)
