---
title: AnimationPlaybackEvent：timelineTime 属性
short-title: timelineTime
slug: Web/API/AnimationPlaybackEvent/timelineTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

{{domxref("AnimationPlaybackEvent")}} 接口的 **`timelineTime`** 只读属性表示事件排队时动画的{{domxref("AnimationTimeline", "时间线", "", 1)}}的时间值。如果生成事件时动画未与时间线关联，或者关联的时间线处于非活动状态，则该值将为未兑现状态。

## 值

以毫秒为单位的数字或 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("AnimationTimeline")}}
