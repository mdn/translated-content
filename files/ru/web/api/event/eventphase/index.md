---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
---

{{ ApiRef("DOM") }}

### Общая информация

Отображает текущую фазу процесса обработки события.

### Синтаксис

```
var phase = event.eventPhase;
```

Возвращает целое число, соответствующее одной из 4 констант:

- `Event.NONE = 0`
- `Event.CAPTURING_PHASE = 1`
- `Event.AT_TARGET = 2`
- `Event.BUBBLING_PHASE = 3`

Смысл констант смотри в [section 3.1, Event dispatch and DOM event flow](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), спецификации DOM Level 3.

### Пример

```
<!DOCTYPE html>
<html>
<head> <title>Event Propagation</title>
  <style type="text/css">
    body { font-family:'Trebuchet MS'; }
    div { margin: 20px; padding: 4px; border: thin black solid; }
    #divInfo { margin: 18px; padding: 8px; background-color:white; font-size:80%; }
  </style>
</head>
<body>
  <h4>Event Propagation Chain</h4>
  <ul>
    <li>Click 'd1'</li>
    <li>Analyse event propagation chain</li>
    <li>Click next div and repeat the experience</li>
    <li>Change Capturing mode</li>
    <li>Repeat the experience</li>
  </ul>
  <input type="checkbox" id="chCapture" /> Use Capturing
  <div id="d1">d1
    <div id="d2">d2
      <div id="d3">d3
        <div id="d4">d4</div>
      </div>
    </div>
  </div>
  <div id="divInfo"></div>
  <script>
    var
      clear = false,
      divInfo = null,
      divs = null,
      useCapture = false;
  window.onload = function ()
  {
    divInfo = document.getElementById("divInfo");
    divs = document.getElementsByTagName('div');
    chCapture = document.getElementById("chCapture");
    chCapture.onclick = function ()
    {
      RemoveListeners();
      AddListeners();
    }
    Clear();
    AddListeners();
  }
  function RemoveListeners()
  {
    for (var i = 0; i < divs.length; i++)
    {
      var d = divs[i];
      if (d.id != "divInfo")
      {
        d.removeEventListener("click", OnDivClick, true);
        d.removeEventListener("click", OnDivClick, false);
      }
    }
  }
  function AddListeners()
  {
    for (var i = 0; i < divs.length; i++)
    {
      var d = divs[i];
      if (d.id != "divInfo")
      {
        d.addEventListener("click", OnDivClick, false);
        if (chCapture.checked)
          d.addEventListener("click", OnDivClick, true);
        d.onmousemove = function () { clear = true; };
      }
    }
  }
  function OnDivClick(e)
  {
    if (clear)
    {
      Clear();
      clear = false;
    }

    if (e.eventPhase == 2)
      e.currentTarget.style.backgroundColor = 'red';

    var level =
        e.eventPhase == 0 ? "none" :
        e.eventPhase == 1 ? "capturing" :
        e.eventPhase == 2 ? "target" :
        e.eventPhase == 3 ? "bubbling" : "error";
    divInfo.innerHTML += e.currentTarget.id + "; eventPhase: " + level + "<br/>";
  }
  function Clear()
  {
    for (var i = 0; i < divs.length; i++)
    {
      if (divs[i].id != "divInfo")
        divs[i].style.backgroundColor = (i & 1) ? "#f6eedb" : "#cceeff";
    }
    divInfo.innerHTML = '';
  }
  </script>
</body>
</html>
```

### Спецификация

[DOM Level 2 Events: Event.eventPhase](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-eventPhase)
