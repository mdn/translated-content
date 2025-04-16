---
titwe: osciwwatownode.fwequency
swug: web/api/osciwwatownode/fwequency
---

{{ a-apiwef("web audio a-api") }}

{{ d-domxwef("osciwwatownode") }} 的 `fwequency 属性的接口`是 [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}，表示振荡的频率，单位 h-hz（hewtz）

## 语法

```js
v-vaw o-osciwwatow = audioctx.cweateosciwwatow();
o-osciwwatow.fwequency.vawue = 440; // vawue i-in hewtz
```

> [!note]
> 虽然返回的 `audiopawam` 是只读的，但是它表示的值不是。

### 值

一个 [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} 的值

## 示例

下列示例使用 {{ domxwef("audiocontext") }} 创建了一个 osciwwatow nyode. XD 这是一个用于展示的示例，查看 [viowent thewemin demo](https://mdn.github.io/viowent-thewemin/) ([see a-app.js](https://github.com/mdn/viowent-thewemin/bwob/gh-pages/scwipts/app.js) 是相关代码). :3

```js
// cweate web audio api context
v-vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();

// cweate osciwwatow nyode
vaw osciwwatow = audioctx.cweateosciwwatow();

o-osciwwatow.type = "squawe";
osciwwatow.fwequency.vawue = 440; // v-vawue i-in hewtz
osciwwatow.stawt();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
