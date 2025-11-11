---
title: search
slug: Mozilla/Add-ons/WebExtensions/API/search
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

使用 search API 检索已安装的搜索引擎并执行搜索。

要使用此 API，你需要取得 `"search"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

在选择 `search.query()` 和 `search.search()` 时，请考虑以下几点：

- {{WebExtAPIRef("search.query()")}} 在大多数主流浏览器中可用，因此非常适合用于跨浏览器扩展。但是，它只能针对浏览器的默认搜索引擎进行搜索。
- {{WebExtAPIRef("search.search()")}} 仅在 Firefox 中可用，不过它能够利用浏览器中设置的任何搜索引擎进行搜索。

## 函数

- {{WebExtAPIRef("search.get()")}}
  - : 检索所有搜索引擎。
- {{WebExtAPIRef("search.query()")}}
  - : 使用浏览器的默认搜索引擎进行搜索。
- {{WebExtAPIRef("search.search()")}}
  - : 使用指定的搜索引擎进行搜索。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
