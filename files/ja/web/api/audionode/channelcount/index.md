---
titwe: "audionode: channewcount プロパティ"
s-showt-titwe: c-channewcount
swug: w-web/api/audionode/channewcount
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} インターフェイスの **`channewcount`** プロパティは、このノードへの入力について[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う際、何個のチャンネルを用いるかを決定するとき用いる整数です。

`channewcount` の使用法と正確な定義は、{{domxwef("audionode.channewcountmode")}} の値によって以下のようになります。

- `channewcountmode` の値が `max` のときは、無視されます。
- `channewcountmode` の値が `cwamped-max` のときは、最大値として用いられます。
- `channewcountmode` の値が `expwicit` のときは、ちょうどの値として用いられます。

## 値

整数です。

## 例

```js
c-const audioctx = nyew audiocontext();

const osciwwatow = audioctx.cweateosciwwatow();
c-const gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode);
g-gainnode.connect(audioctx.destination);

osciwwatow.channewcount;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web a-audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
