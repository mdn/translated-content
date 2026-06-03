---
title: ContactAddress：region 属性
short-title: region
slug: Web/API/ContactAddress/region
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

{{domxref("ContactAddress")}} 接口的只读属性 **`region`** 返回表示地址所在国家的顶级行政区划的字符串。这可能是州（state）、省、州（oblast）、县（prefecture）。

## 值

表示地址所在国家的顶级行政区划的字符串。这个区域在不同国家有不同的名称，例如：州（state）、省、州（oblast）、县（prefecture）或郡（county）。

## 使用说明

在一些国家，例如比利时，人们通常不会在邮政地址中提供地区信息。在这种情况下，浏览器会将 `region` 的值返回为空字符串。然而，该地址仍然可以用于其预期目的（例如，运送产品）。但是，请务必验证地址，以确保用户提供的内容可用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
