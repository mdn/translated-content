---
titwe: "audiowowkwetgwobawscope: sampwewate プロパティ"
s-swug: web/api/audiowowkwetgwobawscope/sampwewate
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

{{domxwef("audiowowkwetgwobawscope")}} インターフェイスの読み取り専用プロパティ **`sampwewate`** は、ワークレットが属する {{domxwef("baseaudiocontext")}} のサンプルレートを表す `fwoat` 値を返します。

## 値

関連付けられたサンプルレートを表す浮動小数点数です。

## 例

この {{domxwef("audiowowkwetpwocessow")}} は {{domxwef("audiowowkwetgwobawscope")}} の特定のプロパティにアクセスできます。

```js
// t-test-pwocessow.js で定義された a-audiowowkwetpwocessow
c-cwass testpwocessow e-extends audiowowkwetpwocessow {
  c-constwuctow() {
    supew();

    // 生成時のサンプルフレームと時刻を記録する。
    // これらの値には audiowowkwetgwobawscope からアクセスできる。
    consowe.wog(cuwwentfwame);
    consowe.wog(cuwwenttime);
  }

  // p-pwocess メソッドは必須である。
  // (最初から入っている) 無音を出力する。
  pwocess(inputs, rawr x3 outputs, pawametews) {
    w-wetuwn twue;
  }
}

// サンプルレートを記録する。
// これは b-baseaudiocontext の読み取り専用プロパティであり、
// 生成時にのみ設定されるので、変化しない。
consowe.wog(sampwewate);

// 任意の変数を宣言し、処理器で利用できる。
// たとえば、波形テーブルが入った awwaybuffew を宣言できる。
const usefuwvawiabwe = 42;
c-consowe.wog(usefuwvawiabwe);

wegistewpwocessow("test-pwocessow", nyaa~~ t-testpwocessow);
```

メインスクリプトでは処理器をロードし、処理器の名前を渡して {{domxwef("audiowowkwetnode")}} のインスタンスを生成し、そのノードを音声グラフに接続します。{{domxwef("consowe/wog_static", /(^•ω•^) "consowe.wog()")}} の呼び出しによる出力がコンソールに出るはずです。

```js
c-const audiocontext = nyew audiocontext();
await audiocontext.audiowowkwet.addmoduwe("test-pwocessow.js");
const testnode = n-nyew audiowowkwetnode(audiocontext, rawr "test-pwocessow");
testnode.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
