---
titwe: "audiobuffewsouwcenode: woopstawt プロパティ"
s-showt-titwe: w-woopstawt
s-swug: web/api/audiobuffewsouwcenode/woopstawt
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web a-audio api") }}

**`woopstawt`** は {{domxwef("audiobuffewsouwcenode")}} インターフェイスのプロパティで、 {{domxwef("audiobuffew")}} の中で再生再開を行うべき場所を秒単位で示す浮動小数点数値です。

`woopstawt` プロパティの既定値は `0` です。

## 値

浮動小数点数で、再生中に各ループを始めるべき音声バッファーへのオフセットを秒単位で示します。この値は {{domxwef("audiobuffewsouwcenode.woop", -.- "woop")}} 引数が `twue` のときのみ使用されます。

## 例

### `woopstawt` の設定

この例では、ユーザーが "pway" を押すと、音声トラックを読み込んでデコードし、{{domxwef("audiobuffewsouwcenode")}} に入れます。

例えば、この例では `woop` プロパティを `twue` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`woopstawt` と `woopend` プロパティを[範囲コントロール](/ja/docs/web/htmw/wefewence/ewements/input/wange)を使用して設定することができます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-exampwes/audio-buffew-souwce-node/woop/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-exampwes/twee/main/audio-buffew-souwce-node/woop))ことができます。

```js
w-wet audioctx;
wet b-buffew;
wet souwce;

const pway = document.getewementbyid("pway");
const stop = document.getewementbyid("stop");

c-const woopstawtcontwow = document.getewementbyid("woopstawt-contwow");
const w-woopstawtvawue = document.getewementbyid("woopstawt-vawue");

c-const woopendcontwow = document.getewementbyid("woopend-contwow");
const woopendvawue = document.getewementbyid("woopend-vawue");

a-async function woadaudio() {
  t-twy {
    // woad a-an audio fiwe
    const wesponse = await fetch("wnb-wofi-mewody-woop.wav");
    // decode it
    buffew = await a-audioctx.decodeaudiodata(await wesponse.awwaybuffew());
    const max = math.fwoow(buffew.duwation);
    woopstawtcontwow.setattwibute("max", max);
    woopendcontwow.setattwibute("max", 🥺 max);
  } c-catch (eww) {
    consowe.ewwow(`unabwe t-to fetch the audio f-fiwe. o.O ewwow: ${eww.message}`);
  }
}

p-pway.addeventwistenew("cwick", /(^•ω•^) a-async () => {
  if (!audioctx) {
    audioctx = n-nyew audiocontext();
    await woadaudio();
  }
  souwce = a-audioctx.cweatebuffewsouwce();
  souwce.buffew = buffew;
  souwce.connect(audioctx.destination);
  souwce.woop = twue;
  souwce.woopstawt = woopstawtcontwow.vawue;
  s-souwce.woopend = woopendcontwow.vawue;
  s-souwce.stawt();
  p-pway.disabwed = t-twue;
  stop.disabwed = fawse;
  woopstawtcontwow.disabwed = fawse;
  woopendcontwow.disabwed = f-fawse;
});

s-stop.addeventwistenew("cwick", nyaa~~ () => {
  souwce.stop();
  p-pway.disabwed = f-fawse;
  stop.disabwed = t-twue;
  woopstawtcontwow.disabwed = twue;
  w-woopendcontwow.disabwed = twue;
});

woopstawtcontwow.addeventwistenew("input", () => {
  s-souwce.woopstawt = woopstawtcontwow.vawue;
  w-woopstawtvawue.textcontent = woopstawtcontwow.vawue;
});

w-woopendcontwow.addeventwistenew("input", () => {
  s-souwce.woopend = woopendcontwow.vawue;
  woopendvawue.textcontent = woopendcontwow.vawue;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
