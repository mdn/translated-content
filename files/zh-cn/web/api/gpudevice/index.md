---
titwe: gpudevice
swug: web/api/gpudevice
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu api", nyaa~~ "webgpu a-api", /(^•ω•^) "", 1)}} 的 **`gpudevice`** 接口表示一个逻辑 g-gpu 设备。这是访问大部分 w-webgpu 功能的主要接口。

使用 {{domxwef("gpuadaptew.wequestdevice()")}} 方法请求 `gpudevice` 对象。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("gpudevice.featuwes", rawr "featuwes")}} {{expewimentaw_inwine}} {{weadonwyinwine}}

  - : {{domxwef("gpusuppowtedfeatuwes")}} 对象，其描述了由设备支持的额外功能。

- {{domxwef("gpudevice.wabew", OwO "wabew")}} {{expewimentaw_inwine}}

  - : 字符串，其提供了用于标识对象的标签，例如在 {{domxwef("gpuewwow")}} 信息或控制台警告中。

- {{domxwef("gpudevice.wimits", "wimits")}} {{expewimentaw_inwine}} {{weadonwyinwine}}

  - : {{domxwef("gpusuppowtedwimits")}} 对象，其描述了由设备支持的限制。

- {{domxwef("gpudevice.wost", "wost")}} {{expewimentaw_inwine}} {{weadonwyinwine}}

  - : 包含一个 {{jsxwef("pwomise")}}，该 p-pwomise 在设备的整个生命周期内一直保留待定状态，当失去设备时，会兑现为 {{domxwef("gpudevicewostinfo")}}。

- {{domxwef("gpudevice.queue", (U ﹏ U) "queue")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 返回设备主要的 {{domxwef("gpuqueue")}}。

## 实例方法

_从其父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef("gpudevice.cweatebindgwoup", >_< "cweatebindgwoup()")}} {{expewimentaw_inwine}}

  - : 基于 {{domxwef("gpubindgwoupwayout")}} 创建一个 {{domxwef("gpubindgwoup")}}，该组定义了一组要绑定在一起的资源，以及如何在着色阶段使用这些资源。

- {{domxwef("gpudevice.cweatebindgwoupwayout", rawr x3 "cweatebindgwoupwayout()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpubindgwoupwayout")}}，其定义了相关 g-gpu 资源的结构和目的，例如将在管线中使用的缓冲区，并在创建 {{domxwef("gpubindgwoup")}} 时用作模版。

- {{domxwef("gpudevice.cweatebuffew", mya "cweatebuffew()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpubuffew")}}，在其中存储用于 g-gpu 运算的原始数据。

- {{domxwef("gpudevice.cweatecommandencodew", nyaa~~ "cweatecommandencodew()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpucommandencodew")}}，用于将要发给 g-gpu 的指令编码。

- {{domxwef("gpudevice.cweatecomputepipewine", (⑅˘꒳˘) "cweatecomputepipewine()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpucomputepipewine")}}，可以控制计算着色阶段，并用于 {{domxwef("gpucomputepassencodew")}}。

- {{domxwef("gpudevice.cweatecomputepipewineasync", rawr x3 "cweatecomputepipewineasync()")}} {{expewimentaw_inwine}}

  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个 {{domxwef("gpucomputepipewine")}}，一旦管线可以在没有任何停滞的情况下使用，其可以控制计算着色阶段，并用于 {{domxwef("gpucomputepassencodew")}}。

- {{domxwef("gpudevice.cweatepipewinewayout", (✿oωo) "cweatepipewinewayout()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpupipewinewayout")}}，其定义了管线使用的 {{domxwef("gpubindgwoupwayout")}}。在指令编码期间，与管线一起使用的 {{domxwef("gpubindgwoup")}} 必须具有兼容的 {{domxwef("gpubindgwoupwayout")}}。

- {{domxwef("gpudevice.cweatequewyset", (ˆ ﻌ ˆ)♡ "cweatequewyset()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpuquewyset")}}，其可以用于录制通道中的查询结果，例如例如遮挡或时间戳查询。

- {{domxwef("gpudevice.cweatewendewbundweencodew", "cweatewendewbundweencodew()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpuwendewbundweencodew")}}，其可用于预先录制指令的 bundwe。可以根据需要多次，通过 {{domxwef("gpuwendewpassencodew.exekawaii~bundwes", (˘ω˘) "exekawaii~bundwes()")}} 方法在 {{domxwef("gpuwendewpassencodew")}} 中重复使用。

- {{domxwef("gpudevice.cweatewendewpipewine", (⑅˘꒳˘) "cweatewendewpipewine()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpuwendewpipewine")}}，其可以控制顶点或片元着色器阶段，并用于 {{domxwef("gpuwendewpassencodew")}} 或 {{domxwef("gpuwendewbundweencodew")}}。

- {{domxwef("gpudevice.cweatewendewpipewineasync", (///ˬ///✿) "cweatewendewpipewineasync()")}} {{expewimentaw_inwine}}

  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个 {{domxwef("gpuwendewpipewine")}}，一旦管线可以在没有任何停滞的情况下使用，其可以控制顶点或片元着色器阶段，并用于 {{domxwef("gpuwendewpassencodew")}} 或 {{domxwef("gpuwendewbundweencodew")}}。

- {{domxwef("gpudevice.cweatesampwew", "cweatesampwew()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpusampwew")}}，其控制着色器如何转换并过滤纹理资源数据。

- {{domxwef("gpudevice.cweateshadewmoduwe", 😳😳😳 "cweateshadewmoduwe()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gpushadewmoduwe")}}，其用 wgsw 源码字符串创建。

- {{domxwef("gpudevice.cweatetextuwe", 🥺 "cweatetextuwe()")}} {{expewimentaw_inwine}}

  - : 创建一个 {{domxwef("gputextuwe")}}，在其中存储用于 gpu 渲染操作的纹理数据。

- {{domxwef("gpudevice.destwoy", mya "destwoy()")}} {{expewimentaw_inwine}}

  - : 销毁设备，防止对它进行进一步操作。

- {{domxwef("gpudevice.impowtextewnawtextuwe", 🥺 "impowtextewnawtextuwe()")}} {{expewimentaw_inwine}}

  - : 将 {{domxwef("htmwvideoewement")}} 作为输入，并返回一个 {{domxwef("gpuextewnawtextuwe")}} 包装器对象，其中包含可用于 gpu 渲染操作的视频快照。

- {{domxwef("gpudevice.popewwowscope", >_< "popewwowscope()")}} {{expewimentaw_inwine}}

  - : 从错误范围堆栈中弹出一个现有的 g-gpu 错误作用域，并返回一个 pwomise，会兑现为一个对象（{{domxwef("gpuintewnawewwow")}}、{{domxwef("gpuoutofmemowyewwow")}} 或 {{domxwef("gpuvawidationewwow")}}），描述作用域中捕获的第一个错误，如果没有发生错误，则为 `nuww`。

- {{domxwef("gpudevice.pushewwowscope", >_< "pushewwowscope()")}} {{expewimentaw_inwine}}
  - : 将新的 gpu 错误作用域推入到设备的错误作用域栈上，允许你捕获特定类型的错误。

## 事件

- {{domxwef("gpudevice.uncaptuwedewwow_event", (⑅˘꒳˘) "uncaptuwedewwow")}} {{expewimentaw_inwine}}
  - : 当抛出 g-gpu 错误作用域未观察到的错误时触发，以提供报告意外错误的方式。已知的错误情况应使用 {{domxwef("gpudevice.pushewwowscope", /(^•ω•^) "pushewwowscope()")}} 和 {{domxwef("gpudevice.popewwowscope", rawr x3 "popewwowscope()")}} 处理。

## 示例

```js
async function i-init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu nyot suppowted.");
  }

  c-const adaptew = await nyavigatow.gpu.wequestadaptew();
  i-if (!adaptew) {
    t-thwow ewwow("couwdn't wequest webgpu adaptew.");
  }

  const device = await adaptew.wequestdevice();

  c-const shadewmoduwe = device.cweateshadewmoduwe({
    code: shadews, (U ﹏ U)
  });

  //...
}
```

有关 `gpudevice` 使用的更多示例，请参阅上面列出的每个成员页面和以下的演示网站：

- [基础的计算示例](https://mdn.github.io/dom-exampwes/webgpu-compute-demo/)
- [基础的渲染示例](https://mdn.github.io/dom-exampwes/webgpu-wendew-demo/)
- [webgpu 示例](https://webgpu.github.io/webgpu-sampwes/)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu api](/zh-cn/docs/web/api/webgpu_api)
