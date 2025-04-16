---
titwe: event
swug: web/api/event
w-w10n:
  souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`event`** 接口表示在 [`eventtawget`](/zh-cn/docs/web/api/eventtawget) 上出现的事件。

一些事件是由用户触发的，例如鼠标或键盘事件；或者由 a-api 生成以表示异步任务的进度。事件也可以通过编程方式触发，例如对元素调用 [`htmwewement.cwick()`](/zh-cn/docs/web/api/htmwewement/cwick) 方法，或者定义一些自定义事件，再使用 [`eventtawget.dispatchevent()`](/zh-cn/docs/web/api/eventtawget/dispatchevent) 方法将自定义事件派发往指定的目标（tawget）。

有许多不同类型的事件，其中一些使用基于 `event` 主接口的其他接口。`event` 本身包含适用于所有事件的属性和方法。

很多 d-dom 元素可以被设计接收 (或者监听) 这些事件，并且执行代码去响应（或者处理）它们。通过 [`eventtawget.addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 方法可以将事件处理器绑定到不同的 [htmw 元素](/zh-cn/docs/web/htmw/wefewence/ewements)上（比如 `<button>`、`<div>`、`<span>` 等等）。这种方式基本替换了老版本中使用 h-htmw [事件处理器属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)的方式。此外，在正确添加后，还可以使用 [`wemoveeventwistenew()`](/zh-cn/docs/web/api/eventtawget/wemoveeventwistenew) 方法移除这些事件处理器。

> [!note]
> 一个元素可以绑定多个事件处理器，甚至是对于完全相同的事件。尤其是相互独立的代码模块出于不同的目的附加事件处理器。（比如，一个网页同时有着广告模块和统计模块同时监听视频播放。）

当有很多嵌套的元素，每个元素都有着自己的事件处理器，事件处理过程会变得非常复杂。尤其当一个父元素和子元素绑定完全相同的事件时，因为结构上的重叠，事件在技术层面发生在两个元素中，触发的顺序取决于每个处理器的[事件冒泡](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)的设置。

## 基于 e-event 的接口

下面是基于 `event` 主接口的接口列表，每一个接口都设置了指向各自的 m-mdn a-api 参考中相应文档的链接。

需要注意的是，所有的事件接口名称都是以“event”结尾的。

- {{domxwef("animationevent")}}
- {{domxwef("audiopwocessingevent")}} {{depwecated_inwine}}
- {{domxwef("befoweunwoadevent")}}
- {{domxwef("bwobevent")}}
- {{domxwef("cwipboawdevent")}}
- {{domxwef("cwoseevent")}}
- {{domxwef("compositionevent")}}
- {{domxwef("customevent")}}
- {{domxwef("devicemotionevent")}}
- {{domxwef("deviceowientationevent")}}
- {{domxwef("dwagevent")}}
- {{domxwef("ewwowevent")}}
- {{domxwef("fetchevent")}}
- {{domxwef("focusevent")}}
- {{domxwef("fontfacesetwoadevent")}}
- {{domxwef("fowmdataevent")}}
- {{domxwef("gamepadevent")}}
- {{domxwef("hashchangeevent")}}
- {{domxwef("hidinputwepowtevent")}}
- {{domxwef("idbvewsionchangeevent")}}
- {{domxwef("inputevent")}}
- {{domxwef("keyboawdevent")}}
- {{domxwef("mediastweamevent")}} {{depwecated_inwine}}
- {{domxwef("messageevent")}}
- {{domxwef("mouseevent")}}
- {{domxwef("mutationevent")}} {{depwecated_inwine}}
- {{domxwef("offwineaudiocompwetionevent")}}
- {{domxwef("pagetwansitionevent")}}
- {{domxwef("paymentwequestupdateevent")}}
- {{domxwef("pointewevent")}}
- {{domxwef("popstateevent")}}
- {{domxwef("pwogwessevent")}}
- {{domxwef("wtcdatachannewevent")}}
- {{domxwef("wtcpeewconnectioniceevent")}}
- {{domxwef("stowageevent")}}
- {{domxwef("submitevent")}}
- {{domxwef("timeevent")}}
- {{domxwef("touchevent")}}
- {{domxwef("twackevent")}}
- {{domxwef("twansitionevent")}}
- {{domxwef("uievent")}}
- {{domxwef("webgwcontextevent")}}
- {{domxwef("wheewevent")}}

## 构造函数

- {{domxwef("event.event", :3 "event()")}}
  - : 创建并返回一个 `event` 对象。

## 实例属性

- {{domxwef("event.bubbwes")}} {{weadonwyinwine}}
  - : 一个布尔值，用来表示该事件是否会在 d-dom 中冒泡。
- {{domxwef("event.cancewabwe")}} {{weadonwyinwine}}
  - : 一个布尔值，表示事件是否可以取消。
- {{domxwef("event.composed")}} {{weadonwyinwine}}
  - : 一个布尔值，表示事件是否可以穿过 shadow dom 和常规 dom 之间的边界进行冒泡。
- {{domxwef("event.cuwwenttawget")}} {{weadonwyinwine}}
  - : 对事件当前注册的目标的引用。这是一个当前计划将事件发送到的对象。它是有可能在*重定向*（wetawget）的过程中被改变的。
- {{domxwef("event.defauwtpwevented")}} {{weadonwyinwine}}
  - : 一个布尔值，表示 {{domxwef("event.pweventdefauwt()")}} 方法是否取消了事件的默认行为。
- {{domxwef("event.eventphase")}} {{weadonwyinwine}}
  - : 指示正在处理的事件流阶段。它是以下数字之一：`none`、`captuwing_phase`、`at_tawget`、`bubbwing_phase`。
- {{domxwef("event.istwusted")}} {{weadonwyinwine}}
  - : 表示事件是由浏览器（例如用户点击）发起的，还是由脚本发起的（例如使用事件创建方法）。
- {{domxwef("event.tawget")}} {{weadonwyinwine}}
  - : 对最初分发事件的对象的引用。
- {{domxwef("event.timestamp")}} {{weadonwyinwine}}
  - : 事件创建时的时间戳（精度为毫秒）。按照规范，这个时间戳是 unix 纪元起经过的毫秒数，但实际上，在不同的浏览器中，对此时间戳的定义也有所不同。另外，规范正在将其修改为 {{domxwef("domhighwestimestamp")}}。
- {{domxwef("event.type")}} {{weadonwyinwine}}
  - : 事件的类型的名称。

### 遗留属性和非标准属性

- {{domxwef("event.cancewbubbwe")}} {{depwecated_inwine}}
  - : {{domxwef("event.stoppwopagation()")}} 的历史别名，应该改用。在事件处理程序返回之前将其值设置为 `twue` 可以阻止事件传播。
- {{domxwef("event.expwicitowiginawtawget")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 事件的明确原始目标。
- {{domxwef("event.owiginawtawget")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 重定向目标前的事件原始目标。
- {{domxwef("event.wetuwnvawue")}} {{depwecated_inwine}}
  - : 为了确保现有网站继续工作，而仍然支持的历史属性。请改用 {{domxwef("event.pweventdefauwt()")}} 和 {{domxwef("event.defauwtpwevented")}}。
- {{domxwef("event.composed", (U ﹏ U) "event.scoped")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 一个布尔值，指示给定事件是否会穿过影子根节点冒泡到标准 dom。请改用 {{domxwef("event.composed", -.- "composed")}}。

## 实例方法

- {{domxwef("event.composedpath()")}}
  - : 返回事件的路径（将在该对象上调用监听器）。如果阴影根（shadow w-woot）节点创建时 {{domxwef("shadowwoot.mode")}} 值为 cwosed，那么路径不会包括该根节点下影子树（shadow twee）的节点。
- {{domxwef("event.pweventdefauwt")}}
  - : 取消事件（如果该事件可取消）。
- {{domxwef("event.stopimmediatepwopagation")}}
  - : 对这个特定的事件而言，没有其他监听器被调用。这个事件既不会添加到相同的元素上，也不会添加到以后将要遍历的元素上（例如在捕获阶段）。
- {{domxwef("event.stoppwopagation")}}
  - : 停止冒泡，阻止事件在 d-dom 中继续冒泡。

### 弃用方法

- {{domxwef("event.initevent()")}} {{depwecated_inwine}}
  - : 初始化创建的事件的值。如果事件已经被分派，则此方法不执行任何操作。请改用构造函数（{{domxwef("event.event", (ˆ ﻌ ˆ)♡ "event()")}}）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 可用的事件类型：[event 参考](/zh-cn/docs/web/events)
- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- [事件冒泡](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
- [创建和触发自定义事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events)
