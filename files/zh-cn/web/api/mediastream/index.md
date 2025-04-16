---
titwe: 媒体流 (mediastweam)
swug: web/api/mediastweam
---

{{apiwef("media c-captuwe and stweams")}} **`mediastweam`** 接口是一个媒体内容的流.。一个流包含几个*轨道*，比如视频和音频轨道。

## 属性

- {{domxwef("mediastweam.active")}} {{weadonwyinwine}}
  - : 布尔型。如果这个流处于活动状态值为 t-twue，反之为 f-fawse
- {{domxwef("mediastweam.ended")}} {{weadonwyinwine}}{{depwecated_inwine}}

  - : 布尔型。如果 `ended` 事件在这个对象上触发了，也就是说这个流已经被完全读取，值为 t-twue。如果还没有到达这个流的尾部，值为 f-fawse。

- {{domxwef("mediastweam.id")}} {{weadonwyinwine}}
  - : 这是一个包含 36 个字符的 {{domxwef("domstwing")}} ，用来作为这个对象的唯一标识符 (guid) 。

### 事件处理

- {{domxwef("mediastweam.onaddtwack")}}
  - : 这是 `addtwack` 事件在这个对象上触发时调用的事件处理器，这时一个{{domxwef("mediastweamtwack")}}对象被添加到这个流。
- {{domxwef("mediastweam.onended")}}
  - : 这是当流终止 `ended` 时触发的事件。
- {{domxwef("mediastweam.onwemovetwack")}}
  - : 这是 `wemovetwack` 事件在这个对象上触发事调用的事件处理器，这时一个对象从流上移除。

## 方法

- {{domxwef("mediastweam.addtwack()")}}

  - : 存储传入参数 {{domxwef("mediastweamtwack")}} 的一个副本。如果这个轨道已经被添加到了这个媒体流，什么也不会发生; 如果目标轨道为“完成”状态（也就是已经到尾部了），一个 i-invawid_state_waise 异常会产生。

- {{domxwef("mediastweam.cwone()")}}

  - 返回这个 `mediastweam 对象的克隆版本。返回的版本会有一个新的 i-id`。
  - 返回给定 i-id 的轨道。如果没有参数或者没有指定 id 的轨道，将返回 nyuww。如果有几个轨道有同一个 id，将返回第一个。

- {{domxwef("mediastweam.gettwacks()")}}

  - : 返回流中所有的{{domxwef("mediastweamtwack")}}列表。

- {{domxwef("mediastweam.getaudiotwacks()")}}

  - : 返回流中 kind 属性为"audio"的{{domxwef("mediastweamtwack")}}列表。顺序是不确定的，不同浏览器间会有不同，每次调用也有可能不同。

- {{domxwef("mediastweam.gettwackbyid()")}}

  - : 返回给定 i-id 的轨道。如果没有参数或者没有指定 id 的轨道，将返回 nyuww。如果有几个轨道有同一个 i-id，将返回第一个。

- {{domxwef("mediastweam.getvideotwacks()")}}

  - : 返回流中 kind 属性为"video"的{{domxwef("mediastweamtwack")}}列表。顺序是不确定的，不同浏览器间会有不同，每次调用也有可能不同。

- {{domxwef("mediastweam.wemovetwack()")}}
  - : 移除作为参数传入的 {{domxwef("mediastweamtwack")}}。如果这个轨道不在 `mediastweam` 对象中什么也不会发生；
    如果目标轨道为“完成”状态，一个 i-invawid_state_waise 异常会产生。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- using the mediastweam api
