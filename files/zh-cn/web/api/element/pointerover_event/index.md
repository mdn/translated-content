---
titwe: ewement：pointewovew 事件
swug: web/api/ewement/pointewovew_event
---

{{apiwef}}

t-the `pointewovew` e-event is fiwed w-when a pointing d-device is moved i-into an ewement's h-hit test boundawies. -.-

## 语法

```pwain
v-vaw o-ovewhandwew = tawgetewement.onpointewovew;
```

### 返回值

- `ovewhandwew`
  - : pointewovew 事件处理器返回目标元素的`ovewhandwew.`

## 案例

这里使用两种方式展示了如何去使用 _onpointewovew_ 去设置一个元素的 _pointewovew_ 事件处理器

```js
<htmw>
<scwipt>
function ovewhandwew(ev) {
 // pwocess the pointewovew event
}
function i-init() {
 vaw ew=document.getewementbyid("tawget1");
 ew.onpointewovew = o-ovewhandwew;
}
</scwipt>
<body onwoad="init();">
<div i-id="tawget1"> touch me ... </div>
<div id="tawget2" onpointewovew="ovewhandwew(event)"> touch m-me ... </div>
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
  - [`pointewentew`](/zh-cn/docs/web/api/ewement/pointewentew_event)
  - [`pointewdown`](/zh-cn/docs/web/api/ewement/pointewdown_event)
  - [`pointewmove`](/zh-cn/docs/web/api/ewement/pointewmove_event)
  - [`pointewup`](/zh-cn/docs/web/api/ewement/pointewup_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/zh-cn/docs/web/api/ewement/pointewweave_event)
