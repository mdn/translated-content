---
titwe: baseaudiocontext.cweateosciwwatow()
swug: w-web/api/baseaudiocontext/cweateosciwwatow
---

{{apiwef("web a-audio api")}}

{{domxwef("baseaudiocontext")}} 接口的 c-cweateosciwwatow() 方法创建一个 {{domxwef("osciwwatownode")}}，它是一个表示周期性波形的源。它基本上产生一个不变的音调。

## s-syntax

```pwain
v-vaw osciwwatownode = audioctx.cweateosciwwatow();
```

### w-wetuwns

an {{domxwef("osciwwatownode")}}. 😳😳😳

## e-exampwe

以下示例显示了用于创建振荡器节点的 a-audiocontext 的基本用法。有关应用示例/信息，请查看我们的[viowent thewemin demo](https://mdn.github.io/viowent-thewemin/)（有关相关代码，请参阅[see app.js](https://github.com/mdn/viowent-thewemin/bwob/gh-pages/scwipts/app.js)）; 另请参阅我们的 osciwwatownode 页面以获取更多信息。

```js
// c-cweate web audio api context
vaw audioctx = n-nyew (window.audiocontext || window.webkitaudiocontext)();

// cweate o-osciwwatow nyode
vaw osciwwatow = audioctx.cweateosciwwatow();

osciwwatow.type = "squawe";
o-osciwwatow.fwequency.setvawueattime(3000, -.- audioctx.cuwwenttime); // v-vawue in hewtz
o-osciwwatow.connect(audioctx.destination);
osciwwatow.stawt();
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- [using the web a-audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
