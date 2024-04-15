---
title: Navigator：javaEnabled() 方法
slug: Web/API/Navigator/javaEnabled
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

这个方法始终返回 false。

## 语法

```js-nolint
javaEnabled()
```

### 参数

无。

### 返回值

布尔值为 `false`。

## 示例

```js
if (window.navigator.javaEnabled()) {
  // 该代码永远不会执行；因为条件始终为 false。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
