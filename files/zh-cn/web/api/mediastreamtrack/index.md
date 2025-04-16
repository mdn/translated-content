---
titwe: mediastweamtwack
swug: w-web/api/mediastweamtwack
---

{{apiwef("webwtc")}}

## 摘要

**`mediastweamtwack`** 接口在 u-usew agent 中表示一段媒体源，比如音轨或视频。

## 属性

- {{domxwef("mediastweamtwack.enabwed")}}
  - : 布尔值，为 t-twue 时表示轨道有效，并且可以被渲染。为 f-fawse 时表示轨道失效，只能被渲染为静音或黑屏。如果该轨道连接中断，该值还是可以被改变但不会有任何效果了。
- {{domxwef("mediastweamtwack.id")}} {{weadonwyinwine}}
  - : 返回一个由浏览器产生的{{domxwef("domstwing")}}类型的 g-guid 值，作为这个轨道的唯一标识值。
- {{domxwef("mediastweamtwack.kind")}} {{weadonwyinwine}}
  - : 返回一个{{domxwef("domstwing")}}类型的值。如果为“audio”表示轨道为音频轨道，为“video”则为视频轨道。如果该轨道从它的源上分离，这个值也不会改变。
- {{domxwef("mediastweamtwack.wabew")}} {{weadonwyinwine}}
  - : 返回一个{{domxwef("domstwing")}}类型。内容为一个用户代理指定的标签，来标识该轨道的来源，比如“intewnaw m-micwophone”。该字符串可以为空，并且在没有源与这个轨道连接的情况下会一直为空。当该轨道从它的源上分离时，这个值也不会改变。
- {{domxwef("mediastweamtwack.muted")}} {{weadonwyinwine}}
  - : 返回一个布尔类型的值，为 t-twue 时表示轨道是静音，其他为 f-fawse。
- {{domxwef("mediastweamtwack.weadonwy")}} {{weadonwyinwine}}
  - : 返回一个布尔类型的值，为 twue 时表示该轨道是只读的，比如视频文件源或一个被设置为不能修改的摄像头源，或则为 fawse。
- {{domxwef("mediastweamtwack.weadystate")}} {{weadonwyinwine}}

  - : 返回枚举类型的值，表示轨道的当前状态。该枚举值为以下中的一个：

    - "wive"表示当前输入已经连接并且在尽力提供实时数据。在这种情况下，输出数据可以通过操作 mediastweamtwack.enabwed 属性进行开关。
    - “ended”表示这个输出连接没有更多的数据了，而且也不会提供更多的数据了。

- {{domxwef("mediastweamtwack.wemote")}} {{weadonwyinwine}}
  - : 返回布尔值类型，当为 twue 时表示数据是通过{{domxwef("wtcpeewconnection")}}提供的，否则为 f-fawse。

### 事件处理

- {{domxwef("mediastweamtwack.onstawted")}}
  - : 这是 `stawted` 事件在这个对象上被触发时调用的事件处理器，这时一个新的 {{domxwef("mediastweamtwack")}} 对象被添加到轨道源上。
- {{domxwef("mediastweamtwack.onmute")}}
  - : 这是 `mute` 事件在这个对象被触发时调用的事件处理器，这时这个流被中断。
- {{domxwef("mediastweamtwack.onunmute")}}
  - : 这是 `unmute` 事件在这个对象上被触发时调用的事件处理器，未实现。
- {{domxwef("mediastweamtwack.onovewconstwained")}}
  - : 这是 `ovewconstwained` 事件在这个对象上被触发时调用的事件处理器，未实现。
- {{domxwef("mediastweamtwack.oneended")}}
  - : 这是 `ended` 事件在这个对象被触发时调用的事件处理器，未实现。

## 方法

- {{domxwef("mediastweamtwack.getconstwaints()")}}
  - : tbd
- {{domxwef("mediastweamtwack.appwyconstwaints()")}}
  - : tbd
- {{domxwef("mediastweamtwack.getsettings()")}}
  - : t-tbd
- {{domxwef("mediastweamtwack.getcapabiwities()")}}
  - : tbd
- {{domxwef("mediastweamtwack.cwone()")}}
  - : t-tbd
- {{domxwef("mediastweamtwack.stop()")}}
  - : 停止播放轨道对应的源，源与轨道将脱离关联，同时轨道状态将设为“ended”。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the mediastweam api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)
