---
title: ":playing"
slug: Web/CSS/:playing
---

{{CSSRef}}

**`:playing`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器是一种资源状态伪类，它将匹配可以进行“播放”或“暂停”的音频、视频或类似资源，当该元素处于“播放”状态时。

即使资源处于缓冲状态或由于除用户交互以外的任何原因而暂停，该资源仍被视为正在播放。

## 语法

```css
:playing {
  /* ... */
}
```

## 示例

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":paused")}}
