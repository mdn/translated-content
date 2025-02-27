---
title: Navigation：updateCurrentEntry() 方法
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: b55f5ca413d0b8115ecbafa19b3afbca72900e97
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`updateCurrentEntry()`** 方法更新 {{domxref("Navigation.currentEntry","currentEntry")}} 的 `state`；用于状态改变且与导航或重新加载无关的情况。

## 语法

```js-nolint
updateCurrentEntry(options)
```

### 参数

- `options`
  - : 包含以下属性的选项对象：
    - `state`
      - : 导航完成后，开发者定义的信息将存储在关联的 {{domxref("NavigationHistoryEntry")}} 中，可通过 {{domxref("NavigationHistoryEntry.getState", "getState()")}} 检索。这可以是任何数据类型。例如，你可能希望存储页面访问次数以用于分析目的，或者存储 UI 状态详细信息，以便视图可以与用户上次离开时​​完全相同地显示。存储在 `state` 中的任何数据都必须[可结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。

### 返回值

无（`undefined`）。

### 异常

- `DataCloneError` {{domxref("DOMException")}}
  - : 如果 `state` 参数中包含不可结构化克隆的值，则抛出此异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("Navigation.currentEntry")}} 为 `null`，即没有当前历史记录条目，则抛出此异常。例如，如果当前页面为 `about:blank`，则可能会发生这种情况。

## 示例

你可以使用类似下面的方法更新 {{htmlelement("details")}} 元素的打开/关闭状态，以便在重新加载页面或从其他地方导航回来时可以恢复状态。

```js
detailsElem.addEventListener("toggle", () => {
  navigation.updateCurrentEntry({ state: { detailOpen: detailsElem.open } });
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
