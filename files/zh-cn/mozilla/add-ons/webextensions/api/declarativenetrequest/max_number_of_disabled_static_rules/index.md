---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

每个静态规则集上可禁用的静态规则的最大数量。有关静态规则集限制的更多信息，请参阅 [static ruleset limits](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits)。

使用 {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} 在静态规则集中启用和禁用规则，使用 {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}} 获取静态规则集的已禁用规则列表。

此限制为：

- Firefox：`5000`
- Chrome：`5000`，跨所有规则集计算，而不是每个规则集单独计算。
- Safari 中未实现此限制。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
