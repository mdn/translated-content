---
title: :playing
slug: Web/CSS/:playing
---

{{CSSRef}}

**`:playing`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器表示一个处于“播放”状态的可播放元素，例如 {{htmlelement("audio")}} 或 {{htmlelement("video")}}。

如果用户明确地启动了播放，那么资源就被认为是正在播放。如果元素的确处于播放状态，但由于与用户意图无关的原因而被暂停，也被认为是正在播放。在这种情况下，一旦底层原因（如“缓冲”或“停滞”状态）得到解决，播放将自动恢复。

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
