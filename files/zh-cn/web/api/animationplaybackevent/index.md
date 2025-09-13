---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 的 `AnimationPlaybackEvent` 接口表示动画事件。

当动画播放时，其会通过动画事件报告其 {{domxref("Animation.playState", "playState")}} 的变化。

{{InheritanceDiagram}}

## 构造器

- {{domxref("AnimationPlaybackEvent.AnimationPlaybackEvent", "AnimationPlaybackEvent()")}}
  - : 构造一个新的 `AnimationPlaybackEvent` 对象实例。

## 实例属性

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : 生成事件的动画的当前时间。
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : 生成事件的动画的时间线的时间值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playState")}}
