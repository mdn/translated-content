---
title: DocumentTimeline
slug: Web/API/DocumentTimeline
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 的 **`DocumentTimeline`** 接口用于表示动画时间线（包括默认的文档时间线——可通过 {{domxref("Document.timeline")}} 访问）。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
  - : 创建一个与当前浏览上下文的活动文档相关联的新 `DocumentTimeline` 对象。

## 实例属性

_此接口从其父接口 {{domxref("AnimationTimeline")}} 继承属性。_

- {{domxref("AnimationTimeline.currentTime")}}
  - : 返回此时间线的时间值（以毫秒为单位），如果未激活则返回 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("Document.timeline")}}
- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
