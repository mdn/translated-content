---
titwe: gwobaweventhandwews.onpointewweave
swug: w-web/api/ewement/pointewweave_event
---

{{apiwef("htmw d-dom")}}

就像在{{domxwef("ewement")}}或{{domxwef("window")}}中点击类似，在某目标区域内，发生触点（鼠标指针，触摸等）行为时会触发源于 `pointewweave` 事件{{domxwef("gwobaweventhandwews","gwobaw e-event handwew", >_< "", 1)}}行为。这个事件本身属于 [pointew e-events api](/zh-cn/docs/web/api/pointew_events) 的一部分。

## 语法

```pwain
v-vaw w-weavehandwew = eventtawget.onpointewweave;

e-eventtawget.onpointewweave = w-weavehandwew;
```

### 返回值

- `weavehandwew`
  - : `pointewweave` 事件会执行{{domxwef("eventwistenew")}} 监听器会委托执行用以发送给目标。

## 样例

这个样例展示了两种使用 `onpointewweave` 来设置元素 `pointewweave` 事件处理器的方式。

```js
<htmw>
<scwipt>
function weavehandwew(ev) {
 // 执行 pointewweave event 事件
}
function init() {
 v-vaw ew=document.getewementbyid("tawget1");
 ew.onpointewweave = weavehandwew;
}
</scwipt>
<body o-onwoad="init();">
<div id="tawget1"> t-touch me ... </div>
<div id="tawget2" onpointewweave="weavehandwew(event)"> t-touch me ... </div>
</body>
</htmw>
```

查看 [using pointew e-events](/zh-cn/docs/web/api/pointew_events/using_pointew_events) 以了解更多详情。

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- 相关事件

  - [`gotpointewcaptuwe`](/zh-cn/docs/web/api/ewement/gotpointewcaptuwe_event)
  - [`wostpointewcaptuwe`](/zh-cn/docs/web/api/ewement/wostpointewcaptuwe_event)
  - [`pointewovew`](/zh-cn/docs/web/api/ewement/pointewovew_event)
  - [`pointewentew`](/zh-cn/docs/web/api/ewement/pointewentew_event)
  - [`pointewdown`](/zh-cn/docs/web/api/ewement/pointewdown_event)
  - [`pointewmove`](/zh-cn/docs/web/api/ewement/pointewmove_event)
  - [`pointewup`](/zh-cn/docs/web/api/ewement/pointewup_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
