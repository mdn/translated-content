---
title: tabGroups.TabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TabGroup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

一个标签页组的状态。

## 类型

此类型的值为字符串。可能的取值包括：

- `collapsed`
  - : `boolean`。标签页组在标签栏中是折叠还是展开。
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}。用户为标签页组的标签和图标选择的颜色名称。
- `id`
  - : `integer`。标签页组的唯一 ID。不能为 {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}。关闭的标签页组的 ID 在标签页组恢复时可能会被重新使用，不过 API 并不保证一定如此。要跨浏览器重启识别标签页组，请检查其他属性以及标签页组内的标签页进行判断。
- `title`
  - : `string`。标签页组的用户定义名称。
- `windowId`
  - : `integer`。标签页组所在窗口的唯一 ID。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
