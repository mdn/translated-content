---
title: Console.warn()
slug: Web/API/console/warn
---

{{APIRef("Console API")}}

向 Web 控制台输出一条警告信息。

{{AvailableInWorkers}}

> **备注：** 在火狐浏览器里，警告会有一个小感叹号图标在 Web 控制台信息前面。

## 语法

```plain
console.warn(obj1 [, obj2, ..., objN]);
console.warn(msg [, subst1, ..., substN]);
```

## 参数

- `obj1` ... `objN`
  - : 要输出的 Javascript 对象列表。其中每个对象会以字符串的形式按照顺序依次输出到控制台。
- `msg`
  - : 一个 JavaScript 字符串，其中包含零个或多个替代字符串。
- `subst1` ... `substN`
  - : 零个或多个 Javascript 对象 依次替换 msg 中的替代字符串，你可以在替代字符串中指定对象的输出格式。

查看 [向控制台输出文本](/zh-CN/docs/Web/API/Console) 来了解更多 {{domxref("console")}} 的用法。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- [Opera Dragonfly 文档：控制台](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN：使用 F12 工具控制台来查看错误和状态](http://msdn.microsoft.com/library/gg589530)
