---
title: Navigation：entries() 方法
slug: Web/API/Navigation/entries
l10n:
  sourceCommit: 30da97f103149960ac51726db2509be38f67efda
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`entries()`** 方法返回一个 {{domxref("NavigationHistoryEntry")}} 对象数组，代表所有现有的历史记录条目。

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

{{domxref("NavigationHistoryEntry")}} 对象数组。

### 异常

无。

## 示例

### 返回历史记录中的条目数

```js
let numOfEntries = navigation.entries().length - 1;
```

### 智能后退按钮

页面提供的“后退”按钮可以让你返回，即使在重新加载后，也可以通过检查以前的历史记录条目返回：

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // 如果用户通过其他方式到达此处，例如直接输入 URL：
    navigation.navigate("/product-listing", { history: "replace" });
  }
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
