---
title: load
slug: Web/API/Window/load_event
original_slug: Web/Events/load
---

`load` 事件發生在加載完目標資源、該資源依賴的其他資源時。

## 一般資訊

- 規範
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- 介面
  - : UIEvent
- 起泡事件
  - : No
- 可取消
  - : No
- 對象
  - : Window
- 預設行為
  - : None.

## 屬性

| Property                              | Type                                             | Description                                                                                   |
| ------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/zh-TW/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                        |
| `type` {{readonlyInline}}       | [`DOMString`](/zh-TW/docs/Web/API/DOMString)     | The type of event.                                                                            |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/zh-TW/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                    |
| `cancelable` {{readonlyInline}} | [`Boolean`](/zh-TW/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                      |
| `view` {{readonlyInline}}       | [`WindowProxy`](/zh-TW/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-TW/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                            |

## 範例

```html
<script>
  window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });
</script>
```

## 規範

{{Specifications}}

## 相關事件

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
