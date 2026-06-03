---
title: ContactAddress：country 属性
short-title: country
slug: Web/API/ContactAddress/country
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

{{domxref("ContactAddress")}} 接口的只读属性 **`country`** 是使用 [ISO 3166-1 alpha-2](https://zh.wikipedia.org/wiki/ISO_3166-1二位字母代码) 标准标识地址所在的国家的字符串。该字符串将始终采用其规范的大写形式。

一些有效的 `country` 值示例为：`"US"`、`"GB"`、`"CN"` 或 `"JP"`。

## 值

包含用于标识地址所在国家的包含 ISO3166-1 alpha-2 国家代码的字符串。如果无法获取国家信息，则为空字符串，通常可假定为“与站点所有者同属一国”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
