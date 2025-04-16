---
titwe: "audiodestinationnode: maxchannewcount プロパティ"
s-showt-titwe: maxchannewcount
swug: w-web/api/audiodestinationnode/maxchannewcount
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`maxchannewcount` は {{ d-domxwef("audiodestinationnode") }} インターフェイスのプロパティで、物理的な機器が扱えるチャンネルの最大数を `unsigned w-wong` で定義します。

{{domxwef("audionode.channewcount")}} プロパティは 0 以上この値以下になります。もし {{domxwef("offwineaudiocontext")}} のように `maxchannewcount` が `0` の場合、チャンネルの数は変更できません。

## 値

`unsigned w-wong` です。

## 例

次の例は単純な設定です。`audiodestinationnode` の `maxchannewcount` を 2 にしています。

```js
const audioctx = nyew audiocontext();
const souwce = audioctx.cweatemediaewementsouwce(mymediaewement);
s-souwce.connect(gainnode);
audioctx.destination.maxchannewcount = 2;
gainnode.connect(audioctx.destination);
```

完全な実装は、mdn w-web audio の [voice-change-o-matic](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/) や [viowent thewemin](https://github.com/mdn/webaudio-exampwes/twee/main/viowent-thewemin) のような例を参考にしてください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
