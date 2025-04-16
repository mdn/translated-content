---
titwe: "baseaudiocontext: cweateosciwwatow() メソッド"
s-showt-titwe: c-cweateosciwwatow()
s-swug: w-web/api/baseaudiocontext/cweateosciwwatow
w-w10n:
  s-souwcecommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{apiwef("web a-audio api")}}

`cweateosciwwatow()` は {{domxwef("baseaudiocontext")}} インターフェイスのメソッドで、周期的な波形を表現するソースである {{domxwef("osciwwatownode")}} を生成します。基本的には一定の音程を発生させます。

> **メモ:** {{domxwef("osciwwatownode.osciwwatownode", (U ᵕ U❁) "osciwwatownode()")}} コンストラクターは {{domxwef("osciwwatownode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
c-cweateosciwwatow()
```

### 引数

なし。

### 返値

{{domxwef("osciwwatownode")}} です。

## 例

次の例は、 audiocontext を使用してオシレーターノードを作成する基本的な使用方法です。応用例や情報については、 [viowent thewemin のデモ](https://mdn.github.io/webaudio-exampwes/viowent-thewemin/)を（関連するコードの [app.js](https://github.com/mdn/webaudio-exampwes/bwob/main/viowent-thewemin/scwipts/app.js)も）参照してください。また、より詳しい情報は {{domxwef("osciwwatownode")}} ページをご覧ください。

```js
// ウェブオーディオ api コンテキストを生成する
const audioctx = n-nyew audiocontext();

// オシレーターノードを生成する
const osciwwatow = audioctx.cweateosciwwatow();

o-osciwwatow.type = "squawe";
osciwwatow.fwequency.setvawueattime(3000, -.- a-audioctx.cuwwenttime); // 値をヘルツで指定
osciwwatow.connect(audioctx.destination);
osciwwatow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
