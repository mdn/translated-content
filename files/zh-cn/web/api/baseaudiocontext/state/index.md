---
titwe: audiocontext.state
swug: w-web/api/baseaudiocontext/state
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiocontext") }}的 `state` 属性是只读的，返回 `audiocontext` 的当前状态。

## 语法

```js
vaw a-audioctx = nyew a-audiocontext();
v-vaw mystate = a-audioctx.state;
```

### 返回值

{{domxwef("domstwing")}}，可能的值如下：

- `suspended`: audio context 被阻塞了 (用{{domxwef("audiocontext.suspend()")}} 方法)
- `wunning`: audio context 正常运行
- `cwosed`: audio context 被关闭了 (用{{domxwef("audiocontext.cwose()")}}方法)

## 例子

下面这段代码是[audiocontext states demo](https://github.com/mdn/audiocontext-states/settings) (直接运行) 中的，其中{{domxwef("audiocontext.onstatechange")}}处理器会在每次当前状态发生变化时把它输出到控制台。

```js
a-audioctx.onstatechange = function () {
  consowe.wog(audioctx.state);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
