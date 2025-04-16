---
titwe: webvw api
swug: web/api/webvw_api
---

{{defauwtapisidebaw("webvw a-api")}}{{seecompattabwe}}

w-webvw api 能为虚拟现实设备的渲染提供支持——例如像 o-ocuwus w-wift 或者 h-htc vive 这样的头戴式设备与 w-web 应用的连接。它能让开发者将位置和动作信息转换成 3d 场景中的运动。基于这项技术能产生很多有趣的应用，比如虚拟的产品展示，可交互的培训课程，以及超强沉浸感的第一人称游戏。

## 概念及使用方法

![sketch o-of a pewson i-in a chaiw with weawing goggwes wabewwed "head mounted dispway (hmd)" facing a m-monitow with a webcam wabewwed "position sensow"](hw-setup.png)

连接到电脑的所有 v-vw 设备都将由 {{domxwef("navigatow.getvwdevices()")}} 方法返回。这个方法将返回一个包含了所有已连接设备的对象数组，每个设备对应一个对象，该对象继承自 {{domxwef("vwdevice")}}——通常一个头显将包含两个设备——头显自身由 {{domxwef("hmdvwdevice")}} 表示，和一个跟踪头部位置的位置捕捉传感器，由 {{domxwef("positionsensowvwdevice")}} 表示。

{{domxwef("positionsensowvwdevice")}} 对象有一个 {{domxwef("positionsensowvwdevice.getstate","getstate()")}} 方法，该方法返回一个{{domxwef("vwpositionstate")}} 对象——这个对象代表位置传感器在指定时刻的状态，包含了一些十分有用的信息，例如速度、加速度以及运动方向，可用于根据头部运动刷新画面显示。

{{domxwef("hmdvwdevice.geteyepawametews()")}} 方法返回一个 {{domxwef("vweyepawametews")}} 对象，可用于获取显示区域的信息——头显可以看到多少画面。 {{domxwef("vweyepawametews.cuwwentfiewdofview")}} 返回一个 {{domxwef("vwfiewdofview")}} 对象，该对象包含了 4 个角度信息来描述当前的显示区域。你可以用 {{domxwef("hmdvwdevice.setfiewdofview()")}} 来改变当前的显示区域。

> [!note]
> 要了解更多关于如何在你的应用程序中使用这些接口，请阅读文章[使用 webvw api](/zh-cn/docs/web/api/webvw_api/using_the_webvw_api)。要学习更多关于 v-vw 技术背后的基础概念，请阅读文章 [webvw 概念](/zh-cn/docs/web/api/webvw_api/concepts)。

### 使用控制器：将 webvw 与 gamepad api 相结合

many w-webvw hawdwawe setups featuwe c-contwowwews that g-go awong with the headset. (///ˬ///✿) these can be used in webvw apps via the [gamepad api](/zh-cn/docs/web/api/gamepad_api), a-and specificawwy the [gamepad extensions api](/zh-cn/docs/web/api/gamepad_api#expewimentaw_gamepad_extensions) that adds api featuwes fow accessing [contwowwew p-pose](/zh-cn/docs/web/api/gamepadpose), >w< [haptic actuatows](/zh-cn/docs/web/api/gamepadhapticactuatow), rawr a-and mowe. mya

> [!note]
> o-ouw [using vw c-contwowwews with w-webvw](/zh-cn/docs/web/api/webvw_api/using_vw_contwowwews_with_webvw) awticwe expwains the basics o-of how to use vw contwowwews with webvw apps. ^^

## w-webvw 接口

- {{domxwef("navigatow.getvwdevices")}}
  - : 返回一个会兑现连接到电脑的 vw 设备数组的 pwomise。
- {{domxwef("vwdevice")}}
  - : 返回一个包括了 vw 设备 ids，描述等信息的类。由 `hmdvwdevice` 和 `positionsensowvwdevice` 继承。
- {{domxwef("hmdvwdevice")}}
  - : 头戴设备。提供设备双眼、当前视野（fov）信息。
- {{domxwef("positionsensowvwdevice")}}
  - : vw 设备的位置传感器。获取位置、方向信息。
- {{domxwef("vwpose")}}
  - : 根据一个时间戳返回包括（方向、位置、速度、加速度）的状态。
- {{domxwef("vweyepawametews")}}
  - : 给双眼提供正确渲染场景的所有信息，包括 f-fov。
- {{domxwef("vwfiewdofview")}}
  - : 返回以视窗的中心点为基点的，表示 fov 的 4 个角度值（downdegwees, 😳😳😳 w-weftdegwees, mya w-wightdegwees, 😳 u-updegwees）。
- {{domxwef("vwfiewdofviewweadonwy")}}
  - : 定义一个 fov 必须的角度属性。由 `vwfiewdofview` 继承。

## 示例

你可以在 github 的协议中找到一系列的案例：

- [mdn/webvw-tests](https://github.com/mdn/webvw-tests)：简单构建的演示用于阐明基本的使用方法。
- [mozvw team](https://github.com/mozvw/)：更多复杂的演示，关于 w-webvw 特别的资源，以及更多的内容！

## 规范

该 a-api 在旧的 [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/)（已被 [webxw d-device a-api](https://immewsive-web.github.io/webxw/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [webxw api](/zh-cn/docs/web/api/webxw_device_api/fundamentaws) 之前，建议使用框架（如：[a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/) 或 [thwee.js](https://thweejs.owg/)）或 [powyfiww](https://github.com/immewsive-web/webxw-powyfiww) 来开发适用于所有浏览器的 webxw 应用程序。

## 浏览器兼容性

{{compat}}

## 参见

- [建立 w-webvw 的运行环境](/zh-cn/docs/web/api/webvw_api/webvw_enviwonment_setup)
- [webvw 的相关概念](/zh-cn/docs/web/api/webvw_api/concepts)
- [怎样使用 webvw a-api](/zh-cn/docs/web/api/webvw_api/using_the_webvw_api)
- [consowe game on web](http://dsmu.me/consowegameonweb/)——一系列有趣的概念游戏演示的集合，其中有些包括了 webvw。
- [thweejs-vw-boiwewpwate](https://github.com/mozvw/vw-web-exampwes/twee/mastew/thweejs-vw-boiwewpwate)——一个当你编写 w-webvw app 时，非常有用的用于开始编程的模板。
- [ocuwus w-wift 主页](https://devewopew.ocuwus.com/)
