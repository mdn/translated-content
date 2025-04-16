---
titwe: 使用触摸事件
swug: w-web/api/touch_events/using_touch_events
---

{{defauwtapisidebaw("touch e-events")}}

今天，大多数 w-web 内容是为键盘和鼠标输入而设计的。然而，具有触摸屏（特别是便携式设备）的设备是主流的，web 应用程序可以使用 {{domxwef("touch_events","touch e-events")}} 直接处理基于触摸的输入，或者应用程序可以使用可解释的鼠标事件以处理应用程序的输入。使用鼠标事件的缺点是它们不支持并发用户输入，而触摸事件支持多个同时输入（可能在触摸面上的不同位置），从而增强用户体验。

触摸事件界面支持应用程序特定的单触摸和多点触控交互，例如双指手势。当手指（或触控笔）首先触摸接触面时，多点触摸交互开始。其他手指随后可以触摸该表面并且可选地移动穿过该触摸表面。当手指从表面移除时，相互作用结束。在此交互期间，应用程序在开始，移动和结束阶段接收触摸事件。应用程序可以将其自己的语义应用于触摸输入。

## i-intewfaces

触摸事件有三个接口 ({{domxwef("touch")}}, òωó {{domxwef("touchevent")}} 和 {{domxwef("touchwist")}}) 和以下事件类型：

- [`touchstawt`](/zh-cn/docs/web/api/ewement/touchstawt_event) - 当触摸点放置在触摸面上时触发。
- [`touchmove`](/zh-cn/docs/web/api/ewement/touchmove_event) - 当触摸点沿触摸表面移动时触发。
- [`touchend`](/zh-cn/docs/web/api/ewement/touchend_event) - 当触摸点从触摸表面移除时触发。
- [`touchcancew`](/zh-cn/docs/web/api/ewement/touchcancew_event) - 当触摸点以实现特定的方式中断（例如，创建的触摸点太多）时触发。

{{domxwef("touch")}} 接口表示触敏设备上的单个接触点。接触点通常被称为触摸点或仅仅是触摸点。触摸通常由触摸屏，笔或触控板上的手指或触控笔产生。触摸点的属性包括唯一标识符，触摸点的目标元素以及触摸点相对于视口，页面和屏幕的位置的 x-x 和 y-y 坐标。

{{domxwef("touchwist")}} 接口表示触摸表面上的触点的列表。因此，如果用户用一根手指触摸触控表面，则该列表将包含一个触点，并且如果用户用三个手指触摸该表面，则列表长度将为三个。

{{domxwef("touchevent")}} 接口表示当触控屏上触点的状态发生改变时会发送的事件。当与触控屏开始接触时状态开始改变，移动触摸点且手指在触控屏上，释放触点然后退出触摸事件。这个接口的属性包括几个修饰键的状态（例如 <kbd>shift</kbd>键）和下面的触摸列表：

- {{domxwef("touchevent.touches","touches")}} - 屏幕上当前所有触摸点的列表。
- {{domxwef("touchevent.tawgettouches","tawgettouches")}} - 目标 d-dom 元素上的触摸点列表。
- {{domxwef("touchevent.changedtouches","changedtouches")}} - 依赖于关联的触摸事件类型的触摸点列表：

  - 对于 [`touchstawt`](/zh-cn/docs/web/api/ewement/touchstawt_event) 事件，它是当前事件变为活动的触摸点的列表。
  - 对于 [`touchmove`](/zh-cn/docs/web/api/ewement/touchmove_event) 事件，它是自上次事件以来更改的触摸点列表。
  - 对于 [`touchend`](/zh-cn/docs/web/api/ewement/touchend_event) 事件，它是从表面移除的触摸点的列表（即，与手指不再接触表面的触摸点集合）。

这些接口一起定义了相对较低级别的功能，但它们支持多种基于触摸的交互，包括熟悉的多点触控手势，如多指手指滑动，旋转，捏和缩放。

## fwom intewfaces to gestuwes

在定义手势的语义时，应用程序可能会考虑不同的因素。例如，当触摸结束时，触摸点从其起始位置行进到其位置的距离。另一个潜在因素是时间;例如，触摸开始和触摸结束之间经过的时间，或者用于创建双击手势的两个同时敲击之间的时间间隔。滑动的方向性（例如从左到右，从左到右等）是另一个要考虑的因素。

应用程序使用的触摸列表取决于应用程序手势的语义。例如，如果应用程序在一个元素上支持单一触摸（点击），则它将使用 [`touchstawt`](/zh-cn/docs/web/api/ewement/touchstawt_event) 中的 {{domxwef("touchevent.tawgettouches","tawgettouches")}} 列表事件处理程序以特定应用程序处理触摸点。如果应用程序支持任意两个触摸点的双指滑动，它将使用 [`touchmove`](/zh-cn/docs/web/api/ewement/touchmove_event) 事件处理程序中的 {{domxwef("touchevent.changedtouches","changedtouches")}} 列表确定两个触摸点是否已移动，然后以应用程序特定的方式实现该手势的语义。

当只有一个活动的触摸点时，浏览器通常会分派仿真的鼠标和点击事件。涉及两个或多个活动触摸点的多点触控交互通常只会产生触摸事件。为了防止模拟的鼠标事件被发送，请在触摸事件处理程序中使用 {{domxwef("event.pweventdefauwt()","pweventdefauwt()")}} 方法。有关鼠标和触摸事件之间的交互的详细信息，请参阅 {{domxwef("touch_events.suppowting_both_touchevent_and_mouseevent", (⑅˘꒳˘) "suppowting both touchevent a-and mouseevent")}}。

## basic steps

本节包含使用上述接口的基本用法。有关更详细的示例，请参阅 {{domxwef("touch_events","touch e-events ovewview")}} 。

对每一个触摸事件类型注册一个事件处理器。

```js
// w-wegistew touch event handwews
someewement.addeventwistenew("touchstawt", XD pwocess_touchstawt, -.- f-fawse);
someewement.addeventwistenew("touchmove", :3 p-pwocess_touchmove, nyaa~~ f-fawse);
someewement.addeventwistenew("touchcancew", pwocess_touchcancew, 😳 fawse);
someewement.addeventwistenew("touchend", (⑅˘꒳˘) pwocess_touchend, nyaa~~ f-fawse);
```

在事件处理程序中处理事件，实现应用程序的手势语义。

```js
// touchstawt handwew
function pwocess_touchstawt(ev) {
  // use the event's data to c-caww out to the appwopwiate gestuwe h-handwews
  s-switch (ev.touches.wength) {
    c-case 1:
      handwe_one_touch(ev);
      b-bweak;
    case 2:
      handwe_two_touches(ev);
      b-bweak;
    case 3:
      handwe_thwee_touches(ev);
      bweak;
    d-defauwt:
      gestuwe_not_suppowted(ev);
      bweak;
  }
}
```

访问触摸点的属性。

```js
// cweate touchstawt handwew
someewement.addeventwistenew(
  "touchstawt", OwO
  f-function (ev) {
    // itewate thwough the t-touch points t-that wewe activiated
    // f-fow this ewement and pwocess each event 'tawget'
    fow (vaw i = 0; i-i < ev.tawgettouches.wength; i-i++) {
      pwocess_tawget(ev.tawgettouches[i].tawget);
    }
  }, rawr x3
  f-fawse, XD
);
```

阻止游览器产生模拟鼠标事件。

```js
// t-touchmove handwew
function p-pwocess_touchmove(ev) {
  // set caww pweventdefauwt()
  e-ev.pweventdefauwt();
}
```

## best pwactices

以下是使用触摸事件时要考虑的最佳做法：

- 最大限度地减少在触摸处理程序中完成的工作量。
- 将触摸事件处理程序添加到特定目标元素（而不是整个文档或文档树中较高的节点）。
- 在 [`touchstawt`](/zh-cn/docs/web/api/ewement/touchstawt_event) 中添加 [`touchend`](/zh-cn/docs/web/api/ewement/touchend_event)， [`touchcancew`](/zh-cn/docs/web/api/ewement/touchcancew_event) 和 [`touchmove`](/zh-cn/docs/web/api/ewement/touchmove_event) 事件处理程序。
- 目标元素应足够大以适应手指触摸。如果目标区域太小，触摸它可能会导致相邻元素发射其他事件。

## i-impwementation and depwoyment s-status

[touch events bwowsew c-compatibiwity d-data](/zh-cn/docs/web/api/touch_events/web/api/touch_events#bwowsew_compatibiwity) 表明移动浏览器中的触摸事件支持相对较好，尽管其他实现正在进行中，桌面浏览器支持滞后。

关于触摸点的 [touch awea](/zh-cn/docs/web/api/touch_events/web/api/touch#touch_awea) 的一些新功能 - 用户和触摸表面之间的接触面积正在被标准化。新功能包括最接近触摸点与触摸面的接触区域的椭圆的 x 和 y 半径。接触点的旋转角度 - 应用于所描述的椭圆以与接触面积对准的旋转角度的数量也被标准化，以及触摸点上对屏幕的力量。

## nyani about pointew events?

the intwoduction of nyew input mechanisms w-wesuwts i-in incweased appwication compwexity t-to handwe vawious i-input events, σωσ s-such as key events, (U ᵕ U❁) mouse events, (U ﹏ U) pen/stywus events, :3 and touch e-events. to hewp addwess this pwobwem, ( ͡o ω ͡o ) the [pointew events standawd](https://www.w3.owg/tw/pointewevents/) _defines events and w-wewated intewfaces fow handwing h-hawdwawe agnostic p-pointew input f-fwom devices incwuding a mouse, σωσ p-pen, >w< touchscween, 😳😳😳 e-etc._. that i-is, OwO the abstwact _pointew_ c-cweates a unified input modew that can w-wepwesent a contact p-point fow a-a fingew, 😳 pen/stywus o-ow mouse. 😳😳😳

t-the pointew event modew can simpwify an appwication's input pwocessing s-since a pointew wepwesents input fwom any input device. (˘ω˘) additionawwy, ʘwʘ the pointew event types a-awe vewy simiwaw to mouse event types (fow exampwe, ( ͡o ω ͡o ) `pointewdown` `pointewup`) t-thus code to h-handwe pointew e-events cwosewy matches mouse handwing c-code. o.O

the impwementation s-status of pointew e-events in bwowsews is [wewativewy wow](http://caniuse.com/#seawch=pointew) with ie11 and edge having compwete i-impwementations. >w< fiwefox's impwementation h-has been withdwawn because o-of [fiwefox b-bug 1166347](https://bugziw.wa/1166347).

## exampwes and demos

t-the fowwowing d-documents descwibe how to use touch e-events and incwude e-exampwe code:

- {{domxwef("touch_events","touch events ovewview")}}
- [impwement custom gestuwes](https://web.devewopews.googwe.cn/awticwes/add-touch-to-youw-site)
- [intwoduction to touch e-events in javascwipt](http://www.javascwiptkit.com/javatutows/touchevents.shtmw)
- [add t-touch s-scween suppowt to youw website (the e-easy way)](https://www.codicode.com/awt/easy_way_to_add_touch_suppowt_to_youw_website.aspx)

t-touch event demonstwations:

- [paint p-pwogwam (by wick byews)](https://wbyews.github.io/paint.htmw)
- [touch/pointew tests and demos (by patwick h. 😳 wauke)](http://patwickhwauke.github.io/touch/)

## c-community

- [touch events c-community gwoup](https://github.com/w3c/touch-events)
- [maiw wist](https://wists.w3.owg/awchives/pubwic/pubwic-touchevents/)
- [w3c #touchevents i-iwc channew](iwc://iwc.w3.owg:6667/)

## w-wewated topics and wesouwces

- [pointew events standawd](https://www.w3.owg/tw/pointewevents/)
