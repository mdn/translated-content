---
title: Animation：replaceState 属性
slug: Web/API/Animation/replaceState
l10n:
  sourceCommit: e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{ APIRef("Web Animations") }}

[Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 的只读属性 **`Animation.replaceState`** 表示动画是否已被浏览器在被另一个动画替换后被自动移除。

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

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.remove_event","remove")}} 事件
- {{domxref("Animation.persist()")}}
