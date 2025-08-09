---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation API", "导航 API", "", "nocode")}} 的 **`Navigation`** 接口允许在一个核心位置控制当前 `window` 的所有导航操作，包括以编程方式启动导航、检查导航历史记录条目以及在导航发生时管理导航。

它是通过 {{domxref("Window.navigation")}} 属性访问的。

导航 API 仅公开在当前浏览上下文中创建的与当前页面同源的历史记录条目（例如，不是嵌入的 {{htmlelement("iframe")}} 内的导航或跨源导航），为你的应用提供所有先前历史记录条目的准确列表。与旧版{{domxref("History API", "历史记录 API", "", "nocode")}} 相比，这使得遍历历史记录变得不那么脆弱。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{DOMxRef("EventTarget")}} 继承属性。_

- {{domxref("Navigation.activation", "activation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("NavigationActivation")}} 对象，其中包含有关“激活”此文档的最新跨文档导航的信息。
- {{domxref("Navigation.canGoBack", "canGoBack")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果可以在导航历史记录中向后导航（即 {{domxref("Navigation.currentEntry", "currentEntry")}} 不是历史记录条目列表中的第一个），则返回 `true`，如果不能，则返回 `false`。
- {{domxref("Navigation.canGoForward", "canGoForward")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果可以在导航历史记录中向前导航（即 {{domxref("Navigation.currentEntry", "currentEntry")}} 不是历史记录条目列表中的最后一个），则返回 `true`，如果不能，则返回 `false`。
- {{domxref("Navigation.currentEntry", "currentEntry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("NavigationHistoryEntry")}} 对象，表示用户当前导航到的历史记录。
- {{domxref("Navigation.transition", "transition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("NavigationTransition")}} 对象，表示正在进行的导航的状态，可用于跟踪导航。如果当前没有正在进行的导航，则返回 `null`。

## 实例方法

_从其父接口 {{DOMxRef("EventTarget")}} 继承方法。_

- {{domxref("Navigation.back", "back()")}} {{Experimental_Inline}}
  - : 在导航历史记录中向后导航一个条目。
- {{domxref("Navigation.entries", "entries()")}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("NavigationHistoryEntry")}} 对象数组，代表所有现有的历史记录条目。
- {{domxref("Navigation.forward", "forward()")}} {{Experimental_Inline}}
  - : 在导航历史记录中向前导航一个条目。
- {{domxref("Navigation.navigate", "navigate()")}} {{Experimental_Inline}}
  - : 导航到特定的 URL，更新历史记录条目列表中提供的任何状态。
- {{domxref("Navigation.reload", "reload()")}} {{Experimental_Inline}}
  - : 重新加载当前 URL，更新历史记录条目列表中提供的任何状态。
- {{domxref("Navigation.traverseTo", "traverseTo()")}} {{Experimental_Inline}}
  - : 导航到由 {{domxref("NavigationHistoryEntry.key", "key")}} 标识的特定 {{domxref("NavigationHistoryEntry")}}。
- {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}} {{Experimental_Inline}}
  - : 更新 {{domxref("Navigation.currentEntry","currentEntry")}} 的状态；用于状态改变与导航或重新加载无关的情况。

## 事件

_从其父级接口 {{DOMxRef("EventTarget")}} 继承事件。_

- {{domxref("Navigation/currententrychange_event", "currententrychange")}} {{Experimental_Inline}}
  - : 当 {{domxref("Navigation.currentEntry")}} 发生改变时触发。
- {{domxref("Navigation/navigate_event", "navigate")}} {{Experimental_Inline}}
  - : 开始时触发，允许你根据需要进行拦截。
- {{domxref("Navigation/navigateerror_event", "navigateerror")}} {{Experimental_Inline}}
  - : 导航失败时触发。
- {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} {{Experimental_Inline}}
  - : 导航成功完成后触发。

## 示例

### 在历史记录中前进和后退

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

### 遍历到特定的历史记录条目

```js
// 在 JS 启动时，获取第一个加载页面的键，以便用户可以随时返回该页面。
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// 导航离开，但按钮始终有效。
await navigation.navigate("/another_url").finished;
```

### 导航和更新状态

```js
navigation.navigate(url, { state: newState });
```

或

```js
navigation.reload({ state: newState });
```

或者如果状态独立于导航或重新加载：

```js
navigation.updateCurrentEntry({ state: newState });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
