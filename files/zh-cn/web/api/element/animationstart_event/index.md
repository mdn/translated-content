---
title: animationstart
slug: Web/API/Element/animationstart_event
---

`animationstart` 事件会在 CSS 动画开始时触发。如果有 `animation-delay` 延时，事件会在延迟时效过后立即触发。为负数的延时时长会致使事件被触发时事件的 `elapsedTime` 属性值等于该时长的绝对值（并且，相应地，动画将直接播放该时长绝对值之后的动画）。

## 基本信息

- 规格
  - : [CSS Animations](http://www.w3.org/TR/css3-animations/#animation-events)
- 接口
  - : AnimationEvent
- 是否冒泡
  - : 是
- 事件可取消
  - : 否
- 目标
  - : Document, Element
- 默认行为
  - : 无

## 属性表

| 属性                               | 类型                       | 描述                                                                                                                                                                                                                              |
| ---------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{ReadOnlyInline}}        | {{domxref("EventTarget")}} | 事件来源（DOM 顶层目标）。                                                                                                                                                                                                        |
| `type` {{ReadOnlyInline}}          | {{domxref("DOMString")}}   | 事件类型                                                                                                                                                                                                                          |
| `bubbles` {{ReadOnlyInline}}       | `boolean`                  | 事件是否正常冒泡？                                                                                                                                                                                                                |
| `cancelable` {{ReadOnlyInline}}    | `boolean`                  | 可否取消该事件？                                                                                                                                                                                                                  |
| `animationName` {{ReadOnlyInline}} | {{domxref("DOMString")}}   | 与该动画相关的 CSS 属性值。                                                                                                                                                                                                       |
| `elapsedTime` {{ReadOnlyInline}}   | `Float`                    | 动画运行时长，单位为秒，与直到该事件被触发的时间相一致，不包括任何动画暂停时的时长。此值应为 0 除非 `animation-delay` 是一个负值，这种情况下此值为 (-1 \* {{cssxref("animation-delay")}})，并且动画将直接从此值后的序列开始播放。 |

## 规范

{{Specifications}}

## 相关事件

- [`animationstart`](/zh-CN/docs/Web/API/Element/animationstart_event)
- [`animationend`](/zh-CN/docs/Web/API/Element/animationend_event)
- [`animationiteration`](/zh-CN/docs/Web/API/Element/animationiteration_event)

## 参见

- [Using CSS Animations](/zh-CN/docs/CSS/Using_CSS_animations)
