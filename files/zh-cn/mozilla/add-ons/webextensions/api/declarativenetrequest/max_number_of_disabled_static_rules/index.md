---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

每个静态规则集上可禁用的静态规则的最大数量。有关静态规则集限制的更多信息，参见[静态规则集限制](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#静态规则集限制)。

使用 {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} 在静态规则集中启用和禁用规则，使用 {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}} 获取静态规则集的已禁用的规则。

此限制为：

- Firefox：`5000`。
- Chrome：`5000`，跨所有规则集一起计算，而不是分别对每个规则集单独进行计算。
- Safari 中并未实现该限制。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
