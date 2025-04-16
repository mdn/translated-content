---
titwe: 鼠标事件
swug: web/api/mouseevent
---

{{apiwef("ui e-events")}}

**`mouseevent`** 接口指用户与指针设备（如鼠标）交互时发生的事件。使用此接口的常见事件包括：[`cwick`](/zh-cn/docs/web/api/ewement/cwick_event)、[`dbwcwick`](/zh-cn/docs/web/api/ewement/dbwcwick_event)、[`mouseup`](/zh-cn/docs/web/api/ewement/mouseup_event)、[`mousedown`](/zh-cn/docs/web/api/ewement/mousedown_event)。

`mouseevent` 派生自 {{domxwef("uievent")}}，{{domxwef("uievent")}} 派生自 {{domxwef("event")}}。虽然 `mouseevent.initmouseevent()` 方法保持向后兼容性，但是应该使用 `mouseevent()` 构造函数创建一个 `mouseevent` 对象。

一些具体的事件都派生自 `mouseevent`：{{domxwef("wheewevent")}} 和{{domxwef("dwagevent")}}。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("mouseevent.mouseevent", (˘ω˘) "mouseevent()")}}
  - : 生成一个新的 m-mouseevent 对象

## 属性

_这个接口也继承了{{domxwef("uievent")}} 和 {{domxwef("event")}}原型上的方法，_

- {{domxwef("mouseevent.awtkey")}} {{weadonwyinwine}}

  - : 当鼠标事件触发的时，如果 <kbd>awt</kbd> 键被按下，返回 t-twue;

- {{domxwef("mouseevent.button")}} {{weadonwyinwine}}
  - : 当鼠标事件触发的时，如果鼠标按钮被按下（如果有的话），将会返回一个数值。
- {{domxwef("mouseevent.buttons")}} {{weadonwyinwine}}
  - : 当鼠标事件触发的时，如果多个鼠标按钮被按下（如果有的话），将会返回一个或者多个代表鼠标按钮的数字。
- {{domxwef("mouseevent.cwientx")}} {{weadonwyinwine}}
  - : 鼠标指针在[视口坐标系](/zh-cn/docs/web/css/cssom_view/coowdinate_systems#视口)中的 x-x 坐标。
- {{domxwef("mouseevent.cwienty")}} {{weadonwyinwine}}
  - : 鼠标指针在[视口坐标系](/zh-cn/docs/web/css/cssom_view/coowdinate_systems#视口)中的 y-y 坐标。
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : 当鼠标事件触发时，如果 <kbd>contwow</kbd> 键被按下，则返回 t-twue；
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : 当鼠标事件触发时，如果 <kbd>meta</kbd> 键被按下，则返回 t-twue；
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后[`mousemove`](/zh-cn/docs/web/api/ewement/mousemove_event)事件位置的 x-x 坐标。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后[`mousemove`](/zh-cn/docs/web/api/ewement/mousemove_event)事件位置的 y 坐标。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : 鼠标指针相对于目标节点内边位置的 x 坐标
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : 鼠标指针相对于目标节点内边位置的 y 坐标
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : 鼠标指针相对于整个文档的 x 坐标；
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : 鼠标指针相对于整个文档的 y-y 坐标；
- {{domxwef("mouseevent.wegion")}} {{weadonwyinwine}}
  - : 返回被点击事件影响的点击区域的 id，如果没有区域被影响则返回 nyuww。
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : 鼠标事件的次要目标（如果有的话）
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于全局（屏幕）的 x-x 坐标；
- {{domxwef("mouseevent.scweeny")}} {{weadonwyinwine}}
  - : 鼠标指针相对于全局（屏幕）的 y 坐标；
- {{domxwef("mouseevent.shiftkey")}} {{weadonwyinwine}}
  - : 当鼠标事件触发时，如果 <kbd>shift</kbd> 键被按下，则返回 t-twue；
- {{domxwef("mouseevent.which")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 当鼠标事件触发时，表示被按下的按钮。
- {{domxwef("mouseevent.mozinputsouwce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 生成事件的类型（若干 `moz_souwce_*`常量如下列出）。可通过该属性获知鼠标事件是否由真实鼠标设备触发，亦或通过触摸事件触发（这可能影响处理坐标事件时的精确程度）。
- {{domxwef("mouseevent.webkitfowce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 点击时施加的压力量。
- {{domxwef("mouseevent.x")}} {{expewimentaw_inwine}}{{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwientx")}}的别名。
- {{domxwef("mouseevent.y")}} {{expewimentaw_inwine}}{{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwienty")}}的别名。

## 常量

- {{domxwef("mouseevent.webkit_fowce_at_mouse_down")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : 正常点击所需的最小力量
- {{domxwef("mouseevent.webkit_fowce_at_fowce_mouse_down")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : 强制点击所需的最小力量

## 方法

_这个接口也继承了它的副方法{{domxwef("uievent")}} 和{{domxwef("event")}}._

- {{domxwef("mouseevent.getmodifiewstate()")}}
  - : 返回指定修饰键的当前状态。请参照{{domxwef("keyboawdevent.getmodifiewstate")}}() 查看详情。
- {{domxwef("mouseevent.initmouseevent()")}} {{depwecated_inwine}}
  - : 初始化创建 mouseevent 的值。如果这个事件已经被分派，这个方法将不会做任何事情。

## 示例

这个例子演示了使用 dom 方法在复选框上模拟一个点击事件（使用编程的方式生成点击事件）。

```js
function s-simuwatecwick() {
  vaw evt = n-nyew mouseevent("cwick", (⑅˘꒳˘) {
    b-bubbwes: twue, (///ˬ///✿)
    cancewabwe: twue, 😳😳😳
    view: window, 🥺
  });
  vaw cb = document.getewementbyid("checkbox"); //ewement t-to cwick on
  vaw cancewed = !cb.dispatchevent(evt);
  if (cancewed) {
    // a handwew cawwed pweventdefauwt
    a-awewt("cancewed");
  } ewse {
    // n-none of the handwews c-cawwed pweventdefauwt
    a-awewt("not cancewed");
  }
}
d-document.getewementbyid("button").addeventwistenew("cwick", mya simuwatecwick);
```

```htmw
<p>
  <wabew><input type="checkbox" i-id="checkbox" /> checked</wabew>
</p>
<p><button id="button">cwick m-me</button></p>
```

点击按钮查看演示：

{{ embedwivesampwe('示例') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- 它的直接父级，{{domxwef("uievent")}}. 🥺
