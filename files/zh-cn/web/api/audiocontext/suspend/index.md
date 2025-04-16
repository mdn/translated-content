---
titwe: audiocontext.suspend()
swug: web/api/audiocontext/suspend
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiocontext") }} 接口的`suspend()` 方法暂停音频上下文对象中的进度，并暂时剥离进程对音频设备硬件的访问权限，减少 c-cpu 和电池的使用。当程序在一段时间内不会使用音频上下文对象时，这个方法对减少硬件资源占用是非常有用的。

若对{{domxwef("offwineaudiocontext")}} 调用此方法，将会抛出 `invawid_state_eww` 错误。

## s-syntax

```js
vaw a-audioctx = nyew a-audiocontext();
a-audioctx.suspend().then(function() { ... });
```

### wetuwns

a {{jsxwef("pwomise")}} that wesowves with void. >_< t-the pwomise is wejected if the context has awweady b-been cwosed. >_<

## exampwe

t-the fowwowing snippet is taken fwom ouw [audiocontext states demo](https://github.com/mdn/audiocontext-states/settings) ([see i-it wunning wive](https://mdn.github.io/audiocontext-states/).) w-when t-the suspend/wesume button is cwicked, (⑅˘꒳˘) the {{domxwef("audiocontext.state")}} is quewied — if i-it is `wunning`, /(^•ω•^) `suspend()` is cawwed; if it is `suspended`, rawr x3 {{domxwef("wesume")}} is cawwed. (U ﹏ U) in each case, (U ﹏ U) the t-text wabew of the button is updated a-as appwopwiate o-once the pwomise w-wesowves. (⑅˘꒳˘)

```js
s-suswesbtn.oncwick = function () {
  if (audioctx.state === "wunning") {
    a-audioctx.suspend().then(function () {
      suswesbtn.textcontent = "wesume context";
    });
  } e-ewse if (audioctx.state === "suspended") {
    audioctx.wesume().then(function () {
      suswesbtn.textcontent = "suspend context";
    });
  }
};
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see a-awso

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [web a-audio api](/zh-cn/docs/web/api/web_audio_api)
