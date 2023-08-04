---
title: MouseEvent.mozInputSource
slug: Web/API/MouseEvent/mozInputSource
---

{{ APIRef() }}

{{ Non-standard_header() }}

{{domxref("MouseEvent")}}中的 **`MouseEvent.mozInputSource`** 是只读属性，它提供触发事件的设备信息。例如，当一个鼠标事件发生时，你能根据 **`MouseEvent.mozInputSource`** 属性判断该事件是由鼠标还是由触屏设备触发的（这将影响到你对于事件发生坐标解释的精确度）。

## 语法

```plain
var source = event.mozInputSource;
```

### 值

下列值都是合法的

| 常量名称              | 值  | 描述                                   |
| --------------------- | --- | -------------------------------------- |
| `MOZ_SOURCE_UNKNOWN`  | 0   | 该事件是由未知设备触发的。             |
| `MOZ_SOURCE_MOUSE`    | 1   | 该事件是由鼠标（或类似的设备）触发的。 |
| `MOZ_SOURCE_PEN`      | 2   | 该事件是由触屏笔在写字板上触发的。     |
| `MOZ_SOURCE_ERASER`   | 3   | 该事件是由触屏橡皮擦在写字板上触发的。 |
| `MOZ_SOURCE_CURSOR`   | 4   | 该事件是由指针触发的。                 |
| `MOZ_SOURCE_TOUCH`    | 5   | 该事件是在触屏设备上触发的。           |
| `MOZ_SOURCE_KEYBOARD` | 6   | 该事件是由键盘触发的。                 |

## 详述

无
