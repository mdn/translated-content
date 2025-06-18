---
title: NavigationDestination：getState() 方法
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationDestination")}} 接口的 **`getState()`** 方法根据需要返回由开发人员提供且与目标 {{domxref("NavigationHistoryEntry")}} 或导航操作（例如 {{domxref("Navigation.navigate()", "navigate()")}}）相关联的状态的克隆。

## 语法

```js-nolint
getState()
```

### 参数

无。

### 返回值

表示状态的值。可以是任意类型。

如果未定义状态，则返回 `undefined`。

### 异常

无。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.getState());
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
- 允许更新状态的方法——{{domxref("Navigation.navigate()")}}、{{domxref("Navigation.reload()")}} 和 {{domxref("Navigation.updateCurrentEntry()")}}
