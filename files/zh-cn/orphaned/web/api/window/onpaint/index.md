---
title: Window.onpaint
slug: orphaned/Web/API/Window/onpaint
original_slug: Web/API/Window/onpaint
---
{{ ApiRef() }}

{{Non-standard_header}}

## 总结

window 中的 paint 事件处理，目前在 Gecko-based（火狐）应用中不被支持，参见【注意事项】部分的说明。

## 语法

```plain
window.onpaint =funcRef;
```

- `funcRef` 是处理函数。

## 注意事项

`onpaint` 现在没有生效，并且这个事件是否会生效也是一个问题，参见{{Bug(239074)}}.

window 渲染时 paint 事件会触发。此事件在 window 的 load 事件之后触发，并且每次 window 需要重绘时都会再次触发，当另一个 window 出现使原先的 window 不处于激活状态时，原 window 的 onpaint 事件则被清理。

## 规范

不是任何规范的一部分。
