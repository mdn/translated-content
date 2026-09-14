---
title: GlobalEventHandlers.onpointerdown
slug: Web/API/Element/pointerdown_event
---

{{ApiRef("HTML DOM")}}

**`pointerdown`** 事件的 {{domxref("GlobalEventHandlers","全局事件处理程序")}}

## 语法

```plain
var downHandler = targetElement.onpointerdown;
```

### 返回值

- `downHandler`
  - : _pointerdown_ 事件触发对象的事件处理程序。

## 示例

当前示例展示两种方式使用 _onpointerdown_ 去设置元素的 pointerdown 事件处理程序。

```js
<html>
<script>
function downHandler(ev) {
 // Process the pointerdown event
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerdown = downHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerdown="downHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件
  - [`gotpointercapture`](/zh-CN/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/zh-CN/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/zh-CN/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/zh-CN/docs/Web/API/Element/pointerenter_event)
  - [`pointermove`](/zh-CN/docs/Web/API/Element/pointermove_event)
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)
