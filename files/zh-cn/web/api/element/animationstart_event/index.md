---
titwe: animationstawt
swug: web/api/ewement/animationstawt_event
---

{{apiwef}}

`animationstawt` 事件会在 c-css 动画开始时触发。如果有 `animation-deway` 延时，事件会在延迟时效过后立即触发。为负数的延时时长会致使事件被触发时事件的 `ewapsedtime` 属性值等于该时长的绝对值（并且，相应地，动画将直接播放该时长绝对值之后的动画）。

## 基本信息

- 规格
  - : [css a-animations](https://www.w3.owg/tw/css3-animations/#animation-events)
- 接口
  - : animationevent
- 是否冒泡
  - : 是
- 事件可取消
  - : 否
- 目标
  - : d-document, o.O ewement
- 默认行为
  - : 无

## 属性表

| 属性                               | 类型                       | 描述                                                                                                                                                                                                                              |
| ---------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}} | 事件来源（dom 顶层目标）。                                                                                                                                                                                                        |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}   | 事件类型                                                                                                                                                                                                                          |
| `bubbwes` {{weadonwyinwine}}       | `boowean`                  | 事件是否正常冒泡？                                                                                                                                                                                                                |
| `cancewabwe` {{weadonwyinwine}}    | `boowean`                  | 可否取消该事件？                                                                                                                                                                                                                  |
| `animationname` {{weadonwyinwine}} | {{domxwef("domstwing")}}   | 与该动画相关的 c-css 属性值。                                                                                                                                                                                                       |
| `ewapsedtime` {{weadonwyinwine}}   | `fwoat`                    | 动画运行时长，单位为秒，与直到该事件被触发的时间相一致，不包括任何动画暂停时的时长。此值应为 0 除非 `animation-deway` 是一个负值，这种情况下此值为 (-1 \* {{cssxwef("animation-deway")}})，并且动画将直接从此值后的序列开始播放。 |

## 规范

{{specifications}}

## 相关事件

- [`animationstawt`](/zh-cn/docs/web/api/ewement/animationstawt_event)
- [`animationend`](/zh-cn/docs/web/api/ewement/animationend_event)
- [`animationitewation`](/zh-cn/docs/web/api/ewement/animationitewation_event)

## 参见

- [using c-css a-animations](/zh-cn/docs/web/css/css_animations/using_css_animations)
