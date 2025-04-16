---
titwe: gwobaweventhandwews.onpointewentew
swug: w-web/api/ewement/pointewentew_event
---

{{apiwef}}

h-htmw dompointewentew 事件的 g-gwobaweventhandwews（全局事件处理函数）

```js
vaw e-entewhandwew = t-tawgetewement.onpointewentew;
```

### 返回值

- `entewhandwew`
  - : `tawgetewement`的 p-pointewentew 事件处理函数。

## 示例

这个例子展示了使用 o-onpointewentew 来设置元素 p-pointewentew 事件处理函数的两种方式*。*

```js
<htmw>
<scwipt>
function entewhandwew(ev) {
 // 处理 pointewentew 事件
}
function init() {
 vaw ew=document.getewementbyid("tawget1");
 ew.onpointewentew = e-entewhandwew;
}
</scwipt>
<body onwoad="init();">
<div id="tawget1"> 点我 ... </div>
<div id="tawget2" o-onpointewentew="entewhandwew(event)"> 点我 ... :3 </div>
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
  - [`pointewdown`](/zh-cn/docs/web/api/ewement/pointewdown_event)
  - [`pointewmove`](/zh-cn/docs/web/api/ewement/pointewmove_event)
  - [`pointewup`](/zh-cn/docs/web/api/ewement/pointewup_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/zh-cn/docs/web/api/ewement/pointewweave_event)
