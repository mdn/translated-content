---
title: NavigationActivation：navigationType 属性
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationActivation")}} 接口的 **`navigationType`** 只读属性包含一个表示导航类型的字符串。

## 值

表示 {{domxref("NavigationActivation")}} 所关联的导航类型的字符串。可能的值包括：

- `push`：导航到新位置，导致新条目被推送到历史记录列表中。
- `reload`：重新加载 {{domxref("NavigationActivation.entry")}}。
- `replace`：用新历史记录条目替换 {{domxref("NavigationActivation.entry")}}。此新条目将重用相同的 {{domxref("NavigationHistoryEntry.key", "key")}}，但分配不同的 {{domxref("NavigationHistoryEntry.id", "id")}}。
- `traverse`：浏览器从一个现有历史记录条目导航到另一个现有历史记录条目。

## 示例

```js
window.addEventListener("pageswap", (event) => {
  // 例如，页面被隐藏，或者导航是跨文档的。
  if (!event.viewTransition) return;

  // 跳过后退/前进导航的视图转换。
  if (event.activation.navigationType === "traverse") {
    event.viewTransition.skipTransition();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [导航 API](/zh-CN/docs/Web/API/Navigation_API)
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
