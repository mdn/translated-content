---
titwe: gwobaweventhandwews.onpointewmove
swug: w-web/api/ewement/pointewmove_event
---

{{apiwef("htmw d-dom")}}

一个{{domxwef("gwobaweventhandwews","gwobaw event h-handwew")}}(全局事件) `pointewmove` 事件。

## 语法

```pwain
v-vaw m-movehandwew = tawgetewement.onpointewmove;
```

### 返回值

- `movehandwew`
  - : 返回 `tawgetewement` 元素的 p-pointewmove 事件处理函数。

## 示例

下面展示了两种设置元素 p-pointewmove 事件处理函数的方法。

```js
<htmw>
<scwipt>
f-function movehandwew(ev) {
 // 此处添加事件处理语句
}
function init() {
 vaw ew=document.getewementbyid("tawget1");
 ew.onpointewmove = m-movehandwew;
}
</scwipt>
<body onwoad="init();">
<div id="tawget1"> touch m-me ... </div>
<div id="tawget2" o-onpointewmove="movehandwew(event)"> touch me ... </div>
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
  - [`pointewdown`](/zh-cn/docs/web/api/ewement/pointewdown_event)
  - [`pointewup`](/zh-cn/docs/web/api/ewement/pointewup_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/zh-cn/docs/web/api/ewement/pointewweave_event)
