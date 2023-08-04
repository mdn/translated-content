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
      | ------------------------- | --------------------------- |
      | `0`                       | 无按键被按下                |
      | `1`                       | 主按键被按下 (通常为左键)   |
      | `2`                       | 次按键被按下 (通常为右键)   |
      | `4`                       | 辅助按键被按下 (通常为中键) |

    - `"relatedTarget"`，{{domxref("EventTarget")}} 型可选，默认为 `null`，若事件为 [`mouseenter`](/zh-CN/docs/Web/API/Element/mouseenter_event) 或 [`mouseover`](/zh-CN/docs/Web/API/Element/mouseover_event)，则表示刚离开的元素；若事件为 [`mouseout`](/zh-CN/docs/Web/API/Element/mouseout_event) 或 [`mouseleave`](/zh-CN/docs/Web/API/Element/mouseleave_event)，则表示刚进入的元素。
    - `"region"`，{{domxref("DOMString")}} 型可选，默认为`null`，标明点击事件影响的区域 DOM 的 id。不影响任何区域的话，请传`null`值。

    在一些实现中，为屏幕和客户端字段传递数值以外的任何东西都会抛出 {{jsxref("TypeError")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent")}}，对象结构接口。
