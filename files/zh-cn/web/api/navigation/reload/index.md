---
title: Navigation：reload() 方法
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: eb7531ab58621ef93a76520b91bc3550357a64df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`reload()`** 方法重新加载当前 URL，同时更新历史记录条目列表中对应的条目的状态。

## 语法

```js-nolint
reload()
reload(options)
```

### 参数

- `options` {{optional_inline}}
  - : 包含以下属性的选项对象：
    - `state` {{optional_inline}}
      - : 开发者定义的信息，将在导航完成后存储在关联的 {{domxref("NavigationHistoryEntry")}} 中，可通过 {{domxref("NavigationHistoryEntry.getState", "getState()")}} 检索。这可以是任何数据类型。例如，你可能希望存储页面访问次数以用于分析目的，或者存储 UI 状态详细信息，以便视图可以与用户上次离开时​​完全相同地显示。存储在 `state` 中的任何数据都必须是[可结构化克隆的](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。
    - `info` {{optional_inline}}
      - : 开发者定义的信息，将传递给 {{domxref("Navigation/navigate_event", "navigate")}} 事件，可在 {{domxref("NavigateEvent.info")}} 中获取。这可以是任何数据类型。例如，你可能希望根据导航方式（向左滑动、向右滑动或返回主页）以不同的动画显示新导航的内容。可以传入一个字符串来指示要使用哪种动画，该字符串可作为 `info` 选项传入。

### 返回值

包含以下属性的对象：

- `committed`
  - : 当可见 URL 发生改变并且新的 {{domxref("NavigationHistoryEntry")}} 被创建时被兑现的 {{jsxref("Promise")}}。
- `finished`
  - : 当 `intercept()` 处理器返回的所有 promise 都被兑现时被兑现的 {{jsxref("Promise")}}。这相当于当 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 事件触发时，兑现 {{domxref("NavigationTransition.finished")}} promise。

如果导航由于某种原因失败，则这两个 promise 中的某一个会被拒绝。

### 异常

- `DataCloneError` {{domxref("DOMException")}}
  - : 如果 `state` 参数中包含不可结构化克隆的值，则抛出此异常。

## 示例

### 使用 info 和 state

```js
async function handleReload() {
  await navigation.reload({
    info: { animation: "fade-in" },
    state: { infoPaneOpen: true },
  }).finished;

  // 更新应用程序状态
  // ...
}
```

重新加载页面并添加新的状态项：

```js
async function handleReload() {
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  }).finished;

  // 更新应用程序状态
  // ...
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
