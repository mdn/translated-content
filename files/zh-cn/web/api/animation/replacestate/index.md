---
title: Animation：replaceState 属性
slug: Web/API/Animation/replaceState
l10n:
  sourceCommit: e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 的只读属性 **`Animation.replaceState`** 表示动画是否在被另一个动画替换后[由浏览器自动移除](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#自动删除填充动画)。

## 值

表示动画替换状态的字符串。该值可以是以下之一：

- `active`
  - : 动画创建时的初始替换状态。
- `persisted`
  - : 已通过调用 {{domxref("Animation.persist()")}} 显式保留了动画。
- `removed`
  - : 动画已被浏览器自动移除。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.remove_event","remove")}} 事件
- {{domxref("Animation.persist()")}}
