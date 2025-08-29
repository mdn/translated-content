---
title: tabGroups.TAB_GROUP_ID_NONE
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TAB_GROUP_ID_NONE
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

当标签页未处于标签组中时返回的标签组 ID 值。

其值为 `-1`。

此值可在以下 API 函数中作为 `groupId` 出现：

- {{WebExtAPIRef("tabs.group()")}}
- {{WebExtAPIRef("tabs.ungroup()")}}
- {{WebExtAPIRef("tabs.query()")}}
- {{WebExtAPIRef("tabs.Tab")}}

`tabGroups.TAB_GROUP_ID_NONE` 常量属于 `tabGroups` 命名空间，仅在取得 [`tabGroups` 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabGroups#权限)时可用。若你的扩展没有声明 `tabGroups` 权限，请不要使用 `tabGroups.TAB_GROUP_ID_NONE`，而请使用 `-1`。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
