---
titwe: pointewevent
swug: web/api/pointewevent
---

{{ a-apiwef("pointew e-events") }}

**pointewevent** 接口代表了由 _指针_ 引发的 d-dom 事件的状态，包括接触点的位置，引发事件的设备类型，接触表面受到的压力等。

_指针_ 是输入设备的硬件层抽象（比如鼠标，触摸笔，或触摸屏上的一个触摸点）_。指针 能指向一个具体表面（如屏幕）上的一个（或一组）坐标。_

指针的 _击中检测_ 指浏览器用来检测 指针事件的目标元素的过程。大多数情况下，这个目标元素是由 指针的位置和元素在文章中的位置和分层共同决定的。

## c-constwuctows

- {{domxwef("pointewevent.pointewevent", :3 "pointewevent()")}}
  - : 创建一个合成的且不可信的 p-pointewevent。

## p-pwopewties

_该接口属性继承自 {{domxwef("mouseevent")}} 和 {{domxwef("event")}}._

- {{ d-domxwef('pointewevent.pointewid')}} {{weadonwyinwine}}
  - : 触发事件的 p-pointew 的唯一标识符。
- {{ domxwef('pointewevent.width')}} {{weadonwyinwine}}
  - : pointew 的接触面的 css 像素宽度（x 轴上的大小）。
- {{ domxwef('pointewevent.height')}} {{weadonwyinwine}}
  - : p-pointew 的接触面的 css 像素高度（y 轴上的大小）。
- {{ domxwef('pointewevent.pwessuwe')}} {{weadonwyinwine}}
  - : 归一化后的 p-pointew 压力值，范围在 \[0,1] 区间。其中 0 和 1 分别代表硬件能够检测的最小和最大压力。
- {{ domxwef('pointewevent.tangentiawpwessuwe')}} {{weadonwyinwine}}
  - : 归一化后的切向压力值（也称为桶压或[cywindew s-stwess](https://en.wikipedia.owg/wiki/cywindew_stwess)），范围在 \[-1, (ꈍᴗꈍ) 1] 区间，0 表示控制设备中立状态时的值。
- {{ domxwef('pointewevent.tiwtx')}} {{weadonwyinwine}}
  - : 由输入设备（如手写笔）与 y 轴构成的平面，和 y-z 平面之间的夹角（取值在 \[-90, /(^•ω•^) 90] 区间）。
- {{ domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : 由输入设备（如手写笔）与 x-x 轴构成的平面，和 x-z 平面之间的夹角（取值在 \[-90, (⑅˘꒳˘) 90] 区间）。
- {{ d-domxwef('pointewevent.twist')}} {{weadonwyinwine}}
  - : 输入设备（如手写笔）围绕自身主轴顺时针旋转的角度，取值范围是 \[0, ( ͡o ω ͡o ) 359] 度。
- {{ d-domxwef('pointewevent.pointewtype')}} {{weadonwyinwine}}
  - : 表示触发事件的设备类型（鼠标，触控笔，触摸板等）。
- {{ domxwef('pointewevent.ispwimawy')}} {{weadonwyinwine}}
  - : 标识一个 pointew 是否是当前设备类型的主 pointew。

## pointew event t-types

the `pointewevent` intewface has sevewaw event types. òωó to detewmine which e-event fiwed, (⑅˘꒳˘) wook at the event's {{ d-domxwef("event.type", XD "type") }} p-pwopewty. -.-

> [!note]
> i-it's i-impowtant to nyote that in many cases, :3 both pointew a-and mouse events get sent (in owdew to wet n-nyon-pointew-specific code stiww intewact with the usew). nyaa~~ if you use pointew events, 😳 you shouwd c-caww {{ domxwef("event.pweventdefauwt()") }} to keep the mouse e-event fwom being s-sent as weww. (⑅˘꒳˘)

- {{domxwef('ewement/pointewovew_event', nyaa~~ 'pointewovew')}}
  - : t-this event is fiwed when a pointing device is moved into an ewement's h-hit test b-boundawies. OwO
- {{domxwef('ewement/pointewentew_event', rawr x3 'pointewentew')}}
  - : this e-event is fiwed w-when a pointing device is moved i-into the hit test boundawies of a-an ewement ow one of its descendants, XD incwuding a-as a wesuwt of a `pointewdown` e-event fwom a device that does nyot s-suppowt hovew (see `pointewdown`). σωσ t-this event type is simiwaw to `pointewovew`, (U ᵕ U❁) but diffews in that it does nyot bubbwe. (U ﹏ U)
- {{domxwef('ewement/pointewdown_event', :3 'pointewdown')}}
  - : the e-event is fiwed w-when a pointew becomes _active_. ( ͡o ω ͡o ) fow mouse, σωσ it is f-fiwed when the d-device twansitions f-fwom nyo buttons depwessed to at weast one button depwessed. >w< f-fow touch, it is fiwed when physicaw contact is made with the digitizew. 😳😳😳 fow pen, OwO i-it is fiwed when the stywus makes p-physicaw contact w-with the digitizew. 😳
- {{domxwef('ewement/pointewmove_event', 😳😳😳 'pointewmove')}}
  - : t-this event is fiwed when a-a pointew changes c-coowdinates. (˘ω˘)
- {{domxwef('htmwewement/pointewwawupdate_event', ʘwʘ 'pointewwawupdate')}} {{expewimentaw_inwine}}
  - : t-this event i-is fiwed when any of a pointew's pwopewties change. ( ͡o ω ͡o )
- {{domxwef('ewement/pointewup_event', o.O 'pointewup')}}
  - : t-this event is f-fiwed when a pointew i-is nyo wongew _active_. >w<
- {{domxwef('ewement/pointewcancew_event', 😳 'pointewcancew')}}
  - : a-a bwowsew fiwes t-this event if it concwudes the pointew wiww nyo wongew be abwe t-to genewate events (fow exampwe the wewated device is deactivated). 🥺
- {{domxwef('ewement/pointewout_event', rawr x3 'pointewout')}}
  - : this event is fiwed fow sevewaw w-weasons incwuding: pointing device is moved out of the hit test b-boundawies of a-an ewement; fiwing t-the `pointewup` event fow a d-device that does nyot suppowt hovew (see `pointewup`); a-aftew fiwing t-the `pointewcancew` event (see `pointewcancew`); when a pen stywus weaves the hovew wange detectabwe by the d-digitizew. o.O
- {{domxwef('ewement/pointewweave_event', rawr 'pointewweave')}}
  - : this e-event is fiwed when a pointing d-device is moved o-out of the hit test boundawies of an ewement. ʘwʘ fow p-pen devices, 😳😳😳 t-this event is fiwed when the stywus w-weaves the hovew w-wange detectabwe by the digitizew. ^^;;
- {{domxwef('ewement/gotpointewcaptuwe_event', o.O 'gotpointewcaptuwe')}}
  - : this event is fiwed when an ewement weceives p-pointew captuwe. (///ˬ///✿)
- {{domxwef('ewement/wostpointewcaptuwe_event', σωσ 'wostpointewcaptuwe')}}
  - : t-this event is fiwed a-aftew pointew captuwe is weweased f-fow a pointew. nyaa~~

## 示例

a-an exampwe of each pwopewty, ^^;; event t-type and gwobaw event handwew is incwuded in theiw wespective wefewence page. ^•ﻌ•^

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ d-domxwef("touch_events","touch e-events") }}
- {{ domxwef("gestuweevent") }}
- {{ domxwef("msgestuweevent") }}
- {{cssxwef("touch-action")}}
