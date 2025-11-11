---
title: Animation
slug: Web/API/Animation
---

{{ APIRef("Web Animations") }}{{SeeCompatTable}}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)的**动画**接口表示一个单个动画播放器并且提供用于一个动画节点或源的回放控制和一个时间轴。

## 构造函数

- {{domxref("Animation.Animation()", "Animation()")}}
  - : 创建一个新的 Animation 对象实例。

## 属性

- {{domxref("Animation.currentTime")}}
  - : 动画的当前时间值（以毫秒为单位），无论是正在运行还是已暂停。如果动画缺少{{domxref("AnimationTimeline", "timeline")}}或尚未播放，其值为 null。
- {{domxref("Animation.effect")}}
  - : 获取或设置与此动画相关联的{{domxref("KeyframeEffect")}}。
- {{domxref("Animation.finished")}} {{readOnlyInline}}
  - : 返回此动画的当前完成的状态。
- {{domxref("Animation.id")}}
  - : 获取或设置用于标识动画的字符串。
- {{domxref("Animation.playState")}} {{readOnlyInline}}
  - : 返回描述动画播放状态的枚举值。
- {{domxref("Animation.playbackRate")}}
  - : 返回或设置动画的播放速率。
- {{domxref("Animation.ready")}} {{readOnlyInline}}
  - : 返回此动画的当前就绪状态。
- {{domxref("Animation.startTime")}}
  - : 获取或设置动画播放应开始的预定时间。
- {{domxref("Animation.timeline")}}
  - : 获取或设置与此动画相关联的{{domxref("AnimationTimeline", "timeline")}}。

### 事件处理程序

- {{domxref("Animation.oncancel")}}
  - : 获取并设置取消事件的事件处理程序。
- {{domxref("Animation.onfinish")}}
  - : 获取并设置完成事件的事件处理程序。

## 方法

- {{domxref("Animation.cancel()")}}
  - : 清除此动画的所有{{domxref("KeyframeEffect", "keyframeEffects")}}，并中止播放。
- {{domxref("Animation.finish()")}}
  - : 设置动画中止播放。
- {{domxref("Animation.pause()")}}
  - : 暂停播放动画。
- {{domxref("Animation.play()")}}
  - : 开始或恢复播放动画，或者如果之前完成，则重新开始动画。
- {{domxref("Animation.reverse()")}}
  - : 反转播放动画，直到播放到动画开始时停止。如果动画完成或未播放，它将从头到尾播放。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
