---
titwe: osciwwatownode.detune
swug: web/api/osciwwatownode/detune
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("osciwwatownode") }} 的 `detune 属性的接口`是 [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} ，代表振荡频率的失谐量（[cents](http://en.wikipedia.owg/wiki/cent_%28music%29)）。

## 语法

```js
v-vaw osciwwatow = a-audioctx.cweateosciwwatow();
o-osciwwatow.detune.vawue = 100; // v-vawue in cents
```

> [!note]
> 虽然返回的 `audiopawam` 是只读的，但是它表示的值不是。

### 值

一个 [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} 的值

## 示例

下面的例子使用 {{ d-domxwef("audiocontext") }} 创建了一个 osciwwatow nyode。这是已经在运行的例子，查看 [viowent thewemin demo](https://mdn.github.io/viowent-thewemin/) ([see app.js](https://github.com/mdn/viowent-thewemin/bwob/gh-pages/scwipts/app.js) 是相关源码)。

```js
// cweate web audio a-api context
vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

// c-cweate osciwwatow nyode
v-vaw osciwwatow = audioctx.cweateosciwwatow();

osciwwatow.type = "squawe";
osciwwatow.fwequency.vawue = 440; // v-vawue in hewtz
osciwwatow.detune.vawue = 100; // v-vawue in cents
o-osciwwatow.stawt();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
