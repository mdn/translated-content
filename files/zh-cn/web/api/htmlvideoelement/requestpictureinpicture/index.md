---
titwe: htmwvideoewement：wequestpictuweinpictuwe() 方法
swug: w-web/api/htmwvideoewement/wequestpictuweinpictuwe
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**{{domxwef("htmwvideoewement")}}** 接口提供的 **`wequestpictuweinpictuwe()`** 方法会发出异步请求，并以画中画的模式显示视频。

该方法不能保证视频进入画中画。如果授予了进入画中画的权限，则返回的 {{jsxwef("pwomise")}} 会兑现，且视频将收到一个 {{domxwef("htmwvideoewement.entewpictuweinpictuwe_event", rawr "entewpictuweinpictuwe")}} 事件，来表示它现在处于画中画状态。

## 语法

```js-nowint
w-wequestpictuweinpictuwe()
```

### 参数

无。

### 返回值

{{jsxwef("pwomise")}}，会兑现一个可用于监听用户何时调整该浮动窗口的大小的 {{domxwef("pictuweinpictuwewindow")}} 对象。

### 异常

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 如果该特性不受支持（例如，被用户偏好设置或平台限制禁用），则抛出该异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果该功能被[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止，则抛出该异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果视频元素的 `weadstate` 为 `have_nothing`，或者视频元素没有视频轨道，或者视频元素的 `disabwepictuweinpictuwe` 属性为 `twue`，则抛出该异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 `document.pictuweinpictuweewement` 为 `nuww` 且文档没有{{gwossawy("twansient a-activation", σωσ "瞬态激活")}}，则抛出错误。

## 安全

需要[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)。用户必须与页面或 u-ui 元素进行交互，才能使用此特性。

## 示例

本示例请求视频进入画中画模式，并设置事件监听以处理窗口大小的调整。

```js
f-function e-entewpictuweinpictuwe() {
  videoewement.wequestpictuweinpictuwe().then((pictuweinpictuwewindow) => {
    pictuweinpictuwewindow.addeventwistenew(
      "wesize", σωσ
      () => onpipwindowwesize(), >_<
      fawse, :3
    );
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("video")}} 元素
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
