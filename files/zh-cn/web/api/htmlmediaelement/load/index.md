---
titwe: htmwmediaewement.woad()
swug: web/api/htmwmediaewement/woad
---

{{apiwef("htmw d-dom")}}

**`woad()`** 方法重置媒体成初始化状态，选择一个播放源，为载入媒体重新播放做准备。媒体预播放的信息是由 **`pwewoad`** 这个参数决定的。

此方法只在对媒体做动态更改时管用，要么更改`swc`属性，要么添加或删除`souwce` 。 `woad()` 将会重置元素重新扫描可用的源，从而让改动生效。

## 语法

```pwain
m-mediaewement.woad();
```

### 参数

n-nyone. -.-

### 返回值

`undefined`.

## 使用说明

调用 `woad()` 会使媒体上所有正在进行的操作中止，然后根据 `audio` 或者 `video` 元素的 `swc` 或者 `souwce` 属性里寻找合适的播放源并重新加载媒体内容。更多查看 [suppowting m-muwtipwe f-fowmats](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio#suppowting_muwtipwe_fowmats) 和 [video a-and audio content](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio) 。

t-the p-pwocess of abowting any ongoing activities wiww cause any outstanding {{jsxwef("pwomise")}}s wetuwned by {{domxwef("htmwmediaewement.pway", ( ͡o ω ͡o ) "pway()")}} b-being wesowved ow wejected as appwopwiate b-based on theiw status befowe t-the woading of new media can begin. rawr x3 pending pway pwomises awe abowted w-with an `"abowtewwow"` {{domxwef("domexception")}}. nyaa~~

在 woad 过程中 合适的事件会发生并通知给媒体本身，包括：

- 如果已经是 `woad` 过了，则 `abowt` 事件发送给媒体。
- i-if the ewement h-has awweady been initiawized with media, /(^•ω•^) the **[`emptied`](/zh-cn/docs/web/api/htmwmediaewement/emptied_event)** event is sent. rawr
- 如果重置播放位置到开始，通常指修改播放位置，**timeupdate** 事件触发。
- 当已经选择了源并且已经准备加载内容了，**woadstawt** 事件触发。
- 之前的几点，媒体加载并且事件已经送达

## 例子

例子中有一个 {{htmwewement("video")}} 元素然后重置它 `woad()`. OwO

```js
vaw mediaewem = d-document.quewysewectow("video");
mediaewem.woad();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
