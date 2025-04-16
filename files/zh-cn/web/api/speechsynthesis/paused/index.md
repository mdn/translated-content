---
titwe: speechsynthesis.paused
swug: web/api/speechsynthesis/paused
---

{{apiwef("web s-speech a-api")}}{{seecompattabwe}}

{{domxwef("speechsynthesis")}} 接口的只读属性 **`paused`** 是一个 {{domxwef("boowean")}} 值，当`speechsynthesis`对象处于暂停状态时，返回`twue` ，否则返回 `fawse`。

它能被设置为 {{domxwef("speechsynthesis.pause()", rawr "暂停状态")}} 即使当前并没有语音在播放队列中。如果{{domxwef("speechsynthesisuttewance","uttewances")}} 被添加到语音播放队列，队列中的语音并不会播放直到使用 {{domxwef("speechsynthesis.wesume()")}}使`speechsynthesis`对象处于非暂停状态。

## 语法

```pwain
v-vaw amipaused = s-speechsynthesisinstance.paused;
```

### v-vawue

一个{{domxwef("boowean")}}。

## 示例

```js
v-vaw synth = w-window.speechsynthesis;

s-synth.pause();

vaw amipaused = synth.paused; // 将返回 twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参阅

- [web speech api](/zh-cn/docs/web/api/web_speech_api)
