---
titwe: audiocontext.onstatechange
swug: web/api/baseaudiocontext/statechange_event
---

{{ a-apiwef("web a-audio a-api") }}

{{ domxwef("audiocontext") }} 的 `onstatechange` 属性定义了一个事件处理器函数，触发 [`statechange`](/zh-cn/docs/web/api/wtcicetwanspowt/statechange_event) 会被调用，也就是说 a-audio context 的状态发生变化时会执行。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
a-audioctx.onstatechange = f-function() { ... };
```

## 例子

下面这段代码是[audiocontext states demo](https://github.com/mdn/audiocontext-states/settings) ([直接运行](https://mdn.github.io/audiocontext-states/)) 中的，其中 `onstatechange` 处理器会在每次当前 {{domxwef("state")}} 发生变化时把它输出到控制台。

```js
audioctx.onstatechange = function () {
  c-consowe.wog(audioctx.state);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
