---
title: 画中画 API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

**画中画 API**（Picture-in-Picture API）允许网站总是在其他窗口之上创建一个浮动的视频，以便用户在其他内容站点或者设备上的应用程序交互时可以继续播放媒体。

> **备注：** [文档画中画 API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API) 扩展了画中画 API，使其能够将*任意* HTML 内容（而不仅仅是视频）呈现在始终置顶的窗口中。

## 接口

- {{DOMxRef("PictureInPictureWindow")}}
  - : 表示浮动的视频窗口；包含 {{domxref("PictureInPictureWindow/width", "width")}} 和 {{domxref("PictureInPictureWindow/height", "height")}} 属性，以及一个 {{domxref("PictureInPictureWindow/onresize", "onresize")}} 事件处理器属性。
- {{DOMxRef("PictureInPictureEvent")}}
  - : 表示画中画相关事件，包括 {{domxref("HTMLVideoElement/enterpictureinpicture_event", "enterpictureinpicture")}}、{{domxref("HTMLVideoElement/leavepictureinpicture_event", "leavepictureinpicture")}} 和 {{domxref("PictureInPictureWindow/resize_event", "resize")}}。

## 实例方法

画中画 API 添加了 {{DOMxRef("HTMLVideoElement")}} 和 {{DOMxRef("Document")}} 接口的方法，以便允许切换浮动视频窗口。

### HTMLVideoElement 接口上的实例方法

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : 请求用户代理将视频切换为画中画模式。

### Document 接口上的实例方法

- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : 请求用户代理将元素由画中画模式切换回到它的原始盒子。

## 实例属性

画中画 API 添加了 {{DOMxRef("HTMLVideoElement")}}、{{DOMxRef("Document")}} 和 {{DOMxRef("ShadowRoot")}} 接口的属性，这些属性用于决定浮动的视频窗口是否是受支持和可用的、当前画中画模式是否处于激活状态并且哪个视频是浮动的。

### HTMLVideoElement 接口上的实例属性

- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : `disablePictureInPicture` 属性将指示用户代理是否应该向用户建议画中画的功能。

### Document 接口上的实例属性

- {{DOMxRef("Document.pictureInPictureEnabled")}}
  - : `pictureInPictureEnabled` 属性告诉你是否可以使用画中画模式。如果画中画模式因任何原因不可用（例如 [`"picture-in-picture"` 特性](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture)不被允许，或者不支持画中画模式），则是 `false` 。

### Document 或 ShadowRoot 接口上的实例属性

- {{DOMxRef("Document.pictureInPictureElement")}} / {{DOMxRef("ShadowRoot.pictureInPictureElement")}}
  - : `pictureInPictureElement` 属性告诉你当前在浮动窗口（或影子 DOM）显示哪个 {{DOMxRef("Element")}}。如果为 `null`，则此文档（或影子 DOM）没有节点处于画中画模式。

## 事件

_画中画 API 定义了三个事件，它们可以用来检测画中画模式何时被切换或者浮动窗口大小何时被调整。_

- {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : 当 {{DOMxRef("HTMLVideoElement")}} 进入画中画模式时触发该事件。
- {{domxref("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : 当 {{DOMxRef("HTMLVideoElement")}} 离开画中画模式时触发该事件。
- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : 当 {{DOMxRef("PictureInPictureWindow")}} 大小改变时触发该事件。

## 添加控件

如果通过[媒体会话 API](/zh-CN/docs/Web/API/Media_Session_API) 设置了媒体操作处理器，则浏览器会在画中画叠加层中自动添加相应操作的控件。例如，如果已设置 `"nexttrack"` 动作，则画中画视图中可能会显示跳过按钮。但该特性不支持添加自定义 HTML 按钮或控件。

## 控制样式

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) [`:picture-in-picture`](/zh-CN/docs/Web/CSS/:picture-in-picture) 匹配当前进入画中画模式的视频元素，并允许你配置样式表，以便视频在画中画或者传统播放模式来回切换时自动调整内容的大小、样式或布局。

## 控制访问权限

可以使用[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)控制画中画的可用性。全屏模式的特性由字符串 `"picture-in-picture"` 标识，默认的允许列表的值是 `*`，意味着在顶级文档上下文以及从与最顶层文档相同的来源加载的嵌套浏览上下文中允许画中画模式。

## 示例

在此示例中，视频被展示在 web 页面。点击下面的按钮可以让用户切换浮动视频窗口。

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### 切换画中画模式

当使用者点击“Toggle Picture-in-Picture”按钮时，这段代码将会由一个点击处理器调用：

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture();
    }
  }
}
```

该块首先会查询 {{DOMxRef("Document", "document")}} `pictureInPictureElement` 属性的值。

如果值不是 `null`，则它是当前处于画中画模式并在浮动窗口的元素。我们调用 {{DOMxRef("Document.exitPictureInPicture", "document.exitPictureInPicture()")}} 将视频带进它初始的盒子。

如果值是 `null`，浮动窗口没有视频。所以我们可以请求视频进入画中画模式。我们可以在 {{HTMLElement("video")}} 元素上调用 {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} 来实现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
- [文档画中画 API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API)
