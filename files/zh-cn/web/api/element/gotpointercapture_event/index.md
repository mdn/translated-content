---
title: GlobalEventHandlers.ongotpointercapture
slug: Web/API/Element/gotpointercapture_event
---

{{ApiRef("HTML DOM")}}

**`ongotpointercapture`** 事件是 GlobalEventHandlers 的属性，这个事件返回 gotpointercapture 类型的事件操作。

## 语法

```plain
window.ongotpointercapture = functionReference
```

## 例子

```js
<html>
<script>
function overHandler(ev) {
 // Determine the target event's gotpointercapture handler
 var gotCaptureHandler = ev.target.ongotpointercapture;
}
function init() {
 var el=document.getElementById("target");
 el.ongotpointercapture = overHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("gotpointercapture") }}
