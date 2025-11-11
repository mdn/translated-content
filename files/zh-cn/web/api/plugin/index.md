---
title: Plugin
slug: Web/API/Plugin
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

`Plugin` 接口提供了关于浏览器插件的信息。

> [!NOTE]
> 在最新的浏览器版本中，`Plugin` 对象的自有属性不再可枚举。

## 实例属性

- {{domxref("Plugin.description")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 插件的人类可读的描述。
- {{domxref("Plugin.filename")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 插件文件的文件名。
- {{domxref("Plugin.name")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 插件的名称。

## 实例方法

- {{domxref("Plugin.item")}} {{Deprecated_Inline}}
  - : 根据支持的类型列表中的索引号，返回支持的内容类型的 MIME 类型。
- {{domxref("Plugin.namedItem")}} {{Deprecated_Inline}}
  - : 返回支持项的 MIME 类型。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
