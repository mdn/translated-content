---
title: DataTransfer.types
slug: Web/API/DataTransfer/types
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.types`** は読み取り専用プロパティで、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントで設定されたドラッグデータ形式の（文字列の）配列を返します。形式の順序は、ドラッグ操作に含まれるデータの順序と同じです。

形式は、データの型や形式を示す Unicode 文字列で、一般的には MIME タイプで指定されます。 MIME タイプでないいくつかの値も、レガシーな理由から特殊なケースに入れられます（たとえば "`text`" など）。

## 値

ドラッグ操作で使用されるデータ形式の配列。各形式は文字列です。ドラッグ操作にデータが含まれていない場合、このリストは空になります。ドラッグ操作にファイルが含まれている場合は、その型の 1 つが文字列 `Files` になります。

## 例

この例では、`types` と {{domxref("DataTransfer.items", "items")}} プロパティを使用しています。

```js
<!DOCTYPE html>
<html lang=en>
<title>DataTransfer.{types,items} プロパティの例</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart: target.id = " + ev.target.id);
 // ドラッグ内容にこの要素の ID を追加し、ドロップハンドラーがどの要素を
 // ツリーに追加すればよいかを知ることができるようにします。
 ev.dataTransfer.setData("text/plain", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: target.id = " + ev.target.id);
 ev.preventDefault();
 // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します。
 const data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // それぞれの形式を表示する
 if (ev.dataTransfer.types != null) {
   for (let i=0; i < ev.dataTransfer.types.length; i++) {
     console.log("... types[" + i + "] = " + ev.dataTransfer.types[i]);
   }
 }
 // それぞれの項目の "kind" と "type" を表示する
 if (ev.dataTransfer.items != null) {
   for (let i=0; i < ev.dataTransfer.items.length; i++) {
     console.log("... items[" + i + "].kind = " + ev.dataTransfer.items[i].kind + " ; type = " + ev.dataTransfer.items[i].type);
   }
 }
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
 // dropEffect を move に設定する
 ev.dataTransfer.dropEffect = "move"
}
</script>
<body>
<h1>Examples of <code>DataTransfer</code>.{<code>types</code>, <code>items</code>} properties</h1>
 <ul>
   <li id="i1" ondragstart="dragstart_handler(event);" draggable="true">項目 1 をドロップゾーンへドラッグしてください</li>
   <li id="i2" ondragstart="dragstart_handler(event);" draggable="true">項目 2 をドロップゾーンへドラッグしてください</li>
 </ul>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">ドロップゾーン</div>
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
- [複数の項目のドラッグ＆ドロップ](/ja/docs/orphaned/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
