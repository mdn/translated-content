---
title: GlobalEventHandlers.ondrop
slug: conflicting/Web/API/HTMLElement/drop_event
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
translation_of: Web/API/GlobalEventHandlers/ondrop
original_slug: Web/API/GlobalEventHandlers/ondrop
---
{{ApiRef("HTML DOM")}}

{{event("drop")}} イベント用の {{domxref("GlobalEventHandlers", "グローバルイベントハンドラ")}}。

## シンタックス

```
var dropHandler = targetElement.ondrop;
```

### 戻り値

- `dropHandler`
  - : `targetElement` 要素の _drop_ イベントハンドラ。

## 例

この例では、{{domxref("GlobalEventHandlers.ondrop", "ondrop")}} 属性を使用して、要素の {{event("drop")}} イベント・ハンドラを定義することを示しています。

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
 <div class="source">
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
| {{SpecName("HTML WHATWG", "indices.html#ix-handler-ondrop", "ondrop")}} | {{Spec2("HTML WHATWG")}} |          |
| {{SpecName("HTML5.1", "index.html#ix-handler-ondrop", "ondrop")}}         | {{Spec2("HTML5.1")}}     | 初期定義 |

## ブラウザの互換性

{{Compat("api.GlobalEventHandlers.ondrop")}}

## あわせて参照

- {{event("drop")}}
