---
title: 'HTMLMediaElement: ratechange'
slug: Web/API/HTMLMediaElement/ratechange_event
---

`ratechange` 事件將在播放速度改變時被觸發

## 基本資訊

- 規格
  - : [HTML5 Media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-ratechange)
- 介面
  - : 事件
- 是否冒泡
  - : 否
- 是否可取消
  - : 否
- 目標
  - : 元素
- 預設行為
  - : 無

## 屬性

| 屬性                                  | 類型                                 | 描述                            |
| ------------------------------------- | ------------------------------------ | ------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 事件目標（DOM 樹中最頂層的目標) |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | 事件類型                        |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | 事件是否觸發冒泡                |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | 事件是否可取消                  |

## 規範

{{Specifications}}

## 相關事件

- {{event("playing")}}
- {{event("waiting")}}
- {{event("seeking")}}
- {{event("seeked")}}
- {{event("ended")}}
- {{event("loadedmetadata")}}
- {{event("loadeddata")}}
- {{event("canplay")}}
- {{event("canplaythrough")}}
- {{event("durationchange")}}
- {{event("timeupdate")}}
- {{event("play")}}
- {{event("pause")}}
- {{event("ratechange")}}
- {{event("volumechange")}}
- {{event("suspend")}}
- {{event("emptied")}}
- {{event("stalled")}}
