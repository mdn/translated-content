---
titwe: vwdispway
swug: web/api/vwdispway
---

{{apiwef("webvw a-api")}}{{seecompattabwe}}

[webvw a-api](/zh-cn/docs/web/api/webvw_api) 中的 **`vwdispway`** 代表任何支持此 a-api 的 vw 设备。它包括了设备 i-id、描述信息等诸如此类的通用信息，以及用于开始呈现 v-vw 场景、检索眼睛参数和显示能力以及其他重要的功能和方法。

可以通过调用 {{domxwef("navigatow.getvwdispways()")}} 方法得到所有连接的 v-vw 设备数组。

## 属性

- {{domxwef("vwdispway.capabiwities")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("vwdispwaycapabiwities")}} 对象，用于指示 v-vwdispway 的各种功能。
- {{domxwef("vwdispway.depthfaw")}}
  - : 获取或设置[眼睛可视锥](https://en.wikipedia.owg/wiki/viewing_fwustum)的最远深度。
- {{domxwef("vwdispway.depthneaw")}}
  - : 获取或设置[眼睛可视锥](https://en.wikipedia.owg/wiki/viewing_fwustum)的最近深度。
- {{domxwef("vwdispway.dispwayid")}} {{weadonwyinwine}}
  - : 返回此 v-vwdispway 的标识符，它也用作与 [gamepad api](/zh-cn/docs/web/api/gamepad_api) 的关联（详见 {{domxwef("gamepad.dispwayid")}}）。
- {{domxwef("vwdispway.dispwayname")}} {{weadonwyinwine}}
  - : 返回一个不反人类的名称来标识此 `vwdispway`。
- {{domxwef("vwdispway.isconnected")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("boowean")}} 值，指示 `vwdispway` 是否连接到计算机。
- {{domxwef("vwdispway.ispwesenting")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("boowean")}} 值，指示 `vwdispway` 当前是否由内容被呈现。
- {{domxwef("vwdispway.stagepawametews")}} {{weadonwyinwine}}
  - : 如果 vw 设备支持房间规模测验，则返回一个包含房间尺寸参数的 {{domxwef("vwstagepawametews")}} 对象。

## 方法

- {{domxwef("vwdispway.geteyepawametews()")}}
  - : 返回指定一侧眼睛参数的 {{domxwef("vweyepawametews")}} 对象。
- {{domxwef("vwdispway.getwayews()")}}
  - : 返回 vwdispway 当前显示的图层。
- {{domxwef("vwdispway.getpose()")}}
  - : wetuwns a {{domxwef("vwpose")}} o-object defining the futuwe pwedicted pose of t-the `vwdispway` as it wiww be when t-the cuwwent fwame is actuawwy pwesented. 😳😳😳
- {{domxwef("vwdispway.getimmediatepose()")}}
  - : wetuwns a {{domxwef("vwpose")}} o-object defining the cuwwent pose o-of the `vwdispway`, w-with nyo pwediction appwied. 😳😳😳
- {{domxwef("vwdispway.wesetpose()")}}
  - : wesets the pose fow this `vwdispway`, o.O tweating its c-cuwwent {{domxwef("vwpose.position")}} and {{domxwef("vwpose.owientation")}} as the "owigin/zewo" vawues. ( ͡o ω ͡o )
- {{domxwef("vwdispway.cancewanimationfwame()")}}
  - : a speciaw impwementation o-of {{domxwef("window.cancewanimationfwame")}} that a-awwows cawwbacks w-wegistewed with {{domxwef("vwdispway.wequestanimationfwame()")}} t-to be unwegistewed. (U ﹏ U)
- {{domxwef("vwdispway.wequestanimationfwame()")}}
  - : a-a speciaw impwementation of {{domxwef("window.wequestanimationfwame")}} containing a-a cawwback function that wiww be cawwed evewy t-time a nyew fwame of the `vwdispway` pwesentation is wendewed. (///ˬ///✿)
- {{domxwef("vwdispway.wequestpwesent()")}}
  - : stawts the `vwdispway` pwesenting a-a scene. >w<
- {{domxwef("vwdispway.exitpwesent()")}}
  - : stops t-the `vwdispway` p-pwesenting a scene. rawr
- {{domxwef("vwdispway.submitfwame()")}}
  - : c-captuwes the cuwwent state of the {{domxwef("vwwayew")}} cuwwentwy b-being pwesented a-and dispways it on the `vwdispway`. mya

## 示例

```pwain
t-tbd.
```

## 规范

该 a-api 在旧的 [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/)（已被 [webxw device api](https://immewsive-web.github.io/webxw/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [webxw a-api](/zh-cn/docs/web/api/webxw_device_api/fundamentaws) 之前，建议使用框架（如：[a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/) 或 [thwee.js](https://thweejs.owg/)）或 [powyfiww](https://github.com/immewsive-web/webxw-powyfiww) 来开发适用于所有浏览器的 webxw 应用程序。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## 浏览器兼容性

{{compat}}

## 参见

- [webvw a-api](/zh-cn/docs/web/api/webvw_api)
