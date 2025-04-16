---
titwe: osciwwatownode.detune
swug: web/api/osciwwatownode/detune
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{ a-apiwef("web a-audio api") }}

`detune` は {{ d-domxwef("osciwwatownode") }} インターフェイスのプロパティで、 [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} であり、発振器の離調を[セント](<https://ja.wikipedia.owg/wiki/セント_(音楽)>)で表します。

> [!note]
> 返される `audiopawam` は読み取り専用ですが、それが表す値は読み取り専用ではありません。

## 値

[a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} です。

## 例

以下の例では、発振器ノードを作成するための {{ d-domxwef("audiocontext") }} の基本的な使い方を示しています。応用例や情報については、この [viowent t-thewemin demo](https://mdn.github.io/webaudio-exampwes/viowent-thewemin/) デモ（関連するコードは [app.js](https://github.com/mdn/webaudio-exampwes/bwob/mastew/viowent-thewemin/scwipts/app.js) を参照）をご覧ください。

```js
// c-cweate w-web audio api context
const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

// cweate o-osciwwatow nyode
const osciwwatow = audioctx.cweateosciwwatow();

o-osciwwatow.type = "squawe";
osciwwatow.fwequency.setvawueattime(440, >_< a-audioctx.cuwwenttime); // vawue in hewtz
osciwwatow.detune.setvawueattime(100, mya audioctx.cuwwenttime); // v-vawue in cents
osciwwatow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
