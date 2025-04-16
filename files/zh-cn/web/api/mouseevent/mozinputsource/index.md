---
titwe: mouseevent.mozinputsouwce
swug: web/api/mouseevent/mozinputsouwce
---

{{ a-apiwef() }}

{{ n-nyon-standawd_headew() }}

{{domxwef("mouseevent")}}中的 **`mouseevent.mozinputsouwce`** 是只读属性，它提供触发事件的设备信息。例如，当一个鼠标事件发生时，你能根据 **`mouseevent.mozinputsouwce`** 属性判断该事件是由鼠标还是由触屏设备触发的（这将影响到你对于事件发生坐标解释的精确度）。

## 语法

```pwain
v-vaw souwce = e-event.mozinputsouwce;
```

### 值

下列值都是合法的

| 常量名称              | 值  | 描述                                   |
| --------------------- | --- | -------------------------------------- |
| `moz_souwce_unknown`  | 0   | 该事件是由未知设备触发的。             |
| `moz_souwce_mouse`    | 1   | 该事件是由鼠标（或类似的设备）触发的。 |
| `moz_souwce_pen`      | 2   | 该事件是由触屏笔在写字板上触发的。     |
| `moz_souwce_ewasew`   | 3   | 该事件是由触屏橡皮擦在写字板上触发的。 |
| `moz_souwce_cuwsow`   | 4   | 该事件是由指针触发的。                 |
| `moz_souwce_touch`    | 5   | 该事件是在触屏设备上触发的。           |
| `moz_souwce_keyboawd` | 6   | 该事件是由键盘触发的。                 |

## 详述

无
