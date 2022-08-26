---
title: GlobalEventHandlers.ondragleave
slug: conflicting/Web/API/HTMLElement/dragleave_event
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
translation_of: Web/API/GlobalEventHandlers/ondragleave
original_slug: Web/API/GlobalEventHandlers/ondragleave
---
{{ApiRef("HTML DOM")}}

{{event("dragleave")}} イベント用の {{domxref("GlobalEventHandlers", "グローバルイベントハンドラ")}}。

## シンタックス

```
var dragleaveHandler = targetElement.ondragleave;
```

### 戻り値

- `dragleaveHandler`
  - : 要素 `targetElement` の _dragleave_ イベントハンドラ。

## 例

この例では、{{domxref("GlobalEventHandlers.ondragleave", "ondragleave")}} 属性ハンドラを使用して、要素の {{event("dragleave")}} イベントハンドラを設定することを示しています。

```js
<!DOCTYPE html>
<html lang=ja>
<title>グローバルイベント属性のドラッグ＆ドロップの使用例</title>
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
function dragstart_handler(ev) {
 console.log("dragStart");
 // ドラッグが開始されたことを示すために、ソース要素の境界線を変更します。
 ev.currentTarget.style.border = "dashed";
 ev.dataTransfer.setData("text", ev.target.id);
}

function dragover_handler(ev) {
 console.log("dragOver");
 // ドラッグオーバーイベントが発生したことを示すために、
 // ターゲット要素の背景色を変更します。
 ev.currentTarget.style.background = "lightblue";
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragenter_handler(ev) {
 console.log("dragEnter");
 // 入力イベントのソース要素の背景色を変更します。
 ev.currentTarget.style.background = "yellow";
}

function dragleave_handler(ev) {
 console.log("dragLeave");
 // ソース要素の背景色を白に戻します。
 ev.currentTarget.style.background = "white";
}

function dragend_handler(ev) {
 console.log("dragEnd");
 // ターゲット要素の背景色を変更して、
 // ドラッグが終了したことを視覚的に示すようにします。
 var el=document.getElementById("target");
 el.style.background = "pink";
}

function dragexit_handler(ev) {
 console.log("dragExit");
 // ソース要素の背景色を緑に戻して dragexit イベントを示します。
 ev.currentTarget.style.background = "green";
}

function init() {
 // ソースの enter/leave/end/exit イベントのハンドラを設定します。
 var el=document.getElementById("source");
 el.ondragenter = dragenter_handler;
 el.ondragleave = dragleave_handler;
 el.ondragend = dragend_handler;
 el.ondragexit = dragexit_handler;
}
</script>
<body onload="init();">
<h1><code>ondragenter</code>, <code>ondragleave</code>, <code>ondragend</code>, <code>ondragexit</code> の例</h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     この要素を選択し、ドロップゾーンにドラッグしてから選択を解除して要素を移動します。</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">ドロップゾーン</div>
</body>
</html>
```

## 仕様

| 仕様書                                                                                                       | ステータス                       | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "indices.html#ix-handler-ondragleave", "ondragleave")}} | {{Spec2("HTML WHATWG")}} |          |
| {{SpecName("HTML5.1", "index.html#ix-handler-ondragleave", "ondragleave")}}         | {{Spec2("HTML5.1")}}     | 初期定義 |

## ブラウザの互換性

{{Compat("api.GlobalEventHandlers.ondragleave")}}

## あわせて参照

- {{event("dragleave")}}
