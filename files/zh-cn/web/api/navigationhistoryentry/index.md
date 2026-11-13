---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation API", "导航 API", "", "nocode")}} 的 **`NavigationHistoryEntry`** 接口表示单个导航历史记录条目。

这些对象通常通过 {{domxref("Navigation.currentEntry")}} 属性和 {{domxref("Navigation.entries()")}} 方法访问。

导航 API 仅公开在当前浏览上下文中创建的与当前页面同源的历史记录条目（例如，不是嵌入式 {{htmlelement("iframe")}} 内的导航或跨源导航），为你的应用提供所有先前历史记录条目的准确列表。与使用旧版{{domxref("History API", "历史记录 API", "", "nocode")}} 相比，这使得遍历历史记录变得不那么脆弱。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{DOMxRef("EventTarget")}} 继承属性。_

- {{domxref("NavigationHistoryEntry.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回历史记录条目的 `id`。这是一个唯一的、由 UA 生成的值，始终代表特定的历史记录条目，可用于将其与外部资源（如存储缓存）关联。
- {{domxref("NavigationHistoryEntry.index", "index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回历史条目列表（即 {{domxref("Navigation.entries()")}} 返回的列表）中历史条目的索引，如果该条目未出现在列表中，则返回 `-1`。
- {{domxref("NavigationHistoryEntry.key", "key")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回历史条目的 `key`。这是一个唯一的 UA 生成值，表示历史条目在条目列表中的位置，而不是条目本身。它用于通过 {{domxref("Navigation.traverseTo()")}} 导航该特定位置。替换列表中条目的其他条目将重用该 `key`（即，如果 {{domxref("NavigateEvent.navigationType")}} 为 `replace`）。
- {{domxref("NavigationHistoryEntry.sameDocument", "sameDocument")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果此历史记录条目与当前 {{domxref("Document")}} 值属于同一个 `document`，则返回 `true`，否则返回 `false`。
- {{domxref("NavigationHistoryEntry.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回此历史记录条目的绝对 URL 地址。如果该条目对应的文档与当前文档不同（例如 `sameDocument` 属性为 `false`），并且该文档是在将 {{httpheader("Referrer-Policy")}} 标头设置为 `no-referrer` 或 `origin` 的情况下获取的，则该属性返回 `null`。

## 实例方法

_从其父接口 {{DOMxRef("EventTarget")}} 继承方法。_

- {{domxref("NavigationHistoryEntry.getState", "getState()")}} {{Experimental_Inline}}
  - : 返回与此历史记录条目相关的可用状态数据的克隆。

## 事件

- {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} {{Experimental_Inline}}
  - : 当条目不再是历史条目列表的一部分时触发。

## 示例

```js
function initHomeBtn() {
  // 获取第一个加载条目的键，以便用户可以随时返回该视图。
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// 拦截 navigate 事件（例如链接点击），并将其替换为单页导航
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // 导航到不同的视图，但“主页”按钮始终有效
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
