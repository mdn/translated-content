---
title: WorkletSharedStorage：context 属性
short-title: context
slug: Web/API/WorkletSharedStorage/context
l10n:
  sourceCommit: 723478b3c31d1d9e2b6c1cb16ccd562f2244f519
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{Non-standard_Header}}

{{domxref("WorkletSharedStorage")}} 接口的 **`context`** 只读属性返回通过 {{domxref("FencedFrameConfig.setSharedStorageContext()")}} 方法，从关联浏览上下文传递到共享存储 Worklet 的上下文数据。

## 值

表示数据的字符串。该值将匹配在导航到 {{domxref("FencedFrameConfig")}} 之前传递给 {{domxref("FencedFrameConfig.setSharedStorageContext()")}} 方法的最新值。如果在导航之前 `setSharedStorageContext()` 未设置任何值，则 `context` 将返回 `undefined`。

## 示例

有关示例，请参见 {{domxref("WorkletSharedStorage")}} 主页面。

## 规范

`context` 属性目前未在任何规范中定义。

## 浏览器兼容性

{{Compat}}

## 参见

- [共享存储 API](/zh-CN/docs/Web/API/Shared_Storage_API)
