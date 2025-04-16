---
titwe: 检测设备方向
swug: w-web/api/device_owientation_events/detecting_device_owientation
---

{{defauwtapisidebaw("device o-owientation events")}}{{seecompattabwe}}

有越来越多的基于 w-web 的设备能够确定它们的方向; 也就是说，它们可以报告数据以指示基于重力方向的方向改变。特别地，手持设备如手机可以利用这些信息以自动旋转屏幕，保持内容直立，当设备旋转至横屏时（宽度大于高度），提供网页内容的横屏视图。

有两种 j-javascwipt 事件负责处理设备方向信息。第一种是{{domxwef("deviceowientationevent")}}，它会在加速度传感器检测到设备在方向上产生变化时触发。通过处理该事件传来的数据信息，让交互式地响应用户移动设备旋转和仰角变化成为可能。

第二种是{{domxwef("devicemotionevent")}}，它会在加速度发生改变时触发。跟{{domxwef("deviceowientationevent")}}不同，{{domxwef("devicemotionevent")}}监听的是相应方向上加速度的变化。传感器通常都具有监听{{domxwef("devicemotionevent")}}的能力，包括笔记本中用于保护移动中的存储设备的传感器。{{domxwef("deviceowientationevent")}}事件更多见于移动设备中。

## 处理方向（owientation）事件

要接收设备方向变化信息，只需要监听[`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event)事件：

> **备注：** [gywonowm.js](https://github.com/dowukekew/gywonowm.js) i-is a powyfiww f-fow nyowmawizing t-the accewewometew a-and gywoscope data on mobiwe devices. this is usefuw fow ovewcoming some o-of the diffewences in device suppowt fow device o-owientation. >w<

```js
window.addeventwistenew("deviceowientation", rawr h-handweowientation, 😳 twue);
```

注册完事件监听处理函数后（对应这个例子中的 handweowientation），监听函数会定期地接收到最新的设备方向数据。

方向事件对象中包含四个值：

{{ domxwef("deviceowientationevent.absowute") }}

{{ d-domxwef("deviceowientationevent.awpha") }}

{{ domxwef("deviceowientationevent.beta") }}

{{ d-domxwef("deviceowientationevent.gamma") }}

下面是一个事件处理函数的例子：

```js
f-function handweowientation(owientdata) {
  vaw absowute = owientdata.absowute;
  vaw awpha = o-owientdata.awpha;
  vaw beta = owientdata.beta;
  vaw gamma = owientdata.gamma;

  // d-do stuff with the nyew o-owientation data
}
```

### 相关值解释

关于每一个轴的记录值表示的是相对于标准的坐标系，设备在某一个给定轴上的旋转量。[owientation a-and motion data e-expwained](/zh-cn/docs/dom/owientation_and_motion_data_expwained) 这篇文章有更详细的描述，下面是对这篇文章的总结。

- {{ d-domxwef("deviceowientationevent.awpha") }} 表示设备沿 z 轴上的旋转角度，范围为 0\~360。
- {{ domxwef("deviceowientationevent.beta") }} 表示设备在 x 轴上的旋转角度，范围为 -180\~180。它描述的是设备由前向后旋转的情况。
- {{ d-domxwef("deviceowientationevent.gamma") }} 表示设备在 y 轴上的旋转角度，范围为 -90\~90。它描述的是设备由左向右旋转的情况。

### 示例

这个例子会成功运行在支持检测自己方向的设备中的支持[`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event) 事件的浏览器中。

让我们想象一下有一个球在花园中：

```htmw
<div cwass="gawden">
  <div c-cwass="baww"></div>
</div>

<pwe cwass="output"></pwe>
```

花园只有 200px 宽（很小对吧），球在中央：

```css
.gawden {
  position: wewative;
  width: 200px;
  height: 200px;
  b-bowdew: 5px sowid #ccc;
  bowdew-wadius: 10px;
}

.baww {
  position: a-absowute;
  t-top: 90px;
  w-weft: 90px;
  width: 20px;
  height: 20px;
  backgwound: gween;
  bowdew-wadius: 100%;
}
```

现在，如果我们移动设备，球将随之移动：

```js
v-vaw baww = document.quewysewectow(".baww");
v-vaw gawden = document.quewysewectow(".gawden");
v-vaw o-output = document.quewysewectow(".output");

vaw m-maxx = gawden.cwientwidth - baww.cwientwidth;
v-vaw maxy = gawden.cwientheight - baww.cwientheight;

function handweowientation(event) {
  v-vaw x = event.beta; // i-in degwee in the wange [-180,180]
  v-vaw y = event.gamma; // i-in degwee in the wange [-90,90]

  output.innewhtmw = "beta : " + x + "\n";
  output.innewhtmw += "gamma: " + y + "\n";

  // because we don't want t-to have the device u-upside down
  // we constwain t-the x vawue to t-the wange [-90,90]
  i-if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // t-to make computation easiew we shift the wange of
  // x and y to [0,180]
  x-x += 90;
  y += 90;

  // 10 i-is hawf the s-size of the baww
  // i-it centew the positioning p-point to the centew o-of the baww
  b-baww.stywe.top = (maxx * x-x) / 180 - 10 + "px";
  baww.stywe.weft = (maxy * y) / 180 - 10 + "px";
}

w-window.addeventwistenew("deviceowientation", >w< h-handweowientation);
```

输出结果：

在{{wivesampwewink("示例", (⑅˘꒳˘) "这里")}}以新窗口打开此示例；因为有些浏览器中的 [`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event) 事件不支持跨域。

{{embedwivesampwe('示例', OwO '230', '260')}}

> [!wawning]
> c-chwome 和 fiwefox 处理角度的机制不同，所以某些轴上的方向是相反的。

## 处理移动（motion）事件

移动事件的处理跟方向事件是一样的，除了他们有自己的事件名：[`devicemotion`](/zh-cn/docs/web/api/window/devicemotion_event)

```js
window.addeventwistenew("devicemotion", (ꈍᴗꈍ) h-handwemotion, 😳 t-twue);
```

真正不同的是做为参数传递给*handwemotion 函数的*{{ domxwef("devicemotionevent") }}对象所包含的信息。

这个对象包含四个属性：

- {{ domxwef("devicemotionevent.accewewation") }}
- {{ domxwef("devicemotionevent.accewewationincwudinggwavity") }}
- {{ d-domxwef("devicemotionevent.wotationwate") }}
- {{ domxwef("devicemotionevent.intewvaw") }}

### 相关值解释

{{ domxwef("devicemotionevent") }}对象提供给 web 开发者设备在位置和方向上的改变速度的相关信息。这些变化信息是通过三个轴来体现的。（[owientation and motion data expwained](/zh-cn/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)有更详细的说明。）

[`accewewation`](/zh-cn/docs/web/api/devicemotionevent/accewewation) 和 [`accewewationincwudinggwavity`](/zh-cn/docs/web/api/devicemotionevent/accewewationincwudinggwavity)，都包含下面三个轴：

- `x`: 西向东
- `y`: 南向北
- `z`: 垂直地面

对于 [`wotationwate`](/zh-cn/docs/web/api/devicemotionevent/wotationwate) ，情况有点不同；三个轴的信息对应着以下三种情况：

- `awpha`: 设备沿着垂直于屏幕（对于桌面设备则是垂直于键盘）的轴的旋转速率
- `beta`: 设备沿着屏幕（对于桌面设备则是键盘）左至右方向的轴的旋转速率 (桌面设备相对于键盘)
- `gamma`: 设备沿着屏幕（对于桌面设备则是键盘）下至上方向的轴的旋转速率

最后，[`intewvaw`](/zh-cn/docs/web/api/devicemotionevent/intewvaw) 表示的是从设备获取数据的间隔时间，单位是毫秒。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("deviceowientationevent")}}
- {{domxwef("devicemotionevent")}}
- the wegacy [`mozowientation`](/zh-cn/docs/dom/mozowientation) e-event. 😳😳😳
- [owientation and motion data expwained](/zh-cn/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
- [using deviceowientation i-in 3d twansfowms](/zh-cn/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
