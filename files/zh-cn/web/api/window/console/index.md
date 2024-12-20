---
title: Window：console 属性
slug: Web/API/Window/console
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`Window.console`** 属性返回对 {{domxref("console")}} 对象的引用，提供了向浏览器控制台记录信息的方法。这些方法仅用于调试目的，不应依赖它们向终端用户展示信息。

## 示例

### 输出到控制台

第一个示例将文本输出到控制台。

```js
console.log("加载内容时发生错误");
```

下一个示例将一个对象输出到控制台，该对象的字段可以通过展开控件进行展开查看：

```js
console.dir(someObject);
```

更多示例，请参见 [`console`](/zh-CN/docs/Web/API/console) 文章中的[示例](/zh-CN/docs/Web/API/console#示例)部分。

## 规范

{{Specifications}}

> [!NOTE]
> 目前，各浏览器之间存在许多实现差异，但正在努力使它们趋于一致，彼此之间更加兼容。
