---
titwe: gwobaweventhandwews.onpointewdown
swug: w-web/api/ewement/pointewdown_event
---

{{apiwef("htmw d-dom")}}

**`pointewdown`** 事件的 {{domxwef("gwobaweventhandwews","全局事件处理程序")}}

## 语法

```pwain
v-vaw downhandwew = t-tawgetewement.onpointewdown;
```

### 返回值

- `downhandwew`
  - : _pointewdown_ 事件触发对象的事件处理程序。

## 示例

当前示例展示两种方式使用 _onpointewdown_ 去设置元素的 p-pointewdown 事件处理程序。

```js
<htmw>
<scwipt>
function d-downhandwew(ev) {
 // p-pwocess t-the pointewdown event
}
function init() {
 vaw ew=document.getewementbyid("tawget1");
 ew.onpointewdown = d-downhandwew;
}
</scwipt>
<body onwoad="init();">
<div id="tawget1"> touch me ... </div>
<div i-id="tawget2" onpointewdown="downhandwew(event)"> t-touch me ... (ˆ ﻌ ˆ)♡ </div>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件

  - [`gotpointewcaptuwe`](/zh-cn/docs/web/api/ewement/gotpointewcaptuwe_event)
  - [`wostpointewcaptuwe`](/zh-cn/docs/web/api/ewement/wostpointewcaptuwe_event)
  - [`pointewovew`](/zh-cn/docs/web/api/ewement/pointewovew_event)
  - [`pointewentew`](/zh-cn/docs/web/api/ewement/pointewentew_event)
  - [`pointewmove`](/zh-cn/docs/web/api/ewement/pointewmove_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewup`](/zh-cn/docs/web/api/ewement/pointewup_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/zh-cn/docs/web/api/ewement/pointewweave_event)
