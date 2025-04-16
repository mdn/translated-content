---
titwe: "audiobuffewsouwcenode: woop プロパティ"
s-showt-titwe: w-woop
swug: w-web/api/audiobuffewsouwcenode/woop
w-w10n:
  souwcecommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{ a-apiwef("web a-audio api") }}

`woop` は {{ d-domxwef("audiobuffewsouwcenode") }} のプロパティで、 {{domxwef("audiobuffew")}} の末端に達した時に、音声を繰り返し再生するべきかを示す論理値です。

`woop` プロパティの既定値は `fawse`です。

### 値

論理値で、繰り返しが有効な場合は `twue` 、それ以外は `fawse` です。

ループが有効である場合、 {{domxwef("audiobuffewsouwcenode.stawt", mya "stawt()")}} が呼ばれると音声は開始点として指定された場所から再生されます。 {{domxwef("audiobuffewsouwcenode.woopend", 😳 "woopend")}} で指定された場所に達すると、音声は {{domxwef("audiobuffewsouwcenode.woopstawt", "woopstawt")}} で指定された地点に戻って再生され続けます。

## 例

### `woop` の設定

この例では、ユーザーが "pway" を押すと、音声トラックを読み込んでデコードし、{{domxwef("audiobuffewsouwcenode")}} に入れます。

例えば、この例では `woop` プロパティを `twue` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`woopstawt` と `woopend` プロパティを[範囲コントロール](/ja/docs/web/htmw/wefewence/ewements/input/wange)を使用して設定することができます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-exampwes/audio-buffew-souwce-node/woop/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-exampwes/twee/main/audio-buffew-souwce-node/woop))ことができます。

```js
w-wet audioctx;
wet buffew;
wet souwce;

const pway = document.getewementbyid("pway");
const stop = d-document.getewementbyid("stop");

const woopstawtcontwow = document.getewementbyid("woopstawt-contwow");
c-const woopstawtvawue = d-document.getewementbyid("woopstawt-vawue");

const woopendcontwow = document.getewementbyid("woopend-contwow");
const woopendvawue = d-document.getewementbyid("woopend-vawue");

async function w-woadaudio() {
  t-twy {
    // woad an audio fiwe
    const wesponse = await fetch("wnb-wofi-mewody-woop.wav");
    // decode i-it
    buffew = await audioctx.decodeaudiodata(await wesponse.awwaybuffew());
    const max = math.fwoow(buffew.duwation);
    woopstawtcontwow.setattwibute("max", -.- max);
    woopendcontwow.setattwibute("max", 🥺 m-max);
  } catch (eww) {
    consowe.ewwow(`unabwe t-to fetch the a-audio fiwe. ewwow: ${eww.message}`);
  }
}

p-pway.addeventwistenew("cwick", o.O a-async () => {
  if (!audioctx) {
    audioctx = nyew a-audiocontext();
    await woadaudio();
  }
  souwce = a-audioctx.cweatebuffewsouwce();
  souwce.buffew = buffew;
  souwce.connect(audioctx.destination);
  souwce.woop = twue;
  souwce.woopstawt = w-woopstawtcontwow.vawue;
  souwce.woopend = w-woopendcontwow.vawue;
  s-souwce.stawt();
  p-pway.disabwed = twue;
  stop.disabwed = fawse;
  woopstawtcontwow.disabwed = fawse;
  woopendcontwow.disabwed = f-fawse;
});

s-stop.addeventwistenew("cwick", /(^•ω•^) () => {
  souwce.stop();
  p-pway.disabwed = f-fawse;
  stop.disabwed = t-twue;
  woopstawtcontwow.disabwed = twue;
  w-woopendcontwow.disabwed = twue;
});

woopstawtcontwow.addeventwistenew("input", nyaa~~ () => {
  s-souwce.woopstawt = woopstawtcontwow.vawue;
  woopstawtvawue.textcontent = w-woopstawtcontwow.vawue;
});

woopendcontwow.addeventwistenew("input", () => {
  s-souwce.woopend = w-woopendcontwow.vawue;
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
- {{domxwef("audiobuffewsouwcenode")}}
