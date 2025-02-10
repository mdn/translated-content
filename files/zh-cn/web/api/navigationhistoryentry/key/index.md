---
title: NavigationHistoryEntry：key 属性
slug: Web/API/NavigationHistoryEntry/key
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`key`** 只读属性返回历史条目的 `key`，如果当前文档未完全激活，则返回空字符串。这是一个唯一的 UA 生成值，表示历史条目在条目列表中的位置。它用于通过 {{domxref("Navigation.traverseTo()")}} 导航该特定位置。`key` 将被替换列表中条目的其他条目重用（即，如果 {{domxref("NavigateEvent.navigationType")}} 为 `replace`）。

这与历史条目的 {{domxref("NavigationHistoryEntry.id", "id")}} 不同。`id` 是一个唯一的 UA 生成值，它始终表示特定的历史条目，而不是其在条目列表中的位置。这对于将其与外部资源（如存储缓存）关联非常有用。

## 值

表示 {{domxref("NavigationHistoryEntry")}} 的 `key` 的字符串。

## 示例

### 基本用法

```js
const current = navigation.currentEntry;
console.log(current.key);
```

### 设置主页按钮

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
