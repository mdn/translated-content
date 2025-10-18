---
title: ContactAddress：dependentLocality 属性
short-title: dependentLocality
slug: Web/API/ContactAddress/dependentLocality
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

{{domxref("ContactAddress")}} 接口的只读属性 **`dependentLocality`** 返回包含城市内的地区或次级区域名称的字符串，例如社区、区、街区，或者在英国称为“从属地区”（dependent locality）。也被称为*邮镇*。

## 值

表示地址中次级区域部分的字符串。如果没有可用或需要次级区域，则该值可能为空字符串。当城市内可能存在街道名称重复的区域时，用于提供地址的明确性。

次级区域是指城市内的一个区域，例如社区、区或街区。在英国，此属性用于指示英国的**邮镇**（皇家邮政对其正式称呼为**从属地区**）。这是地址中的一种适用于城市内可能存在街道名称重复的区域的消歧特征。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
