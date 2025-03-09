---
title: NavigationHistoryEntry：getState() 方法
slug: Web/API/NavigationHistoryEntry/getState
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`getState()`** 方法返回由开发人员提供且与当前历史记录条目相关联的状态的克隆。

## 语法

```js-nolint
getState()
```

### 参数

无。

### 返回值

表示状态的值。这可以是任何[可结构化克隆的](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)数据类型。

如果未定义状态或当前文档未完全激活，则返回 `undefined`。

### 异常

无。

## 示例

```js
async function handleReload() {
  // 通过 reload() 更新现有状态
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  });

  // 将当前状态打印到控制台
  const current = navigation.currentEntry;
  console.log(current.getState());
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
- 允许更新状态的方法——{{domxref("Navigation.navigate()")}}、{{domxref("Navigation.reload()")}} 和 {{domxref("Navigation.updateCurrentEntry()")}}
