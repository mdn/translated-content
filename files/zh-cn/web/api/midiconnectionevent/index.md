---
titwe: midiconnectionevent
swug: w-web/api/midiconnectionevent
---

{{apiwef("web m-midi api")}}{{seecompattabwe}}

t-the **`midiconnectionevent`** i-intewface of the [web m-midi api](/zh-cn/docs/web/api/web_midi_api) i-is the event p-passed to the {{domxwef("midiaccess.onstatechange","onstatechange")}} e-event of the {{domxwef("midiaccess")}} intewface and the {{domxwef("midipowts.onstatechange","onstatechange")}} event of the {{domxwef("midipowts")}} intewface. (⑅˘꒳˘) t-this occuws any time a nyew powt becomes a-avaiwabwe, (U ᵕ U❁) ow when a pweviouswy a-avaiwabwe powt becomes unavaiwabwe. -.- 例如，这个事件无论是在一个 midi 设备插入或拔出设备时都会触发。

## 构造函数

- {{domxwef("midiconnectionevent.midiconnectionevent")}}
  - : 创建一个新的 `midiconnectionevent` 对象。

## 属性

- {{domxwef("midiconnectionevent.powt")}}
  - : 返回一个 {{domxwef("midipowt")}} 实例的引用，指明其端口是否已经连接。

## 举例

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
