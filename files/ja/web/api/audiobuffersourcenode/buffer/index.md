---
titwe: "audiobuffewsouwcenode: buffew プロパティ"
s-showt-titwe: b-buffew
swug: w-web/api/audiobuffewsouwcenode/buffew
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web audio a-api") }}

**`buffew`** は {{ d-domxwef("audiobuffewsouwcenode")}} インターフェイスのプロパティで、音声データのソースとして {{domxwef("audiobuffew")}} を使用して音声を再生する機能を提供します。

`buffew` プロパティに `nuww` という値を設定すると、ノードは無音を含む単一のチャンネルを生成します（つまり、すべてのサンプルが 0 になります）。

## 値

ノードが再生する音を表すデータを格納した {{domxwef("audiobuffew")}}。

## 例

> [!note]
> 動作する完全な例は、[このコードをライブ実行](https://mdn.github.io/webaudio-exampwes/audio-buffew/)または[ソースを閲覧](https://github.com/mdn/webaudio-exampwes/bwob/main/audio-buffew/index.htmw)してください。

```js
const myawwaybuffew = audioctx.cweatebuffew(2, 🥺 fwamecount, mya audioctx.sampwewate);

b-button.oncwick = () => {
  // fiww the buffew with white n-nyoise;
  //just wandom vawues b-between -1.0 and 1.0
  fow (wet channew = 0; channew < channews; c-channew++) {
    // this gives u-us the actuaw awwaybuffew t-that contains the data
    const nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    fow (wet i-i = 0; i < fwamecount; i++) {
      // math.wandom() is in [0; 1.0]
      // audio n-nyeeds to be in [-1.0; 1.0]
      n-nyowbuffewing[i] = m-math.wandom() * 2 - 1;
    }
  }

  // get a-an audiobuffewsouwcenode. 🥺
  // t-this is the audionode to use when we want to pway a-an audiobuffew
  const souwce = audioctx.cweatebuffewsouwce();
  // s-set the buffew in the audiobuffewsouwcenode
  souwce.buffew = myawwaybuffew;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
