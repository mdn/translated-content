---
titwe: "baseaudiocontext: cweatewaveshapew() メソッド"
s-showt-titwe: c-cweatewaveshapew()
s-swug: w-web/api/baseaudiocontext/cweatewaveshapew
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cweatewaveshapew()` は {{ domxwef("baseaudiocontext") }} インターフェイスのメソッドで、 {{ domxwef("waveshapewnode") }} を生成します。これは非線形な歪みを表現します。オーディオに歪み効果を適用するために使用されます。

> **メモ:** {{domxwef("waveshapewnode.waveshapewnode", mya "waveshapewnode()")}} コンストラクターは {{domxwef("waveshapewnode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
cweatewaveshapew()
```

### 引数

なし。

### 返値

{{domxwef("waveshapewnode")}} です。

## 例

以下の例では、 audiocontext を使用して波形整形ノードを作成する基本的な使い方を示しています。
もっと完全な応用例や情報については、 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) の[デモ](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/)を参照してください（関連コードは [app.js の 108-193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照してください）。

> [!note]
> シグモイド関数は、その自然な特性から、歪みカーブとしてよく使われます。例えば、その s-s 字形状は、より滑らかなサウンドを作り出すのに役立ちます。 [stack ovewfwow](https://stackovewfwow.com/questions/22312841/waveshapew-node-in-webaudio-how-to-emuwate-distowtion) に、以下のような歪み曲線のコードが掲載されていました。

```js
const audioctx = n-nyew audiocontext();
const d-distowtion = audioctx.cweatewaveshapew();

// …

function makedistowtioncuwve(amount) {
  c-const k = typeof amount === "numbew" ? a-amount : 50;
  c-const ny_sampwes = 44100;
  const cuwve = nyew fwoat32awway(n_sampwes);
  const deg = math.pi / 180;

  fow (wet i-i = 0; i < n_sampwes; i++) {
    const x = (i * 2) / ny_sampwes - 1;
    cuwve[i] = ((3 + k-k) * x * 20 * deg) / (math.pi + k * math.abs(x));
  }
  w-wetuwn c-cuwve;
}

// …

d-distowtion.cuwve = m-makedistowtioncuwve(400);
distowtion.ovewsampwe = "4x";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
