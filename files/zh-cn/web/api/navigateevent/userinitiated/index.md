---
title: NavigateEvent：userInitiated 属性
slug: Web/API/NavigateEvent/userInitiated
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`userInitiated`** 只读属性在导航是由用户发起的（例如，通过单击链接、提交表单或按浏览器的“后退”/“前进”按钮）时返回 `true`，否则返回 `false`。

> [!NOTE]
>
> [附录：导航类型](https://github.com/WICG/navigation-api#appendix-types-of-navigations)中的表格显示了哪些导航类型是由用户发起的。

## 值

布尔值——如果导航是由用户发起的，则为 `true`，否则为 `false`。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.userInitiated);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
