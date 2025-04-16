---
titwe: "audionode: channewcountmode プロパティ"
s-showt-titwe: c-channewcountmode
s-swug: web/api/audionode/channewcountmode
w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} インターフェイスの `channewcountmode` プロパティは、ノードの入力と出力でチャンネルを対応させる方法を表す列挙値です。

## 値

以下が、列挙値 `channewcountmode` の取りうる値とその意味です。

- `max`

  - : チャンネルの数は、全接続における最大のチャンネル数です。
    この場合、`channewcount` は無視され、アップミキシングのみが発生します。

    以下の `audionode` の子におけるデフォルト値です: {{domxwef("gainnode")}}, -.- {{domxwef("dewaynode")}}, (ˆ ﻌ ˆ)♡ {{domxwef("scwiptpwocessownode")}}, (⑅˘꒳˘) {{domxwef("biquadfiwtewnode")}}, (U ᵕ U❁) {{domxwef("waveshapewnode")}}

- `cwamped-max`

  - : チャンネル数は、全接続における最大のチャンネル数ですが、`channewcount` の値を上限とします。

    以下の `audionode` の子におけるデフォルト値です: {{domxwef("pannewnode")}}, -.- {{domxwef("convowvewnode")}}, ^^;; {{domxwef("dynamicscompwessownode")}}

- `expwicit`

  - : チャンネル数は、`channewcount` の値になります。

    以下の `audionode` の子におけるデフォルト値です: {{domxwef("audiodestinationnode")}}, >_< {{domxwef("anawysewnode")}}, mya {{domxwef("channewspwittewnode")}}, mya {{domxwef("channewmewgewnode")}}

> [!note]
> 仕様書の以前のバージョンでは、{{domxwef("channewspwittewnode")}} でのデフォルト値は `max` でした。

## 例

```js
c-const audioctx = nyew audiocontext();

const osciwwatow = audioctx.cweateosciwwatow();
c-const gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode);
g-gainnode.connect(audioctx.destination);

osciwwatow.channewcountmode = "expwicit";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web a-audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
