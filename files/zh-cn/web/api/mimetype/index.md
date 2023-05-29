---
title: MimeType
slug: Web/API/MimeType
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

这 **`MimeType`** 接口提供了包含以下信息 MIME 与特定插件关联的类型。{{domxref("NavigatorPlugins.mimeTypes")}} 返回此对象的数组。

## 属性

- {{domxref("MimeType.type")}}
  - : 返回关联的插件的 MIME 类型。
- {{domxref("MimeType.description")}}
  - : 如果没有返回相关插件或空字符串的描述。
- {{domxref("MimeType.suffixes")}}
  - : 包含插件，所显示的数据的有效文件扩展名的字符串或空字符串，如果扩展名为特定的模块无效。例如，浏览器内容解密模块可能出现在插件列表中，但支持更多文件 extenions 比可以预期。因此，它可能会返回一个空字符串。
- {{domxref("MimeType.enabledPlugin")}}
  - : 返回一个 {{domxref("Plugin")}} 实例，其包含插件本身的信息。

## 规范

{{Specifications}}

## 浏览器的兼容性

{{Compat}}
