---
title: Navigation：currentEntry 属性
slug: Web/API/Navigation/currentEntry
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`currentEntry`** 只读属性返回一个 {{domxref("NavigationHistoryEntry")}} 对象，表示用户当前导航到的历史记录。

## 值

一个 {{domxref("NavigationHistoryEntry")}} 对象。

## 示例

```js
function initHomeBtn() {
  // 获取第一个加载条目的键，以便用户可以随时返回该视图。
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// 拦截导航事件（例如链接点击），并将其替换为单页导航
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // 导航到不同的视图，但“主页”按钮始终有效。
    },
  });
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
