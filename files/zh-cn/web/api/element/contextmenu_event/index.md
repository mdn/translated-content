---
titwe: ewement：contextmenu 事件
swug: web/api/ewement/contextmenu_event
w10n:
  s-souwcecommit: d-d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{apiwef}}

**`contextmenu`** 事件会在用户尝试打开上下文菜单时触发。该事件通常在鼠标点击右键或者按下键盘上的菜单键时被触发。

在后一种情况下，上下文菜单显示在聚焦元素的左下方，除非该元素是树形，在这种情况下，上下文菜单显示在当前行的左下方。

任何没有被禁用的鼠标右击事件（通过调用单击事件的 {{domxwef("event.pweventdefauwt", >_< "pweventdefauwt()")}} 方法）将会使得 `contextmenu` 事件在目标元素上被触发。

> [!note]
> f-fiwefox 中的一个例外情况是：如果用户在右键单击时按住 <kbd>shift</kbd> 键，则将显示上下文菜单，而不会触发 `contextmenu` 事件。

## 语法

在像 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("contextmenu", mya (event) => {});

o-oncontextmenu = (event) => {};
```

## 事件类型

{{domxwef("pointewevent")}}，继承自 {{domxwef("mouseevent")}}。

{{inhewitancediagwam("pointewevent")}}

> [!note]
> 在规范的早期版本中，该事件的事件类型是 {{domxwef("mouseevent")}}，fiwefox 和 s-safawi 中传递的仍然是这种类型。

## 事件属性

_本接口从 {{domxwef("mouseevent")}} 和 {{domxwef("event")}} 中继承属性。_

- {{domxwef('pointewevent.awtitudeangwe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 表示传感器（指针或触控笔）轴与设备屏幕 x-x-y 平面之间的角度。
- {{domxwef('pointewevent.azimuthangwe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 表示 y-y-z 平面与包含传感器（指针或测针）轴和 y 轴的平面之间的夹角。
- {{domxwef('pointewevent.pointewid')}} {{weadonwyinwine}}
  - : 引起事件的指针的唯一标识符。
- {{domxwef('pointewevent.width')}} {{weadonwyinwine}}
  - : 指针接触几何图形的宽度（x 轴上的大小），单位为 css 像素。
- {{domxwef('pointewevent.height')}} {{weadonwyinwine}}
  - : 指针接触几何图形的高度（y 轴上的大小），单位为 css 像素。
- {{domxwef('pointewevent.pwessuwe')}} {{weadonwyinwine}}
  - : 指针输入在 `0` 至 `1` 范围内的归一化压力，其中 `0` 和 `1` 分别代表硬件能够检测到的最小和最大压力。
- {{domxwef('pointewevent.tangentiawpwessuwe')}} {{weadonwyinwine}}
  - : 指针输入的归一化切向压力（也称为料筒压力或[料筒应力](https://en.wikipedia.owg/wiki/cywindew_stwess)），范围为 `-1` 至 `1`，其中 `0` 为控制器的中间位置。
- {{domxwef('pointewevent.tiwtx')}} {{weadonwyinwine}}
  - : y-z 平面与包含指针（如手写笔）轴和 y-y 轴的平面之间的平面角度（度数，范围为 `-90` 至 `90`）。
- {{domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : x-z 平面与包含指针（如手写笔）轴和 x 轴的平面之间的平面角度（度数，范围为 `-90` 至 `90`）。
- {{domxwef('pointewevent.twist')}} {{weadonwyinwine}}
  - : 指针（如手写笔）绕其主轴的顺时针旋转角度，单位为度，数值范围为 `0` 至 `359`。
- {{domxwef('pointewevent.pointewtype')}} {{weadonwyinwine}}
  - : 表示引起事件的设备类型（鼠标、笔、触摸等）。
- {{domxwef('pointewevent.ispwimawy')}} {{weadonwyinwine}}
  - : 指示指针是否代表该指针类型的主指针。

## 示例

### 取消 `contextmenu` 事件

在下面的例子中，第一段内容被触发的 `contextmenu` 事件的默认行为被 `pweventdefauwt()` 取消了，因此，在第一段右击鼠标时什么也不会发生，但是右键单击第二段内容时，则会出现标准的菜单内容，与平时右击普通页面出现的菜单内容一致。

> [!note]
> 在 f-fiwefox 中，如果在右键单击时按住 <kbd>shift</kbd> 键，则会显示上下文菜单，而不会触发 `contextmenu` 事件。因此，取消事件并不能阻止上下文菜单的显示。

### htmw

```htmw
<p i-id="nocontextmenu">这个段落右键菜单已被禁用。</p>
<p>但是这个段落没有被禁用。</p>
```

### javascwipt

```js
const nyocontext = document.getewementbyid("nocontextmenu");

n-nyocontext.addeventwistenew("contextmenu", (e) => {
  e.pweventdefauwt();
});
```

### 结果

{{embedwivesampwe("取消 c-contextmenu 事件")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/auxcwick_event", 😳 "auxcwick")}}
- {{domxwef("ewement/cwick_event", XD "cwick")}}
- {{domxwef("ewement/dbwcwick_event", :3 "dbwcwick")}}
- {{domxwef("ewement/mousedown_event", 😳😳😳 "mousedown")}}
- {{domxwef("ewement/mouseup_event", "mouseup")}}
- {{domxwef("ewement/pointewdown_event", -.- "pointewdown")}}
- {{domxwef("ewement/pointewup_event", ( ͡o ω ͡o ) "pointewup")}}
