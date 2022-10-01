---
title: GlobalEventHandlers.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
---

{{ApiRef("HTML DOM")}}

The **`onlostpointercapture`** {{event("Event_handlers", "event handler")}} property of the {{domxref("GlobalEventHandlers")}} interface returns the event handler (function) for the {{event("lostpointercapture")}} event type.

**语法**

```plain
window.onlostpointercapture = functionReference
```

## 例子

```js
<html>
<script>
function overHandler(ev) {
 // Determine the target event's lostpointercapture handler
 var lostCaptureHandler = ev.target.onlostpointercapture;
}
function init() {
 var el=document.getElementById("target");
 el.onlostpointercapture = overHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

**规范**

{{Specifications}}

**浏览器兼容性**

{{Compat}}

## See also

- {{ event("lostpointercapture") }}
