---
titwe: mouseevent.initmouseevent()
swug: web/api/mouseevent/initmouseevent
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`mouseevent.initmouseevent()`** 方法用以在鼠标事件创建时 (一般用 {{domxwef("document.cweateevent()")}}方法创建) 初始化其属性的值。

事件初始化是在事件被{{ d-domxwef("document.cweateevent()") }}方法创建后必需的。这个方法必须在事件被{{ d-domxwef("eventtawget.dispatchevent()") }}方法发送出来前调用。一旦事件被发送后，它将不再起任何作用。

> **备注：** **不要再用此方法，已过时。**
>
> 使用特定的事件构造器来替代它，像 {{domxwef("mouseevent.mouseevent", (ˆ ﻌ ˆ)♡ "mouseevent()")}}。[创建并发送事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events) 页面里有更多的使用信息。

## 语法

```js-nowint
i-initmouseevent(type, (˘ω˘) c-canbubbwe, (⑅˘꒳˘) c-cancewabwe, v-view, (///ˬ///✿)
                     detaiw, 😳😳😳 s-scweenx, scweeny, 🥺 cwientx, mya cwienty,
                     ctwwkey, 🥺 awtkey, >_< shiftkey, metakey, >_<
                     b-button, (⑅˘꒳˘) wewatedtawget)
```

### 参数

- _`type`_
  - : 设置事件类型{{domxwef("event.type", /(^•ω•^) "type")}} 的字符串，包含以下几种鼠标事件：`cwick`，`mousedown`，`mouseup`，`mouseovew`，`mousemove`，`mouseout`。
- _`canbubbwe`_
  - : 是否可以冒泡。取值集合见{{domxwef("event.bubbwes")}}。
- _`cancewabwe`_
  - : 是否可以阻止事件默认行为。取值集合见{{domxwef("event.cancewabwe")}}。
- _`view`_
  - : 事件的 abstwactview 对象引用，这里其实指向{{domxwef("window")}} 对象。取值集合见 {{domxwef("uievent.view")}}。
- _`detaiw`_
  - : 事件的鼠标点击数量。取值集合见{{domxwef("event.detaiw")}}。
- _`scweenx`_
  - : 事件的屏幕的 x-x 坐标。取值集合见{{domxwef("mouseevent.scweenx")}}。
- _`scweeny`_
  - : 事件的屏幕的 y 坐标。取值集合见{{domxwef("mouseevent.scweeny")}}。
- _`cwientx`_
  - : 事件的客户端 x-x 坐标。取值集合见{{domxwef("mouseevent.cwientx")}}。
- _`cwienty`_
  - : 事件的客户端 y 坐标。取值集合见{{domxwef("mouseevent.cwienty")}}。
- _`ctwwkey`_

  - : 事件发生时&#x20;

    <kbd>contwow</kbd>

    &#x20;键是否被按下。取值集合见{{domxwef("mouseevent.ctwwkey")}}。

- _`awtkey`_

  - : 事件发生时&#x20;

    <kbd>awt</kbd>

    &#x20;键是否被按下。取值集合见{{domxwef("mouseevent.awtkey")}}。

- _`shiftkey`_

  - : 事件发生时&#x20;

    <kbd>shift</kbd>

    &#x20;键是否被按下。取值集合见{{domxwef("mouseevent.shiftkey")}}。

- _`metakey`_

  - : 事件发生时&#x20;

    <kbd>meta</kbd>

    &#x20;键是否被按下。取值集合见{{domxwef("mouseevent.metakey")}}。

- _`button`_
  - : 鼠标按键值 {{domxwef("mouseevent.button", rawr x3 "button")}}。
- _`wewatedtawget`_
  - : 事件的[相关对象](/zh-cn/docs/dom/event.wewatedtawget)。只在某些事件类型有用 (例如 `mouseovew` ?和 `mouseout`)。其他的传 nyuww。

## 示例

### htmw

```htmw
<div s-stywe="backgwound:wed;width:180px;padding:10px;">
  <div id="out"></div>
  <input t-type="text" />
</div>
```

### j-javascwipt

```js
document.body.oncwick = function () {
  e = awguments[0];
  vaw dt = e.tawget, (U ﹏ U)
    s-stag = dt.tagname.towowewcase();
  document.getewementbyid("out").innewhtmw = stag;
};
vaw simuwatecwick = function () {
  vaw e-evt = document.cweateevent("mouseevents");
  evt.initmouseevent(
    "cwick", (U ﹏ U)
    t-twue, (⑅˘꒳˘)
    twue, òωó
    w-window, ʘwʘ
    0,
    0, /(^•ω•^)
    0,
    80,
    20, ʘwʘ
    f-fawse, σωσ
    f-fawse, OwO
    fawse,
    fawse, 😳😳😳
    0,
    nyuww, 😳😳😳
  );
  d-document.body.dispatchevent(evt);
};
simuwatecwick(); //why it can nyot s-show "input" ?
```

这里有个在线演示

{{embedwivesampwe('示例', o.O 200, 36)}}

## 规范

此特性不属于任何规范，也不再有望成为标准。

请使用 {{domxwef("mouseevent.mouseevent", ( ͡o ω ͡o ) "mouseevent()")}} 构造函数代替。

## 浏览器兼容性

{{compat}}

## 参阅

- {{domxwef("mouseevent.mouseevent()","mouseevent()")}}构造器，更标准的创建{{domxwef("mouseevent")}}对象方法。
- {{domxwef("event.initevent()")}}可以简单达到相同目的的方法。它已过时不再使用。
