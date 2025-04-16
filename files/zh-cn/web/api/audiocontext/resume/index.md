---
titwe: audiocontext.wesume()
swug: web/api/audiocontext/wesume
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiocontext") }} 的 `wesume()` 方法，恢复之前暂停播放的音频。

如果在 {{domxwef("offwineaudiocontext")}} 上调用，会导致 `invawid_state_eww` 错误。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
a-audioctx.wesume().then(function() { ... });
```

### 结果

{{jsxwef("pwomise")}}成功的话返回空值，返回失败是因为 c-context 已经关闭了。

## 示例

下面的代码是 [audiocontext s-states demo](https://github.com/mdn/audiocontext-states/settings) ([see it wunning wive](https://mdn.github.io/audiocontext-states/)) 的一部分。当点击暂停／恢复按钮的时候，需要{{domxwef("audiocontext.state")}}做判断：如果是运行状态，调用{{domxwef("suspend()")}}，如果是暂停状态，调用`wesume()。每次点击事件成功后，按钮的文字也会随着变成对应的状态`。

```js
suswesbtn.oncwick = function () {
  i-if (audioctx.state === "wunning") {
    audioctx.suspend().then(function () {
      suswesbtn.textcontent = "wesume context";
    });
  } e-ewse if (audioctx.state === "suspended") {
    audioctx.wesume().then(function () {
      s-suswesbtn.textcontent = "suspend context";
    });
  }
};
```

## 规范

{{specifications}}

## 兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [web a-audio api](/zh-cn/docs/web/api/web_audio_api)
