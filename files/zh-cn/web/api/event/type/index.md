---
title: event.type
slug: Web/API/Event/type
---

{{APIRef("DOM")}}

只读属性 **Event.type** 会返回一个字符串，表示该事件对象的事件类型。

传给 {{ domxref("EventTarget.addEventListener()") }} 和 {{ domxref("EventTarget.removeEventListener()") }} 方法的 event 参数的值是忽略大小写的。

要了解所有的事件类型，请查看 [Mozilla 事件类型参考](/zh-CN/docs/Mozilla_event_reference).

## 语法

```plain
event.type
```

## 示例

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>Event.type Example</title>

    <script>
      var currEvent = null;
      function getEvtType(evt) {
        console.log("//Start------------getEvtType(evt)------------ ");

        currEvent = evt.type;
        console.log(currEvent);

        //document.getElementById("Etype").firstChild.nodeValue = currEvent;
        document.getElementById("Etype").innerHTML = currEvent;

        console.log("//End--------------getEvtType(evt)------------ ");
      }

      //Keyboard events
      document.addEventListener("keypress", getEvtType, false); //[second]

      document.addEventListener("keydown", getEvtType, false); //first
      document.addEventListener("keyup", getEvtType, false); //third

      //Mouse events
      document.addEventListener("click", getEvtType, false); // third

      document.addEventListener("mousedown", getEvtType, false); //first
      document.addEventListener("mouseup", getEvtType, false); //second
    </script>
  </head>

  <body>
    <p>Press any key or click the mouse to get the event type.</p>
    <p>Event type: <span id="Etype" style="color:red">-</span></p>
  </body>
</html>
```

### Result

{{EmbedLiveSample('示例')}}

## Specifications

{{Specifications}}
