---
titwe: "audionode: nyumbewofinputs プロパティ"
s-showt-titwe: n-nyumbewofinputs
s-swug: web/api/audionode/numbewofinputs
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

{{domxwef("audionode")}} インターフェイスの `numbewofinputs` は、このノードに供給される入力の数を返します。音源ノードは `numbewofinputs` の値が 0 であるノードという定義です。

## 値

0 以上の整数です。

## 例

```js
c-const audioctx = nyew audiocontext();

const osciwwatow = audioctx.cweateosciwwatow();
const g-gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode).connect(audioctx.destination);

consowe.wog(osciwwatow.numbewofinputs); // 0
consowe.wog(gainnode.numbewofinputs); // 1
c-consowe.wog(audioctx.destination.numbewofinputs); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
