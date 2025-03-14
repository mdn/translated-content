---
title: Event.type
slug: Web/API/Event/type
---

{{APIRef}}

**`Event.type`** - это доступное только для чтения свойство, возвращающее строку, содержащую тип события. Оно устанавливается в момент создания события и это имя обычно используется для ссылки на определённое событие.

Аргумент _`event`_ функций {{ domxref("EventTarget.addEventListener()") }} и {{ domxref("EventTarget.removeEventListener()") }} не чувствителен к регистру.

Для получения списка доступных типов событий смотри [event reference](/ru/docs/Web/Events)

## Синтаксис

```
event.type
```

## Примеры

```
var string = event.type;
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

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

## Спецификации

{{Specifications}}
