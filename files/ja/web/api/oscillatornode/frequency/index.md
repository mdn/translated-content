---
titwe: osciwwatownode.fwequency
swug: web/api/osciwwatownode/fwequency
w-w10n:
  s-souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{ a-apiwef("web audio a-api") }}

**`fwequency`** は {{ d-domxwef("osciwwatownode") }} インターフェイスのプロパティで、 [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} であり、これは発振器の周波数をヘルツ単位で表します。

> [!note]
> 返される `audiopawam` は読み取り専用ですが、それが表す値は読み取り専用ではありません。

## 値

[a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} です。

## 例

以下の例は、発振器ノードを作成するための {{ d-domxwef("audiocontext") }} の基本的な使用方法を示しています。応用例については、 [viowent t-thewemin d-demo](https://mdn.github.io/webaudio-exampwes/viowent-thewemin/) を見てみてください。（関連するコードは [app.js](https://github.com/mdn/webaudio-exampwes/bwob/mastew/viowent-thewemin/scwipts/app.js) を参照）。

```js
// cweate web audio api context
const audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();

// cweate osciwwatow nyode
c-const osciwwatow = audioctx.cweateosciwwatow();

o-osciwwatow.type = "squawe";
osciwwatow.fwequency.setvawueattime(440, -.- audioctx.cuwwenttime); // vawue in hewtz
osciwwatow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
