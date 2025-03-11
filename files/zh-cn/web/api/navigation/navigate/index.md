---
title: Navigation：navigate() 方法
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`navigate()`** 方法导航到特定的 URL，更新历史记录条目列表中提供的任何状态。

## 语法

```js-nolint
navigate(url)
navigate(url, options)
```

### 参数

- `url`
  - : 要导航到的目标的 URL。请注意，当在另一个窗口的 `navigation` 对象上调用 `navigate()` 时，URL 将相对于目标窗口的 URL 进行解析，而不是调用窗口的 URL。这与 [History API](/zh-CN/docs/Web/API/History_API) 的行为相符，但与 [Location API](/zh-CN/docs/Web/API/Location) 的行为不符。
- `options` {{optional_inline}}
  - : 包含以下属性的选项对象：
    - `state` {{optional_inline}}
      - : 开发者定义的信息，将在导航完成后存储在关联的 {{domxref("NavigationHistoryEntry")}} 中，可通过 {{domxref("NavigationHistoryEntry.getState", "getState()")}} 检索。这可以是任何数据类型。例如，你可能希望存储页面访问次数以用于分析目的，或者存储 UI 状态详细信息，以便视图可以与用户上次离开时​​完全相同地显示。存储在 `state` 中的任何数据都必须是[可结构化克隆的](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。
    - `info` {{optional_inline}}
      - : 开发者定义的信息，将传递给 {{domxref("Navigation/navigate_event", "navigate")}} 事件，可在 {{domxref("NavigateEvent.info")}} 中获取。这可以是任何数据类型。例如，你可能希望根据导航方式（向左滑动、向右滑动或返回主页）以不同的动画显示新导航的内容。可以传入一个字符串来指示要使用哪种动画，该字符串可作为 `info` 选项传入。
    - `history` {{optional_inline}}
      - : 设置此导航的历史记录行为的枚举值。可用的值包括：
        - `auto`：默认值；通常会执行 `push` 导航，但在特殊情况下会执行 `replace` 导航（请参阅下面的 `NotSupportedError` 描述）。
        - `push`：将会把新的 {{domxref("NavigationHistoryEntry")}} 推送到历史记录条目列表中，或者在特殊情况下失败（参见下面的 `NotSupportedError` 描述）。
        - `replace`：将替换当前的 {{domxref("NavigationHistoryEntry")}}。

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
- `SyntaxError` {{domxref("DOMException")}}
  - : 如果 `url` 参数不是合法的 URL，则抛出此异常。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果 `history` 选项设置为 `push`，并且以下任何特殊情况成立，则抛出此异常：
    - 浏览器当前正在显示初始的 `about:blank` 文档。
    - `url` 的协议是 `javascript`。

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

### 使用 info 和 state

```js
async function navigateHandler() {
  await navigation.navigate(url, {
    info: { animation: "swipe-right" },
    state: { infoPaneOpen: true },
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
