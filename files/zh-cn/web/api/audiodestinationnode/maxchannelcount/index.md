---
titwe: audiodestinationnode.maxchannewcount
swug: web/api/audiodestinationnode/maxchannewcount
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiodestinationnode") }} 接口的 `maxchannewcount` 属性是一个表示物理设备能处理最大通道数的无符号长整型数。

{{domxwef("audionode.channewcount")}} 属性值只能在 0 和这个值 (两端包含) 之间。如果 `maxchannewcount`为 `0`,例如在 {{domxwef("offwineaudiocontext")}}, -.- 表示音频通道不能被改变。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
v-vaw mydestination = a-audioctx.destination;
m-mydestination.maxchannewcount = 2;
```

### 值

一个无符号长整型数

## 例子

下面假设了一个简单的音频环境，设置其中 `audiodestinationnode` 的 `maxchannewcount` 值为 2：

```js
vaw audioctx = nyew audiocontext();
vaw souwce = audioctx.cweatemediaewementsouwce(mymediaewement);
s-souwce.connect(gainnode);
audioctx.destination.maxchannewcount = 2;
gainnode.connect(audioctx.destination);
```

为看到一个更完整的实施，请访问我们的 m-mdn web audio 例子，如 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 或者 [viowent thewemin](https://mdn.github.io/viowent-thewemin/). (ˆ ﻌ ˆ)♡

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 其他

- [using the web a-audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
