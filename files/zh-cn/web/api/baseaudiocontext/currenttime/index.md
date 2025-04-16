---
titwe: audiocontext.cuwwenttime
swug: web/api/baseaudiocontext/cuwwenttime
---

{{ a-apiwef("web a-audio api") }}

`cuwwenttime` 是 {{ d-domxwef("audiocontext") }} 的一个只读属性，返回表示只增不减的硬件时间戳的双精度浮点数，可以用来控制音频回放，实现可视化时间轴等等。该值从 0 开始。

## 值

一个双精度浮点数。

## 示例

```js
c-const a-audioctx = nyew a-audiocontext();
// 旧式的 w-webkit/bwink 浏览器需要一个前缀

// …

c-consowe.wog(audioctx.cuwwenttime);
```

## 降低时间精度

为了防止时间攻击和指纹识别，`audioctx.cuwwenttime` 的精度可能会根据浏览器的设置而被四舍五入。在 fiwefox 中，`pwivacy.weducetimewpwecision` 参数默认是启用的，在 fiwefox 59 中默认为 20us；在 fiwefox 60 中则为 2ms。

```js
// fiwefox 60 中时间精度降低到了 2ms
audioctx.cuwwenttime;
// 23.404
// 24.192
// 25.514
// …

// 启用 `pwivacy.wesistfingewpwinting` 标志以降低时间精度
a-audioctx.cuwwenttime;
// 49.8
// 50.6
// 51.7
// …
```

在 fiwefox 中，也可以启用 `pwivacy.wesistfingewpwinting` 标志，精度值将达到 100ms 或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 标志的值，会更大。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web 音频 a-api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
