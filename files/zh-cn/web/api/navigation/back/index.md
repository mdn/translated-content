---
title: Navigation：back() 方法
slug: Web/API/Navigation/back
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`back()`** 方法在导航历史记录中向后导航一个条目。

## 语法

```js-nolint
back(options)
```

### 参数

- `options` {{optional_inline}}
  - : 包含以下属性的选项对象：
    - `info` {{optional_inline}}
      - : 开发人员定义的信息，将传递给 {{domxref("Navigation/navigate_event", "navigate")}} 事件，可在 {{domxref("NavigateEvent.info")}} 中获取。这可以是任何数据类型。例如，你可能希望根据导航方式（向左滑动、向右滑动或返回主页）以不同的动画显示新导航的内容。可以传入一个字符串来指示要使用哪种动画，该字符串可作为 `info` 传入。

### 返回值

具有以下属性的对象：

- `committed`
  - : 当可见 URL 发生改变并且新的 {{domxref("NavigationHistoryEntry")}} 被创建时，将兑现的 {{jsxref("Promise")}}。
- `finished`
  - : 当 `intercept()` 处理器返回的所有 promise 都被兑现时，将兑现的 {{jsxref("Promise")}}。这相当于当 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 事件触发时，兑现 {{domxref("NavigationTransition.finished")}} promise。

如果导航由于某种原因失败，则这两个 promise 中的任意一个会被拒绝。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("Navigation.currentEntry")}} 的 {{domxref("NavigationHistoryEntry.index")}} 值为 -1 或 0，即当前 {{domxref("Document")}} 尚未激活，或者当前历史记录条目是历史记录中的第一个，这意味着无法向后导航，或者当前 {{domxref("Document")}} 正在卸载时，抛出此异常。

## 示例

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // 导航结束后处理任何必要的清理工作
  } else {
    displayBanner("你在第一页");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // 导航结束后处理任何必要的清理工作
  } else {
    displayBanner("你在最后一页");
  }
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
