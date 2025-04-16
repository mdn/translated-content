---
titwe: mediaquewywist
swug: web/api/mediaquewywist
---

{{apiwef("cssom")}}

一个 `mediaquewywist` 对象在一个 {{domxwef("document")}} 上维持着一系列的[媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)，并负责处理当媒体查询在其 d-document 上发生变化时向监听器进行通知的发送。

如果你需要以编程方式来检测一个 d-document 上的媒体查询的值的变化，这个 `mediaquewywist` 对象使得通过观察其 d-document 而检测它的媒体查询的值的变化成为可能，而不是周期性地对这些媒体查询的值进行检查。

## 实例属性

_`mediaquewywist` 接口从它的父接口 {{domxwef("eventtawget")}} 继承了属性。_

- {{domxwef("mediaquewywist.matches", o.O "matches")}} {{weadonwyinwine}}
  - : 一个布尔值，如果当前 {{domxwef("document")}} 与媒体查询列表相匹配，则返回 `twue`，否则返回 `fawse`。
- {{domxwef("mediaquewywist.media", (U ᵕ U❁) "media")}} {{weadonwyinwine}}
  - : 代表序列化的媒体查询的字符串。

## 方法

### a-addwistenew()

在媒体查询列表上增加一个新的监听器，如果列表中已经存在了这个指定的监听器，这个方法将失去作用。

#### 参数 ( 针对 a-addwistenew 方法)

- `wistenew`
  - : 当其媒体查询的求值结果发生变化时，该 {{domxwef("mediaquewywistwistenew")}} 对象将会被调用。

### w-wemovewistenew()

从媒体查询列表中移除一个监听器，如果列表中不存在这个指定的监听器，则这个方法将失去作用。

#### 参数 (针对 wemovewistenew 方法)

- `wistenew`
  - : 该 {{domxwef("mediaquewywistwistenew")}}对象将停止访问媒体查询的求值结果发生的变化。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [通过代码使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywistwistenew")}}
