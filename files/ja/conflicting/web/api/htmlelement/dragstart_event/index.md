---
title: GlobalEventHandlers.ondragstart
slug: conflicting/Web/API/HTMLElement/dragstart_event
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
translation_of: Web/API/GlobalEventHandlers/ondragstart
original_slug: Web/API/GlobalEventHandlers/ondragstart
---
{{ApiRef("HTML DOM")}}

{{event("dragstart")}} イベントの {{domxref("GlobalEventHandlers","global event handler")}} 。

## 構文

```
var dragstartHandler = targetElement.ondragstart;
```

### 返り値

- `dragstartHandler`
  - : 要素 `targetElement` の _dragstart_ イベントハンドラ。

## 例

この例では、 {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} 属性ハンドラを使用して、要素 {{event("dragstart")}} イベントハンドラを設定する方法を示します。

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

## 仕様

| 仕様                                                                                                         | ステータス                       | 備考     |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "indices.html#ix-handler-ondragstart", "ondragstart")}} | {{Spec2("HTML WHATWG")}} |          |
| {{SpecName("HTML5.1", "index.html#ix-handler-ondragstart", "ondragstart")}}         | {{Spec2("HTML5.1")}}     | 初回定義 |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.ondragstart")}}

## 関連項目

- {{event("dragstart")}}
