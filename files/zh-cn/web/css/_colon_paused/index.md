---
title: :paused
slug: Web/CSS/:paused
---

{{CSSRef}}

**`:paused`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器表示一个处于“暂停”状态（即非“播放”状态）的可播放的元素，如 {{htmlelement("audio")}} 或 {{htmlelement("video")}}。

如果用户明确将资源暂停，或者资源处于非激活状态或其他非播放状态，如“已加载但尚未激活”，则该资源将被视为已暂停。

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
