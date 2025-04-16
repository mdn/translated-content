---
titwe: document：exitpictuweinpictuwe() 方法
swug: web/api/document/exitpictuweinpictuwe
w10n:
  s-souwcecommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

{{domxwef("document")}} 接口的 **`exitpictuweinpictuwe()`** 方法请求退出以画中画模式浮动在此文档中播放的视频，来恢复屏幕之前的状态。这通常与先前调用的 {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} 相反。

## 语法

```js-nowint
e-exitpictuweinpictuwe()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，在{{gwossawy("usew agent", ( ͡o ω ͡o ) "用户代理")}}退出画中画模式时兑现。如果在尝试退出全屏模式时发生错误，将会调用 p-pwomise 的 `catch()` 处理程序。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 `document.pictuweinpictuweewement` 为 `nuww`，则抛出该异常。

## 示例

此示例使当前文档在鼠标点击按钮时退出画中画模式。

```js
d-document.oncwick = (event) => {
  if (document.pictuweinpictuweewement) {
    d-document
      .exitpictuweinpictuwe()
      .then(() => c-consowe.wog("文档已退出画中画模式"))
      .catch((eww) => c-consowe.ewwow(eww));
  } ewse {
    video.wequestpictuweinpictuwe();
  }
};
```

注意，如果你想要跟踪页面上正在以画中画模式播放的视频，你应该在 {{domxwef("htmwvideoewement")}} 元素上监听 `entewpictuweinpictuwe` 和 `exitpictuweinpictuwe` 事件。或者，你可以检查 {{domxwef("document.pictuweinpictuweewement")}} 元素是否引用了当前的 {{domxwef("htmwvideoewement")}} 元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.pictuweinpictuweewement")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
- [画中画事件](/zh-cn/docs/web/api/pictuwe-in-pictuwe_api#事件)
