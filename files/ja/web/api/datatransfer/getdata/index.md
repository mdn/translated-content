---
title: DataTransfer.getData()
slug: Web/API/DataTransfer/getData
---

{{APIRef("HTML DOM")}}

**`DataTransfer.getData()`** メソッドは、指定した型のドラッグデータを（文字列として）受け取ります。ドラッグ操作がデータを含んでいない場合、このメソッドは空文字列を返します。

データ型は、例えば `text/plain` や `text/uri-list` です。

## 構文

```js
getData(format);
```

## 引数

- `format`
  - : 文字列で、受け取るデータの型を表します。

### 返値

文字列で、 `format` で指定した型のドラッグデータを表します。ドラッグ操作にデータがなかったり、 `format` で指定した型のデータがなかったりした場合、このメソッドは空文字列を返します。

### 注意事項

- データの利用可能性

  - [HTML5 Drag and Drop 仕様書](https://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#drag-data-store-mode)では、「ドラッグデータストアモード」が規定されています。
    これは、 **`DataTransfer.getData()`** が期待した値を返さないという、予期しない動作をする可能性があります。すべてのブラウザーがこの制限を強制しているわけではないからです。

    `dragstart` と `drop` イベントの処理中は、安全にデータにアクセスすることができます。それ以外のイベントでは、データは利用できないものと考えてください。それでも、項目とその形式を列挙することは可能です。

## 例

この例は、{{domxref("DataTransfer")}} オブジェクトの {{domxref("DataTransfer.getData","getData()")}} メソッドおよび {{domxref("DataTransfer.setData","setData()")}} メソッドの使い方を紹介します。

### HTML コンテンツ

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <span id="drag" draggable="true" ondragstart="drag(event)"
    >drag me to the other box</span
  >
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

### CSS コンテンツ

```css
#div1,
#div2 {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

### JavaScript

```js
function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = "green";
}

function drop(dropevent) {
  dropevent.preventDefault();
  const data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
  document.getElementById("drag").style.color = "black";
}
```

### 結果

{{EmbedLiveSample('Examples', 600) }}

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
