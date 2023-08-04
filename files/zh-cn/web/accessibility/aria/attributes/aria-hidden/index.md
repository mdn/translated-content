---
title: 使用 aria-hidden 属性
slug: Web/Accessibility/ARIA/Attributes/aria-hidden
---

本文用来说明如何使用 aria-hidden 属性。aria-hidden 属性可以用来控制一系列可访问 API 中的非交互内容的显示或隐藏。

## 描述

把 `aria-hidden="true"` 加到元素上会把该元素和它的所有子元素从无障碍树上移除。这样做可以通过隐藏下列内容来提升使用辅助技术的用户体验：

- 纯装饰性的内容，如图标、图片
- 重复的内容，如重复的文本
- 屏幕外或被折叠的内容，如菜单

根据[无障碍的第四条规则](https://www.w3.org/TR/using-aria/#fourth)，`aria-hidden="true"` 不应该被用在可聚焦的元素上。而且，由于这个属性是可以被子元素继承的，它也不应该被用在可聚焦元素的父元素上。

如果父元素带有 `aria-hidden="true"` ，那么即使使用 `aria-hidden="false"` 也无法将该元素显示出来。

> **警告：** WAI-ARIA Authoring Practices 1.1 提示 `aria-hidden="false"` 在现阶段 [各个浏览器中表现不同](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden).

### 比较 `aria-hidden="true"`， `role="presentation"` 和 `role="none"`

表面上，`aria-hidden="true"`，`role="presentation"`，和`role="none"` 很相似，因为这三者都有以下特性：

- 根据辅助即使隐藏页面内容
- 无法在可聚焦元素上使用
- 无法在可互动元素的父级元素上使用

尽管有上面这些相同点，但是各个属性的意图是不同的。

- `aria-hidden="true"` 会把整个元素从无障碍 API 中移除
- `role="presentation"` 和`role="none"` 会将元素从语义上移除，仍然会将元素暴露给辅助技术。

### 可选值

- `false`
  - : （默认）元素会暴露给无障碍 API。
- `true`
  - : 元素不会暴露给无障碍 API。
- `undefined`
  - : （默认）客户端决定元素是否暴露给无障碍 API。

## 示例

```html
<i class="icon" aria-hidden="true" />
```

## 无障碍问题

## 最佳实践

`aria-hidden="true"` 在以下场景不应该被使用：

- HTML 的`hidden`属性被设置了
- 祖先元素被`display: none`属性设置成不显示状态
- 祖先元素被`visibility: hidden`属性设置成不显示状态

在以上三个场景中，元素已经被隐藏，从可访问树种移除了，无需再添加`aria-hidden="true"`属性。

## 规范

{{Specifications}}

## 另见

- [使用展示角色](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role)
- [role="none"](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_none_role)
