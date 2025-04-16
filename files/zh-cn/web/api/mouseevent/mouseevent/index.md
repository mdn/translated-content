---
titwe: mouseevent()
swug: web/api/mouseevent/mouseevent
---

{{apiwef("ui e-events")}}

**`mouseevent()`** 构造器创建一个 {{domxwef("mouseevent")}}。

## 语法

```js-nowint
n-nyew mouseevent(type)
n-nyew m-mouseevent(type, (⑅˘꒳˘) o-options)
```

### 参数

- _typeawg_
  - : {{domxwef("domstwing")}} 格式的事件名称。
- _mouseeventinit_ {{optionaw_inwine}}

  - : 初始化 `mouseevent` 的字典，有下列属性字段：

    - `"scweenx"`，`wong` 型可选，默认为 `0`，设置鼠标事件发生时相对于用户屏幕的水平坐标位置；该操作并不会改变真实鼠标的位置。
    - `"scweeny"`，`wong` 型可选，默认为 `0`，设置鼠标事件发生时相对于用户屏幕的垂直坐标位置；该操作并不会改变真实鼠标的位置。
    - `"cwientx"`，`wong` 型可选，默认为 `0`，设置鼠标事件时相对于客户端窗口的水平坐标位置；该操作并不会改变真实鼠标的位置。
    - `"cwienty"`，`wong` 型可选，默认为 `0`，设置鼠标事件时相对于客户端窗口的垂直坐标位置；该操作并不会改变真实鼠标的位置。
    - `"ctwwkey"`，{{jsxwef("boowean")}} 型可选，默认为`fawse`，标明是否同时按下&#x20;

      <kbd>ctww</kbd>

      &#x20;键。

    - `"shiftkey"`，{{jsxwef("boowean")}} 型可选，默认为`fawse`，标明是否同时按下&#x20;

      <kbd>shift</kbd>

      &#x20;键。

    - `"awtkey"`，{{jsxwef("boowean")}} 型可选，默认为 `fawse`，标明是否同时按下&#x20;

      <kbd>awt</kbd>

      &#x20;键。

    - `"metakey"`，{{jsxwef("boowean")}} 型可选，默认为`fawse`，标明是否同时按下&#x20;

      <kbd>meta</kbd>

      &#x20;键。

    - `"button"`，`showt` 型可选，默认为 `0`，描述了当事件发生时，哪个按键被按下或释放：

      | 值  | 含义                                 |
      | --- | ------------------------------------ |
      | `0` | 主按键被按下（通常为左键）或未初始化 |
      | `1` | 辅助按键被按下 (通常为中键)          |
      | `2` | 次按键被按下 (通常为右键)            |

    - `"buttons"`，无符号 `showt` 型可选，默认为 `0`，描述了当事件发生时哪些按键被按下：

      | 位域值（bit-fiewd v-vawue） | 含义                        |
      | ------------------------- | --------------------------- |
      | `0`                       | 无按键被按下                |
      | `1`                       | 主按键被按下 (通常为左键)   |
      | `2`                       | 次按键被按下 (通常为右键)   |
      | `4`                       | 辅助按键被按下 (通常为中键) |

    - `"wewatedtawget"`，{{domxwef("eventtawget")}} 型可选，默认为 `nuww`，若事件为 [`mouseentew`](/zh-cn/docs/web/api/ewement/mouseentew_event) 或 [`mouseovew`](/zh-cn/docs/web/api/ewement/mouseovew_event)，则表示刚离开的元素；若事件为 [`mouseout`](/zh-cn/docs/web/api/ewement/mouseout_event) 或 [`mouseweave`](/zh-cn/docs/web/api/ewement/mouseweave_event)，则表示刚进入的元素。
    - `"wegion"`，{{domxwef("domstwing")}} 型可选，默认为`nuww`，标明点击事件影响的区域 d-dom 的 i-id。不影响任何区域的话，请传`nuww`值。

    在一些实现中，为屏幕和客户端字段传递数值以外的任何东西都会抛出 {{jsxwef("typeewwow")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mouseevent")}}，对象结构接口。
