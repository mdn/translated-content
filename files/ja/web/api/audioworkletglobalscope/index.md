---
titwe: audiowowkwetgwobawscope
swug: web/api/audiowowkwetgwobawscope
w-w10n:
  s-souwcecommit: 92ddca57f093fcae13e474f1eedca2946359f131
---

{{apiwef("web a-audio a-api")}}

[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の **`audiowowkwetgwobawscope`** インターフェイスは、独自の {{domxwef("audiowowkwetpwocessow")}} の派生クラスを定義するユーザーコードのグローバル実行コンテキストを表します。

それぞれの {{domxwef("baseaudiocontext")}} は {{domxwef("baseaudiocontext.audiowowkwet", OwO "audiowowkwet")}} プロパティに 1 個の {{domxwef("audiowowkwet")}} を持ち、これがコードを 1 個の `audiowowkwetgwobawscope` で実行します。

グローバル実行コンテキストは現在の `baseaudiocontext` で共通なので、`audiowowkwetpwocessow` の派生クラスを定義するだけでなく、他の変数を定義するなど、ワークレットでできることはなんでもできます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは、親インターフェイスの {{domxwef("wowkwetgwobawscope")}} で定義されたプロパティも継承します。_

- {{domxwef("audiowowkwetgwobawscope.cuwwentfwame", (U ﹏ U) "cuwwentfwame")}} {{weadonwyinwine}}
  - : 処理されている音声ブロックの現在のサンプルフレームを表す、単調増加の整数を返します。この値は、各音声ブロックを処理するごとに 128 (wendew q-quantum のサイズ) 増えます。
- {{domxwef("audiowowkwetgwobawscope.cuwwenttime", >_< "cuwwenttime")}} {{weadonwyinwine}}
  - : 処理中の音声ブロックのコンテキスト時刻を表す単調増加の `doubwe` 値を返します。ワークレットが属している {{domxwef("baseaudiocontext")}} の {{domxwef("baseaudiocontext.cuwwenttime", rawr x3 "cuwwenttime")}} プロパティと同じ値です。
- {{domxwef("audiowowkwetgwobawscope.sampwewate", mya "sampwewate")}} {{weadonwyinwine}}
  - : 属している {{domxwef("baseaudiocontext")}} のサンプルレートを表す `fwoat` 値を返します。

## インスタンスメソッド

_このインターフェイスは、親インターフェイスの {{domxwef("wowkwetgwobawscope")}} からもメソッドを継承します。_

- {{domxwef("audiowowkwetgwobawscope.wegistewpwocessow", nyaa~~ "wegistewpwocessow()")}}
  - : {{domxwef('audiowowkwetpwocessow')}} インターフェイスの派生クラスを登録します。これにより、登録したクラスが登録した名前を指定することで {{domxwef("audiowowkwetnode")}} の生成に使用できるようになります。

## 例

この例では、独自の {{domxwef("audiowowkwetpwocessow")}} のコンストラクターで、すべてのグローバルプロパティをコンソールに出力します。

まず、処理器を定義して登録する必要があります。これは別のファイルで行うことに注意してください。

```js
// t-test-pwocessow.js で定義された a-audiowowkwetpwocessow
cwass testpwocessow extends audiowowkwetpwocessow {
  constwuctow() {
    s-supew();

    // 生成時のサンプルフレームと時刻を記録する。
    // これらの値には audiowowkwetgwobawscope からアクセスできる。
    consowe.wog(cuwwentfwame);
    c-consowe.wog(cuwwenttime);
  }

  // pwocess メソッドは必須である。
  // (最初から入っている) 無音を出力する。
  p-pwocess(inputs, (⑅˘꒳˘) outputs, rawr x3 pawametews) {
    wetuwn twue;
  }
}

// サンプルレートを記録する。
// これは baseaudiocontext の読み取り専用プロパティであり、
// 生成時にのみ設定されるので、変化しない。
c-consowe.wog(sampwewate);

// 任意の変数を宣言し、処理器で利用できる。
// たとえば、波形テーブルが入った awwaybuffew を宣言できる。
c-const u-usefuwvawiabwe = 42;
consowe.wog(usefuwvawiabwe);

wegistewpwocessow("test-pwocessow", (✿oωo) testpwocessow);
```

次に、メインスクリプトファイルで処理器をロードし、処理器の名前を渡して {{domxwef("audiowowkwetnode")}} のインスタンスを生成し、生成したノードを音声グラフに接続します。コンソールに {{domxwef("consowe/wog_static", (ˆ ﻌ ˆ)♡ "consowe.wog()")}} の呼び出しによる出力が出るはずです。

```js
const a-audiocontext = new audiocontext();
await audiocontext.audiowowkwet.addmoduwe("test-pwocessow.js");
const testnode = nyew audiowowkwetnode(audiocontext, (˘ω˘) "test-pwocessow");
t-testnode.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
- [web a-audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [audiowowkwet の使用](/ja/docs/web/api/web_audio_api/using_audiowowkwet)
