---
title: Plugin
slug: Web/API/Plugin
---

> **警告：** **已废弃**
> 该特性已经从 HTML5.2 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

{{ApiRef("HTML DOM")}}

插件接口提供有关浏览器[插件](/zh-CN/docs/Mozilla/Add-ons/Plugins)的信息。

> **备注：** 在最新版本的浏览器中插件对象本身的属性不可枚举。

## 属性

| 名称                              | 描述                                | 返回值类型               | 兼容性                           |
| --------------------------------- | ----------------------------------- | ------------------------ | -------------------------------- |
| {{domxref("Plugin.description")}} | 一个人类可读的插件描述。 **只读。** | {{domxref("DOMString")}} | DOM 0                            |
| {{domxref("Plugin.filename")}}    | 插件文件名。**只读。**              | {{domxref("DOMString")}} | DOM 0                            |
| {{domxref("Plugin.name")}}        | 插件名。**只读。**                  | {{domxref("DOMString")}} | DOM 0                            |
| {{domxref("Plugin.version")}}     | 插件版本号字符串。**只读。**        | {{domxref("DOMString")}} | Gecko browsers only (Firefox 4+) |

## 方法

- {{domxref("Plugin.item")}}
  - : 返回支持的 MIME 类型的索引号。
- {{domxref("Plugin.namedItem")}}
  - : 返回支持的 MIME 类型。

## 规范

{{Specifications}}
