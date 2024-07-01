---
title: abort
slug: Web/API/HTMLMediaElement/abort_event
---

{{APIRef}}

當資源載入被拒絕時將會觸發**`abort`**事件。

## 一般資訊

- 規範
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-abort)
- 介面
  - : 若由使用者介面產生，為 UIEvent，否則為 Event。
- 是否向上(冒泡)
  - : 否
- 是否為可取消
  - : 否
- 目標對象
  - : Element
- 預設行為
  - : 無

## 屬性

| 屬性                            | 型態                                             | 描述                                                                                            |
| ------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/zh-TW/docs/Web/API/EventTarget) | 事件的目標對象 (DOM 樹中最頂層的對象)。                                                         |
| `type` {{readonlyInline}}       | [`DOMString`](/zh-TW/docs/Web/API/DOMString)     | 事件的型態。                                                                                    |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/zh-TW/docs/Web/API/Boolean)         | 事件是否向上冒泡。                                                                              |
| `cancelable` {{readonlyInline}} | [`Boolean`](/zh-TW/docs/Web/API/Boolean)         | 事件是否能夠取消。                                                                              |
| `view` {{readonlyInline}}       | [`WindowProxy`](/zh-TW/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-TW/docs/Web/API/Document/defaultView) (該文檔(Document)的`window`) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                              |

## 規範

{{Specifications}}
