---
title: FontFaceSetLoadEvent
slug: Web/API/FontFaceSetLoadEvent
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("CSS Font Loading API")}}

[CSS 字体加载 API](/zh-CN/docs/Web/API/CSS_Font_Loading_API) 的 **`FontFaceSetLoadEvent`** 接口表示在 {{domxref("FontFaceSet")}} 开始加载字体之后触发的事件。

当字体加载开始（[`loading`](/zh-CN/docs/Web/API/FontFaceSet/loading_event)）、加载完成（[`loadingdone`](/zh-CN/docs/Web/API/FontFaceSet/loadingdone_event)）或加载其中一种字体产生错误（[`loadingerror`](/zh-CN/docs/Web/API/FontFaceSet/loadingerror_event)）时，会触发事件。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("FontFaceSetLoadEvent.FontFaceSetLoadEvent","FontFaceSetLoadEvent()")}}
  - : 创建一个新的 `FontFaceSetLoadEvent` 对象。

## 实例属性

_也从其父接口 {{domxref("Event")}} 继承实例属性。_

- {{domxref("FontFaceSetLoadEvent.fontfaces")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("FontFace")}} 实例的数组。根据事件的不同，数组将包含正在加载（`loading`）、已经成功加载（`loadingdone`）或加载失败（`loadingerror`）的字体。

## 实例方法

_从其父接口 {{domxref("Event")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.fonts")}}
- {{domxref("WorkerGlobalScope.fonts")}}
