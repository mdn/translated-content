---
title: NavigationHistoryEntry：index 属性
slug: Web/API/NavigationHistoryEntry/index
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`index`** 只读属性返回历史条目在历史条目列表（即 {{domxref("Navigation.entries()")}} 返回的列表）中的索引，如果条目未出现在列表中或者当前文档未处于完全活跃状态，则返回 `-1`。

## 值

表示历史条目列表中条目的 `index` 的数字，如果此项未出现在列表中，则为 `-1`。

## 示例

```js
const current = navigation.currentEntry;
console.log(current.index);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
