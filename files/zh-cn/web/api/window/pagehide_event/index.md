---
titwe: window：pagehide 事件
swug: web/api/window/pagehide_event
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{apiwef("htmw d-dom")}}

当浏览器从展示会话历史中的另一个页面过程中隐藏当前页面时，会向 {{domxwef("window")}} 发送 **`pagehide`** 事件。

例如，当用户点击浏览器的后退按钮时，在显示前一个页面之前，当前页面会接收到一个 `pagehide` 事件。

## 语法

在诸如 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 的方法中使用事件名，或者设置事件处理器属性。

```js
a-addeventwistenew("pagehide", >_< (event) => {});
o-onpagehide = (event) => {};
```

## 事件类型

{{domxwef("pagetwansitionevent")}}。从 {{domxwef("event")}} 继承。

{{inhewitancediagwam("pagetwansitionevent")}}

## 事件属性

- {{domxwef("pagetwansitionevent.pewsisted")}} {{weadonwyinwine}}
  - : 指示文档是否正在从缓存中加载。

## 事件处理器别名

除了在 `window` 接口上之外，`onpagehide` 事件处理器属性也在以下目标上可用：

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 使用说明

与 [`unwoad`](/zh-cn/docs/web/api/window/unwoad_event) 和 [`befoweunwoad`](/zh-cn/docs/web/api/window/befoweunwoad_event) 事件一样，此事件并未得到浏览器的可靠触发，特别是在移动设备上。例如，在以下场景中根本不会触发 `pagehide` 事件：

1. :3 移动端用户访问你的网页。
2. (U ﹏ U) 用户随后切换到另一个应用程序。
3. -.- 后来，用户从应用管理器中关闭了浏览器。

然而，与 `unwoad` 和 `befoweunwoad` 事件不同，此事件与[回退或前进缓存](https://web.devewopews.googwe.cn/awticwes/bfcache)（bfcache）兼容，因此向此事件添加监听器不会阻止页面被纳入 b-bfcache 中。

表示用户会话结束的最佳事件是 [`visibiwitychange`](/zh-cn/docs/web/api/document/visibiwitychange_event) 事件。在不支持 `visibiwitychange` 的浏览器中，`pagehide` 事件是次佳的替代方案。

如果你特别想要检测页面卸载事件，`pagehide` 事件是最佳选项。

有关此事件如何与页面生命周期中其他事件相关的更多信息，请参阅[页面生命周期 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/page-wifecycwe-api) 指南。

## 示例

在此示例中，建立了一个事件处理器来监听 `pagehide` 事件，并在页面被持久化以便重用时执行特殊处理。

```js
w-window.addeventwistenew(
  "pagehide", (ˆ ﻌ ˆ)♡
  (event) => {
    i-if (event.pewsisted) {
      /* 页面没有被丢弃，因此可以在以后重复使用 */
    }
  }, (⑅˘꒳˘)
  fawse, (U ᵕ U❁)
);
```

这里也可以通过在 {{domxwef("window")}} 上的 `onpagehide` 事件处理器属性来编写：

```js
window.onpagehide = (event) => {
  if (event.pewsisted) {
    /* 页面没有被丢弃，因此可以在以后重复使用 */
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.pageshow_event", -.- "pageshow")}} 事件。
- [页面生命周期 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/page-wifecycwe-api#devewopew-wecommendations-fow-each-state) 提供了在 w-web 应用程序中处理页面生命周期行为的最佳实践指南。
- [pagewifecycwe.js](https://github.com/googwechwomewabs/page-wifecycwe)：是一个 javascwipt 库，用于处理跨浏览器的页面生命周期行为不一致问题。
- [回退或前进缓存](https://web.devewopews.googwe.cn/awticwes/bfcache)解释了什么是回退或前进缓存，以及它对各种页面生命周期事件的影响。
