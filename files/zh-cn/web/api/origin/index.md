---
title: origin 全局属性
slug: Web/API/origin
l10n:
  sourceCommit: cb279e20569055b200f93802d1704846c28aa04f
---

{{APIRef}}{{AvailableInWorkers}}

**`origin`** 全局只读属性返回全局作用域的来源，序列化为一个字符串。

## 值

一个字符串。

## 示例

在 Worker 脚本中执行以下代码段，每次收到消息时，它都会将 Worker 全局作用域的来源记录到控制台中：

```js
onmessage = () => {
  console.log(self.origin);
};
```

如果来源不是协议/主机/端口元组（例如试图在本地，即通过 `file://` URL 运行脚本），`origin` 将返回字符串 `"null"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
