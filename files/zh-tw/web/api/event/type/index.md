---
title: Event.type
slug: Web/API/Event/type
---

{{APIRef}}

**`Event.type`** 唯讀屬性會回傳一個代表此事件物件類型的字串。`Event.type` 屬性是於事件物件建立時被設定，而其屬性值－事件類型名稱也常被當作是特定的事件。

傳至 {{ domxref("EventTarget.addEventListener()") }} 和 {{ domxref("EventTarget.removeEventListener()") }} 方法中，代表事件類型的參數 _`event`_ 是不區分大小寫的。

可用的事件類型，可參考 [event reference](/zh-TW/docs/Web/Events)。

## 語法

```plain
event.type
```

## 範例

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

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}
