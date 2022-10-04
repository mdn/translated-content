---
title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
---

{{APIRef("DOM Events")}}

**`MouseEvent()`** 构造器创建一个 {{domxref("MouseEvent")}}。

## 语法

```
 event = new MouseEvent(typeArg, mouseEventInit);
```

### 形参

- _typeArg_
  - : {{domxref("DOMString")}} 格式的事件名称。
- _mouseEventInit_ {{optional_inline}}

  - : 初始化 `MouseEvent` 的字典，有下列属性字段：

    - `"screenX"`，`long` 型可选，默认为 `0`，设置鼠标事件发生时相对于用户屏幕的水平坐标位置；该操作并不会改变真实鼠标的位置。
    - `"screenY"`，`long` 型可选，默认为 `0`，设置鼠标事件发生时相对于用户屏幕的垂直坐标位置；该操作并不会改变真实鼠标的位置。
    - `"clientX"`，`long` 型可选，默认为 `0`，设置鼠标事件时相对于客户端窗口的水平坐标位置；该操作并不会改变真实鼠标的位置。
    - `"clientY"`，`long` 型可选，默认为 `0`，设置鼠标事件时相对于客户端窗口的垂直坐标位置；该操作并不会改变真实鼠标的位置。
    - `"ctrlKey"`，{{jsxref("Boolean")}} 型可选，默认为`false`，标明是否同时按下&#x20;

      <kbd>ctrl</kbd>

      &#x20;键。

    - `"shiftKey"`，{{jsxref("Boolean")}} 型可选，默认为`false`，标明是否同时按下&#x20;

      <kbd>shift</kbd>

      &#x20;键。

    - `"altKey"`，{{jsxref("Boolean")}} 型可选，默认为 `false`，标明是否同时按下&#x20;

      <kbd>alt</kbd>

      &#x20;键。

    - `"metaKey"`，{{jsxref("Boolean")}} 型可选，默认为`false`，标明是否同时按下&#x20;

      <kbd>meta</kbd>

      &#x20;键。

    - `"button"`，`short` 型可选，默认为 `0`，描述了当事件发生时，哪个按键被按下或释放：

      | 值  | 含义                                 |
      | --- | ------------------------------------ |
      | `0` | 主按键被按下（通常为左键）或未初始化 |
      | `1` | 辅助按键被按下 (通常为中键)          |
      | `2` | 次按键被按下 (通常为右键)            |

    - `"buttons"`，无符号 `short` 型可选，默认为 `0`，描述了当事件发生时哪些按键被按下：

      | 位域值（Bit-field value） | 含义                        |
      | -------------------------- | --------------------------- |
      | `0`                        | 无按键被按下                |
      | `1`                        | 主按键被按下 (通常为左键)   |
      | `2`                        | 次按键被按下 (通常为右键)   |
      | `4`                        | 辅助按键被按下 (通常为中键) |

    - `"relatedTarget"`，{{domxref("EventTarget")}} 型可选，默认为 `null`，若事件为 {{event("mouseenter")}} 或 {{event("mouseover")}}，则表示刚离开的元素；若事件为 {{event("mouseout")}} 或 {{event("mouseleave")}}，则表示刚进入的元素。
    - `"region"`，{{domxref("DOMString")}} 型可选，默认为`null`，标明点击事件影响的区域 DOM 的 id。不影响任何区域的话，请传`null`值。

    在一些实现中，passing anything other than a number for the screen and client fields will throw a `TypeError`.

    > **备注：** 上述 `MouseEventInit` 字典字段还包括从 {{domxref("UIEvent.UIEvent", "UIEventInit")}} 和 {{domxref("Event.Event", "EventInit")}} 继承来的字典字段。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Polyfill

You can polyfill the `MouseEvent()` constructor functionality in Internet Explorer 9 and higher with the following code:

```js
(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {
    // Need to polyfill - fall through
  }

    // Polyfills DOM4 MouseEvent
  var MouseEventPolyfill = function (eventType, params) {
    params = params || { bubbles: false, cancelable: false };
    var mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent(eventType,
      params.bubbles,
      params.cancelable,
      window,
      0,
      params.screenX || 0,
      params.screenY || 0,
      params.clientX || 0,
      params.clientY || 0,
      params.ctrlKey || false,
      params.altKey || false,
      params.shiftKey || false,
      params.metaKey || false,
      params.button || 0,
      params.relatedTarget || null
    );

    return mouseEvent;
  }

  MouseEventPolyfill.prototype = Event.prototype;

  window.MouseEvent = MouseEventPolyfill;
})(window);
```

## 参见

- {{domxref("MouseEvent")}}，对象结构接口。
