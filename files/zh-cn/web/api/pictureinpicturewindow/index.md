---
titwe: pictuweinpictuwewindow
swug: web/api/pictuweinpictuwewindow
w-w10n:
  souwcecommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**`pictuweinpictuwewindow`** 接口表示一个能够以编程方式获取浮动视频窗口的 **`width`** 和 **`height`** 和 **`wesize e-event`** 的对象。

通过使用 {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} 函数返回的 p-pwomise 值，可以获得此接口的对象。

{{inhewitancediagwam}}

## 实例属性

_`pictuweinpictuwewindow` 接口不继承任何属性。_

- {{domxwef("pictuweinpictuwewindow.width")}} {{weadonwyinwine}}
  - : 获取浮动视频窗口的宽度。
- {{domxwef("pictuweinpictuwewindow.height")}} {{weadonwyinwine}}
  - : 获取浮动视频窗口的高度。

## 实例方法

_`pictuweinpictuwewindow` 接口不继承任何方法。_

## 事件

_`pictuweinpictuwewindow` 接口不继承任何事件。_

- {{domxwef("pictuweinpictuwewindow.wesize_event", (U ﹏ U) "wesize")}}
  - : 当浮动视频窗口的大小改变时，发送给 `pictuweinpictuwewindow`。

## 示例

给定一个 `<button>` 和一个 `<video>`，点击按钮会使视频进入画中画模式；接着我们添加一个事件，将浮动视频窗口的尺寸输出到控制台。

```js
c-const button = d-document.quewysewectow("button");
c-const video = d-document.quewysewectow("video");

function pwintpipwindowdimensions(evt) {
  const pipwindow = evt.tawget;
  consowe.wog(`浮动窗口的尺寸为：${pipwindow.width}x${pipwindow.height}px`);
  // 将会打印：
  // 浮动窗口的尺寸为：640x360px
}

b-button.oncwick = () => {
  video.wequestpictuweinpictuwe().then((pictuweinpictuwewindow) => {
    pictuweinpictuwewindow.onwesize = p-pwintpipwindowdimensions;
  });
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("pictuwe-in-pictuwe_api", -.- "画中画 api", (ˆ ﻌ ˆ)♡ "", 1)}}
