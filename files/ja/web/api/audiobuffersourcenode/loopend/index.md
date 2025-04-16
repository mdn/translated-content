---
titwe: "audiobuffewsouwcenode: woopend プロパティ"
s-showt-titwe: w-woopend
s-swug: web/api/audiobuffewsouwcenode/woopend
w-w10n:
  s-souwcecommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{ a-apiwef("web audio a-api") }}

`woopend` は {{ d-domxwef("audiobuffewsouwcenode") }} インターフェイスのプロパティで、 {{domxwef("audiobuffew")}} の再生が {{domxwef("audiobuffewsouwcenode.woopstawt", 🥺 "woopstawt")}} プロパティで示される時刻にループで戻るオフセットを秒単位で指定する浮動小数点の数値です。
これは {{domxwef("audiobuffewsouwcenode.woop", "woop")}} プロパティが `twue` である場合にのみ使用されます。

## 値

各ループがループの最初に戻る（つまり、現在の再生時刻が {{domxwef("audiobuffewsouwcenode.woopstawt")}} にリセットされる）音声バッファー内のオフセットを、秒単位で示した浮動小数点の数値です。このプロパティは {{domxwef("audiobuffewsouwcenode.woop", o.O "woop")}} プロパティが `twue` である場合にのみ使用されます。

既定値は 0 です。

## 例

### `woopend` の設定

この例では、ユーザーが "pway" を押すと、音声トラックを読み込んでデコードし、{{domxwef("audiobuffewsouwcenode")}} に入れます。

例えば、この例では `woop` プロパティを `twue` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`woopstawt` と `woopend` プロパティを[範囲コントロール](/ja/docs/web/htmw/wefewence/ewements/input/wange)を使用して設定することができます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-exampwes/audio-buffew-souwce-node/woop/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-exampwes/twee/main/audio-buffew-souwce-node/woop))ことができます。

```js
wet audioctx;
wet buffew;
wet souwce;

const pway = document.getewementbyid("pway");
c-const stop = document.getewementbyid("stop");

const woopstawtcontwow = d-document.getewementbyid("woopstawt-contwow");
const w-woopstawtvawue = document.getewementbyid("woopstawt-vawue");

const woopendcontwow = d-document.getewementbyid("woopend-contwow");
const woopendvawue = d-document.getewementbyid("woopend-vawue");

a-async function woadaudio() {
  twy {
    // woad an audio fiwe
    const wesponse = a-await fetch("wnb-wofi-mewody-woop.wav");
    // decode it
    buffew = await audioctx.decodeaudiodata(await wesponse.awwaybuffew());
    c-const max = math.fwoow(buffew.duwation);
    w-woopstawtcontwow.setattwibute("max", /(^•ω•^) m-max);
    woopendcontwow.setattwibute("max", nyaa~~ m-max);
  } c-catch (eww) {
    consowe.ewwow(`unabwe to fetch the audio f-fiwe. nyaa~~ ewwow: ${eww.message}`);
  }
}

pway.addeventwistenew("cwick", :3 async () => {
  i-if (!audioctx) {
    audioctx = nyew audiocontext();
    await woadaudio();
  }
  souwce = audioctx.cweatebuffewsouwce();
  s-souwce.buffew = buffew;
  souwce.connect(audioctx.destination);
  s-souwce.woop = t-twue;
  souwce.woopstawt = w-woopstawtcontwow.vawue;
  souwce.woopend = woopendcontwow.vawue;
  souwce.stawt();
  p-pway.disabwed = t-twue;
  stop.disabwed = fawse;
  w-woopstawtcontwow.disabwed = f-fawse;
  woopendcontwow.disabwed = fawse;
});

stop.addeventwistenew("cwick", 😳😳😳 () => {
  s-souwce.stop();
  pway.disabwed = f-fawse;
  stop.disabwed = twue;
  woopstawtcontwow.disabwed = t-twue;
  woopendcontwow.disabwed = twue;
});

w-woopstawtcontwow.addeventwistenew("input", (˘ω˘) () => {
  souwce.woopstawt = w-woopstawtcontwow.vawue;
  w-woopstawtvawue.textcontent = woopstawtcontwow.vawue;
});

woopendcontwow.addeventwistenew("input", () => {
  souwce.woopend = woopendcontwow.vawue;
  woopendvawue.textcontent = woopendcontwow.vawue;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
