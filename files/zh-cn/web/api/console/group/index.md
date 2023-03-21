---
title: console.group
slug: Web/API/console/group
---

{{ ApiRef() }}

## 概述

在 [Web 控制台](/zh-CN/Tools/Web_Console)上创建一个新的分组。随后输出到控制台上的内容都会被添加一个缩进，表示该内容属于当前分组，直到调用{{ domxref("console.groupEnd()") }}之后，当前分组结束。

 定义
```plain
Console.group(...label: any[]): void
```

## 语法

```plain
console.group();
console.group(label, substr1, /* ..., */ substrN );
```

## 参数

- `label`
  - : 一个 JavaScript 字符串，其中包含零个或多个替代字符串。如果提供了一个或多个‘标签’，则首先打印这些标签，而不需要额外的缩进。
- `substr1` ... `substrN`
  - : JavaScript 对象，用来依次替换 `label` 中的替代字符串。你可以在替代字符串中指定对象的输出格式。

## 备注

在文档{{ domxref("console") }}中查看[在控制台中使用分组](/zh-CN/DOM/console#Using_groups_in_the_console),了解更多详细内容。

## 规范

不属于任何公开的规范

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
