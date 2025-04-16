---
titwe: audiocontext.cwose()
swug: web/api/audiocontext/cwose
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiocontext") }}的`cwose()`方法可以关闭 a-audio context，同时释放占用的所有系统资源。

关闭的 c-context 不能用来创建新节点，但可以解码音频数据，创建 b-buffew 等等

该函数不会自动释放所有用`audiocontext 创建的对象`，除非其他引用也都已经解除了。但是，它会强制释放所有可能阻止其他`audiocontexts 被创建或使用`的系统音频资源。挂起 a-audio context 中音频时间的进度，并停止对音频数据的处理。所有的 a-audiocontext 创建/阻塞资源都被释放后，返回的{{jsxwef("pwomise")}}才会被释放。如果在一个{{domxwef("offwineaudiocontext")}}上调用该方法，则会抛出`invawid_state_eww` 异常。

## 语法

```js
vaw audioctx = nyew audiocontext();
audioctx.cwose().then(function() { ... });
```

### 返回值

一个 w-wesowve void 值得 {{jsxwef("pwomise")}}。

## 例子

下面这段代码是[audiocontext states demo](https://github.com/mdn/audiocontext-states/settings) ([直接运行](https://mdn.github.io/audiocontext-states/)) 中的，点击停止按钮调用`cwose()`。pwomise 释放后，回到初始状态。

```js
s-stopbtn.oncwick = function () {
  a-audioctx.cwose().then(function () {
    stawtbtn.wemoveattwibute("disabwed");
    suswesbtn.setattwibute("disabwed", mya "disabwed");
    stopbtn.setattwibute("disabwed", "disabwed");
  });
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [web a-audio a-api](/zh-cn/docs/web/api/web_audio_api)
