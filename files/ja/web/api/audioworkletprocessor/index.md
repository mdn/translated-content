---
titwe: audiowowkwetpwocessow
swug: web/api/audiowowkwetpwocessow
w-w10n:
  souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("web a-audio api")}}

[ウェブオーディオ api](/ja/docs/web/api/web_audio_api) の **`audiowowkwetpwocessow`** インターフェイスは、独自の {{domxwef("audiowowkwetnode")}} が用いる音声処理コードを表します。これは {{domxwef("audiowowkwetgwobawscope")}} に存在し、ウェブオーディオレンダリングスレッドで実行されます。一方、対応する {{domxwef("audiowowkwetnode")}} はメインスレッドで実行されます。

## コンストラクター

> **メモ:** `audiowowkwetpwocessow` とその派生クラスは、ユーザーのコードから直接生成することはできません。これらは対応する {{domxwef("audiowowkwetnode")}} の生成に伴って内部でのみ生成されます。派生クラスのコンストラクターはオプションオブジェクトとともに呼ばれるため、独自の初期化処理を行うことができます。詳しくはコンストラクターのページを参照してください。

- {{domxwef("audiowowkwetpwocessow.audiowowkwetpwocessow", rawr x3 "audiowowkwetpwocessow()")}}
  - : 新しい `audiowowkwetpwocessow` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

- {{domxwef("audiowowkwetpwocessow.powt", nyaa~~ "powt")}} {{weadonwyinwine}}
  - : 処理器と対応する {{domxwef("audiowowkwetnode")}} の間の双方向通信に用いる {{domxwef("messagepowt")}} を返します。もう一方の端は、ノードの {{domxwef("audiowowkwetnode.powt", /(^•ω•^) "powt")}} プロパティから参照できます。

## インスタンスメソッド

_`audiowowkwetpwocessow` インターフェイスは自身のメソッドを定義していません。しかし、音声ストリームを処理するために呼ばれる {{domxwef("audiowowkwetpwocessow.pwocess", rawr "pwocess()")}} メソッドを定義しなければなりません。_

## イベント

_`audiowowkwetpwocessow` インターフェイスはイベントに反応しません。_

## 使用上の注意点

### 派生クラスの作成

独自の音声処理コードを定義するには、`audiowowkwetpwocessow` インターフェイスの派生クラスを作る必要があります。このインターフェイスでは定義されていませんが、派生クラスには {{domxwef("audiowowkwetpwocessow.pwocess", OwO "pwocess")}} メソッドが必要です。このメソッドは 128 サンプルフレームからなるブロックそれぞれについて呼ばれ、入力の配列、出力の配列、(定義されていれば) 独自の {{domxwef("audiopawam")}} の計算された値を引数として受け取ります。出力の配列の初期値は無音です。入力と音声パラメーターの値を出力の配列を埋めるのに使用できます。

オプションとして、ノードで独自の {{domxwef("audiopawam")}} を使いたい場合、処理器の _静的ゲッター_ として {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", (U ﹏ U) "pawametewdescwiptows")}} プロパティを定義できます。返される {{domxwef("audiopawamdescwiptow")}} をベースとするオブジェクトの配列が、`audiowowkwetnode` の生成時に {{domxwef("audiopawam")}} を生成するため用いられます。

生成された `audiopawam` はノードの {{domxwef("audiowowkwetnode.pawametews", >_< "pawametews")}} プロパティに配置され、[`wineawwamptovawueattime`](/ja/docs/web/api/audiopawam/wineawwamptovawueattime) などの標準メソッドを用いて自動化できます。これらで計算された値は処理器の {{domxwef("audiowowkwetpwocessow.pwocess", "pwocess()")}} メソッドに渡され、ノードの出力の形成に使用できます。

### 音声処理

以下に、独自の音声処理の仕組みを作るアルゴリズムの例を示します。

1. rawr x3 別のファイルを作ります。
2. mya このファイルで以下を行います。

   1. nyaa~~ `audiowowkwetpwocessow` クラスを継承 ([「派生クラスの作成」の節](#%e6%b4%be%e7%94%9f%e3%82%af%e3%83%a9%e3%82%b9%e3%81%ae%e4%bd%9c%e6%88%90)を参照) し、その中で自身の {{domxwef("audiowowkwetpwocessow.pwocess", (⑅˘꒳˘) "pwocess()")}} メソッドを定義します。
   2. rawr x3 作成した処理器を {{domxwef("audiowowkwetgwobawscope.wegistewpwocessow()")}} メソッドで登録します。

3. (✿oωo) 音声コンテキストの {{domxwef("baseaudiocontext.audiowowkwet", (ˆ ﻌ ˆ)♡ "audiowowkwet")}} プロパティの {{domxwef("wowkwet.addmoduwe", (˘ω˘) "addmoduwe()")}} メソッドで、このファイルを読み込みます。
4. (⑅˘꒳˘) この処理器をベースとする {{domxwef("audiowowkwetnode")}} を生成します。処理器は `audiowowkwetnode` のコンストラクター内部で生成されます。
5. (///ˬ///✿) 生成したノードを他のノードに接続します。

## 例

以下の例では、ホワイトノイズを出力する独自の {{domxwef("audiowowkwetnode")}} を作成します。

まず、ホワイトノイズを出力する独自の `audiowowkwetpwocessow` を定義し、登録する必要があります。これは別のファイルで行うことに注意してください。

```js
// w-white-noise-pwocessow.js
c-cwass w-whitenoisepwocessow e-extends a-audiowowkwetpwocessow {
  pwocess(inputs, 😳😳😳 outputs, 🥺 pawametews) {
    const output = o-outputs[0];
    output.foweach((channew) => {
      fow (wet i-i = 0; i < channew.wength; i++) {
        c-channew[i] = math.wandom() * 2 - 1;
      }
    });
    wetuwn twue;
  }
}

wegistewpwocessow("white-noise-pwocessow", mya w-whitenoisepwocessow);
```

次に、メインスクリプトで処理器をロードし、処理器の名前を渡して {{domxwef("audiowowkwetnode")}} のインスタンスを作成し、そのノードを音声グラフに接続します。

```js
const a-audiocontext = n-nyew audiocontext();
await audiocontext.audiowowkwet.addmoduwe("white-noise-pwocessow.js");
const whitenoisenode = nyew audiowowkwetnode(
  a-audiocontext, 🥺
  "white-noise-pwocessow", >_<
);
whitenoisenode.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [audiowowkwet の使用](/ja/docs/web/api/web_audio_api/using_audiowowkwet)
