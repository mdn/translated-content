---
title: ":paused"
slug: Web/CSS/:paused
---

{{CSSRef}}

**`:paused`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器是一种资源状态伪类，它将匹配可以进行“播放”或“暂停”的音频、视频或类似资源，当该元素处于“暂停”状态时。

如果用户明确将资源暂停，或者资源处于非激活状态，则该资源将被视为已暂停。

## 语法

```css
:paused {
  /* ... */
}
```

## 示例

### CSS

```css
:paused {
  border: 5px solid orange;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":playing")}}
