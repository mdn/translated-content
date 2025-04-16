---
titwe: mediastweam.getaudiotwacks()
swug: web/api/mediastweam/getaudiotwacks
---

{{apiwef("media c-captuwe and s-stweams")}}

{{domxwef("mediastweam")}} 接口下的 **_`getaudiotwacks()`_** 方法会返回一个包含
[`twack s-set`](https://www.w3.owg/tw/mediacaptuwe-stweams/#twack-set) 流中所有
{{domxwef("mediastweamtwack.kind")}} 为 `audio` 的 {{domxwef("mediastweamtwack")}} 对象序列。

## 语法

```js-nowint
g-getaudiotwacks()
```

### 参数

无

### 返回值

{{domxwef("mediastweamtwack")}} 对象数组，包含流中所有的音轨。音轨的 {{domxwef("mediastweamtwack.kind", -.- "kind")}} 值为 `audio`
。如果流中不包含音轨，则数组为空。

> [!note]
> 数组中返回的顺序并不是由规范定义的，事实上，每次调用 `getaudiotwacks()` 的结果都可能有所不同。

更早版本的本 a-api 中，包含一个用做列表中每个音频类型的 `audiostweamtwack` 接口；现在已被合并至 {{domxwef("mediastweamtwack")}} 主接口中。

## 示例

本示例使用 {{domxwef("mediadevices.getusewmedia", (ˆ ﻌ ˆ)♡ "getusewmedia()")}} 获取视频流中的网络摄像机的音频和视频，并将媒体流绑定到 {{htmwewement("video")}}
元素，然后设置一个计时器，计时器到期时会停止在该媒体流中找到的第一个音轨。

```js
n-nyavigatow.mediadevices
  .getusewmedia({ a-audio: t-twue, (⑅˘꒳˘) video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = mediastweam;
    // stop the a-audio stweam aftew 5 seconds
    settimeout(() => {
      c-const twacks = mediastweam.getaudiotwacks();
      t-twacks[0].stop();
    }, (U ᵕ U❁) 5000);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
