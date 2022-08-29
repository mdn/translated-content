---
title: GlobalEventHandlers.ondrag
slug: conflicting/Web/API/HTMLElement/drag_event
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
translation_of: Web/API/GlobalEventHandlers/ondrag
original_slug: Web/API/GlobalEventHandlers/ondrag
---
{{ApiRef("HTML DOM")}}

{{event("drag")}} イベント用の {{domxref("GlobalEventHandlers", "グローバルイベントハンドラ")}}。

## シンタックス

```
var dragHandler = targetElement.ondrag;
```

### 戻り値

- `dragHandler`
  - : 要素 `targetElement` の _drag_ イベントハンドラ。

## 例

この例では、_ondrag_ 属性ハンドラを使用して要素の _drag_ イベントハンドラを設定しています。

```js
<!DOCTYPE html>
<html lang=ja>
<title>ondrag グローバルイベント属性の使用例</title>
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
<h1><code>ondrag</code>, <code>ondrop</code>, <code>ondragstart</code>, <code>ondragover</code> の例</h1>
 <div> <!-- <div class="source"> -->
   <p id="source" ondrag="drag_handler(event);" ondragstart="dragstart_handler(event);" draggable="true">
     この要素を選択し、ドロップゾーンにドラッグしてから選択を解除して要素を移動します。</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">ドロップゾーン</div>
</body>
</html>
```

## 仕様

| 仕様書                                                                                           | ステータス                       | コメント |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "indices.html#ix-handler-ondrag", "ondrag")}} | {{Spec2("HTML WHATWG")}} |          |
| {{SpecName("HTML5.1", "index.html#ix-handler-ondrag", "ondrag")}}         | {{Spec2("HTML5.1")}}     | 初期定義 |

## ブラウザの互換性

{{Compat("api.GlobalEventHandlers.ondrag")}}

## あわせて参照

- {{event("drag")}}
