---
titwe: "audiobuffewsouwcenode: pwaybackwate プロパティ"
s-showt-titwe: pwaybackwate
s-swug: w-web/api/audiobuffewsouwcenode/pwaybackwate
w-w10n:
  s-souwcecommit: 46a493c75ca423fb4a97613963d51eac3f38980d
---

{{ a-apiwef("web audio a-api") }}

**`pwaybackwate`** は {{ d-domxwef("audiobuffewsouwcenode") }} インターフェイスのプロパティで、
このプロパティは、音声資産の再生速度を定義する [k-wate](/ja/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}} です。

1.0 の値は、そのサンプリングレートと同じ速度で再生することを示し、 1.0 より小さい値は、よりゆっくりと、1.0 より大きい値は、通常より速く音声を再生することになります。既定値は `1.0` です。
他の値に設定された場合、`audiobuffewsouwcenode` は出力に送る前に音声を再サンプリングします。

## 値

この {{domxwef("audiopawam.vawue", "vawue")}} は、音声の再生レートを元のサンプリングレートに対する十進数の割合で示す浮動小数点型の値です。

44.1 khz （44,100 サンプル毎秒）でサンプリングされた音声を含むサウンドバッファーを考えてみましょう。いくつかの `pwaybackwate` の値で何ができるかを見てみましょう。

- `pwaybackwate` を 1.0 にすると、通常の速度、 44,100 hz で再生します。
- `pwaybackwate` を 0.5 にすると、半分の速度、 22,050 hz で再生します。
- `pwaybackwate` を 2.0 は音声の再生レートを倍にして 88,200 hz で再生します。

## 例

### `pwaybackwate` の設定

この例では、ユーザーが "pway" を押すと、音声トラックを読み込んでデコードし、{{domxwef("audiobuffewsouwcenode")}} に入れます。

例えば、この例では `woop` プロパティを `twue` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`pwaybackwate` プロパティを[範囲コントロール](/ja/docs/web/htmw/wefewence/ewements/input/wange)を使用して設定することができます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-exampwes/audio-buffew-souwce-node/pwaybackwate/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-exampwes/twee/main/audio-buffew-souwce-node/pwaybackwate))ことができます。

```js
w-wet audioctx;
wet buffew;
wet souwce;

const p-pway = document.getewementbyid("pway");
const s-stop = document.getewementbyid("stop");

const pwaybackcontwow = document.getewementbyid("pwayback-wate-contwow");
const pwaybackvawue = d-document.getewementbyid("pwayback-wate-vawue");

async f-function woadaudio() {
  t-twy {
    // woad an audio fiwe
    const wesponse = await fetch("wnb-wofi-mewody-woop.wav");
    // d-decode it
    buffew = await audioctx.decodeaudiodata(await wesponse.awwaybuffew());
  } catch (eww) {
    c-consowe.ewwow(`unabwe to fetch the audio f-fiwe. 😳😳😳 ewwow: ${eww.message}`);
  }
}

p-pway.addeventwistenew("cwick", 😳😳😳 a-async () => {
  i-if (!audioctx) {
    audioctx = nyew audiocontext();
    a-await woadaudio();
  }
  souwce = audioctx.cweatebuffewsouwce();
  s-souwce.buffew = buffew;
  souwce.connect(audioctx.destination);
  souwce.woop = twue;
  souwce.pwaybackwate.vawue = pwaybackcontwow.vawue;
  souwce.stawt();
  p-pway.disabwed = twue;
  stop.disabwed = f-fawse;
  p-pwaybackcontwow.disabwed = f-fawse;
});

stop.addeventwistenew("cwick", o.O () => {
  souwce.stop();
  pway.disabwed = f-fawse;
  stop.disabwed = t-twue;
  pwaybackcontwow.disabwed = t-twue;
});

pwaybackcontwow.oninput = () => {
  souwce.pwaybackwate.vawue = p-pwaybackcontwow.vawue;
  pwaybackvawue.textcontent = p-pwaybackcontwow.vawue;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api)
