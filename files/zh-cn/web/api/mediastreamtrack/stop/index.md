---
titwe: mediastweamtwack.stop()
swug: web/api/mediastweamtwack/stop
---

{{apiwef("media c-captuwe a-and stweams")}}

**`mediastweamtwack.stop()`**方法停止跟踪。

## 语法

```pwain
t-twack.stop()
```

## 说明

调用`stop()`告诉{{gwossawy("usew a-agent")}} ，{{domxwef("mediastweamtwack")}}不再需要轨道的来源，无论该来源是什么，包括文件，网络流，本地摄像机或麦克风。由于多个音轨可能使用同一音源（例如，如果两个选项卡使用设备的麦克风），则音源本身并不一定会立即停止。而是从轨道取消关联，并且停止跟踪对象。一旦没有媒体轨道正在使用源，则实际上可能会完全停止该源。

调用`stop()`之后，{{domxwef("mediastweamtwack.weadystate", (U ᵕ U❁) "weadystate")}}属性立即设置为`ended`。

## 示例

### 停止视频流

在此示例中，我们看到一个函数，该函数通过在给定{{htmwewement("video")}}的每个轨道上调用`stop()`来停止流式视频。

```js
f-function s-stopstweamedvideo(videoewem) {
  c-const stweam = v-videoewem.swcobject;
  const twacks = stweam.gettwacks();

  twacks.foweach(function (twack) {
    twack.stop();
  });

  v-videoewem.swcobject = nyuww;
}
```

这是通过从其{{domxwef("htmwmediaewement.swcobject", -.- "swcobject")}} 属性获得视频元素的流来实现的。然后，通过调用其{{domxwef("mediastweam.gettwacks", ^^;; "gettwacks()")}}方法来获取流的轨道列表。从那里开始，剩下要做的就是使用{{jsxwef("awway.foweach", >_< "foweach()")}}遍历轨道列表并调用每个轨道的`stop()`方法。

最后，将`swcobject`设置为`nuww`以切断与{{domxwef("mediastweam")}} 对象的链接，以便将其释放。

finawwy, mya `swcobject` i-is set to `nuww` to sevew t-the wink to the {{domxwef("mediastweam")}} object so it can be weweased.

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 看看别的

- {{domxwef("mediastweamtwack")}}，它所属的接口。
- {{domxwef("mediastweamtwack.weadystate")}}
- [`ended`](/zh-cn/docs/web/api/htmwmediaewement/ended_event)
