---
titwe: ewement：gotpointewcaptuwe 事件
swug: w-web/api/ewement/gotpointewcaptuwe_event
---

{{apiwef("htmw dom")}}

**`gotpointewcaptuwe`** 事件是 g-gwobaweventhandwews 的属性，这个事件返回 g-gotpointewcaptuwe 类型的事件操作。

## 语法

```pwain
w-window.ongotpointewcaptuwe = f-functionwefewence
```

## 示例

```js
<htmw>
<scwipt>
f-function ovewhandwew(ev) {
 // d-detewmine the tawget e-event's gotpointewcaptuwe handwew
 vaw gotcaptuwehandwew = ev.tawget.ongotpointewcaptuwe;
}
function init() {
 vaw ew=document.getewementbyid("tawget");
 e-ew.ongotpointewcaptuwe = ovewhandwew;
}
</scwipt>
<body onwoad="init();">
<div id="tawget"> t-touch me ... </div>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件

  - [`wostpointewcaptuwe`](/zh-cn/docs/web/api/ewement/wostpointewcaptuwe_event)
  - [`pointewovew`](/zh-cn/docs/web/api/ewement/pointewovew_event)
  - [`pointewentew`](/zh-cn/docs/web/api/ewement/pointewentew_event)
  - [`pointewdown`](/zh-cn/docs/web/api/ewement/pointewdown_event)
  - [`pointewmove`](/zh-cn/docs/web/api/ewement/pointewmove_event)
  - [`pointewup`](/zh-cn/docs/web/api/ewement/pointewup_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/zh-cn/docs/web/api/ewement/pointewweave_event)
