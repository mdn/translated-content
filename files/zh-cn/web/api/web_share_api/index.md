---
title: Web 共享 API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

**Web 共享 API**（Web Share API）提供了一种将文本、链接、文件和其他内容共享到用户选择的任意*共享目标*的机制。

> [!NOTE]
> 此 API 在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中*不可用*（未通过 {{domxref("WorkerNavigator")}} 暴露）。

> [!NOTE]
> 此 API 不应与 [Web 共享目标 API（Web Share Target API）](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)混淆，后者允许网站将自身指定为共享目标。

## 概念和用法

**Web 共享 API** 允许站点利用底层操作系统的共享机制将文本、链接、文件和其他内容共享到用户选择的共享目标。这些共享目标通常包括系统剪贴板、电子邮件、联系人或消息应用程序以及蓝牙或 Wi-Fi 通道。

此 API 只有两个方法。{{domxref("navigator.canShare()")}} 方法可用于首先验证某些数据是否“可共享”，然后再将其传递给 {{domxref("navigator.share()")}} 发送。

{{domxref("navigator.share()")}} 方法调用底层操作系统的本机共享机制并传递指定的数据。它需要{{Glossary("transient activation", "瞬态激活")}}状态，因此必须由 UI 事件（如按钮单击）触发。此外，该方法必须指定本机实现支持共享的有效数据。

Web 共享 API 由 [web-share](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) 权限策略控制。如果策略受支持但尚未授予，两种方法都会指示数据不可共享。

## 接口

### 其他接口的扩展

- {{domxref("navigator.canShare()")}}
  - : 返回一个布尔值，指示指定的数据是否可共享。
- {{domxref("navigator.share()")}}
  - : 返回一个 {{jsxref("Promise")}}，根据传递的数据是否已成功发送到共享目标兑现结果。必须在单击按钮或其他用户激活时调用此方法（需要{{Glossary("transient activation", "瞬态激活")}}状态）。

## 示例

下面的代码展示了如何使用 {{domxref("navigator.share()")}} 共享链接，通过单击按钮触发。

```js
const shareData = {
  title: "MDN",
  text: "在 MDN 上学习 Web 开发！",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// 分享必须由“用户激活”触发
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN 分享成功";
  } catch (err) {
    resultPara.textContent = `错误：${err}`;
  }
});
```

上面的例子取自我们的 [Web 共享测试](https://mdn.github.io/dom-examples/web-share/)（[查看源码](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)）。你还可以在 {{domxref("navigator.share()")}} 中查看此实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 共享目标 API](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
