---
title: DataTransfer.setData()
slug: Web/API/DataTransfer/setData
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.setData()`** メソッドは、ドラッグ操作の {{domxref("DataTransfer","drag data")}} に指定したデータと型を設定します。与えられた型のデータが存在しない場合、このデータはドラッグデータストアの末尾に加えられ、このような {{domxref("DataTransfer.types","types")}} リストの最後の項目は新しい型になります。与えられた型のデータが存在する場合、既存のデータが同じ位置で置き換えられます。同じ型のデータが置き換えられる時、{{domxref("DataTransfer.types","types")}} リストの並び順は変更されません。

データ型は、例えば `text/plain` や `text/uri-list` です。

## 構文

```js
setData(format, data);
```

### 引数

- `format`
  - : 文字列で、{{domxref("DataTransfer","ドラッグオブジェクト", "", 1)}}に追加するドラッグデータの型を表します。
- `data`
  - : 文字列で、{{domxref("DataTransfer","ドラッグオブジェクト", "", 1)}}に追加するデータを表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、{{domxref("DataTransfer")}} オブジェクトの {{domxref("DataTransfer.getData","getData()")}} メソッドおよび {{domxref("DataTransfer.setData","setData()")}} メソッド、{{domxref("DataTransfer.clearData","clearData()")}} メソッドの使い方を紹介します。

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer's setData(), getData() and clearData()</title>
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
<script>
function dragstart_handler(ev) {
 console.log("dragStart");
 // Change the source element's background color to signify drag has started
 ev.currentTarget.style.border = "dashed";
 // Set the drag's format and data. Use the event target's id for the data
 ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 // Get the data, which is the id of the drop target
 const data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // Clear the drag data cache (for all formats/types)
 ev.dataTransfer.clearData();
}
</script>
<body>
<h1>Examples of <code>DataTransfer</code>: <code>setData()</code>, <code>getData()</code>, <code>clearData()</code></h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
