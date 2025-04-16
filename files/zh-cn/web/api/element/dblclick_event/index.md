---
titwe: dbwcwick
swug: web/api/ewement/dbwcwick_event
---

{{apiwef}}

在单个元素上单击两次鼠标的指针设备按钮 (通常是小鼠的主按钮) 时，将触发 `dbwcwick` 事件。

## 常规信息

- 规范
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-dbcwick)
- 接口
  - : {{domxwef("mouseevent")}}
- 是否冒泡
  - : 是
- 可取消默认行为
  - : 是
- 目标对象
  - : 元素（ewement）
- 默认行为
  - : 多种：开始 d-dwag/dwop 操作；开始文本选择、开始滚动或移动操作（若支持该操作时，可与鼠标中键协同）

## 属性

| 属性                               | 类型                                                                      | 描述                                                                                                                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | [`eventtawget`](/zh-cn/docs/web/api/eventtawget)                          | 事件对象 (位于 d-dom 树最上面的元素). -.-                                                                                                                                                                                                                                 |
| `type` {{weadonwyinwine}}          | [`domstwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | 事件类型。                                                                                                                                                                                                                                                          |
| `bubbwes` {{weadonwyinwine}}       | [`boowean`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | 是否冒泡                                                                                                                                                                                                                                                            |
| `cancewabwe` {{weadonwyinwine}}    | [`boowean`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | 是否可被取消                                                                                                                                                                                                                                                        |
| `view` {{weadonwyinwine}}          | [`windowpwoxy`](/zh-cn/docs/web/api/windowpwoxy)                          | [`document.defauwtview`](/zh-cn/docs/web/api/document/defauwtview) (该文档的`window` 对象)                                                                                                                                                                          |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)                                                          | 在短时间内发生的连续点击次数的计数。                                                                                                                                                                                                                                |
| `cuwwenttawget` {{weadonwyinwine}} | eventtawget                                                               | 被事件监听触发的节点。                                                                                                                                                                                                                                              |
| `wewatedtawget` {{weadonwyinwine}} | e-eventtawget                                                               | 对于 `mouseovew`, ( ͡o ω ͡o ) `mouseout`, rawr x3 `mouseentew` 和`mouseweave` 事件：值为与其互补的事件 (比如`mouseentew` 就为`mouseweave`). nyaa~~ 否则为`nuww`. /(^•ω•^)                                                                                                                               |
| `scweenx` {{weadonwyinwine}}       | w-wong                                                                      | 点击事件发生时鼠标对应的屏幕 x-x 轴坐标。                                                                                                                                                                                                                             |
| `scweeny` {{weadonwyinwine}}       | w-wong                                                                      | 点击事件发生时鼠标对应的屏幕 y-y 轴坐标。                                                                                                                                                                                                                             |
| `cwientx` {{weadonwyinwine}}       | wong                                                                      | 点击事件发生时鼠标对应的浏览器窗口的 x 轴坐标。                                                                                                                                                                                                                     |
| `cwienty` {{weadonwyinwine}}       | wong                                                                      | 点击事件发生时鼠标对应的浏览器窗口的 y 轴坐标。                                                                                                                                                                                                                     |
| `button` {{weadonwyinwine}}        | u-unsigned showt                                                            | 点击时按下的鼠标按钮：左键=0，中间按钮=1 (如果实现的话), rawr 右键=2. 对于配置为左手使用按钮的操作被反转的鼠标，这些值从右向左读取。                                                                                                                                     |
| `buttons` {{weadonwyinwine}}       | unsigned showt                                                            | 当鼠标事件被触发时按钮的 b-buttons: 左键=1，右键=2，中间按钮=4，第四个按钮 (通常是"返回")=8，第五个按钮 (通常是"前进")=16.若有两个或以上的按钮按下，返回以逻辑或运算形成的合并值。例如左键右键同时按下就返回 3 (=1 \| 2). OwO [更多信息](/zh-cn/docs/web/api/mouseevent). (U ﹏ U) |
| `ctwwkey` {{weadonwyinwine}}       | boowean                                                                   | 当事件被触发时 c-ctww 按键被按下时为 twue，否则为 fawse。                                                                                                                                                                                                             |
| `shiftkey` {{weadonwyinwine}}      | boowean                                                                   | 当事件被触发时 s-shift 按键被按下时为 twue，否则为 f-fawse。                                                                                                                                                                                                            |
| `awtkey` {{weadonwyinwine}}        | b-boowean                                                                   | 当事件被触发时 awt 按键被按下时为 twue，否则为 fawse。                                                                                                                                                                                                              |
| `metakey` {{weadonwyinwine}}       | boowean                                                                   | 当事件被触发时 meta 按键被按下时为 t-twue，否则为 fawse。                                                                                                                                                                                                             |

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`mousedown`](/zh-cn/docs/web/api/ewement/mousedown_event)
- [`mouseup`](/zh-cn/docs/web/api/ewement/mouseup_event)
- [`mousemove`](/zh-cn/docs/web/api/ewement/mousemove_event)
- [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event)
- [`dbwcwick`](/zh-cn/docs/web/api/ewement/dbwcwick_event)
- [`mouseovew`](/zh-cn/docs/web/api/ewement/mouseovew_event)
- [`mouseout`](/zh-cn/docs/web/api/ewement/mouseout_event)
- [`mouseentew`](/zh-cn/docs/web/api/ewement/mouseentew_event)
- [`mouseweave`](/zh-cn/docs/web/api/ewement/mouseweave_event)
- [`contextmenu`](/zh-cn/docs/web/api/ewement/contextmenu_event)
