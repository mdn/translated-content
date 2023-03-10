---
title: Console.info()
slug: Web/API/console/info
---

{{APIRef("Console API")}}

向 web 控制台输出一个通知信息。仅在 Firefox，web 控制台的日志中的项目旁边会显示一个小的‘I‘图标

{{AvailableInWorkers}}

## 语法

```
console.info(obj1 [, obj2, ..., objN]);
console.info(msg [, subst1, ..., substN]);
```

## 参数

- `obj1` ... `objN`
  - : 要输出的 JavaScript 对象列表。对象 obj1,obj2,...列出顺序和输出顺序一致。
- `msg`
  - : JavaScript 字符串。可包含零个或多个替换字符串。
- `subst1` ... `substN`
  - : 用于替换 msg 内的替换字符串的 JavaScript 对象。可以对输出的格式进行额外的控制。

查看更多细节可访问 {{domxref("console")}} 文件内的[Outputting t](/zh-CN/docs/Web/API/console#Outputting_text_to_the_console)[ext to the console](/zh-CN/docs/Web/API/console#Outputting_text_to_the_console)

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参见

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
