---
title: GlobalEventHandlers.ondragstart
slug: Web/API/HTMLElement/dragstart_event
---

{{ApiRef("HTML DOM")}}

{{domxref("GlobalEventHandlers","global event handler")}} для события {{event("dragstart")}}.

## Синтаксис

```
var dragstartHandler = targetElement.ondragstart;
```

### Возвращаемое значение

- `dragstartHandler`
  - : Обработчик событий _dragstart_ для элемента `targetElement`.

## Пример

Этот пример демонстрирует использование {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} атрибута обработчика для установки обработчика событий элемента {{event("dragstart")}}.

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of using the ondrag Global Event Attribute</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
</style>
</head>
<script>
function drag_handler(ev) {
 console.log("Drag");
}

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
}

function drop_handler(ev) {
 console.log("Drop");
 ev.currentTarget.style.background = "lightyellow";

 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
</script>
<body>
<h1>Examples of <code>ondrag</code>, <code>ondrop</code>, <code>ondragstart</code>, <code>ondragover</code></h1>
 <div>
   <p id="source" ondrag="drag_handler(event);" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{event("dragstart")}}
