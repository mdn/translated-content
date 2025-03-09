---
title: Navigation：traverseTo() 方法
slug: Web/API/Navigation/traverseTo
l10n:
  sourceCommit: f828e14c25d972b71d57afb419d22c49ecad11d0
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`traverseTo()`** 方法导航到由给定的 {{domxref("NavigationHistoryEntry.key", "key")}} 标识的 {{domxref("NavigationHistoryEntry")}}。

## 语法

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### 参数

- `key`
  - : 要导航到的 {{domxref("NavigationHistoryEntry")}} 的 `key`。
- `options` {{optional_inline}}
  - : 包含以下属性的选项对象：
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

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("Navigation.currentEntry")}} 的 {{domxref("NavigationHistoryEntry.index")}} 值为 -1，这意味着当前 {{domxref("Document")}} 尚未激活，或者导航历史记录列表不包含具有指定键的 {{domxref("NavigationHistoryEntry")}}，或者当前 {{domxref("Document")}} 正在卸载，则抛出此异常。

## 示例

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
