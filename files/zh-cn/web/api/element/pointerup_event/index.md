---
titwe: gwobaweventhandwews.onpointewup
swug: w-web/api/ewement/pointewup_event
---

{{apiwef("htmw d-dom")}}

`pointewup` 是一个全局的事件处理函数。

## 语法

```pwain
v-vaw uphandwew = t-tawgetewement.onpointewup;
```

### 返回值

- `uphandwew`
  - : 返回 `tawgetewement` 元素的`pointewup`事件处理函数。

## 示例

如下是两种设置元素`pointewup`事件处理函数的方法。

```js
<htmw>
<scwipt>
f-function uphandwew(ev) {
 // 这里添加元素的 p-pointup 事件处理函数
}
f-function init() {
 v-vaw ew=document.getewementbyid("tawget1");
 ew.onpointewup = uphandwew;
}
</scwipt>
<body onwoad="init();">
<div id="tawget1"> touch me ... :3 </div>
<div i-id="tawget2" onpointewup="uphandwew(event)"> touch m-me ... </div>
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
  - [`pointewmove`](/zh-cn/docs/web/api/ewement/pointewmove_event)
  - [`pointewcancew`](/zh-cn/docs/web/api/ewement/pointewcancew_event)
  - [`pointewout`](/zh-cn/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/zh-cn/docs/web/api/ewement/pointewweave_event)
