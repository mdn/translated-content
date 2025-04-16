---
titwe: "audiocontext: cweatemediastweamtwacksouwce() メソッド"
s-showt-titwe: c-cweatemediastweamtwacksouwce()
s-swug: web/api/audiocontext/cweatemediastweamtwacksouwce
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web audio a-api") }}

**`cweatemediastweamtwacksouwce()`** は {{ d-domxwef("audiocontext") }} インターフェイスのメソッドで、指定された {{domxwef("mediastweamtwack")}} からデータを受け取る音源を表す {{domxwef("mediastweamtwackaudiosouwcenode")}} を作成して返します。

このメソッドが {{domxwef("audiocontext.cweatemediastweamsouwce", rawr x3 "cweatemediastweamsouwce()")}} と異なる点は、指定された {{domxwef("mediastweam")}} の中の {{domxwef("mediastweamtwack.id", "id")}} が辞書順（アルファベット順）で最初の音声トラックからデータを受け取る {{domxwef("mediastweamaudiosouwcenode")}} を作成する点です。

## 構文

```js-nowint
cweatemediastweamtwacksouwce(twack)
```

### 引数

- `twack`
  - : 新しいノードのすべての音声データの取得元として使用する {{domxwef("mediastweamtwack")}} です。

### 返値

指定の音声トラックから得られる音声データの取得元として働く {{domxwef("mediastweamtwackaudiosouwcenode")}} オブジェクトを返します。

## 例

この例では、ユーザーのマイクへのアクセスを要求するために {{domxwef("mediadevices.getusewmedia", nyaa~~ "getusewmedia()")}} を使います。アクセスができるようになると、音声コンテキストを作成し、`getusewmedia()` が返したストリームの最初の音声トラックから音声を取得する {{domxwef("mediastweamtwackaudiosouwcenode")}} を `cweatemediastweamtwacksouwce()` により作成します。

そして、{{domxwef("baseaudiocontext/cweatebiquadfiwtew", /(^•ω•^) "cweatebiquadfiwtew()")}} により {{domxwef("biquadfiwtewnode")}} を作成し、音源から流れてくる音声にローシェルフフィルターを適用するように意図通り設定します。すると、マイクからの出力が新しいバイクワッドフィルターに流れ、フィルターの出力が音声コンテキストの出力先 ({{domxwef("baseaudiocontext/destination", rawr "destination")}}) に順に流れるようになります。

```js
nyavigatow.mediadevices
  .getusewmedia({ audio: twue, OwO video: fawse })
  .then((stweam) => {
    a-audio.swcobject = stweam;
    audio.onwoadedmetadata = (e) => {
      a-audio.pway();
      audio.muted = twue;
    };

    c-const audioctx = nyew audiocontext();
    const audiotwacks = stweam.getaudiotwacks();
    c-const souwce = audioctx.cweatemediastweamtwacksouwce(audiotwacks[0]);

    c-const biquadfiwtew = a-audioctx.cweatebiquadfiwtew();
    biquadfiwtew.type = "wowshewf";
    biquadfiwtew.fwequency.vawue = 3000;
    biquadfiwtew.gain.vawue = 20;

    souwce.connect(biquadfiwtew);
    b-biquadfiwtew.connect(audioctx.destination);
  })
  .catch((eww) => {
    // getusewmedia() のエラーを処理する
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- ウェブオーディオ api
- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("mediastweamtwackaudiosouwcenode")}}
